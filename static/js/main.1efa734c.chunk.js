(this["webpackJsonprandom-wikipedia-of-react"]=this["webpackJsonprandom-wikipedia-of-react"]||[]).push([[0],{17:function(e,n,t){e.exports=t(25)},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(12),i=t.n(c),o=t(1),u=t.n(o),s=t(2),l=t(6),p=t(3),f=t(4);function d(){var e=Object(p.a)(["\n  /* http://meyerweb.com/eric/tools/css/reset/ \n    v2.0 | 20110126\n    License: none (public domain)\n  */\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  body {\n    background-color: rgb(255, 216, 165);\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(p.a)(['\n  font-family: "Oswald";\n  font-size: 45px;\n  font-weight: 700;\n\n  margin: 30px auto 0 auto;\n  border-left: 10px solid black;\n  padding-left: 20px;\n  width: 433px;\n\n  @media (min-width: 700px) {\n    margin-top: 100px;\n  }\n']);return b=function(){return e},e}var m=f.b.div(b()),h=Object(f.a)(d());function g(){var e=Object(p.a)(["\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  text-transform: uppercase;\n\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid black;\n\n  flex: 1;\n  width: 100%;\n  height: 40px;\n  padding: 0;\n\n  &:focus {\n    outline: none;\n  }\n"]);return g=function(){return e},e}function x(){var e=Object(p.a)(["\n  display: flex;\n  align-content: center;\n"]);return x=function(){return e},e}function v(){var e=Object(p.a)(["\n  font-style: italic; \n"]);return v=function(){return e},e}function k(){var e=Object(p.a)(['\n  font-family: "Oswald";\n  text-transform: uppercase;\n  word-spacing: 1px;\n\n  letter-spacing: 0.1px;\n\n  &:last-child {\n    margin: 0;\n  }\n']);return k=function(){return e},e}function O(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n"]);return O=function(){return e},e}var y=f.b.div(O()),w=f.b.h1(k()),j=f.b.a(v()),E=f.b.form(x()),C=f.b.input(g()),q=function(e){var n=e.inputData,t=e.fetchedData,r=e.fetchHandler,c=e.inputFocus;return a.a.createElement(y,null,a.a.createElement(w,null,"FROM THE CATEGORY"),a.a.createElement("div",{style:{display:"Flex",flexDirection:"row"}},a.a.createElement(w,null,"OF"),a.a.createElement(w,null,"\xa0")," ",a.a.createElement(E,{onSubmit:function(e){e.preventDefault(),r(n,!0)}},a.a.createElement(C,{action:"",type:"text",placeholder:"",value:n,onChange:function(e){r(e.target.value,!1)},autoFocus:!0,ref:c}))),"Random"===t.picked?a.a.createElement(w,null,"YOU WILL BE PROVIDED A RANDOM ARTICLE."):a.a.createElement(w,null,"YOU HAVE THE linked"," ",a.a.createElement(j,{href:"https://en.wikipedia.org/wiki/"+t.picked.replace(/[" "]/g,"_")},t.picked)," ","ARTICLE."))};function A(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(245, 209, 162);\n\n  border: none;\n  padding: 8px 12px;\n  width: 100%;\n\n  font-size: 20px;\n\n  &:first-child {\n  margin-top: 20px;\n}\n\n  &:not(:last-child) {\n  border: 8px solid rgb(255, 219, 172);\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n}\n\n"]);return A=function(){return e},e}var H=f.b.button(A()),D=function(e){var n=e.recommendedArr,t=e.fetchHandler,r=e.focusHandler;return a.a.createElement("div",null,n.length>0&&n.map((function(e,n){return a.a.createElement(H,{onClick:Object(s.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(e,!0),r();case 2:case"end":return n.stop()}}),n)}))),key:"recommended".concat(n)},e)})))},R=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=6&namespace=14&suggest&search=".concat(n,"&origin=*"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,a=[],e.next=9,r[1].map((function(e){return a.push(e.replace(/^Category:/,""))}));case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),M=t(16),F=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,r,a,c,i,o,s,l,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:".concat(n.replace(/[" "]/g,"_"),"&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat&origin=*"),r={articles:[],subCats:[]},e.next=4,fetch(t);case 4:if((a=e.sent).ok){e.next=10;break}throw c="An error has occured: ".concat(a.status),new Error(c);case 10:return e.next=12,a.json();case 12:i=e.sent,o=i.query.categorymembers,s=Object(M.a)(o);try{for(s.s();!(l=s.n()).done;)"page"===(p=l.value).type?r.articles.push(p.title.replace(/[" "]/g,"_")):r.subCats.push(p.title.replace(/Category:/g,"").replace(/[" "]/g,"_"))}catch(u){s.e(u)}finally{s.f()}return e.abrupt("return",r);case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=t(5),T=function(e,n){if("article"===n){var t=Math.floor(Math.random()*Object(L.a)({},e).articles.length);return Object(L.a)({},e).articles[t].replace(/["_"]/g," ")}if("subCats"===n){var r=Math.floor(Math.random()*Object(L.a)({},e).subCats.length);return Object(L.a)({},e).subCats[r]}},I=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,r,a,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(n).then((function(e){return e})).catch((function(e){return console.log(e)}));case 2:return t=e.sent,r=T(t,"subCats"),a=t.subCats.indexOf(r),t.subCats.splice(a,1),e.next=8,F(r).then((function(e){return e})).catch((function(e){return e}));case 8:return c=e.sent,t.articles=t.articles.concat(c.articles),t.subCats=t.subCats.concat(c.subCats),t.picked=T(t,"article"),i=t.articles.indexOf(t.picked),t.articles.splice(i,1),e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,r,a,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(L.a)({},n),r=T(t,"subCats"),a=t.subCats.indexOf(r),t.subCats.splice(a,1),e.next=6,F(r).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:return c=e.sent,t.articles=t.articles.concat(c.articles),t.subCats=t.subCats.concat(c.subCats),t.picked=T(t,"article"),i=t.articles.indexOf(t.picked),t.articles.splice(i,1),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(){var e=Object(r.useState)(""),n=Object(l.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(""),o=Object(l.a)(i,2),p=o[0],f=o[1],d=Object(r.useState)([]),b=Object(l.a)(d,2),g=b[0],x=b[1],v=Object(r.useState)({picked:"Random",articles:[],subCats:[]}),k=Object(l.a)(v,2),O=k[0],y=k[1],w=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===n||n===p){e.next=8;break}return e.next=3,I(n);case 3:t=e.sent,f(n),y(t),e.next=13;break;case 8:if(""===n||n!==p){e.next=13;break}return e.next=11,S(O);case 11:r=e.sent,y(r);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(u.a.mark((function e(n,r){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n!==t&&c(n),!n){e.next=10;break}if(n===t){e.next=7;break}return e.next=5,R(n);case 5:a=e.sent,x(a);case 7:r&&w(n),e.next=11;break;case 10:x([]);case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),E=Object(r.useRef)(null);return a.a.createElement(m,null,a.a.createElement(h,null),a.a.createElement(q,{inputData:t,fetchedData:O,recommendedArr:g,fetchHandler:j,inputFocus:E}),a.a.createElement(D,{recommendedArr:g,fetchHandler:j,focusHandler:function(){E.current.focus()}}))};i.a.render(a.a.createElement(_,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1efa734c.chunk.js.map