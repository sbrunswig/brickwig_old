"use strict";define("brickwig/adapters/application",["exports","emberfire/adapters/firebase"],function(e,t){e.default=t.default.extend({})}),define("brickwig/app",["exports","ember","brickwig/resolver","ember-load-initializers","brickwig/config/environment"],function(e,t,a,r,n){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:a.default}),(0,r.default)(i,n.default.modulePrefix),e.default=i}),define("brickwig/components/app-version",["exports","ember-cli-app-version/components/app-version","brickwig/config/environment"],function(e,t,a){var r=a.default.APP.name,n=a.default.APP.version;e.default=t.default.extend({version:n,name:r})}),define("brickwig/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("brickwig/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("brickwig/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","brickwig/config/environment"],function(e,t,a){e.default={name:"App Version",initialize:(0,t.default)(a.default.APP.name,a.default.APP.version)}}),define("brickwig/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("brickwig/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("brickwig/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("brickwig/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){e.default=t.default}),define("brickwig/initializers/export-application-global",["exports","ember","brickwig/config/environment"],function(e,t,a){function r(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var r,n=a.default.exportApplicationGlobal;r="string"==typeof n?n:t.default.String.classify(a.default.modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("brickwig/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("brickwig/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("brickwig/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("brickwig/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("brickwig/models/minifigs",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({no:t.default.attr(),name:t.default.attr(),category_name:t.default.attr(),image_url:t.default.attr(),year_released:t.default.attr(),year_retired:t.default.attr(),min_price:t.default.attr(),avg_price:t.default.attr(),total_quantity:t.default.attr(),avg_price_sold:t.default.attr(),superset:t.default.attr(),subset:t.default.attr(),price_detail:t.default.attr()})}),define("brickwig/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("brickwig/router",["exports","ember","brickwig/config/environment"],function(e,t,a){var r=t.default.Router.extend({location:a.default.locationType,rootURL:a.default.rootURL});r.map(function(){}),e.default=r}),define("brickwig/routes/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return this.store.findAll("minifigs")}})}),define("brickwig/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("brickwig/services/firebase-app",["exports","emberfire/services/firebase-app"],function(e,t){e.default=t.default}),define("brickwig/services/firebase",["exports","emberfire/services/firebase"],function(e,t){e.default=t.default}),define("brickwig/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:28,column:16},end:{line:36,column:16}},moduleName:"brickwig/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createElement("tr"),r=e.createElement("td"),n=e.createTextNode("no");e.appendChild(r,n),e.appendChild(a,r);var r=e.createElement("td"),n=e.createComment("");e.appendChild(r,n),e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n                    ");e.appendChild(t,a);var a=e.createElement("tr"),r=e.createElement("td"),n=e.createTextNode("name");e.appendChild(r,n),e.appendChild(a,r);var r=e.createElement("td"),n=e.createComment("");e.appendChild(r,n),e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n                    ");e.appendChild(t,a);var a=e.createElement("tr"),r=e.createElement("td"),n=e.createTextNode("type");e.appendChild(r,n),e.appendChild(a,r);var r=e.createElement("td"),n=e.createComment("");e.appendChild(r,n),e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n                    ");e.appendChild(t,a);var a=e.createElement("tr"),r=e.createElement("td"),n=e.createTextNode("quantity");e.appendChild(r,n),e.appendChild(a,r);var r=e.createElement("td"),n=e.createComment("");e.appendChild(r,n),e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n                    ");e.appendChild(t,a);var a=e.createElement("tr"),r=e.createElement("td"),n=e.createTextNode("retail_price");e.appendChild(r,n),e.appendChild(a,r);var r=e.createElement("td"),n=e.createComment("");e.appendChild(r,n),e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n                    ");e.appendChild(t,a);var a=e.createElement("tr"),r=e.createElement("td"),n=e.createTextNode("year_released");e.appendChild(r,n),e.appendChild(a,r);var r=e.createElement("td"),n=e.createComment("");e.appendChild(r,n),e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n                    ");e.appendChild(t,a);var a=e.createElement("tr"),r=e.createElement("td"),n=e.createTextNode("year_retired");e.appendChild(r,n),e.appendChild(a,r);var r=e.createElement("td"),n=e.createComment("");e.appendChild(r,n),e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=new Array(7);return r[0]=e.createMorphAt(e.childAt(t,[1,1]),0,0),r[1]=e.createMorphAt(e.childAt(t,[3,1]),0,0),r[2]=e.createMorphAt(e.childAt(t,[5,1]),0,0),r[3]=e.createMorphAt(e.childAt(t,[7,1]),0,0),r[4]=e.createMorphAt(e.childAt(t,[9,1]),0,0),r[5]=e.createMorphAt(e.childAt(t,[11,1]),0,0),r[6]=e.createMorphAt(e.childAt(t,[13,1]),0,0),r},statements:[["content","set.no",["loc",[null,[29,39],[29,49]]],0,0,0,0],["content","set.name",["loc",[null,[30,41],[30,53]]],0,0,0,0],["content","set.type",["loc",[null,[31,41],[31,53]]],0,0,0,0],["content","set.quantity",["loc",[null,[32,45],[32,61]]],0,0,0,0],["content","set.retail_price",["loc",[null,[33,49],[33,69]]],0,0,0,0],["content","set.year_released",["loc",[null,[34,50],[34,71]]],0,0,0,0],["content","set.year_retired",["loc",[null,[35,49],[35,69]]],0,0,0,0]],locals:["set"],templates:[]}}();return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:7,column:0},end:{line:64,column:0}},moduleName:"brickwig/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"style","display: flex;border: 1px solid #ccc;padding: 12px;margin-bottom: 24px");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"style","margin-right: 12px;");var n=e.createTextNode("\n            ");e.appendChild(r,n);var n=e.createElement("img");e.setAttribute(n,"style","width:60px;height:80px;"),e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("\n        ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n        \n        ");e.appendChild(a,r);var r=e.createElement("div"),n=e.createTextNode("\n            ");e.appendChild(r,n);var n=e.createElement("table"),i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("tr"),d=e.createElement("td"),l=e.createTextNode("no");e.appendChild(d,l),e.appendChild(i,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("tr"),d=e.createElement("td"),l=e.createTextNode("name");e.appendChild(d,l),e.appendChild(i,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("tr"),d=e.createElement("td"),l=e.createTextNode("category_name");e.appendChild(d,l),e.appendChild(i,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("tr"),d=e.createElement("td"),l=e.createTextNode("year_released");e.appendChild(d,l),e.appendChild(i,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("tr"),d=e.createElement("td"),l=e.createTextNode("year_retired");e.appendChild(d,l),e.appendChild(i,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("tr"),d=e.createElement("td"),l=e.createTextNode("min_price");e.appendChild(d,l),e.appendChild(i,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("tr"),d=e.createElement("td"),l=e.createTextNode("avg_price");e.appendChild(d,l),e.appendChild(i,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("tr"),d=e.createElement("td"),l=e.createTextNode("total_quantity");e.appendChild(d,l),e.appendChild(i,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("tr"),d=e.createElement("td"),l=e.createTextNode("avg_price_sold");e.appendChild(d,l),e.appendChild(i,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n            ");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n\n            ");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("Superset\n            ");e.appendChild(r,n);var n=e.createElement("table"),i=e.createTextNode("\n");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode("            ");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("\n            <br><br>Subset\n            <table>\n{{#each minifig.subset as |part|}}\n                    <tr><td>no</td><td>{{part.no}}</td></tr>\n                    <tr><td>name</td><td>{{part.name}}</td></tr>\n                    <tr><td>category_name</td><td>{{part.category_name}}</td></tr>\n                    <tr><td>quantity</td><td>{{part.quantity}}</td></tr>\n                    <tr><td>color_name</td><td>{{part.color_name}}</td></tr>\n                {{/each}}            </table>\n\n            <br><br>Pricing\n            <table>\n{{#each minifig.price_detail as |price|}}\n                    <tr><td>quantity</td><td>{{price.quantity}}</td></tr>\n                    <tr><td>unit_price</td><td>{{price.unit_price}}</td></tr>\n                    <tr><td>date_ordered</td><td>{{price.date_ordered}}</td></tr>\n                {{/each}}            </table>\n\n");e.appendChild(r,n);var n=e.createTextNode("\n\n        ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n        \n    ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=e.childAt(t,[1]),n=e.childAt(r,[1]),i=e.childAt(n,[1]),d=e.childAt(r,[3]),l=e.childAt(d,[1]),p=new Array(12);return p[0]=e.createAttrMorph(i,"src"),p[1]=e.createMorphAt(n,3,3),p[2]=e.createMorphAt(e.childAt(l,[1,1]),0,0),p[3]=e.createMorphAt(e.childAt(l,[3,1]),0,0),p[4]=e.createMorphAt(e.childAt(l,[5,1]),0,0),p[5]=e.createMorphAt(e.childAt(l,[7,1]),0,0),p[6]=e.createMorphAt(e.childAt(l,[9,1]),0,0),p[7]=e.createMorphAt(e.childAt(l,[11,1]),0,0),p[8]=e.createMorphAt(e.childAt(l,[13,1]),0,0),p[9]=e.createMorphAt(e.childAt(l,[15,1]),0,0),p[10]=e.createMorphAt(e.childAt(l,[17,1]),0,0),p[11]=e.createMorphAt(e.childAt(d,[6]),1,1),p},statements:[["attribute","src",["concat",[["get","minifig.image_url",["loc",[null,[10,25],[10,42]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],["content","minifig.no",["loc",[null,[10,83],[10,97]]],0,0,0,0],["content","minifig.no",["loc",[null,[15,35],[15,49]]],0,0,0,0],["content","minifig.name",["loc",[null,[16,37],[16,53]]],0,0,0,0],["content","minifig.category_name",["loc",[null,[17,46],[17,71]]],0,0,0,0],["content","minifig.year_released",["loc",[null,[18,46],[18,71]]],0,0,0,0],["content","minifig.year_retired",["loc",[null,[19,45],[19,69]]],0,0,0,0],["content","minifig.min_price",["loc",[null,[20,42],[20,63]]],0,0,0,0],["content","minifig.avg_price",["loc",[null,[21,42],[21,63]]],0,0,0,0],["content","minifig.total_quantity",["loc",[null,[22,47],[22,73]]],0,0,0,0],["content","minifig.avg_price_sold",["loc",[null,[23,47],[23,73]]],0,0,0,0],["block","each",[["get","minifig.superset",["loc",[null,[28,24],[28,40]]],0,0,0,0]],[],0,null,["loc",[null,[28,16],[36,25]]]]],locals:["minifig"],templates:[e]}}();return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:1,column:0},end:{line:65,column:6}},moduleName:"brickwig/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("style"),r=e.createTextNode("\n    body {font-size: 10px;font-family: arial;margin: 24px;padding:0;}\n    td { padding-right: 6px; vertical-align: top;}\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("h2"),r=e.createTextNode("Welcome to brickwig");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"style","display:flex;flex-wrap:wrap;justify-content: space-between;");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");return e.appendChild(a,r),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[4]),1,1),r},statements:[["block","each",[["get","model",["loc",[null,[7,8],[7,13]]],0,0,0,0]],[],0,null,["loc",[null,[7,0],[64,9]]]]],locals:[],templates:[e]}}())}),define("brickwig/torii-providers/firebase",["exports","emberfire/torii-providers/firebase"],function(e,t){e.default=t.default}),define("brickwig/config/environment",["ember"],function(e){var t="brickwig";try{var a=t+"/config/environment",r=e.default.$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{default:n}}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("brickwig/app").default.create({name:"brickwig",version:"0.0.0+1a35ee13"});