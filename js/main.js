/*!
 * webkitecture-connector.js
 * http://coronadofactory.com/service-connector/
 *
 * Copyright (c) 2011-2014 Jose Antonio Garcia
 * Released under the MIT license
 * https://raw.github.com/coronadoland/service-connector/master/LICENSE.txt
 *
 * Date: 2014-12-25
 */

(function(e,t){typeof define=="function"&&define.amd?define("webkitecture",["exports"],function(n){e.WebK=t(e,n,$)}):typeof exports!="undefined"?t(e,exports):e.WebK=t(e,e.WebK||{},e.jQuery)})(this,function(e,t,n){t.RequireJS={define:function(e,t){define(e,t,{})},load:function(){var e=n("script[data-module]"),t=e.attr("data-module");require([t],function(e){e.load()})}},t.Query=function(e){var t,r,i;e.datatype?(t="application/"+e.datatype+";charset=utf8",r=e.datatype,i=e.request?e.request:""):(t="application/json;charset=utf8",r="json",i=e.request?JSON.stringify(e.request):"{}");var s=function(t){var n=t[0];r=="json"?!n.status||n.status.toUpperCase()=="OK"||n.status.toUpperCase()=="SUCCESS"?e.callback?e.callback(n):e.panel&&e.panel.message&&e.panel.message(n.status,n.message):e.panel&&e.panel.message&&e.panel.message(n.status,n.message):r=="xml"&&(window.ActiveXObject?e.callback(n.xml):e.callback((new XMLSerializer).serializeToString(n)))},o=function(t){var r=e.action&&e.action.loader?e.action.loader:null,i=e.panel&&e.panel.loader?e.panel.loader:null,s=n.Deferred(),o=function(){s.resolve()},u,a;return t?(u=r,a=i):(u=i,a=r),u?u(t,function(){a?a(t,function(){o()}):o()}):a?a?a(t,function(){o()}):o():o(),t&&e.panel&&e.panel.waiting&&alert("obsolete"),!t&&e.panel&&e.panel.always&&(alert("obsolete"),e.panel.always()),s.promise()},u=function(){return o(!1)},a=function(t,n,r){e.panel&&e.panel.fail?t.status=="400"||t.status=="404"||t.status=="405"?e.panel.fail("NOMETHOD",t.statusText,e.service.url):t.status=="500"?e.panel.fail("SERVERERROR",t.statusText,e.service.url):t.status=="502"||t.status=="503"?e.panel.fail("NOAVAILABLE",null,e.service.url):e.panel.fail("UNKNOWN","["+t.status+"]",e.service.url):window.console&&console.error(t.status)};n.when(n.ajax({contentType:t,data:i,dataType:r,url:e.service.url+(e.posturl?"/"+e.posturl:""),type:e.service.method,xhrFields:{withCredentials:!0}}),o(!0)).then(s).always(u).fail(a)},t.Form=function(e){var n=function(n){new t.Query({service:e.service,posturl:e.posturl,request:n,datatype:e.datatype,callback:e.callback,panel:e.panel,action:e.action})};e.action&&e.action.on("submit",function(){n(r(e.form))})};var r=function(e){var t={};return e.find("input[data-property], select[data-property]").each(function(){var e=n(this),r=e.attr("data-property");e.attr("type")=="checkbox"?t[r]=e.is(":checked"):t[r]=e.val()}),e.find("*[data-property-parent]").each(function(){var e=n(this),r=e.attr("data-property-parent"),i=[];t[r]=i,e.find(".data-property-row").each(function(){var e=n(this),t={};i.push(t),e.find("input[data-property-child], select[data-property-child]").each(function(){var e=n(this),r=e.attr("data-property-child"),i=e.val();t[r]=i})})}),e.find("*[data-property-checks]").each(function(){var e=n(this),r=e.attr("data-property-checks"),i=[];t[r]=i,e.find("input[type=checkbox]").each(function(){var e=n(this),t=e.attr("data-property-child");if(e.is(":checked")){var r={};r[t]=e.val(),i.push(r)}})}),t};return t.Modal=function(e){e.open.action.on("submit",e.open.effect)},t}),define("main",["webkitecture"],function(e){e.RequireJS.load()}),define("google-mobile",["webkitecture"],function(e){var t=function(){alert("google")};return{load:t}});