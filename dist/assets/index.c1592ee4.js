import{d as j,r as b,b as I,e as R,f as s,c as E,g as e,w as t,h as w,i as G,j as o,o as v,F as H,A as J,k as d,t as K,l as Q,u as W,E as X,m as Y,_ as Z}from"./index.0da0276a.js";import{g as ee,s as le,a as te,b as ae,d as oe}from"./constant.3f7e4706.js";import{u as ne,_ as ue}from"./usePagination.10066b8d.js";import"./request.8b906fe9.js";const se={class:"app-container"},re=d("\u67E5\u8BE2"),de=d("\u751F\u6210"),ie=d("\u65B0\u5EFA"),pe=d(" \u7F16\u8F91 "),me=d("\u5220\u9664"),_e={class:"dialog-footer"},ce=d("\u5173\u95ED"),fe=j({__name:"index",setup(ge){const x=W(),{total:y,query:i}=ne(),n=b({sort:"",brand:"",type:"",minPrice:0,maxPrice:5e4}),F=b([]),c=b(!1),V=b(""),f=()=>{ee({...i,requestData:{...n.value}}).then(u=>{console.log(u.data),F.value=u.data.list,y.value=u.data.total})},D=()=>{f()},P=()=>{i.page=1,f()},{copy:A}=I(),k=R("clipboard-write");console.log(s(k));const U=()=>{ae().then(u=>{if(s(k)==="granted")return A(u.data);V.value=u.data,c.value=!0})},h=()=>{x.push({path:"/air/add"})},M=u=>{x.push({path:`/air/editor/${u.id}`})},$=u=>{!u.id||X.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{oe(u.id).then(a=>{console.log(a);const g=a.code===90001?"success":"error";Y({message:a.msg,type:g}),f()})}).catch(()=>{})};return f(),(u,a)=>{const g=o("el-option"),z=o("el-select"),p=o("el-form-item"),m=o("el-col"),C=o("el-input"),B=o("el-input-number"),_=o("el-button"),L=o("el-row"),N=o("el-form"),q=o("el-card"),r=o("el-table-column"),S=o("el-table"),T=o("el-dialog");return v(),E("div",se,[e(q,null,{default:t(()=>[e(N,{model:n.value,inline:"","label-width":"100px"},{default:t(()=>[e(L,null,{default:t(()=>[e(m,{span:8},{default:t(()=>[e(p,{label:"\u5206\u7C7B",prop:"sort"},{default:t(()=>[e(z,{modelValue:n.value.sort,"onUpdate:modelValue":a[0]||(a[0]=l=>n.value.sort=l),modelModifiers:{number:!0},placeholder:"\u9009\u62E9\u5206\u7C7B"},{default:t(()=>[e(g,{label:"\u5168\u90E8",value:"",key:""}),(v(!0),E(H,null,J(s(le),l=>(v(),w(g,{label:l.label,value:l.value,key:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:t(()=>[e(p,{label:"\u54C1\u724C",prop:"brand"},{default:t(()=>[e(C,{modelValue:n.value.brand,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value.brand=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:t(()=>[e(p,{label:"\u578B\u53F7",prop:"type"},{default:t(()=>[e(C,{modelValue:n.value.type,"onUpdate:modelValue":a[2]||(a[2]=l=>n.value.type=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:t(()=>[e(p,{label:"\u6700\u4F4E\u4EF7",prop:"minPrice"},{default:t(()=>[e(B,{modelValue:n.value.minPrice,"onUpdate:modelValue":a[3]||(a[3]=l=>n.value.minPrice=l),min:0,max:5e4},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:t(()=>[e(p,{label:"\u6700\u9AD8\u4EF7",prop:"maxPrice"},{default:t(()=>[e(B,{modelValue:n.value.maxPrice,"onUpdate:modelValue":a[4]||(a[4]=l=>n.value.maxPrice=l),min:0,max:5e4},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:8},{default:t(()=>[e(p,{label:" "},{default:t(()=>[e(_,{onClick:P,type:"primary"},{default:t(()=>[re]),_:1}),e(_,{onClick:U,type:"primary"},{default:t(()=>[de]),_:1}),e(_,{onClick:h,type:"primary"},{default:t(()=>[ie]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(S,{class:"mt20",data:F.value,border:""},{default:t(()=>[e(r,{label:"\u5206\u7C7B",align:"center"},{default:t(l=>[d(K(s(te)(l.row.sort)),1)]),_:1}),e(r,{prop:"brand",label:"\u54C1\u724C",align:"center"}),e(r,{prop:"type",label:"\u578B\u53F7",align:"center"}),e(r,{prop:"price",label:"\u4EF7\u683C",align:"center"}),e(r,{prop:"power",label:"\u5339\u6570",align:"center"}),e(r,{prop:"quality",label:"\u8D28\u4FDD",align:"center"}),e(r,{label:"\u64CD\u4F5C",width:"120"},{default:t(l=>[e(_,{link:"",type:"primary",size:"small",onClick:O=>M(l.row)},{default:t(()=>[pe]),_:2},1032,["onClick"]),e(_,{link:"",type:"danger",size:"small",onClick:O=>$(l.row)},{default:t(()=>[me]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),s(y)>0?(v(),w(ue,{key:0,class:"mt20",page:s(i).page,"onUpdate:page":a[5]||(a[5]=l=>s(i).page=l),limit:s(i).pageSize,"onUpdate:limit":a[6]||(a[6]=l=>s(i).pageSize=l),total:s(y),onPagination:D},null,8,["page","limit","total"])):G("",!0),e(T,{modelValue:c.value,"onUpdate:modelValue":a[9]||(a[9]=l=>c.value=l),title:"\u590D\u5236\u751F\u6210\u5185\u5BB9",width:"80%"},{footer:t(()=>[Q("span",_e,[e(_,{type:"primary",onClick:a[8]||(a[8]=l=>c.value=!1)},{default:t(()=>[ce]),_:1})])]),default:t(()=>[e(C,{modelValue:V.value,"onUpdate:modelValue":a[7]||(a[7]=l=>V.value=l),type:"textarea",rows:"10"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}}});const Ce=Z(fe,[["__scopeId","data-v-30a779f4"]]);export{Ce as default};