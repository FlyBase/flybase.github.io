---
id: index
title: Chado General Information
sidebar_label: General Information
---

## Background

[Chado](http://gmod.org/wiki/Chado) is a relational database schema for managing
biological data that was created by [FlyBase](http://flybase.org) in 2006.
It is currently developed and maintained by the [GMOD](http://gmod.org) organization.

## Database Dumps

PostgreSQL database dumps of the FlyBase Chado database are available for every release of FlyBase from our FTP site.

* [ftp://ftp.flybase.org/releases/current/psql/](ftp://ftp.flybase.org/releases/current/psql/)

### Steps to load

This procedure assumes that you have enough disk space to hold the downloaded dump files and
the PostgreSQL database files.  You should expect to use ~200 GB of disk space for this procedure.

1. Download all database dump files from the FTP site.
1. Create your PostgreSQL database using `createdb`
1. Load the dump file into your local database instance.
1. Vacuum your database.

Example:
```bash
wget ftp://ftp.flybase.org/releases/current/psql/*.gz.*
createdb -E UTF-8 my_flybase
cat FB2018_03.sql.gz.00 FB2018_03.sql.gz.01 FB2018_03.sql.gz.02 FB2018_03.sql.gz.03 FB2018_03.sql.gz.04 FB2018_03.sql.gz.05 | gunzip | psql my_flybase 
vacuumdb -f -z -v my_flybase
```

## Public Database

If you only need occasional access to the FlyBase Chado database and performance is not a primary concern
you can access our public Chado instance via any SQL client that supports PostgreSQL.

 **hostname:** chado.flybase.org

 **user:** flybase

 **password:** &lt;none&gt;

 **database:** flybase

 **port:** 5432

Example using the command line PostgreSQL client `psql`:

```bash
psql -h chado.flybase.org flybase flybase
```
