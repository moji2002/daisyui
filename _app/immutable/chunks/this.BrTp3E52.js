import{N as O,a7 as P,S as r,a8 as S,a9 as T,aa as j,c as h,r as E,s as o,ab as u,e as b,m as g,g as y,Q as I,l as m,ac as N,X as A,R as B,B as D}from"./runtime.Uw9oq3Es.js";function _(e,t=!0,s=null,f){if(typeof e=="object"&&e!=null&&!O(e)&&!(P in e)){if(r in e){const i=e[r];if(i.t===e||i.p===e)return i.p}const n=N(e);if(n===S||n===T){const i=new Proxy(e,L);return j(e,r,{value:{s:new Map,v:h(0),a:E(e),i:t,p:i,t:e},writable:!0,enumerable:!1}),i}}return e}function w(e,t=1){o(e,e.v+t)}const L={defineProperty(e,t,s){if(s.value){const f=e[r],n=f.s.get(t);n!==void 0&&o(n,_(s.value,f.i,f))}return Reflect.defineProperty(e,t,s)},deleteProperty(e,t){const s=e[r],f=s.s.get(t),n=s.a,i=delete e[t];if(n&&i){const a=s.s.get("length"),l=e.length-1;a!==void 0&&a.v!==l&&o(a,l)}return f!==void 0&&o(f,u),i&&w(s.v),i},get(e,t,s){var i;if(t===r)return Reflect.get(e,r);const f=e[r];let n=f.s.get(t);if(n===void 0&&(!(t in e)||(i=b(e,t))!=null&&i.writable)&&(n=(f.i?h:g)(_(e[t],f.i,f)),f.s.set(t,n)),n!==void 0){const a=y(n);return a===u?void 0:a}return Reflect.get(e,t,s)},getOwnPropertyDescriptor(e,t){const s=Reflect.getOwnPropertyDescriptor(e,t);if(s&&"value"in s){const n=e[r].s.get(t);n&&(s.value=y(n))}return s},has(e,t){var i;if(t===r)return!0;const s=e[r],f=Reflect.has(e,t);let n=s.s.get(t);return(n!==void 0||I!==null&&(!f||(i=b(e,t))!=null&&i.writable))&&(n===void 0&&(n=(s.i?h:g)(f?_(e[t],s.i,s):u),s.s.set(t,n)),y(n)===u)?!1:f},set(e,t,s,f){const n=e[r];let i=n.s.get(t);i===void 0&&(m(()=>f[t]),i=n.s.get(t)),i!==void 0&&o(i,_(s,n.i,n));const a=n.a,l=!(t in e);if(a&&t==="length")for(let c=s;c<e.length;c+=1){const d=n.s.get(c+"");d!==void 0&&o(d,u)}if(e[t]=s,l){if(a){const c=n.s.get("length"),d=e.length;c!==void 0&&c.v!==d&&o(c,d)}w(n.v)}return!0},ownKeys(e){const t=e[r];return y(t.v),Reflect.ownKeys(e)}};function R(e){if(e!==null&&typeof e=="object"&&r in e){var t=e[r];if(t)return t.p}return e}function k(e,t){return Object.is(R(e),R(t))}function x(e,t){var f;var s=e&&((f=e[r])==null?void 0:f.t);return e===t||s===t}function K(e,t,s,f){A(()=>{var n,i;return B(()=>{n=i,i=[],m(()=>{e!==s(...i)&&(t(e,...i),n&&x(s(...n),e)&&t(null,...n))})}),()=>{D(()=>{i&&x(s(...i),e)&&t(null,...i)})}})}export{K as b,R as g,k as i,_ as p};