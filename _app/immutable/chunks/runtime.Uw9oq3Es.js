var Hn=Array.isArray,pt=Array.from,vt=Object.isFrozen,dt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Yn=Object.getOwnPropertyDescriptors,Et=Object.prototype,yt=Array.prototype,jn=Object.getPrototypeOf,pn=Map.prototype,Un=pn.set,Bn=pn.get;function mt(n,t,e){Un.call(n,t,e)}function wt(n,t){return Bn.call(n,t)}function Tt(n){return typeof n=="function"}const A=2,vn=4,C=8,dn=16,m=32,X=64,S=128,Y=256,E=512,y=1024,I=2048,N=4096,q=8192,zn=16384,hn=32768,Vn=65536,on=Symbol("$state"),At=Symbol("$state.frozen"),St=Symbol("");function En(n){return n===this.v}function Kn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function yn(n){return!Kn(n,this.v)}const Ot=1,kt=2,It=4,Rt=8,gt=16,Dt=64,xt=1,Nt=2,Ct=4,qt=8,bt=1,Mt=2,Pt="[",$n="]",Lt="",Ft=`${$n}!`,Ht={},Gn=Symbol(),Yt=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],jt=["touchstart","touchmove","touchend"],Ut={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Bt(n,t="exclude-on"){return n.endsWith("capture")?t=="exclude-on"?n!=="gotpointercapture"&&n!=="lostpointercapture":n!=="ongotpointercapture"&&n!=="onlostpointercapture":!1}function Zn(n){throw new Error("effect_in_teardown")}function Wn(){throw new Error("effect_in_unowned_derived")}function Qn(n){throw new Error("effect_orphan")}function Xn(){throw new Error("effect_update_depth_exceeded")}function zt(){throw new Error("hydration_failed")}function Vt(n){throw new Error("lifecycle_legacy_only")}function Kt(n){throw new Error("props_invalid_value")}function Jn(){throw new Error("state_unsafe_mutation")}function mn(n){return{f:0,v:n,reactions:null,equals:En,version:0}}function $t(n){var e;const t=mn(n);return t.equals=yn,_!==null&&_.l!==null&&((e=_.l).s??(e.s=[])).push(t),t}function un(n,t){return J(n,sn(()=>K(n))),t}function J(n,t){var e=n.v!==Gn;return e&&f!==null&&W()&&f.f&A&&Jn(),n.equals(t)||(n.v=t,n.version=Cn(),rn(n,y,!0),W()&&e&&i!==null&&i.f&E&&!(i.f&m)&&(v!==null&&v.includes(n)?(h(i,y),V(i)):T===null?lt([n]):T.push(n))),t}function Gt(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function nt(n){if(Hn(n))for(var t=0;t<n.length;t++){var e=n[t];e.isConnected&&e.remove()}else n.isConnected&&n.remove()}function wn(n){i===null&&f===null&&Qn(),f!==null&&f.f&S&&Wn(),tn&&Zn()}function ln(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function b(n,t,e){var r=(n&X)!==0,s={ctx:_,deps:null,dom:null,f:n|y,first:null,fn:t,last:null,next:null,parent:r?null:i,prev:null,teardown:null,transitions:null};if(e){var o=D;try{an(!0),F(s),s.f|=zn}finally{an(o)}}else t!==null&&V(s);var c=e&&s.deps===null&&s.first===null&&s.dom===null&&s.teardown===null;return!c&&!r&&(i!==null&&ln(s,i),f!==null&&f.f&A&&ln(s,f)),s}function Zt(n){const t=b(C,null,!1);return h(t,E),t.teardown=n,t}function Wt(n){wn();var t=i!==null&&(i.f&C)!==0&&_!==null&&!_.m;if(t){var e=_;(e.e??(e.e=[])).push(n)}else{var r=Tn(n);return r}}function Qt(n){return wn(),B(n)}function Xt(n){const t=b(X,n,!0);return()=>{nn(t)}}function Tn(n){return b(vn,n,!1)}function Jt(n,t){var e=_,r={effect:null,ran:!1};e.l.r1.push(r),r.effect=B(()=>{n(),!r.ran&&(r.ran=!0,J(e.l.r2,!0),sn(t))})}function ne(){var n=_;B(()=>{if(K(n.l.r2)){for(var t of n.l.r1){var e=t.effect;M(e)&&F(e),t.ran=!1}n.l.r2.v=!1}})}function B(n){return b(C,n,!0)}function te(n){return B(n)}function ee(n,t=0){return b(C|dn|t,n,!0)}function re(n){return b(C|m,n,!0)}function An(n){var t=n.teardown;if(t!==null){const e=tn,r=f;fn(!0),cn(null);try{t.call(null)}finally{fn(e),cn(r)}}}function nn(n,t=!0){var e=n.dom;if(e!==null&&t&&nt(e),en(n,t),z(n,0),h(n,q),n.transitions)for(const s of n.transitions)s.stop();An(n);var r=n.parent;r!==null&&n.f&m&&r.first!==null&&Sn(n),n.next=n.prev=n.teardown=n.ctx=n.dom=n.deps=n.parent=n.fn=null}function Sn(n){var t=n.parent,e=n.prev,r=n.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),t!==null&&(t.first===n&&(t.first=r),t.last===n&&(t.last=e))}function se(n,t){var e=[];On(n,e,!0),tt(e,()=>{nn(n),t&&t()})}function tt(n,t){var e=n.length;if(e>0){var r=()=>--e||t();for(var s of n)s.out(r)}else t()}function On(n,t,e){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const c of n.transitions)(c.is_global||e)&&t.push(c);for(var r=n.first;r!==null;){var s=r.next,o=(r.f&hn)!==0||(r.f&m)!==0;On(r,t,o?e:!1),r=s}}}function oe(n){kn(n,!0)}function kn(n,t){if(n.f&N){n.f^=N,M(n)&&F(n);for(var e=n.first;e!==null;){var r=e.next,s=(e.f&hn)!==0||(e.f&m)!==0;kn(e,s?t:!1),e=r}if(n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&o.in()}}const ue=()=>{};function le(n){return typeof(n==null?void 0:n.then)=="function"}function ie(n){return n()}function In(n){for(var t=0;t<n.length;t++)n[t]()}const et=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let j=!1,U=!1,G=[],Z=[];function Rn(){j=!1;const n=G.slice();G=[],In(n)}function gn(){U=!1;const n=Z.slice();Z=[],In(n)}function ae(n){j||(j=!0,queueMicrotask(Rn)),G.push(n)}function fe(n){U||(U=!0,et(gn)),Z.push(n)}function rt(){j&&Rn(),U&&gn()}function st(n){let t=A|y;i===null&&(t|=S);const e={deps:null,deriveds:null,equals:En,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(f!==null&&f.f&A){var r=f;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function ce(n){const t=st(n);return t.equals=yn,t}function Dn(n){en(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var e=0;e<t.length;e+=1)ot(t[e])}}function xn(n){Dn(n);var t=qn(n),e=(g||n.f&S)&&n.deps!==null?I:E;h(n,e),n.equals(t)||(n.v=t,n.version=Cn(),rn(n,y,!1))}function ot(n){Dn(n),z(n,0),h(n,q),n.first=n.last=n.deps=n.reactions=n.fn=null}const Nn=0,ut=1;let H=Nn,L=!1,D=!1,tn=!1;function an(n){D=n}function fn(n){tn=n}let k=[],x=0,f=null;function cn(n){f=n}let i=null;function _e(n){i=n}let v=null,p=0,T=null;function lt(n){T=n}let it=0,g=!1,P=!1,R=new Set,_=null;function pe(n){_=n}function Cn(){return it++}function W(){return _!==null&&_.l===null}function M(n){var O;var t=n.f,e=(t&y)!==0;if(e)return!0;var r=(t&S)!==0,s=(t&Y)!==0;if(t&I){var o=n.deps;if(o!==null)for(var c=o.length,l,u=0;u<c;u++){var a=o[u];!e&&M(a)&&xn(a);var d=a.version;if(r){if(d>n.version)return!0;!g&&!((O=a==null?void 0:a.reactions)!=null&&O.includes(n))&&(a.reactions??(a.reactions=[])).push(n)}else{if(n.f&y)return!0;s&&(d>n.version&&(e=!0),l=a.reactions,l===null?a.reactions=[n]:l.includes(n)||l.push(n))}}r||h(n,E),s&&(n.f^=Y)}return e}function at(n,t,e){throw n}function qn(n){const t=v,e=p,r=T,s=f,o=g;v=null,p=0,T=null,f=n.f&(m|X)?null:n,g=!D&&(n.f&S)!==0;try{let c=(0,n.fn)(),l=n.deps;if(v!==null){let u;if(l!==null){const a=l.length,d=p===0?v:l.slice(0,p).concat(v),w=d.length>16&&a-p>1?new Set(d):null;for(u=p;u<a;u++){const $=l[u];(w!==null?!w.has($):!d.includes($))&&bn(n,$)}}if(l!==null&&p>0)for(l.length=p+v.length,u=0;u<v.length;u++)l[p+u]=v[u];else n.deps=l=v;if(!g)for(u=p;u<l.length;u++){const a=l[u],d=a.reactions;d===null?a.reactions=[n]:d[d.length-1]!==n&&!d.includes(n)&&d.push(n)}}else l!==null&&p<l.length&&(z(n,p),l.length=p);return c}finally{v=t,p=e,T=r,f=s,g=o}}function bn(n,t){const e=t.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(n);s!==-1&&(r===0?t.reactions=null:(e[s]=e[r],e.pop()))}r===0&&t.f&A&&(h(t,I),t.f&(S|Y)||(t.f^=Y),z(t,0))}function z(n,t){const e=n.deps;if(e!==null){const r=t===0?null:e.slice(0,t);let s;for(s=t;s<e.length;s++){const o=e[s];(r===null||!r.includes(o))&&bn(n,o)}}}function en(n,t=!0){let e=n.first;n.first=null,n.last=null;for(var r;e!==null;)r=e.next,nn(e,t),e=r}function F(n){var t=n.f;if(!(t&q)){h(n,E);var e=n.ctx,r=i,s=_;i=n,_=e;try{t&dn||en(n),An(n);var o=qn(n);n.teardown=typeof o=="function"?o:null}catch(c){at(c)}finally{i=r,_=s}}}function Mn(){x>1e3&&(x=0,Xn()),x++}function Pn(n){var t=n.length;if(t!==0){Mn();var e=D;D=!0;try{for(var r=0;r<t;r++){var s=n[r];if(s.first===null&&!(s.f&m))_n([s]);else{var o=[];Ln(s,o),_n(o)}}}finally{D=e}}}function _n(n){var t=n.length;if(t!==0)for(var e=0;e<t;e++){var r=n[e];!(r.f&(q|N))&&M(r)&&(F(r),r.deps===null&&r.first===null&&r.dom===null&&(r.teardown===null?Sn(r):r.fn=null))}}function ft(){if(L=!1,x>1001)return;const n=k;k=[],Pn(n),L||(x=0)}function V(n){H===Nn&&(L||(L=!0,queueMicrotask(ft)));for(var t=n;t.parent!==null;){t=t.parent;var e=t.f;if(e&m){if(!(e&E))return;h(t,I)}}k.push(t)}function Ln(n,t){var e=n.first,r=[];n:for(;e!==null;){var s=e.f,o=(s&(q|N))===0,c=s&m,l=(s&E)!==0,u=e.first;if(o&&(!c||!l)){if(c&&h(e,E),s&C){if(!c&&M(e)&&(F(e),u=e.first),u!==null){e=u;continue}}else if(s&vn)if(c||l){if(u!==null){e=u;continue}}else r.push(e)}var a=e.next;if(a===null){let w=e.parent;for(;w!==null;){if(n===w)break n;var d=w.next;if(d!==null){e=d;continue n}w=w.parent}}e=a}for(var O=0;O<r.length;O++)u=r[O],t.push(u),Ln(u,t)}function Fn(n,t=!0){var e=H,r=k;try{Mn();const o=[];H=ut,k=o,L=!1,t&&Pn(r);var s=n==null?void 0:n();return rt(),(k.length>0||o.length>0)&&Fn(),x=0,s}finally{H=e,k=r}}async function ve(){await Promise.resolve(),Fn()}function K(n){const t=n.f;if(t&q)return n.v;if(P&&R.add(n),f!==null){const e=(f.f&S)!==0,r=f.deps;v===null&&r!==null&&r[p]===n&&!(e&&i!==null)?p++:(r===null||p===0||r[p-1]!==n)&&(v===null?v=[n]:v[v.length-1]!==n&&v.push(n)),T!==null&&i!==null&&i.f&E&&!(i.f&m)&&T.includes(n)&&(h(i,y),V(i))}return t&A&&M(n)&&xn(n),n.v}function de(n){var t=P,e=R;P=!0,R=new Set;var r=R,s;try{sn(n)}finally{if(P=t,P)for(s of R)e.add(s);R=e}for(s of r)if(s.f&Vn)for(const o of s.deps||[])o.f&A||un(o,null);else un(s,null)}function rn(n,t,e){var r=n.reactions;if(r!==null)for(var s=W(),o=r.length,c=0;c<o;c++){var l=r[c],u=l.f;if(!(u&y||(!e||!s)&&l===i)){h(l,t);var a=(u&I)!==0,d=(u&S)!==0;(u&E||a&&d)&&(l.f&A?rn(l,I,e):V(l))}}}function sn(n){const t=f;try{return f=null,n()}finally{f=t}}const ct=~(y|I|E);function h(n,t){n.f=n.f&ct|t}function _t(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function he(n,t=1){var e=+K(n);return J(n,e+t),e}function Ee(n,t=!1,e){_={p:_,c:null,e:null,m:!1,s:n,x:null,l:null},t||(_.l={s:null,u:null,r1:[],r2:mn(!1)})}function ye(n){const t=_;if(t!==null){n!==void 0&&(t.x=n);const r=t.e;if(r!==null){t.e=null;for(var e=0;e<r.length;e++)Tn(r[e])}_=t.p,t.m=!0}return n||{}}function me(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(on in n)Q(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&on in e&&Q(e)}}}function Q(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let r in n)try{Q(n[r],t)}catch{}const e=jn(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=Yn(e);for(let s in r){const o=r[s].get;if(o)try{o.call(n)}catch{}}}}}function we(n){return _t(n)?K(n):n}export{_e as $,se as A,ae as B,Ot as C,kt as D,Rt as E,Dt as F,On as G,Ft as H,N as I,tt as J,nn as K,Vn as L,gt as M,vt as N,It as O,Ct as P,i as Q,B as R,on as S,Gt as T,Jt as U,ne as V,me as W,Tn as X,Zt as Y,le as Z,ue as _,ye as a,cn as a0,pe as a1,Fn as a2,_ as a3,Wt as a4,Vt as a5,In as a6,At as a7,Et as a8,yt as a9,dt as aa,Gn as ab,jn as ac,Qt as ad,ie as ae,un as af,ve as ag,hn as ah,$n as ai,Ht as aj,Lt as ak,zt as al,pt as am,Xt as an,jt as ao,bt as ap,Mt as aq,St as ar,fe as as,wt as at,mt as au,Bt as av,Ut as aw,Yt as ax,Yn as ay,de as az,he as b,mn as c,ce as d,ht as e,Kt as f,K as g,yn as h,Tt as i,xt as j,Nt as k,sn as l,$t as m,st as n,qt as o,Ee as p,P as q,Hn as r,J as s,te as t,we as u,ee as v,nt as w,Pt as x,oe as y,re as z};
