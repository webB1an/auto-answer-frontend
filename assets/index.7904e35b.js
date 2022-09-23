import{d as j,a as I,r as b,b as R,e as G,f as s,g as o,c as w,h as e,w as t,i as E,j as H,k as r,o as v,F as J,A as K,t as Q,l as W,E as X,m as Y,_ as Z}from"./index.1bc5db11.js";import{g as ee,s as le,a as te,b as ae,d as oe}from"./constant.e49cf8c7.js";import{u as ne,P as ue}from"./usePagination.b7e3369c.js";import"./request.66e005ad.js";const se={class:"app-container"},re=r(" \u4FEE\u6539\u6D4B\u8BD5 "),de=r("\u67E5\u8BE2"),ie=r("\u751F\u6210"),pe=r("\u65B0\u5EFA"),me=r(" \u7F16\u8F91 "),_e=r("\u5220\u9664"),ce={class:"dialog-footer"},fe=r("\u5173\u95ED"),ge=j({__name:"index",setup(be){const x=I(),{total:y,query:i}=ne(),n=b({sort:"",brand:"",type:"",minPrice:0,maxPrice:5e4}),F=b([]),c=b(!1),V=b(""),f=()=>{ee({...i,requestData:{...n.value}}).then(u=>{console.log(u.data),F.value=u.data.list,y.value=u.data.total})},D=()=>{f()},P=()=>{i.page=1,f()},{copy:A}=R(),B=G("clipboard-write");console.log(s(B));const U=()=>{ae().then(u=>{if(s(B)==="granted")return A(u.data);V.value=u.data,c.value=!0})},h=()=>{x.push({path:"/air/add"})},M=u=>{x.push({path:`/air/editor/${u.id}`})},z=u=>{!u.id||X.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{oe(u.id).then(a=>{console.log(a);const g=a.code===90001?"success":"error";Y({message:a.msg,type:g}),f()})}).catch(()=>{})};return f(),(u,a)=>{const g=o("el-option"),L=o("el-select"),p=o("el-form-item"),m=o("el-col"),C=o("el-input"),k=o("el-input-number"),_=o("el-button"),N=o("el-row"),$=o("el-form"),q=o("el-card"),d=o("el-table-column"),S=o("el-table"),T=o("el-dialog");return v(),w("div",se,[re,e(q,null,{default:t(()=>[e($,{model:n.value,inline:"","label-width":"100px"},{default:t(()=>[e(N,null,{default:t(()=>[e(m,{span:8},{default:t(()=>[e(p,{label:"\u5206\u7C7B",prop:"sort"},{default:t(()=>[e(L,{modelValue:n.value.sort,"onUpdate:modelValue":a[0]||(a[0]=l=>n.value.sort=l),modelModifiers:{number:!0},placeholder:"\u9009\u62E9\u5206\u7C7B"},{default:t(()=>[e(g,{label:"\u5168\u90E8",value:"",key:""}),(v(!0),w(J,null,K(s(le),l=>(v(),E(g,{label:l.label,value:l.value,key:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:t(()=>[e(p,{label:"\u54C1\u724C",prop:"brand"},{default:t(()=>[e(C,{modelValue:n.value.brand,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value.brand=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:t(()=>[e(p,{label:"\u578B\u53F7",prop:"type"},{default:t(()=>[e(C,{modelValue:n.value.type,"onUpdate:modelValue":a[2]||(a[2]=l=>n.value.type=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:t(()=>[e(p,{label:"\u6700\u4F4E\u4EF7",prop:"minPrice"},{default:t(()=>[e(k,{modelValue:n.value.minPrice,"onUpdate:modelValue":a[3]||(a[3]=l=>n.value.minPrice=l),min:0,max:5e4},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:t(()=>[e(p,{label:"\u6700\u9AD8\u4EF7",prop:"maxPrice"},{default:t(()=>[e(k,{modelValue:n.value.maxPrice,"onUpdate:modelValue":a[4]||(a[4]=l=>n.value.maxPrice=l),min:0,max:5e4},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:t(()=>[e(p,{label:" "},{default:t(()=>[e(_,{onClick:P,type:"primary"},{default:t(()=>[de]),_:1}),e(_,{onClick:U,type:"primary"},{default:t(()=>[ie]),_:1}),e(_,{onClick:h,type:"primary"},{default:t(()=>[pe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(S,{class:"mt20",data:F.value,border:""},{default:t(()=>[e(d,{label:"\u5206\u7C7B",align:"center"},{default:t(l=>[r(Q(s(te)(l.row.sort)),1)]),_:1}),e(d,{prop:"brand",label:"\u54C1\u724C",align:"center"}),e(d,{prop:"type",label:"\u578B\u53F7",align:"center"}),e(d,{prop:"price",label:"\u4EF7\u683C",align:"center"}),e(d,{prop:"power",label:"\u5339\u6570",align:"center"}),e(d,{prop:"quality",label:"\u8D28\u4FDD",align:"center"}),e(d,{label:"\u64CD\u4F5C",width:"120"},{default:t(l=>[e(_,{link:"",type:"primary",size:"small",onClick:O=>M(l.row)},{default:t(()=>[me]),_:2},1032,["onClick"]),e(_,{link:"",type:"danger",size:"small",onClick:O=>z(l.row)},{default:t(()=>[_e]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),s(y)>0?(v(),E(ue,{key:0,class:"mt20",page:s(i).page,"onUpdate:page":a[5]||(a[5]=l=>s(i).page=l),limit:s(i).pageSize,"onUpdate:limit":a[6]||(a[6]=l=>s(i).pageSize=l),total:s(y),onPagination:D},null,8,["page","limit","total"])):H("v-if",!0),e(T,{modelValue:c.value,"onUpdate:modelValue":a[9]||(a[9]=l=>c.value=l),title:"\u590D\u5236\u751F\u6210\u5185\u5BB9",width:"80%"},{footer:t(()=>[W("span",ce,[e(_,{type:"primary",onClick:a[8]||(a[8]=l=>c.value=!1)},{default:t(()=>[fe]),_:1})])]),default:t(()=>[e(C,{modelValue:V.value,"onUpdate:modelValue":a[7]||(a[7]=l=>V.value=l),type:"textarea",rows:"10"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}}});const xe=Z(ge,[["__scopeId","data-v-0012f3ec"],["__file","/home/runner/work/auto-answer-frontend/auto-answer-frontend/src/views/air/index.vue"]]);export{xe as default};
