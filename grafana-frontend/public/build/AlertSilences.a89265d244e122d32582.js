"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9347],{40715:(W,C,a)=>{a.d(C,{o:()=>x});var e=a(96540),A=a(31678),g=a(97007);function x(S){const M=(0,A.useDispatch)(),P=(0,e.useRef)(S);P.current=S,(0,e.useEffect)(()=>()=>{M((0,g.N)({cleanupAction:P.current}))},[M])}},24480:(W,C,a)=>{a.r(C),a.d(C,{default:()=>St});var e=a(96540),A=a(58476),g=a(42418),x=a(66602),S=a(31678),M=a(77583),P=a(37959),T=a(57895),r=a(32196),I=a(2543),h=a(49785),D=a(40996),f=a(70416),R=a(43127),B=a(47232),Z=a(32264),$=a(40845),ve=a(84167),b=a(88575),K=a(10354),he=a(21744),F=a(55852),pe=a(40715),L=a(60021),Ae=a(39964),J=a(61410),w=a(23770),N=a(98164),ye=a(32642),U=a(56361),X=a(88467),Se=a(88323),xe=a(29158);const De=({className:t})=>{const n=(0,$.of)(Ce),s=(0,h.xW)(),{control:o,register:l,formState:{errors:m}}=s,{fields:c=[],append:E,remove:i}=(0,h.jz)({name:"matchers"});return e.createElement("div",{className:(0,r.cx)(t,n.wrapper)},e.createElement(b.D,{label:"Matching labels",required:!0},e.createElement("div",null,e.createElement("div",{className:n.matchers},c.map((v,d)=>e.createElement("div",{className:n.row,key:`${v.id}`,"data-testid":"matcher"},e.createElement(b.D,{label:"Label",invalid:!!m?.matchers?.[d]?.name,error:m?.matchers?.[d]?.name?.message},e.createElement(K.p,{...l(`matchers.${d}.name`,{required:{value:!0,message:"Required."}}),defaultValue:v.name,placeholder:"label"})),e.createElement(b.D,{label:"Operator"},e.createElement(h.xI,{control:o,render:({field:{onChange:p,ref:u,...y}})=>e.createElement(Se.l6,{...y,onChange:z=>p(z.value),className:n.matcherOptions,options:N.xH,"aria-label":"operator"}),defaultValue:v.operator||N.xH[0].value,name:`matchers.${d}.operator`,rules:{required:{value:!0,message:"Required."}}})),e.createElement(b.D,{label:"Value",invalid:!!m?.matchers?.[d]?.value,error:m?.matchers?.[d]?.value?.message},e.createElement(K.p,{...l(`matchers.${d}.value`,{required:{value:!0,message:"Required."}}),defaultValue:v.value,placeholder:"value"})),c.length>1&&e.createElement(xe.K,{className:n.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>i(d)},"Remove")))),e.createElement(F.$n,{type:"button",icon:"plus",variant:"secondary",onClick:()=>{const v={name:"",value:"",operator:L.ho.equal};E(v)}},"Add matcher"))))},Ce=t=>({wrapper:(0,r.css)`
      margin-top: ${t.spacing(2)};
    `,row:(0,r.css)`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${t.colors.background.secondary};
      padding: ${t.spacing(1)} ${t.spacing(1)} 0 ${t.spacing(1)};
      & > * + * {
        margin-left: ${t.spacing(2)};
      }
    `,removeButton:(0,r.css)`
      margin-left: ${t.spacing(1)};
      margin-top: ${t.spacing(2.5)};
    `,matcherOptions:(0,r.css)`
      min-width: 140px;
    `,matchers:(0,r.css)`
      max-width: ${t.breakpoints.values.sm}px;
      margin: ${t.spacing(1)} 0;
      padding-top: ${t.spacing(.5)};
    `}),Me=De;var Ie=a(54230);const Pe=()=>{const{control:t,getValues:n}=(0,h.xW)(),{field:{onChange:s,value:o},fieldState:{invalid:l}}=(0,h.as)({name:"startsAt",control:t,rules:{validate:y=>n().endsAt>y}}),{field:{onChange:m,value:c},fieldState:{invalid:E}}=(0,h.as)({name:"endsAt",control:t,rules:{validate:y=>n().startsAt<y}}),{field:{onChange:i,value:v}}=(0,h.as)({name:"timeZone",control:t}),d=l||E,p=(0,B.KQ)(o),u=(0,B.KQ)(c);return e.createElement(b.D,{className:$e.timeRange,label:"Silence start and end",error:d?"To is before or the same as from":"",invalid:d},e.createElement(Ie.b,{value:{from:p,to:u,raw:{from:p,to:u}},timeZone:v,onChange:y=>{s((0,B.KQ)(y.from)),m((0,B.KQ)(y.to))},onChangeTimeZone:y=>i(y),hideTimeZone:!1,hideQuickRanges:!0,placeholder:"Select time range"}))},$e={timeRange:(0,r.css)`
    width: 400px;
  `};var Oe=a(39938),Te=a(39558),Re=a(82843),Ne=a(25968),te=a(69087),ae=a(75591),ne=a(97754);const Be=({amSourceName:t,matchers:n})=>{const{useGetAlertmanagerAlertsQuery:s}=Re.m,o=(0,$.of)(se),l=be(),m=n.some(d=>d.value&&d.name),{currentData:c=[],isFetching:E,isError:i}=s({amSourceName:t,filter:{matchers:n}},{skip:!m,refetchOnMountOrArgChange:!0}),v=c.map(d=>({id:d.fingerprint,data:d}));return e.createElement("div",null,e.createElement("h4",{className:o.title},"Affected alert instances",v.length>0?e.createElement(Oe.E,{className:o.badge,color:"blue",text:v.length}):null),!m&&e.createElement("span",null,"Add a valid matcher to see affected alerts"),i&&e.createElement(g.F,{title:"Preview not available",severity:"error"},"Error occured when generating affected alerts preview. Are you matchers valid?"),E&&e.createElement(Te._,{text:"Loading..."}),!E&&!i&&m&&e.createElement("div",{className:o.table},v.length>0?e.createElement(ae.E,{items:v,isExpandable:!1,cols:l,pagination:{itemsPerPage:10}}):e.createElement("span",null,"No matching alert instances found")))};function be(){const t=(0,$.of)(se);return[{id:"state",label:"State",renderCell:function({data:s}){return e.createElement(ne.y,{state:s.status.state})},size:"120px",className:t.stateColumn},{id:"labels",label:"Labels",renderCell:function({data:s}){return e.createElement(te.m,{labels:s.labels,size:"sm"})},size:"auto"},{id:"created",label:"Created",renderCell:function({data:s}){return e.createElement(e.Fragment,null,(0,Ne.mo)(s.startsAt)?"-":(0,B.KQ)(s.startsAt).format("YYYY-MM-DD HH:mm:ss"))},size:"180px"}]}const se=t=>({table:(0,r.css)`
    max-width: ${t.breakpoints.values.lg}px;
  `,moreMatches:(0,r.css)`
    margin-top: ${t.spacing(1)};
  `,title:(0,r.css)`
    display: flex;
    align-items: center;
  `,badge:(0,r.css)`
    margin-left: ${t.spacing(1)};
  `,stateColumn:(0,r.css)`
    display: flex;
    align-items: center;
  `}),Le=t=>{const n={},s=t.get("comment"),o=t.getAll("matcher"),l=(0,ye.ou)(o);return l.length&&(n.matchers=l.map(N.MU)),s&&(n.comment=s),n},Ue=(t,n)=>{const s=new Date;if(n){const l=Date.parse(n.endsAt)<Date.now()?{start:s,end:(0,f.Ri)(s,{hours:2})}:{start:new Date(n.startsAt),end:new Date(n.endsAt)};return{id:n.id,startsAt:l.start.toISOString(),endsAt:l.end.toISOString(),comment:n.comment,createdBy:n.createdBy,duration:(0,f.dU)(l),isRegex:!1,matchers:n.matchers?.map(N.MU)||[],matcherName:"",matcherValue:"",timeZone:R.lE}}else{const o=(0,f.Ri)(s,{hours:2});return{id:"",startsAt:s.toISOString(),endsAt:o.toISOString(),comment:`created ${(0,B.KQ)().format("YYYY-MM-DD HH:mm")}`,createdBy:Z.$.bootData.user.name,duration:"2h",isRegex:!1,matchers:[{name:"",value:"",operator:L.ho.equal}],matcherName:"",matcherValue:"",timeZone:R.lE,...Le(t)}}},We=({silence:t,alertManagerSourceName:n})=>{const[s]=(0,Ae.l)(),o=(0,e.useMemo)(()=>Ue(s,t),[t,s]),l=(0,h.mN)({defaultValues:o}),m=(0,S.useDispatch)(),c=(0,$.of)(Fe),[E,i]=(0,e.useState)(o.matchers.map(N.Wc)),{loading:v}=(0,J.$)(O=>O.updateSilence);(0,pe.o)(O=>O.unifiedAlerting.updateSilence=X.jA);const{register:d,handleSubmit:p,formState:u,watch:y,setValue:z,clearErrors:xt}=l,Dt=O=>{const{id:V,startsAt:G,endsAt:Mt,comment:It,createdBy:Pt,matchers:$t}=O,Ot=$t.map(N.Wc),fe=(0,I.pickBy)({id:V,startsAt:G,endsAt:Mt,comment:It,createdBy:Pt,matchers:Ot},Tt=>!!Tt);m((0,w.a7)({alertManagerSourceName:n,payload:fe,exitOnSave:!0,successMessage:`Silence ${fe.id?"updated":"created"}`}))},Q=y("duration"),Y=y("startsAt"),H=y("endsAt"),ue=y("matchers"),[ge,Ee]=(0,e.useState)(Q);(0,D.A)(()=>{if((0,f.vd)(Y)&&(0,f.vd)(H))if(Q!==ge)z("endsAt",(0,B.KQ)((0,f.Ri)(new Date(Y),(0,f.E9)(Q))).toISOString()),Ee(Q);else{const O=new Date(Y).valueOf();if(new Date(H).valueOf()>O){const G=(0,f.dU)({start:new Date(Y),end:new Date(H)});z("duration",G),Ee(G)}}},700,[xt,Q,H,ge,z,Y]),(0,D.A)(()=>{const O=ue.filter(V=>V.name&&V.value).map(N.Wc);(0,I.isEqual)(E,O)||i(O)},700,[ue]);const Ct=!!(Z.$.bootData.user.isSignedIn&&Z.$.bootData.user.name);return e.createElement(h.Op,{...l},e.createElement("form",{onSubmit:p(Dt)},e.createElement(ve.n,{label:`${t?"Recreate silence":"Create silence"}`},e.createElement("div",{className:(0,r.cx)(c.flexRow,c.silencePeriod)},e.createElement(Pe,null),e.createElement(b.D,{label:"Duration",invalid:!!u.errors.duration,error:u.errors.duration&&(u.errors.duration.type==="required"?"Required field":u.errors.duration.message)},e.createElement(K.p,{className:c.createdBy,...d("duration",{validate:O=>Object.keys((0,f.E9)(O)).length===0?"Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)":void 0}),id:"duration"}))),e.createElement(Me,null),e.createElement(b.D,{className:(0,r.cx)(c.field,c.textArea),label:"Comment",required:!0,error:u.errors.comment?.message,invalid:!!u.errors.comment},e.createElement(he.f,{...d("comment",{required:{value:!0,message:"Required."}}),rows:5,placeholder:"Details about the silence"})),!Ct&&e.createElement(b.D,{className:(0,r.cx)(c.field,c.createdBy),label:"Created By",required:!0,error:u.errors.createdBy?.message,invalid:!!u.errors.createdBy},e.createElement(K.p,{...d("createdBy",{required:{value:!0,message:"Required."}}),placeholder:"Who's creating the silence"})),e.createElement(Be,{amSourceName:n,matchers:E})),e.createElement("div",{className:c.flexRow},v&&e.createElement(F.$n,{disabled:!0,icon:"spinner",variant:"primary"},"Saving..."),!v&&e.createElement(F.$n,{type:"submit"},"Save silence"),e.createElement(F.z9,{href:(0,U.nL)("alerting/silences",n),variant:"secondary"},"Cancel"))))},Fe=t=>({field:(0,r.css)`
    margin: ${t.spacing(1,0)};
  `,textArea:(0,r.css)`
    max-width: ${t.breakpoints.values.sm}px;
  `,createdBy:(0,r.css)`
    width: 200px;
  `,flexRow:(0,r.css)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${t.spacing(1)};
    }
  `,silencePeriod:(0,r.css)`
    max-width: ${t.breakpoints.values.sm}px;
  `}),re=We;var j=a(85858),k=a(67061),Ke=a(57418),q=a(14578),ze=a(50720),_=a(83277),ee=a(19073),Qe=a(64853);const le=({className:t,...n})=>{const s=(0,$.of)(Ye);return e.createElement(F.$n,{variant:"secondary",size:"xs",className:(0,r.cx)(s.wrapper,t),...n})},Ye=t=>({wrapper:(0,r.css)`
    height: 24px;
    font-size: ${t.typography.bodySmall.fontSize};
  `});var Ve=a(72275),we=a(64149);const je=({matchers:t})=>{const n=(0,$.of)(He);return e.createElement("div",null,e.createElement(we.L,{className:n.tags,tags:t.map(s=>`${s.name}${(0,N.MN)(s)}${s.value}`)}))},He=()=>({tags:(0,r.css)`
    justify-content: flex-start;
  `});var Ge=a(76442),Ze=a(7521),Je=a(16233),Xe=a(75471);const ke=({alertManagerSourceName:t})=>{const n=(0,Xe.jy)(t);return Je.TP.hasPermission(n.create)?e.createElement(Ze.A,{title:"You haven't created any silences yet",buttonIcon:"bell-slash",buttonLink:(0,U.nL)("alerting/silence/new",t),buttonTitle:"Create silence"}):e.createElement(Ge.c,{callToActionElement:e.createElement("div",null),message:"No silences found."})};var qe=a(4554),_e=a(64047);const et=({alert:t,className:n})=>{const[s,o]=(0,e.useState)(!0),l=(0,f.dU)({start:new Date(t.startsAt),end:new Date(t.endsAt)}),m=Object.entries(t.labels).reduce((c,[E,i])=>((E==="alertname"||E==="__alert_rule_title__")&&(c=i),c),"");return e.createElement(e.Fragment,null,e.createElement("tr",{className:n},e.createElement("td",null,e.createElement(_e.e,{isCollapsed:s,onToggle:c=>o(c)})),e.createElement("td",null,e.createElement(ne.y,{state:t.status.state})),e.createElement("td",null,"for ",l," seconds"),e.createElement("td",null,m)),!s&&e.createElement("tr",{className:n},e.createElement("td",null),e.createElement("td",{colSpan:5},e.createElement(te.m,{labels:t.labels,size:"sm"}))))},tt=({silencedAlerts:t})=>{const n=(0,$.of)(qe.L),s=(0,$.of)(at);return t.length?e.createElement("table",{className:(0,r.cx)(n.table,s.tableMargin)},e.createElement("colgroup",null,e.createElement("col",{className:n.colExpand}),e.createElement("col",{className:s.colState}),e.createElement("col",null),e.createElement("col",{className:s.colName})),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"State"),e.createElement("th",null),e.createElement("th",null,"Alert name"))),e.createElement("tbody",null,t.map((o,l)=>e.createElement(et,{key:o.fingerprint,alert:o,className:l%2===0?n.evenRow:""})))):null},at=t=>({tableMargin:(0,r.css)`
    margin-bottom: ${t.spacing(1)};
  `,colState:(0,r.css)`
    width: 110px;
  `,colName:(0,r.css)`
    width: 65%;
  `}),nt=tt,st=({silence:t})=>{const{startsAt:n,endsAt:s,comment:o,createdBy:l,silencedAlerts:m}=t,c=(0,$.of)(rt),E="YYYY-MM-DD HH:mm",i=j.parse(n),v=j.parse(s),d=(0,f.dU)({start:new Date(n),end:new Date(s)});return e.createElement("div",{className:c.container},e.createElement("div",{className:c.title},"Comment"),e.createElement("div",null,o),e.createElement("div",{className:c.title},"Schedule"),e.createElement("div",null,`${i?.format(E)} - ${v?.format(E)}`),e.createElement("div",{className:c.title},"Duration"),e.createElement("div",null," ",d),e.createElement("div",{className:c.title},"Created by"),e.createElement("div",null," ",l),e.createElement("div",{className:c.title},"Affected alerts"),e.createElement(nt,{silencedAlerts:m}))},rt=t=>({container:(0,r.css)`
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-row-gap: 1rem;
  `,title:(0,r.css)`
    color: ${t.colors.text.primary};
  `,row:(0,r.css)`
    margin: ${t.spacing(1,0)};
  `});var lt=a(65415);const ct={[L.RC.Active]:"good",[L.RC.Expired]:"neutral",[L.RC.Pending]:"neutral"},ot=({state:t})=>e.createElement(lt.O,{state:ct[t]},t);var it=a(60029),dt=a(56034);const ce=()=>(0,I.uniqueId)("query-string-"),mt=()=>{const[t,n]=(0,e.useState)(ce()),[s,o]=(0,_.s)(),{queryString:l}=(0,U.qy)(s),m=(0,$.of)(ut),c=(0,I.debounce)(v=>{const d=v.target;o({queryString:d.value||null})},400),E=()=>{o({queryString:null,silenceState:null}),setTimeout(()=>n(ce()))},i=l&&l.length>3?(0,N.J$)(l).length===0:!1;return e.createElement("div",{className:m.flexRow},e.createElement(b.D,{className:m.rowChild,label:e.createElement(it.J,null,e.createElement(k.B,{gap:.5},e.createElement("span",null,"Search by matchers"),e.createElement(dt.m,{content:e.createElement("div",null,"Filter silences by matchers using a comma separated list of matchers, ie:",e.createElement("pre",null,"severity=critical, instance=~cluster-us-.+"))},e.createElement(q.I,{name:"info-circle",size:"sm"})))),invalid:i,error:i?"Query must use valid matcher syntax":null},e.createElement(K.p,{key:t,className:m.searchInput,prefix:e.createElement(q.I,{name:"search"}),onChange:c,defaultValue:l??"",placeholder:"Search","data-testid":"search-query-input"})),l&&e.createElement("div",{className:m.rowChild},e.createElement(F.$n,{variant:"secondary",icon:"times",onClick:E},"Clear filters")))},ut=t=>({searchInput:(0,r.css)`
    width: 360px;
  `,flexRow:(0,r.css)`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${t.spacing(3)};
    border-bottom: 1px solid ${t.colors.border.medium};
  `,rowChild:(0,r.css)`
    margin-right: ${t.spacing(1)};
    margin-bottom: 0;
    max-height: 52px;
  `,fieldLabel:(0,r.css)`
    font-size: 12px;
    font-weight: 500;
  `}),gt=({silences:t,alertManagerAlerts:n,alertManagerSourceName:s})=>{const o=(0,$.of)(de),[l]=(0,_.s)(),m=ie(t,!1),c=ie(t,!0),{silenceState:E}=(0,U.qy)(l),i=E===L.RC.Expired,v=(0,e.useMemo)(()=>{const p=u=>n.filter(y=>y.status.silencedBy.includes(u));return m.map(u=>{const y=p(u.id);return{id:u.id,data:{...u,silencedAlerts:y}}})},[m,n]),d=(0,e.useMemo)(()=>{const p=u=>n.filter(y=>y.status.silencedBy.includes(u));return c.map(u=>{const y=p(u.id);return{id:u.id,data:{...u,silencedAlerts:y}}})},[c,n]);return e.createElement("div",{"data-testid":"silences-table"},!!t.length&&e.createElement(k.B,{direction:"column"},e.createElement(mt,null),e.createElement(Qe._,{actions:[ee.QI.CreateSilence]},e.createElement("div",{className:o.topButtonContainer},e.createElement(F.z9,{href:(0,U.nL)("/alerting/silence/new",s),icon:"plus"},"Add Silence"))),e.createElement(oe,{items:v,alertManagerSourceName:s,dataTestId:"not-expired-table"}),d.length>0&&e.createElement(Ke.M,{label:`Expired silences (${d.length})`,isOpen:i},e.createElement("div",{className:o.callout},e.createElement(q.I,{className:o.calloutIcon,name:"info-circle"}),e.createElement("span",null,"Expired silences are automatically deleted after 5 days.")),e.createElement(oe,{items:d,alertManagerSourceName:s,dataTestId:"expired-table"}))),!t.length&&e.createElement(ke,{alertManagerSourceName:s}))};function oe({items:t,alertManagerSourceName:n,dataTestId:s}){const o=Et(n);return t.length?e.createElement(ae.E,{pagination:{itemsPerPage:25},items:t,cols:o,isExpandable:!0,dataTestId:s,renderExpandedContent:({data:l})=>e.createElement(st,{silence:l})}):e.createElement(e.Fragment,null,"No matching silences found")}const ie=(t,n=!1)=>{const[s]=(0,_.s)();return(0,e.useMemo)(()=>{const{queryString:o}=(0,U.qy)(s),l=s?.silenceIds;return t.filter(m=>typeof l=="string"&&!l.split(",").includes(m.id)||o&&!(0,N.J$)(o).every(i=>m.matchers?.some(({name:v,value:d,isEqual:p,isRegex:u})=>i.name===v&&i.value===d&&i.isEqual===p&&i.isRegex===u))?!1:n?m.status.state===L.RC.Expired:m.status.state!==L.RC.Expired)},[s,t,n])},de=t=>({topButtonContainer:(0,r.css)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,addNewSilence:(0,r.css)`
    margin: ${t.spacing(2,0)};
  `,callout:(0,r.css)`
    background-color: ${t.colors.background.secondary};
    border-top: 3px solid ${t.colors.info.border};
    border-radius: ${t.shape.radius.default};
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * {
      margin-left: ${t.spacing(1)};
    }
  `,calloutIcon:(0,r.css)`
    color: ${t.colors.info.text};
  `,editButton:(0,r.css)`
    margin-left: ${t.spacing(.5)};
  `});function Et(t){const n=(0,S.useDispatch)(),s=(0,$.of)(de),[o,l]=(0,ee.L7)(ee.QI.UpdateSilence);return(0,e.useMemo)(()=>{const m=E=>{n((0,w.Nj)(t,E))},c=[{id:"state",label:"State",renderCell:function({data:{status:i}}){return e.createElement(ot,{state:i.state})},size:4},{id:"matchers",label:"Matching labels",renderCell:function({data:{matchers:i}}){return e.createElement(je,{matchers:i||[]})},size:10},{id:"alerts",label:"Alerts",renderCell:function({data:{silencedAlerts:i}}){return e.createElement("span",{"data-testid":"alerts"},i.length)},size:4},{id:"schedule",label:"Schedule",renderCell:function({data:{startsAt:i,endsAt:v}}){const d=j.parse(i),p=j.parse(v),u="YYYY-MM-DD HH:mm";return e.createElement(e.Fragment,null," ",d?.format(u)," ","-",p?.format(u))},size:7}];return o&&l&&c.push({id:"actions",label:"Actions",renderCell:function({data:i}){return e.createElement(k.B,{gap:.5},i.status.state==="expired"?e.createElement(ze.N,{href:(0,U.nL)(`/alerting/silence/${i.id}/edit`,t)},e.createElement(le,{icon:"sync"},"Recreate")):e.createElement(le,{icon:"bell",onClick:()=>m(i.id)},"Unsilence"),i.status.state!=="expired"&&e.createElement(Ve.M,{className:s.editButton,to:(0,U.nL)(`/alerting/silence/${i.id}/edit`,t),icon:"pen",tooltip:"edit"}))},size:5}),c},[t,n,s.editButton,l,o])}const ft=gt,me={icon:"bell-slash"};function vt(){const{isExact:t,path:n}=(0,A.W5)(),[s,o]=(0,e.useState)();return(0,e.useEffect)(()=>{n==="/alerting/silence/new"?o({...me,id:"silence-new",text:"Add silence"}):n==="/alerting/silence/:id/edit"&&o({...me,id:"silence-edit",text:"Edit silence"})},[n,t]),s}var ht=a(70383),pt=a(55740);const At=()=>{const{selectedAlertmanager:t}=(0,ht.VI)(),n=(0,S.useDispatch)(),s=(0,J.$)(p=>p.silences),o=(0,J.$)(p=>p.amAlerts),l=t?o[t]||X.jA:void 0,{currentData:m}=M.L.useDiscoverAmFeaturesQuery({amSourceName:t??""},{skip:!t});(0,e.useEffect)(()=>{function p(){t&&(n((0,w.ly)(t)),n((0,w.El)(t)))}p();const u=setInterval(()=>p,pt.wG);return()=>{clearInterval(u)}},[t,n]);const{result:c,loading:E,error:i}=t&&s[t]||X.jA,v=(0,e.useCallback)(p=>c&&c.find(u=>u.id===p),[c]),d=i?.message?.includes("the Alertmanager is not configured")&&m?.lazyConfigInit;return t?e.createElement(e.Fragment,null,e.createElement(T.M,{currentAlertmanager:t}),d&&e.createElement(g.F,{title:"The selected Alertmanager has no configuration",severity:"warning"},"Create a new contact point to create a configuration using the default values or contact your administrator to set up the Alertmanager."),i&&!E&&!d&&e.createElement(g.F,{severity:"error",title:"Error loading silences"},i.message||"Unknown error."),l?.error&&!l?.loading&&!d&&e.createElement(g.F,{severity:"error",title:"Error loading Alertmanager alerts"},l.error?.message||"Unknown error."),c&&!i&&e.createElement(A.dO,null,e.createElement(A.qh,{exact:!0,path:"/alerting/silences"},e.createElement(ft,{silences:c,alertManagerAlerts:l?.result??[],alertManagerSourceName:t})),e.createElement(A.qh,{exact:!0,path:"/alerting/silence/new"},e.createElement(re,{alertManagerSourceName:t})),e.createElement(A.qh,{exact:!0,path:"/alerting/silence/:id/edit"},({match:p})=>p?.params.id&&e.createElement(re,{silence:v(p.params.id),alertManagerSourceName:t})))):null};function yt(){const t=vt();return e.createElement(P.y,{navId:"silences",pageNav:t,accessType:"instance"},e.createElement(At,null))}const St=(0,x.Xc)(yt,{style:"page"})},64853:(W,C,a)=>{a.d(C,{_:()=>S});var e=a(2543),A=a.n(e),g=a(96540),x=a(19073);const S=({actions:h,children:D})=>{const f=(0,e.filter)(h,r),R=(0,e.filter)(h,I);return f.length?g.createElement(M,{actions:f},D):R.length?g.createElement(P,{actions:R},D):null},M=({actions:h,children:D})=>{const f=(0,x.iI)();return T(f,h)?g.createElement(g.Fragment,null,D):null},P=({actions:h,children:D})=>{const f=(0,x.e2)();return T(f,h)?g.createElement(g.Fragment,null,D):null};function T(h,D){return(0,e.chain)(h).pick(D).values().value().some(([f,R])=>R===!0)}function r(h){return Object.values(x.QI).includes(h)}function I(h){return Object.values(x.RY).includes(h)}},64047:(W,C,a)=>{a.d(C,{e:()=>g});var e=a(96540),A=a(55852);const g=({isCollapsed:x,onToggle:S,idControlled:M,className:P,text:T,size:r="xl",...I})=>e.createElement(A.$n,{type:"button",fill:"text",variant:"secondary","aria-expanded":!x,"aria-controls":M,className:P,icon:x?"angle-right":"angle-down",onClick:()=>S(!x),...I},T)},57895:(W,C,a)=>{a.d(C,{M:()=>T});var e=a(32196),A=a(96540),g=a(40845),x=a(42418),S=a(60021),M=a(82843),P=a(57220);function T({currentAlertmanager:I}){const h=(0,g.of)(r),D=I===P.hY,{currentData:f}=M.m.endpoints.getAlertmanagerChoiceStatus.useQuery(void 0,{skip:!D});if(!(f?.alertmanagersChoice&&[S.nA.External,S.nA.All].includes(f?.alertmanagersChoice))||!D)return null;const B=f.numExternalAlertmanagers>0;return f.alertmanagersChoice===S.nA.External?A.createElement(x.F,{title:"Grafana alerts are not delivered to Grafana Alertmanager"},"Grafana is configured to send alerts to external Alertmanagers only. Changing Grafana Alertmanager configuration will not affect delivery of your alerts.",A.createElement("div",{className:h.adminHint},"To change your Alertmanager setup, go to the Alerting Admin page. If you do not have access, contact your Administrator.")):f.alertmanagersChoice===S.nA.All&&B?A.createElement(x.F,{title:"You have additional Alertmanagers to configure",severity:"warning"},"Ensure you make configuration changes in the correct Alertmanagers; both internal and external. Changing one will not affect the others.",A.createElement("div",{className:h.adminHint},"To change your Alertmanager setup, go to the Alerting Admin page. If you do not have access, contact your Administrator.")):null}const r=I=>({adminHint:(0,e.css)`
    font-size: ${I.typography.bodySmall.fontSize};
    font-weight: ${I.typography.bodySmall.fontWeight};
  `})},72275:(W,C,a)=>{a.d(C,{M:()=>x});var e=a(96540),A=a(56034),g=a(55852);const x=({tooltip:S,icon:M,to:P,target:T,onClick:r,className:I,tooltipPlacement:h="top",...D})=>{const f=typeof S=="string"?S:void 0;return e.createElement(A.m,{content:S,placement:h},P?e.createElement(g.z9,{variant:"secondary",fill:"text",icon:M,href:P,size:"sm",target:T,...D,"aria-label":f}):e.createElement(g.$n,{className:I,variant:"secondary",fill:"text",size:"sm",icon:M,type:"button",onClick:r,...D,"aria-label":f}))}},97754:(W,C,a)=>{a.d(C,{y:()=>S});var e=a(96540),A=a(60021),g=a(65415);const x={[A.Or.Active]:"bad",[A.Or.Unprocessed]:"neutral",[A.Or.Suppressed]:"info"},S=({state:M})=>e.createElement(g.O,{state:x[M]},M)},4554:(W,C,a)=>{a.d(C,{L:()=>A});var e=a(32196);const A=g=>({table:(0,e.css)`
    width: 100%;
    border-radius: ${g.shape.radius.default};
    border: solid 1px ${g.colors.border.weak};
    background-color: ${g.colors.background.secondary};

    th {
      padding: ${g.spacing(1)};
    }

    td {
      padding: 0 ${g.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:(0,e.css)`
    background-color: ${g.colors.background.primary};
  `,colExpand:(0,e.css)`
    width: 36px;
  `,nameCell:(0,e.css)`
    gap: ${g.spacing(1)};
  `,actionsCell:(0,e.css)`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${g.spacing(.5)};
    }
  `})}}]);

//# sourceMappingURL=AlertSilences.a89265d244e122d32582.js.map