import{S as w,i as I,s as R,k as s,a6 as S,l as h,h as l,n as e,E as _,F as O,H as V}from"./index.b33eaa49.js";import{r as A,a as b,e as M}from"./i18n.bae08479.js";function q(a){let i,o,d,m,r,u,f,n,T,E,g,p;return document.title=i=a[2],{c(){o=s("meta"),d=s("meta"),m=s("meta"),r=s("meta"),u=s("meta"),n=s("meta"),T=s("meta"),E=s("meta"),g=s("meta"),this.h()},l(c){const t=S("svelte-16rcqg9",document.head);o=h(t,"META",{name:!0,content:!0}),d=h(t,"META",{name:!0,content:!0}),m=h(t,"META",{name:!0,content:!0}),r=h(t,"META",{name:!0,content:!0}),u=h(t,"META",{name:!0,content:!0}),n=h(t,"META",{name:!0,content:!0}),T=h(t,"META",{property:!0,content:!0}),E=h(t,"META",{property:!0,content:!0}),g=h(t,"META",{property:!0,content:!0}),t.forEach(l),this.h()},h(){e(o,"name","description"),e(o,"content",a[0]),e(d,"name","twitter:card"),e(d,"content","summary_large_image"),e(m,"name","twitter:title"),e(m,"content",a[2]),e(r,"name","twitter:description"),e(r,"content",a[0]),e(u,"name","twitter:image"),e(u,"content",f=A("VITE_ROOT")+a[1]),e(n,"name","twitter:image:alt"),e(n,"content",a[2]),e(T,"property","og:title"),e(T,"content",a[2]),e(E,"property","og:description"),e(E,"content",a[0]),e(g,"property","og:image"),e(g,"content",p=A("VITE_ROOT")+a[1])},m(c,t){_(document.head,o),_(document.head,d),_(document.head,m),_(document.head,r),_(document.head,u),_(document.head,n),_(document.head,T),_(document.head,E),_(document.head,g)},p(c,[t]){t&4&&i!==(i=c[2])&&(document.title=i),t&1&&e(o,"content",c[0]),t&4&&e(m,"content",c[2]),t&1&&e(r,"content",c[0]),t&2&&f!==(f=A("VITE_ROOT")+c[1])&&e(u,"content",f),t&4&&e(n,"content",c[2]),t&4&&e(T,"content",c[2]),t&1&&e(E,"content",c[0]),t&2&&p!==(p=A("VITE_ROOT")+c[1])&&e(g,"content",p)},i:O,o:O,d(c){l(o),l(d),l(m),l(r),l(u),l(n),l(T),l(E),l(g)}}}function v(a,i,o){let d,m;V(a,b,n=>o(4,m=n));let{title:r=""}=i,{desc:u=M.desc}=i,{img:f=M.card}=i;return a.$$set=n=>{"title"in n&&o(3,r=n.title),"desc"in n&&o(0,u=n.desc),"img"in n&&o(1,f=n.img)},a.$$.update=()=>{a.$$.dirty&24&&o(2,d=r?`${m(r)} — ${m(M.title)}`:`${m(M.title)}`)},[u,f,d,r,m]}class C extends w{constructor(i){super(),I(this,i,v,q,R,{title:3,desc:0,img:1})}}export{C as S};
