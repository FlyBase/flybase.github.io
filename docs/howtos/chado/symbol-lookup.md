---
id: symbol-lookup
title: Symbol Lookup with Chado
sidebar_label: Symbol Lookup
---

## Introduction

In this HowTo, we are going cover how you can use Chado to get the current
symbol for a FlyBase object.  A FlyBase object can be a gene, transcript, poplypeptide, insertion,
etc.

If all you want is the quickest method to get the current symbol,
checkout the [flybase.current_symbol](chado/functions.md#current_symbol) function.

## Requirements

* A client capable of connecting to our [public PostgreSQL Chado](chado/index.md#public-database) database.
* Basic understanding of SQL.

## Schema Structure

The following chado tables are used in this HowTo:

* [synonym](http://gmod.org/wiki/Chado_Tables#Table:_synonym)
* [cvterm](http://gmod.org/wiki/Chado_Tables#Table:_cvterm)
* [feature_synonym](http://gmod.org/wiki/Chado_Tables#Table:_feature_synonym)
* [feature](http://gmod.org/wiki/Chado_Tables#Table:_feature)

## Synonym Table

In Chado, symbols are stored in the `synonym` table along with other types of names such as
full names.  In order to distinguish different types of entries in the `synonym` table from
each other, we associate each entry with a type in the `cvterm` table via the `synonym.type_id` field.
Every symbol entry in the `synonym` table gets assigned a `type_id` that corresponds to the `symbol`
`cvterm.name` entry.

A query to fetch the first 10 symbols from this table looks like this:

```sql
select s.name, s.synonym_sgml
  from synonym s join cvterm cvt on s.type_id=cvt.cvterm_id
  where cvt.name='symbol'
limit 10
;
```

**Example output:**
```bash
       name       |      synonym_sgml       
------------------+-------------------------
 Dok-RA           | Dok-RA
 TRAM-RB          | TRAM-RB
 ...
 CG33070[EY06108] | CG33070<up>EY06108</up>
 betaTub60D[sk]   | βTub60D<up>sk</up>
```


### `name` vs `synonym_sgml`

As you can see the `synonym` table has two fields for storing the symbol, `name`
`synonym_sgml`.  At FlyBase, we store an ASCII form of the symbol in `synonym.name` and
a UTF-8 version of the symbol in `synonym.synonym_sgml`.  The main differences you will notice
between `name` and `synonym_sgml` are transliterated greek characters (beta) vs UTF-8 greek characters
(β) and square brackets `[]` or `[[]]` vs curator superscript/subscript notation `<up></up>`
or `<down></down>` respectively.

## Gene Symbols

To get symbols for genes we have to make a connection between the table being used to store
genes and the `synonym` table.  For that we start with the `feature` table, which is the central
hub table for genes in FlyBase.  Then in order to get to the `synonym` table we have to utilize
a linker table called `feature_synonym`.  This linker table allows us to attach more than one
symbol and attribution to the association of the gene and symbol.

Putting this together with the previous query the table path now looks something like this:

`feature -> feature_synonym -> synonym -> cvterm`

### Gene Symbol SQL

Putting the above into SQL form, you get the following query for the gene FBgn0004907.

```sql
select f.uniquename, s.synonym_sgml, fs.is_current
  from feature f join feature_synonym fs on (f.feature_id=fs.feature_id)
                 join synonym s on (fs.synonym_id=s.synonym_id)
                 join cvterm cvt on (s.type_id=cvt.cvterm_id)
  where f.uniquename='FBgn0004907'
    and cvt.name='symbol'
;
```

```bash
...
 FBgn0004907 | 14-3-3zeta   | f
 FBgn0004907 | 14-3-3zeta   | f
 FBgn0004907 | 1433Z        | f
 FBgn0004907 | Leo          | f
(182 rows)
```

#### 182 Rows -  What is going on?!

There are a couple of issues here.  First, take a look at the results for the `feature_synonym.is_current`
column, we have a mix of `true` and `false` in there.  This field is used to distinguish symbols that
are current (gene symbol) and those that are no longer the current symbol (gene symbol synonym).  In Drosophila
nomenclature, a gene can have only one valid symbol, all others are considered symbol synonyms.  Symbols
that have `is_current=true` are the current symbol and `is_current=false` are symbol synonyms.

#### OK, I've filtered on `is_current=true` but I'm still seeing duplicates

The second issue here is that each use of the current symbol is being attributed to a specific publication
via `feature_synonym.pub_id` which results in repetitive results for each attribution.  Filtering for
`is_current` and `pub_id` we get the following final form.

```sql
select distinct f.uniquename, s.synonym_sgml
  from feature f join feature_synonym fs on (f.feature_id=fs.feature_id)
                 join synonym s on (fs.synonym_id=s.synonym_id)
                 join cvterm cvt on (s.type_id=cvt.cvterm_id)
  where f.uniquename='FBgn0004907'
    and cvt.name='symbol'
    and fs.is_current=true
;
```
```sql
 uniquename  | synonym_sgml 
-------------+--------------
 FBgn0004907 | 14-3-3ζ
(1 row)
```

## Other Symbols

The above query will work for the majority of objects in FlyBase because they use the
`feature` table as a hub.  However, there are some exceptions for FlyBase objects that
use other tables as their hub table.  Other hub tables include `grp` (Gene Groups), `strain` (Strains),
`cell_line` (Cell Lines), `humanhealth` (Human Disease), and `library` (Library Metadata).

For these other tables you will need to change the hub and linker tables
that are used and some of the ID fields used for joining.
For example, this is what a query for a Gene Group would look like after
switching to using the `grp` as the hub table and `grp_synonym` as the linker table.

```sql
select distinct gg.uniquename, s.synonym_sgml
  from grp gg join grp_synonym gs on (gg.grp_id=gs.grp_id)
                 join synonym s on (gs.synonym_id=s.synonym_id)
                 join cvterm cvt on (s.type_id=cvt.cvterm_id)
  where gg.uniquename='FBgg0000546'
    and cvt.name='symbol'
    and gs.is_current=true
;
```

## Chado Function

Since this is a commonly used query when working with FlyBase data we have added some custom FlyBase 
functions to make this a bit easier.

* [FlyBase Symbol Functions for Chado](chado/functions.md#symbols-and-names)
