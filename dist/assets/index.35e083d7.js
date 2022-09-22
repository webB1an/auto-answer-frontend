import{d as F,b as h,e as w,f as c,i as E,r as l,o as B,g as k,h as I,j as T,c as G,k as e,w as t,l as H,m as J,n as f,u as K,E as O,_ as Q}from"./index.2bee75f2.js";import{g as W,a as X,d as Y}from"./cooker.7c0fc58d.js";const Z=F({__name:"index",props:{page:null,limit:null,total:null},emits:["update:page","update:limit","pagination"],setup(C,{emit:r}){const _=C,u=h({get(){return _.page},set(d){r("update:page",d)}}),s=h({get(){return _.limit},set(d){r("update:limit",d)}}),y=()=>{r("pagination")},m=()=>{r("pagination")};return(d,i)=>{const V=l("el-pagination");return B(),w(V,{currentPage:c(u),"onUpdate:currentPage":i[0]||(i[0]=v=>E(u)?u.value=v:null),"page-size":c(s),"onUpdate:page-size":i[1]||(i[1]=v=>E(s)?s.value=v:null),"page-sizes":[10,20,40,60,80,100],background:"",total:C.total,onSizeChange:y,onCurrentChange:m,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])}}});function ee(){const C=k(0),r=I({page:1,pageSize:10});return{total:C,query:r}}const te={class:"app-container"},ae=f("\u67E5\u8BE2"),oe=f("\u751F\u6210"),ne=f("\u65B0\u5EFA"),le=f(" \u7F16\u8F91 "),ue=f("\u5220\u9664"),se={class:"dialog-footer"},re=f("\u5173\u95ED"),ie=F({__name:"index",setup(C){const r=K(),{total:_,query:u}=ee(),s=k({brand:"",name:""}),y=k([]),m=k(!1),d=k(""),i=()=>{W({...u,requestData:{...s.value}}).then(n=>{console.log(n.data),y.value=n.data.list,_.value=n.data.total})},V=()=>{i()},v=()=>{u.page=1,i()},{copy:P,isSupported:U}=T(),D=()=>{X().then(n=>{if(U)return P(n.data);d.value=n.data,m.value=!0})},S=()=>{r.push({path:"/cooker/add"})},$=n=>{r.push({path:`/cooker/editor/${n.id}`})},N=n=>{!n.id||Y(n.id).then(a=>{console.log(a);const b=a.code===90001?"success":"error";O({message:a.msg,type:b}),i()})};return i(),(n,a)=>{const b=l("el-input"),x=l("el-form-item"),z=l("el-col"),g=l("el-button"),q=l("el-row"),M=l("el-form"),j=l("el-card"),p=l("el-table-column"),L=l("el-table"),R=l("el-dialog");return B(),G("div",te,[e(j,null,{default:t(()=>[e(M,{model:s.value,inline:""},{default:t(()=>[e(q,null,{default:t(()=>[e(z,{span:8},{default:t(()=>[e(x,{label:"\u54C1\u724C",prop:"brand"},{default:t(()=>[e(b,{modelValue:s.value.brand,"onUpdate:modelValue":a[0]||(a[0]=o=>s.value.brand=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(z,{span:8},{default:t(()=>[e(x,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[e(b,{modelValue:s.value.name,"onUpdate:modelValue":a[1]||(a[1]=o=>s.value.name=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(z,{span:8},{default:t(()=>[e(x,null,{default:t(()=>[e(g,{onClick:v,type:"primary"},{default:t(()=>[ae]),_:1}),e(g,{onClick:D,type:"primary"},{default:t(()=>[oe]),_:1}),e(g,{onClick:S,type:"primary"},{default:t(()=>[ne]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(L,{class:"mt20",data:y.value,border:""},{default:t(()=>[e(p,{prop:"sort",label:"\u5206\u7C7B",align:"center"}),e(p,{prop:"brand",label:"\u54C1\u724C",align:"center"}),e(p,{prop:"name",label:"\u540D\u79F0",align:"center"}),e(p,{prop:"price",label:"\u4EF7\u683C",align:"center"}),e(p,{prop:"wind",label:"\u6392\u98CE\u91CF",align:"center"}),e(p,{prop:"fire",label:"\u706B\u529B",align:"center"}),e(p,{prop:"pa",label:"\u98CE\u538B",align:"center"}),e(p,{label:"\u64CD\u4F5C",width:"120"},{default:t(o=>[e(g,{link:"",type:"primary",size:"small",onClick:A=>$(o.row)},{default:t(()=>[le]),_:2},1032,["onClick"]),e(g,{link:"",type:"danger",size:"small",onClick:A=>N(o.row)},{default:t(()=>[ue]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),c(_)>0?(B(),w(Z,{key:0,class:"mt20",page:c(u).page,"onUpdate:page":a[2]||(a[2]=o=>c(u).page=o),limit:c(u).pageSize,"onUpdate:limit":a[3]||(a[3]=o=>c(u).pageSize=o),total:c(_),onPagination:V},null,8,["page","limit","total"])):H("",!0),e(R,{modelValue:m.value,"onUpdate:modelValue":a[6]||(a[6]=o=>m.value=o),title:"\u590D\u5236\u751F\u6210\u5185\u5BB9",width:"80%"},{footer:t(()=>[J("span",se,[e(g,{type:"primary",onClick:a[5]||(a[5]=o=>m.value=!1)},{default:t(()=>[re]),_:1})])]),default:t(()=>[e(b,{modelValue:d.value,"onUpdate:modelValue":a[4]||(a[4]=o=>d.value=o),type:"textarea",rows:"10"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}}});const ce=Q(ie,[["__scopeId","data-v-a2362850"]]);export{ce as default};
