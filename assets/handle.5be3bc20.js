import{d as S,u as T,a as j,g as E,h as G,r as p,c as V,l as e,w as u,o as _,n as F,t as w,f as a,F as y,A as k,q as D,e as q,p as H,_ as I}from"./index.426a30bb.js";import{c as J,s as K,e as P,f as Q}from"./constant.f2e64da8.js";const W={class:"handle-container"},X={class:"mt10"},Y=F("\u5220\u9664"),Z=F("\u65B0\u589E\u63CF\u8FF0"),h=F("\u91CD\u7F6E"),ee=S({__name:"handle",setup(ue){var v;const U=T(),A=j(),b=(v=U.params)==null?void 0:v.id,N=b?"\u7F16\u8F91":"\u65B0\u5EFA",g=E();let r=E({sort:"",brand:"",name:"",price:"",url:"",pic:"",wind:"",fire:"",pa:"",describe:[{key:1,value:""}]});const x=G({sort:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u7C7B\u578B",trigger:"change"}],brand:[{required:!0,message:"\u8BF7\u8F93\u5165\u54C1\u724C\u540D",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"}],price:[{type:"number",required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C",trigger:"blur"}],url:[{required:!0,message:"\u8BF7\u8F93\u5165 url",trigger:"blur"}],pic:[{required:!0,message:"\u8BF7\u8F93\u5165\u56FE\u7247\u94FE\u63A5",trigger:"blur"}],wind:[{type:"number",required:!0,message:"\u8BF7\u8F93\u5165\u6392\u98CE\u91CF",trigger:"blur"}],fire:[{required:!0,validator:(d,l,n)=>{if(!l)return n(new Error("\u8BF7\u8F93\u5165\u5185\u5BB9"));if(!Number(l))return n(new Error("\u8BF7\u8F93\u5165\u6570\u5B57\u503C"));if(!/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/.test(l))return n(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u6570\u5B57"));n()},trigger:"blur"}],pa:[{type:"number",required:!0,message:"\u8BF7\u8F93\u5165\u98CE\u538B",trigger:"blur"}]}),M=d=>{if(r.value.describe.length===1)return D({message:"\u81F3\u5C11\u8981\u4FDD\u7559\u4E00\u6761\u63CF\u8FF0\uFF01",type:"warning"});r.value.describe.splice(d,1)},$=()=>{r.value.describe=[...r.value.describe,{key:Date.now(),value:""}]},R=d=>{!d||d.validate(async l=>{if(l){let n;b?n=await P({...r.value,describe:r.value.describe.map(o=>o.value)}):n=await Q({...r.value,describe:r.value.describe.map(o=>o.value)});const f=n.code===90001?"success":"error";D({message:n.msg,type:f}),A.back()}else return console.log("error submit!"),!1})},z=d=>{!d||d.resetFields()};return(d=>{d&&J(d).then(l=>{if(l.code===90001){const n=l.data,f=n.describe.map((o,s)=>({key:s,value:o}));r.value={...n,describe:f}}})})(b),(d,l)=>{const n=p("el-option"),f=p("el-select"),o=p("el-form-item"),s=p("el-col"),i=p("el-row"),m=p("el-input"),c=p("el-button"),L=p("el-form"),O=p("el-card");return _(),V("div",W,[e(O,null,{header:u(()=>[F(w(a(N)),1)]),default:u(()=>[e(L,{ref_key:"formRef",ref:g,model:a(r),rules:x,"label-width":"120px",size:"default","status-icon":""},{default:u(()=>[e(i,null,{default:u(()=>[e(s,{span:8},{default:u(()=>[e(o,{label:"\u7C7B\u578B",prop:"sort"},{default:u(()=>[e(f,{modelValue:a(r).sort,"onUpdate:modelValue":l[0]||(l[0]=t=>a(r).sort=t),modelModifiers:{number:!0},placeholder:"\u9009\u62E9\u7C7B\u578B"},{default:u(()=>[(_(!0),V(y,null,k(a(K),t=>(_(),q(n,{label:t.label,value:t.value,key:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:u(()=>[e(s,{span:8},{default:u(()=>[e(o,{label:"\u54C1\u724C",prop:"brand"},{default:u(()=>[e(m,{modelValue:a(r).brand,"onUpdate:modelValue":l[1]||(l[1]=t=>a(r).brand=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:u(()=>[e(s,{span:8},{default:u(()=>[e(o,{label:"\u540D\u79F0",prop:"name"},{default:u(()=>[e(m,{modelValue:a(r).name,"onUpdate:modelValue":l[2]||(l[2]=t=>a(r).name=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:u(()=>[e(s,{span:8},{default:u(()=>[e(o,{label:"\u4EF7\u683C",prop:"price"},{default:u(()=>[e(m,{modelValue:a(r).price,"onUpdate:modelValue":l[3]||(l[3]=t=>a(r).price=t),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:u(()=>[e(s,{span:8},{default:u(()=>[e(o,{label:"\u94FE\u63A5",prop:"url"},{default:u(()=>[e(m,{modelValue:a(r).url,"onUpdate:modelValue":l[4]||(l[4]=t=>a(r).url=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:u(()=>[e(s,{span:8},{default:u(()=>[e(o,{label:"\u56FE\u7247\u94FE\u63A5",prop:"pic"},{default:u(()=>[e(m,{modelValue:a(r).pic,"onUpdate:modelValue":l[5]||(l[5]=t=>a(r).pic=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:u(()=>[e(s,{span:8},{default:u(()=>[e(o,{label:"\u6392\u98CE\u91CF",prop:"wind"},{default:u(()=>[e(m,{modelValue:a(r).wind,"onUpdate:modelValue":l[6]||(l[6]=t=>a(r).wind=t),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:u(()=>[e(s,{span:8},{default:u(()=>[e(o,{label:"\u706B\u529B",prop:"fire"},{default:u(()=>[e(m,{modelValue:a(r).fire,"onUpdate:modelValue":l[7]||(l[7]=t=>a(r).fire=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:u(()=>[e(s,{span:8},{default:u(()=>[e(o,{label:"\u98CE\u538B",prop:"pa"},{default:u(()=>[e(m,{modelValue:a(r).pa,"onUpdate:modelValue":l[8]||(l[8]=t=>a(r).pa=t),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:u(()=>[e(s,{span:24},{default:u(()=>[(_(!0),V(y,null,k(a(r).describe,(t,B)=>(_(),q(o,{key:t.key,label:`\u63CF\u8FF0${B+1}`,prop:"describe."+B+".value",rules:{required:!0,message:"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}},{default:u(()=>[e(m,{modelValue:t.value,"onUpdate:modelValue":C=>t.value=C,type:"textarea"},null,8,["modelValue","onUpdate:modelValue"]),H("div",X,[e(c,{type:"danger",onClick:C=>M(B)},{default:u(()=>[Y]),_:2},1032,["onClick"])])]),_:2},1032,["label","prop"]))),128))]),_:1})]),_:1}),e(o,null,{default:u(()=>[e(c,{onClick:$},{default:u(()=>[Z]),_:1}),e(c,{onClick:l[9]||(l[9]=t=>z(g.value))},{default:u(()=>[h]),_:1}),e(c,{type:"primary",onClick:l[10]||(l[10]=t=>R(g.value))},{default:u(()=>[F(w(a(b)?"\u66F4\u65B0":"\u65B0\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}}),oe=I(ee,[["__file","/home/runner/work/auto-answer-frontend/auto-answer-frontend/src/views/cooker/handle.vue"]]);export{oe as default};
