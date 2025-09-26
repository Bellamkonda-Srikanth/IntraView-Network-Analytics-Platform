"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1660,1488],{40715:(q,M,a)=>{a.d(M,{o:()=>C});var l=a(96540),n=a(31678),e=a(97007);function C(b){const S=(0,n.useDispatch)(),D=(0,l.useRef)(b);D.current=b,(0,l.useEffect)(()=>()=>{S((0,e.N)({cleanupAction:D.current}))},[S])}},31099:(q,M,a)=>{a.d(M,{A:()=>k});var l=a(32196),n=a(1932),e=a(96540),C=a(49785),b=a(42941),S=a(40845),D=a(67061),P=a(94753),I=a(10354),O=a(21744),U=a(88575),$=a(55852),d=a(55740);const W=({field:t})=>{const s=(0,S.of)(De);return e.createElement("div",null,e.createElement("span",{className:s.annotationTitle},"Custom annotation name and content"),e.createElement(I.p,{placeholder:"Enter custom annotation name...",width:18,...t,className:s.customAnnotationInput}))},De=t=>({annotationTitle:(0,l.css)`
    color: ${t.colors.text.primary};
    margin-bottom: 3px;
  `,customAnnotationInput:(0,l.css)`
    margin-top: 5px;
    width: 100%;
  `}),Ie=W,xe=({annotationField:t,annotations:s,annotation:c,index:h})=>{const{control:f}=(0,C.xW)();return e.createElement(D.B,{direction:"column",gap:0},e.createElement("label",null,e.createElement(C.xI,{name:`annotations.${h}.key`,defaultValue:t.key,render:({field:{ref:i,...m}})=>{if(!d.J3[c])return e.createElement(Ie,{field:m});let w;switch(t.key){case d.YH.dashboardUID:w="Dashboard and panel";break;case d.YH.panelID:w="";break;default:w=d.J3[c]&&d.J3[c]+" (optional)"}return e.createElement("span",{"data-testid":`annotation-key-${h}`},e.createElement(P.E,{color:"primary",variant:"bodySmall"},w))},control:f,rules:{required:{value:!!s[h]?.value,message:"Required."}}})),e.createElement(P.E,{variant:"bodySmall",color:"secondary"},d.H8[c]))};var H=a(14578),Ce=a(56361);const oe=({dashboard:t,panel:s,dashboardUid:c,panelId:h,onEditClick:f,onDeleteClick:i})=>{const m=(0,S.of)(Se),w=(0,Ce.JM)(t?.uid||c),A=(0,Ce.D2)(t?.uid||c,s?.id?.toString()||h);return e.createElement("div",{className:m.container},t&&e.createElement("a",{href:w,className:m.link,target:"_blank",rel:"noreferrer","data-testid":"dashboard-annotation"},t.title," ",e.createElement(H.I,{name:"external-link-alt"})),!t&&e.createElement("span",{className:m.noLink},"Dashboard ",c," "),s&&e.createElement("a",{href:A,className:m.link,target:"_blank",rel:"noreferrer","data-testid":"panel-annotation"},s.title||"<No title>"," ",e.createElement(H.I,{name:"external-link-alt"})),!s&&e.createElement("span",{className:m.noLink}," - Panel ",h),(t||s)&&e.createElement(e.Fragment,null,e.createElement(H.I,{name:"pen",onClick:f,className:m.icon}),e.createElement(H.I,{name:"trash-alt",onClick:i,className:m.icon})))},Se=t=>({container:(0,l.css)`
    margin-top: 5px;
  `,noLink:(0,l.css)`
    color: ${t.colors.text.secondary};
  `,link:(0,l.css)`
    color: ${t.colors.text.link};
    margin-right: ${t.spacing(1.5)};
  `,icon:(0,l.css)`
    margin-right: ${t.spacing(1)};
    cursor: pointer;
  `}),Ae=oe;var se=a(2543),re=a(40996),_=a(70713),ce=a(97222),ie=a(56034),de=a(37390),ee=a(42418),ue=a(67647),o=a(39558),r=a(49962);const x=r.H.injectEndpoints({endpoints:t=>({search:t.query({query:({query:s})=>{const c=new URLSearchParams({type:"dash-db",limit:"1000",page:"1",sort:"name_sort"});return s&&c.set("query",s),{url:`/api/search?${c.toString()}`}}}),dashboard:t.query({query:({uid:s})=>({url:`/api/dashboards/uid/${s}`})})})});var B=a(41811),y=a(34214);const v=(0,B.A)(t=>{const{dashboard:s,meta:c}=structuredClone(t);return new y.G(s,c)});function T(t){return x.endpoints.dashboard.useQuery({uid:t??""},{skip:!t,selectFromResult:({currentData:c,data:h,...f})=>({dashboardModel:c?v(c):void 0,...f})})}function Z(t,s){return t.title&&s.title?t.title.localeCompare(s.title):t.title&&!s.title?1:!t.title&&s.title?-1:0}const R=({dashboardUid:t,panelId:s,isOpen:c,onChange:h,onDismiss:f})=>{const i=(0,S.of)(Y),[m,w]=(0,e.useState)(t),[A,fe]=(0,e.useState)(s),[te,Ne]=(0,e.useState)(""),[X,z]=(0,e.useState)(""),[ae,ge]=(0,e.useState)(""),{useSearchQuery:$e}=x,{currentData:G=[],isFetching:J}=$e({query:X}),{dashboardModel:V,isFetching:ne}=T(m),Re=(0,e.useCallback)(E=>{w(E),fe(void 0)},[]),Ee=L(V),ve=Ee.filter(E=>E.title?.toLowerCase().includes(ae.toLowerCase())).sort(Z)??[],p=Ee.find(E=>u(E)&&E.id?.toString()===A),g=(0,e.useMemo)(()=>G.map(E=>E.uid).indexOf(m??""),[G,m]),F=t&&t===m,j=g>=0,Q=(0,e.useCallback)(E=>{const K=g>=0;F&&K&&E?.scrollToItem(g,"smart")},[F,g]);(0,re.A)(()=>{z(te)},500,[te]);const ye=({index:E,style:K})=>{const N=G[E],he=m===N.uid;return e.createElement("button",{type:"button",title:N.title,style:K,className:(0,l.cx)(i.rowButton,{[i.rowOdd]:E%2===1,[i.rowSelected]:he}),onClick:()=>Re(N.uid)},e.createElement("div",{className:(0,l.cx)(i.dashboardTitle,i.rowButtonTitle)},N.title),e.createElement("div",{className:i.dashboardFolder},e.createElement(H.I,{name:"folder"})," ",N.folderTitle??"General"))},le=({index:E,style:K})=>{const N=ve[E],he=N.title||"<No title>",Me=!!N.id&&A===N.id,Oe=N.type==="graph"||N.type==="timeseries",be=!u(N);return e.createElement("button",{type:"button",style:K,disabled:be,className:(0,l.cx)(i.rowButton,i.panelButton,{[i.rowOdd]:E%2===1,[i.rowSelected]:Me}),onClick:()=>be?se.noop:fe(N.id)},e.createElement("div",{className:i.rowButtonTitle,title:he},he),!Oe&&!be&&e.createElement(ie.m,{content:"The alert tab and alert annotations are only supported on graph and timeseries panels."},e.createElement(H.I,{name:"exclamation-triangle",className:i.warnIcon,"data-testid":"warning-icon"})),be&&e.createElement(ie.m,{content:"This panel does not have a valid identifier."},e.createElement(H.I,{name:"info-circle","data-testid":"info-icon"})))};return e.createElement(de.a,{title:"Select dashboard and panel",closeOnEscape:!0,isOpen:c,onDismiss:f,className:i.modal,contentClassName:i.modalContent},!j&&t&&V&&e.createElement(ee.F,{title:"Current selection",severity:"info",topSpacing:0,bottomSpacing:1,className:i.modalAlert},e.createElement("div",null,"Dashboard: ",V.title," (",V.uid,") in folder"," ",V.meta?.folderTitle??"General"),p&&e.createElement("div",null,"Panel: ",p.title," (",p.id,")")),e.createElement("div",{className:i.container},e.createElement(ue.Z,{value:te,onChange:Ne,title:"Search dashboard",placeholder:"Search dashboard",autoFocus:!0}),e.createElement(ue.Z,{value:ae,onChange:ge,title:"Search panel",placeholder:"Search panel"}),e.createElement("div",{className:i.column},J&&e.createElement(o._,{text:"Loading dashboards...",className:i.loadingPlaceholder}),!J&&e.createElement(_.Ay,null,({height:E,width:K})=>e.createElement(ce.Y1,{ref:Q,itemSize:50,height:E,width:K,itemCount:G.length},ye))),e.createElement("div",{className:i.column},!m&&!ne&&e.createElement("div",{className:i.selectDashboardPlaceholder},e.createElement("div",null,"Select a dashboard to get a list of available panels")),ne&&e.createElement(o._,{text:"Loading dashboard...",className:i.loadingPlaceholder}),m&&!ne&&e.createElement(_.Ay,null,({width:E,height:K})=>e.createElement(ce.Y1,{itemSize:32,height:K,width:E,itemCount:ve.length},le)))),e.createElement(de.a.ButtonRow,null,e.createElement($.$n,{type:"button",variant:"secondary",onClick:f,fill:"text"},"Cancel"),e.createElement($.$n,{type:"button",variant:"primary",disabled:!(m&&A),onClick:()=>{m&&A&&h(m,A)}},"Confirm")))};function L(t){if(!t)return[];const s=t.panels.filter(f=>f.type!=="row"),c=t.panels.filter(f=>f.collapsed).flatMap(f=>f.panels??[]);return[...s,...c]}const u=t=>{const s=typeof t.id=="number",c=typeof t.type=="string",h="libraryPanel"in t;return s&&(c||h)},Y=t=>{const s=(0,$.my)(t);return{container:(0,l.css)`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: min-content auto;
      gap: ${t.spacing(2)};
      flex: 1;
    `,column:(0,l.css)`
      flex: 1 1 auto;
    `,dashboardTitle:(0,l.css)`
      height: 22px;
      font-weight: ${t.typography.fontWeightBold};
    `,dashboardFolder:(0,l.css)`
      height: 20px;
      font-size: ${t.typography.bodySmall.fontSize};
      color: ${t.colors.text.secondary};
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      column-gap: ${t.spacing(1)};
      align-items: center;
    `,rowButton:(0,l.css)`
      ${s};
      padding: ${t.spacing(.5)};
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
      white-space: nowrap;
      cursor: pointer;
      border: 2px solid transparent;

      &:disabled {
        cursor: not-allowed;
        color: ${t.colors.text.disabled};
      }
    `,rowButtonTitle:(0,l.css)`
      text-overflow: ellipsis;
      overflow: hidden;
    `,rowSelected:(0,l.css)`
      border-color: ${t.colors.primary.border};
    `,rowOdd:(0,l.css)`
      background-color: ${t.colors.background.secondary};
    `,panelButton:(0,l.css)`
      display: flex;
      gap: ${t.spacing(1)};
      justify-content: space-between;
      align-items: center;
    `,loadingPlaceholder:(0,l.css)`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,selectDashboardPlaceholder:(0,l.css)`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-weight: ${t.typography.fontWeightBold};
    `,modal:(0,l.css)`
      height: 100%;
    `,modalContent:(0,l.css)`
      flex: 1;
      display: flex;
      flex-direction: column;
    `,modalAlert:(0,l.css)`
      flex-grow: 0;
    `,warnIcon:(0,l.css)`
      fill: ${t.colors.warning.main};
    `}};var me=a(64100),Pe=a(271);const pe=()=>{const t=(0,S.of)(Be),[s,c]=(0,b.A)(!1),{control:h,register:f,watch:i,formState:{errors:m},setValue:w}=(0,C.xW)(),A=i("annotations"),{fields:fe,append:te,remove:Ne}=(0,C.jz)({control:h,name:"annotations"}),X=A.find(p=>p.key===d.YH.dashboardUID)?.value,z=Number(A.find(p=>p.key===d.YH.panelID)?.value),[ae,ge]=(0,e.useState)(void 0),[$e,G]=(0,e.useState)(void 0),{dashboardModel:J,isFetching:V}=T(X);(0,e.useEffect)(()=>{if(V||!J)return;ge(J);const g=L(J).find(F=>F.id===z);G(g)},[z,J,V]);const ne=(p,g)=>{const F=(0,n.jM)(A,j=>{const Q=j.find(le=>le.key===d.YH.dashboardUID),ye=j.find(le=>le.key===d.YH.panelID);Q?Q.value=p:j.push({key:d.YH.dashboardUID,value:p}),ye?ye.value=g.toString():j.push({key:d.YH.panelID,value:g.toString()})});w("annotations",F),c(!1)},Re=()=>{const p=A.filter(g=>g.key!==d.YH.dashboardUID&&g.key!==d.YH.panelID);w("annotations",p),ge(void 0),G(void 0)},Ee=()=>{c(!0)};function ve(){return e.createElement(D.B,{direction:"row",gap:.5,alignItems:"baseline"},e.createElement(P.E,{variant:"bodySmall",color:"secondary"},"Add more context in your notification messages."),e.createElement(me.G,{contentText:`Annotations add metadata to provide more information on the alert in your alert notification messages.
          For example, add a Summary annotation to tell you which value caused the alert to fire or which server it happened on.
          Annotations can contain a combination of text and template code.`,title:"Annotations"}))}return e.createElement(Pe.P,{stepNo:5,title:"Add annotations",description:ve(),fullWidth:!0},e.createElement(D.B,{direction:"column",gap:1},fe.map((p,g)=>{const F=A[g]?.key?.toLocaleLowerCase().endsWith("url"),j=F?I.p:O.f,Q=p.key;return e.createElement("div",{key:p.id,className:t.flexRow},e.createElement("div",null,e.createElement(xe,{annotationField:p,annotations:A,annotation:Q,index:g}),X&&z&&p.key===d.YH.dashboardUID&&e.createElement(Ae,{dashboard:ae,panel:$e,dashboardUid:X.toString(),panelId:z.toString(),onEditClick:Ee,onDeleteClick:Re}),e.createElement("div",{className:t.annotationValueContainer},e.createElement(U.D,{hidden:p.key===d.YH.dashboardUID||p.key===d.YH.panelID,className:(0,l.cx)(t.flexRowItemMargin,t.field),invalid:!!m.annotations?.[g]?.value?.message,error:m.annotations?.[g]?.value?.message},e.createElement(j,{"data-testid":`annotation-value-${g}`,className:(0,l.cx)(t.annotationValueInput,{[t.textarea]:!F}),...f(`annotations.${g}.value`),placeholder:F?"https://":p.key&&`Enter a ${p.key}...`||"Enter custom annotation content...",defaultValue:p.value})),!d.J3[Q]&&e.createElement($.$n,{type:"button",className:t.deleteAnnotationButton,"aria-label":"delete annotation",icon:"trash-alt",variant:"secondary",onClick:()=>Ne(g)}))))}),e.createElement(D.B,{direction:"row",gap:1},e.createElement("div",{className:t.addAnnotationsButtonContainer},e.createElement($.$n,{icon:"plus",type:"button",variant:"secondary",onClick:()=>{te({key:"",value:""})}},"Add custom annotation"),!ae&&e.createElement($.$n,{type:"button",variant:"secondary",icon:"dashboard",onClick:()=>c(!0)},"Link dashboard and panel"))),s&&e.createElement(R,{isOpen:!0,dashboardUid:X,panelId:z,onChange:ne,onDismiss:()=>c(!1)})))},Be=t=>({annotationValueInput:(0,l.css)`
    width: 394px;
  `,textarea:(0,l.css)`
    height: 76px;
  `,addAnnotationsButtonContainer:(0,l.css)`
    margin-top: ${t.spacing(1)};
    gap: ${t.spacing(1)};
    display: flex;
  `,field:(0,l.css)`
    margin-bottom: ${t.spacing(.5)};
  `,flexRow:(0,l.css)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,flexRowItemMargin:(0,l.css)`
    margin-top: ${t.spacing(1)};
  `,deleteAnnotationButton:(0,l.css)`
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
  `,annotationTitle:(0,l.css)`
    color: ${t.colors.text.primary};
    margin-bottom: 3px;
  `,annotationContainer:(0,l.css)`
    margin-top: 5px;
  `,annotationDescription:(0,l.css)`
    color: ${t.colors.text.secondary};
  `,annotationValueContainer:(0,l.css)`
    display: flex;
  `}),k=pe},54749:(q,M,a)=>{a.d(M,{A:()=>ue});var l=a(32196),n=a(96540),e=a(49785),C=a(55852),b=a(40845),S=a(39558),D=a(67061),P=a(88575),I=a(76892),O=a(10354),U=a(94753),$=a(31678),d=a(61410),W=a(23770),De=a(93153),Ie=a(88323);const Le=(0,De.c)({ignoreCase:!1});function xe(o,r){return Le({label:o.label??"",value:o.value??"",data:{}},r)}const H=(o,r,x)=>{const B=x.some(v=>v.label===o),y=o.trim().length;return!B&&!!y},oe=n.forwardRef(function({onChange:r,options:x,defaultValue:B,type:y,onOpenMenu:v=()=>{}},T){return n.createElement("div",{ref:T},n.createElement(P.D,{disabled:!1,"data-testid":`alertlabel-${y}-picker`},n.createElement(Ie.l6,{placeholder:`Choose ${y}`,width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:r,onOpenMenu:v,filterOption:xe,isValidNewOption:H,options:x,maxMenuHeight:500,noOptionsMessage:"No labels found",defaultValue:B,allowCustomValue:!0})))});var Se=a(64100);const Ae=o=>{const r=(0,$.useDispatch)();(0,n.useEffect)(()=>{r((0,W.HB)(o))},[r,o]);const B=(0,d.$)(v=>v.rulerRules)[o],y=(0,n.useMemo)(()=>{const v={},T=B?.result;return T&&Object.values(T).flatMap(R=>R).flatMap(R=>R.rules).forEach(R=>{R.labels&&Object.entries(R.labels).forEach(([L,u])=>{if(!u)return;const Y=v[L];Y?Y.add(u):v[L]=new Set([u])})}),v},[B]);return{loading:B?.loading,labelsByKey:y}};function se(o=[]){return Array.from(o,r=>({label:r,value:r}))}const re=({remove:o,className:r,index:x})=>n.createElement(C.$n,{className:r,"aria-label":"delete label",icon:"trash-alt","data-testid":`delete-label-${x}`,variant:"secondary",onClick:()=>{o(x)}}),_=({append:o,className:r})=>n.createElement(C.$n,{className:r,icon:"plus-circle",type:"button",variant:"secondary",onClick:()=>{o({key:"",value:""})}},"Add label"),ce=({dataSourceName:o})=>{const r=(0,b.of)(ee),{control:x,watch:B,formState:{errors:y}}=(0,e.xW)(),v=B("labels"),{fields:T,remove:Z,append:R}=(0,e.jz)({control:x,name:"labels"}),{loading:L,labelsByKey:u}=Ae(o),[Y,me]=(0,n.useState)(""),Pe=(0,n.useMemo)(()=>se(Object.keys(u)),[u]),pe=(0,n.useCallback)(k=>se(u[k]),[u]),Be=(0,n.useMemo)(()=>pe(Y),[Y,pe]);return n.createElement(n.Fragment,null,L&&n.createElement(S._,{text:"Loading"}),!L&&n.createElement(D.B,{direction:"column",gap:.5},T.map((k,t)=>n.createElement("div",{key:k.id},n.createElement("div",{className:(0,l.cx)(r.flexRow,r.centerAlignRow)},n.createElement(P.D,{className:r.labelInput,invalid:!!y.labels?.[t]?.key?.message,error:y.labels?.[t]?.key?.message,"data-testid":`label-key-${t}`},n.createElement(e.xI,{name:`labels.${t}.key`,control:x,rules:{required:v[t]?.value?"Required.":!1},render:({field:{onChange:s,ref:c,...h}})=>n.createElement(oe,{...h,defaultValue:k.key?{label:k.key,value:k.key}:void 0,options:Pe,onChange:f=>{s(f.value),me(f.value)},type:"key"})})),n.createElement(I.c,{className:r.equalSign},"="),n.createElement(P.D,{className:r.labelInput,invalid:!!y.labels?.[t]?.value?.message,error:y.labels?.[t]?.value?.message,"data-testid":`label-value-${t}`},n.createElement(e.xI,{control:x,name:`labels.${t}.value`,rules:{required:v[t]?.value?"Required.":!1},render:({field:{onChange:s,ref:c,...h}})=>n.createElement(oe,{...h,defaultValue:k.value?{label:k.value,value:k.value}:void 0,options:Be,onChange:f=>{s(f.value)},onOpenMenu:()=>{me(v[t].key)},type:"value"})})),n.createElement(re,{className:r.deleteLabelButton,index:t,remove:Z})))),n.createElement(_,{className:r.addLabelButton,append:R})))},ie=()=>{const o=(0,b.of)(ee),{register:r,control:x,watch:B,formState:{errors:y}}=(0,e.xW)(),v=B("labels"),{fields:T,remove:Z,append:R}=(0,e.jz)({control:x,name:"labels"});return n.createElement(n.Fragment,null,T.map((L,u)=>n.createElement("div",{key:L.id},n.createElement("div",{className:(0,l.cx)(o.flexRow,o.centerAlignRow),"data-testid":"alertlabel-input-wrapper"},n.createElement(P.D,{className:o.labelInput,invalid:!!y.labels?.[u]?.key?.message,error:y.labels?.[u]?.key?.message},n.createElement(O.p,{...r(`labels.${u}.key`,{required:{value:!!v[u]?.value,message:"Required."}}),placeholder:"key","data-testid":`label-key-${u}`,defaultValue:L.key})),n.createElement(I.c,{className:o.equalSign},"="),n.createElement(P.D,{className:o.labelInput,invalid:!!y.labels?.[u]?.value?.message,error:y.labels?.[u]?.value?.message},n.createElement(O.p,{...r(`labels.${u}.value`,{required:{value:!!v[u]?.key,message:"Required."}}),placeholder:"value","data-testid":`label-value-${u}`,defaultValue:L.value})),n.createElement(re,{className:o.deleteLabelButton,index:u,remove:Z})))),n.createElement(_,{className:o.addLabelButton,append:R}))},de=({dataSourceName:o})=>{const r=(0,b.of)(ee);return n.createElement("div",null,n.createElement(D.B,{direction:"column",gap:1},n.createElement(U.E,{element:"h5"},"Labels"),n.createElement(D.B,{direction:"row",gap:1},n.createElement(U.E,{variant:"bodySmall",color:"secondary"},"Add labels to your rule for searching, silencing, or routing to a notification policy."),n.createElement(Se.G,{contentText:`The dropdown only displays labels that you have previously used for alerts.
            Select a label from the options below or type in a new one.`,title:"Labels"}))),n.createElement("div",{className:r.labelsContainer}),o?n.createElement(ce,{dataSourceName:o}):n.createElement(ie,null))},ee=o=>({icon:(0,l.css)({marginRight:o.spacing(.5)}),flexColumn:(0,l.css)({display:"flex",flexDirection:"column"}),flexRow:(0,l.css)({display:"flex",flexDirection:"row",justifyContent:"flex-start","& + button":{marginLeft:o.spacing(.5)}}),deleteLabelButton:(0,l.css)({marginLeft:o.spacing(.5),alignSelf:"flex-start"}),addLabelButton:(0,l.css)({flexGrow:0,alignSelf:"flex-start"}),centerAlignRow:(0,l.css)({alignItems:"baseline"}),equalSign:(0,l.css)({alignSelf:"flex-start",width:"28px",justifyContent:"center",marginLeft:o.spacing(.5)}),labelInput:(0,l.css)({width:"175px",marginBottom:`-${o.spacing(1)}`,"& + &":{marginLeft:o.spacing(1)}}),labelsContainer:(0,l.css)({marginBottom:o.spacing(3)})}),ue=de},64100:(q,M,a)=>{a.d(M,{G:()=>P});var l=a(32196),n=a(96540),e=a(40845),C=a(60782),b=a(67061),S=a(14578),D=a(94753);function P({contentText:O,externalLink:U,linkText:$,title:d}){const W=(0,e.of)(I);return n.createElement(C.G,{content:n.createElement("div",{className:W.mutedText},O),title:n.createElement(b.B,{gap:1,direction:"row"},n.createElement(S.I,{name:"question-circle"}),d),footer:U?n.createElement("a",{href:U,target:"_blank",rel:"noreferrer"},n.createElement(b.B,{direction:"row",gap:.5,alignItems:"center"},n.createElement(D.E,{color:"link"},$," ",n.createElement(S.I,{size:"sm",name:"external-link-alt"})))):void 0,closeButton:!0,placement:"bottom-start"},n.createElement("div",{className:W.helpInfo},n.createElement(b.B,{direction:"row",alignItems:"center",gap:.5},n.createElement(S.I,{name:"question-circle",size:"sm"}),n.createElement(D.E,{variant:"bodySmall",color:"primary"},"Need help?"))))}const I=O=>({mutedText:(0,l.css)`
    color: ${O.colors.text.secondary};
    font-size: ${O.typography.size.sm};
  `,helpInfo:(0,l.css)`
    cursor: pointer;
    text-decoration: underline;
  `})},271:(q,M,a)=>{a.d(M,{P:()=>D});var l=a(32196),n=a(96540),e=a(40845),C=a(84167),b=a(94753),S=a(67061);const D=({title:I,stepNo:O,children:U,fullWidth:$=!1,description:d})=>{const W=(0,e.of)(P);return n.createElement("div",{className:W.parent},n.createElement(C.n,{className:(0,l.cx)($&&W.fullWidth),label:n.createElement(b.E,{variant:"h3"},O,". ",I)},n.createElement(S.B,{direction:"column"},d&&n.createElement("div",{className:W.description},d),U)))},P=I=>({parent:(0,l.css)`
    display: flex;
    flex-direction: row;
    max-width: ${I.breakpoints.values.xl}px;
    border: solid 1px ${I.colors.border.weak};
    border-radius: ${I.shape.radius.default};
    padding: ${I.spacing(2)} ${I.spacing(3)};
  `,description:(0,l.css)`
    margin-top: -${I.spacing(2)};
  `,fullWidth:(0,l.css)`
    width: 100%;
  `})},51488:(q,M,a)=>{a.d(M,{f:()=>n});var l=a(82843);function n(e,C){const b=l.m.endpoints.getAlertmanagerConfiguration.useQuery(e??"",{...C,skip:!e});return{...b,error:b.error}}}}]);

//# sourceMappingURL=1660.d84bc84b9b2c93d4ad0c.js.map