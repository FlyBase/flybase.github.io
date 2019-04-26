---
id: functions
title: FlyBase Chado Functions
sidebar_label: FlyBase Specific
---

## Description

This page describes custom database functions that FlyBase has added to Chado to simplify
working with FlyBase data.  For general Chado functions please
refer to the [GMOD Chado documentation](http://gmod.org/wiki/Chado_Manual#DBMS_Functions).

## Source Code

* [chado/schema](https://github.com/FlyBase/chado/tree/master/schema) (GitHub)

## ID Utilities

### data_class

`flybase.data_class(FlyBase_ID)`

Takes a FlyBase ID and returns the 4 letter FlyBase data class.

e.g. FBgn0000490 -> FBgn

```sql
select flybase.data_class('FBgn0000490');
```

### update_ids

`flybase.update_ids(FlyBase_ID)`

Takes a single ID or an array of FlyBase Gene IDs (FBgn) and validates them against the current
database.  A 3 column result set is returned containing the submitted ID, the updated ID, and
an update status.

#### Update status
Status | Description
------ | -----------
current | Submitted ID is current, there are no changes.
updated | The submitted ID is not current but the ID was cleanly updated to the current ID.
split | The submitted ID is not current and there are multiple possible new IDs.

An ID that is involved in a split will have two or more entries in the result.  One for
each of the possible new gene IDs.

#### Parameters

Name | Description | Required | Default
------------ | ------------- | --------- | -----------
FlyBase_ID | One ID or an array of IDs | Y | N/A

#### Returns

Name | Description
------------ | -------------
submitted_id | The ID originally submitted.
updated_id | The updated ID
status | Update status (current, updated, split)

```sql
select * from flybase.update_ids('FBgn0000490');
select * from flybase.update_ids(ARRAY['FBgn0000490','FBgn0002675','FBgn0030866','FBgn0031810']);
```

## Symbols and Names

### current_symbol

`flybase.current_symbol(FlyBase_ID)`

Takes a current FlyBase ID and returns the current symbol.
Any current FlyBase data class ID can be passed in regardless of the hub table
that is used for that data class.

```sql
select flybase.current_symbol('FBgn0000490');
```

```sql
select flybase.current_symbol('FBgg0000546');
```

```sql
select f.uniquename, flybase.current_symbol(f.uniquename)
  from feature f
  where f.uniquename ~ '^FBgn[0-9]+$'
    and f.is_obsolete=false
limit 5;
```

### current_fullname

`flybase.current_fullname(FlyBase_ID)`

Takes a current FlyBase ID and returns the current full name.
Any current FlyBase data class ID can be passed in regardless of the hub table
that is used for that data class.

```sql
select flybase.current_fullname('FBgn0000490');
```

```sql
select flybase.current_fullname('FBgg0000546');
```

```sql
select f.uniquename, flybase.current_fullname(f.uniquename)
  from feature f
  where f.uniquename ~ '^FBgn[0-9]+$'
    and f.is_obsolete=false
limit 5;
```

### current_synonym

`flybase.current_synonym(FlyBase_ID, synonym_type)`

Takes a current FlyBase ID and a synonym type and returns the current synonym.synonym_sgml
value.

```sql
select flybase.current_synonym('FBgn0000490','symbol'),
       flybase.current_synonym('FBgn0000490','fullname');
```

## Relationships

These functions are for querying object relationships using tables such as `feature_relationship`.

### get_feature_relationship

`flybase.get_feature_relationship(FlyBase_ID(s), relationship_type, data_class, relationship_direction)`

Takes one or more FlyBase IDs, relationship type(s), data class(es) (optional), and relationship direction (optional)
and returns the related entities.

This can be used to fetch all transcripts of a gene, all alleles of a gene, orthologs, etc.

#### Parameters
Name | Description | Required | Default
------------ | ------------- | --------- | -----------
FlyBase_ID | One ID or an array of IDs to find other related entities for. | Y | N/A
relationship_type | One or more `cvterm.name` values used to type the relationship via `feature_relationship.type_id`.| Y | N/A
data_class | One or more FlyBase data classes to limit the results to.| N | all data classes
relationship_direction | The direction you wish to fetch objects for ('object' or 'subject'). | N | subject

Multiple values in the relationship_type and data_class parameters need to be delimited with a pipe '|'
character.

e.g. 'associated_with|partof'  or 'FBal|FBtp|FBti'

#### Returns

Name | Description
------------ | -------------
feature_relationship_id | Same as `feature_relationship` table
object_id | Same as `feature_relationship` table
subject_id | Same as `feature_relationship` table
uniquename | `feature.uniquename` of the related entity.
symbol | Current symbol of the related entity.
rank | Same as `feature_relationship` table.
value | Same as `feature_relationship` table.
type | The corresponding `cvterm.name` value for the `feature_relationship.type_id` field.

```sql
-- Single IDs
select * from flybase.get_feature_relationship('FBgn0000490', 'associated_with|partof', 'FBti|FBtr');
select * from flybase.get_feature_relationship('FBgn0000490', 'alleleof', 'FBal');
select * from flybase.get_feature_relationship('FBgn0000490', 'alleleof', 'FBal', 'subject');
select * from flybase.get_feature_relationship('FBgn0000490', 'orthologous_to', 'FBgn|FBog');

-- Multiple IDs
-- Using an array literal
select *
   from flybase.get_feature_relationship(
     array['FBgn0000490','FBgn0013765'],
     'alleleof',
     NULL,
     'subject')
;
-- From a query result.
select *
   from flybase.get_feature_relationship(
     array(
       select f.uniquename
         from feature f
         where uniquename in ('FBgn0000490','FBgn0013765')
     ),
     'alleleof',
     NULL,
     'subject')
;
```