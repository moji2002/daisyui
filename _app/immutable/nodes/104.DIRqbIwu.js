import{a as o,t as l,f as U,b as t,s as f,c as e}from"../chunks/disclose-version.BlBAdxPG.js";import{m as A,g as m,d as _,t as h,u as r}from"../chunks/runtime.Uw9oq3Es.js";import{i as B}from"../chunks/86.Ckgz2ZBN.js";import{e as C,i as D}from"../chunks/each.Sa0pJuWe.js";import{s as d,h as F}from"../chunks/i18n.NBekezeV.js";import{p as G}from"../chunks/props.CsqvDH4B.js";import{S as H}from"../chunks/SEO.CjIRiqtN.js";var J=l('<figure class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"><img loading="lazy" class="border-base-content bg-base-300 rounded-btn border border-opacity-5"></figure>'),K=l('<a class="card sm:card-side hover:bg-base-200 max-w-sm transition-colors sm:max-w-none"><!> <div class="card-body"><h2 class="card-title"> </h2> <p class="text-xs opacity-60"> </p></div></a>'),L=l('<!> <div class="grid justify-items-stretch gap-6"></div>',1);function Y(x,y){let c=G(y,"data")(),p=c.params,w=A(c.posts);var g=L(),n=U(g),$=_(()=>p.tag.replace(/-/g," ")),j=_(()=>`daisyUI blog posts with '${p.tag.replace(/-/g," ")}' tag`);H(n,{get title(){return m($)},get desc(){return m(j)}});var z=t(t(n,!0));C(z,9,()=>m(w),D,(S,a,N)=>{var s=K(),v=e(s);B(v,()=>r(a).thumbnail,O=>{var b=J(),i=e(b);h(()=>{d(i,"src",r(a).thumbnail),d(i,"alt",r(a).title)}),F(i),o(O,b)});var k=t(t(v,!0)),u=e(k),q=e(u),E=t(t(u,!0)),I=e(E);h(()=>{d(s,"href",`/blog/${r(a).slug}`),f(q,r(a).title),f(I,r(a).desc)}),o(S,s)}),o(x,g)}export{Y as component};
