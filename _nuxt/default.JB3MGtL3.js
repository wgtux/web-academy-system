import{d as b,r as v,i as n,t as i,M as f,A as e,z as t,x as A,v as T,P as w,O as B,N as d,y as F,B as y,Z as M,$ as S}from"./entry._Roug-4P.js";import{_ as V}from"./StudentModal.vue.xegFG5q5.js";const z={class:"mt-4"},H=b({__name:"Aside",props:{menuToggle:{type:Boolean,required:!0}},setup(g){const a=g,c=v([{text:"Inicio",to:"/",icon:"mdi-home"},{text:"Alunos",to:"/students",icon:"mdi-account-multiple"},{text:"Treinos",to:"/training",icon:"mdi-weight-lifter"}]);return v(!0),(s,h)=>{const l=n("v-list-item"),_=n("v-divider"),r=n("v-icon"),u=n("v-list-item-title"),p=n("v-list"),m=n("v-navigation-drawer");return i(),f(m,{rail:a.menuToggle,permanent:"",color:"deep-purple-darken-4",border:"0"},{default:e(()=>[t(p,null,{default:e(()=>[A("div",null,[t(l,{title:a.menuToggle?"L":"Logo da Academia"},null,8,["title"])]),t(_,{class:"mt-2"}),A("div",z,[(i(!0),T(w,null,B(d(c),(o,k)=>(i(),f(l,{key:k,value:o,to:o.to,rounded:"s-xl"},{prepend:e(()=>[t(r,{icon:o.icon,class:"mr-n5"},null,8,["icon"])]),default:e(()=>[t(u,{textContent:F(o.text)},null,8,["textContent"])]),_:2},1032,["value","to"]))),128))])]),_:1})]),_:1},8,["rail"])}}}),j=b({__name:"Header",props:{isOpenMenuToggle:{type:Function}},setup(g){const a=g,c=v([{title:"Meus dados",link:"#",icon:""},{title:"Menu teste",link:"#",icon:""},{title:"Sair",link:"#",icon:""}]),s=v(!1);return(h,l)=>{const _=n("v-app-bar-nav-icon"),r=n("v-spacer"),u=V,p=n("v-icon"),m=n("v-tooltip"),o=n("v-btn"),k=n("v-avatar"),N=n("v-list-item-title"),L=n("v-list-item"),$=n("v-list"),O=n("v-menu"),P=n("v-app-bar");return i(),f(P,{color:"white",elevation:"0",flat:""},{prepend:e(()=>[t(_,{onClick:a.isOpenMenuToggle},null,8,["onClick"])]),default:e(()=>[t(r),t(u,{"is-header":!0}),t(o,{icon:""},{default:e(()=>[t(p,null,{default:e(()=>[y("mdi-bell")]),_:1}),t(m,{activator:"parent",location:"bottom",color:"primary"},{default:e(()=>[y("Notificações")]),_:1})]),_:1}),t(O,{transition:"slide-y-transition"},{activator:e(({props:x})=>[t(k,M(x,{image:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",size:"40"}),null,16),t(o,M({color:"primary"},x,{onClick:l[0]||(l[0]=C=>s.value=!d(s)),"append-icon":d(s)?"mdi-menu-up":"mdi-menu-down",variant:"plain"}),{default:e(()=>[y(" Fulano de tal ")]),_:2},1040,["append-icon"])]),default:e(()=>[t($,null,{default:e(()=>[(i(!0),T(w,null,B(d(c),(x,C)=>(i(),f(L,{key:C},{default:e(()=>[t(N,null,{default:e(()=>[y(F(x.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}}),E=b({__name:"default",setup(g){const a=v(!1);function c(){a.value=!a.value}return(s,h)=>{const l=H,_=j,r=S,u=n("v-container"),p=n("v-main"),m=n("v-layout"),o=n("v-app");return i(),f(o,null,{default:e(()=>[t(m,{class:"rounded rounded-md"},{default:e(()=>[t(l,{"menu-toggle":d(a)},null,8,["menu-toggle"]),t(_,{"is-open-menu-toggle":c}),t(p,{class:"d-flex align-center justify-center",style:{"min-height":"300px","background-color":"#FAFAFA"}},{default:e(()=>[t(u,null,{default:e(()=>[t(r)]),_:1})]),_:1})]),_:1})]),_:1})}}});export{E as default};
