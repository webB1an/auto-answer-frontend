import{d as q,r as _,b as j,e as I,f as u,c as O,g as e,w as t,h as F,i as x,j as n,o as k,k as d,t as R,l as G,u as H,E as J,m as K,_ as Q}from"./index.0da0276a.js";import{g as W,a as X,b as Y,d as Z}from"./constant.5ea1f706.js";import{u as ee,_ as te}from"./usePagination.10066b8d.js";import"./request.8b906fe9.js";const oe={class:"app-container"},ae=d("\u67E5\u8BE2"),le=d("\u751F\u6210"),ne=d("\u65B0\u5EFA"),ue=d(" \u7F16\u8F91 "),se=d(" \u5220\u9664 "),de={class:"dialog-footer"},re=d("\u5173\u95ED"),ie=q({__name:"index",setup(pe){console.log("ssss","production");const y=H(),{total:g,query:r}=ee(),i=_({brand:"",name:""}),V=_([]),m=_(!1),b=_(""),f=()=>{W({...r,requestData:{...i.value}}).then(l=>{console.log(l.data),V.value=l.data.list,g.value=l.data.total})},w=()=>{f()},E=()=>{r.page=1,f()},{copy:D}=j(),B=I("clipboard-write");console.log(u(B));const h=()=>{Y().then(l=>{if(u(B)==="granted")return D(l.data);b.value=l.data,m.value=!0})},U=()=>{y.push({path:"/cooker/add"})},P=l=>{y.push({path:`/cooker/editor/${l.id}`})},$=l=>{!l.id||J.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{Z(l.id).then(o=>{console.log(o);const c=o.code===90001?"success":"error";K({message:o.msg,type:c}),f()})}).catch(()=>{})},z=_("production");return f(),(l,o)=>{const c=n("el-input"),C=n("el-form-item"),v=n("el-col"),p=n("el-button"),A=n("el-row"),M=n("el-form"),N=n("el-card"),s=n("el-table-column"),L=n("el-table"),S=n("el-dialog");return k(),O("div",oe,[e(N,null,{default:t(()=>[e(M,{model:i.value,inline:""},{default:t(()=>[e(A,null,{default:t(()=>[e(v,{span:8},{default:t(()=>[e(C,{label:"\u54C1\u724C",prop:"brand"},{default:t(()=>[e(c,{modelValue:i.value.brand,"onUpdate:modelValue":o[0]||(o[0]=a=>i.value.brand=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(v,{span:8},{default:t(()=>[e(C,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[e(c,{modelValue:i.value.name,"onUpdate:modelValue":o[1]||(o[1]=a=>i.value.name=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(v,{span:8},{default:t(()=>[e(C,null,{default:t(()=>[e(p,{onClick:E,type:"primary"},{default:t(()=>[ae]),_:1}),e(p,{onClick:h,type:"primary"},{default:t(()=>[le]),_:1}),e(p,{onClick:U,type:"primary"},{default:t(()=>[ne]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(L,{class:"mt20",data:V.value,border:""},{default:t(()=>[e(s,{label:"\u5206\u7C7B",align:"center"},{default:t(a=>[d(R(u(X)(a.row.sort)),1)]),_:1}),e(s,{prop:"brand",label:"\u54C1\u724C",align:"center"}),e(s,{prop:"name",label:"\u540D\u79F0",align:"center"}),e(s,{prop:"price",label:"\u4EF7\u683C",align:"center"}),e(s,{prop:"wind",label:"\u6392\u98CE\u91CF",align:"center"}),e(s,{prop:"fire",label:"\u706B\u529B",align:"center"}),e(s,{prop:"pa",label:"\u98CE\u538B",align:"center"}),e(s,{label:"\u64CD\u4F5C",width:"120"},{default:t(a=>[e(p,{link:"",type:"primary",size:"small",onClick:T=>P(a.row)},{default:t(()=>[ue]),_:2},1032,["onClick"]),z.value==="development"?(k(),F(p,{key:0,link:"",type:"danger",size:"small",onClick:T=>$(a.row)},{default:t(()=>[se]),_:2},1032,["onClick"])):x("",!0)]),_:1})]),_:1},8,["data"]),u(g)>0?(k(),F(te,{key:0,class:"mt20",page:u(r).page,"onUpdate:page":o[2]||(o[2]=a=>u(r).page=a),limit:u(r).pageSize,"onUpdate:limit":o[3]||(o[3]=a=>u(r).pageSize=a),total:u(g),onPagination:w},null,8,["page","limit","total"])):x("",!0),e(S,{modelValue:m.value,"onUpdate:modelValue":o[6]||(o[6]=a=>m.value=a),title:"\u590D\u5236\u751F\u6210\u5185\u5BB9",width:"80%"},{footer:t(()=>[G("span",de,[e(p,{type:"primary",onClick:o[5]||(o[5]=a=>m.value=!1)},{default:t(()=>[re]),_:1})])]),default:t(()=>[e(c,{modelValue:b.value,"onUpdate:modelValue":o[4]||(o[4]=a=>b.value=a),type:"textarea",rows:"10"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}}});const ge=Q(ie,[["__scopeId","data-v-b5c8a927"]]);export{ge as default};