import{d as j,a as I,r as b,b as R,e as G,f as r,g as o,c as B,h as e,w as a,i as E,j as H,o as v,F as J,A as K,k as d,t as Q,l as W,E as X,m as Y,_ as Z}from"./index.f08c47ae.js";import{g as ee,s as le,a as ae,b as te,d as oe}from"./constant.4bbaca24.js";import{u as ne,P as ue}from"./usePagination.c1a29af9.js";import"./request.a83a32d5.js";const re={class:"app-container"},se={class:"dialog-footer"},de=j({__name:"index",setup(ie){const x=I(),{total:y,query:i}=ne(),n=b({sort:"",brand:"",type:"",minPrice:0,maxPrice:5e4}),F=b([]),_=b(!1),V=b(""),f=()=>{ee({...i,requestData:{...n.value}}).then(u=>{console.log(u.data),F.value=u.data.list,y.value=u.data.total})},P=()=>{f()},D=()=>{i.page=1,f()},{copy:A}=R(),k=G("clipboard-write");console.log(r(k));const U=()=>{te().then(u=>{if(r(k)==="granted")return A(u.data);V.value=u.data,_.value=!0})},M=()=>{x.push({path:"/air/add"})},z=u=>{x.push({path:`/air/editor/${u.id}`})},L=u=>{!u.id||X.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{oe(u.id).then(t=>{console.log(t);const g=t.code===90001?"success":"error";Y({message:t.msg,type:g}),f()})}).catch(()=>{})};return f(),(u,t)=>{const g=o("el-option"),N=o("el-select"),p=o("el-form-item"),m=o("el-col"),C=o("el-input"),w=o("el-input-number"),c=o("el-button"),$=o("el-row"),q=o("el-form"),S=o("el-card"),s=o("el-table-column"),T=o("el-table"),O=o("el-dialog");return v(),B("div",re,[e(S,null,{default:a(()=>[e(q,{model:n.value,inline:"","label-width":"100px"},{default:a(()=>[e($,null,{default:a(()=>[e(m,{span:8},{default:a(()=>[e(p,{label:"\u5206\u7C7B",prop:"sort"},{default:a(()=>[e(N,{modelValue:n.value.sort,"onUpdate:modelValue":t[0]||(t[0]=l=>n.value.sort=l),modelModifiers:{number:!0},placeholder:"\u9009\u62E9\u5206\u7C7B"},{default:a(()=>[e(g,{label:"\u5168\u90E8",value:"",key:""}),(v(!0),B(J,null,K(r(le),l=>(v(),E(g,{label:l.label,value:l.value,key:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:a(()=>[e(p,{label:"\u54C1\u724C",prop:"brand"},{default:a(()=>[e(C,{modelValue:n.value.brand,"onUpdate:modelValue":t[1]||(t[1]=l=>n.value.brand=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:a(()=>[e(p,{label:"\u578B\u53F7",prop:"type"},{default:a(()=>[e(C,{modelValue:n.value.type,"onUpdate:modelValue":t[2]||(t[2]=l=>n.value.type=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:a(()=>[e(p,{label:"\u6700\u4F4E\u4EF7",prop:"minPrice"},{default:a(()=>[e(w,{modelValue:n.value.minPrice,"onUpdate:modelValue":t[3]||(t[3]=l=>n.value.minPrice=l),min:0,max:5e4},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:a(()=>[e(p,{label:"\u6700\u9AD8\u4EF7",prop:"maxPrice"},{default:a(()=>[e(w,{modelValue:n.value.maxPrice,"onUpdate:modelValue":t[4]||(t[4]=l=>n.value.maxPrice=l),min:0,max:5e4},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:a(()=>[e(p,{label:" "},{default:a(()=>[e(c,{onClick:D,type:"primary"},{default:a(()=>[d("\u67E5\u8BE2")]),_:1}),e(c,{onClick:U,type:"primary"},{default:a(()=>[d("\u751F\u6210")]),_:1}),e(c,{onClick:M,type:"primary"},{default:a(()=>[d("\u65B0\u5EFA")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(T,{class:"mt20",data:F.value,border:""},{default:a(()=>[e(s,{label:"\u5206\u7C7B",align:"center"},{default:a(l=>[d(Q(r(ae)(l.row.sort)),1)]),_:1}),e(s,{prop:"brand",label:"\u54C1\u724C",align:"center"}),e(s,{prop:"type",label:"\u578B\u53F7",align:"center"}),e(s,{prop:"price",label:"\u4EF7\u683C",align:"center"}),e(s,{prop:"power",label:"\u5339\u6570",align:"center"}),e(s,{prop:"quality",label:"\u8D28\u4FDD",align:"center"}),e(s,{label:"\u64CD\u4F5C",width:"120"},{default:a(l=>[e(c,{link:"",type:"primary",size:"small",onClick:h=>z(l.row)},{default:a(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),e(c,{link:"",type:"danger",size:"small",onClick:h=>L(l.row)},{default:a(()=>[d("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),r(y)>0?(v(),E(ue,{key:0,class:"mt20",page:r(i).page,"onUpdate:page":t[5]||(t[5]=l=>r(i).page=l),limit:r(i).pageSize,"onUpdate:limit":t[6]||(t[6]=l=>r(i).pageSize=l),total:r(y),onPagination:P},null,8,["page","limit","total"])):H("v-if",!0),e(O,{modelValue:_.value,"onUpdate:modelValue":t[9]||(t[9]=l=>_.value=l),title:"\u590D\u5236\u751F\u6210\u5185\u5BB9",width:"80%"},{footer:a(()=>[W("span",se,[e(c,{type:"primary",onClick:t[8]||(t[8]=l=>_.value=!1)},{default:a(()=>[d("\u5173\u95ED")]),_:1})])]),default:a(()=>[e(C,{modelValue:V.value,"onUpdate:modelValue":t[7]||(t[7]=l=>V.value=l),type:"textarea",rows:"10"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}}});const fe=Z(de,[["__scopeId","data-v-0012f3ec"],["__file","/home/runner/work/auto-answer-frontend/auto-answer-frontend/src/views/air/index.vue"]]);export{fe as default};