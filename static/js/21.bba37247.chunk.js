(window["webpackJsonpjibon-bima-corporation"]=window["webpackJsonpjibon-bima-corporation"]||[]).push([[21],{1644:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),l=n(94),c=n.n(l),i=n(52),o=n(91),m=n(1620),s=n(97),u=n(1625),d=n(98),b=n(44),g=n(95),p=n.n(g),E=n(5);p.a.seed(123);var f=Array.from({length:300}).map((function(e){return{id:p.a.datatype.number(),name:p.a.address.city(),region_no:"R-"+p.a.datatype.number(),description:p.a.lorem.words()}}));Object(l.createTheme)("solarized",{text:{primary:"#268bd2",secondary:"#2aa198"},background:{default:"#191c24"},context:{background:"#cb4b16",text:"#FFFFFF"},divider:{default:"#073642"},action:{button:"rgba(0,0,0,.54)",hover:"rgba(0,0,0,.08)",disabled:"rgba(0,0,0,.12)"}},"dark");a.default=function(){var e=Object(E.g)().push,a=[{name:"Name",selector:function(e){return e.name}},{name:"Region No",selector:function(e){return e.region_no}},{name:"Description",selector:function(e){return e.description}},{name:"Status",cell:function(){return p.a.datatype.boolean()?r.a.createElement("div",{class:"badge badge-outline-danger"},"Active"):r.a.createElement("div",{class:"badge badge-outline-success"},"In active")}},{cell:function(a){return r.a.createElement("div",null,r.a.createElement(i.a,{size:"small",onClick:function(a){e({pathname:"/users/edit"})}},r.a.createElement(b.a,null)),r.a.createElement(i.a,{variant:"danger",className:"ml-2",size:"small",onClick:function(e){}},r.a.createElement(b.c,null)),r.a.createElement(i.a,{variant:"secondary",className:"ml-2",size:"small",onClick:function(a){e({pathname:"/document-management"})}},r.a.createElement(b.b,null)))},margin:0,padding:0}];return r.a.createElement(o.a,null,r.a.createElement(o.a.Header,null,r.a.createElement(o.a.Title,null,"Region List"),r.a.createElement(m.a,null,r.a.createElement(s.a,{xs:6},r.a.createElement(u.a,{className:"mb-3"},r.a.createElement(d.a,{placeholder:"Search with service name",type:"text"}))))),r.a.createElement(o.a.Body,null,r.a.createElement(c.a,{columns:a,data:f,theme:"solarized",pagination:!0,highlightOnHover:!0,pointerOnHover:!0})))}}}]);
//# sourceMappingURL=21.bba37247.chunk.js.map