import{d as ae,r as N,a as D,t as V,c as T,b as q,s as _e,y as Ee,z as Oe,u as xe,e as le,f as re}from"./disclose-version.BlBAdxPG.js";import{p as ne,t as X,a as ie,U as J,s as y,W as w,g as l,V as Pe,u as O,m as L,ag as Re,d as se}from"./runtime.Uw9oq3Es.js";import{i as $}from"./86.Ckgz2ZBN.js";import{t as Q,s as be,a as Le}from"./class.DiKNQSpY.js";import{b as oe}from"./this.BrTp3E52.js";import{i as ce,u as Ne,s as ge}from"./store.BxnNGvJY.js";import{l as ee,p as c,s as qe}from"./props.CsqvDH4B.js";import{c as ye,o as we,a as pe}from"./index-client.CMnPxh7b.js";import{p as Ce}from"./stores.jAutWXZW.js";import{g as Ke}from"./entry.CliODqVY.js";import{e as Te,i as Me}from"./each.Sa0pJuWe.js";import{h as Ve}from"./html.CAZA5-yU.js";import{a as Ue,s as P,k as je,m as Be,t as We}from"./i18n.NBekezeV.js";import{b as A,d as Ge}from"./misc.OKLmFVJU.js";import{g as He}from"./_commonjsHelpers.Cpj98o6Y.js";import{c as Je}from"./input.CRveBghK.js";function Qe(C){return function(...t){var _=t[0];return _.preventDefault(),C.apply(this,t)}}var ke={exports:{}};(function(C,t){(function(){var _={};C.exports=_,_.simpleFilter=function(v,o){return o.filter(function(d){return _.test(v,d)})},_.test=function(v,o){return _.match(v,o)!==null},_.match=function(v,o,d){d=d||{};var h=0,f=[],m=o.length,n=0,b=0,g=d.pre||"",F=d.post||"",k=d.caseSensitive&&o||o.toLowerCase(),I;v=d.caseSensitive&&v||v.toLowerCase();for(var S=0;S<m;S++)I=o[S],k[S]===v[h]?(I=g+I+F,h+=1,b+=1+b):b=0,n+=b,f[f.length]=I;return h===v.length?(n=k===v?1/0:n,{rendered:f.join(""),score:n}):null},_.filter=function(v,o,d){return!o||o.length===0?[]:typeof v!="string"?o:(d=d||{},o.reduce(function(h,f,m,n){var b=f;d.extract&&(b=d.extract(f));var g=_.match(v,b,d);return g!=null&&(h[h.length]={string:g.rendered,score:g.score,index:m,original:f}),h},[]).sort(function(h,f){var m=f.score-h.score;return m||h.index-f.index}))}})()})(ke);var Xe=ke.exports;const Ye=He(Xe);var Ze=V('<form data-svelte-search=""><label class="svelte-wqugyy"><!></label> <input></form>');function $e(C,t){var r;const _=ee(t,["children","$$slots","$$events"]),v=ee(_,["value","autofocus","debounce","label","hideLabel","id","ref","removeFormAriaAttributes"]);ne(t,!1);let o=c(t,"value",4,""),d=c(t,"autofocus",0,!1),h=c(t,"debounce",0,0),f=c(t,"label",0,"Label"),m=c(t,"hideLabel",0,!1),n=c(t,"id",8,()=>"search"+Math.random().toString(36)),b=c(t,"ref",4,null),g=c(t,"removeFormAriaAttributes",0,!1);const F=ye();let k=o(),I,S=!1;function i(a){S||(S=!0,I=setTimeout(()=>{a(),S=!1},h()))}we(()=>(d()&&window.requestAnimationFrame(()=>b().focus()),()=>clearTimeout(I))),pe(()=>{o().length>0&&o()!==k&&(h()>0?i(()=>F("type",o())):F("type",o())),o().length===0&&k.length>0&&F("clear"),k=o()}),ce();var R=Ze(),z=T(R),U=T(z);ae(U,(r=t.$$slots)==null?void 0:r.label,{},a=>{var x=Ee(a);X(()=>_e(x,f())),D(a,x)});var p=q(q(z,!0));oe(p,a=>b(a),()=>b()),Ue(p);let W;X(()=>{P(R,"role",g()?null:"search"),P(R,"aria-labelledby",g()?null:n()),P(z,"id",`${n()??""}-label`),P(z,"for",n()),Q(z,"hide-label",m()),W=je(p,W,{name:"search",type:"search",placeholder:"Search...",autocomplete:"off",spellcheck:"false",...v,id:n()},!0,"svelte-wqugyy")}),N("submit",R,Qe(function(a){A.call(this,t,a)})),Je(p,o,a=>o(a)),N("input",p,function(a){A.call(this,t,a)}),N("change",p,function(a){A.call(this,t,a)}),N("focus",p,function(a){A.call(this,t,a)}),N("blur",p,function(a){A.call(this,t,a)}),N("keydown",p,function(a){A.call(this,t,a)}),D(C,R),ie()}var et=V('<li role="option" class="svelte-4tg1b1"><!></li>'),tt=V('<div class="svelte-4tg1b1"><!></div>'),at=V('<div data-svelte-typeahead="" role="combobox" aria-haspopup="listbox" class="svelte-4tg1b1"><!> <ul role="listbox" class="svelte-4tg1b1"><!> <!></ul></div>');function lt(C,t){const _=Oe(t),v=ee(t,["children","$$slots","$$events"]),o=ee(v,["id","value","data","extract","disable","filter","autoselect","inputAfterSelect","results","focusAfterSelect","showDropdownOnFocus","showAllResultsOnFocus","limit"]);ne(t,!1);const d=L(),h=L(),f=L();let m=c(t,"id",8,()=>"typeahead-"+Math.random().toString(36)),n=c(t,"value",4,""),b=c(t,"data",8,()=>[]),g=c(t,"extract",0,e=>e),F=c(t,"disable",0,e=>!1),k=c(t,"filter",0,e=>!1),I=c(t,"autoselect",0,!0),S=c(t,"inputAfterSelect",0,"update"),i=c(t,"results",12,()=>[]),R=c(t,"focusAfterSelect",0,!1),z=c(t,"showDropdownOnFocus",0,!1),U=c(t,"showAllResultsOnFocus",0,!1),p=c(t,"limit",0,1/0);const W=ye();let r=L(null),a=L(null),x=L(!1),u=L(-1),K="",G=L(!1);pe(()=>{K!==l(h)&&I()&&y(u,Se()),K!==l(h)&&!_["no-results"]&&y(x,i().length===0),K=l(h)});async function ue(){const e=i()[l(u)];if(e.disabled)return;const s=g()(e.original),E=n();S()=="clear"&&n(""),S()=="update"&&n(s),W("select",{selectedIndex:l(u),searched:E,selected:s,original:e.original,originalIndex:e.index}),await Re(),R()&&l(a).focus(),te()}function Se(){var E,B;let e=0,s=((E=i()[e])==null?void 0:E.disabled)??!1;for(;s;)e===i().length?e=0:e+=1,s=((B=i()[e])==null?void 0:B.disabled)??!1;return e}function de(e){let s=e===1&&l(u)===i().length-1?0:l(u)+e;s<0&&(s=i().length-1);let E=i()[s].disabled;for(;E;)s===i().length?s=0:s+=e,E=i()[s].disabled;y(u,s)}const fe=()=>y(x,!1),te=()=>{y(x,!0),y(G,!1)};J(()=>w(g()),()=>{y(d,{pre:"<mark>",post:"</mark>",extract:g()})}),J(()=>(w(n()),w(b()),l(d),w(p()),w(k()),w(F())),()=>{i(Ye.filter(n(),b(),l(d)).filter(({score:e})=>e>0).slice(0,p()).filter(e=>!k()(e.original)).map(e=>({...e,disabled:F()(e.original)})))}),J(()=>(l(G),w(U()),w(n()),w(b()),w(k()),w(F()),w(g())),()=>{l(G)&&U()&&n().length===0&&i(b().filter(e=>!k()(e)).map((e,s)=>({disabled:F()(e),index:s,original:e,score:0,string:g()(e)})))}),J(()=>(w(i()),w(g())),()=>{y(h,i().map(e=>g()(e.original)).join(""))}),J(()=>(l(x),w(i())),()=>{y(f,!l(x)&&i().length>0)}),J(()=>(w(z()),l(f),l(G)),()=>{z()&&y(f,l(f)&&l(G))}),Pe(),ce();var j=at();N("click",xe,({target:e})=>{var s;!l(x)&&!((s=l(r))!=null&&s.contains(e))&&te()},!1),oe(j,e=>y(r,e),()=>l(r));var ve=T(j),Ae=se(()=>l(u)>=0&&!l(x)&&i().length>0?`${m()}-result-${l(u)}`:null);$e(ve,qe({get id(){return m()},removeFormAriaAttributes:!0},()=>o,{get ref(){return l(a)},set ref(e){y(a,e)},"aria-autocomplete":"list",get"aria-controls"(){return`${m()??""}-listbox`},get"aria-labelledby"(){return`${m()??""}-label`},get"aria-activedescendant"(){return l(Ae)},get value(){return n()},set value(e){n(e)},$$events:{type(e){A.call(this,t,e)},input(e){A.call(this,t,e)},change(e){A.call(this,t,e)},focus:[function(e){A.call(this,t,e)},()=>{fe(),(z()||U())&&(y(f,!0),y(G,!0))}],clear:[function(e){A.call(this,t,e)},fe],blur(e){A.call(this,t,e)},keydown:[function(e){A.call(this,t,e)},e=>{var s;if(i().length!==0)switch(e.key){case"Enter":ue();break;case"ArrowDown":e.preventDefault(),de(1);break;case"ArrowUp":e.preventDefault(),de(-1);break;case"Escape":e.preventDefault(),n(""),(s=l(a))==null||s.focus(),te();break}}]}}));var Z=q(q(ve,!0)),he=T(Z);$(he,()=>l(f),e=>{var s=le(),E=re(s);Te(E,1,i,Me,(B,Y,H)=>{var M=et(),ze=T(M);ae(ze,Ge(t),{get result(){return O(Y)},index:O(H),get value(){return n()}},De=>{var me=le(),Ie=re(me);Ve(Ie,()=>O(Y).string),D(De,me)}),X(()=>{P(M,"id",`${m()??""}-result-${O(H)??""}`),P(M,"aria-selected",l(u)===O(H)),Q(M,"selected",l(u)===O(H)),Q(M,"disabled",O(Y).disabled)}),N("click",M,()=>{O(Y).disabled||(y(u,O(H)),ue())},!1),N("mouseenter",M,()=>{O(Y).disabled||y(u,O(H))},!1),D(B,M)}),D(e,s)});var Fe=q(q(he,!0));$(Fe,()=>_["no-results"]&&!l(x)&&n().length>0&&i().length===0,e=>{var B;var s=tt();Q(s,"no-results",!0);var E=T(s);ae(E,(B=t.$$slots)==null?void 0:B["no-results"],{get value(){return n()}},null),D(e,s)}),X(()=>{P(j,"aria-controls",`${m()??""}-listbox`),P(j,"aria-expanded",l(f)),P(j,"id",`${m()??""}-typeahead`),Q(j,"dropdown",i().length>0),P(Z,"aria-labelledby",`${m()??""}-label`),P(Z,"id",`${m()??""}-listbox`),Q(Z,"svelte-typeahead-list",!0)}),D(C,j),ie()}var rt=V('<div class="py-1 text-sm font-normal"> </div>'),st=V('<kbd class="kbd kbd-sm">⌘</kbd> <kbd class="kbd kbd-sm">K</kbd>',1),nt=V('<kbd class="kbd kbd-sm">ctrl</kbd> <kbd class="kbd kbd-sm">K</kbd>',1),it=V('<label><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <!> <div><!></div></label>');function St(C,t){ne(t,!1);const _={};Ne(_);const v=()=>ge(Ce,"$page",_),o=()=>ge(We,"$t",_);let d=c(t,"pages",8,()=>[]),h=c(t,"onSearch",0,()=>{}),f=c(t,"onFocus",0,()=>{});function m(r){const a=[];function x(u){if(u.href&&a.push(u),u.items)for(const K of u.items)x(K)}for(const u of r)x(u);return a}let n=m(d()),b=L();we(()=>{y(b,Be())});let g=L();function F(r){(r.keyCode===75&&r.metaKey||r.keyCode===75&&r.ctrlKey)&&(r.preventDefault(),l(g).querySelector("input[type=search]").focus(),f()())}function k({detail:r}){Ke(n[r.originalIndex].href),h()(r)}let I=c(t,"addScrollPaddingToNavbar",0,void 0),S=c(t,"removeScrollPaddingFromNavbar",0,void 0);ce();var i=it();N("keydown",xe,F,!1),oe(i,r=>y(g,r),()=>l(g)),be(i,"searchbox relative mx-3 w-full");var R=T(i),z=q(q(R,!0)),U=se(()=>o()("Search")+"…");lt(z,{get placeholder(){return l(U)},limit:8,label:"Search",data:n,extract:r=>r.tags?r.tags:r.name,inputAfterSelect:"clear",$$events:{select:k,focus(...r){const a=S();return a==null?void 0:a.apply(this,r)},blur(...r){const a=I();return a==null?void 0:a.apply(this,r)}},children:(r,a)=>{const x=se(()=>a.result);var u=rt(),K=T(u);X(()=>_e(K,n[l(x).index].name)),D(r,u)},$$slots:{default:!0}});var p=q(q(z,!0)),W=T(p);$(W,()=>["macos"].includes(l(b)),r=>{var a=st();D(r,a)},r=>{var a=le(),x=re(a);$(x,()=>["windows","linux"].includes(l(b)),u=>{var K=nt();D(u,K)},null,!0),D(r,a)}),X(()=>{Le(R,`pointer-events-none absolute z-10 my-3.5 ms-4 stroke-current opacity-60 ${v().url.pathname=="/"?"text-current":"text-base-content"}`),be(p,`pointer-events-none absolute end-10 top-2.5 gap-1 opacity-50 rtl:flex-row-reverse ${v().url.pathname=="/"?"hidden":"hidden lg:flex"}`)}),D(C,i),ie()}export{St as default};