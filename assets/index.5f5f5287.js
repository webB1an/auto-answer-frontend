import{d as L,a as S,r as f,b as T,e as q,f as u,g as n,c as j,h as e,w as t,i as I,j as O,o as w,k as r,t as R,l as G,E as H,m as J,_ as K}from"./index.04dfcef7.js";import{g as Q,a as W,b as X,d as Y}from"./constant.93539793.js";import{u as Z,P as ee}from"./usePagination.955f4bc7.js";import"./request.6e08a9f0.js";const te={class:"app-container"},oe=r("\u67E5\u8BE2"),ae=r("\u751F\u6210"),le=r("\u65B0\u5EFA"),ne=r(" \u7F16\u8F91 "),ue=r("\u5220\u9664"),se={class:"dialog-footer"},re=r("\u5173\u95ED"),de=L({__name:"index",setup(ie){const k=S(),{total:g,query:d}=Z(),i=f({brand:"",name:""}),y=f([]),_=f(!1),C=f(""),m=()=>{Q({...d,requestData:{...i.value}}).then(l=>{console.log(l.data),y.value=l.data.list,g.value=l.data.total})},B=()=>{m()},x=()=>{d.page=1,m()},{copy:F}=T(),V=q("clipboard-write");console.log(u(V));const E=()=>{X().then(l=>{if(u(V)==="granted")return F(l.data);C.value=l.data,_.value=!0})},h=()=>{k.push({path:"/cooker/add"})},D=l=>{k.push({path:`/cooker/editor/${l.id}`})},P=l=>{!l.id||H.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{Y(l.id).then(o=>{console.log(o);const c=o.code===90001?"success":"error";J({message:o.msg,type:c}),m()})}).catch(()=>{})};return m(),(l,o)=>{const c=n("el-input"),b=n("el-form-item"),v=n("el-col"),p=n("el-button"),U=n("el-row"),z=n("el-form"),A=n("el-card"),s=n("el-table-column"),M=n("el-table"),N=n("el-dialog");return w(),j("div",te,[e(A,null,{default:t(()=>[e(z,{model:i.value,inline:""},{default:t(()=>[e(U,null,{default:t(()=>[e(v,{span:8},{default:t(()=>[e(b,{label:"\u54C1\u724C",prop:"brand"},{default:t(()=>[e(c,{modelValue:i.value.brand,"onUpdate:modelValue":o[0]||(o[0]=a=>i.value.brand=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(v,{span:8},{default:t(()=>[e(b,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[e(c,{modelValue:i.value.name,"onUpdate:modelValue":o[1]||(o[1]=a=>i.value.name=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(v,{span:8},{default:t(()=>[e(b,null,{default:t(()=>[e(p,{onClick:x,type:"primary"},{default:t(()=>[oe]),_:1}),e(p,{onClick:E,type:"primary"},{default:t(()=>[ae]),_:1}),e(p,{onClick:h,type:"primary"},{default:t(()=>[le]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(M,{class:"mt20",data:y.value,border:""},{default:t(()=>[e(s,{label:"\u5206\u7C7B",align:"center"},{default:t(a=>[r(R(u(W)(a.row.sort)),1)]),_:1}),e(s,{prop:"brand",label:"\u54C1\u724C",align:"center"}),e(s,{prop:"name",label:"\u540D\u79F0",align:"center"}),e(s,{prop:"price",label:"\u4EF7\u683C",align:"center"}),e(s,{prop:"wind",label:"\u6392\u98CE\u91CF",align:"center"}),e(s,{prop:"fire",label:"\u706B\u529B",align:"center"}),e(s,{prop:"pa",label:"\u98CE\u538B",align:"center"}),e(s,{label:"\u64CD\u4F5C",width:"120"},{default:t(a=>[e(p,{link:"",type:"primary",size:"small",onClick:$=>D(a.row)},{default:t(()=>[ne]),_:2},1032,["onClick"]),e(p,{link:"",type:"danger",size:"small",onClick:$=>P(a.row)},{default:t(()=>[ue]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),u(g)>0?(w(),I(ee,{key:0,class:"mt20",page:u(d).page,"onUpdate:page":o[2]||(o[2]=a=>u(d).page=a),limit:u(d).pageSize,"onUpdate:limit":o[3]||(o[3]=a=>u(d).pageSize=a),total:u(g),onPagination:B},null,8,["page","limit","total"])):O("v-if",!0),e(N,{modelValue:_.value,"onUpdate:modelValue":o[6]||(o[6]=a=>_.value=a),title:"\u590D\u5236\u751F\u6210\u5185\u5BB9",width:"80%"},{footer:t(()=>[G("span",se,[e(p,{type:"primary",onClick:o[5]||(o[5]=a=>_.value=!1)},{default:t(()=>[re]),_:1})])]),default:t(()=>[e(c,{modelValue:C.value,"onUpdate:modelValue":o[4]||(o[4]=a=>C.value=a),type:"textarea",rows:"10"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}}});const fe=K(de,[["__scopeId","data-v-247338a8"],["__file","/home/runner/work/auto-answer-frontend/auto-answer-frontend/src/views/cooker/index.vue"]]);export{fe as default};