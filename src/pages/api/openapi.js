export const spec = {
  "openapi" : "3.0.0",
  "info" : {
    "title" : "FlyBase.org API",
    "description" : "API access to various FlyBase.org data sets",
    "contact" : {
      "url" : "http://flybase.org/contact/email"
    },
    "license" : {
      "name" : "Apache 2.0",
      "url" : "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version" : "1.0"
  },
  "servers" : [ {
    "url" : "http://api.flybase.org/api/v1.0/",
    "description" : "FlyBase API"
  } ],
  "tags" : [ {
    "name" : "Domains",
    "description" : "Endpoints for retrieving protein domain information"
  }, {
    "name" : "Chado",
    "description" : "Endpoints for retrieving ChadoXML"
  }, {
    "name" : "Datasets",
    "description" : "Endpoints for retrieving FlyBase Dataset objects."
  }, {
    "name" : "Gene Summaries",
    "description" : "Endpoints for retrieving gene summary information."
  }, {
    "name" : "HitList",
    "description" : "Endpoints for retrieving hitlist information."
  }, {
    "name" : "Updates",
    "description" : "Endpoints for retrieving recent update information."
  }, {
    "name" : "Ontology",
    "description" : "Endpoints for retrieving ontology related data."
  }, {
    "name" : "Sequence",
    "description" : "Endpoints for retrieving sequence related data."
  }, {
    "name" : "Species",
    "description" : "Endpoints for retrieving species for FlyBase objects."
  } ],
  "paths" : {
    "/species/lookup/{flybaseIds}" : {
      "get" : {
        "tags" : [ "Species" ],
        "summary" : "insert summary here",
        "description" : "insert description here",
        "operationId" : "speciesLookupById",
        "parameters" : [ {
          "name" : "flybaseIds",
          "in" : "path",
          "description" : "One or more FlyBase IDs delimited by commas.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "FBgn0000490,FBgn0013765"
        } ],
        "responses" : {
          "200" : {
            "description" : "Insert description here.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/SpeciesLookupResult"
                }
              }
            }
          }
        }
      }
    },
    "/species/lookup" : {
      "post" : {
        "tags" : [ "Species" ],
        "summary" : "insert summary here",
        "description" : "insert description here",
        "operationId" : "speciesBulkLookupById",
        "requestBody" : {
          "description" : "Description here",
          "content" : {
            "application/x-www-form-urlencoded" : {
              "schema" : {
                "$ref" : "#/components/schemas/body"
              }
            }
          },
          "required" : true
        },
        "responses" : {
          "200" : {
            "description" : "Insert description here.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/SpeciesLookupResult"
                }
              }
            }
          }
        }
      }
    },
    "/sequence/region/{species}/{location}" : {
      "get" : {
        "tags" : [ "Sequence" ],
        "summary" : "Fetch sequence data by sequence location",
        "description" : "Sequence data endpoint.",
        "operationId" : "getSequenceDataByLocation",
        "parameters" : [ {
          "name" : "species",
          "in" : "path",
          "description" : "The 4 letter FlyBase species abbreviation.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "dmel"
        }, {
          "name" : "location",
          "in" : "path",
          "description" : "The genome region to fetch.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "2L:100000..101000"
        }, {
          "name" : "strand",
          "in" : "query",
          "description" : "The sequence strand to retrieve sequence data for.",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "string",
            "enum" : [ "plus", "minus" ]
          },
          "example" : "minus"
        }, {
          "name" : "padding",
          "in" : "query",
          "description" : "Additional 5 prime and 3 prime flanking sequence to add to the specified region.",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "integer",
            "format" : "int32"
          },
          "example" : 100
        } ],
        "responses" : {
          "200" : {
            "description" : "Reponse for the Sequence data endpoint.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/SequenceDataResult"
                }
              }
            }
          }
        }
      }
    },
    "/sequence/region/bulk" : {
      "post" : {
        "tags" : [ "Sequence" ],
        "summary" : "Fetch sequence data by sequence location",
        "description" : "Sequence data endpoint.",
        "operationId" : "getSequenceDataByLocationBulk",
        "requestBody" : {
          "description" : "Bulk sequence endpoint request body",
          "content" : {
            "application/x-www-form-urlencoded" : {
              "schema" : {
                "$ref" : "#/components/schemas/body_1"
              }
            }
          },
          "required" : true
        },
        "responses" : {
          "200" : {
            "description" : "Reponse for the Sequence data endpoint.",
            "content" : {
              "text/plain" : {
                "schema" : {
                  "type" : "string",
                  "format" : "binary"
                }
              }
            }
          }
        }
      }
    },
    "/sequence/id/{flybaseId}" : {
      "get" : {
        "tags" : [ "Sequence" ],
        "summary" : "Fetch sequence data for FlyBase objects.",
        "description" : "Sequence data endpoint.",
        "operationId" : "getSequenceData",
        "parameters" : [ {
          "name" : "flybaseId",
          "in" : "path",
          "description" : "The FlyBase ID to fetch sequence data for.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "FBgn0000490"
        } ],
        "responses" : {
          "200" : {
            "description" : "Reponse for the Sequence data endpoint.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/SequenceDataResult"
                }
              }
            }
          }
        }
      }
    },
    "/sequence/id/{flybaseId}/{subType}" : {
      "get" : {
        "tags" : [ "Sequence" ],
        "summary" : "Fetch sequence data for FlyBase objects.",
        "description" : "Sequence data endpoint.",
        "operationId" : "getSequenceDataSubType",
        "parameters" : [ {
          "name" : "flybaseId",
          "in" : "path",
          "description" : "The FlyBase ID to fetch sequence data for.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "FBgn0000490"
        }, {
          "name" : "subType",
          "in" : "path",
          "description" : "The data class sub type to fetch.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string",
            "enum" : [ "FBgn", "FBtr", "FBpp", "FBcl", "FBsf", "FBti", "FBtp", "exon", "intron", "five_prime_utr", "three_prime_utr", "CDS" ]
          },
          "example" : "FBpp"
        } ],
        "responses" : {
          "200" : {
            "description" : "Reponse for the Sequence data endpoint.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/SequenceDataResult"
                }
              }
            }
          }
        }
      }
    },
    "/sequence/id/bulk" : {
      "post" : {
        "tags" : [ "Sequence" ],
        "summary" : "Fetch sequence data for FlyBase objects.",
        "description" : "Sequence data endpoint.",
        "operationId" : "getBulkIdSequenceData",
        "requestBody" : {
          "description" : "Bulk sequence endpoint request body",
          "content" : {
            "application/x-www-form-urlencoded" : {
              "schema" : {
                "$ref" : "#/components/schemas/body_2"
              }
            }
          },
          "required" : true
        },
        "responses" : {
          "200" : {
            "description" : "Reponse for the Sequence data endpoint.",
            "content" : {
              "text/plain" : {
                "schema" : {
                  "type" : "string",
                  "format" : "binary"
                }
              }
            }
          }
        }
      }
    },
    "/ribbon/go/{goDomain}/{fbgnId}" : {
      "get" : {
        "tags" : [ "Ontology" ],
        "summary" : "Fetch GO slims for a FlyBase gene.",
        "description" : "Fetches the GO slim for a gene from the specificed GO domain.",
        "operationId" : "getGoRibbonSlim",
        "parameters" : [ {
          "name" : "goDomain",
          "in" : "path",
          "description" : "The GO domain to retrieve a slim for.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string",
            "enum" : [ "biological_process", "cellular_component", "molecular_function" ]
          },
          "example" : "biological_process"
        }, {
          "name" : "fbgnId",
          "in" : "path",
          "description" : "The FlyBase gene ID to retrieve a slim for.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "FBgn0000490"
        } ],
        "responses" : {
          "200" : {
            "description" : "Reponse for the FlyBase GO Slim/Ribbon endpoint.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/GoSlimResult"
                }
              }
            }
          }
        }
      }
    },
    "/updates/{flybaseId}" : {
      "get" : {
        "tags" : [ "HitList", "Updates" ],
        "summary" : "Fetch recent update information.",
        "description" : "Fetches the recent update information for a given FlyBase object.  Recent updates report new connections between the current and previous release.",
        "operationId" : "getRecentUpdates",
        "parameters" : [ {
          "name" : "flybaseId",
          "in" : "path",
          "description" : "A FlyBase ID.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "FBgn0000490"
        } ],
        "responses" : {
          "200" : {
            "description" : "Response for the FlyBase recent update endpoint.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/RecentUpdatesResult"
                }
              }
            }
          }
        }
      }
    },
    "/hitlist/fetch/{flybaseIds}" : {
      "get" : {
        "tags" : [ "HitList" ],
        "summary" : "Fetch FlyBase HitList information",
        "description" : "Fetches the HitList object for a given FlyBase object.",
        "operationId" : "getFlyBaseHitList",
        "parameters" : [ {
          "name" : "flybaseIds",
          "in" : "path",
          "description" : "One or more FlyBase IDs delimited by commas.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "FBgn0000490,FBgn0013765"
        } ],
        "responses" : {
          "200" : {
            "description" : "Repsonse for the FlyBase HitList endpoint",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/HitListResult"
                }
              }
            }
          }
        }
      }
    },
    "/hitlist/fetch" : {
      "post" : {
        "tags" : [ "HitList" ],
        "summary" : "Fetch FlyBase HitList information",
        "description" : "Fetches the HitList object for a given FlyBase object.",
        "operationId" : "getFlyBaseHitListBulk",
        "requestBody" : {
          "description" : "blah",
          "content" : {
            "application/x-www-form-urlencoded" : {
              "schema" : {
                "$ref" : "#/components/schemas/body_3"
              }
            }
          },
          "required" : true
        },
        "responses" : {
          "200" : {
            "description" : "Repsonse for the FlyBase HitList endpoint",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/HitListResult"
                }
              }
            }
          }
        }
      }
    },
    "/gene/summaries/auto/{fbgnId}" : {
      "get" : {
        "tags" : [ "Gene Summaries" ],
        "summary" : "Fetch auto gene summaries.",
        "description" : "Fetches the automatically generated summary for a given gene.",
        "operationId" : "getAutoGeneSummary",
        "parameters" : [ {
          "name" : "fbgnId",
          "in" : "path",
          "description" : "The FlyBase Gene ID (FBgn#)",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "FBgn0000490"
        } ],
        "responses" : {
          "200" : {
            "description" : "Repsonse for the automatically generated summary endpoint.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/GeneSummaryResult"
                }
              }
            }
          }
        }
      }
    },
    "/downloads/FBlc/associated_data/{fblcId}" : {
      "get" : {
        "tags" : [ "Datasets" ],
        "summary" : "Fetch associated data for FlyBase Datasets.",
        "description" : "Fetchs lists of strains, cell lines, and features that are associated with a FlyBase dataset object.",
        "operationId" : "getFblcAssociatedData",
        "parameters" : [ {
          "name" : "fblcId",
          "in" : "path",
          "description" : "The FlyBase Dataset ID (FBlc#)",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "FBlc0000309"
        }, {
          "name" : "assoc_type",
          "in" : "query",
          "description" : "Filter by strains, cell lines, or features.",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "string",
            "enum" : [ "features", "strains", "cell_lines" ]
          },
          "example" : "features"
        }, {
          "name" : "feature_type",
          "in" : "query",
          "description" : "The FlyBase data class to restrict feature type results to.",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "string"
          },
          "example" : "FBgn"
        } ],
        "responses" : {
          "200" : {
            "description" : "Reponse for the Dataset associated data endpoint.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/DatasetAssociatedDataResult"
                }
              }
            }
          }
        }
      }
    },
    "/chadoxml/{flyBaseId}" : {
      "get" : {
        "tags" : [ "Chado" ],
        "summary" : "Fetch ChadoXML for a FlyBase object by ID.",
        "description" : "Given a current and valid FlyBase ID, returns ChadoXML data.\n",
        "operationId" : "getChadoXmlById",
        "parameters" : [ {
          "name" : "flyBaseId",
          "in" : "path",
          "description" : "The FlyBase ID to fetch data for.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          },
          "example" : "FBgn0000490"
        } ],
        "responses" : {
          "200" : {
            "description" : "ChadoXML for a given FlyBase object.",
            "content" : {
              "application/xml" : {
                "schema" : {
                  "type" : "object"
                }
              }
            }
          },
          "404" : {
            "description" : "Invalid ID."
          }
        }
      }
    },
    "/domain/{flyBaseGeneId}" : {
      "get" : {
        "tags" : [ "Domains" ],
        "summary" : "Gets all domains for a given gene.",
        "description" : "Given a FlyBase gene ID (FBgn#), return a list of polypeptide domains for the longest polypeptide isoform of the gene.\n",
        "operationId" : "getDomainsByGeneId",
        "parameters" : [ {
          "name" : "flyBaseGeneId",
          "in" : "path",
          "description" : "The FlyBase gene ID to fetch a domain for.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Protein domains for the longest polypeptide isoform of the given gene.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/DomainByGeneResult"
                }
              }
            }
          },
          "404" : {
            "description" : "Invalid ID."
          }
        }
      }
    },
    "/domain/{flyBasePolypeptideId}" : {
      "get" : {
        "tags" : [ "Domains" ],
        "summary" : "Gets all domains for a given polypeptide.",
        "description" : "Given a FlyBase polypeptide ID (FBpp#), return a list of domains for the polypeptide\n",
        "operationId" : "getDomainsByPolypeptideId",
        "parameters" : [ {
          "name" : "flyBasePolypeptideId",
          "in" : "path",
          "description" : "The FlyBase polypeptide ID to fetch a domain for.",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Protein domains for the given polypeptide.",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/DomainByPolypeptideResult"
                }
              }
            }
          },
          "404" : {
            "description" : "Invalid ID."
          }
        }
      }
    }
  },
  "components" : {
    "schemas" : {
      "BaseResultSet" : {
        "type" : "object",
        "properties" : {
          "api_version" : {
            "type" : "string"
          },
          "data_version" : {
            "type" : "string"
          },
          "query_url" : {
            "type" : "string",
            "format" : "url"
          },
          "query_time" : {
            "type" : "string",
            "format" : "timestamp"
          },
          "data_provider" : {
            "type" : "string"
          }
        }
      },
      "DomainByGeneResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/BaseResultSet"
        }, {
          "type" : "object",
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/GeneDomain"
              }
            }
          }
        } ]
      },
      "DomainByPolypeptideResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/BaseResultSet"
        }, {
          "type" : "object",
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/PolypeptideDomain"
              }
            }
          }
        } ]
      },
      "DatasetAssociatedDataResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/BaseResultSet"
        }, {
          "type" : "object",
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/AssociatedDataResult"
              }
            }
          }
        } ]
      },
      "AssociatedDataResult" : {
        "type" : "object",
        "properties" : {
          "id" : {
            "type" : "string"
          },
          "symbol" : {
            "type" : "string"
          },
          "cell_lines" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/SymbolId"
            }
          },
          "features" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/SymbolId"
            }
          },
          "strains" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/SymbolId"
            }
          }
        }
      },
      "SymbolId" : {
        "type" : "object",
        "properties" : {
          "id" : {
            "type" : "string"
          },
          "symbol" : {
            "type" : "string"
          }
        }
      },
      "DomainRegion" : {
        "type" : "object",
        "properties" : {
          "source" : {
            "type" : "string"
          },
          "abbrev" : {
            "type" : "string"
          },
          "name" : {
            "type" : "string"
          },
          "start" : {
            "type" : "integer",
            "format" : "int32"
          },
          "end" : {
            "type" : "integer",
            "format" : "int32"
          },
          "pfam" : {
            "type" : "string"
          },
          "interpro" : {
            "type" : "string"
          },
          "classification" : {
            "type" : "string"
          }
        }
      },
      "GeneDomain" : {
        "type" : "object",
        "properties" : {
          "gene_id" : {
            "type" : "string"
          },
          "gene_symbol" : {
            "type" : "string"
          },
          "proteins" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/PolypeptideDomain"
            }
          }
        }
      },
      "PolypeptideDomain" : {
        "type" : "object",
        "properties" : {
          "protein_symbol" : {
            "type" : "string"
          },
          "protein_id" : {
            "type" : "string"
          },
          "length" : {
            "type" : "integer",
            "format" : "int32"
          },
          "regions" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/DomainRegion"
            }
          }
        }
      },
      "GeneSummaryResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/BaseResultSet"
        }, {
          "type" : "object",
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/GeneSummary"
              }
            }
          }
        } ]
      },
      "GeneSummary" : {
        "type" : "object",
        "properties" : {
          "summary" : {
            "type" : "string",
            "enum" : [ "auto" ]
          },
          "type" : {
            "type" : "string"
          },
          "id" : {
            "type" : "string"
          }
        }
      },
      "HitListResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/BaseResultSet"
        }, {
          "type" : "object",
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "type" : "object"
              }
            },
            "counts" : {
              "type" : "object"
            }
          }
        } ]
      },
      "RecentUpdatesResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/BaseResultSet"
        }, {
          "type" : "object",
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "type" : "object"
              }
            }
          }
        } ]
      },
      "GoSlimResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/BaseResultSet"
        }, {
          "type" : "object",
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "type" : "object"
              }
            }
          }
        } ]
      },
      "Fasta" : {
        "type" : "object",
        "properties" : {
          "id" : {
            "type" : "string"
          },
          "description" : {
            "type" : "string"
          },
          "sequence" : {
            "type" : "string"
          }
        }
      },
      "SequenceDataResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/BaseResultSet"
        }, {
          "type" : "object",
          "properties" : {
            "num_fetched" : {
              "type" : "integer",
              "format" : "int32"
            },
            "not_found" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "result" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Fasta"
              }
            }
          }
        } ]
      },
      "SpeciesLookupResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/BaseResultSet"
        }, {
          "type" : "object",
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/SpeciesLookup"
              }
            }
          }
        } ]
      },
      "SpeciesLookup" : {
        "type" : "object",
        "properties" : {
          "genus" : {
            "type" : "string"
          },
          "id" : {
            "type" : "string"
          },
          "species" : {
            "type" : "string"
          },
          "abbreviation" : {
            "type" : "string"
          }
        }
      },
      "body" : {
        "required" : [ "ids" ],
        "type" : "object",
        "properties" : {
          "ids" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        }
      },
      "body_1" : {
        "required" : [ "regions", "species" ],
        "type" : "object",
        "properties" : {
          "species" : {
            "type" : "string"
          },
          "regions" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "strand" : {
            "type" : "string",
            "enum" : [ "plus", "minus" ]
          },
          "padding" : {
            "type" : "integer",
            "format" : "int32"
          }
        }
      },
      "body_2" : {
        "required" : [ "ids" ],
        "type" : "object",
        "properties" : {
          "ids" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "type" : {
            "type" : "string",
            "enum" : [ "FBgn", "FBtr", "FBpp", "FBcl", "FBsf", "FBti", "FBtp", "exon", "intron", "five_prime_utr", "three_prime_utr", "CDS" ]
          }
        }
      },
      "body_3" : {
        "required" : [ "ids" ],
        "type" : "object",
        "properties" : {
          "ids" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        }
      }
    }
  }
}