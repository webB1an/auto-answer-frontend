import{f as o}from"./request.6e08a9f0.js";function a(e){return o({url:"/cooker/find",method:"post",data:e})}function l(e){return o({url:"/cooker/detail/"+e,method:"post"})}function n(e){return o({url:"/cooker/add",method:"post",data:e})}function s(e){return o({url:"/cooker/editor",method:"post",data:e})}function d(e){return o({url:"/cooker/del",method:"post",data:{id:e}})}function c(){return o({url:"/cooker/generate",method:"post"})}const u=[{label:"\u84B8\u7BB1\u6B3E",value:1},{label:"\u70E4\u7BB1\u6B3E",value:2},{label:" \u6D88\u6BD2\u67DC\u6B3E",value:3},{label:"\u84B8\u70E4\u4E00\u4F53\u6B3E",value:4}],i=e=>u.find(t=>t.value===e).label;export{i as a,c as b,l as c,d,s as e,n as f,a as g,u as s};
