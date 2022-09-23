import{d as L,r as f,b as S,e as T,f as u,c as q,g as e,w as t,h as j,i as I,j as n,o as B,k as d,t as O,l as R,u as G,E as H,m as J,_ as K}from"./index.8852d5c4.js";import{g as Q,a as W,b as X,d as Y}from"./constant.d01e9e3a.js";import{u as Z,_ as ee}from"./usePagination.fb617450.js";import"./request.40164c1b.js";const te={class:"app-container"},oe=d("\u67E5\u8BE2"),ae=d("\u751F\u6210"),le=d("\u65B0\u5EFA"),ne=d(" \u7F16\u8F91 "),ue=d("\u5220\u9664"),se={class:"dialog-footer"},de=d("\u5173\u95ED"),re=L({__name:"index",setup(ie){const k=G(),{total:g,query:r}=Z(),i=f({brand:"",name:""}),y=f([]),_=f(!1),C=f(""),m=()=>{Q({...r,requestData:{...i.value}}).then(l=>{console.log(l.data),y.value=l.data.list,g.value=l.data.total})},F=()=>{m()},x=()=>{r.page=1,m()},{copy:w}=S(),V=T("clipboard-write");console.log(u(V));const E=()=>{X().then(l=>{if(u(V)==="granted")return w(l.data);C.value=l.data,_.value=!0})},D=()=>{k.push({path:"/cooker/add"})},h=l=>{k.push({path:`/cooker/editor/${l.id}`})},U=l=>{!l.id||H.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{Y(l.id).then(o=>{console.log(o);const c=o.code===90001?"success":"error";J({message:o.msg,type:c}),m()})}).catch(()=>{})};return m(),(l,o)=>{const c=n("el-input"),b=n("el-form-item"),v=n("el-col"),p=n("el-button"),P=n("el-row"),$=n("el-form"),z=n("el-card"),s=n("el-table-column"),A=n("el-table"),M=n("el-dialog");return B(),q("div",te,[e(z,null,{default:t(()=>[e($,{model:i.value,inline:""},{default:t(()=>[e(P,null,{default:t(()=>[e(v,{span:8},{default:t(()=>[e(b,{label:"\u54C1\u724C",prop:"brand"},{default:t(()=>[e(c,{modelValue:i.value.brand,"onUpdate:modelValue":o[0]||(o[0]=a=>i.value.brand=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(v,{span:8},{default:t(()=>[e(b,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[e(c,{modelValue:i.value.name,"onUpdate:modelValue":o[1]||(o[1]=a=>i.value.name=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(v,{span:8},{default:t(()=>[e(b,null,{default:t(()=>[e(p,{onClick:x,type:"primary"},{default:t(()=>[oe]),_:1}),e(p,{onClick:E,type:"primary"},{default:t(()=>[ae]),_:1}),e(p,{onClick:D,type:"primary"},{default:t(()=>[le]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(A,{class:"mt20",data:y.value,border:""},{default:t(()=>[e(s,{label:"\u5206\u7C7B",align:"center"},{default:t(a=>[d(O(u(W)(a.row.sort)),1)]),_:1}),e(s,{prop:"brand",label:"\u54C1\u724C",align:"center"}),e(s,{prop:"name",label:"\u540D\u79F0",align:"center"}),e(s,{prop:"price",label:"\u4EF7\u683C",align:"center"}),e(s,{prop:"wind",label:"\u6392\u98CE\u91CF",align:"center"}),e(s,{prop:"fire",label:"\u706B\u529B",align:"center"}),e(s,{prop:"pa",label:"\u98CE\u538B",align:"center"}),e(s,{label:"\u64CD\u4F5C",width:"120"},{default:t(a=>[e(p,{link:"",type:"primary",size:"small",onClick:N=>h(a.row)},{default:t(()=>[ne]),_:2},1032,["onClick"]),e(p,{link:"",type:"danger",size:"small",onClick:N=>U(a.row)},{default:t(()=>[ue]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),u(g)>0?(B(),j(ee,{key:0,class:"mt20",page:u(r).page,"onUpdate:page":o[2]||(o[2]=a=>u(r).page=a),limit:u(r).pageSize,"onUpdate:limit":o[3]||(o[3]=a=>u(r).pageSize=a),total:u(g),onPagination:F},null,8,["page","limit","total"])):I("",!0),e(M,{modelValue:_.value,"onUpdate:modelValue":o[6]||(o[6]=a=>_.value=a),title:"\u590D\u5236\u751F\u6210\u5185\u5BB9",width:"80%"},{footer:t(()=>[R("span",se,[e(p,{type:"primary",onClick:o[5]||(o[5]=a=>_.value=!1)},{default:t(()=>[de]),_:1})])]),default:t(()=>[e(c,{modelValue:C.value,"onUpdate:modelValue":o[4]||(o[4]=a=>C.value=a),type:"textarea",rows:"10"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}}});const fe=K(re,[["__scopeId","data-v-c202919f"]]);export{fe as default};