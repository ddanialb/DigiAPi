(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();async function B(e){const s=await fetch(`./api/${e}`);if(!s.ok)throw new Error(`Failed to fetch ${e}`);return s.json()}async function N(){const e=await fetch("./db.json");if(!e.ok)throw new Error("Failed to fetch db.json");return e.json()}const xe=Object.freeze(Object.defineProperty({__proto__:null,fetchAPI:B,getDB:N},Symbol.toStringTag,{value:"Module"}));function be(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function ve(e={},s={}){const t=["__proto__","constructor","prototype"];Object.keys(s).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=s[i]:be(s[i])&&be(e[i])&&Object.keys(s[i]).length>0&&ve(e[i],s[i])})}const $e={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function F(){const e=typeof document<"u"?document:{};return ve(e,$e),e}const Ke={document:$e,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function q(){const e=typeof window<"u"?window:{};return ve(e,Ke),e}function Qe(e=""){return e.trim().split(" ").filter(s=>!!s.trim())}function Ze(e){const s=e;Object.keys(s).forEach(t=>{try{s[t]=null}catch{}try{delete s[t]}catch{}})}function Ce(e,s=0){return setTimeout(e,s)}function ie(){return Date.now()}function Je(e){const s=q();let t;return s.getComputedStyle&&(t=s.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}function et(e,s="x"){const t=q();let i,n,r;const l=Je(e);return t.WebKitCSSMatrix?(n=l.transform||l.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(o=>o.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(n==="none"?"":n)):(r=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),s==="x"&&(t.WebKitCSSMatrix?n=r.m41:i.length===16?n=parseFloat(i[12]):n=parseFloat(i[4])),s==="y"&&(t.WebKitCSSMatrix?n=r.m42:i.length===16?n=parseFloat(i[13]):n=parseFloat(i[5])),n||0}function ee(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function tt(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function V(...e){const s=Object(e[0]);for(let t=1;t<e.length;t+=1){const i=e[t];if(i!=null&&!tt(i)){const n=Object.keys(Object(i)).filter(r=>r!=="__proto__"&&r!=="constructor"&&r!=="prototype");for(let r=0,l=n.length;r<l;r+=1){const o=n[r],a=Object.getOwnPropertyDescriptor(i,o);a!==void 0&&a.enumerable&&(ee(s[o])&&ee(i[o])?i[o].__swiper__?s[o]=i[o]:V(s[o],i[o]):!ee(s[o])&&ee(i[o])?(s[o]={},i[o].__swiper__?s[o]=i[o]:V(s[o],i[o])):s[o]=i[o])}}}return s}function Y(e,s,t){e.style.setProperty(s,t)}function Pe({swiper:e,targetPosition:s,side:t}){const i=q(),n=-e.translate;let r=null,l;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const a=s>n?"next":"prev",c=(u,v)=>a==="next"&&u>=v||a==="prev"&&u<=v,p=()=>{l=new Date().getTime(),r===null&&(r=l);const u=Math.max(Math.min((l-r)/o,1),0),v=.5-Math.cos(u*Math.PI)/2;let d=n+v*(s-n);if(c(d,s)&&(d=s),e.wrapperEl.scrollTo({[t]:d}),c(d,s)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[t]:d})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(p)};p()}function G(e,s=""){const t=q(),i=[...e.children];return t.HTMLSlotElement&&e instanceof HTMLSlotElement&&i.push(...e.assignedElements()),s?i.filter(n=>n.matches(s)):i}function st(e,s){const t=[s];for(;t.length>0;){const i=t.shift();if(e===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function it(e,s){const t=q();let i=s.contains(e);return!i&&t.HTMLSlotElement&&s instanceof HTMLSlotElement&&(i=[...s.assignedElements()].includes(e),i||(i=st(e,s))),i}function ne(e){try{console.warn(e);return}catch{}}function re(e,s=[]){const t=document.createElement(e);return t.classList.add(...Array.isArray(s)?s:Qe(s)),t}function nt(e,s){const t=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;s?i.matches(s)&&t.push(i):t.push(i),e=i}return t}function rt(e,s){const t=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;s?i.matches(s)&&t.push(i):t.push(i),e=i}return t}function W(e,s){return q().getComputedStyle(e,null).getPropertyValue(s)}function ae(e){let s=e,t;if(s){for(t=0;(s=s.previousSibling)!==null;)s.nodeType===1&&(t+=1);return t}}function Ie(e,s){const t=[];let i=e.parentElement;for(;i;)s?i.matches(s)&&t.push(i):t.push(i),i=i.parentElement;return t}function me(e,s,t){const i=q();return e[s==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue(s==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue(s==="width"?"margin-left":"margin-bottom"))}function H(e){return(Array.isArray(e)?e:[e]).filter(s=>!!s)}function he(e,s=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(s):e.innerHTML=s}let le;function at(){const e=q(),s=F();return{smoothScroll:s.documentElement&&s.documentElement.style&&"scrollBehavior"in s.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&s instanceof e.DocumentTouch)}}function ze(){return le||(le=at()),le}let oe;function lt({userAgent:e}={}){const s=ze(),t=q(),i=t.navigator.platform,n=e||t.navigator.userAgent,r={ios:!1,android:!1},l=t.screen.width,o=t.screen.height,a=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const p=n.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let d=i==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&d&&s.touch&&h.indexOf(`${l}x${o}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),d=!1),a&&!v&&(r.os="android",r.android=!0),(c||u||p)&&(r.os="ios",r.ios=!0),r}function _e(e={}){return oe||(oe=lt(e)),oe}let ce;function ot(){const e=q(),s=_e();let t=!1;function i(){const o=e.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){const o=String(e.navigator.userAgent);if(o.includes("Version/")){const[a,c]=o.split("Version/")[1].split(" ")[0].split(".").map(p=>Number(p));t=a<16||a===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=i(),l=r||n&&s.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:l,isWebView:n}}function je(){return ce||(ce=ot()),ce}function ct({swiper:e,on:s,emit:t}){const i=q();let n=null,r=null;const l=()=>{!e||e.destroyed||!e.initialized||(t("beforeResize"),t("resize"))},o=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(p=>{r=i.requestAnimationFrame(()=>{const{width:u,height:v}=e;let d=u,h=v;p.forEach(({contentBoxSize:x,contentRect:b,target:f})=>{f&&f!==e.el||(d=b?b.width:(x[0]||x).inlineSize,h=b?b.height:(x[0]||x).blockSize)}),(d!==u||h!==v)&&l()})}),n.observe(e.el))},a=()=>{r&&i.cancelAnimationFrame(r),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||t("orientationchange")};s("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){o();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",c)}),s("destroy",()=>{a(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",c)})}function dt({swiper:e,extendParams:s,on:t,emit:i}){const n=[],r=q(),l=(c,p={})=>{const u=r.MutationObserver||r.WebkitMutationObserver,v=new u(d=>{if(e.__preventObserver__)return;if(d.length===1){i("observerUpdate",d[0]);return}const h=function(){i("observerUpdate",d[0])};r.requestAnimationFrame?r.requestAnimationFrame(h):r.setTimeout(h,0)});v.observe(c,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:e.isElement||(typeof p.childList>"u"?!0:p).childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),n.push(v)},o=()=>{if(e.params.observer){if(e.params.observeParents){const c=Ie(e.hostEl);for(let p=0;p<c.length;p+=1)l(c[p])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},a=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",o),t("destroy",a)}var ft={on(e,s,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof s!="function")return i;const n=t?"unshift":"push";return e.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][n](s)}),i},once(e,s,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof s!="function")return i;function n(...r){i.off(e,n),n.__emitterProxy&&delete n.__emitterProxy,s.apply(i,r)}return n.__emitterProxy=s,i.on(e,n,t)},onAny(e,s){const t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;const i=s?"unshift":"push";return t.eventsAnyListeners.indexOf(e)<0&&t.eventsAnyListeners[i](e),t},offAny(e){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsAnyListeners)return s;const t=s.eventsAnyListeners.indexOf(e);return t>=0&&s.eventsAnyListeners.splice(t,1),s},off(e,s){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||e.split(" ").forEach(i=>{typeof s>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((n,r)=>{(n===s||n.__emitterProxy&&n.__emitterProxy===s)&&t.eventsListeners[i].splice(r,1)})}),t},emit(...e){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let t,i,n;return typeof e[0]=="string"||Array.isArray(e[0])?(t=e[0],i=e.slice(1,e.length),n=s):(t=e[0].events,i=e[0].data,n=e[0].context||s),i.unshift(n),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(o=>{o.apply(n,[l,...i])}),s.eventsListeners&&s.eventsListeners[l]&&s.eventsListeners[l].forEach(o=>{o.apply(n,i)})}),s}};function ut(){const e=this;let s,t;const i=e.el;typeof e.params.width<"u"&&e.params.width!==null?s=e.params.width:s=i.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?t=e.params.height:t=i.clientHeight,!(s===0&&e.isHorizontal()||t===0&&e.isVertical())&&(s=s-parseInt(W(i,"padding-left")||0,10)-parseInt(W(i,"padding-right")||0,10),t=t-parseInt(W(i,"padding-top")||0,10)-parseInt(W(i,"padding-bottom")||0,10),Number.isNaN(s)&&(s=0),Number.isNaN(t)&&(t=0),Object.assign(e,{width:s,height:t,size:e.isHorizontal()?s:t}))}function pt(){const e=this;function s(T,L){return parseFloat(T.getPropertyValue(e.getDirectionLabel(L))||0)}const t=e.params,{wrapperEl:i,slidesEl:n,rtlTranslate:r,wrongRTL:l}=e,o=e.virtual&&t.virtual.enabled,a=o?e.virtual.slides.length:e.slides.length,c=G(n,`.${e.params.slideClass}, swiper-slide`),p=o?e.virtual.slides.length:c.length;let u=[];const v=[],d=[];let h=t.slidesOffsetBefore;typeof h=="function"&&(h=t.slidesOffsetBefore.call(e));let x=t.slidesOffsetAfter;typeof x=="function"&&(x=t.slidesOffsetAfter.call(e));const b=e.snapGrid.length,f=e.slidesGrid.length,m=e.size-h-x;let g=t.spaceBetween,w=-h,S=0,$=0;if(typeof m>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*m:typeof g=="string"&&(g=parseFloat(g)),e.virtualSize=-g-h-x,c.forEach(T=>{r?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Y(i,"--swiper-centered-offset-before",""),Y(i,"--swiper-centered-offset-after","")),t.cssMode&&(Y(i,"--swiper-slides-offset-before",`${h}px`),Y(i,"--swiper-slides-offset-after",`${x}px`));const k=t.grid&&t.grid.rows>1&&e.grid;k?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let y;const I=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(T=>typeof t.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<p;T+=1){y=0;const L=c[T];if(!(L&&(k&&e.grid.updateSlide(T,L,c),W(L,"display")==="none"))){if(o&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(y=t.virtual.slidesPerViewAutoSlideSize),y&&L&&(t.roundLengths&&(y=Math.floor(y)),L.style[e.getDirectionLabel("width")]=`${y}px`);else if(t.slidesPerView==="auto"){I&&(L.style[e.getDirectionLabel("width")]="");const E=getComputedStyle(L),C=L.style.transform,z=L.style.webkitTransform;if(C&&(L.style.transform="none"),z&&(L.style.webkitTransform="none"),t.roundLengths)y=e.isHorizontal()?me(L,"width"):me(L,"height");else{const j=s(E,"width"),D=s(E,"padding-left"),P=s(E,"padding-right"),M=s(E,"margin-left"),_=s(E,"margin-right"),O=E.getPropertyValue("box-sizing");if(O&&O==="border-box")y=j+M+_;else{const{clientWidth:R,offsetWidth:Xe}=L;y=j+D+P+M+_+(Xe-R)}}C&&(L.style.transform=C),z&&(L.style.webkitTransform=z),t.roundLengths&&(y=Math.floor(y))}else y=(m-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(y=Math.floor(y)),L&&(L.style[e.getDirectionLabel("width")]=`${y}px`);L&&(L.swiperSlideSize=y),d.push(y),t.centeredSlides?(w=w+y/2+S/2+g,S===0&&T!==0&&(w=w-m/2-g),T===0&&(w=w-m/2-g),Math.abs(w)<1/1e3&&(w=0),t.roundLengths&&(w=Math.floor(w)),$%t.slidesPerGroup===0&&u.push(w),v.push(w)):(t.roundLengths&&(w=Math.floor(w)),($-Math.min(e.params.slidesPerGroupSkip,$))%e.params.slidesPerGroup===0&&u.push(w),v.push(w),w=w+y+g),e.virtualSize+=y+g,S=y,$+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+x,r&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${e.virtualSize+g}px`),t.setWrapperSize&&(i.style[e.getDirectionLabel("width")]=`${e.virtualSize+g}px`),k&&e.grid.updateWrapperSize(y,u),!t.centeredSlides){const T=t.slidesPerView!=="auto"&&t.slidesPerView%1!==0,L=t.snapToSlideEdge&&!t.loop&&(t.slidesPerView==="auto"||T);let E=u.length;if(L){let z;if(t.slidesPerView==="auto"){z=1;let j=0;for(let D=d.length-1;D>=0&&(j+=d[D]+(D<d.length-1?g:0),j<=m);D-=1)z=d.length-D}else z=Math.floor(t.slidesPerView);E=Math.max(p-z,0)}const C=[];for(let z=0;z<u.length;z+=1){let j=u[z];t.roundLengths&&(j=Math.floor(j)),L?z<=E&&C.push(j):u[z]<=e.virtualSize-m&&C.push(j)}u=C,Math.floor(e.virtualSize-m)-Math.floor(u[u.length-1])>1&&(L||u.push(e.virtualSize-m))}if(o&&t.loop){const T=d[0]+g;if(t.slidesPerGroup>1){const L=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/t.slidesPerGroup),E=T*t.slidesPerGroup;for(let C=0;C<L;C+=1)u.push(u[u.length-1]+E)}for(let L=0;L<e.virtual.slidesBefore+e.virtual.slidesAfter;L+=1)t.slidesPerGroup===1&&u.push(u[u.length-1]+T),v.push(v[v.length-1]+T),e.virtualSize+=T}if(u.length===0&&(u=[0]),g!==0){const T=e.isHorizontal()&&r?"marginLeft":e.getDirectionLabel("marginRight");c.filter((L,E)=>!t.cssMode||t.loop?!0:E!==c.length-1).forEach(L=>{L.style[T]=`${g}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let T=0;d.forEach(E=>{T+=E+(g||0)}),T-=g;const L=T>m?T-m:0;u=u.map(E=>E<=0?-h:E>L?L+x:E)}if(t.centerInsufficientSlides){let T=0;if(d.forEach(L=>{T+=L+(g||0)}),T-=g,T<m){const L=(m-T)/2;u.forEach((E,C)=>{u[C]=E-L}),v.forEach((E,C)=>{v[C]=E+L})}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:v,slidesSizesGrid:d}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Y(i,"--swiper-centered-offset-before",`${-u[0]}px`),Y(i,"--swiper-centered-offset-after",`${e.size/2-d[d.length-1]/2}px`);const T=-e.snapGrid[0],L=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(E=>E+T),e.slidesGrid=e.slidesGrid.map(E=>E+L)}if(p!==a&&e.emit("slidesLengthChange"),u.length!==b&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==f&&e.emit("slidesGridLengthChange"),t.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!o&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const T=`${t.containerModifierClass}backface-hidden`,L=e.el.classList.contains(T);p<=t.maxBackfaceHiddenSlides?L||e.el.classList.add(T):L&&e.el.classList.remove(T)}}function mt(e){const s=this,t=[],i=s.virtual&&s.params.virtual.enabled;let n=0,r;typeof e=="number"?s.setTransition(e):e===!0&&s.setTransition(s.params.speed);const l=o=>i?s.slides[s.getSlideIndexByData(o)]:s.slides[o];if(s.params.slidesPerView!=="auto"&&s.params.slidesPerView>1)if(s.params.centeredSlides)(s.visibleSlides||[]).forEach(o=>{t.push(o)});else for(r=0;r<Math.ceil(s.params.slidesPerView);r+=1){const o=s.activeIndex+r;if(o>s.slides.length&&!i)break;t.push(l(o))}else t.push(l(s.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const o=t[r].offsetHeight;n=o>n?o:n}(n||n===0)&&(s.wrapperEl.style.height=`${n}px`)}function ht(){const e=this,s=e.slides,t=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<s.length;i+=1)s[i].swiperSlideOffset=(e.isHorizontal()?s[i].offsetLeft:s[i].offsetTop)-t-e.cssOverflowAdjustment()}const we=(e,s,t)=>{s&&!e.classList.contains(t)?e.classList.add(t):!s&&e.classList.contains(t)&&e.classList.remove(t)};function gt(e=this&&this.translate||0){const s=this,t=s.params,{slides:i,rtlTranslate:n,snapGrid:r}=s;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&s.updateSlidesOffset();let l=-e;n&&(l=e),s.visibleSlidesIndexes=[],s.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*s.size:typeof o=="string"&&(o=parseFloat(o));for(let a=0;a<i.length;a+=1){const c=i[a];let p=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(p-=i[0].swiperSlideOffset);const u=(l+(t.centeredSlides?s.minTranslate():0)-p)/(c.swiperSlideSize+o),v=(l-r[0]+(t.centeredSlides?s.minTranslate():0)-p)/(c.swiperSlideSize+o),d=-(l-p),h=d+s.slidesSizesGrid[a],x=d>=0&&d<=s.size-s.slidesSizesGrid[a],b=d>=0&&d<s.size-1||h>1&&h<=s.size||d<=0&&h>=s.size;b&&(s.visibleSlides.push(c),s.visibleSlidesIndexes.push(a)),we(c,b,t.slideVisibleClass),we(c,x,t.slideFullyVisibleClass),c.progress=n?-u:u,c.originalProgress=n?-v:v}}function vt(e){const s=this;if(typeof e>"u"){const p=s.rtlTranslate?-1:1;e=s&&s.translate&&s.translate*p||0}const t=s.params,i=s.maxTranslate()-s.minTranslate();let{progress:n,isBeginning:r,isEnd:l,progressLoop:o}=s;const a=r,c=l;if(i===0)n=0,r=!0,l=!0;else{n=(e-s.minTranslate())/i;const p=Math.abs(e-s.minTranslate())<1,u=Math.abs(e-s.maxTranslate())<1;r=p||n<=0,l=u||n>=1,p&&(n=0),u&&(n=1)}if(t.loop){const p=s.getSlideIndexByData(0),u=s.getSlideIndexByData(s.slides.length-1),v=s.slidesGrid[p],d=s.slidesGrid[u],h=s.slidesGrid[s.slidesGrid.length-1],x=Math.abs(e);x>=v?o=(x-v)/h:o=(x+h-d)/h,o>1&&(o-=1)}Object.assign(s,{progress:n,progressLoop:o,isBeginning:r,isEnd:l}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&s.updateSlidesProgress(e),r&&!a&&s.emit("reachBeginning toEdge"),l&&!c&&s.emit("reachEnd toEdge"),(a&&!r||c&&!l)&&s.emit("fromEdge"),s.emit("progress",n)}const de=(e,s,t)=>{s&&!e.classList.contains(t)?e.classList.add(t):!s&&e.classList.contains(t)&&e.classList.remove(t)};function xt(){const e=this,{slides:s,params:t,slidesEl:i,activeIndex:n}=e,r=e.virtual&&t.virtual.enabled,l=e.grid&&t.grid&&t.grid.rows>1,o=u=>G(i,`.${t.slideClass}${u}, swiper-slide${u}`)[0];let a,c,p;if(r)if(t.loop){let u=n-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${u}"]`)}else a=o(`[data-swiper-slide-index="${n}"]`);else l?(a=s.find(u=>u.column===n),p=s.find(u=>u.column===n+1),c=s.find(u=>u.column===n-1)):a=s[n];a&&(l||(p=rt(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!p&&(p=s[0]),c=nt(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=s[s.length-1]))),s.forEach(u=>{de(u,u===a,t.slideActiveClass),de(u,u===p,t.slideNextClass),de(u,u===c,t.slidePrevClass)}),e.emitSlidesClasses()}const te=(e,s)=>{if(!e||e.destroyed||!e.params)return;const t=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,i=s.closest(t());if(i){let n=i.querySelector(`.${e.params.lazyPreloaderClass}`);!n&&e.isElement&&(i.shadowRoot?n=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(n=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),n&&!n.lazyPreloaderManaged&&n.remove())})),n&&!n.lazyPreloaderManaged&&n.remove()}},fe=(e,s)=>{if(!e.slides[s])return;const t=e.slides[s].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},ge=e=>{if(!e||e.destroyed||!e.params)return;let s=e.params.lazyPreloadPrevNext;const t=e.slides.length;if(!t||!s||s<0)return;s=Math.min(s,t);const i=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),n=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const l=n,o=[l-s];o.push(...Array.from({length:s}).map((a,c)=>l+i+c)),e.slides.forEach((a,c)=>{o.includes(a.column)&&fe(e,c)});return}const r=n+i-1;if(e.params.rewind||e.params.loop)for(let l=n-s;l<=r+s;l+=1){const o=(l%t+t)%t;(o<n||o>r)&&fe(e,o)}else for(let l=Math.max(n-s,0);l<=Math.min(r+s,t-1);l+=1)l!==n&&(l>r||l<n)&&fe(e,l)};function bt(e){const{slidesGrid:s,params:t}=e,i=e.rtlTranslate?e.translate:-e.translate;let n;for(let r=0;r<s.length;r+=1)typeof s[r+1]<"u"?i>=s[r]&&i<s[r+1]-(s[r+1]-s[r])/2?n=r:i>=s[r]&&i<s[r+1]&&(n=r+1):i>=s[r]&&(n=r);return t.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function wt(e){const s=this,t=s.rtlTranslate?s.translate:-s.translate,{snapGrid:i,params:n,activeIndex:r,realIndex:l,snapIndex:o}=s;let a=e,c;const p=d=>{let h=d-s.virtual.slidesBefore;return h<0&&(h=s.virtual.slides.length+h),h>=s.virtual.slides.length&&(h-=s.virtual.slides.length),h};if(typeof a>"u"&&(a=bt(s)),i.indexOf(t)>=0)c=i.indexOf(t);else{const d=Math.min(n.slidesPerGroupSkip,a);c=d+Math.floor((a-d)/n.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),a===r&&!s.params.loop){c!==o&&(s.snapIndex=c,s.emit("snapIndexChange"));return}if(a===r&&s.params.loop&&s.virtual&&s.params.virtual.enabled){s.realIndex=p(a);return}const u=s.grid&&n.grid&&n.grid.rows>1;let v;if(s.virtual&&n.virtual.enabled)n.loop?v=p(a):v=a;else if(u){const d=s.slides.find(x=>x.column===a);let h=parseInt(d.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(s.slides.indexOf(d),0)),v=Math.floor(h/n.grid.rows)}else if(s.slides[a]){const d=s.slides[a].getAttribute("data-swiper-slide-index");d?v=parseInt(d,10):v=a}else v=a;Object.assign(s,{previousSnapIndex:o,snapIndex:c,previousRealIndex:l,realIndex:v,previousIndex:r,activeIndex:a}),s.initialized&&ge(s),s.emit("activeIndexChange"),s.emit("snapIndexChange"),(s.initialized||s.params.runCallbacksOnInit)&&(l!==v&&s.emit("realIndexChange"),s.emit("slideChange"))}function yt(e,s){const t=this,i=t.params;let n=e.closest(`.${i.slideClass}, swiper-slide`);!n&&t.isElement&&s&&s.length>1&&s.includes(e)&&[...s.slice(s.indexOf(e)+1,s.length)].forEach(o=>{!n&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(n=o)});let r=!1,l;if(n){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===n){r=!0,l=o;break}}if(n&&r)t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=l;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var St={updateSize:ut,updateSlides:pt,updateAutoHeight:mt,updateSlidesOffset:ht,updateSlidesProgress:gt,updateProgress:vt,updateSlidesClasses:xt,updateActiveIndex:wt,updateClickedSlide:yt};function Tt(e=this.isHorizontal()?"x":"y"){const s=this,{params:t,rtlTranslate:i,translate:n,wrapperEl:r}=s;if(t.virtualTranslate)return i?-n:n;if(t.cssMode)return n;let l=et(r,e);return l+=s.cssOverflowAdjustment(),i&&(l=-l),l||0}function Lt(e,s){const t=this,{rtlTranslate:i,params:n,wrapperEl:r,progress:l}=t;let o=0,a=0;const c=0;t.isHorizontal()?o=i?-e:e:a=e,n.roundLengths&&(o=Math.floor(o),a=Math.floor(a)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:a,n.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-a:n.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():a-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${a}px, ${c}px)`);let p;const u=t.maxTranslate()-t.minTranslate();u===0?p=0:p=(e-t.minTranslate())/u,p!==l&&t.updateProgress(e),t.emit("setTranslate",t.translate,s)}function Et(){return-this.snapGrid[0]}function Mt(){return-this.snapGrid[this.snapGrid.length-1]}function kt(e=0,s=this.params.speed,t=!0,i=!0,n){const r=this,{params:l,wrapperEl:o}=r;if(r.animating&&l.preventInteractionOnTransition)return!1;const a=r.minTranslate(),c=r.maxTranslate();let p;if(i&&e>a?p=a:i&&e<c?p=c:p=e,r.updateProgress(p),l.cssMode){const u=r.isHorizontal();if(s===0)o[u?"scrollLeft":"scrollTop"]=-p;else{if(!r.support.smoothScroll)return Pe({swiper:r,targetPosition:-p,side:u?"left":"top"}),!0;o.scrollTo({[u?"left":"top"]:-p,behavior:"smooth"})}return!0}return s===0?(r.setTransition(0),r.setTranslate(p),t&&(r.emit("beforeTransitionStart",s,n),r.emit("transitionEnd"))):(r.setTransition(s),r.setTranslate(p),t&&(r.emit("beforeTransitionStart",s,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(v){!r||r.destroyed||v.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var $t={getTranslate:Tt,setTranslate:Lt,minTranslate:Et,maxTranslate:Mt,translateTo:kt};function Ct(e,s){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${e}ms`,t.wrapperEl.style.transitionDelay=e===0?"0ms":""),t.emit("setTransition",e,s)}function Ae({swiper:e,runCallbacks:s,direction:t,step:i}){const{activeIndex:n,previousIndex:r}=e;let l=t;l||(n>r?l="next":n<r?l="prev":l="reset"),e.emit(`transition${i}`),s&&l==="reset"?e.emit(`slideResetTransition${i}`):s&&n!==r&&(e.emit(`slideChangeTransition${i}`),l==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`))}function Pt(e=!0,s){const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Ae({swiper:t,runCallbacks:e,direction:s,step:"Start"}))}function It(e=!0,s){const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Ae({swiper:t,runCallbacks:e,direction:s,step:"End"}))}var zt={setTransition:Ct,transitionStart:Pt,transitionEnd:It};function _t(e=0,s,t=!0,i,n){typeof e=="string"&&(e=parseInt(e,10));const r=this;let l=e;l<0&&(l=0);const{params:o,snapGrid:a,slidesGrid:c,previousIndex:p,activeIndex:u,rtlTranslate:v,wrapperEl:d,enabled:h}=r;if(!h&&!i&&!n||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;typeof s>"u"&&(s=r.params.speed);const x=Math.min(r.params.slidesPerGroupSkip,l);let b=x+Math.floor((l-x)/r.params.slidesPerGroup);b>=a.length&&(b=a.length-1);const f=-a[b];if(o.normalizeSlideIndex)for(let k=0;k<c.length;k+=1){const y=-Math.floor(f*100),I=Math.floor(c[k]*100),T=Math.floor(c[k+1]*100);typeof c[k+1]<"u"?y>=I&&y<T-(T-I)/2?l=k:y>=I&&y<T&&(l=k+1):y>=I&&(l=k)}if(r.initialized&&l!==u&&(!r.allowSlideNext&&(v?f>r.translate&&f>r.minTranslate():f<r.translate&&f<r.minTranslate())||!r.allowSlidePrev&&f>r.translate&&f>r.maxTranslate()&&(u||0)!==l))return!1;l!==(p||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(f);let m;l>u?m="next":l<u?m="prev":m="reset";const g=r.virtual&&r.params.virtual.enabled;if(!(g&&n)&&(v&&-f===r.translate||!v&&f===r.translate))return r.updateActiveIndex(l),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),o.effect!=="slide"&&r.setTranslate(f),m!=="reset"&&(r.transitionStart(t,m),r.transitionEnd(t,m)),!1;if(o.cssMode){const k=r.isHorizontal(),y=v?f:-f;if(s===0)g&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),g&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{d[k?"scrollLeft":"scrollTop"]=y})):d[k?"scrollLeft":"scrollTop"]=y,g&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return Pe({swiper:r,targetPosition:y,side:k?"left":"top"}),!0;d.scrollTo({[k?"left":"top"]:y,behavior:"smooth"})}return!0}const $=je().isSafari;return g&&!n&&$&&r.isElement&&r.virtual.update(!1,!1,l),r.setTransition(s),r.setTranslate(f),r.updateActiveIndex(l),r.updateSlidesClasses(),r.emit("beforeTransitionStart",s,i),r.transitionStart(t,m),s===0?r.transitionEnd(t,m):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(y){!r||r.destroyed||y.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,m))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function jt(e=0,s,t=!0,i){typeof e=="string"&&(e=parseInt(e,10));const n=this;if(n.destroyed)return;typeof s>"u"&&(s=n.params.speed);const r=n.grid&&n.params.grid&&n.params.grid.rows>1;let l=e;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)l=l+n.virtual.slidesBefore;else{let o;if(r){const x=l*n.params.grid.rows;o=n.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===x).column}else o=n.getSlideIndexByData(l);const a=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c,slidesOffsetBefore:p,slidesOffsetAfter:u}=n.params,v=c||!!p||!!u;let d=n.params.slidesPerView;d==="auto"?d=n.slidesPerViewDynamic():(d=Math.ceil(parseFloat(n.params.slidesPerView,10)),v&&d%2===0&&(d=d+1));let h=a-o<d;if(v&&(h=h||o<Math.ceil(d/2)),i&&v&&n.params.slidesPerView!=="auto"&&!r&&(h=!1),h){const x=v?o<n.activeIndex?"prev":"next":o-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:x,slideTo:!0,activeSlideIndex:x==="next"?o+1:o-a+1,slideRealIndex:x==="next"?n.realIndex:void 0})}if(r){const x=l*n.params.grid.rows;l=n.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===x).column}else l=n.getSlideIndexByData(l)}return requestAnimationFrame(()=>{n.slideTo(l,s,t,i)}),n}function At(e,s=!0,t){const i=this,{enabled:n,params:r,animating:l}=i;if(!n||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);let o=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));const a=i.activeIndex<r.slidesPerGroupSkip?1:o,c=i.virtual&&r.virtual.enabled;if(r.loop){if(l&&!c&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+a,e,s,t)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,e,s,t):i.slideTo(i.activeIndex+a,e,s,t)}function Ot(e,s=!0,t){const i=this,{params:n,snapGrid:r,slidesGrid:l,rtlTranslate:o,enabled:a,animating:c}=i;if(!a||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);const p=i.virtual&&n.virtual.enabled;if(n.loop){if(c&&!p&&n.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const u=o?i.translate:-i.translate;function v(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const d=v(u),h=r.map(m=>v(m)),x=n.freeMode&&n.freeMode.enabled;let b=r[h.indexOf(d)-1];if(typeof b>"u"&&(n.cssMode||x)){let m;r.forEach((g,w)=>{d>=g&&(m=w)}),typeof m<"u"&&(b=x?r[m]:r[m>0?m-1:m])}let f=0;if(typeof b<"u"&&(f=l.indexOf(b),f<0&&(f=i.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(f=f-i.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),n.rewind&&i.isBeginning){const m=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(m,e,s,t)}else if(n.loop&&i.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(f,e,s,t)}),!0;return i.slideTo(f,e,s,t)}function Ht(e,s=!0,t){const i=this;if(!i.destroyed)return typeof e>"u"&&(e=i.params.speed),i.slideTo(i.activeIndex,e,s,t)}function Bt(e,s=!0,t,i=.5){const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let r=n.activeIndex;const l=Math.min(n.params.slidesPerGroupSkip,r),o=l+Math.floor((r-l)/n.params.slidesPerGroup),a=n.rtlTranslate?n.translate:-n.translate;if(a>=n.snapGrid[o]){const c=n.snapGrid[o],p=n.snapGrid[o+1];a-c>(p-c)*i&&(r+=n.params.slidesPerGroup)}else{const c=n.snapGrid[o-1],p=n.snapGrid[o];a-c<=(p-c)*i&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,e,s,t)}function qt(){const e=this;if(e.destroyed)return;const{params:s,slidesEl:t}=e,i=s.slidesPerView==="auto"?e.slidesPerViewDynamic():s.slidesPerView;let n=e.getSlideIndexWhenGrid(e.clickedIndex),r;const l=e.isElement?"swiper-slide":`.${s.slideClass}`,o=e.grid&&e.params.grid&&e.params.grid.rows>1;if(s.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),s.centeredSlides?e.slideToLoop(r):n>(o?(e.slides.length-i)/2-(e.params.grid.rows-1):e.slides.length-i)?(e.loopFix(),n=e.getSlideIndex(G(t,`${l}[data-swiper-slide-index="${r}"]`)[0]),Ce(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}var Vt={slideTo:_t,slideToLoop:jt,slideNext:At,slidePrev:Ot,slideReset:Ht,slideToClosest:Bt,slideToClickedSlide:qt};function Dt(e,s){const t=this,{params:i,slidesEl:n}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{G(n,`.${i.slideClass}, swiper-slide`).forEach((h,x)=>{h.setAttribute("data-swiper-slide-index",x)})},l=()=>{const d=G(n,`.${i.slideBlankClass}`);d.forEach(h=>{h.remove()}),d.length>0&&(t.recalcSlides(),t.updateSlides())},o=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||o)&&l();const a=i.slidesPerGroup*(o?i.grid.rows:1),c=t.slides.length%a!==0,p=o&&t.slides.length%i.grid.rows!==0,u=d=>{for(let h=0;h<d;h+=1){const x=t.isElement?re("swiper-slide",[i.slideBlankClass]):re("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(x)}};if(c){if(i.loopAddBlankSlides){const d=a-t.slides.length%a;u(d),t.recalcSlides(),t.updateSlides()}else ne("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(p){if(i.loopAddBlankSlides){const d=i.grid.rows-t.slides.length%i.grid.rows;u(d),t.recalcSlides(),t.updateSlides()}else ne("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const v=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;t.loopFix({slideRealIndex:e,direction:v?void 0:"next",initial:s})}function Gt({slideRealIndex:e,slideTo:s=!0,direction:t,setTranslate:i,activeSlideIndex:n,initial:r,byController:l,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:c,allowSlidePrev:p,allowSlideNext:u,slidesEl:v,params:d}=a,{centeredSlides:h,slidesOffsetBefore:x,slidesOffsetAfter:b,initialSlide:f}=d,m=h||!!x||!!b;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&d.virtual.enabled){s&&(!m&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):m&&a.snapIndex<d.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=p,a.allowSlideNext=u,a.emit("loopFix");return}let g=d.slidesPerView;g==="auto"?g=a.slidesPerViewDynamic():(g=Math.ceil(parseFloat(d.slidesPerView,10)),m&&g%2===0&&(g=g+1));const w=d.slidesPerGroupAuto?g:d.slidesPerGroup;let S=m?Math.max(w,Math.ceil(g/2)):w;S%w!==0&&(S+=w-S%w),S+=d.loopAdditionalSlides,a.loopedSlides=S;const $=a.grid&&d.grid&&d.grid.rows>1;c.length<g+S||a.params.effect==="cards"&&c.length<g+S*2?ne("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):$&&d.grid.fill==="row"&&ne("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],y=[],I=$?Math.ceil(c.length/d.grid.rows):c.length,T=r&&I-f<g&&!m;let L=T?f:a.activeIndex;typeof n>"u"?n=a.getSlideIndex(c.find(M=>M.classList.contains(d.slideActiveClass))):L=n;const E=t==="next"||!t,C=t==="prev"||!t;let z=0,j=0;const P=($?c[n].column:n)+(m&&typeof i>"u"?-g/2+.5:0);if(P<S){z=Math.max(S-P,w);for(let M=0;M<S-P;M+=1){const _=M-Math.floor(M/I)*I;if($){const O=I-_-1;for(let R=c.length-1;R>=0;R-=1)c[R].column===O&&k.push(R)}else k.push(I-_-1)}}else if(P+g>I-S){j=Math.max(P-(I-S*2),w),T&&(j=Math.max(j,g-I+f+1));for(let M=0;M<j;M+=1){const _=M-Math.floor(M/I)*I;$?c.forEach((O,R)=>{O.column===_&&y.push(R)}):y.push(_)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),a.params.effect==="cards"&&c.length<g+S*2&&(y.includes(n)&&y.splice(y.indexOf(n),1),k.includes(n)&&k.splice(k.indexOf(n),1)),C&&k.forEach(M=>{c[M].swiperLoopMoveDOM=!0,v.prepend(c[M]),c[M].swiperLoopMoveDOM=!1}),E&&y.forEach(M=>{c[M].swiperLoopMoveDOM=!0,v.append(c[M]),c[M].swiperLoopMoveDOM=!1}),a.recalcSlides(),d.slidesPerView==="auto"?a.updateSlides():$&&(k.length>0&&C||y.length>0&&E)&&a.slides.forEach((M,_)=>{a.grid.updateSlide(_,M,a.slides)}),d.watchSlidesProgress&&a.updateSlidesOffset(),s){if(k.length>0&&C){if(typeof e>"u"){const M=a.slidesGrid[L],O=a.slidesGrid[L+z]-M;o?a.setTranslate(a.translate-O):(a.slideTo(L+Math.ceil(z),0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-O,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-O))}else if(i){const M=$?k.length/d.grid.rows:k.length;a.slideTo(a.activeIndex+M,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(y.length>0&&E)if(typeof e>"u"){const M=a.slidesGrid[L],O=a.slidesGrid[L-j]-M;o?a.setTranslate(a.translate-O):(a.slideTo(L-j,0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-O,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-O))}else{const M=$?y.length/d.grid.rows:y.length;a.slideTo(a.activeIndex-M,0,!1,!0)}}if(a.allowSlidePrev=p,a.allowSlideNext=u,a.controller&&a.controller.control&&!l){const M={slideRealIndex:e,direction:t,setTranslate:i,activeSlideIndex:n,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(_=>{!_.destroyed&&_.params.loop&&_.loopFix({...M,slideTo:_.params.slidesPerView===d.slidesPerView?s:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...M,slideTo:a.controller.control.params.slidesPerView===d.slidesPerView?s:!1})}a.emit("loopFix")}function Ft(){const e=this,{params:s,slidesEl:t}=e;if(!s.loop||!t||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach(n=>{const r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;i[r]=n}),e.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),i.forEach(n=>{t.append(n)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Nt={loopCreate:Dt,loopFix:Gt,loopDestroy:Ft};function Rt(e){const s=this;if(!s.params.simulateTouch||s.params.watchOverflow&&s.isLocked||s.params.cssMode)return;const t=s.params.touchEventsTarget==="container"?s.el:s.wrapperEl;s.isElement&&(s.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=e?"grabbing":"grab",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1})}function Wt(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Ut={setGrabCursor:Rt,unsetGrabCursor:Wt};function Yt(e,s=this){function t(i){if(!i||i===F()||i===q())return null;i.assignedSlot&&(i=i.assignedSlot);const n=i.closest(e);return!n&&!i.getRootNode?null:n||t(i.getRootNode().host)}return t(s)}function ye(e,s,t){const i=q(),{params:n}=e,r=n.edgeSwipeDetection,l=n.edgeSwipeThreshold;return r&&(t<=l||t>=i.innerWidth-l)?r==="prevent"?(s.preventDefault(),!0):!1:!0}function Xt(e){const s=this,t=F();let i=e;i.originalEvent&&(i=i.originalEvent);const n=s.touchEventsData;if(i.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(n.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){ye(s,i,i.targetTouches[0].pageX);return}const{params:r,touches:l,enabled:o}=s;if(!o||!r.simulateTouch&&i.pointerType==="mouse"||s.animating&&r.preventInteractionOnTransition)return;!s.animating&&r.cssMode&&r.loop&&s.loopFix();let a=i.target;if(r.touchEventsTarget==="wrapper"&&!it(a,s.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||n.isTouched&&n.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",p=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&p&&(a=p[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,v=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(v?Yt(u,a):a.closest(u))){s.allowClick=!0;return}if(r.swipeHandler&&!a.closest(r.swipeHandler))return;l.currentX=i.pageX,l.currentY=i.pageY;const d=l.currentX,h=l.currentY;if(!ye(s,i,d))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=d,l.startY=h,n.touchStartTime=ie(),s.allowClick=!0,s.updateSize(),s.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let x=!0;a.matches(n.focusableElements)&&(x=!1,a.nodeName==="SELECT"&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==a&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!a.matches(n.focusableElements))&&t.activeElement.blur();const b=x&&s.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||b)&&!a.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&s.freeMode&&s.animating&&!r.cssMode&&s.freeMode.onTouchStart(),s.emit("touchStart",i)}function Kt(e){const s=F(),t=this,i=t.touchEventsData,{params:n,touches:r,rtlTranslate:l,enabled:o}=t;if(!o||!n.simulateTouch&&e.pointerType==="mouse")return;let a=e;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(i.touchId!==null||a.pointerId!==i.pointerId))return;let c;if(a.type==="touchmove"){if(c=[...a.changedTouches].find(S=>S.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=a;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",a);return}const p=c.pageX,u=c.pageY;if(a.preventedByNestedSwiper){r.startX=p,r.startY=u;return}if(!t.allowTouchMove){a.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:p,startY:u,currentX:p,currentY:u}),i.touchStartTime=ie());return}if(n.touchReleaseOnEdges&&!n.loop)if(t.isVertical()){if(u<r.startY&&t.translate<=t.maxTranslate()||u>r.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(l&&(p>r.startX&&-t.translate<=t.maxTranslate()||p<r.startX&&-t.translate>=t.minTranslate()))return;if(!l&&(p<r.startX&&t.translate<=t.maxTranslate()||p>r.startX&&t.translate>=t.minTranslate()))return}if(s.activeElement&&s.activeElement.matches(i.focusableElements)&&s.activeElement!==a.target&&a.pointerType!=="mouse"&&s.activeElement.blur(),s.activeElement&&a.target===s.activeElement&&a.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",a),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=p,r.currentY=u;const v=r.currentX-r.startX,d=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(v**2+d**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let S;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:v*v+d*d>=25&&(S=Math.atan2(Math.abs(d),Math.abs(v))*180/Math.PI,i.isScrolling=t.isHorizontal()?S>n.touchAngle:90-S>n.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",a),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling||a.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!n.cssMode&&a.cancelable&&a.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&a.stopPropagation();let h=t.isHorizontal()?v:d,x=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(h=Math.abs(h)*(l?1:-1),x=Math.abs(x)*(l?1:-1)),r.diff=h,h*=n.touchRatio,l&&(h=-h,x=-x);const b=t.touchesDirection;t.swipeDirection=h>0?"prev":"next",t.touchesDirection=x>0?"prev":"next";const f=t.params.loop&&!n.cssMode,m=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(f&&m&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const S=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(S)}i.allowMomentumBounce=!1,n.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",a)}if(new Date().getTime(),n._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&b!==t.touchesDirection&&f&&m&&Math.abs(h)>=1){Object.assign(r,{startX:p,startY:u,currentX:p,currentY:u,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",a),i.isMoved=!0,i.currentTranslate=h+i.startTranslate;let g=!0,w=n.resistanceRatio;if(n.touchReleaseOnEdges&&(w=0),h>0?(f&&m&&i.allowThresholdMove&&i.currentTranslate>(n.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(g=!1,n.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+h)**w))):h<0&&(f&&m&&i.allowThresholdMove&&i.currentTranslate<(n.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(n.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(g=!1,n.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-h)**w))),g&&(a.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),n.threshold>0)if(Math.abs(h)>n.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&t.freeMode||n.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function Qt(e){const s=this,t=s.touchEventsData;let i=e;i.originalEvent&&(i=i.originalEvent);let n;if(i.type==="touchend"||i.type==="touchcancel"){if(n=[...i.changedTouches].find(S=>S.identifier===t.touchId),!n||n.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;n=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(s.browser.isSafari||s.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:l,touches:o,rtlTranslate:a,slidesGrid:c,enabled:p}=s;if(!p||!l.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&s.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&l.grabCursor&&s.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}l.grabCursor&&t.isMoved&&t.isTouched&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!1);const u=ie(),v=u-t.touchStartTime;if(s.allowClick){const S=i.path||i.composedPath&&i.composedPath();s.updateClickedSlide(S&&S[0]||i.target,S),s.emit("tap click",i),v<300&&u-t.lastClickTime<300&&s.emit("doubleTap doubleClick",i)}if(t.lastClickTime=ie(),Ce(()=>{s.destroyed||(s.allowClick=!0)}),!t.isTouched||!t.isMoved||!s.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let d;if(l.followFinger?d=a?s.translate:-s.translate:d=-t.currentTranslate,l.cssMode)return;if(l.freeMode&&l.freeMode.enabled){s.freeMode.onTouchEnd({currentPos:d});return}const h=d>=-s.maxTranslate()&&!s.params.loop;let x=0,b=s.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<l.slidesPerGroupSkip?1:l.slidesPerGroup){const $=S<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;typeof c[S+$]<"u"?(h||d>=c[S]&&d<c[S+$])&&(x=S,b=c[S+$]-c[S]):(h||d>=c[S])&&(x=S,b=c[c.length-1]-c[c.length-2])}let f=null,m=null;l.rewind&&(s.isBeginning?m=l.virtual&&l.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1:s.isEnd&&(f=0));const g=(d-c[x])/b,w=x<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;if(v>l.longSwipesMs){if(!l.longSwipes){s.slideTo(s.activeIndex);return}s.swipeDirection==="next"&&(g>=l.longSwipesRatio?s.slideTo(l.rewind&&s.isEnd?f:x+w):s.slideTo(x)),s.swipeDirection==="prev"&&(g>1-l.longSwipesRatio?s.slideTo(x+w):m!==null&&g<0&&Math.abs(g)>l.longSwipesRatio?s.slideTo(m):s.slideTo(x))}else{if(!l.shortSwipes){s.slideTo(s.activeIndex);return}s.navigation&&(i.target===s.navigation.nextEl||i.target===s.navigation.prevEl)?i.target===s.navigation.nextEl?s.slideTo(x+w):s.slideTo(x):(s.swipeDirection==="next"&&s.slideTo(f!==null?f:x+w),s.swipeDirection==="prev"&&s.slideTo(m!==null?m:x))}}function Se(){const e=this,{params:s,el:t}=e;if(t&&t.offsetWidth===0)return;s.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:n,snapGrid:r}=e,l=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const o=l&&s.loop;if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!o){const a=l?e.virtual.slides:e.slides;e.slideTo(a.length-1,0,!1,!0)}else e.params.loop&&!l?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=n,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function Zt(e){const s=this;s.enabled&&(s.allowClick||(s.params.preventClicks&&e.preventDefault(),s.params.preventClicksPropagation&&s.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Jt(){const e=this,{wrapperEl:s,rtlTranslate:t,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-s.scrollLeft:e.translate=-s.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const r=e.maxTranslate()-e.minTranslate();r===0?n=0:n=(e.translate-e.minTranslate())/r,n!==e.progress&&e.updateProgress(t?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function es(e){const s=this;te(s,e.target),!(s.params.cssMode||s.params.slidesPerView!=="auto"&&!s.params.autoHeight)&&s.update()}function ts(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Oe=(e,s)=>{const t=F(),{params:i,el:n,wrapperEl:r,device:l}=e,o=!!i.nested,a=s==="on"?"addEventListener":"removeEventListener",c=s;!n||typeof n=="string"||(t[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),n[a]("touchstart",e.onTouchStart,{passive:!1}),n[a]("pointerdown",e.onTouchStart,{passive:!1}),t[a]("touchmove",e.onTouchMove,{passive:!1,capture:o}),t[a]("pointermove",e.onTouchMove,{passive:!1,capture:o}),t[a]("touchend",e.onTouchEnd,{passive:!0}),t[a]("pointerup",e.onTouchEnd,{passive:!0}),t[a]("pointercancel",e.onTouchEnd,{passive:!0}),t[a]("touchcancel",e.onTouchEnd,{passive:!0}),t[a]("pointerout",e.onTouchEnd,{passive:!0}),t[a]("pointerleave",e.onTouchEnd,{passive:!0}),t[a]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&n[a]("click",e.onClick,!0),i.cssMode&&r[a]("scroll",e.onScroll),i.updateOnWindowResize?e[c](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",Se,!0):e[c]("observerUpdate",Se,!0),n[a]("load",e.onLoad,{capture:!0}))};function ss(){const e=this,{params:s}=e;e.onTouchStart=Xt.bind(e),e.onTouchMove=Kt.bind(e),e.onTouchEnd=Qt.bind(e),e.onDocumentTouchStart=ts.bind(e),s.cssMode&&(e.onScroll=Jt.bind(e)),e.onClick=Zt.bind(e),e.onLoad=es.bind(e),Oe(e,"on")}function is(){Oe(this,"off")}var ns={attachEvents:ss,detachEvents:is};const Te=(e,s)=>e.grid&&s.grid&&s.grid.rows>1;function rs(){const e=this,{realIndex:s,initialized:t,params:i,el:n}=e,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const l=F(),o=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",a=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?e.el:l.querySelector(i.breakpointsBase),c=e.getBreakpoint(r,o,a);if(!c||e.currentBreakpoint===c)return;const u=(c in r?r[c]:void 0)||e.originalParams,v=Te(e,i),d=Te(e,u),h=e.params.grabCursor,x=u.grabCursor,b=i.enabled;v&&!d?(n.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!v&&d&&(n.classList.add(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&n.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!x?e.unsetGrabCursor():!h&&x&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach($=>{if(typeof u[$]>"u")return;const k=i[$]&&i[$].enabled,y=u[$]&&u[$].enabled;k&&!y&&e[$].disable(),!k&&y&&e[$].enable()});const f=u.direction&&u.direction!==i.direction,m=i.loop&&(u.slidesPerView!==i.slidesPerView||f),g=i.loop;f&&t&&e.changeDirection(),V(e.params,u);const w=e.params.enabled,S=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),b&&!w?e.disable():!b&&w&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),t&&(m?(e.loopDestroy(),e.loopCreate(s),e.updateSlides()):!g&&S?(e.loopCreate(s),e.updateSlides()):g&&!S&&e.loopDestroy()),e.emit("breakpoint",u)}function as(e,s="window",t){if(!e||s==="container"&&!t)return;let i=!1;const n=q(),r=s==="window"?n.innerHeight:t.clientHeight,l=Object.keys(e).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const a=parseFloat(o.substr(1));return{value:r*a,point:o}}return{value:o,point:o}});l.sort((o,a)=>parseInt(o.value,10)-parseInt(a.value,10));for(let o=0;o<l.length;o+=1){const{point:a,value:c}=l[o];s==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(i=a):c<=t.clientWidth&&(i=a)}return i||"max"}var ls={setBreakpoint:rs,getBreakpoint:as};function os(e,s){const t=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(n=>{i[n]&&t.push(s+n)}):typeof i=="string"&&t.push(s+i)}),t}function cs(){const e=this,{classNames:s,params:t,rtl:i,el:n,device:r}=e,l=os(["initialized",t.direction,{"free-mode":e.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);s.push(...l),n.classList.add(...s),e.emitContainerClasses()}function ds(){const e=this,{el:s,classNames:t}=e;!s||typeof s=="string"||(s.classList.remove(...t),e.emitContainerClasses())}var fs={addClasses:cs,removeClasses:ds};function us(){const e=this,{isLocked:s,params:t}=e,{slidesOffsetBefore:i}=t;if(i){const n=e.slides.length-1,r=e.slidesGrid[n]+e.slidesSizesGrid[n]+i*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;t.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),t.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),s&&s!==e.isLocked&&(e.isEnd=!1),s!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var ps={checkOverflow:us},Le={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ms(e,s){return function(i={}){const n=Object.keys(i)[0],r=i[n];if(typeof r!="object"||r===null){V(s,i);return}if(e[n]===!0&&(e[n]={enabled:!0}),n==="navigation"&&e[n]&&e[n].enabled&&!e[n].prevEl&&!e[n].nextEl&&(e[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&e[n]&&e[n].enabled&&!e[n].el&&(e[n].auto=!0),!(n in e&&"enabled"in r)){V(s,i);return}typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),V(s,i)}}const ue={eventsEmitter:ft,update:St,translate:$t,transition:zt,slide:Vt,loop:Nt,grabCursor:Ut,events:ns,breakpoints:ls,checkOverflow:ps,classes:fs},pe={};class A{constructor(...s){let t,i;s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?i=s[0]:[t,i]=s,i||(i={}),i=V({},i),t&&!i.el&&(i.el=t);const n=F();if(i.el&&typeof i.el=="string"&&n.querySelectorAll(i.el).length>1){const a=[];return n.querySelectorAll(i.el).forEach(c=>{const p=V({},i,{el:c});a.push(new A(p))}),a}const r=this;r.__swiper__=!0,r.support=ze(),r.device=_e({userAgent:i.userAgent}),r.browser=je(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(a=>{typeof a=="function"&&r.modules.indexOf(a)<0&&r.modules.push(a)});const l={};r.modules.forEach(a=>{a({params:i,swiper:r,extendParams:ms(i,l),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const o=V({},Le,l);return r.params=V({},o,pe,i),r.originalParams=V({},r.params),r.passedParams=V({},i),r.params&&r.params.on&&Object.keys(r.params.on).forEach(a=>{r.on(a,r.params.on[a])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(s){return this.isHorizontal()?s:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[s]}getSlideIndex(s){const{slidesEl:t,params:i}=this,n=G(t,`.${i.slideClass}, swiper-slide`),r=ae(n[0]);return ae(s)-r}getSlideIndexByData(s){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===s))}getSlideIndexWhenGrid(s){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?s=Math.floor(s/this.params.grid.rows):this.params.grid.fill==="row"&&(s=s%Math.ceil(this.slides.length/this.params.grid.rows))),s}recalcSlides(){const s=this,{slidesEl:t,params:i}=s;s.slides=G(t,`.${i.slideClass}, swiper-slide`)}enable(){const s=this;s.enabled||(s.enabled=!0,s.params.grabCursor&&s.setGrabCursor(),s.emit("enable"))}disable(){const s=this;s.enabled&&(s.enabled=!1,s.params.grabCursor&&s.unsetGrabCursor(),s.emit("disable"))}setProgress(s,t){const i=this;s=Math.min(Math.max(s,0),1);const n=i.minTranslate(),l=(i.maxTranslate()-n)*s+n;i.translateTo(l,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const s=this;if(!s.params._emitClasses||!s.el)return;const t=s.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(s.params.containerModifierClass)===0);s.emit("_containerClasses",t.join(" "))}getSlideClasses(s){const t=this;return t.destroyed?"":s.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const s=this;if(!s.params._emitClasses||!s.el)return;const t=[];s.slides.forEach(i=>{const n=s.getSlideClasses(i);t.push({slideEl:i,classNames:n}),s.emit("_slideClass",i,n)}),s.emit("_slideClasses",t)}slidesPerViewDynamic(s="current",t=!1){const i=this,{params:n,slides:r,slidesGrid:l,slidesSizesGrid:o,size:a,activeIndex:c}=i;let p=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,v;for(let d=c+1;d<r.length;d+=1)r[d]&&!v&&(u+=Math.ceil(r[d].swiperSlideSize),p+=1,u>a&&(v=!0));for(let d=c-1;d>=0;d-=1)r[d]&&!v&&(u+=r[d].swiperSlideSize,p+=1,u>a&&(v=!0))}else if(s==="current")for(let u=c+1;u<r.length;u+=1)(t?l[u]+o[u]-l[c]<a:l[u]-l[c]<a)&&(p+=1);else for(let u=c-1;u>=0;u-=1)l[c]-l[u]<a&&(p+=1);return p}update(){const s=this;if(!s||s.destroyed)return;const{snapGrid:t,params:i}=s;i.breakpoints&&s.setBreakpoint(),[...s.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&te(s,l)}),s.updateSize(),s.updateSlides(),s.updateProgress(),s.updateSlidesClasses();function n(){const l=s.rtlTranslate?s.translate*-1:s.translate,o=Math.min(Math.max(l,s.maxTranslate()),s.minTranslate());s.setTranslate(o),s.updateActiveIndex(),s.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)n(),i.autoHeight&&s.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&s.isEnd&&!i.centeredSlides){const l=s.virtual&&i.virtual.enabled?s.virtual.slides:s.slides;r=s.slideTo(l.length-1,0,!1,!0)}else r=s.slideTo(s.activeIndex,0,!1,!0);r||n()}i.watchOverflow&&t!==s.snapGrid&&s.checkOverflow(),s.emit("update")}changeDirection(s,t=!0){const i=this,n=i.params.direction;return s||(s=n==="horizontal"?"vertical":"horizontal"),s===n||s!=="horizontal"&&s!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${n}`),i.el.classList.add(`${i.params.containerModifierClass}${s}`),i.emitContainerClasses(),i.params.direction=s,i.slides.forEach(r=>{s==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(s){const t=this;t.rtl&&s==="rtl"||!t.rtl&&s==="ltr"||(t.rtl=s==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(s){const t=this;if(t.mounted)return!0;let i=s||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let l=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(n()):G(i,n())[0];return!l&&t.params.createElements&&(l=re("div",t.params.wrapperClass),i.append(l),G(i,`.${t.params.slideClass}`).forEach(o=>{l.append(o)})),Object.assign(t,{el:i,wrapperEl:l,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:l,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||W(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||W(i,"direction")==="rtl"),wrongRTL:W(l,"display")==="-webkit-box"}),!0}init(s){const t=this;if(t.initialized||t.mount(s)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?te(t,r):r.addEventListener("load",l=>{te(t,l.target)})}),ge(t),t.initialized=!0,ge(t),t.emit("init"),t.emit("afterInit"),t}destroy(s=!0,t=!0){const i=this,{params:n,el:r,wrapperEl:l,slides:o}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),l&&l.removeAttribute("style"),o&&o.length&&o.forEach(a=>{a.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(a=>{i.off(a)}),s!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),Ze(i)),i.destroyed=!0),null}static extendDefaults(s){V(pe,s)}static get extendedDefaults(){return pe}static get defaults(){return Le}static installModule(s){A.prototype.__modules__||(A.prototype.__modules__=[]);const t=A.prototype.__modules__;typeof s=="function"&&t.indexOf(s)<0&&t.push(s)}static use(s){return Array.isArray(s)?(s.forEach(t=>A.installModule(t)),A):(A.installModule(s),A)}}Object.keys(ue).forEach(e=>{Object.keys(ue[e]).forEach(s=>{A.prototype[s]=ue[e][s]})});A.use([ct,dt]);function He(e,s,t,i){return e.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&t.auto===!0){let r=G(e.el,`.${i[n]}`)[0];r||(r=re("div",i[n]),r.className=i[n],e.el.append(r)),t[n]=r,s[n]=r}}),t}const Ee='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function U({swiper:e,extendParams:s,on:t,emit:i}){s({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Ee};function n(d){let h;return d&&typeof d=="string"&&e.isElement&&(h=e.el.querySelector(d)||e.hostEl.querySelector(d),h)?h:(d&&(typeof d=="string"&&(h=[...document.querySelectorAll(d)]),e.params.uniqueNavElements&&typeof d=="string"&&h&&h.length>1&&e.el.querySelectorAll(d).length===1?h=e.el.querySelector(d):h&&h.length===1&&(h=h[0])),d&&!h?d:h)}function r(d,h){const x=e.params.navigation;d=H(d),d.forEach(b=>{b&&(b.classList[h?"add":"remove"](...x.disabledClass.split(" ")),b.tagName==="BUTTON"&&(b.disabled=h),e.params.watchOverflow&&e.enabled&&b.classList[e.isLocked?"add":"remove"](x.lockClass))})}function l(){const{nextEl:d,prevEl:h}=e.navigation;if(e.params.loop){r(h,!1),r(d,!1);return}r(h,e.isBeginning&&!e.params.rewind),r(d,e.isEnd&&!e.params.rewind)}function o(d){d.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function a(d){d.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function c(){const d=e.params.navigation;if(e.params.navigation=He(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(d.nextEl||d.prevEl))return;let h=n(d.nextEl),x=n(d.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:x}),h=H(h),x=H(x);const b=(f,m)=>{if(f){if(d.addIcons&&f.matches(".swiper-button-next,.swiper-button-prev")&&!f.querySelector("svg")){const g=document.createElement("div");he(g,Ee),f.appendChild(g.querySelector("svg")),g.remove()}f.addEventListener("click",m==="next"?a:o)}!e.enabled&&f&&f.classList.add(...d.lockClass.split(" "))};h.forEach(f=>b(f,"next")),x.forEach(f=>b(f,"prev"))}function p(){let{nextEl:d,prevEl:h}=e.navigation;d=H(d),h=H(h);const x=(b,f)=>{b.removeEventListener("click",f==="next"?a:o),b.classList.remove(...e.params.navigation.disabledClass.split(" "))};d.forEach(b=>x(b,"next")),h.forEach(b=>x(b,"prev"))}t("init",()=>{e.params.navigation.enabled===!1?v():(c(),l())}),t("toEdge fromEdge lock unlock",()=>{l()}),t("destroy",()=>{p()}),t("enable disable",()=>{let{nextEl:d,prevEl:h}=e.navigation;if(d=H(d),h=H(h),e.enabled){l();return}[...d,...h].filter(x=>!!x).forEach(x=>x.classList.add(e.params.navigation.lockClass))}),t("click",(d,h)=>{let{nextEl:x,prevEl:b}=e.navigation;x=H(x),b=H(b);const f=h.target;let m=b.includes(f)||x.includes(f);if(e.isElement&&!m){const g=h.path||h.composedPath&&h.composedPath();g&&(m=g.find(w=>x.includes(w)||b.includes(w)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===f||e.pagination.el.contains(f)))return;let g;x.length?g=x[0].classList.contains(e.params.navigation.hiddenClass):b.length&&(g=b[0].classList.contains(e.params.navigation.hiddenClass)),i(g===!0?"navigationShow":"navigationHide"),[...x,...b].filter(w=>!!w).forEach(w=>w.classList.toggle(e.params.navigation.hiddenClass))}});const u=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),l()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(e.navigation,{enable:u,disable:v,update:l,init:c,destroy:p})}function Q(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function hs({swiper:e,extendParams:s,on:t,emit:i}){const n="swiper-pagination";s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let r,l=0;function o(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function a(f,m){const{bulletActiveClass:g}=e.params.pagination;f&&(f=f[`${m==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${g}-${m}`),f=f[`${m==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${g}-${m}-${m}`)))}function c(f,m,g){if(f=f%g,m=m%g,m===f+1)return"next";if(m===f-1)return"previous"}function p(f){const m=f.target.closest(Q(e.params.pagination.bulletClass));if(!m)return;f.preventDefault();const g=ae(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===g)return;const w=c(e.realIndex,g,e.slides.length);w==="next"?e.slideNext():w==="previous"?e.slidePrev():e.slideToLoop(g)}else e.slideTo(g)}function u(){const f=e.rtl,m=e.params.pagination;if(o())return;let g=e.pagination.el;g=H(g);let w,S;const $=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil($/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(w=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,w=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const y=e.pagination.bullets;let I,T,L;if(m.dynamicBullets&&(r=me(y[0],e.isHorizontal()?"width":"height"),g.forEach(E=>{E.style[e.isHorizontal()?"width":"height"]=`${r*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&S!==void 0&&(l+=w-(S||0),l>m.dynamicMainBullets-1?l=m.dynamicMainBullets-1:l<0&&(l=0)),I=Math.max(w-l,0),T=I+(Math.min(y.length,m.dynamicMainBullets)-1),L=(T+I)/2),y.forEach(E=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(z=>`${m.bulletActiveClass}${z}`)].map(z=>typeof z=="string"&&z.includes(" ")?z.split(" "):z).flat();E.classList.remove(...C)}),g.length>1)y.forEach(E=>{const C=ae(E);C===w?E.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&E.setAttribute("part","bullet"),m.dynamicBullets&&(C>=I&&C<=T&&E.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),C===I&&a(E,"prev"),C===T&&a(E,"next"))});else{const E=y[w];if(E&&E.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&y.forEach((C,z)=>{C.setAttribute("part",z===w?"bullet-active":"bullet")}),m.dynamicBullets){const C=y[I],z=y[T];for(let j=I;j<=T;j+=1)y[j]&&y[j].classList.add(...`${m.bulletActiveClass}-main`.split(" "));a(C,"prev"),a(z,"next")}}if(m.dynamicBullets){const E=Math.min(y.length,m.dynamicMainBullets+4),C=(r*E-r)/2-L*r,z=f?"right":"left";y.forEach(j=>{j.style[e.isHorizontal()?z:"top"]=`${C}px`})}}g.forEach((y,I)=>{if(m.type==="fraction"&&(y.querySelectorAll(Q(m.currentClass)).forEach(T=>{T.textContent=m.formatFractionCurrent(w+1)}),y.querySelectorAll(Q(m.totalClass)).forEach(T=>{T.textContent=m.formatFractionTotal(k)})),m.type==="progressbar"){let T;m.progressbarOpposite?T=e.isHorizontal()?"vertical":"horizontal":T=e.isHorizontal()?"horizontal":"vertical";const L=(w+1)/k;let E=1,C=1;T==="horizontal"?E=L:C=L,y.querySelectorAll(Q(m.progressbarFillClass)).forEach(z=>{z.style.transform=`translate3d(0,0,0) scaleX(${E}) scaleY(${C})`,z.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(he(y,m.renderCustom(e,w+1,k)),I===0&&i("paginationRender",y)):(I===0&&i("paginationRender",y),i("paginationUpdate",y)),e.params.watchOverflow&&e.enabled&&y.classList[e.isLocked?"add":"remove"](m.lockClass)})}function v(){const f=e.params.pagination;if(o())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let g=e.pagination.el;g=H(g);let w="";if(f.type==="bullets"){let S=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>m&&(S=m);for(let $=0;$<S;$+=1)f.renderBullet?w+=f.renderBullet.call(e,$,f.bulletClass):w+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?w=f.renderFraction.call(e,f.currentClass,f.totalClass):w=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?w=f.renderProgressbar.call(e,f.progressbarFillClass):w=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],g.forEach(S=>{f.type!=="custom"&&he(S,w||""),f.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(Q(f.bulletClass)))}),f.type!=="custom"&&i("paginationRender",g[0])}function d(){e.params.pagination=He(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let m;typeof f.el=="string"&&e.isElement&&(m=e.el.querySelector(f.el)),!m&&typeof f.el=="string"&&(m=[...document.querySelectorAll(f.el)]),m||(m=f.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(f.el)],m.length>1&&(m=m.find(g=>Ie(g,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=H(m),m.forEach(g=>{f.type==="bullets"&&f.clickable&&g.classList.add(...(f.clickableClass||"").split(" ")),g.classList.add(f.modifierClass+f.type),g.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(g.classList.add(`${f.modifierClass}${f.type}-dynamic`),l=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&g.classList.add(f.progressbarOppositeClass),f.clickable&&g.addEventListener("click",p),e.enabled||g.classList.add(f.lockClass)}))}function h(){const f=e.params.pagination;if(o())return;let m=e.pagination.el;m&&(m=H(m),m.forEach(g=>{g.classList.remove(f.hiddenClass),g.classList.remove(f.modifierClass+f.type),g.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(g.classList.remove(...(f.clickableClass||"").split(" ")),g.removeEventListener("click",p))})),e.pagination.bullets&&e.pagination.bullets.forEach(g=>g.classList.remove(...f.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:m}=e.pagination;m=H(m),m.forEach(g=>{g.classList.remove(f.horizontalClass,f.verticalClass),g.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),t("init",()=>{e.params.pagination.enabled===!1?b():(d(),v(),u())}),t("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),t("snapIndexChange",()=>{u()}),t("snapGridLengthChange",()=>{v(),u()}),t("destroy",()=>{h()}),t("enable disable",()=>{let{el:f}=e.pagination;f&&(f=H(f),f.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),t("lock unlock",()=>{u()}),t("click",(f,m)=>{const g=m.target,w=H(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&w&&w.length>0&&!g.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&g===e.navigation.nextEl||e.navigation.prevEl&&g===e.navigation.prevEl))return;const S=w[0].classList.contains(e.params.pagination.hiddenClass);i(S===!0?"paginationShow":"paginationHide"),w.forEach($=>$.classList.toggle(e.params.pagination.hiddenClass))}});const x=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=H(f),f.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),d(),v(),u()},b=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=H(f),f.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:x,disable:b,render:v,update:u,init:d,destroy:h})}function gs({swiper:e,extendParams:s,on:t,emit:i,params:n}){e.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,l,o=n&&n.autoplay?n.autoplay.delay:3e3,a=n&&n.autoplay?n.autoplay.delay:3e3,c,p=new Date().getTime(),u,v,d,h,x,b;function f(P){!e||e.destroyed||!e.wrapperEl||P.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",f),!(b||P.detail&&P.detail.bySwiperTouchMove)&&I())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(a=c,u=!1);const P=e.autoplay.paused?c:p+a-new Date().getTime();e.autoplay.timeLeft=P,i("autoplayTimeLeft",P,P/o),l=requestAnimationFrame(()=>{m()})},g=()=>{let P;return e.virtual&&e.params.virtual.enabled?P=e.slides.find(_=>_.classList.contains("swiper-slide-active")):P=e.slides[e.activeIndex],P?parseInt(P.getAttribute("data-swiper-autoplay"),10):void 0},w=()=>{let P=e.params.autoplay.delay;const M=g();return!Number.isNaN(M)&&M>0&&(P=M),P},S=P=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(l),m();let M=P;typeof M>"u"&&(M=w(),o=M,a=M),c=M;const _=e.params.speed,O=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(_,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,_,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(_,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,_,!0,!0),i("autoplay")),e.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{S()})))};return M>0?(clearTimeout(r),r=setTimeout(()=>{O()},M)):requestAnimationFrame(()=>{O()}),M},$=()=>{p=new Date().getTime(),e.autoplay.running=!0,S(),i("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(l),i("autoplayStop")},y=(P,M)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(r),P||(x=!0);const _=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",f):I()};if(e.autoplay.paused=!0,M){_();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-p),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),_())},I=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),x?(x=!1,S(c)):S(),e.autoplay.paused=!1,i("autoplayResume"))},T=()=>{if(e.destroyed||!e.autoplay.running)return;const P=F();P.visibilityState==="hidden"&&(x=!0,y(!0)),P.visibilityState==="visible"&&I()},L=P=>{P.pointerType==="mouse"&&(x=!0,b=!0,!(e.animating||e.autoplay.paused)&&y(!0))},E=P=>{P.pointerType==="mouse"&&(b=!1,e.autoplay.paused&&I())},C=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",L),e.el.addEventListener("pointerleave",E))},z=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",L),e.el.removeEventListener("pointerleave",E))},j=()=>{F().addEventListener("visibilitychange",T)},D=()=>{F().removeEventListener("visibilitychange",T)};t("init",()=>{e.params.autoplay.enabled&&(C(),j(),$())}),t("destroy",()=>{z(),D(),e.autoplay.running&&k()}),t("_freeModeStaticRelease",()=>{(d||x)&&I()}),t("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():y(!0,!0)}),t("beforeTransitionStart",(P,M,_)=>{e.destroyed||!e.autoplay.running||(_||!e.params.autoplay.disableOnInteraction?y(!0,!0):k())}),t("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}v=!0,d=!1,x=!1,h=setTimeout(()=>{x=!0,d=!0,y(!0)},200)}}),t("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(h),clearTimeout(r),e.params.autoplay.disableOnInteraction){d=!1,v=!1;return}d&&e.params.cssMode&&I(),d=!1,v=!1}}),t("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=w(),o=w())}),Object.assign(e.autoplay,{start:$,stop:k,pause:y,resume:I})}async function vs(){try{const e=await B("story.json");if(!e.data||!e.data.posts){console.error("Story data not found");return}const t=e.data.posts.slice(0,18).map(i=>{const n=i.circle_cover||i.media?.[0]?.cover_medium||"",r=i.title||"";return`
        <div class="swiper-slide">
          <a href="${`https://www.digikala.com/magnet/posts/${i.id}/`}" target="_blank">
            <div class="flex flex-col justify-center items-center p-2 gap-2 w-23">
              <div class="rounded-full overflow-hidden w-22 h-22 bg-linear-to-b from-[#95489c] to-[#c84198] p-0.5">
                <div class="bg-white rounded-full w-full h-full p-1">
                  <img src="${n}" alt="${r}" class="rounded-full" />
                </div>
              </div>
              <span class="font-Iran text-xs text-[#574a6d] line-clamp-2 text-center w-full">${r}</span>
            </div>
          </a>
        </div>
      `});document.querySelector(".story-wrapper").innerHTML=t.join(""),new A(".Story",{modules:[U],slidesPerView:10.5,spaceBetween:0,navigation:{nextEl:".story-next",prevEl:".story-prev"}})}catch(e){console.error("Error loading stories:",e)}}const xs={mobile:`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M7 1h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4a3 3 0 013-3zm0 2a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7zm5 17a2 2 0 100-4 2 2 0 000 4z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,laptop:`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v8.723l2.858 4.762A1 1 0 0122 20H2a1 1 0 01-.857-1.515L4 13.723V5zm2 8h12V6H6v7zm-.434 2l-1.8 3h16.468l-1.8-3H5.566z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"digital-products":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M7 3h10c1.56 0 2.898 1.066 2.994 2.5l.006.167v2.869a3.5 3.5 0 011.001 6.627L21 18a2 2 0 01-2 2v1h-2v-1H7v1H5v-1a2 2 0 01-2-2v-2.837a3.5 3.5 0 011-6.628V5.667c0-1.461 1.28-2.581 2.821-2.662L7 3zm1 11h8v-2l.005-.192A3.501 3.501 0 0118 8.837v-3.17c0-.3-.35-.614-.867-.661L17 5H7c-.543 0-.936.292-.993.592L6 5.667l.001 3.17A3.5 3.5 0 018 12v2zm-5-2a1.5 1.5 0 013 0v3a1 1 0 001 1h10a1 1 0 001-1v-3l.007-.145A1.5 1.5 0 0121 12l-.007.145A1.5 1.5 0 0119.5 13.5H19V18H5v-4.5h-.5A1.5 1.5 0 013 12z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"home-kitchen":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
    >
      <path
        d="M5.738 5.989v2.99h-1.5V5.99h1.5zM5.738 12.968v2.991h-1.5v-2.991h1.5zM18.806 20.793a.877.877 0 11-1.754 0 .877.877 0 011.754 0z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M15.571 7.711V1.95a.95.95 0 00-.95-.95H1.95a.95.95 0 00-.95.95V24h22v-3.414c0-.926-.42-1.753-1.078-2.304l.89-10.57h-3.72v-1h-2.5v1h-1.02zM3 3v7.253h7.13V9.71a2 2 0 012-2h1.441V3H3zm9.684 19v-1.414c0-1.001.49-1.888 1.243-2.433l-.212-2.516h-1.584a2 2 0 01-2-2v-1.884H3V22h9.684zm.532-12.291H12.13v3.928h1.416l-.331-3.928zm2.468 9.877H20a1 1 0 011 1V22h-6.316v-1.414a1 1 0 011-1zm-.46-9.875l.662 7.867h1.294v-.869h-.69v-1.5h2.875v1.5h-.685v.869h1.294l.663-7.867h-5.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"home-appliances":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
    >
      <path
        d="M5.738 5.989v2.99h-1.5V5.99h1.5zM5.738 12.968v2.991h-1.5v-2.991h1.5zM18.806 20.793a.877.877 0 11-1.754 0 .877.877 0 011.754 0z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M15.571 7.711V1.95a.95.95 0 00-.95-.95H1.95a.95.95 0 00-.95.95V24h22v-3.414c0-.926-.42-1.753-1.078-2.304l.89-10.57h-3.72v-1h-2.5v1h-1.02zM3 3v7.253h7.13V9.71a2 2 0 012-2h1.441V3H3zm9.684 19v-1.414c0-1.001.49-1.888 1.243-2.433l-.212-2.516h-1.584a2 2 0 01-2-2v-1.884H3V22h9.684zm.532-12.291H12.13v3.928h1.416l-.331-3.928zm2.468 9.877H20a1 1 0 011 1V22h-6.316v-1.414a1 1 0 011-1zm-.46-9.875l.662 7.867h1.294v-.869h-.69v-1.5h2.875v1.5h-.685v.869h1.294l.663-7.867h-5.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"beauty-health":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M16.05 3.25c3.277 0 5.95 2.568 5.95 5.757a5.622 5.622 0 01-1.32 3.616c-.63.755-3.262 3.505-7.964 8.325a1 1 0 01-1.434-.002c-4.639-4.784-7.247-7.506-7.87-8.215A5.627 5.627 0 012 9.007C2 5.818 4.673 3.25 7.95 3.25c1.53 0 2.967.564 4.05 1.539a6.048 6.048 0 014.05-1.539zm3.095 8.091c.552-.66.855-1.475.855-2.334 0-2.066-1.76-3.757-3.95-3.757-1.312 0-2.51.611-3.243 1.612a1 1 0 01-1.614 0C10.46 5.861 9.261 5.25 7.95 5.25 5.76 5.25 4 6.941 4 9.007c0 .891.326 1.733.916 2.405.557.635 2.932 3.117 7.086 7.403 4.194-4.304 6.594-6.817 7.143-7.474zm-10.352.452a1 1 0 011.414 0L12 13.586l4.793-4.793a1 1 0 111.414 1.414l-5.5 5.5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,fashion:`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M4.317 12.449L6 11.887V20a1 1 0 001 1h10a1 1 0 001-1v-8.113l1.684.562a1 1 0 001.23-.543l2-4.5a1 1 0 00-.542-1.334l-5-2A1 1 0 0017 4h-2a1 1 0 00-.993.883l-.011.273C13.93 6.234 13.196 7 12 7c-1.253 0-2-.84-2-2a1 1 0 00-1-1H7a1 1 0 00-.371.072l-5 2a1 1 0 00-.543 1.334l2 4.5a1 1 0 001.23.543zm-.981-4.906L7.193 6h.92l.05.19C8.622 7.821 10.038 9 12 9c2.037 0 3.485-1.271 3.887-3h.92l3.858 1.543-1.21 2.721-2.138-.713A1 1 0 0016 10.5V19H8v-8.5a1 1 0 00-1.316-.949l-2.139.713-1.21-2.721z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"gold-silver":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.785 0c.557 0 1.009.448 1.009 1v3l4.411 3.33c.552.417.85 1.086.787 1.772l-.232 2.523c-.423 4.614-3.123 8.721-7.21 10.971l-2.068 1.139a1 1 0 01-.964 0L9.45 22.596a13.995 13.995 0 01-7.21-10.971l-.232-2.523a1.99 1.99 0 01.787-1.772L7.206 4V1c0-.552.452-1 1.009-1zm2.697 7.788a7.062 7.062 0 01-5.323 4.118l1.768 2.559c.294.426.294.987 0 1.413l-1.886 2.729a1.268 1.268 0 01-2.082 0l-1.886-2.729a1.242 1.242 0 010-1.413l1.768-2.559a7.06 7.06 0 01-5.323-4.118l-1.5 1.133.232 2.523a11.996 11.996 0 006.18 9.404l1.088.599a1 1 0 00.964 0l1.088-.599a11.996 11.996 0 006.18-9.404l.231-2.523zM12 13.77l-.969 1.402.969 1.401.969-1.401L12 13.77zM14.775 2H9.224v2.493a1 1 0 01-.398.798L7.191 6.525C7.841 8.541 9.749 10 11.999 10s4.157-1.459 4.808-3.475l-1.635-1.234a1.002 1.002 0 01-.398-.798V2z"
      ></path>
    </svg>
  `,automotive:`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <path
        d="M3.179 9.91c.073-.393.497-.638.91-.493.8.282 1.827.728 2.27 1.006.407.256.4.372.387.64l-.003.05c-.003.075-.072.137-.156.137H3.382c-.236 0-.415-.191-.377-.401l.174-.938zM13.912 9.417c.412-.145.837.1.91.494l.173.938c.039.21-.14.401-.377.401h-3.205c-.084 0-.152-.062-.156-.138l-.002-.049c-.014-.268-.02-.384.386-.64.443-.278 1.47-.724 2.271-1.006z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M3.043 4.116A2.25 2.25 0 014.987 3h8.027c.8 0 1.54.425 1.943 1.116l1.475 2.529.54-.216a.75.75 0 01.557 1.392l-.484.194c.136.47.205.958.205 1.452V15a.75.75 0 01-.75.75h-.75A.75.75 0 0115 15v-1.51c-3.96.825-8.044.828-12 .011V15a.75.75 0 01-.75.75H1.5A.75.75 0 01.75 15v-2.625c0-.027.001-.052.003-.076a.945.945 0 01-.003-.072v-2.76c0-.494.07-.982.205-1.452L.472 7.82a.75.75 0 11.557-1.392l.54.216 1.474-2.529zm-.435 4.509h13.046c.064.275.096.557.096.842v2.316l-.275.065a28.06 28.06 0 01-13.225-.055V9.467c0-.285.033-.567.096-.842h.262zM4.987 4.5a.75.75 0 00-.648.372L3.025 7.125h11.95l-1.313-2.253a.75.75 0 00-.648-.372H4.987z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"books-art":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M6.293 6.793L5 8.086 3.414 6.5 6.5 3.414 11.086 8 8 11.086 6.414 9.5l1.293-1.293a1 1 0 00-1.414-1.414zm-5 .414L6.586 12.5l-3.28 3.28a.994.994 0 00-.275.474l-1.496 5.483a1 1 0 001.228 1.228l5.483-1.496a.993.993 0 00.474-.274l3.28-3.28 5.293 5.292a1 1 0 001.414 0l4.5-4.5a1 1 0 000-1.414L17.914 12l3.879-3.879a3 3 0 000-4.242L20.62 2.707a3 3 0 00-4.242 0L12.5 6.586 7.207 1.293a1 1 0 00-1.414 0l-4.5 4.5a1 1 0 000 1.414zM6.074 19.99l-1.563-1.563-.586 2.149 2.15-.586zM15.5 6.414L18.086 9 8 19.086 5.414 16.5 15.5 6.414zm4 1.172L16.914 5l.879-.879a1 1 0 011.414 0l1.172 1.172a1 1 0 010 1.414l-.879.879zm-4.5 10.5L13.414 16.5l3.086-3.086L21.086 18 18 21.086 16.414 19.5l1.293-1.293a1 1 0 00-1.414-1.414L15 18.086z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"tools-equipment":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M21.207 16.793l-6.833-6.834A6.502 6.502 0 004.975 2.42 1 1 0 004.755 4l3.036 3.036a.5.5 0 11-.707.707L4.05 4.708a1 1 0 00-1.58.219 6.502 6.502 0 007.464 9.42l6.86 6.86a3.121 3.121 0 104.414-4.414zm-11.38-4.52A4.5 4.5 0 013.73 7.217l1.94 1.94a2.5 2.5 0 003.536-3.536l-1.94-1.94a4.503 4.503 0 015.032 6.152 1 1 0 00.215 1.093l7.28 7.28a1.121 1.121 0 01-1.586 1.586l-7.3-7.3a1 1 0 00-1.08-.22z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"medical-health":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.999 4.017a2 2 0 012 2v14.984a2 2 0 01-2 2H3.001a2 2 0 01-2-2V9.273a2 2 0 012-2H9.84V6.017a2 2 0 012-2h9.159zm-9.408 5.256h-8.59v11.728h8.59V9.273zm9.408-3.256H11.84v1.271a2 2 0 011.751 1.985v3.229h1.932v-2.25h1.5v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-1.932v7h7.408V6.018zm-10.66 12.219v1.5H4.252v-1.5h6.087zm-1.044-7.93c.69 0 1.25.56 1.25 1.25v4.264c0 .69-.56 1.25-1.25 1.25H5.297c-.69 0-1.25-.56-1.25-1.25v-4.264c0-.69.56-1.25 1.25-1.25zm-.25 1.5H5.547v3.764h3.498v-3.764zM20.919.999v2h-9v-2h9z"
      ></path>
    </svg>
  `,"sports-travel":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M6.293 6.793L5 8.086 3.414 6.5 6.5 3.414 11.086 8 8 11.086 6.414 9.5l1.293-1.293a1 1 0 00-1.414-1.414zm-5 .414L6.586 12.5l-3.28 3.28a.994.994 0 00-.275.474l-1.496 5.483a1 1 0 001.228 1.228l5.483-1.496a.993.993 0 00.474-.274l3.28-3.28 5.293 5.292a1 1 0 001.414 0l4.5-4.5a1 1 0 000-1.414L17.914 12l3.879-3.879a3 3 0 000-4.242L20.62 2.707a3 3 0 00-4.242 0L12.5 6.586 7.207 1.293a1 1 0 00-1.414 0l-4.5 4.5a1 1 0 000 1.414zM6.074 19.99l-1.563-1.563-.586 2.149 2.15-.586zM15.5 6.414L18.086 9 8 19.086 5.414 16.5 15.5 6.414zm4 1.172L16.914 5l.879-.879a1 1 0 011.414 0l1.172 1.172a1 1 0 010 1.414l-.879.879zm-4.5 10.5L13.414 16.5l3.086-3.086L21.086 18 18 21.086 16.414 19.5l1.293-1.293a1 1 0 00-1.414-1.414L15 18.086z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"gift-card":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M12 5.197l1.168-1.752a1 1 0 111.664 1.11L13.202 7l7.63 11.445c.022.034.042.068.06.103.628.148 1.255.311 1.883.49a1 1 0 11-.55 1.924C18.814 19.986 15.406 19.5 12 19.5c-3.406 0-6.814.487-10.225 1.462a1 1 0 01-.55-1.924c.628-.179 1.255-.342 1.883-.49.018-.035.038-.07.06-.103L10.798 7l-1.63-2.445a1 1 0 111.664-1.11L12 5.197zm-6.13 12.8c.897-.145 1.794-.259 2.69-.34.024-.064.054-.127.092-.187l2.5-4a1 1 0 011.696 0l2.5 4c.038.06.068.123.091.187.898.081 1.794.195 2.691.34L12 8.804l-6.13 9.195zm7.147-.483L12 15.887l-1.017 1.627a37.471 37.471 0 012.034 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,supermarket:`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M18 4a2 2 0 00-2-2h-3a2 2 0 00-2 2v1.535a4.007 4.007 0 00-1.874 2.467A5.108 5.108 0 009 8l-.217.005A5 5 0 004 13H3a1 1 0 00-.99 1.141l1 7A1 1 0 004 22h16a1 1 0 00.99-.859l1-7A1 1 0 0021 13h-1V9l-.007-.232a4 4 0 00-1.992-3.232L18 4zM4.867 20l-.714-5h15.694l-.714 5H4.867zM16 7h-3a2 2 0 00-1.924 1.45 5.003 5.003 0 012.919 4.318L14 13h4V9a2 2 0 00-1.85-1.995L16 7zm-9.995 5.824A3 3 0 0112 13H6l.005-.176zM16 4h-3v1h3V4zm-1 14v-2H9v2h6z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"kids-baby-toys":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <path d="M11.25 10.5H15V12h-3.75v-1.5z"></path>
      <path
        fill-rule="evenodd"
        d="M3 3h12a2.25 2.25 0 012.25 2.25v7.5A2.25 2.25 0 0115 15H3a2.25 2.25 0 01-2.25-2.25v-7.5A2.25 2.25 0 013 3zm0 1.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h3v-2.69l-.97.97-1.06-1.06.988-.989A2.25 2.25 0 116 5.378V4.5H3zm3 3.75V7.5a.75.75 0 10-.75.75H6zm1.5-2.872V4.5H15a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H7.5v-2.69l.97.97 1.06-1.06-.988-.989A2.25 2.25 0 107.5 5.378zm0 2.872h.75a.75.75 0 10-.75-.75v.75z"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,"local-products":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.5 1v3l-3 3V4l3-3zM11.5 9v2.984L8.5 9v3l3 3v8.005L7 23l-.5-1C8 22 9 21.395 9 20c0-1.6-1.12-2.72-2.464-4.064C4.52 13.92 2 11.4 2 6h6.5l3 3zM12.5 9v2.984L15.5 9v3l-3 3v8.005L17 23l.5-1C16 22 15 20.895 15 19.5c0-1.6 1.12-2.64 2.464-3.888C19.48 13.74 22 11.4 22 6h-6.5l-3 3zM8.5 4V1l3 3v3l-3-3z"
      ></path>
    </svg>
  `,"pet-shop":`
    <svg
      class="w-4.5 h-4.5 fill-current text-[#574a6d] group-hover/parent:text-[#ed1944]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 22c-2.267 0-4.414-.855-6.09-2.356C4.622 18.49 4 17.023 4 15.5c0-2.07 1.336-3.788 3.521-4.744-.323-.493-.521-1.084-.521-1.756C7 7.343 8.343 6 10 6c.768 0 1.468.289 2 .764A2.986 2.986 0 0114 6c1.657 0 3 1.343 3 3 0 .672-.198 1.263-.521 1.756C18.664 11.712 20 13.43 20 15.5c0 1.523-.622 2.99-1.91 4.144A8.93 8.93 0 0112 22zM8 4.5C8 3.12 8.895 2 10 2s2 .895 2 2-.895 2-2 2-2-.895-2-2zm4 0c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2zM4.5 9C3.672 9 3 8.104 3 7s.672-2 1.5-2S6 5.896 6 7s-.672 2-1.5 2zM19.5 9C18.672 9 18 8.104 18 7s.672-2 1.5-2S21 5.896 21 7s-.672 2-1.5 2z"
      ></path>
    </svg>
  `},bs=await N();async function ws(){try{let t=function(i){s.forEach(o=>{const a=o.querySelector(".pain-subject"),c=o.querySelector(".menu-title"),p=o.querySelector(".menu");a.classList.remove("block"),a.classList.add("hidden"),c.classList.remove("text-[#ed1944]"),c.classList.add("text-[#574a6d]"),p.classList.remove("bg-white","!bg-white"),p.classList.add("bg-[#f0f0f1]")});const n=i.querySelector(".pain-subject"),r=i.querySelector(".menu-title"),l=i.querySelector(".menu");n.classList.remove("hidden"),n.classList.add("block"),r.classList.remove("text-[#574a6d]"),r.classList.add("text-[#ed1944]"),l.classList.remove("bg-[#f0f0f1]"),l.classList.add("bg-white")};const e=`
      <div
        class="annoying hidden group-hover/grand:block transition-all duration-200 h-[65vh] absolute z-10 overflow-visible"
        style="top: calc(100% - 5px); right: 0;"
      >
        <div
          class="direction direction-ltr h-full overflow-y-scroll scroll-smooth overflow-x-visible"
        >
          <div class="annoying-topics h-full w-50">
            ${bs.megaMenu.map((i,n)=>{const r=Math.min(i.columns.length,4),l=`${r*13.75}rem`;return`
      <div class="pain group w-auto">
        <div
          class="menu group/parent border-spacing-color annoying-topics-title direction-rtl w-full h-12 bg-[#f0f0f1] gap-2 p-2 flex justify-start items-center text-[#574a6d] hover:text-[#ed1944] transition hover:bg-white"
        >
          ${xs[i.icon]}
          <span
            class="menu-title font-Iran text-xs ml-2 ${n===0?"text-[#ed1944]":"text-[#574a6d]"}"
          >
            ${i.title}
          </span>

          <div
            class="pain-subject ${n===0?"block":"hidden"} h-[65vh] p-3 absolute bg-white top-0 right-full overflow-x-hidden overflow-auto"
            style="width: ${l}; min-width: 13.75rem;"
          >
            <a
              href="${i.topLink.url}"
              class="flex gap-2 w-full justify-start items-start"
            >
              <span
                class="font-Iran mt-1 w-fit text-xs text-[#008eb2]"
              >
                ${i.topLink.title}
              </span>

              <svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                style="fill: #008eb2"
                width="18"
                height="18"
              >
                <defs>
                  <symbol
                    id="chevronLeft"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                    ></path>
                  </symbol>
                </defs>
                <g>
                  <path
                    d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                  ></path>
                </g>
              </svg>
            </a>

            <div
              class="subjects gap-x gap-y-1 mt-3 grid"
              style="grid-template-columns: repeat(${r}, 13.75rem);"
            >
              ${i.columns.map(o=>o.type==="grouped"?`
                      <div class="w-55 p-2 flex flex-col gap-2">
                        <div
                          class="titles w-full flex flex-row gap-1 border-r-2 border-r-[#ed1944] pr-2 group/child justify-start items-center"
                        >
                          <span
                            class="font-Iran text-[14px] font-bold text-black group-hover/child:text-[#ed1944]"
                          >
                            ${o.title}
                          </span>
                          <img
                            src="./src/img/Header/left-black.svg"
                            alt=""
                            class="w-4.5 block group-hover/child:hidden"
                          />
                          <img
                            src="./src/img/Header/left-red.svg"
                            alt=""
                            class="w-4.5 hidden group-hover/child:block"
                          />
                        </div>

                        ${o.sections.map(a=>`
                              <div class="flex flex-col gap-2">
                                <span
                                  class="font-Iran text-xs font-bold text-[#424750]"
                                >
                                  ${a.title}
                                </span>

                                ${a.items.map(c=>`
                                      <div class="child">
                                        <a
                                          href="${c.url}"
                                          class="font-Iran text-xs text-[#a2a2a2] hover:text-[#ed1944]"
                                        >
                                          ${c.title}
                                        </a>
                                      </div>
                                    `).join("")}
                              </div>
                            `).join("")}
                      </div>
                    `:o.type==="simple"?`
                      <div class="w-55 p-2 flex flex-col gap-2">
                        <div
                          class="titles w-full flex flex-row gap-1 border-r-2 border-r-[#ed1944] pr-2 group/child justify-start items-center"
                        >
                          <span
                            class="font-Iran text-[14px] font-bold text-black group-hover/child:text-[#ed1944]"
                          >
                            ${o.title}
                          </span>
                          <img
                            src="./src/img/Header/left-black.svg"
                            alt=""
                            class="w-4.5 block group-hover/child:hidden"
                          />
                          <img
                            src="./src/img/Header/left-red.svg"
                            alt=""
                            class="w-4.5 hidden group-hover/child:block"
                          />
                        </div>

                        ${o.items.map(a=>`
                              <div class="child">
                                <a
                                  href="${a.url}"
                                  class="font-Iran text-xs text-[#a2a2a2] hover:text-[#ed1944]"
                                >
                                  ${a.title}
                                </a>
                              </div>
                            `).join("")}
                      </div>
                    `:"").join("")}
            </div>
          </div>
        </div>
      </div>
    `}).join("")}
          </div>
        </div>
      </div>
    `;document.querySelector(".mega-menu-container").innerHTML=e;const s=document.querySelectorAll(".mega-menu-container .pain");s.length>0&&t(s[0]),s.forEach(i=>{i.addEventListener("mouseenter",()=>{t(i)})})}catch(e){console.error(e.message)}}function ys(){let e=document.querySelector(".console"),s=document.querySelector(".history"),t=document.querySelector(".category"),i=document.querySelector(".bg-close");e.addEventListener("click",function(n){n.stopPropagation(),s.classList.add("!flex"),i.classList.add("!block")}),t.addEventListener("click",function(){s.classList.remove("!flex"),i.classList.remove("!block")}),i.addEventListener("click",function(){i.classList.remove("!block"),s.classList.remove("!flex")}),document.addEventListener("click",function(n){const r=s.contains(n.target),l=e.contains(n.target);!r&&!l&&(s.classList.remove("!flex"),i.classList.remove("!block"))}),s.addEventListener("click",function(n){n.stopPropagation()})}const Be=await N();function qe(){new A(".locswiper",{modules:[U],loop:!1,slidesPerView:"auto",spaceBetween:10,rtl:!0,watchOverflow:!0,navigation:{nextEl:".city-next",prevEl:".city-prev"},breakpoints:{0:{slidesPerView:"auto",spaceBetween:8},640:{slidesPerView:"auto",spaceBetween:10},768:{slidesPerView:"auto",spaceBetween:10},1024:{slidesPerView:"auto",spaceBetween:10}}})}try{const e=Be.locationCity.map(s=>`
                  <div
                    class="swiper-slide flex h-14 items-center justify-between rounded-full border border-gray-300 !w-auto bg-white py-2 px-1 text-md font-semibold text-slate-700"
                  >
                    <span class="font-Iran desktop:text-sm mobile:text-[12px]">${s.city}</span>
                    <img src="./src/img/Header/left-black.svg" alt="">
                  </div>
        `);document.querySelector(".locswiperkid").innerHTML=e.join(" ")}catch(e){console.error(e.message)}try{const e=Be.cities.map(s=>`
                  <div class="cities w-full flex justify-between items-center py-2 border-b border-[#eaeaec] pb-2">
              <div class="cities-item flex justify-center items-center gap-x-1 cursor-pointer">
                <span class="font-Iran text-sm">${s.city}</span>
                <span class="font-Iran text-sm text-[#878b90]">در ${s.province}</span>
              </div>
              <img src="./src/img/Header/left-black.svg" alt="" />
            </div>
        `);document.querySelector(".cities-list").innerHTML=e.join(" ")}catch(e){console.error(e.message)}const Ve=document.querySelector(".loc-modal"),Ss=document.querySelector(".location-choose"),Ts=document.querySelector(".loc-close"),J=document.querySelector(".cover-bg-loc-full");function Ls(){Ve.classList.remove("hidden"),J.classList.remove("hidden"),J.classList.remove("hidden"),document.body.classList.add("overflow-hidden")}function De(){Ve.classList.add("hidden"),J.classList.add("hidden"),J.classList.add("hidden"),document.body.classList.remove("overflow-hidden")}Ss.addEventListener("click",Ls);Ts.addEventListener("click",De);J.addEventListener("click",De);const Ge=document.querySelector(".loc-scroll"),Es=document.querySelector(".loc-divider");function Fe(){Es.classList.toggle("hidden",Ge.scrollTop<=20)}Fe();Ge.addEventListener("scroll",Fe);qe();const Ms=await N();async function Ne(){try{const e=Ms.navbar.map(t=>`
        <div class="nav-items cursor-pointer items-end flex justify-end gap-2 h-10 flex-col group">
          <a class="flex items-center gap-1" href="${t.link}">
            <img src=${t.img} class="w-4.5" />
            <span class="font-Iran text-[12px] text-[#3f3f3f]">
              ${t.title}
            </span>
          </a>
          <div class="underline w-3 h-0.5 opacity-0 bg-[#ed1944] rounded-full group-hover:opacity-100 group-hover:w-full transition-all duration-300"></div>
        </div>`);document.querySelector(".navigation").innerHTML=e.join(" "),document.querySelectorAll(".nav-items").forEach(t=>{t.addEventListener("mouseenter",function(i){const n=i.currentTarget.getBoundingClientRect(),r=i.clientX-n.left,l=n.width,o=i.currentTarget;o.classList.remove("items-start","items-end"),r<l/2?o.classList.add("items-end"):o.classList.add("items-start")})})}catch(e){console.error(e.message)}}Ne();async function ks(){let e=document.querySelector(".cover-bg"),s=document.querySelector(".items-categories");s.addEventListener("mouseenter",function(){e.classList.add("!block")}),s.addEventListener("mouseleave",function(){e.classList.remove("!block")})}async function Re(){try{const s=(await B("Api.json")).data.widgets.find(n=>n.type==="full_slider");if(!s||!s.data){console.error("Slider data not found");return}const t=s.data.map(n=>`
        <div class="swiper-slide">
          <a href="${`https://www.digikala.com${n.url.uri}`}" target="_blank" class="block w-full h-full">
            <img
              src="${n.image}"
              alt="${n.title}"
              title="${n.title}"
              class="w-full h-full block object-cover"
            />
          </a>
        </div>
      `),i=document.querySelector(".slider-wrapper");i.innerHTML=t.join(""),new A(".Slider",{modules:[U,hs,gs],slidesPerView:1,spaceBetween:8,loop:!0,speed:800,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".slider-next",prevEl:".slider-prev"},autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{0:{slidesPerView:1.1,centeredSlides:!1,spaceBetween:2,speed:500},1024:{slidesPerView:1,centeredSlides:!1,spaceBetween:0,speed:800}}})}catch(e){console.error("Error loading slider:",e)}}Re();async function $s(){const e=document.querySelector(".MLocation"),s=document.querySelector(".loc-modal"),t=document.querySelector(".cover-bg-loc-full");e.addEventListener("click",()=>{s.classList.remove("hidden"),t.classList.remove("hidden")})}const Cs=await N();async function We(){try{const i=Cs.HotSearh.map(n=>`
    <div class="swiper-slide cursor-pointer !flex !flex-row !items-center gap-2 !w-auto rounded-full border border-gray-300 bg-white py-2 px-2">
      <span class="font-Iran text-sm font-semibold text-slate-700 whitespace-nowrap">${n.title}</span>
      <img src="./src/img/Header/left-black.svg" alt="" class="w-4 h-4 shrink-0" />
    </div>
  `);document.querySelector(".hot-wrapper").innerHTML=i.join(" ")}catch(i){console.log(i.message)}new A(".Search-hot-swiper",{slidesPerView:"auto",spaceBetween:8});const e=document.querySelector(".close-MSearch-popup"),s=document.querySelector(".MSearch-popup");document.querySelector(".MSearch").addEventListener("click",()=>{s.classList.remove("translate-y-full","invisible","opacity-0","pointer-events-none")}),e.addEventListener("click",()=>{s.classList.add("translate-y-full","invisible","opacity-0","pointer-events-none")})}We();async function Ue(){const e=await N();try{const s=e.services.map(t=>`
    <div class="services-items flex flex-col py-2 box-border rounded-lg border border-[#d7d7d7] justify-between items-center w-1/6 h-18 ${t.active?"bg-[#e40138]":"bg-white"}">

      <img src="${t.Simg}" alt="" class="w-10 shrink-0">

      <span class="font-Iran text-[11px] font-normal text-center px-1 leading-tight whitespace-nowrap overflow-hidden text-ellipsis w-full
        ${t.active?"text-white":"text-black"}">
        ${t.Stitle}
      </span>

    </div>
  `);document.querySelector(".services").innerHTML=s.join(" ")}catch(s){console.error(s.message)}}Ue();const Ps="modulepreload",Is=function(e){return"/DigiAPi/"+e},Me={},ke=function(s,t,i){let n=Promise.resolve();if(t&&t.length>0){let a=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),o=l?.nonce||l?.getAttribute("nonce");n=a(t.map(c=>{if(c=Is(c),c in Me)return;Me[c]=!0;const p=c.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":Ps,p||(v.as="script"),v.crossOrigin="",v.href=c,o&&v.setAttribute("nonce",o),document.head.appendChild(v),p)return new Promise((d,h)=>{v.addEventListener("load",d),v.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return n.then(l=>{for(const o of l||[])o.status==="rejected"&&r(o.reason);return s().catch(r)})};async function zs(){try{const r=(await B("Api.json")).data.widgets.find(a=>a.type==="deep_links");if(!r||!r.data){console.error("Categories data not found");return}const o=r.data.slice(0,8).map(a=>{const c=a.icon.webp_url?.[0]||a.icon.url?.[0]||"";return`
        <div class="flex flex-col w-20 justify-center items-center gap-1 h-30">
          <a href="${a.url.base?`${a.url.base}${a.url.uri}`:`https://www.digikala.com${a.url.uri}`}" target="_blank" class="flex flex-col justify-start items-center gap-1 h-full">
            <img src="${c}" alt="${a.title}" class="w-12" />
            <span class="w-16 font-Iran text-[12px] text-center leading-6">${a.title}</span>
          </a>
        </div>
      `});document.querySelector(".list").innerHTML=o.join("")}catch(n){console.error("Error loading list:",n)}try{const{getDB:n}=await ke(async()=>{const{getDB:a}=await Promise.resolve().then(()=>xe);return{getDB:a}},void 0),l=(await n()).listModal?.map(a=>`
        <div class="flex flex-col desktop:w-20 mobile:w-30 justify-center items-center gap-1 h-30">
          <a href="${a.link}" class="flex flex-col justify-start items-center gap-1 h-full">
            <img src="${a.icon}" alt="" class="w-12" />
            <span class="w-16 font-Iran text-[12px] text-center leading-6">${a.text}</span>
          </a>
        </div>
      `)||[],o=document.querySelector(".list-modal-container");o&&(o.innerHTML=l.join(""))}catch(n){console.log("Modal list:",n.message)}try{const{getDB:n}=await ke(async()=>{const{getDB:a}=await Promise.resolve().then(()=>xe);return{getDB:a}},void 0),l=(await n()).modalService?.map(a=>`
        <div class="flex justify-between items-start desktop:w-70 mobile:w-[98%] desktop:min-h-30 mobile:min-h-22 desktop:border border-[#eaeaec] mobile:border-b desktop:rounded-lg p-4 gap-2">
          <img src="${a.pic}" alt="" class="w-13" />
          <div class="flex flex-col justify-start desktop:w-50 mobile:w-full items-center gap-2">
            <div class="flex justify-between w-full items-center">
              <h3 class="font-Iran text-sm font-bold">${a.title}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px; fill: #a1a3a8" width="24" height="24">
                <path fill-rule="evenodd" d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <p class="font-Iran text-xs text-[#666] leading-6 w-full text-right line-clamp-2">${a.text}</p>
          </div>
        </div>
      `)||[],o=document.querySelector(".list-modal-services");o&&(o.innerHTML=l.join(""))}catch(n){console.log("Modal services:",n.message)}const e=document.querySelector(".closelist"),s=document.querySelector(".list-modal"),t=document.querySelector(".more-list"),i=document.querySelector(".cover-bg-loc-full");t&&s&&i&&e&&(t.addEventListener("click",()=>{s.classList.remove("hidden"),s.classList.add("flex"),i.classList.remove("hidden"),document.body.classList.add("overflow-hidden")}),e.addEventListener("click",()=>{s.classList.add("hidden"),s.classList.remove("flex"),i.classList.add("hidden"),document.body.classList.remove("overflow-hidden")}))}async function _s(){let e=document.querySelectorAll(".second"),s=document.querySelectorAll(".minute"),t=document.querySelectorAll(".hour");function i(){let n=new Date,r=new Date;r.setHours(24,0,0,0);let l=Math.floor((r-n)/1e3);l<=0&&(r.setDate(r.getDate()+1),l=Math.floor((r-n)/1e3));let o=Math.floor(l/3600),a=Math.floor(l%3600/60),c=l%60;o=String(o).padStart(2,"0"),a=String(a).padStart(2,"0"),c=String(c).padStart(2,"0"),t.forEach(p=>p.textContent=o),s.forEach(p=>p.textContent=a),e.forEach(p=>p.textContent=c)}setInterval(i,1e3),i();try{const r=(await B("Api.json")).data.widgets.find(d=>d.type==="products_cart");if(!r)return;const l=r.data.products;let o=l.slice(0,12).map((d,h)=>{const x=d.images?.main?.url?.[0]||"",b=d.title_fa||"",f=d.default_variant?.price?.selling_price||0,m=d.default_variant?.price?.rrp_price||0,g=d.default_variant?.price?.discount_percent||0,w=d.url?.uri||"",S=w?`https://www.digikala.com${w}`:"#",$=Math.floor(f/10).toLocaleString("fa-IR"),k=Math.floor(m/10).toLocaleString("fa-IR");return`
        <div class="swiper-slide cursor-pointer ${h===11?"rounded-tr-lg rounded-br-lg":""} overflow-hidden !w-[152px]">
          <a href="${S}" target="_blank" class="w-full h-full flex flex-col bg-white justify-center items-center gap-1 p-2">
            <img src="${x}" alt="${b}" />
            <p class="font-Iran text-[#777b81] text-[12px] text-right w-full line-clamp-2">
              ${b}
            </p>
            <div class="flex justify-between items-start w-full">
              <div class="font-number text-[12px] font-bold text-white bg-[#d32f2f] px-1.5 py-0.5 rounded-full">
                ${g}٪
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="flex justify-center items-center gap-1">
                  <span class="font-number text-sm">${$}</span>
                  <img src="./src/img/inc/toman.svg" alt="">
                </div>
                <span class="font-number text-sm text-[#cdced1] line-through ml-4">
                  ${k}
                </span>
              </div>
            </div>
          </a>
        </div>
      `});const a=`
      <div class="swiper-slide !w-[160px] pl-4">
        <div class="bg-white w-full h-[260px] rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center">
          <a href="https://www.digikala.com/incredible-offers/" target="_blank" class="flex flex-col justify-center items-center">
            <div class="p-2 rounded-full border-2 border-[#19bfd3]">
              <img src="./src/img/inc/blueleft.svg" alt="" />
            </div>
            <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">
              مشاهده همه
            </span>
          </a>
        </div>
      </div>
    `,c=document.querySelector(".inc-wrapper");c&&(c.innerHTML+=o.join("")+a);let p=l.slice(0,10).map((d,h)=>{const x=d.images?.main?.url?.[0]||"",b=d.title_fa||"",f=d.default_variant?.price?.selling_price||0,m=d.default_variant?.price?.rrp_price||0,g=d.default_variant?.price?.discount_percent||0,w=d.url?.uri||"",S=w?`https://www.digikala.com${w}`:"#",$=Math.floor(f/10).toLocaleString("fa-IR"),k=Math.floor(m/10).toLocaleString("fa-IR");return`
        <div class="cursor-pointer shrink-0 ${h===9?"rounded-tr-lg rounded-br-lg":""} h-60 overflow-hidden !w-[130px]">
          <a href="${S}" target="_blank" class="w-full h-full flex flex-col bg-white justify-center items-center gap-1 p-2">
            <img src="${x}" alt="${b}" />
            <p class="font-Iran text-[#777b81] text-[12px] text-right w-full line-clamp-2 leading-6 text-black">
              ${b}
            </p>
            <div class="flex justify-between items-start w-full">
              <div class="font-number text-[12px] font-bold text-white bg-[#d32f2f] px-1.5 py-0.5 rounded-full">
                ${g}٪
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="flex justify-center items-center gap-1">
                  <span class="font-number text-sm">${$}</span>
                  <img src="./src/img/inc/toman.svg" alt="">
                </div>
                <span class="font-number text-sm text-[#cdced1] line-through ml-4">
                  ${k}
                </span>
              </div>
            </div>
          </a>
        </div>
      `});const u=`
      <div class="bg-white w-40 shrink-0 ml-4 h-60 rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center">
        <a href="https://www.digikala.com/incredible-offers/" target="_blank" class="flex flex-col justify-center items-center">
          <div class="p-2 rounded-full border-2 border-black">
            <img src="./src/img/inc/blackleft.svg" alt="" />
          </div>
          <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">
            مشاهده همه
          </span>
        </a>
      </div>
    `,v=document.querySelector(".mobile-amazing-items");v&&(v.innerHTML+=p.join("")+u)}catch(n){console.error("Error loading incredible offers:",n)}}async function js(){try{const l=(await B("Api.json")).data.widgets.find(o=>o.name==="banners_home_web_zone_top");if(l&&l.data){const o=l.data.map(c=>{const p=c.url?.uri||"";return`
          <div class="desktop:min-w-60 desktop:w-[24%] mobile:w-[45%] mobile:h-30 desktop:h-auto desktop:rounded-2xl mobile:rounded-lg overflow-hidden">
            <a href="${p?`https://www.digikala.com${p}`:"#"}" target="_blank">
              <img src="${c.image}" alt="${c.title}" title="${c.title}" class="w-full h-full object-cover" />
            </a>
          </div>
        `}),a=document.querySelector(".ads");a&&(a.innerHTML=o.join(""))}}catch(n){console.error("Error loading ads:",n)}try{const l=(await B("Api.json")).data.widgets.find(o=>o.name==="banners_home_web_zone_top_second");if(l&&l.data){const o=l.data.map(c=>{const p=c.url?.uri||"";return`
          <div class="desktop:min-w-60 desktop:w-[24%] mobile:w-[45%] mobile:h-30 desktop:h-auto desktop:rounded-2xl mobile:rounded-lg overflow-hidden">
            <a href="${p?`https://www.digikala.com${p}`:"#"}" target="_blank">
              <img src="${c.image}" alt="${c.title}" title="${c.title}" class="w-full h-full object-cover" />
            </a>
          </div>
        `}),a=document.querySelector(".ads2");a&&(a.innerHTML=o.join(""))}}catch(n){console.error("Error loading ads2:",n)}let e=document.querySelectorAll(".second"),s=document.querySelectorAll(".minute"),t=document.querySelectorAll(".hour");function i(){let n=new Date,r=new Date;r.setHours(24,0,0,0);let l=Math.floor((r-n)/1e3);l<=0&&(r.setDate(r.getDate()+1),l=Math.floor((r-n)/1e3));let o=Math.floor(l/3600),a=Math.floor(l%3600/60),c=l%60;o=String(o).padStart(2,"0"),a=String(a).padStart(2,"0"),c=String(c).padStart(2,"0"),t.forEach(p=>p.textContent=o),s.forEach(p=>p.textContent=a),e.forEach(p=>p.textContent=c)}setInterval(i,1e3),i(),new A(".inc-swiper",{modules:[U],slidesPerView:"auto",spaceBetween:2,navigation:{nextEl:".inc-next",prevEl:".inc-prev"}})}async function As(){try{const s=(await B("Api.json")).data.widgets.find(l=>l.type==="fresh_shortcut");if(!s)return;const n=s.data.products.slice(0,6).map(l=>{const o=l.images?.main?.url?.[0]||"",a=l.default_variant?.price?.discount_percent||0,c=l.url?.uri||"";return`
        <div class="w-20 h-20 relative bg-white rounded-full flex justify-center items-center">
          <a href="${c?`https://www.digikala.com${c}`:"#"}" target="_blank" class="w-full h-full flex justify-center items-center">
            <img src="${o}" alt="" class="rounded-full w-[80%]">
          </a>
          <div class="absolute rounded-full bg-[#d32f2f] font-number text-[14px] px-1.5 py-0.5 text-white bottom-0 right-0">${a}٪</div>
        </div>
      `}),r=document.querySelector(".amazing-items");r&&(r.innerHTML=n.join(""))}catch(e){console.error("Error loading amazing products:",e)}}async function Os(){try{const s=(await B("Api.json")).data.widgets.find(l=>l.type==="main_categories_grid");if(!s||!s.data||!s.data.categories){console.error("Grouping categories not found");return}const t=s.data.categories;let i="";for(let l=0;l<t.length;l+=2){const o=t[l],a=t[l+1];i+=`
        <div class="swiper-slide !w-[120px]">
          ${o?`
            <div class="flex flex-col justify-between items-center w-full h-[200px] cursor-pointer">
              <a href="https://www.digikala.com${o.url?.uri||"#"}" target="_blank" class="flex flex-col justify-center items-center w-full gap-2">
                <img src="${o.image}" alt="${o.title}" class="w-25">
                <span class="font-Iran text-[12px] text-center font-semibold">${o.title}</span>
              </a>
            </div>
          `:""}

          ${a?`
            <div class="flex flex-col justify-between items-center w-full h-[200px] cursor-pointer">
              <a href="https://www.digikala.com${a.url?.uri||"#"}" target="_blank" class="flex flex-col justify-center items-center w-full gap-2">
                <img src="${a.image}" alt="${a.title}" class="w-25">
                <span class="font-Iran text-[12px] text-center font-semibold">${a.title}</span>
              </a>
            </div>
          `:""}
        </div>
      `}document.querySelector(".grouping-wrapper").innerHTML=i;let n="";for(let l=0;l<t.length;l+=2){const o=t[l],a=t[l+1];n+=`
        <div class="flex flex-col gap-2 shrink-0 w-[90px]">
          ${o?`
            <div class="flex flex-col justify-center items-center w-full cursor-pointer">
              <a href="https://www.digikala.com${o.url?.uri||"#"}" target="_blank" class="flex flex-col justify-center items-center w-full gap-1">
                <img src="${o.image}" alt="${o.title}" class="w-20">
                <span class="font-Iran text-[10px] text-center">${o.title}</span>
              </a>
            </div>
          `:""}

          ${a?`
            <div class="flex flex-col justify-center items-center w-full cursor-pointer">
              <a href="https://www.digikala.com${a.url?.uri||"#"}" target="_blank" class="flex flex-col justify-center items-center w-full gap-1">
                <img src="${a.image}" alt="${a.title}" class="w-20">
                <span class="font-Iran text-[10px] text-center">${a.title}</span>
              </a>
            </div>
          `:""}
        </div>
      `}const r=document.querySelector(".grouping-mobile");r&&(r.innerHTML=n)}catch(e){console.error("Error loading grouping:",e)}new A(".grouping-swiper",{modules:[U],slidesPerView:7.5,spaceBetween:60,navigation:{nextEl:".grouping-next",prevEl:".grouping-prev"}})}async function Hs(){try{const s=(await B("Api.json")).data.widgets.find(t=>t.type==="simple_banner"&&t.name==="banners_home_web_zone_middle");if(s&&s.data&&s.data.length>0){const t=s.data,i=t.slice(0,2).map((r,l)=>{const o=r.webp_image||r.image,a=r.url?.uri||"",c=a?`https://www.digikala.com${a}`:"#",p=r.title||"";return`
          <a href="${c}" target="_blank" class="mobile:block desktop:block desktop:rounded-2xl mobile:rounded-lg overflow-hidden cursor-pointer mobile:w-[95%] desktop:w-[49%]" title="${p}">
            <img src="${o}" alt="${p}" class="w-full object-cover">
          </a>
        `}),n=document.querySelector(".partnership");if(n&&(n.innerHTML=i.join("")),t.length>2){const r=t.slice(2,4).map(o=>{const a=o.webp_image||o.image,c=o.url?.uri||"",p=c?`https://www.digikala.com${c}`:"#",u=o.title||"";return`
            <a href="${p}" target="_blank" class="rounded-2xl overflow-hidden cursor-pointer w-[49%]" title="${u}">
              <img src="${a}" alt="${u}" class="w-full object-cover">
            </a>
          `}),l=document.querySelector(".partnership2");l&&(l.innerHTML=r.join(""))}if(t.length>1){const r=`
          <a href="https://www.digikala.com${t[1].url?.uri||"#"}" target="_blank" class="w-[95%] border border-[#eaeaec] rounded-lg overflow-hidden cursor-pointer block">
            <img src="${t[1].webp_image||t[1].image}" alt="${t[1].title}" title="${t[1].title}" class="w-full h-full object-cover" />
          </a>
        `,l=document.querySelector(".partner-mobile-1");l&&(l.innerHTML=r)}if(t.length>2){const r=t.slice(2,4).map(o=>{const a=o.webp_image||o.image,c=o.url?.uri||"",p=c?`https://www.digikala.com${c}`:"#",u=o.title||"";return`
            <a href="${p}" target="_blank" class="w-[95%] border border-[#eaeaec] rounded-lg overflow-hidden cursor-pointer">
              <img src="${a}" alt="${u}" title="${u}" class="w-full h-full object-cover" />
            </a>
          `}),l=document.querySelector(".partner-mobile-2");l&&(l.innerHTML=r.join(""))}}}catch(e){console.error("Error loading partnership banners:",e)}}async function Bs(){try{const s=(await B("Api.json")).data.widgets.find(r=>r.type==="popular_brands_grid");if(!s||!s.data||!s.data.brands){console.error("Brands data not found");return}const t=s.data.brands,i=t.map(r=>{const l=r.logo?.url?.[0]||"",o=r.title_fa||"",a=r.url?.uri||"";return`
        <div class="swiper-slide !w-[135px]">
          <a href="${a?`https://www.digikala.com${a}`:"#"}" target="_blank" title="${o}" class="w-full h-26 border-r border-[#f0f0f1] flex justify-center items-center px-2">
            <img src="${l}" alt="${o}" class="w-[85%] object-contain" />
          </a>
        </div>
      `});document.querySelector(".brands-wrapper").innerHTML=i.join("");const n=t.map(r=>{const l=r.logo?.url?.[0]||"",o=r.title_fa||"",a=r.url?.uri||"";return`
        <a href="${a?`https://www.digikala.com${a}`:"#"}" target="_blank" title="${o}" class="shrink-0 w-[80px] h-[100px] rounded-lg border border-[#e0e0e2] bg-[#f5f5f5] flex flex-col justify-center items-center gap-2 px-1">
          <img src="${l}" alt="${o}" class="w-[75%] object-contain mix-blend-multiply" />
          <span class="font-Iran text-[12px] text-[#3f4064] text-center w-full truncate">${o}</span>
        </a>
      `});document.querySelector(".brands-mobile").innerHTML=n.join("")}catch(e){console.error("Error loading brands:",e)}new A(".brands-swiper",{modules:[U],slidesPerView:"auto",spaceBetween:0,navigation:{nextEl:".brands-next",prevEl:".brands-prev"}})}async function qs(){try{const e=await B("recommendation.json");if(e.status===200&&e.data.categories){const s=e.data.categories,t=s.slice(0,4).map(l=>{const a=(l.products||[]).slice(0,4).map((p,u,v)=>{const d=p.images?.main?.webp_url?.[0]||p.images?.main?.url?.[0]||"",h=p.url?.uri||"",x=h?`https://www.digikala.com${h}`:"#",b=u===0,f=u===v.length-1;return`
            <div class="w-[50%] h-35 flex justify-center items-center ${b?"border-l border-b border-[#f0f0f1]":""} ${f?"border-r border-t border-[#f0f0f1]":""}">
              <a href="${x}" target="_blank" class="w-full h-full flex justify-center items-center">
                <img src="${d}" alt="${p.title_fa||""}" class="w-[80%] object-contain" />
              </a>
            </div>
          `}).join(""),c=`https://www.digikala.com${l.url?.uri||""}`;return`
          <div class="w-[25%] min-h-[300px] border-l border-[#f0f0f1] p-4 flex flex-col justify-between items-start">
            <div class="w-full flex flex-col gap-1">
              <h3 class="font-Iran text-[16px] text-[#23254e] font-semibold">${l.title}</h3>
              <span class="font-Iran text-[11px] text-[#b1b3b8]">${l.description||""}</span>
            </div>

            <div class="w-full flex flex-wrap items-center mt-3">
              ${a}
            </div>

            <a href="${c}" target="_blank" class="w-full flex justify-center items-center gap-1 mt-3 font-Iran text-[16px] text-[#19bfd3]">
              مشاهده
              <img src="./src/img/blueleftsmall.svg" alt="" class="w-6">
            </a>
          </div>
        `}),i=document.querySelector(".options2");i&&(i.innerHTML=t.join(""));const n=s.slice(4,8).map(l=>{const a=(l.products||[]).slice(0,4).map((p,u,v)=>{const d=p.images?.main?.webp_url?.[0]||p.images?.main?.url?.[0]||"",h=p.url?.uri||"",x=h?`https://www.digikala.com${h}`:"#",b=u===0,f=u===v.length-1;return`
            <div class="w-[50%] h-35 flex justify-center items-center ${b?"border-l border-b border-[#f0f0f1]":""} ${f?"border-r border-t border-[#f0f0f1]":""}">
              <a href="${x}" target="_blank" class="w-full h-full flex justify-center items-center">
                <img src="${d}" alt="${p.title_fa||""}" class="w-[80%] object-contain" />
              </a>
            </div>
          `}).join(""),c=`https://www.digikala.com${l.url?.uri||""}`;return`
          <div class="w-[25%] min-h-[300px] border-l border-[#f0f0f1] p-4 flex flex-col justify-between items-start">
            <div class="w-full flex flex-col gap-1">
              <h3 class="font-Iran text-[16px] text-[#23254e] font-semibold">${l.title}</h3>
              <span class="font-Iran text-[11px] text-[#b1b3b8]">${l.description||""}</span>
            </div>

            <div class="w-full flex flex-wrap items-center mt-3">
              ${a}
            </div>

            <a href="${c}" target="_blank" class="w-full flex justify-center items-center gap-1 mt-3 font-Iran text-[16px] text-[#19bfd3]">
              مشاهده
              <img src="./src/img/blueleftsmall.svg" alt="" class="w-6">
            </a>
          </div>
        `}),r=document.querySelector(".options");r&&(r.innerHTML=n.join(""))}}catch(e){console.error("Error loading options:",e)}}function Vs(e){return e.map(i=>{const n=i.images?.main?.webp_url?.[0]||i.images?.main?.url?.[0]||"",r=i.title_fa||"",l=i.default_variant?.price?.selling_price||0,o=i.default_variant?.price?.rrp_price||0,a=i.default_variant?.price?.discount_percent||0,c=i.url?.uri||"",p=c?`https://www.digikala.com${c}`:"#",u=Math.floor(l/10).toLocaleString("fa-IR"),v=Math.floor(o/10).toLocaleString("fa-IR");return`
      <a href="${p}" target="_blank" class="w-[170px] h-[280px] bg-white border border-[#e0e0e2] rounded-lg flex flex-col justify-start items-center gap-2 shrink-0">
        <div class="bg-[#f0f0f1] w-full p-2">
          <img src="${n}" alt="${r}" class="w-full h-[130px] object-cover mix-blend-multiply" />
        </div>
        <div class="w-full p-2 flex flex-col justify-start items-start gap-2">
          <div class="w-full flex flex-col justify-start items-start gap-1">
            <p class="font-Iran text-[14px] text-[#3f4064] line-clamp-2">${r}</p>
          </div>
          <div class="w-full flex flex-col justify-center items-center gap-1">
            <div class="w-full flex justify-start items-center gap-2">
              <span class="font-number text-white bg-[#d32f2f] rounded-full px-3 py-0.5 text-[12px] ${a?"block":"hidden"}">${a}٪</span>
              <span class="font-number text-[#b4b6ba] text-[12px] line-through ${o?"block":"hidden"}">${v}</span>
            </div>
            <div class="w-full flex justify-start items-center gap-1">
              <span class="font-number text-[22px] text-[#3f4064] font-bold">${u}</span>
              <img src="./src/img/inc/toman.svg" alt="" class="w-4" />
            </div>
          </div>
        </div>
      </a>
    `}).join("")+`
    <div class="bg-white w-[170px] h-[270px] flex flex-col justify-center items-center gap-2">
      <div class="p-2 flex justify-center items-center border-2 border-black rounded-full">
        <img src="./src/img/leftgraybig.svg" alt="" class="w-6" />
      </div>
      <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">مشاهده همه</span>
    </div>
  `}async function Ds(){try{const e=await B("recommendation.json");if(e.status===200&&e.data.categories){const s=e.data.categories;[{className:".optionsM1",categoryIndex:0},{className:".optionsM2",categoryIndex:1},{className:".optionsM3",categoryIndex:2},{className:".optionsM4",categoryIndex:3},{className:".optionsM5",categoryIndex:4},{className:".optionsM6",categoryIndex:5},{className:".optionsM7",categoryIndex:6},{className:".optionsM8",categoryIndex:7}].forEach(i=>{const n=s[i.categoryIndex];if(n&&n.products){const r=document.querySelector(i.className);r&&(r.innerHTML=Vs(n.products.slice(0,10)))}})}}catch(e){console.error("Error loading mobile options:",e)}}function X(e){const s=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return e.toString().replace(/\d/g,t=>s[t])}async function Gs(){try{const s=(await B("Api.json")).data.widgets.find(o=>o.type==="products_ordered");if(!s){console.error("Indemand products not found");return}const t=s.data.products;let i="";for(let o=0;o<t.length;o+=3){const a=t[o],c=t[o+1],p=t[o+2];i+=`
        <div class="swiper-slide">
          <div class="w-full flex flex-col justify-start items-start py-2">
            ${a?`
                <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 border-b border-[#f0f0f1] p-4">
                <a href="https://www.digikala.com${a.url?.uri||"#"}" target="_blank" class="w-16 h-16 flex justify-center items-center">
                  <img src="${a.images?.main?.webp_url?.[0]||a.images?.main?.url?.[0]||""}" alt="${a.title_fa||""}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                </a>
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${X(o+1)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${a.title_fa||""}</p>
              </div>
            `:""}
            ${c?`
              <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 border-b border-[#f0f0f1] p-4">
                <a href="https://www.digikala.com${c.url?.uri||"#"}" target="_blank" class="w-16 h-16 flex justify-center items-center">
                  <img src="${c.images?.main?.webp_url?.[0]||c.images?.main?.url?.[0]||""}" alt="${c.title_fa||""}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                </a>
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${X(o+2)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${c.title_fa||""}</p>
              </div>
            `:""}
            ${p?`
              <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 p-4">
                <a href="https://www.digikala.com${p.url?.uri||"#"}" target="_blank" class="w-16 h-16 flex justify-center items-center">
                  <img src="${p.images?.main?.webp_url?.[0]||p.images?.main?.url?.[0]||""}" alt="${p.title_fa||""}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                </a>
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${X(o+3)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${p.title_fa||""}</p>
              </div>
            `:""}
          </div>
        </div>
      `}const n=document.querySelector(".indemand-wrapper");n&&(n.innerHTML=i);let r="";for(let o=0;o<t.length;o+=3){const a=t[o],c=t[o+1],p=t[o+2];r+=`
        <div class="swiper-slide">
          <div class="w-full flex flex-col justify-start items-start gap-2">
            ${a?`
              <a href="https://www.digikala.com${a.url?.uri||"#"}" target="_blank" class="w-full h-[100px] cursor-pointer flex justify-between items-center border border-[#e0e0e2] rounded-xl pl-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                  <img src="${a.images?.main?.webp_url?.[0]||a.images?.main?.url?.[0]||""}" alt="${a.title_fa||""}" class="h-full object-contain mix-blend-multiply" />
                </div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${X(o+1)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${a.title_fa||""}</p>
              </a>
            `:""}
            ${c?`
              <a href="https://www.digikala.com${c.url?.uri||"#"}" target="_blank" class="w-full h-[100px] flex justify-between cursor-pointer items-center border border-[#e0e0e2] rounded-xl pL-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                  <img src="${c.images?.main?.webp_url?.[0]||c.images?.main?.url?.[0]||""}" alt="${c.title_fa||""}" class="h-full object-contain mix-blend-multiply" />
                </div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${X(o+2)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${c.title_fa||""}</p>
              </a>
            `:""}
            ${p?`
              <a href="https://www.digikala.com${p.url?.uri||"#"}" target="_blank" class="w-full h-[100px] flex justify-between items-center cursor-pointer border border-[#e0e0e2] rounded-xl pl-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                  <img src="${p.images?.main?.webp_url?.[0]||p.images?.main?.url?.[0]||""}" alt="${p.title_fa||""}" class="h-full object-contain mix-blend-multiply" />
                </div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${X(o+3)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${p.title_fa||""}</p>
              </a>
            `:""}
          </div>
        </div>
      `}const l=document.querySelector(".indemand-mobile-wrapper");l&&(l.innerHTML=r)}catch(e){console.error("Error loading indemand products:",e)}new A(".indemand-swiper",{modules:[U],slidesPerView:3.3,spaceBetween:20,direction:"horizontal",navigation:{nextEl:".indemand-next",prevEl:".indemand-prev"}}),new A(".indemand-mobile-swiper",{slidesPerView:1.2,spaceBetween:10,direction:"horizontal"})}async function Fs(){try{const e=await B("selling-and-sales.json");if(!e.data||!e.data.products){console.error("Chosen products not found");return}const t=e.data.products.slice(0,18).map(n=>{const r=n.images?.main?.webp_url?.[0]||n.images?.main?.url?.[0]||"",l=n.title_fa||"",o=n.default_variant?.price?.selling_price||0,a=n.default_variant?.price?.rrp_price||0,c=n.default_variant?.price?.discount_percent||0,p=n.url?.uri||"",u=p?`https://www.digikala.com${p}`:"#",v=Math.floor(o/10).toLocaleString("fa-IR"),d=Math.floor(a/10).toLocaleString("fa-IR");return`
        <div class="h-[286px] border-l border-b border-[#f0f0f1] px-2 pt-2 pb-3 flex flex-col justify-between items-start" dir="rtl">
          <a href="${u}" target="_blank" class="w-full h-[182px] flex justify-center items-center">
            <img src="${r}" alt="${l}" class="max-h-full w-[78%] object-contain" />
          </a>
          <div class="w-full flex flex-col gap-1">
            <div class="w-full flex justify-between items-end">
              <span class="font-number text-white bg-[#d32f2f] rounded-full min-w-10 h-6 px-2 text-[14px] leading-6 text-center ${c?"block":"hidden"}">${c}٪</span>
              <div class="flex justify-end items-end gap-1">
                <span class="font-number text-[18px] leading-none text-[#2f2f56] font-bold">${v}</span>
                <img src="./src/img/inc/toman.svg" alt="" class="w-5">             
              </div>
            </div>
            <span class="font-number text-[13px] text-[#c7c9ce] line-through self-end ml-6 ${a?"block":"hidden"}">${d}</span>
          </div>
        </div>
      `}),i=document.querySelector(".chosen-items");i&&(i.innerHTML=t.join(""))}catch(e){console.error("Error loading chosen products:",e)}}function K(e){const s=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return e.toString().replace(/\d/g,t=>s[t])}async function Ns(){try{const e=await B("trending.json");if(!e.data||!e.data.products){console.error("Hot products not found");return}const s=e.data.products;let t="";for(let l=0;l<s.length;l+=3){const o=s[l],a=s[l+1],c=s[l+2];t+=`
        <div class="swiper-slide">
          <div class="w-full flex flex-col justify-start items-start py-2">
            ${o?`
                <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 border-b border-[#f0f0f1] p-4">
                <a href="https://www.digikala.com${o.url?.uri||"#"}" target="_blank" class="w-16 h-16 flex justify-center items-center">
                  <img src="${o.images?.main?.webp_url?.[0]||o.images?.main?.url?.[0]||""}" alt="${o.title_fa||""}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                </a>
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${K(l+1)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${o.title_fa||""}</p>
              </div>
            `:""}
            ${a?`
              <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 border-b border-[#f0f0f1] p-4">
                <a href="https://www.digikala.com${a.url?.uri||"#"}" target="_blank" class="w-16 h-16 flex justify-center items-center">
                  <img src="${a.images?.main?.webp_url?.[0]||a.images?.main?.url?.[0]||""}" alt="${a.title_fa||""}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                </a>
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${K(l+2)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${a.title_fa||""}</p>
              </div>
            `:""}
            ${c?`
              <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 p-4">
                <a href="https://www.digikala.com${c.url?.uri||"#"}" target="_blank" class="w-16 h-16 flex justify-center items-center">
                  <img src="${c.images?.main?.webp_url?.[0]||c.images?.main?.url?.[0]||""}" alt="${c.title_fa||""}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                </a>
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${K(l+3)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${c.title_fa||""}</p>
              </div>
            `:""}
          </div>
        </div>
      `}const i=document.querySelector(".hot-wrapper");i&&(i.innerHTML=t);let n="";for(let l=0;l<s.length;l+=3){const o=s[l],a=s[l+1],c=s[l+2];n+=`
        <div class="swiper-slide">
          <div class="w-full flex flex-col justify-start items-start gap-2">
            ${o?`
              <a href="https://www.digikala.com${o.url?.uri||"#"}" target="_blank" class="w-full h-[100px] cursor-pointer flex justify-between items-center border border-[#e0e0e2] rounded-xl pl-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                  <img src="${o.images?.main?.webp_url?.[0]||o.images?.main?.url?.[0]||""}" alt="${o.title_fa||""}" class="h-full object-contain mix-blend-multiply" />
                </div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${K(l+1)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${o.title_fa||""}</p>
              </a>
            `:""}
            ${a?`
              <a href="https://www.digikala.com${a.url?.uri||"#"}" target="_blank" class="w-full h-[100px] flex justify-between cursor-pointer items-center border border-[#e0e0e2] rounded-xl pL-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                  <img src="${a.images?.main?.webp_url?.[0]||a.images?.main?.url?.[0]||""}" alt="${a.title_fa||""}" class="h-full object-contain mix-blend-multiply" />
                </div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${K(l+2)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${a.title_fa||""}</p>
              </a>
            `:""}
            ${c?`
              <a href="https://www.digikala.com${c.url?.uri||"#"}" target="_blank" class="w-full h-[100px] flex justify-between items-center cursor-pointer border border-[#e0e0e2] rounded-xl pl-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                  <img src="${c.images?.main?.webp_url?.[0]||c.images?.main?.url?.[0]||""}" alt="${c.title_fa||""}" class="h-full object-contain mix-blend-multiply" />
                </div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${K(l+3)}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${c.title_fa||""}</p>
              </a>
            `:""}
          </div>
        </div>
      `}const r=document.querySelector(".hot-mobile-wrapper");r&&(r.innerHTML=n)}catch(e){console.error("Error loading hot products:",e)}new A(".hot-swiper",{modules:[U],slidesPerView:3.3,spaceBetween:20,direction:"horizontal",navigation:{nextEl:".hot-next",prevEl:".hot-prev"}}),new A(".hot-mobile-swiper",{slidesPerView:1.2,spaceBetween:10,direction:"horizontal"})}async function Rs(){try{const s=(await B("Api.json")).data.widgets.find(r=>r.type==="magazine_posts");if(!s)return;const i=s.data.news.slice(0,4).map(r=>{const l=r.url?.uri||"#";return`
        <div class="flex-col gap-2 rounded-xl overflow-hidden border border-[#eaeaec] desktop:h-75 mobile:h-60 mobile:block desktop:block">
          <a href="${l.startsWith("http")?l:`https://www.digikala.com${l}`}" target="_blank" class="block">
            <img src="${r.image}" alt="${r.title}" class="w-full object-cover">
            <div class="px-4 py-2">
              <span class="font-Iran desktop:text-[13px] mobile:text-[13px]">${r.title}</span>
            </div>
          </a>
        </div>
      `}),n=document.querySelector(".blog-items");n&&(n.innerHTML=i.join(""))}catch(e){console.error("Error loading blog:",e)}}function Ws(){const e=document.getElementById("site-footer");e&&e.addEventListener("click",s=>{s.target.closest(".footer-back-top")&&(s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}));const t=s.target.closest("[data-acc-btn]");if(t){const i=t.getAttribute("data-acc-target"),n=e.querySelector(i),r=t.querySelector(".footer-acc-chevron");if(n){const l=!n.classList.contains("hidden");n.classList.toggle("hidden",l),t.setAttribute("aria-expanded",String(!l)),r?.classList.toggle("rotate-180",!l)}}if(s.target.closest("[data-bragging-more-m]")){const i=e.querySelector("#bragging-text-m"),n=e.querySelector("#bragging-fade-m"),r=e.querySelector("[data-bragging-more-m]"),l=r?.querySelector("span"),o=r?.querySelector("img");i?.classList.contains("max-h-none")?(i.classList.remove("max-h-none"),i.classList.add("max-h-[3.6em]"),n?.classList.remove("hidden"),l&&(l.textContent="مشاهده بیشتر"),o?.classList.remove("rotate-180")):(i?.classList.remove("max-h-[3.6em]"),i?.classList.add("max-h-none"),n?.classList.add("hidden"),l&&(l.textContent="مشاهده کمتر"),o?.classList.add("rotate-180"))}if(s.target.closest("[data-bragging-more-d]")){const i=e.querySelector("#bragging-text-d"),n=e.querySelector("#bragging-fade-d"),r=e.querySelector("[data-bragging-more-d]"),l=r?.querySelector("span"),o=r?.querySelector("img");i?.classList.contains("max-h-none")?(i.classList.remove("max-h-none"),i.classList.add("max-h-[3.6em]"),n?.classList.remove("hidden"),l&&(l.textContent="مشاهده بیشتر"),o?.classList.remove("rotate-180")):(i?.classList.remove("max-h-[3.6em]"),i?.classList.add("max-h-none"),n?.classList.add("hidden"),l&&(l.textContent="مشاهده کمتر"),o?.classList.add("rotate-180"))}})}function Us(e){const s=e.tag?.variant==="orange",t=s?"bg-[#feebde]":"bg-[#dbf3e6]",i=s?"bg-[#ff8042]":"bg-[#029a49]";return`
    <a href="${e.href||"#"}" class="block w-full rounded-lg p-5 no-underline text-inherit ${t}">
      <div class="mb-2.5 flex items-center justify-start gap-3">
        <h3 class="m-0 font-Iran text-[17px] font-bold text-black">${e.title||""}</h3>
        <img class="h-5 w-5" src="${e.titleIcon||""}" alt="" />
      </div>

      <div class="flex w-fit items-center gap-2 rounded-br-sm rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl px-3 py-0.5 ${i}">
        <img class="h-[18px] w-[18px] -scale-x-100 brightness-0 invert" src="${e.tag?.icon||""}" alt="" />
        <p class="m-0 font-Iran text-xs font-bold text-white">${e.tag?.text||""}</p>
      </div>

      <div class="mt-9 flex w-full justify-end">
        <img class="h-[120px] w-[120px] object-contain sm:h-[130px] sm:w-[130px]" src="${e.illustration||""}" alt="" />
      </div>
    </a>
  `}function Ys(e,s){return`
    <details class="group rounded-xl border border-[#f0f0f1] bg-white p-3">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-bold text-[#3f4064]">
        <span>${e||""}</span>
        <img src="./src/img/fixed-button/down.svg" alt="" class="h-5 w-5 transition-transform group-open:rotate-180" />
      </summary>
      <p class="mt-3 text-sm leading-7 text-[#3f4064]">${s||""}</p>
    </details>
  `}function Xs(){const e=document.querySelector("[data-fixed-help]");if(!e)return;const s=e.querySelector("[data-help-open]"),t=e.querySelectorAll("[data-help-close]"),i=e.querySelector("[data-help-panel]"),n=e.querySelector("[data-help-desktop-fab-close]"),r=e.querySelector("[data-help-mobile-bubble]"),l=e.querySelector("[data-help-mobile-float]");let o=!1;function a(){s.classList.add("hidden"),n.classList.remove("hidden"),n.classList.add("flex"),i.classList.remove("hidden"),i.classList.add("flex")}function c(){s.classList.remove("hidden"),n.classList.add("hidden"),n.classList.remove("flex"),i.classList.add("hidden"),i.classList.remove("flex")}function p(){const u=document.documentElement;window.scrollY/(u.scrollHeight-window.innerHeight)>=.1&&window.innerWidth<1024&&!o&&(o=!0,r?.classList.add("hidden"),setTimeout(()=>{l?.classList.remove("hidden"),l?.classList.add("animate-bounce")},2e3))}s?.addEventListener("click",a),t.forEach(u=>u.addEventListener("click",c)),document.addEventListener("keydown",u=>{u.key==="Escape"&&c()}),window.addEventListener("scroll",p,{passive:!0}),c()}function Ks(){const e=document.querySelector("[data-fixed-super]"),s=document.querySelector("[data-fixed-help]");!e||!s||N().then(t=>{const i=t.fixedSupermarket;if(i){const r=e.querySelector("[data-super-label-collapsed]"),l=e.querySelector("[data-super-title-short]"),o=e.querySelector("[data-super-tagline]"),a=e.querySelector("[data-fixed-super-basket-img]"),c=e.querySelector("[data-fixed-super-modal-title]"),p=e.querySelector("[data-fixed-super-modal-sub]"),u=e.querySelector("[data-fixed-super-cards]");r&&(r.textContent=i.buttonTitle||"سوپرمارکت"),l&&(l.textContent=i.buttonTitle||"سوپرمارکت"),o&&(o.textContent=i.buttonTagline||"تنوع بالا و پرتخفیف"),a&&(a.src=i.basketIcon||""),c&&(c.textContent=i.modalTitle||""),p&&(p.textContent=i.modalSubtitle||""),u&&Array.isArray(i.cards)&&(u.innerHTML=i.cards.map(Us).join(""))}const n=t.fixedHelp;if(n){const r=s.querySelector("[data-help-icon]"),l=s.querySelector("[data-help-icon-mobile]"),o=s.querySelector("[data-help-mobile-bubble-text]"),a=s.querySelector("[data-help-mobile-float-text]"),c=s.querySelector("[data-help-h-title]"),p=s.querySelector("[data-help-greeting]"),u=s.querySelector("[data-help-intro]"),v=s.querySelector("[data-help-faq]"),d=s.querySelector("[data-help-call]"),h=s.querySelector("[data-help-mobile-link]");r&&(r.src=n.icon||""),l&&(l.src=n.icon||""),o&&(o.textContent=n.mobileFloatingText||"پشتیبانی آنلاین"),a&&(a.textContent=n.mobileFloatingText||"پشتیبانی آنلاین"),c&&(c.textContent=n.headerTitle||"پشتیبانی آنلاین"),p&&(p.textContent=n.greeting||"سلام 👋👋"),u&&(u.textContent=n.intro||""),v&&Array.isArray(n.faq)&&(v.innerHTML=n.faq.map(x=>Ys(x.question,x.answer)).join("")),n.callUs?.href&&(d&&(d.href=n.callUs.href),h&&(h.href=n.callUs.href))}}).catch(t=>console.log(t.message)).finally(Xs)}Ks();const Qs=await N();async function Zs(){try{const e=Qs.menu.map(s=>{const t=s.text.includes("دسته")||s.type==="category";return`
        <div class="tab-menu-item flex h-full flex-col items-center justify-center gap-1">
          <a
            href="${t?"#":s.href}"
            class="tab-menu-item flex h-full flex-col items-center justify-center gap-1"
            ${t?"data-tabs-open":""}
          >
            <img src="${s.icon}" alt="" class="w-6" />
            <span class="font-Iran text-[12px] text-[#3f4064]">${s.text}</span>
          </a>
        </div>
      `});document.querySelector(".tab-menu").innerHTML=e.join("")}catch(e){console.log(e.message)}}async function Js(){try{let a=function(){return`
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M4 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm0 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm1 11a1 1 0 100 2h4a1 1 0 100-2h-4z" clip-rule="evenodd"></path>
        </svg>
      `},c=function(b){return b.map(f=>`
            <a
              href="${f.url}"
              class="block py-2 font-Iran text-[14px] leading-7 text-[#81858b]"
            >
              ${f.title}
            </a>
          `).join("")},p=function(b){return b.map(f=>`
            <div class="mb-4">
              <span class="mb-3 block font-Iran text-[14px] font-bold text-[#424750]">
                ${f.title}
              </span>

              <div class="flex flex-col">
                ${c(f.items)}
              </div>
            </div>
          `).join("")},u=function(b){return b.type==="grouped"?`
          <div class="mb-6">
            <div class="mb-4 flex items-center gap-1 border-r-2 border-r-[#ef4056] pr-3">
              <span class="font-Iran text-[15px] font-bold text-[#23254e]">
                ${b.title}
              </span>

              <img
                src="./src/img/Header/left-black.svg"
                alt=""
                class="h-4 w-4"
              />
            </div>

            ${p(b.sections)}
          </div>
        `:b.type==="simple"?`
          <div class="mb-6">
            <div class="mb-4 flex items-center gap-1 border-r-2 border-r-[#ef4056] pr-3">
              <span class="font-Iran text-[15px] font-bold text-[#23254e]">
                ${b.title}
              </span>

              <img
                src="./src/img/Header/left-black.svg"
                alt=""
                class="h-4 w-4"
              />
            </div>

            <div class="flex flex-col">
              ${c(b.items)}
            </div>
          </div>
        `:""},v=function(b){return`
        <div>
          <a
            href="${b.topLink.url}"
            class="mb-5 flex items-center gap-1 font-Iran text-[14px] text-[#008eb2]"
          >
            <span>${b.topLink.title}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="fill: #008eb2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
              ></path>
            </svg>
          </a>

          ${b.columns.map(f=>u(f)).join("")}
        </div>
      `},d=function(b){const f=t.querySelectorAll("[data-tabs-item]");f.forEach(g=>{g.classList.remove("bg-white","text-[#ef4056]","border-r-2","border-r-[#ef4056]"),g.classList.add("bg-[#f0f0f1]","text-[#424750]","border-r-transparent")});const m=f[b];m&&(m.classList.remove("bg-[#f0f0f1]","text-[#424750]","border-r-transparent"),m.classList.add("bg-white","text-[#ef4056]","border-r-2","border-r-[#ef4056]"),i.innerHTML=v(e.megaMenu[b]),i.scrollTop=0)},h=function(b){b.preventDefault(),o()&&(s.classList.remove("hidden"),s.classList.add("block"),requestAnimationFrame(()=>{r?.classList.remove("opacity-0"),l?.classList.remove("translate-x-full")}),document.body.classList.add("overflow-hidden"),d(0))},x=function(){r?.classList.add("opacity-0"),l?.classList.add("translate-x-full"),window.setTimeout(()=>{s.classList.add("hidden"),s.classList.remove("block")},280),document.body.classList.remove("overflow-hidden")};const e=await N(),s=document.querySelector("[data-tabs]"),t=document.querySelector("[data-tabs-list]"),i=document.querySelector("[data-tabs-content]"),n=document.querySelector("[data-tabs-close]"),r=document.querySelector("[data-tabs-backdrop]"),l=document.querySelector("[data-tabs-sheet]");if(!s||!t||!i)return;const o=()=>window.matchMedia("(max-width: 1023px)").matches;t.innerHTML=e.megaMenu.map((b,f)=>`
          <button
            type="button"
            class="flex min-h-[85px] w-full flex-col items-center justify-center gap-2 border-b border-[#e0e0e2] border-r-2 border-r-transparent bg-[#f0f0f1] px-2 text-[#424750] transition-colors duration-200"
            data-tabs-item
            data-tabs-index="${f}"
          >
            <span class="flex h-6 w-6 items-center justify-center text-current">
              ${a(b.icon)}
            </span>

            <span class="line-clamp-2 text-center font-Iran text-[12px] leading-5">
              ${b.title}
            </span>
          </button>
        `).join(""),t.querySelectorAll("[data-tabs-item]").forEach(b=>{b.addEventListener("click",()=>{d(Number(b.dataset.tabsIndex))})}),document.addEventListener("click",b=>{b.target.closest("[data-tabs-open]")&&h(b)}),n?.addEventListener("click",x),r?.addEventListener("click",x),document.addEventListener("keydown",b=>{b.key==="Escape"&&!s.classList.contains("hidden")&&x()})}catch(e){console.log(e.message)}}let se=window.scrollY,Z=!1;function Ye(){const e=document.querySelector("header.sticky.mobile\\:block");if(e&&window.innerWidth<1024){e.classList.remove("header-shrunk");const s=e.offsetHeight-2;e.classList.add("header-shrunk");const t=e.offsetHeight-2;document.documentElement.style.setProperty("--mob-header-normal",s+"px"),document.documentElement.style.setProperty("--mob-header-shrunk",t+"px"),Z||e.classList.remove("header-shrunk")}}function ei(){const e=window.scrollY;if(window.innerWidth>=1024){const s=document.querySelector("header.desktop\\:block .category");s&&(e>100&&e>se+5?s.classList.add("hide-category"):(e<se-5||e<=100)&&s.classList.remove("hide-category"))}if(window.innerWidth<1024){const s=document.querySelector("header.sticky.mobile\\:block");s&&(e>150&&!Z?(s.classList.add("header-shrunk"),Z=!0):e<10&&Z&&(s.classList.remove("header-shrunk"),Z=!1))}se=e}document.addEventListener("DOMContentLoaded",()=>{Ye(),se=window.scrollY});window.addEventListener("resize",Ye);window.addEventListener("scroll",ei,{passive:!0});ws();ks();ys();Ne();qe();Ue();We();$s();vs();Re();zs();_s();js();As();Os();Hs();Bs();qs();Ds();Gs();Fs();Ns();Rs();Ws();Zs();Js();
