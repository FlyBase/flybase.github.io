(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"spec",function(){return s});var s={openapi:"3.0.0",info:{title:"FlyBase.org API",description:"API access to various FlyBase.org data sets",contact:{url:"http://flybase.org/contact/email"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.0"},servers:[{url:"http://api.flybase.org/api/v1.0/",description:"FlyBase API"}],tags:[{name:"Domains",description:"Endpoints for retrieving protein domain information"},{name:"Chado",description:"Endpoints for retrieving ChadoXML"},{name:"Datasets",description:"Endpoints for retrieving FlyBase Dataset objects."},{name:"Gene Summaries",description:"Endpoints for retrieving gene summary information."},{name:"HitList",description:"Endpoints for retrieving hitlist information."},{name:"Updates",description:"Endpoints for retrieving recent update information."},{name:"Ontology",description:"Endpoints for retrieving ontology related data."},{name:"Sequence",description:"Endpoints for retrieving sequence related data."},{name:"Species",description:"Endpoints for retrieving species for FlyBase objects."}],paths:{"/species/lookup/{flybaseIds}":{get:{tags:["Species"],summary:"insert summary here",description:"insert description here",operationId:"speciesLookupById",parameters:[{name:"flybaseIds",in:"path",description:"One or more FlyBase IDs delimited by commas.",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"FBgn0000490,FBgn0013765"}],responses:{200:{description:"Insert description here.",content:{"application/json":{schema:{$ref:"#/components/schemas/SpeciesLookupResult"}}}}}}},"/species/lookup":{post:{tags:["Species"],summary:"insert summary here",description:"insert description here",operationId:"speciesBulkLookupById",requestBody:{description:"Description here",content:{"application/x-www-form-urlencoded":{schema:{$ref:"#/components/schemas/body"}}},required:!0},responses:{200:{description:"Insert description here.",content:{"application/json":{schema:{$ref:"#/components/schemas/SpeciesLookupResult"}}}}}}},"/sequence/region/{species}/{location}":{get:{tags:["Sequence"],summary:"Fetch sequence data by sequence location",description:"Sequence data endpoint.",operationId:"getSequenceDataByLocation",parameters:[{name:"species",in:"path",description:"The 4 letter FlyBase species abbreviation.",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"dmel"},{name:"location",in:"path",description:"The genome region to fetch.",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"2L:100000..101000"},{name:"strand",in:"query",description:"The sequence strand to retrieve sequence data for.",required:!1,style:"form",explode:!0,schema:{type:"string",enum:["plus","minus"]},example:"minus"},{name:"padding",in:"query",description:"Additional 5 prime and 3 prime flanking sequence to add to the specified region.",required:!1,style:"form",explode:!0,schema:{type:"integer",format:"int32"},example:100}],responses:{200:{description:"Reponse for the Sequence data endpoint.",content:{"application/json":{schema:{$ref:"#/components/schemas/SequenceDataResult"}}}}}}},"/sequence/region/bulk":{post:{tags:["Sequence"],summary:"Fetch sequence data by sequence location",description:"Sequence data endpoint.",operationId:"getSequenceDataByLocationBulk",requestBody:{description:"Bulk sequence endpoint request body",content:{"application/x-www-form-urlencoded":{schema:{$ref:"#/components/schemas/body_1"}}},required:!0},responses:{200:{description:"Reponse for the Sequence data endpoint.",content:{"text/plain":{schema:{type:"string",format:"binary"}}}}}}},"/sequence/id/{flybaseId}":{get:{tags:["Sequence"],summary:"Fetch sequence data for FlyBase objects.",description:"Sequence data endpoint.",operationId:"getSequenceData",parameters:[{name:"flybaseId",in:"path",description:"The FlyBase ID to fetch sequence data for.",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"FBgn0000490"}],responses:{200:{description:"Reponse for the Sequence data endpoint.",content:{"application/json":{schema:{$ref:"#/components/schemas/SequenceDataResult"}}}}}}},"/sequence/id/{flybaseId}/{subType}":{get:{tags:["Sequence"],summary:"Fetch sequence data for FlyBase objects.",description:"Sequence data endpoint.",operationId:"getSequenceDataSubType",parameters:[{name:"flybaseId",in:"path",description:"The FlyBase ID to fetch sequence data for.",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"FBgn0000490"},{name:"subType",in:"path",description:"The data class sub type to fetch.",required:!0,style:"simple",explode:!1,schema:{type:"string",enum:["FBgn","FBtr","FBpp","FBcl","FBsf","FBti","FBtp","exon","intron","five_prime_utr","three_prime_utr","CDS"]},example:"FBpp"}],responses:{200:{description:"Reponse for the Sequence data endpoint.",content:{"application/json":{schema:{$ref:"#/components/schemas/SequenceDataResult"}}}}}}},"/sequence/id/bulk":{post:{tags:["Sequence"],summary:"Fetch sequence data for FlyBase objects.",description:"Sequence data endpoint.",operationId:"getBulkIdSequenceData",requestBody:{description:"Bulk sequence endpoint request body",content:{"application/x-www-form-urlencoded":{schema:{$ref:"#/components/schemas/body_2"}}},required:!0},responses:{200:{description:"Reponse for the Sequence data endpoint.",content:{"text/plain":{schema:{type:"string",format:"binary"}}}}}}},"/ribbon/go/{goDomain}/{fbgnId}":{get:{tags:["Ontology"],summary:"Fetch GO slims for a FlyBase gene.",description:"Fetches the GO slim for a gene from the specificed GO domain.",operationId:"getGoRibbonSlim",parameters:[{name:"goDomain",in:"path",description:"The GO domain to retrieve a slim for.",required:!0,style:"simple",explode:!1,schema:{type:"string",enum:["biological_process","cellular_component","molecular_function"]},example:"biological_process"},{name:"fbgnId",in:"path",description:"The FlyBase gene ID to retrieve a slim for.",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"FBgn0000490"}],responses:{200:{description:"Reponse for the FlyBase GO Slim/Ribbon endpoint.",content:{"application/json":{schema:{$ref:"#/components/schemas/GoSlimResult"}}}}}}},"/updates/{flybaseId}":{get:{tags:["HitList","Updates"],summary:"Fetch recent update information.",description:"Fetches the recent update information for a given FlyBase object.  Recent updates report new connections between the current and previous release.",operationId:"getRecentUpdates",parameters:[{name:"flybaseId",in:"path",description:"A FlyBase ID.",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"FBgn0000490"}],responses:{200:{description:"Response for the FlyBase recent update endpoint.",content:{"application/json":{schema:{$ref:"#/components/schemas/RecentUpdatesResult"}}}}}}},"/hitlist/fetch/{flybaseIds}":{get:{tags:["HitList"],summary:"Fetch FlyBase HitList information",description:"Fetches the HitList object for a given FlyBase object.",operationId:"getFlyBaseHitList",parameters:[{name:"flybaseIds",in:"path",description:"One or more FlyBase IDs delimited by commas.",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"FBgn0000490,FBgn0013765"}],responses:{200:{description:"Repsonse for the FlyBase HitList endpoint",content:{"application/json":{schema:{$ref:"#/components/schemas/HitListResult"}}}}}}},"/hitlist/fetch":{post:{tags:["HitList"],summary:"Fetch FlyBase HitList information",description:"Fetches the HitList object for a given FlyBase object.",operationId:"getFlyBaseHitListBulk",requestBody:{description:"blah",content:{"application/x-www-form-urlencoded":{schema:{$ref:"#/components/schemas/body_3"}}},required:!0},responses:{200:{description:"Repsonse for the FlyBase HitList endpoint",content:{"application/json":{schema:{$ref:"#/components/schemas/HitListResult"}}}}}}},"/gene/summaries/auto/{fbgnId}":{get:{tags:["Gene Summaries"],summary:"Fetch auto gene summaries.",description:"Fetches the automatically generated summary for a given gene.",operationId:"getAutoGeneSummary",parameters:[{name:"fbgnId",in:"path",description:"The FlyBase Gene ID (FBgn#)",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"FBgn0000490"}],responses:{200:{description:"Repsonse for the automatically generated summary endpoint.",content:{"application/json":{schema:{$ref:"#/components/schemas/GeneSummaryResult"}}}}}}},"/downloads/FBlc/associated_data/{fblcId}":{get:{tags:["Datasets"],summary:"Fetch associated data for FlyBase Datasets.",description:"Fetchs lists of strains, cell lines, and features that are associated with a FlyBase dataset object.",operationId:"getFblcAssociatedData",parameters:[{name:"fblcId",in:"path",description:"The FlyBase Dataset ID (FBlc#)",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"FBlc0000309"},{name:"assoc_type",in:"query",description:"Filter by strains, cell lines, or features.",required:!1,style:"form",explode:!0,schema:{type:"string",enum:["features","strains","cell_lines"]},example:"features"},{name:"feature_type",in:"query",description:"The FlyBase data class to restrict feature type results to.",required:!1,style:"form",explode:!0,schema:{type:"string"},example:"FBgn"}],responses:{200:{description:"Reponse for the Dataset associated data endpoint.",content:{"application/json":{schema:{$ref:"#/components/schemas/DatasetAssociatedDataResult"}}}}}}},"/chadoxml/{flyBaseId}":{get:{tags:["Chado"],summary:"Fetch ChadoXML for a FlyBase object by ID.",description:"Given a current and valid FlyBase ID, returns ChadoXML data.\n",operationId:"getChadoXmlById",parameters:[{name:"flyBaseId",in:"path",description:"The FlyBase ID to fetch data for.",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"FBgn0000490"}],responses:{200:{description:"ChadoXML for a given FlyBase object.",content:{"application/xml":{schema:{type:"object"}}}},404:{description:"Invalid ID."}}}},"/domain/{flyBaseGeneId}":{get:{tags:["Domains"],summary:"Gets all domains for a given gene.",description:"Given a FlyBase gene ID (FBgn#), return a list of polypeptide domains for the longest polypeptide isoform of the gene.\n",operationId:"getDomainsByGeneId",parameters:[{name:"flyBaseGeneId",in:"path",description:"The FlyBase gene ID to fetch a domain for.",required:!0,style:"simple",explode:!1,schema:{type:"string"}}],responses:{200:{description:"Protein domains for the longest polypeptide isoform of the given gene.",content:{"application/json":{schema:{$ref:"#/components/schemas/DomainByGeneResult"}}}},404:{description:"Invalid ID."}}}},"/domain/{flyBasePolypeptideId}":{get:{tags:["Domains"],summary:"Gets all domains for a given polypeptide.",description:"Given a FlyBase polypeptide ID (FBpp#), return a list of domains for the polypeptide\n",operationId:"getDomainsByPolypeptideId",parameters:[{name:"flyBasePolypeptideId",in:"path",description:"The FlyBase polypeptide ID to fetch a domain for.",required:!0,style:"simple",explode:!1,schema:{type:"string"}}],responses:{200:{description:"Protein domains for the given polypeptide.",content:{"application/json":{schema:{$ref:"#/components/schemas/DomainByPolypeptideResult"}}}},404:{description:"Invalid ID."}}}}},components:{schemas:{BaseResultSet:{type:"object",properties:{api_version:{type:"string"},data_version:{type:"string"},query_url:{type:"string",format:"url"},query_time:{type:"string",format:"timestamp"},data_provider:{type:"string"}}},DomainByGeneResult:{allOf:[{$ref:"#/components/schemas/BaseResultSet"},{type:"object",properties:{result:{type:"array",items:{$ref:"#/components/schemas/GeneDomain"}}}}]},DomainByPolypeptideResult:{allOf:[{$ref:"#/components/schemas/BaseResultSet"},{type:"object",properties:{result:{type:"array",items:{$ref:"#/components/schemas/PolypeptideDomain"}}}}]},DatasetAssociatedDataResult:{allOf:[{$ref:"#/components/schemas/BaseResultSet"},{type:"object",properties:{result:{type:"array",items:{$ref:"#/components/schemas/AssociatedDataResult"}}}}]},AssociatedDataResult:{type:"object",properties:{id:{type:"string"},symbol:{type:"string"},cell_lines:{type:"array",items:{$ref:"#/components/schemas/SymbolId"}},features:{type:"array",items:{$ref:"#/components/schemas/SymbolId"}},strains:{type:"array",items:{$ref:"#/components/schemas/SymbolId"}}}},SymbolId:{type:"object",properties:{id:{type:"string"},symbol:{type:"string"}}},DomainRegion:{type:"object",properties:{source:{type:"string"},abbrev:{type:"string"},name:{type:"string"},start:{type:"integer",format:"int32"},end:{type:"integer",format:"int32"},pfam:{type:"string"},interpro:{type:"string"},classification:{type:"string"}}},GeneDomain:{type:"object",properties:{gene_id:{type:"string"},gene_symbol:{type:"string"},proteins:{type:"array",items:{$ref:"#/components/schemas/PolypeptideDomain"}}}},PolypeptideDomain:{type:"object",properties:{protein_symbol:{type:"string"},protein_id:{type:"string"},length:{type:"integer",format:"int32"},regions:{type:"array",items:{$ref:"#/components/schemas/DomainRegion"}}}},GeneSummaryResult:{allOf:[{$ref:"#/components/schemas/BaseResultSet"},{type:"object",properties:{result:{type:"array",items:{$ref:"#/components/schemas/GeneSummary"}}}}]},GeneSummary:{type:"object",properties:{summary:{type:"string",enum:["auto"]},type:{type:"string"},id:{type:"string"}}},HitListResult:{allOf:[{$ref:"#/components/schemas/BaseResultSet"},{type:"object",properties:{result:{type:"array",items:{type:"object"}},counts:{type:"object"}}}]},RecentUpdatesResult:{allOf:[{$ref:"#/components/schemas/BaseResultSet"},{type:"object",properties:{result:{type:"array",items:{type:"object"}}}}]},GoSlimResult:{allOf:[{$ref:"#/components/schemas/BaseResultSet"},{type:"object",properties:{result:{type:"array",items:{type:"object"}}}}]},Fasta:{type:"object",properties:{id:{type:"string"},description:{type:"string"},sequence:{type:"string"}}},SequenceDataResult:{allOf:[{$ref:"#/components/schemas/BaseResultSet"},{type:"object",properties:{num_fetched:{type:"integer",format:"int32"},not_found:{type:"array",items:{type:"string"}},result:{type:"array",items:{$ref:"#/components/schemas/Fasta"}}}}]},SpeciesLookupResult:{allOf:[{$ref:"#/components/schemas/BaseResultSet"},{type:"object",properties:{result:{type:"array",items:{$ref:"#/components/schemas/SpeciesLookup"}}}}]},SpeciesLookup:{type:"object",properties:{genus:{type:"string"},id:{type:"string"},species:{type:"string"},abbreviation:{type:"string"}}},body:{required:["ids"],type:"object",properties:{ids:{type:"array",items:{type:"string"}}}},body_1:{required:["regions","species"],type:"object",properties:{species:{type:"string"},regions:{type:"array",items:{type:"string"}},strand:{type:"string",enum:["plus","minus"]},padding:{type:"integer",format:"int32"}}},body_2:{required:["ids"],type:"object",properties:{ids:{type:"array",items:{type:"string"}},type:{type:"string",enum:["FBgn","FBtr","FBpp","FBcl","FBsf","FBti","FBtp","exon","intron","five_prime_utr","three_prime_utr","CDS"]}}},body_3:{required:["ids"],type:"object",properties:{ids:{type:"array",items:{type:"string"}}}}}}}},144:function(e,t,n){"use strict";n.r(t);var s=n(8),a=n.n(s),i=n(0),r=n.n(i),o=(n(319),n(159)),p=(n(141),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{id:"swagger-container"}))},t}(i.Component));t.default=p},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return y});var s=n(0),a=n.n(s),i=n(4),r=n.n(i),o=n(149),p=n.n(o);n.d(t,"Link",function(){return p.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var c=n(28);n.d(t,"waitForRouteChange",function(){return c.c});var l=n(154),m=n.n(l);n.d(t,"PageRenderer",function(){return m.a});var d=n(41);n.d(t,"parsePath",function(){return d.a});var u=a.a.createContext({}),y=function(e){return a.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}y.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},154:function(e,t,n){var s;e.exports=(s=n(158))&&s.default||s},157:function(e){e.exports={data:{site:{siteMetadata:{title:"FlyBase for Developers"}}}}},158:function(e,t,n){"use strict";n.r(t);var s=n(14),a=n.n(s),i=n(0),r=n.n(i),o=n(4),p=n.n(o),c=n(55),l=n(1),m=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,a()({location:t,pageResources:n},n.json))};m.propTypes={location:p.a.shape({pathname:p.a.string.isRequired}).isRequired},t.default=m},159:function(e,t,n){"use strict";var s=n(157),a=n(0),i=n.n(a),r=n(4),o=n.n(r),p=n(171),c=n.n(p),l=n(152),m=n(176),d=n.n(m),u=n(169),y=n.n(u),h=n(179),f=n.n(h),g=n(178),b=n.n(g),B=n(177),F=n.n(B),q=n(165),I=n.n(q),v=n(166),S=n.n(v);var D=function(e){return i.a.createElement(S.a,e,i.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))},R=function(e){var t=e.siteTitle;return i.a.createElement("div",null,i.a.createElement(d.a,{position:"sticky",color:"primary"},i.a.createElement(F.a,null,i.a.createElement(y.a,{container:!0},i.a.createElement(y.a,{item:!0,xs:9},i.a.createElement(I.a,{variant:"headline",color:"inherit"},i.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))),i.a.createElement(y.a,{item:!0,xs:3},i.a.createElement(b.a,{href:"http://flybase.org","aria-label":"FlyBase"},i.a.createElement(f.a,null)),i.a.createElement(b.a,{href:"https://github.com/FlyBase","aria-label":"Github"},i.a.createElement(D,null)))))))},x=n(182),j=n.n(x),w=n(156),E=n(180),$=n(168),_=n.n($),G=Object(w.createMuiTheme)({palette:{primary:_.a}}),L=n(170),k=n(181);L.b.add(k.a,k.b,k.c);var T=E.a.main.withConfig({displayName:"layout__Content",componentId:"sc-1f3qdb3-0"})(["padding-top:20px;"]),C=function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(w.MuiThemeProvider,{theme:G},i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),i.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),i.a.createElement("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}),i.a.createElement(j.a,null)),i.a.createElement(R,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(T,null,t))},data:s})};C.propTypes={children:o.a.node.isRequired};t.a=C}}]);
//# sourceMappingURL=component---src-pages-api-index-js-9a1f50af76015c7518ac.js.map