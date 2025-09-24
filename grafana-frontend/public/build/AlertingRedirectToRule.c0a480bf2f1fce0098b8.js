"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5516],{6165:(z,f,a)=>{a.r(f),a.d(f,{RedirectToRuleViewer:()=>x,default:()=>X});var l=a(32196),e=a(96540),h=a(58476),S=a(87586),L=a(32264),P=a(17172),p=a(40845),N=a(42418),T=a(39558),u=a(10860),F=a(14578),I=a(66602),w=a(69087),$=a(17205);const M={icon:"bell",id:"alert-rule-view"};function c(t){const{wrapInContent:n=!0,children:r,title:i,renderTitle:o}=t,d=(0,p.of)(V);return e.createElement($.Y,{pageNav:{...M,text:i},renderTitle:o,navId:"alert-list"},e.createElement($.Y.Contents,null,e.createElement("div",{className:d.content},n?e.createElement(U,{...t}):r)))}function U({children:t,padding:n=2}){const r=(0,p.of)(Z(n));return e.createElement("div",{className:r.wrapper},t)}const V=t=>({content:(0,l.css)`
      max-width: ${t.breakpoints.values.xxl}px;
    `}),Z=t=>n=>({wrapper:(0,l.css)`
      background: ${n.colors.background.primary};
      border: 1px solid ${n.colors.border.weak};
      border-radius: ${n.shape.radius.default};
      padding: ${n.spacing(t)};
    `});var A=a(730),Y=a(57220),y=a(56361),C=a(18461);const m="Find rule",R=L.$.appSubUrl;function B(){const t=(0,S.A)();return(0,e.useMemo)(()=>{const n=t.pathname?.replace(R,"").split("/")??[],r=(0,C.c)(decodeURIComponent((0,C.c)(n[3]))),i=decodeURIComponent(n[2]),o=new URLSearchParams(t.search);return{name:r,sourceName:i,namespace:o.get("namespace")??void 0,group:o.get("group")??void 0}},[t])}function x(){const t=(0,p.of)(H),{name:n,sourceName:r,namespace:i,group:o}=B(),{error:d,loading:j,rules:g=[]}=(0,A.we)(n,r,{namespace:i,groupName:o});if(!n||!r)return e.createElement(h.rd,{to:"/notfound"});if(d)return e.createElement(c,{title:m},e.createElement(N.F,{title:`Failed to load rules from ${r}`},(0,P.NF)(d)&&e.createElement("details",{className:t.errorMessage},d.message,e.createElement("br",null))));if(j)return e.createElement(c,{title:m},e.createElement(T._,{text:"Loading rule..."}));const v=(0,Y.Zw)(r);if(!v)return e.createElement(c,{title:m},e.createElement(N.F,{title:"Could not view rule"},e.createElement("details",{className:t.errorMessage},`Could not find data source with name: ${r}.`)));if(g.length===1){const[s]=g,E=(0,y.w$)(v,s,"/alerting/list").replace(R,"");return e.createElement(h.rd,{to:E})}return g.length===0?e.createElement(c,{title:m},e.createElement("div",{"data-testid":"no-rules"},"No rules in ",e.createElement("span",{className:t.param},r)," matched the name"," ",e.createElement("span",{className:t.param},n))):e.createElement(c,{title:m},e.createElement("div",null,"Several rules in ",e.createElement("span",{className:t.param},r)," matched the name"," ",e.createElement("span",{className:t.param},n),", please select the rule you want to view."),e.createElement("div",{className:t.rules},g.map((s,E)=>e.createElement(u.Z,{key:`${s.name}-${E}`,href:(0,y.w$)(v,s,"/alerting/list")},e.createElement(u.Z.Heading,null,s.name),e.createElement(u.Z.Meta,{separator:""},e.createElement(F.I,{name:"folder"}),e.createElement("span",{className:t.namespace},`${s.namespace.name} / ${s.group.name}`)),e.createElement(u.Z.Tags,null,e.createElement(w.m,{labels:s.labels}))))))}function H(t){return{param:(0,l.css)`
      font-style: italic;
      color: ${t.colors.text.secondary};
    `,rules:(0,l.css)`
      margin-top: ${t.spacing(2)};
    `,namespace:(0,l.css)`
      margin-left: ${t.spacing(1)};
    `,errorMessage:(0,l.css)`
      white-space: pre-wrap;
    `}}const X=(0,I.Xc)(x,{style:"page"})}}]);

//# sourceMappingURL=AlertingRedirectToRule.c0a480bf2f1fce0098b8.js.map