const e=document.createElement("input");e.setAttribute("type","file");e.style.display="none";const i=async()=>await new Promise((t,n)=>{const c=function(r){const a=r.currentTarget.files;a!=null&&a.length?t(a):t(null),e.removeEventListener("change",c)};e.addEventListener("change",c),e.click()}),o=async(t="")=>{e.setAttribute("accept",t),e.removeAttribute("multiple"),e.value="";const n=await i();return n!=null&&n.length?n[0]:null},u=async t=>t?new Promise((n,c)=>{try{const r=new FileReader;r.onloadend=s=>{var l;const a=((l=s.currentTarget)==null?void 0:l.result)||"";n(a)},r.readAsText(t,"UTF-8")}catch(r){c(r)}}):"";export{u as h,o as s};
