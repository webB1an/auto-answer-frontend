import{d as V,b as E,e as P,f as i,i as F,r as s,o as x,g as B,h as j,j as L,c as R,k as e,w as t,l as A,m as b,u as I,E as T,_ as G}from"./index.3659fd9e.js";import{g as H,a as J,d as K}from"./cooker.07100486.js";const O=V({__name:"index",props:{page:null,limit:null,total:null},emits:["update:page","update:limit","pagination"],setup(g,{emit:r}){const d=g,o=E({get(){return d.page},set(_){r("update:page",_)}}),l=E({get(){return d.limit},set(_){r("update:limit",_)}}),k=()=>{r("pagination")},c=()=>{r("pagination")};return(_,m)=>{const y=s("el-pagination");return x(),P(y,{currentPage:i(o),"onUpdate:currentPage":m[0]||(m[0]=f=>F(o)?o.value=f:null),"page-size":i(l),"onUpdate:page-size":m[1]||(m[1]=f=>F(l)?l.value=f:null),"page-sizes":[10,20,40,60,80,100],background:"",total:g.total,onSizeChange:k,onCurrentChange:c,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])}}});function Q(){const g=B(0),r=j({page:1,pageSize:10});return{total:g,query:r}}const W={class:"app-container"},X=b("\u67E5\u8BE2"),Y=b("\u751F\u6210"),Z=b("\u65B0\u5EFA"),ee=b(" \u7F16\u8F91 "),te=b("\u5220\u9664"),ae=V({__name:"index",setup(g){const r=I(),{total:d,query:o}=Q(),l=B({brand:"",name:""}),k=B([]),c=()=>{H({...o,requestData:{...l.value}}).then(n=>{console.log(n.data),k.value=n.data.list,d.value=n.data.total})},_=()=>{c()},m=()=>{o.page=1,c()},{copy:y}=L(),f=()=>{J().then(n=>{y(n.data)})},w=()=>{r.push({path:"/cooker/add"})},S=n=>{r.push({path:`/cooker/editor/${n.id}`})},U=n=>{!n.id||K(n.id).then(a=>{console.log(a);const v=a.code===90001?"success":"error";T({message:a.msg,type:v}),c()})};return c(),(n,a)=>{const v=s("el-input"),h=s("el-form-item"),z=s("el-col"),C=s("el-button"),D=s("el-row"),$=s("el-form"),q=s("el-card"),p=s("el-table-column"),M=s("el-table");return x(),R("div",W,[e(q,null,{default:t(()=>[e($,{model:l.value,inline:""},{default:t(()=>[e(D,null,{default:t(()=>[e(z,{span:8},{default:t(()=>[e(h,{label:"\u54C1\u724C",prop:"brand"},{default:t(()=>[e(v,{modelValue:l.value.brand,"onUpdate:modelValue":a[0]||(a[0]=u=>l.value.brand=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(z,{span:8},{default:t(()=>[e(h,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[e(v,{modelValue:l.value.name,"onUpdate:modelValue":a[1]||(a[1]=u=>l.value.name=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(z,{span:8},{default:t(()=>[e(h,null,{default:t(()=>[e(C,{onClick:m,type:"primary"},{default:t(()=>[X]),_:1}),e(C,{onClick:f,type:"primary"},{default:t(()=>[Y]),_:1}),e(C,{onClick:w,type:"primary"},{default:t(()=>[Z]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(M,{class:"mt20",data:k.value,border:""},{default:t(()=>[e(p,{prop:"sort",label:"\u5206\u7C7B",align:"center"}),e(p,{prop:"brand",label:"\u54C1\u724C",align:"center"}),e(p,{prop:"name",label:"\u540D\u79F0",align:"center"}),e(p,{prop:"price",label:"\u4EF7\u683C",align:"center"}),e(p,{prop:"wind",label:"\u6392\u98CE\u91CF",align:"center"}),e(p,{prop:"fire",label:"\u706B\u529B",align:"center"}),e(p,{prop:"pa",label:"\u98CE\u538B",align:"center"}),e(p,{label:"\u64CD\u4F5C",width:"120"},{default:t(u=>[e(C,{link:"",type:"primary",size:"small",onClick:N=>S(u.row)},{default:t(()=>[ee]),_:2},1032,["onClick"]),e(C,{link:"",type:"danger",size:"small",onClick:N=>U(u.row)},{default:t(()=>[te]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),i(d)>0?(x(),P(O,{key:0,class:"mt20",page:i(o).page,"onUpdate:page":a[2]||(a[2]=u=>i(o).page=u),limit:i(o).pageSize,"onUpdate:limit":a[3]||(a[3]=u=>i(o).pageSize=u),total:i(d),onPagination:_},null,8,["page","limit","total"])):A("",!0)])}}});const le=G(ae,[["__scopeId","data-v-d2ab5887"]]);export{le as default};
