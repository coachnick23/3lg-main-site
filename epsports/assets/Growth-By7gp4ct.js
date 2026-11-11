const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loaded-SMPR6KZF-BOaBwi7x.js","assets/index-DkBP7js6.js","assets/index-D1TeYZN9.js","assets/index-CK7GJ75e.css","assets/index-CMGeAsgc.js","assets/academy-BdI2z_F7.js","assets/AdminLayout-B5zQE--j.js","assets/loaded-JKA25A3T-D2rBvgcz.js","assets/loaded-36WRJPBT-CIarO-qV.js","assets/full-7ZJV44EE-CC-wRESF.js","assets/Render-DQXAYUBI-LK-1oFa6.js","assets/chunk-2CNEFIQP-DzZr_BMb.js","assets/Editor-44C53YAG-CLtzia7E.js"])))=>i.map(i=>d[i]);
import{o as Sh,R as fn,r as g,j as u,q as ho,t as Ur,_ as Zr,u as fi,i as Qc,c as yn,L as ma,f as Lt,C as vt,B as Et,h as eu,k as hr,N as Mi,F as Ke,g as Xt,E as _a,s as Eh,M as tu,I as Tr,e as Ch,v as Sb,D as Eb,w as Cb}from"./index-D1TeYZN9.js";import{w as Ib,E as jb}from"./academy-BdI2z_F7.js";import{AdminTitle as ya}from"./AdminLayout-B5zQE--j.js";var Pb=Object.create,ru=Object.defineProperty,Ab=Object.defineProperties,zb=Object.getOwnPropertyDescriptor,Ob=Object.getOwnPropertyDescriptors,nu=Object.getOwnPropertyNames,Vs=Object.getOwnPropertySymbols,Db=Object.getPrototypeOf,ou=Object.prototype.hasOwnProperty,Ih=Object.prototype.propertyIsEnumerable,ip=(e,t,r)=>t in e?ru(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))ou.call(t,r)&&ip(e,r,t[r]);if(Vs)for(var r of Vs(t))Ih.call(t,r)&&ip(e,r,t[r]);return e},F=(e,t)=>Ab(e,Ob(t)),Bt=(e,t)=>{var r={};for(var n in e)ou.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Vs)for(var n of Vs(e))t.indexOf(n)<0&&Ih.call(e,n)&&(r[n]=e[n]);return r},Mb=(e,t)=>function(){return e&&(t=(0,e[nu(e)[0]])(e=0)),t},Rb=(e,t)=>function(){return t||(0,e[nu(e)[0]])((t={exports:{}}).exports,t),t.exports},Tb=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of nu(t))!ou.call(e,o)&&o!==r&&ru(e,o,{get:()=>t[o],enumerable:!(n=zb(t,o))||n.enumerable});return e},Lb=(e,t,r)=>(r=e!=null?Pb(Db(e)):{},Tb(!e||!e.__esModule?ru(r,"default",{value:e,enumerable:!0}):r,e)),Se=(e,t,r)=>new Promise((n,o)=>{var i=l=>{try{a(r.next(l))}catch(c){o(c)}},s=l=>{try{a(r.throw(l))}catch(c){o(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(i,s);a((r=r.apply(e,t)).next())}),A=Mb({"../tsup-config/react-import.js"(){}});A();var jh={RichTextEditor:"_RichTextEditor_5wzos_1","RichTextEditor--editor":"_RichTextEditor--editor_5wzos_50","RichTextEditor--disabled":"_RichTextEditor--disabled_5wzos_123","RichTextEditor--isActive":"_RichTextEditor--isActive_5wzos_159","RichTextEditor-menu":"_RichTextEditor-menu_5wzos_165"},Ja,sp;function Nb(){if(sp)return Ja;sp=1,Ja=r,r.flatten=r,r.unflatten=n;function e(o){return o&&o.constructor&&typeof o.constructor.isBuffer=="function"&&o.constructor.isBuffer(o)}function t(o){return o}function r(o,i){i=i||{};const s=i.delimiter||".",a=i.maxDepth,l=i.transformKey||t,c={};function p(d,f,h){h=h||1,Object.keys(d).forEach(function(v){const m=d[v],y=i.safe&&Array.isArray(m),x=Object.prototype.toString.call(m),k=e(m),b=x==="[object Object]"||x==="[object Array]",_=f?f+s+l(v):l(v);if(!y&&!k&&b&&Object.keys(m).length&&(!i.maxDepth||h<a))return p(m,_,h+1);c[_]=m})}return p(o),c}function n(o,i){i=i||{};const s=i.delimiter||".",a=i.overwrite||!1,l=i.transformKey||t,c={};if(e(o)||Object.prototype.toString.call(o)!=="[object Object]")return o;function d(v){const m=Number(v);return isNaN(m)||v.indexOf(".")!==-1||i.object?v:m}function f(v,m,y){return Object.keys(y).reduce(function(x,k){return x[v+s+k]=y[k],x},m)}function h(v){const m=Object.prototype.toString.call(v),y=m==="[object Array]",x=m==="[object Object]";if(v){if(y)return!v.length;if(x)return!Object.keys(v).length}else return!0}return o=Object.keys(o).reduce(function(v,m){const y=Object.prototype.toString.call(o[m]);return!(y==="[object Object]"||y==="[object Array]")||h(o[m])?(v[m]=o[m],v):f(m,v,r(o[m],i))},{}),Object.keys(o).forEach(function(v){const m=v.split(s).map(l);let y=d(m.shift()),x=d(m[0]),k=c;for(;x!==void 0;){if(y==="__proto__")return;const b=Object.prototype.toString.call(k[y]),_=b==="[object Object]"||b==="[object Array]";if(!a&&!_&&typeof k[y]<"u")return;(a&&!_||!a&&k[y]==null)&&(k[y]=typeof x=="number"&&!i.object?[]:{}),k=k[y],m.length>0&&(y=d(m.shift()),x=d(m[0]))}k[y]=n(o[v],i)}),c}return Ja}var Fb=Nb();const Bb=Sh(Fb);A();A();A();var Ph=(e,t)=>Object.keys(t).reduce((r,n)=>t[n].type==="slot"?D({[n]:[]},r):r,e),iu=e=>!!e&&typeof e.then=="function",ap=e=>e.reduce((t,r)=>D(D({},t),r),{}),Bl=e=>e.some(iu),su=({value:e,fields:t,mappers:r,propKey:n="",propPath:o="",id:i="",config:s,recurseSlots:a=!1})=>{var l,c,p,d;const f=(l=t[n])==null?void 0:l.type,h=r[f];if(h&&f==="slot"){const v=e||[],m=a?v.map(y=>{if(!s.components[y.type])throw new Error(`Could not find component config for ${y.type}`);return bn(y,r,s,a)}):v;return Bl(m)?Promise.all(m):h({value:m,parentId:i,propName:o,field:t[n],propPath:o})}else if(h&&t[n])return h({value:e,parentId:i,propName:n,field:t[n],propPath:o});if(e&&typeof e=="object")if(Array.isArray(e)){const v=((c=t[n])==null?void 0:c.type)==="array"?t[n].arrayFields:null;if(!v)return e;const m=e.map((y,x)=>su({value:y,fields:v,mappers:r,propKey:n,propPath:`${o}[${x}]`,id:i,config:s,recurseSlots:a}));return Bl(m)?Promise.all(m):m}else{if("$$typeof"in e)return e;{const v=((p=t[n])==null?void 0:p.type)==="object"?t[n].objectFields:t;return Ah({value:e,fields:v,mappers:r,id:i,getPropPath:m=>`${o}.${m}`,config:s,recurseSlots:a,ownedFields:((d=t[n])==null?void 0:d.type)==="object"})}}return e},Ah=({value:e,fields:t,mappers:r,id:n,getPropPath:o,config:i,recurseSlots:s,ownedFields:a,keysToWalk:l})=>{const c=l??Object.keys(e);if(!l&&a)for(const d in t){const f=t[d].type;f!=="slot"&&r[f]&&!(d in e)&&c.push(d)}const p=c.map(d=>{const f={value:e[d],fields:t,mappers:r,propKey:d,propPath:o(d),id:n,config:i,recurseSlots:s},h=su(f);return iu(h)?h.then(v=>({[d]:v})):{[d]:h}},{});return Bl(p)?Promise.all(p).then(ap):ap(p)};function bn(e,t,r,n=!1,o=!0,i){var s,a,l,c,p;const d="type"in e?e.type:"root",f=d==="root"?r.root:(s=r.components)==null?void 0:s[d],h=Ah({value:o?Ph((a=e.props)!=null?a:{},(l=f==null?void 0:f.fields)!=null?l:{}):e.props,fields:(c=f==null?void 0:f.fields)!=null?c:{},mappers:t,id:e.props&&(p=e.props.id)!=null?p:"root",getPropPath:v=>v,config:r,recurseSlots:n,ownedFields:!0,keysToWalk:i});return iu(h)?h.then(v=>F(D({},e),{props:v})):F(D({},e),{props:h})}function zh(e,t,r){var n,o;const i=c=>bn(c,{slot:({value:p,parentId:d,propName:f})=>{var h;const v=p;return(h=r(v,{parentId:d,propName:f}))!=null?h:v}},t,!0);if("props"in e)return i(e);const s=e,a=(n=s.zones)!=null?n:{},l=s.content.map(i);return{root:i(s.root),content:(o=r(l,{parentId:"root",propName:"default-zone"}))!=null?o:l,zones:Object.keys(a).reduce((c,p)=>F(D({},c),{[p]:a[p].map(i)}),{})}}A();var hn="root",$l="default-zone",et=`${hn}:${$l}`;A();A();var $b=(e,t)=>bn(e,{slot:()=>null},t),{flatten:Wb,unflatten:Hb}=Bb,Vb=e=>e!=null&&Object.prototype.toString.call(e)==="[object Object]",Oh="__puck_[]",Dh="__puck_{}";function qb(e={}){const t={};for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const n=e[r];Array.isArray(n)&&n.length===0?t[r]=Oh:Vb(n)&&Object.keys(n).length===0?t[r]=Dh:t[r]=n}return t}function Ub(e={}){const t={};for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const n=e[r];n===Oh?t[r]=[]:n===Dh?t[r]={}:t[r]=n}return t}var Zb=(e,t)=>F(D({},e),{props:qb(Wb($b(e,t).props))}),Mh=e=>{const t=Hb(Ub(e.props));return F(D({},e),{props:t})};A();var vo=e=>"type"in e?e:F(D({},e),{props:F(D({},e.props),{id:"root"}),type:"root"});A();A();A();var Yb=e=>e?e&&e.indexOf(":")>-1?e.split(":"):[et,e]:[];function Gb(e,t,r,n=[]){Object.entries(t.zones||{}).forEach(([o,i])=>{const[s]=Yb(o);s===e.props.id&&r(n,o,i)})}function yt(e,t,r=o=>o,n=o=>o){var o;let i={};const s={},a={},l=(b,_,S,w,j)=>{var C;const[I]=_.split(":"),E=((C=r(S,_,w))!=null?C:S)||[],[z,O]=_.split(":"),L=`${j||I}:${O}`,B=E.map((N,R)=>p(N,[...b,L],R));return s[L]={contentIds:B.map(N=>N.props.id),type:w},[L,B]},c=(b,_,S)=>{Gb(b,e.data,(w,j,C)=>{const[I,E]=l(w,j,C,"dropzone",_);i[I]=E},S)},p=(b,_,S)=>{const w=n(b,_,S);if(!w)return b;const j=w.props.id,C=F(D({},bn(w,{slot:({value:B,parentId:N,propPath:R})=>{const q=B,W=`${N}:${R}`,[$,Z]=l(_,W,q,"slot",N);return Z}},t).props),{id:j});c(b,j,_);const I=F(D({},w),{props:C}),E=_[_.length-1],[z,O]=E?E.split(":"):[null,""];a[j]={data:I,flatData:Zb(I,t),path:_,parentId:z,zone:O};const L=F(D({},I),{props:D({},I.props)});return C.id==="root"&&(delete L.type,delete L.props.id),L},d=e.data.zones||{},[f,h]=l([],et,e.data.content,"root"),v=h,m=Object.keys(i);Object.keys(d||{}).forEach(b=>{const[_]=b.split(":");if(m.includes(b))return;const[S,w]=l([et],b,d[b],"dropzone",_);i[b]=w},i);let y=vo({props:D({},(o=e.data.root.props)!=null?o:e.data.root)});e.data.root.readOnly&&(y.readOnly=e.data.root.readOnly);const x=p(y,[],-1),k=D(D({},e.data.root),x);return F(D({},e),{data:{root:k,content:v,zones:D(D({},e.data.zones),i)},indexes:{nodes:D(D({},e.indexes.nodes),a),zones:D(D({},e.indexes.zones),s)}})}A();var Rh=(e,t)=>{if(t===et)return e;const r=F(D({},e),{zones:e.zones?D({},e.zones):{}});return r.zones[t]=r.zones[t]||[],r};A();A();var Kb=(e,t,r)=>{if(typeof t.state=="object"){const n=D(D({},e),t.state);return t.state.indexes?n:(console.warn("`set` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."),yt(n,r.config))}return D(D({},e),t.state(e))};A();A();var hi=(e,t,r)=>{const n=Array.from(e||[]);return n.splice(t,0,r),n};A();A();A();var Xb=new Uint8Array(16);function Jb(){return crypto.getRandomValues(Xb)}A();var Ze=[];for(let e=0;e<256;++e)Ze.push((e+256).toString(16).slice(1));function Qb(e,t=0){return(Ze[e[t+0]]+Ze[e[t+1]]+Ze[e[t+2]]+Ze[e[t+3]]+"-"+Ze[e[t+4]]+Ze[e[t+5]]+"-"+Ze[e[t+6]]+Ze[e[t+7]]+"-"+Ze[e[t+8]]+Ze[e[t+9]]+"-"+Ze[e[t+10]]+Ze[e[t+11]]+Ze[e[t+12]]+Ze[e[t+13]]+Ze[e[t+14]]+Ze[e[t+15]]).toLowerCase()}function ex(e,t,r){return!t&&!e&&crypto.randomUUID?crypto.randomUUID():tx(e,t,r)}function tx(e,t,r){var n,o,i;e=e||{};const s=(i=(o=e.random)!=null?o:(n=e.rng)==null?void 0:n.call(e))!=null?i:Jb();if(s.length<16)throw new Error("Random bytes length must be >= 16");if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){if(r=r||0,r<0||r+16>t.length)throw new RangeError(`UUID byte range ${r}:${r+15} is out of buffer bounds`);for(let a=0;a<16;++a)t[r+a]=s[a];return t}return Qb(s)}var lp=ex,pt=e=>e?`${e}-${lp()}`:lp();A();var vi=(e,t)=>{const[r]=e.split(":"),n=t.indexes.nodes[r];return((n==null?void 0:n.path)||[]).map(o=>o.split(":")[0])};A();var au=(e,t,r=!1)=>{const n=pt(e.type);return zh(F(D({},e),{props:r?F(D({},e.props),{id:n}):D({},e.props)}),t,o=>o.map(i=>{const s=pt(i.type);return F(D({},i),{props:r?F(D({},i.props),{id:s}):D({id:s},i.props)})}))};function Th(e,t,r){const n=t.id||pt(t.componentType),o=au({type:t.componentType,props:F(D({},r.config.components[t.componentType].defaultProps||{}),{id:n})},r.config),[i]=t.destinationZone.split(":"),s=vi(t.destinationZone,e);return yt(e,r.config,(a,l)=>l===t.destinationZone?hi(a||[],t.destinationIndex,o):a,(a,l)=>a.props.id===n||a.props.id===i||s.includes(a.props.id)||l.includes(t.destinationZone)?a:null)}A();var rx=(e,t,r)=>{const[n]=t.destinationZone.split(":"),o=vi(t.destinationZone,e),i=e.indexes.zones[t.destinationZone].contentIds[t.destinationIndex];if(i!==t.data.props.id)throw new Error(`Can't change the id during a replace action. Please us "remove" and "insert" to define a new node.`);const a=[],l=zh(t.data,r.config,(p,d)=>(a.push(`${d.parentId}:${d.propName}`),p.map(f=>{const h=pt(f.type);return F(D({},f),{props:D({id:h},f.props)})}))),c=F(D({},e),{ui:D(D({},e.ui),t.ui)});return Object.keys(e.indexes.zones).forEach(p=>{p.split(":")[0]===i&&(a.includes(p)||delete c.indexes.zones[p])}),yt(c,r.config,(p,d)=>{const f=[...p];return d===t.destinationZone&&(f[t.destinationIndex]=l),f},(p,d)=>{const f=d.map(h=>h.split(":")[0]);return p.props.id===l.props.id?l:p.props.id===n||o.indexOf(p.props.id)>-1||f.indexOf(l.props.id)>-1?p:null})};A();var nx=(e,t,r)=>yt(e,r.config,n=>n,n=>n.props.id==="root"?F(D({},n),{props:D(D({},n.props),t.root.props),readOnly:t.root.readOnly}):n);A();A();function rt(e,t){var r,n;const o=(r=t.indexes.zones)==null?void 0:r[e.zone||et];return o?(n=t.indexes.nodes[o.contentIds[e.index]])==null?void 0:n.data:void 0}function ox(e,t,r){const n=rt({index:t.sourceIndex,zone:t.sourceZone},e),o=vi(t.sourceZone,e),i=F(D({},n),{props:F(D({},n.props),{id:pt(n.type)})}),s=yt(e,r.config,(a,l)=>l===t.sourceZone?hi(a,t.sourceIndex+1,n):a,(a,l,c)=>{const p=l[l.length-1];if(l.map(h=>h.split(":")[0]).indexOf(i.props.id)>-1)return F(D({},a),{props:F(D({},a.props),{id:pt(a.type)})});if(p===t.sourceZone&&c===t.sourceIndex+1)return i;const[f]=t.sourceZone.split(":");return f===a.props.id||o.indexOf(a.props.id)>-1?a:null});return F(D({},s),{ui:F(D({},s.ui),{itemSelector:{index:t.sourceIndex+1,zone:t.sourceZone}})})}A();A();A();var Wl=(e,t)=>{const r=Array.from(e);return r.splice(t,1),r},Lh=(e,t,r)=>{if(t.sourceZone===t.destinationZone&&t.sourceIndex===t.destinationIndex)return e;const n=rt({zone:t.sourceZone,index:t.sourceIndex},e);if(!n)return e;const o=vi(t.sourceZone,e),i=vi(t.destinationZone,e);return yt(e,r.config,(s,a)=>a===t.sourceZone&&a===t.destinationZone?hi(Wl(s,t.sourceIndex),t.destinationIndex,n):a===t.sourceZone?Wl(s,t.sourceIndex):a===t.destinationZone?hi(s,t.destinationIndex,n):s,(s,a)=>{const[l]=t.sourceZone.split(":"),[c]=t.destinationZone.split(":"),p=s.props.id;return l===p||c===p||n.props.id===p||o.indexOf(p)>-1||i.indexOf(p)>-1||a.includes(t.destinationZone)?s:null})},ix=(e,t,r)=>Lh(e,{sourceIndex:t.sourceIndex,sourceZone:t.destinationZone,destinationIndex:t.destinationIndex,destinationZone:t.destinationZone},r);A();var sx=(e,t,r)=>{const n=rt({index:t.index,zone:t.zone},e),o=new Set([n.props.id]);Object.entries(e.indexes.nodes).forEach(([a,l])=>{l.path.map(p=>p.split(":")[0]).includes(n.props.id)&&o.add(a)});const i=yt(e,r.config,(a,l)=>l===t.zone?Wl(a,t.index):a);Object.keys(i.data.zones||{}).forEach(a=>{const l=a.split(":")[0];o.has(l)&&i.data.zones&&delete i.data.zones[a]}),Object.keys(i.indexes.zones).forEach(a=>{const l=a.split(":")[0];o.has(l)&&delete i.indexes.zones[a]});const s=D({},i.ui.itemExpanded);return o.forEach(a=>{delete i.indexes.nodes[a],delete s[a]}),i.ui=F(D({},i.ui),{itemExpanded:s}),i};A();var Es={};function ax(e,t){return Es[t.zone]?F(D({},e),{data:F(D({},e.data),{zones:F(D({},e.data.zones),{[t.zone]:Es[t.zone]})}),indexes:F(D({},e.indexes),{zones:F(D({},e.indexes.zones),{[t.zone]:F(D({},e.indexes.zones[t.zone]),{contentIds:Es[t.zone].map(r=>r.props.id),type:"dropzone"})})})}):F(D({},e),{data:Rh(e.data,t.zone)})}function lx(e,t){const r=D({},e.data.zones||{}),n=D({},e.indexes.zones||{});return r[t.zone]&&(Es[t.zone]=r[t.zone],delete r[t.zone]),delete n[t.zone],F(D({},e),{data:F(D({},e.data),{zones:r}),indexes:F(D({},e.indexes),{zones:n})})}A();var cx=(e,t,r)=>typeof t.data=="object"?(console.warn("`setData` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."),yt(F(D({},e),{data:D(D({},e.data),t.data)}),r.config)):yt(F(D({},e),{data:D(D({},e.data),t.data(e.data))}),r.config);A();var ux=(e,t)=>{var r,n;const o=t.itemSelector;if(!o)return t;const i=rt(o,e);if(!i)return t;const a=((n=(r=e.indexes.nodes[i.props.id])==null?void 0:r.path)!=null?n:[]).map(c=>c.split(":")[0]).filter(c=>{var p,d;return c&&c!==hn&&!((p=e.ui.itemExpanded)!=null&&p[c])&&!((d=t.itemExpanded)!=null&&d[c])});if(a.length===0)return t;const l=D(D({},e.ui.itemExpanded),t.itemExpanded);return a.forEach(c=>{l[c]=!0}),F(D({},t),{itemExpanded:l})},dx=(e,t)=>{const r=typeof t.ui=="object"?t.ui:t.ui(e.ui);return F(D({},e),{ui:D(D({},e.ui),ux(e,r))})};A();var gi=e=>{const{data:t,ui:r}=e;return{data:t,ui:r}};A();function px(e,t,r){return(n,o)=>{const i=e(n,o),s=!["registerZone","unregisterZone","setData","setUi","set"].includes(o.type);return(typeof o.recordHistory<"u"?o.recordHistory:s)&&t&&t(i),r==null||r(o,gi(i),gi(n)),i}}function cp({record:e,onAction:t,appStore:r}){return px((n,o)=>o.type==="set"?Kb(n,o,r):o.type==="insert"?Th(n,o,r):o.type==="replace"?rx(n,o,r):o.type==="replaceRoot"?nx(n,o,r):o.type==="duplicate"?ox(n,o,r):o.type==="reorder"?ix(n,o,r):o.type==="move"?Lh(n,o,r):o.type==="remove"?sx(n,o,r):o.type==="registerZone"?ax(n,o):o.type==="unregisterZone"?lx(n,o):o.type==="setData"?cx(n,o,r):o.type==="setUi"?dx(n,o):n,e,t)}var fx=Object.getOwnPropertyNames,hx=Object.getOwnPropertySymbols,vx=Object.prototype.hasOwnProperty;function up(e,t){return function(n,o,i){return e(n,o,i)&&t(n,o,i)}}function es(e){return function(r,n,o){if(!r||!n||typeof r!="object"||typeof n!="object")return e(r,n,o);var i=o.cache,s=i.get(r),a=i.get(n);if(s&&a)return s===n&&a===r;i.set(r,n),i.set(n,r);var l=e(r,n,o);return i.delete(r),i.delete(n),l}}function dp(e){return fx(e).concat(hx(e))}var gx=Object.hasOwn||(function(e,t){return vx.call(e,t)});function xn(e,t){return e===t||!e&&!t&&e!==e&&t!==t}var mx="__v",_x="__o",yx="_owner",pp=Object.getOwnPropertyDescriptor,fp=Object.keys;function bx(e,t,r){var n=e.length;if(t.length!==n)return!1;for(;n-- >0;)if(!r.equals(e[n],t[n],n,n,e,t,r))return!1;return!0}function xx(e,t){return xn(e.getTime(),t.getTime())}function kx(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function wx(e,t){return e===t}function hp(e,t,r){var n=e.size;if(n!==t.size)return!1;if(!n)return!0;for(var o=new Array(n),i=e.entries(),s,a,l=0;(s=i.next())&&!s.done;){for(var c=t.entries(),p=!1,d=0;(a=c.next())&&!a.done;){if(o[d]){d++;continue}var f=s.value,h=a.value;if(r.equals(f[0],h[0],l,d,e,t,r)&&r.equals(f[1],h[1],f[0],h[0],e,t,r)){p=o[d]=!0;break}d++}if(!p)return!1;l++}return!0}var Sx=xn;function Ex(e,t,r){var n=fp(e),o=n.length;if(fp(t).length!==o)return!1;for(;o-- >0;)if(!Nh(e,t,r,n[o]))return!1;return!0}function Lo(e,t,r){var n=dp(e),o=n.length;if(dp(t).length!==o)return!1;for(var i,s,a;o-- >0;)if(i=n[o],!Nh(e,t,r,i)||(s=pp(e,i),a=pp(t,i),(s||a)&&(!s||!a||s.configurable!==a.configurable||s.enumerable!==a.enumerable||s.writable!==a.writable)))return!1;return!0}function Cx(e,t){return xn(e.valueOf(),t.valueOf())}function Ix(e,t){return e.source===t.source&&e.flags===t.flags}function vp(e,t,r){var n=e.size;if(n!==t.size)return!1;if(!n)return!0;for(var o=new Array(n),i=e.values(),s,a;(s=i.next())&&!s.done;){for(var l=t.values(),c=!1,p=0;(a=l.next())&&!a.done;){if(!o[p]&&r.equals(s.value,a.value,s.value,a.value,e,t,r)){c=o[p]=!0;break}p++}if(!c)return!1}return!0}function jx(e,t){var r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(e[r]!==t[r])return!1;return!0}function Px(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function Nh(e,t,r,n){return(n===yx||n===_x||n===mx)&&(e.$$typeof||t.$$typeof)?!0:gx(t,n)&&r.equals(e[n],t[n],n,n,e,t,r)}var Ax="[object Arguments]",zx="[object Boolean]",Ox="[object Date]",Dx="[object Error]",Mx="[object Map]",Rx="[object Number]",Tx="[object Object]",Lx="[object RegExp]",Nx="[object Set]",Fx="[object String]",Bx="[object URL]",$x=Array.isArray,gp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,mp=Object.assign,Wx=Object.prototype.toString.call.bind(Object.prototype.toString);function Hx(e){var t=e.areArraysEqual,r=e.areDatesEqual,n=e.areErrorsEqual,o=e.areFunctionsEqual,i=e.areMapsEqual,s=e.areNumbersEqual,a=e.areObjectsEqual,l=e.arePrimitiveWrappersEqual,c=e.areRegExpsEqual,p=e.areSetsEqual,d=e.areTypedArraysEqual,f=e.areUrlsEqual;return function(v,m,y){if(v===m)return!0;if(v==null||m==null)return!1;var x=typeof v;if(x!==typeof m)return!1;if(x!=="object")return x==="number"?s(v,m,y):x==="function"?o(v,m,y):!1;var k=v.constructor;if(k!==m.constructor)return!1;if(k===Object)return a(v,m,y);if($x(v))return t(v,m,y);if(gp!=null&&gp(v))return d(v,m,y);if(k===Date)return r(v,m,y);if(k===RegExp)return c(v,m,y);if(k===Map)return i(v,m,y);if(k===Set)return p(v,m,y);var b=Wx(v);return b===Ox?r(v,m,y):b===Lx?c(v,m,y):b===Mx?i(v,m,y):b===Nx?p(v,m,y):b===Tx?typeof v.then!="function"&&typeof m.then!="function"&&a(v,m,y):b===Bx?f(v,m,y):b===Dx?n(v,m,y):b===Ax?a(v,m,y):b===zx||b===Rx||b===Fx?l(v,m,y):!1}}function Vx(e){var t=e.circular,r=e.createCustomConfig,n=e.strict,o={areArraysEqual:n?Lo:bx,areDatesEqual:xx,areErrorsEqual:kx,areFunctionsEqual:wx,areMapsEqual:n?up(hp,Lo):hp,areNumbersEqual:Sx,areObjectsEqual:n?Lo:Ex,arePrimitiveWrappersEqual:Cx,areRegExpsEqual:Ix,areSetsEqual:n?up(vp,Lo):vp,areTypedArraysEqual:n?Lo:jx,areUrlsEqual:Px};if(r&&(o=mp({},o,r(o))),t){var i=es(o.areArraysEqual),s=es(o.areMapsEqual),a=es(o.areObjectsEqual),l=es(o.areSetsEqual);o=mp({},o,{areArraysEqual:i,areMapsEqual:s,areObjectsEqual:a,areSetsEqual:l})}return o}function qx(e){return function(t,r,n,o,i,s,a){return e(t,r,a)}}function Ux(e){var t=e.circular,r=e.comparator,n=e.createState,o=e.equals,i=e.strict;if(n)return function(l,c){var p=n(),d=p.cache,f=d===void 0?t?new WeakMap:void 0:d,h=p.meta;return r(l,c,{cache:f,equals:o,meta:h,strict:i})};if(t)return function(l,c){return r(l,c,{cache:new WeakMap,equals:o,meta:void 0,strict:i})};var s={cache:void 0,equals:o,meta:void 0,strict:i};return function(l,c){return r(l,c,s)}}var mi=Yr();Yr({strict:!0});Yr({circular:!0});Yr({circular:!0,strict:!0});Yr({createInternalComparator:function(){return xn}});Yr({strict:!0,createInternalComparator:function(){return xn}});Yr({circular:!0,createInternalComparator:function(){return xn}});Yr({circular:!0,createInternalComparator:function(){return xn},strict:!0});function Yr(e){e===void 0&&(e={});var t=e.circular,r=t===void 0?!1:t,n=e.createInternalComparator,o=e.createState,i=e.strict,s=i===void 0?!1:i,a=Vx(e),l=Hx(a),c=n?n(l):qx(l);return Ux({circular:r,comparator:l,createState:o,equals:c,strict:s})}A();var _i=[{width:360,height:"auto",icon:"Smartphone",label:"Small"},{width:768,height:"auto",icon:"Tablet",label:"Medium"},{width:1280,height:"auto",icon:"Monitor",label:"Large"},{width:"100%",height:"auto",icon:"FullWidth",label:"Full-width"}];A();A();var lu=(e,t)=>e?Object.keys(e.props||{}).reduce((r,n)=>{const o=(e==null?void 0:e.props)||{},i=(t==null?void 0:t.props)||{};return F(D({},r),{[n]:!mi(i[n],o[n])})},{}):{},Zx={lastChange:{}},Fh=(e,t,...r)=>Se(null,[e,t,...r],function*(n,o,i={},s,a,l="replace",c=null,p={props:{}},d=Zx){const f="type"in n&&n.type!=="root"?o.components[n.type]:o.root,h=D({},n),v=(f==null?void 0:f.resolveData)&&n.props,m="id"in n.props?n.props.id:"root";if(v){const{item:k=null,resolved:b={},parentId:_=null}=d.lastChange[m]||{},w=!(_===null)&&(c==null?void 0:c.props.id)!==_,j=n&&!mi(n,k);if(l==="move"&&!w||l!=="move"&&l!=="force"&&!j)return{node:b,didChange:!1};const I=lu(n,k);s&&s(n);const{props:E,readOnly:z={}}=yield f.resolveData(n,{changed:I,lastData:k,metadata:D(D({},i),f.metadata),trigger:l,parent:c,root:p});h.props=D(D({},n.props),E),Object.keys(z).length&&(h.readOnly=z)}const y=vo(h);let x=yield bn(h,{slot:k=>Se(null,[k],function*({value:b}){const _=b;return yield Promise.all(_.map(S=>Se(null,null,function*(){return(yield Fh(S,o,i,s,a,l,y,p,d)).node})))})},o);return v&&a&&a(h),d.lastChange[m]={item:n,resolved:x,parentId:c==null?void 0:c.props.id},{node:x,didChange:!mi(n,x)}});A();var Hl={data:{content:[],root:{},zones:{}},ui:{leftSideBarVisible:!0,rightSideBarVisible:!0,arrayState:{},itemSelector:null,componentList:{},isDragging:!1,itemExpanded:{},previewMode:"edit",viewports:{current:{width:_i[0].width,height:_i[0].height||"auto"},options:[],controlsVisible:!0},field:{focus:null},plugin:{current:null}},indexes:{nodes:{},zones:{}}},Yx=Rb({"../../node_modules/classnames/index.js"(e,t){A(),(function(){var r={}.hasOwnProperty;function n(){for(var s="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(s=i(s,o(l)))}return s}function o(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var a="";for(var l in s)r.call(s,l)&&s[l]&&(a=i(a,l));return a}function i(s,a){return a?s?s+" "+a:s+a:s}typeof t<"u"&&t.exports?(n.default=n,t.exports=n):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return n}):window.classNames=n})()}});A();var Gx=Lb(Yx()),Kx=(e,t,r={baseClass:""})=>(n={})=>{if(typeof n=="string"){const o=n;return t[`${e}-${o}`]&&r.baseClass+t[`${e}-${o}`]||""}else if(typeof n=="object"){const o=n,i={};for(let a in o)i[t[`${e}--${a}`]]=o[a];const s=t[e];return r.baseClass+(0,Gx.default)(D({[s]:!!s},i))}else return r.baseClass+t[e]||""},ee=Kx;/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/const _p=e=>{let t;const r=new Set,n=(c,p)=>{const d=typeof c=="function"?c(t):c;if(!Object.is(d,t)){const f=t;t=p??(typeof d!="object"||d===null)?d:Object.assign({},t,d),r.forEach(h=>h(t,f))}},o=()=>t,a={setState:n,getState:o,getInitialState:()=>l,subscribe:c=>(r.add(c),()=>r.delete(c))},l=t=e(n,o,a);return a},Gr=(e=>e?_p(e):_p),Xx=e=>e;function ba(e,t=Xx){const r=fn.useSyncExternalStore(e.subscribe,fn.useCallback(()=>t(e.getState()),[e,t]),()=>t(e.getInitialState()));return fn.useDebugValue(r),r}const yp=e=>{const t=Gr(e),r=n=>ba(t,n);return Object.assign(r,t),r},Bh=(e=>e?yp(e):yp),Jx=e=>(t,r,n)=>{const o=n.subscribe;return n.subscribe=((s,a,l)=>{let c=s;if(a){const p=(l==null?void 0:l.equalityFn)||Object.is;let d=s(n.getState());c=f=>{const h=s(f);if(!p(d,h)){const v=d;a(d=h,v)}},l!=null&&l.fireImmediately&&a(d,d)}return o(c)}),e(t,r,n)},cu=Jx;var Nt=globalThis!=null&&globalThis.document?g.useLayoutEffect:()=>{},Qx=Object.defineProperty,go=(e,t)=>Qx(e,"name",{value:t,configurable:!0}),$h=!!(typeof window<"u"&&window.document&&window.document.createElement);function Lr(e,t,{checkForDefaultPrevented:r=!0}={}){return go(function(o){if(e==null||e(o),r===!1||!o||!o.defaultPrevented)return t==null?void 0:t(o)},"handleEvent")}go(Lr,"composeEventHandlers");function ek(e){var t;if(!$h)throw new Error("Cannot access window outside of the DOM");return((t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView)??window}go(ek,"getOwnerWindow");function Vl(e){if(!$h)throw new Error("Cannot access document outside of the DOM");return(e==null?void 0:e.ownerDocument)??document}go(Vl,"getOwnerDocument");function Wh(e,t=!1){const{activeElement:r}=Vl(e);if(!(r!=null&&r.nodeName))return null;if(Hh(r)&&r.contentDocument)return Wh(r.contentDocument.body,t);if(t){const n=r.getAttribute("aria-activedescendant");if(n){const o=Vl(r).getElementById(n);if(o)return o}}return r}go(Wh,"getActiveElement");function Hh(e){return e.tagName==="IFRAME"}go(Hh,"isFrame");var tk=Object.defineProperty,uu=(e,t)=>tk(e,"name",{value:t,configurable:!0});function ql(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}uu(ql,"setRef");function Vh(...e){return t=>{let r=!1;const n=e.map(o=>{const i=ql(o,t);return!r&&typeof i=="function"&&(r=!0),i});if(r)return()=>{for(let o=0;o<n.length;o++){const i=n[o];typeof i=="function"?i():ql(e[o],null)}}}}uu(Vh,"composeRefs");function _r(...e){return g.useCallback(Vh(...e),e)}uu(_r,"useComposedRefs");var rk=Object.defineProperty,wt=(e,t)=>rk(e,"name",{value:t,configurable:!0});function nk(e,t){const r=g.createContext(t);r.displayName=e+"Context";const n=wt(i=>{const{children:s,...a}=i,l=g.useMemo(()=>a,Object.values(a));return u.jsx(r.Provider,{value:l,children:s})},"Provider");n.displayName=e+"Provider";function o(i,s={}){const{optional:a=!1}=s,l=g.useContext(r);if(l)return l;if(t!==void 0)return t;if(!a)throw new Error(`\`${i}\` must be used within \`${e}\``)}return wt(o,"useContext"),[n,o]}wt(nk,"createContext");function du(e,t=[]){let r=[];function n(i,s){const a=g.createContext(s);a.displayName=i+"Context";const l=r.length;r=[...r,s];const c=wt(d=>{var x;const{scope:f,children:h,...v}=d,m=((x=f==null?void 0:f[e])==null?void 0:x[l])||a,y=g.useMemo(()=>v,Object.values(v));return u.jsx(m.Provider,{value:y,children:h})},"Provider");c.displayName=i+"Provider";function p(d,f,h={}){var x;const{optional:v=!1}=h,m=((x=f==null?void 0:f[e])==null?void 0:x[l])||a,y=g.useContext(m);if(y)return y;if(s!==void 0)return s;if(!v)throw new Error(`\`${d}\` must be used within \`${i}\``)}return wt(p,"useContext"),[c,p]}wt(n,"createContext");const o=wt(()=>{const i=r.map(s=>g.createContext(s));return wt(function(a){const l=(a==null?void 0:a[e])||i;return g.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])},"useScope")},"createScope");return o.scopeName=e,[n,qh(o,...t)]}wt(du,"createContextScope");function qh(...e){const t=e[0];if(e.length===1)return t;const r=wt(()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return wt(function(i){const s=n.reduce((a,{useScope:l,scopeName:c})=>{const d=l(i)[`__scope${c}`];return{...a,...d}},{});return g.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])},"useComposedScopes")},"createScope");return r.scopeName=t.scopeName,r}wt(qh,"composeContextScopes");var ok=Object.defineProperty,bt=(e,t)=>ok(e,"name",{value:t,configurable:!0});function pu(e){const t=g.forwardRef((r,n)=>{let{children:o,...i}=r,s=null,a=!1;const l=[];o=Xh(o),g.Children.forEach(o,f=>{var h;if(Gh(f)){a=!0;const v=f;let m="child"in v.props?v.props.child:v.props.children;for(;fu(m)&&typeof qs=="function";)m=qs(m._payload);s=sk(v,m),l.push((h=s==null?void 0:s.props)==null?void 0:h.children)}else l.push(f)}),s?s=g.cloneElement(s,void 0,l):!a&&g.Children.count(o)===1&&g.isValidElement(o)&&(s=o);const c=s?Yh(s):void 0,p=_r(n,c);if(!s){if(o||o===0)throw new Error(a?ck(e):lk(e));return o}const d=Zh(i,s.props??{});return s.type!==g.Fragment&&(d.ref=n?p:c),g.cloneElement(s,d)});return t.displayName=`${e}.Slot`,t}bt(pu,"createSlot");var Uh=Symbol.for("radix.slottable");function ik(e){const t=bt(r=>"child"in r?r.children(r.child):r.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Uh,t}bt(ik,"createSlottable");var sk=bt((e,t)=>"child"in e.props?g.isValidElement(t)?g.cloneElement(t,void 0,e.props.children(t.props.children)):null:g.isValidElement(t)?t:null,"getSlottableElementFromSlottable");function Zh(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...a)=>{const l=i(...a);return o(...a),l}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"?r[n]=[o,i].filter(Boolean).join(" "):n==="aria-describedby"&&(r[n]=Jh(i,o))}return{...e,...r}}bt(Zh,"mergeProps");function Yh(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}bt(Yh,"getElementRef");function Gh(e){return g.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Uh}bt(Gh,"isSlottable");var ak=Symbol.for("react.lazy");function fu(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===ak&&"_payload"in e&&Kh(e._payload)}bt(fu,"isLazyComponent");function Kh(e){return typeof e=="object"&&e!==null&&"then"in e}bt(Kh,"isPromiseLike");function Xh(e){let t=e;for(;fu(t)&&typeof qs=="function";)t=qs(t._payload);return t}bt(Xh,"useUnwrappedLazy");function Jh(...e){const t=new Set;for(const r of e)if(typeof r=="string")for(const n of String(r).trim().split(/\s+/))n&&t.add(n);return t.size>0?Array.from(t).join(" "):void 0}bt(Jh,"concatAriaDescribedby");var lk=bt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),ck=bt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),qs=ho[" use ".trim().toString()],uk=Object.defineProperty,dk=(e,t)=>uk(e,"name",{value:t,configurable:!0}),pk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],mo=pk.reduce((e,t)=>{const r=pu(`Primitive.${t}`),n=g.forwardRef((o,i)=>{const{asChild:s,...a}=o,l=s?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),u.jsx(l,{...a,ref:i})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Qh(e,t){e&&Ur.flushSync(()=>e.dispatchEvent(t))}dk(Qh,"dispatchDiscreteCustomEvent");var fk=Object.defineProperty,hk=(e,t)=>fk(e,"name",{value:t,configurable:!0}),bp=ho[" useInsertionEffect ".trim().toString()];function vn(e){const t=g.useRef(e);return typeof bp=="function"?bp(()=>{t.current=e}):Nt(()=>{t.current=e}),g.useMemo(()=>((...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)}),[])}hk(vn,"useCallbackRef");var vk=Object.defineProperty,He=(e,t)=>vk(e,"name",{value:t,configurable:!0}),Ul="dismissableLayer.update",gk="dismissableLayer.pointerDownOutside",mk="dismissableLayer.focusOutside",xp,ev=g.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),_k=g.forwardRef(He(function(t,r){const{disableOutsidePointerEvents:n=!1,deferPointerDownOutside:o=!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:a,onInteractOutside:l,onDismiss:c,...p}=t,d=g.useContext(ev),[f,h]=g.useState(null),v=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=g.useState({}),y=_r(r,h),x=Array.from(d.layers),[k]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),b=k?x.indexOf(k):-1,_=f?x.indexOf(f):-1,S=d.layersWithOutsidePointerEventsDisabled.size>0,w=_>=b,j=g.useRef(!1),C=tv(O=>{s==null||s(O),l==null||l(O),O.defaultPrevented||c==null||c()},{ownerDocument:v,deferPointerDownOutside:o,isDeferredPointerDownOutsideRef:j,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:g.useCallback(O=>{if(!(O instanceof Node))return!1;const L=[...d.branches].some(B=>B.contains(O));return w&&!L},[d.branches,w])}),I=rv(O=>{if(o&&j.current)return;const L=O.target;[...d.branches].some(N=>N.contains(L))||(a==null||a(O),l==null||l(O),O.defaultPrevented||c==null||c())},v),E=f?_===x.length-1:!1,z=vn(O=>{O.key==="Escape"&&(i==null||i(O),!O.defaultPrevented&&c&&(O.preventDefault(),c()))});return g.useEffect(()=>{if(E)return v.addEventListener("keydown",z,{capture:!0}),()=>v.removeEventListener("keydown",z,{capture:!0})},[v,E,z]),g.useEffect(()=>{if(f)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(xp=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),Zl(),()=>{n&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(v.body.style.pointerEvents=xp))}},[f,v,n,d]),g.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),Zl())},[f,d]),g.useEffect(()=>{const O=He(()=>m({}),"handleUpdate");return document.addEventListener(Ul,O),()=>document.removeEventListener(Ul,O)},[]),u.jsx(mo.div,{...p,ref:y,style:{pointerEvents:S?w?"auto":"none":void 0,...t.style},onFocusCapture:Lr(t.onFocusCapture,I.onFocusCapture),onBlurCapture:Lr(t.onBlurCapture,I.onBlurCapture),onPointerDownCapture:Lr(t.onPointerDownCapture,C.onPointerDownCapture)})},"DismissableLayer"));function yk(){const e=g.useContext(ev),[t,r]=g.useState(null);return g.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),r}He(yk,"useDismissableLayerSurface");var bk=He(()=>!0,"IS_TRUE");function tv(e,t){const{ownerDocument:r=globalThis==null?void 0:globalThis.document,deferPointerDownOutside:n=!1,isDeferredPointerDownOutsideRef:o,dismissableSurfaces:i,shouldHandlePointerDownOutside:s=bk}=t,a=vn(e),l=g.useRef(!1),c=g.useRef(!1),p=g.useRef(new Map),d=g.useRef(()=>{});return g.useEffect(()=>{function f(){c.current=!1,o.current=!1,p.current.clear()}He(f,"resetOutsideInteraction");function h(){return Array.from(p.current.values()).some(Boolean)}He(h,"isOutsideInteractionIntercepted");function v(b){if(!c.current)return;const _=b.target;_ instanceof Node&&[...i].some(w=>w.contains(_))||p.current.set(b.type,!0),b.type==="click"&&window.setTimeout(()=>{c.current&&d.current()},0)}He(v,"handleInteractionCapture");function m(b){c.current&&p.current.set(b.type,!1)}He(m,"handleInteractionBubble");const y=He(b=>{if(b.target&&!l.current){let _=function(){r.removeEventListener("click",d.current);const w=h();f(),w||hu(gk,a,S,{discrete:!0})};if(He(_,"handleAndDispatchPointerDownOutsideEvent"),!s(b.target)){r.removeEventListener("click",d.current),f(),l.current=!1;return}const S={originalEvent:b};c.current=!0,o.current=n&&b.button===0,p.current.clear(),!n||b.button!==0?_():(r.removeEventListener("click",d.current),d.current=_,r.addEventListener("click",d.current,{once:!0}))}else r.removeEventListener("click",d.current),f();l.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const b of x)r.addEventListener(b,v,!0),r.addEventListener(b,m);const k=window.setTimeout(()=>{r.addEventListener("pointerdown",y)},0);return()=>{window.clearTimeout(k),r.removeEventListener("pointerdown",y),r.removeEventListener("click",d.current);for(const b of x)r.removeEventListener(b,v,!0),r.removeEventListener(b,m)}},[r,a,n,o,i,s]),{onPointerDownCapture:He(()=>l.current=!0,"onPointerDownCapture")}}He(tv,"usePointerDownOutside");function rv(e,t=globalThis==null?void 0:globalThis.document){const r=vn(e),n=g.useRef(!1);return g.useEffect(()=>{const o=He(i=>{i.target&&!n.current&&hu(mk,r,{originalEvent:i},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,r]),{onFocusCapture:He(()=>n.current=!0,"onFocusCapture"),onBlurCapture:He(()=>n.current=!1,"onBlurCapture")}}He(rv,"useFocusOutside");function Zl(){const e=new CustomEvent(Ul);document.dispatchEvent(e)}He(Zl,"dispatchUpdate");function hu(e,t,r,{discrete:n}){const o=r.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),n?Qh(o,i):o.dispatchEvent(i)}He(hu,"handleAndDispatchCustomEvent");var xk=Object.defineProperty,vu=(e,t)=>xk(e,"name",{value:t,configurable:!0}),ts=0,Vt=null;function kk(e){return gu(),e.children}vu(kk,"FocusGuards");function gu(){g.useEffect(()=>{Vt||(Vt={start:Yl(),end:Yl()});const{start:e,end:t}=Vt;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),ts++,()=>{ts===1&&(Vt==null||Vt.start.remove(),Vt==null||Vt.end.remove(),Vt=null),ts=Math.max(0,ts-1)}},[])}vu(gu,"useFocusGuards");function Yl(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}vu(Yl,"createFocusGuard");var wk=Object.defineProperty,Te=(e,t)=>wk(e,"name",{value:t,configurable:!0}),Qa="focusScope.autoFocusOnMount",el="focusScope.autoFocusOnUnmount",kp={bubbles:!1,cancelable:!0},Sk=g.forwardRef(Te(function(t,r){const{loop:n=!1,trapped:o=!1,branches:i,onMountAutoFocus:s,onUnmountAutoFocus:a,...l}=t,[c,p]=g.useState(null),d=vn(s),f=vn(a),h=g.useRef(null),v=_r(r,p),m=g.useRef(i);g.useEffect(()=>{m.current=i});const y=g.useCallback(b=>{var _;return b?c!=null&&c.contains(b)?!0:!!((_=m.current)!=null&&_.some(S=>S.contains(b))):!1},[c]),x=g.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;g.useEffect(()=>{if(o){let b=function(j){if(x.paused||!c)return;const C=j.target;y(C)?h.current=C:lr(h.current,{select:!0})},_=function(j){if(x.paused||!c)return;const C=j.relatedTarget;C!==null&&(y(C)||lr(h.current,{select:!0}))},S=function(j){if(document.activeElement===document.body)for(const I of j)I.removedNodes.length>0&&lr(c)};Te(b,"handleFocusIn"),Te(_,"handleFocusOut"),Te(S,"handleMutations"),document.addEventListener("focusin",b),document.addEventListener("focusout",_);const w=new MutationObserver(S);return c&&w.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",b),document.removeEventListener("focusout",_),w.disconnect()}}},[o,c,x.paused,y]),g.useEffect(()=>{if(c){wp.add(x);const b=document.activeElement;if(!c.contains(b)){const S=new CustomEvent(Qa,kp);c.addEventListener(Qa,d),c.dispatchEvent(S),S.defaultPrevented||(av(pv(mu(c)),{select:!0}),document.activeElement===b&&lr(c))}return()=>{c.removeEventListener(Qa,d);const S=c.ownerDocument,w=CustomEvent;setTimeout(()=>{const j=new w(el,kp);c.addEventListener(el,f),c.dispatchEvent(j),j.defaultPrevented||lr(b??S.body,{select:!0}),c.removeEventListener(el,f),wp.remove(x)},0)}}},[c,d,f,x]);const k=g.useCallback(b=>{if(!n&&!o||x.paused)return;const _=b.key==="Tab"&&!b.altKey&&!b.ctrlKey&&!b.metaKey,S=document.activeElement;if(_&&S){const w=b.currentTarget,[j,C]=lv(w);j&&C?!b.shiftKey&&S===C?(b.preventDefault(),n&&lr(j,{select:!0})):b.shiftKey&&S===j&&(b.preventDefault(),n&&lr(C,{select:!0})):S===w&&b.preventDefault()}},[n,o,x.paused]);return u.jsx(mo.div,{tabIndex:-1,...l,ref:v,onKeyDown:k})},"FocusScope")),nv=g.createContext(null);function ov({registry:e,children:t}){return e?u.jsx(nv.Provider,{value:e,children:t}):t}Te(ov,"FocusScopeBranchProvider");function iv(){const[e,t]=g.useState([]),r=g.useMemo(()=>({add:Te(n=>t(o=>o.includes(n)?o:[...o,n]),"add"),remove:Te(n=>t(o=>o.filter(i=>i!==n)),"remove")}),[]);return{nodes:e,registry:r}}Te(iv,"useFocusScopeBranchRegistry");function sv(e){const t=g.useContext(nv);g.useEffect(()=>{if(!(!e||!t))return t.add(e),()=>t.remove(e)},[e,t])}Te(sv,"useFocusScopeBranch");function av(e,{select:t=!1}={}){const r=document.activeElement;for(const n of e)if(lr(n,{select:t}),document.activeElement!==r)return}Te(av,"focusFirst");function lv(e){const t=mu(e),r=Gl(t,e),n=Gl(t.reverse(),e);return[r,n]}Te(lv,"getTabbableEdges");function mu(e){const t=[],n=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Te(o=>{const i=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||i?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;n.nextNode();)t.push(n.currentNode);return t}Te(mu,"getTabbableCandidates");function Gl(e,t){const r=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(const n of e)if(!(r?!n.checkVisibility({checkVisibilityCSS:!0}):cv(n,{upTo:t})))return n}Te(Gl,"findVisible");function cv(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Te(cv,"isHidden");function uv(e){return e.tagName==="INPUT"&&typeof e.select=="function"}Te(uv,"isSelectableInput");function lr(e,{select:t=!1}={}){if(e&&e.focus){const n=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==n&&uv(e)&&t&&e.select()}}Te(lr,"focus");var wp=dv();function dv(){let e=[];return{add(t){const r=e[0];t!==r&&(r==null||r.pause()),e=Kl(e,t),e.unshift(t)},remove(t){var r;e=Kl(e,t),(r=e[0])==null||r.resume()}}}Te(dv,"createFocusScopesStack");function Kl(e,t){const r=[...e],n=r.indexOf(t);return n!==-1&&r.splice(n,1),r}Te(Kl,"arrayRemove");function pv(e){return e.filter(t=>t.tagName!=="A")}Te(pv,"removeLinks");var Ek=Object.defineProperty,Ck=(e,t)=>Ek(e,"name",{value:t,configurable:!0}),Ik=ho[" useId ".trim().toString()]||(()=>{}),jk=0;function Cs(e){const[t,r]=g.useState(Ik());return Nt(()=>{e||r(n=>n??String(jk++))},[e]),e||(t?`radix-${t}`:"")}Ck(Cs,"useId");const Pk=["top","right","bottom","left"],$r=Math.min,ur=Math.max,Us=Math.round,rs=Math.floor,dr=e=>({x:e,y:e}),Ak={left:"right",right:"left",bottom:"top",top:"bottom"};function fv(e,t,r){return ur(e,$r(t,r))}function vr(e,t){return typeof e=="function"?e(t):e}function Wr(e){return e.split("-")[0]}function _o(e){return e.split("-")[1]}function _u(e){return e==="x"?"y":"x"}function yu(e){return e==="y"?"height":"width"}function Kt(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function bu(e){return _u(Kt(e))}function zk(e,t,r){r===void 0&&(r=!1);const n=_o(e),o=bu(e),i=yu(o);let s=o==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=Zs(s)),[s,Zs(s)]}function Ok(e){const t=Zs(e);return[Xl(e),t,Xl(t)]}function Xl(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const Sp=["left","right"],Ep=["right","left"],Dk=["top","bottom"],Mk=["bottom","top"];function Rk(e,t,r){switch(e){case"top":case"bottom":return r?t?Ep:Sp:t?Sp:Ep;case"left":case"right":return t?Dk:Mk;default:return[]}}function Tk(e,t,r,n){const o=_o(e);let i=Rk(Wr(e),r==="start",n);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(Xl)))),i}function Zs(e){const t=Wr(e);return Ak[t]+e.slice(t.length)}function Lk(e){var t,r,n,o;return{top:(t=e.top)!=null?t:0,right:(r=e.right)!=null?r:0,bottom:(n=e.bottom)!=null?n:0,left:(o=e.left)!=null?o:0}}function hv(e){return typeof e!="number"?Lk(e):{top:e,right:e,bottom:e,left:e}}function Ys(e){const{x:t,y:r,width:n,height:o}=e;return{width:n,height:o,top:r,left:t,right:t+n,bottom:r+o,x:t,y:r}}function Cp(e,t,r){let{reference:n,floating:o}=e;const i=Kt(t),s=bu(t),a=yu(s),l=Wr(t),c=i==="y",p=n.x+n.width/2-o.width/2,d=n.y+n.height/2-o.height/2,f=n[a]/2-o[a]/2;let h;switch(l){case"top":h={x:p,y:n.y-o.height};break;case"bottom":h={x:p,y:n.y+n.height};break;case"right":h={x:n.x+n.width,y:d};break;case"left":h={x:n.x-o.width,y:d};break;default:h={x:n.x,y:n.y}}const v=_o(t);return v&&(h[s]+=f*(v==="end"?1:-1)*(r&&c?-1:1)),h}async function Nk(e,t){var r;t===void 0&&(t={});const{x:n,y:o,platform:i,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=vr(t,e),v=hv(h),y=a[f?d==="floating"?"reference":"floating":d],x=Ys(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(y)))==null||r?y:y.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:p,strategy:l})),k=d==="floating"?{x:n,y:o,width:s.floating.width,height:s.floating.height}:s.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),_=await(i.isElement==null?void 0:i.isElement(b))&&await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1},S=Ys(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:k,offsetParent:b,strategy:l}):k);return{top:(x.top-S.top+v.top)/_.y,bottom:(S.bottom-x.bottom+v.bottom)/_.y,left:(x.left-S.left+v.left)/_.x,right:(S.right-x.right+v.right)/_.x}}const Fk=50,Bk=async(e,t,r)=>{const{placement:n="bottom",strategy:o="absolute",middleware:i=[],platform:s}=r,a=s.detectOverflow?s:{...s,detectOverflow:Nk},l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:d}=Cp(c,n,l),f=n,h=0;const v={};for(let m=0;m<i.length;m++){const y=i[m];if(!y)continue;const{name:x,fn:k}=y,{x:b,y:_,data:S,reset:w}=await k({x:p,y:d,initialPlacement:n,placement:f,strategy:o,middlewareData:v,rects:c,platform:a,elements:{reference:e,floating:t}});p=b??p,d=_??d,v[x]={...v[x],...S},w&&h<Fk&&(h++,typeof w=="object"&&(w.placement&&(f=w.placement),w.rects&&(c=w.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):w.rects),{x:p,y:d}=Cp(c,f,l)),m=-1)}return{x:p,y:d,placement:f,strategy:o,middlewareData:v}},$k=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:o,rects:i,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:p=0}=vr(e,t)||{};if(c==null)return{};const d=hv(p),f={x:r,y:n},h=bu(o),v=yu(h),m=await s.getDimensions(c),y=h==="y",x=y?"top":"left",k=y?"bottom":"right",b=y?"clientHeight":"clientWidth",_=i.reference[v]+i.reference[h]-f[h]-i.floating[v],S=f[h]-i.reference[h],w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let j=w?w[b]:0;(!j||!await(s.isElement==null?void 0:s.isElement(w)))&&(j=a.floating[b]||i.floating[v]);const C=_/2-S/2,I=j/2-m[v]/2-1,E=$r(d[x],I),z=$r(d[k],I),O=j-m[v]-z,L=j/2-m[v]/2+C,B=fv(E,L,O),N=!l.arrow&&_o(o)!=null&&L!==B&&i.reference[v]/2-(L<E?E:z)-m[v]/2<0,R=N?L<E?L-E:L-O:0;return{[h]:f[h]+R,data:{[h]:B,centerOffset:L-B-R,...N&&{alignmentOffset:R}},reset:N}}}),Wk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:o,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:m=!0,...y}=vr(e,t);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const x=Wr(o),k=Kt(a),b=Wr(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),S=f||(b||!m?[Zs(a)]:Ok(a)),w=v!=="none";!f&&w&&S.push(...Tk(a,m,v,_));const j=[a,...S],C=await l.detectOverflow(t,y),I=[];let E=((n=i.flip)==null?void 0:n.overflows)||[];if(p&&I.push(C[x]),d){const B=zk(o,s,_);I.push(C[B[0]],C[B[1]])}if(E=[...E,{placement:o,overflows:I}],!I.every(B=>B<=0)){var z,O;const B=(((z=i.flip)==null?void 0:z.index)||0)+1,N=j[B];if(N&&(!(d==="alignment"?k!==Kt(N):!1)||E.every(W=>Kt(W.placement)===k?W.overflows[0]>0:!0)))return{data:{index:B,overflows:E},reset:{placement:N}};let R=(O=E.filter(q=>q.overflows[0]<=0).sort((q,W)=>q.overflows[1]-W.overflows[1])[0])==null?void 0:O.placement;if(!R)switch(h){case"bestFit":{var L;const q=(L=E.filter(W=>{if(w){const $=Kt(W.placement);return $===k||$==="y"}return!0}).map(W=>[W.placement,W.overflows.filter($=>$>0).reduce(($,Z)=>$+Z,0)]).sort((W,$)=>W[1]-$[1])[0])==null?void 0:L[0];q&&(R=q);break}case"initialPlacement":R=a;break}if(o!==R)return{reset:{placement:R}}}return{}}}};function Ip(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function jp(e){return Pk.some(t=>e[t]>=0)}const Hk=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:r,platform:n}=t,{strategy:o="referenceHidden",...i}=vr(e,t);switch(o){case"referenceHidden":{const s=await n.detectOverflow(t,{...i,elementContext:"reference"}),a=Ip(s,r.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:jp(a)}}}case"escaped":{const s=await n.detectOverflow(t,{...i,altBoundary:!0}),a=Ip(s,r.floating);return{data:{escapedOffsets:a,escaped:jp(a)}}}default:return{}}}}},vv=new Set(["left","top"]);async function Vk(e,t){const{placement:r,platform:n,elements:o}=e,i=await(n.isRTL==null?void 0:n.isRTL(o.floating)),s=Wr(r),a=_o(r),l=Kt(r)==="y",c=vv.has(s)?-1:1,p=i&&l?-1:1,d=vr(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof v=="number"&&(h=a==="end"?v*-1:v),l?{x:h*p,y:f*c}:{x:f*c,y:h*p}}const qk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:o,y:i,placement:s,middlewareData:a}=t,l=await Vk(t,e);return s===((r=a.offset)==null?void 0:r.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:s}}}}},Uk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:o,platform:i}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:k=>{let{x:b,y:_}=k;return{x:b,y:_}}},...c}=vr(e,t),p={x:r,y:n},d=await i.detectOverflow(t,c),f=Kt(o),h=_u(f);let v=p[h],m=p[f];const y=(k,b)=>fv(b+d[k==="y"?"top":"left"],b,b-d[k==="y"?"bottom":"right"]);s&&(v=y(h,v)),a&&(m=y(f,m));const x=l.fn({...t,[h]:v,[f]:m});return{...x,data:{x:x.x-r,y:x.y-n,enabled:{[h]:s,[f]:a}}}}}},Zk=function(e){return e===void 0&&(e={}),{options:e,fn(t){var r,n;const{x:o,y:i,placement:s,rects:a,middlewareData:l}=t,{offset:c=0,mainAxis:p=!0,crossAxis:d=!0}=vr(e,t),f={x:o,y:i},h=Kt(s),v=_u(h);let m=f[v],y=f[h];const x=vr(c,t),k=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(r=x.mainAxis)!=null?r:0,crossAxis:(n=x.crossAxis)!=null?n:0};if(p){const S=v==="y"?"height":"width",w=a.reference[v]-a.floating[S]+k.mainAxis,j=a.reference[v]+a.reference[S]-k.mainAxis;m<w?m=w:m>j&&(m=j)}if(d){var b,_;const S=v==="y"?"width":"height",w=vv.has(Wr(s)),j=a.reference[h]-a.floating[S]+(w&&((b=l.offset)==null?void 0:b[h])||0)+(w?0:k.crossAxis),C=a.reference[h]+a.reference[S]+(w?0:((_=l.offset)==null?void 0:_[h])||0)-(w?k.crossAxis:0);y<j?y=j:y>C&&(y=C)}return{[v]:m,[h]:y}}}},Yk=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:n,platform:o,elements:i}=t,{apply:s=()=>{},...a}=vr(e,t),l=await o.detectOverflow(t,a),c=Wr(r),p=_o(r),d=Kt(r)==="y",{width:f,height:h}=n.floating;let v,m;c==="top"||c==="bottom"?(v=c,m=p===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(m=c,v=p==="end"?"top":"bottom");const y=h-l.top-l.bottom,x=f-l.left-l.right,k=$r(h-l[v],y),b=$r(f-l[m],x),_=t.middlewareData.shift,S=!_;let w=k,j=b;_!=null&&_.enabled.x&&(j=x),_!=null&&_.enabled.y&&(w=y),S&&!p&&(d?j=f-2*ur(l.left,l.right):w=h-2*ur(l.top,l.bottom)),await s({...t,availableWidth:j,availableHeight:w});const C=await o.getDimensions(i.floating);return f!==C.width||h!==C.height?{reset:{rects:!0}}:{}}}};function xa(){return typeof window<"u"}function yo(e){return gv(e)?(e.nodeName||"").toLowerCase():"#document"}function dt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function yr(e){var t;return(t=(gv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function gv(e){return xa()?e instanceof Node||e instanceof dt(e).Node:!1}function Qt(e){return xa()?e instanceof Element||e instanceof dt(e).Element:!1}function Kr(e){return xa()?e instanceof HTMLElement||e instanceof dt(e).HTMLElement:!1}function Pp(e){return!xa()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof dt(e).ShadowRoot}function ka(e){const{overflow:t,overflowX:r,overflowY:n,display:o}=er(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&o!=="inline"&&o!=="contents"}function Gk(e){return/^(table|td|th)$/.test(yo(e))}function wa(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const Kk=/transform|translate|scale|rotate|perspective|filter/,Xk=/paint|layout|strict|content/,Jr=e=>!!e&&e!=="none";let tl;function xu(e){const t=Qt(e)?er(e):e;return Jr(t.transform)||Jr(t.translate)||Jr(t.scale)||Jr(t.rotate)||Jr(t.perspective)||!ku()&&(Jr(t.backdropFilter)||Jr(t.filter))||Kk.test(t.willChange||"")||Xk.test(t.contain||"")}function Jk(e){let t=gn(e);for(;Kr(t)&&!yi(t);){if(xu(t))return t;if(wa(t))return null;t=gn(t)}return null}function ku(){return tl==null&&(tl=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),tl}function yi(e){return/^(html|body|#document)$/.test(yo(e))}function er(e){return dt(e).getComputedStyle(e)}function Sa(e){return Qt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function gn(e){if(yo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Pp(e)&&e.host||yr(e);return Pp(t)?t.host:t}function mv(e){const t=gn(e);return yi(t)?(e.ownerDocument||e).body:Kr(t)&&ka(t)?t:mv(t)}function bi(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const o=mv(e),i=o===((n=e.ownerDocument)==null?void 0:n.body),s=dt(o);if(i){const a=Jl(s);return t.concat(s,s.visualViewport||[],ka(o)?o:[],a&&r?bi(a):[])}else return t.concat(o,bi(o,[],r))}function Jl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function _v(e){const t=er(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const o=Kr(e),i=o?e.offsetWidth:r,s=o?e.offsetHeight:n,a=Us(r)!==i||Us(n)!==s;return a&&(r=i,n=s),{width:r,height:n,$:a}}function wu(e){return Qt(e)?e:e.contextElement}function to(e){const t=wu(e);if(!Kr(t))return dr(1);const r=t.getBoundingClientRect(),{width:n,height:o,$:i}=_v(t);let s=(i?Us(r.width):r.width)/n,a=(i?Us(r.height):r.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Qk=dr(0);function yv(e){const t=dt(e);return!ku()||!t.visualViewport?Qk:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function e0(e,t,r){return t===void 0&&(t=!1),!!r&&t&&r===dt(e)}function mn(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const o=e.getBoundingClientRect(),i=wu(e);let s=dr(1);t&&(n?Qt(n)&&(s=to(n)):s=to(e));const a=e0(i,r,n)?yv(i):dr(0);let l=(o.left+a.x)/s.x,c=(o.top+a.y)/s.y,p=o.width/s.x,d=o.height/s.y;if(i&&n){const f=dt(i),h=Qt(n)?dt(n):n;let v=f,m=Jl(v);for(;m&&h!==v;){const y=to(m),x=m.getBoundingClientRect(),k=er(m),b=x.left+(m.clientLeft+parseFloat(k.paddingLeft))*y.x,_=x.top+(m.clientTop+parseFloat(k.paddingTop))*y.y;l*=y.x,c*=y.y,p*=y.x,d*=y.y,l+=b,c+=_,v=dt(m),m=Jl(v)}}return Ys({width:p,height:d,x:l,y:c})}function Ea(e,t){const r=Sa(e).scrollLeft;return t?t.left+r:mn(yr(e)).left+r}function bv(e,t){const r=e.getBoundingClientRect(),n=r.left+t.scrollLeft-Ea(e,r),o=r.top+t.scrollTop;return{x:n,y:o}}function t0(e){let{elements:t,rect:r,offsetParent:n,strategy:o}=e;const i=o==="fixed",s=yr(n),a=t?wa(t.floating):!1;if(n===s||a&&i)return r;let l={scrollLeft:0,scrollTop:0},c=dr(1);const p=dr(0),d=Kr(n);if((d||!i)&&((yo(n)!=="body"||ka(s))&&(l=Sa(n)),d)){const h=mn(n);c=to(n),p.x=h.x+n.clientLeft,p.y=h.y+n.clientTop}const f=s&&!d&&!i?bv(s,l):dr(0);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+p.x+f.x,y:r.y*c.y-l.scrollTop*c.y+p.y+f.y}}function r0(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function n0(e){const t=Sa(e),r=e.ownerDocument.body,n=ur(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=ur(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let i=-t.scrollLeft+Ea(e);const s=-t.scrollTop;return er(r).direction==="rtl"&&(i+=ur(e.clientWidth,r.clientWidth)-n),{width:n,height:o,x:i,y:s}}const o0=25;function i0(e,t,r){r===void 0&&(r="viewport");const n=r==="layoutViewport",o=dt(e),i=yr(e),s=o.visualViewport;let a=i.clientWidth,l=i.clientHeight,c=0,p=0;if(s){const f=!ku()||t==="fixed";n?f||(c=-s.offsetLeft,p=-s.offsetTop):(a=s.width,l=s.height,f&&(c=s.offsetLeft,p=s.offsetTop))}if(Ea(i)<=0){const f=i.ownerDocument,h=f.body,v=getComputedStyle(h),m=f.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,y=Math.abs(i.clientWidth-h.clientWidth-m),x=getComputedStyle(i).scrollbarGutter==="stable both-edges"?y/2:y;x<=o0&&(a-=x)}return{width:a,height:l,x:c,y:p}}function s0(e,t){const r=mn(e,!0,t==="fixed"),n=r.top+e.clientTop,o=r.left+e.clientLeft,i=to(e),s=e.clientWidth*i.x,a=e.clientHeight*i.y,l=o*i.x,c=n*i.y;return{width:s,height:a,x:l,y:c}}function Ap(e,t,r){let n;if(t==="viewport"||t==="layoutViewport")n=i0(e,r,t);else if(t==="document")n=n0(yr(e));else if(Qt(t))n=s0(t,r);else{const o=yv(e);n={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return Ys(n)}function a0(e,t){const r=t.get(e);if(r)return r;let n=bi(e,[],!1).filter(a=>Qt(a)&&yo(a)!=="body"),o=null;const i=er(e).position==="fixed";let s=i?gn(e):e;for(;Qt(s)&&!yi(s);){const a=er(s),l=xu(s),c=o?o.position:i?"fixed":"";!l&&(c==="fixed"||c==="absolute"&&a.position==="static")?n=n.filter(d=>d!==s):o=a,s=gn(s)}return t.set(e,n),n}function l0(e){let{element:t,boundary:r,rootBoundary:n,strategy:o}=e;const s=[...r==="clippingAncestors"?wa(t)?[]:a0(t,this._c):[].concat(r),n],a=Ap(t,s[0],o);let l=a.top,c=a.right,p=a.bottom,d=a.left;for(let f=1;f<s.length;f++){const h=Ap(t,s[f],o);l=ur(h.top,l),c=$r(h.right,c),p=$r(h.bottom,p),d=ur(h.left,d)}return{width:c-d,height:p-l,x:d,y:l}}function c0(e){const{width:t,height:r}=_v(e);return{width:t,height:r}}function u0(e,t,r){const n=Kr(t),o=yr(t),i=r==="fixed",s=mn(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const l=dr(0);if((n||!i)&&((yo(t)!=="body"||ka(o))&&(a=Sa(t)),n)){const f=mn(t,!0,i,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}!n&&o&&(l.x=Ea(o));const c=o&&!n&&!i?bv(o,a):dr(0),p=s.left+a.scrollLeft-l.x-c.x,d=s.top+a.scrollTop-l.y-c.y;return{x:p,y:d,width:s.width,height:s.height}}function rl(e){return er(e).position==="static"}function zp(e,t){if(!Kr(e)||er(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return yr(e)===r&&(r=r.ownerDocument.body),r}function xv(e,t){const r=dt(e);if(wa(e))return r;if(!Kr(e)){let o=gn(e);for(;o&&!yi(o);){if(Qt(o)&&!rl(o))return o;o=gn(o)}return r}let n=zp(e,t);for(;n&&Gk(n)&&rl(n);)n=zp(n,t);return n&&yi(n)&&rl(n)&&!xu(n)?r:n||Jk(e)||r}const d0=async function(e){const t=this.getOffsetParent||xv,r=this.getDimensions,n=await r(e.floating);return{reference:u0(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function p0(e){return er(e).direction==="rtl"}const f0={convertOffsetParentRelativeRectToViewportRelativeRect:t0,getDocumentElement:yr,getClippingRect:l0,getOffsetParent:xv,getElementRects:d0,getClientRects:r0,getDimensions:c0,getScale:to,isElement:Qt,isRTL:p0};function kv(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function h0(e,t,r){let n=null,o;const i=yr(e);function s(){var p;clearTimeout(o),(p=n)==null||p.disconnect(),n=null}function a(p,d){p===void 0&&(p=!1),d===void 0&&(d=1),s();const f=e.getBoundingClientRect(),{left:h,top:v,width:m,height:y}=f;if(p||t(),!m||!y)return;const x=rs(v),k=rs(i.clientWidth-(h+m)),b=rs(i.clientHeight-(v+y)),_=rs(h),w={rootMargin:-x+"px "+-k+"px "+-b+"px "+-_+"px",threshold:ur(0,$r(1,d))||1};let j=!0;function C(I){const E=I[0].intersectionRatio;if(!kv(f,e.getBoundingClientRect()))return a();if(E!==d){if(!j)return a();E?a(!1,E):o=setTimeout(()=>{a(!1,1e-7)},1e3)}j=!1}try{n=new IntersectionObserver(C,{...w,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,w)}n.observe(e)}const l=dt(e),c=()=>a(r);return l.addEventListener("resize",c),a(!0),()=>{l.removeEventListener("resize",c),s()}}function v0(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=wu(e),p=o||i?[...c?bi(c):[],...t?bi(t):[]]:[];p.forEach(x=>{o&&x.addEventListener("scroll",r),i&&x.addEventListener("resize",r)});const d=c&&a?h0(c,r,i):null;let f=-1,h=null;s&&(h=new ResizeObserver(x=>{let[k]=x;k&&k.target===c&&h&&t&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=h)==null||b.observe(t)})),r()}),c&&!l&&h.observe(c),t&&h.observe(t));let v,m=l?mn(e):null;l&&y();function y(){const x=mn(e);m&&!kv(m,x)&&r(),m=x,v=requestAnimationFrame(y)}return r(),()=>{var x;p.forEach(k=>{o&&k.removeEventListener("scroll",r),i&&k.removeEventListener("resize",r)}),d==null||d(),(x=h)==null||x.disconnect(),h=null,l&&cancelAnimationFrame(v)}}const g0=qk,m0=Uk,_0=Wk,y0=Yk,b0=Hk,Op=$k,x0=Zk,k0=(e,t,r)=>{const n=new Map,o=r??{},i={...f0,...o.platform,_c:n};return Bk(e,t,{...o,platform:i})};var w0=typeof document<"u",S0=function(){},Is=w0?g.useLayoutEffect:S0;function Gs(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!Gs(e[n],t[n]))return!1;return!0}if(o=Object.keys(e),r=o.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,o[n]))return!1;for(n=r;n--!==0;){const i=o[n];if(!(i==="_owner"&&e.$$typeof)&&!Gs(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function wv(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Dp(e,t){const r=wv(e);return Math.round(t*r)/r}function nl(e){const t=g.useRef(e);return Is(()=>{t.current=e}),t}function E0(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:o,elements:{reference:i,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=e,[p,d]=g.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[f,h]=g.useState(n);Gs(f,n)||h(n);const[v,m]=g.useState(null),[y,x]=g.useState(null),k=g.useCallback(W=>{W!==w.current&&(w.current=W,m(W))},[]),b=g.useCallback(W=>{W!==j.current&&(j.current=W,x(W))},[]),_=i||v,S=s||y,w=g.useRef(null),j=g.useRef(null),C=g.useRef(p),I=l!=null,E=nl(l),z=nl(o),O=nl(c),L=g.useCallback(()=>{if(!w.current||!j.current)return;const W={placement:t,strategy:r,middleware:f};z.current&&(W.platform=z.current),k0(w.current,j.current,W).then($=>{const Z={...$,isPositioned:O.current!==!1};B.current&&!Gs(C.current,Z)&&(C.current=Z,Ur.flushSync(()=>{d(Z)}))})},[f,t,r,z,O]);Is(()=>{c===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,d(W=>({...W,isPositioned:!1})))},[c]);const B=g.useRef(!1);Is(()=>(B.current=!0,()=>{B.current=!1}),[]),Is(()=>{if(_&&(w.current=_),S&&(j.current=S),_&&S){if(E.current)return E.current(_,S,L);L()}},[_,S,L,E,I]);const N=g.useMemo(()=>({reference:w,floating:j,setReference:k,setFloating:b}),[k,b]),R=g.useMemo(()=>({reference:_,floating:S}),[_,S]),q=g.useMemo(()=>{const W={position:r,left:0,top:0};if(!R.floating)return W;const $=Dp(R.floating,p.x),Z=Dp(R.floating,p.y);return a?{...W,transform:"translate("+$+"px, "+Z+"px)",...wv(R.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:$,top:Z}},[r,a,R.floating,p.x,p.y]);return g.useMemo(()=>({...p,update:L,refs:N,elements:R,floatingStyles:q}),[p,L,N,R,q])}const C0=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:o}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?Op({element:n.current,padding:o}).fn(r):{}:n?Op({element:n,padding:o}).fn(r):{}}}},I0=(e,t)=>{const r=g0(e);return{name:r.name,fn:r.fn,options:[e,t]}},j0=(e,t)=>{const r=m0(e);return{name:r.name,fn:r.fn,options:[e,t]}},P0=(e,t)=>({fn:x0(e).fn,options:[e,t]}),A0=(e,t)=>{const r=_0(e);return{name:r.name,fn:r.fn,options:[e,t]}},z0=(e,t)=>{const r=y0(e);return{name:r.name,fn:r.fn,options:[e,t]}},O0=(e,t)=>{const r=b0(e);return{name:r.name,fn:r.fn,options:[e,t]}},D0=(e,t)=>{const r=C0(e);return{name:r.name,fn:r.fn,options:[e,t]}};var M0=Object.defineProperty,R0=(e,t)=>M0(e,"name",{value:t,configurable:!0});function Sv(e){const[t,r]=g.useState(void 0);return Nt(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let n=0;const o=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const s=i[0];window.cancelAnimationFrame(n),n=window.requestAnimationFrame(()=>{let a,l;if("borderBoxSize"in s){const c=s.borderBoxSize,p=Array.isArray(c)?c[0]:c;a=p.inlineSize,l=p.blockSize}else a=e.offsetWidth,l=e.offsetHeight;r({width:a,height:l})})});return o.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(n),o.unobserve(e)}}else r(void 0)},[e]),t}R0(Sv,"useSize");var T0=Object.defineProperty,Nr=(e,t)=>T0(e,"name",{value:t,configurable:!0}),Mp={Partial:"partial"},Rp={Optimized:"optimized",Always:"always"},Ev="Popper",[Cv,Iv]=du(Ev),[L0,jv]=Cv(Ev),N0=Nr(e=>{const{__scopePopper:t,children:r}=e,[n,o]=g.useState(null),[i,s]=g.useState(void 0);return u.jsx(L0,{scope:t,anchor:n,onAnchorChange:o,placementState:i,setPlacementState:s,children:r})},"Popper"),F0="PopperAnchor",B0=g.forwardRef(Nr(function(t,r){const{__scopePopper:n,virtualRef:o,...i}=t,s=jv(F0,n),a=g.useRef(null),l=s.onAnchorChange,c=g.useCallback(m=>{a.current=m,m&&l(m)},[l]),p=_r(r,c),d=g.useRef(null);g.useEffect(()=>{if(!o)return;const m=d.current;d.current=o.current,m!==d.current&&l(d.current)});const f=s.placementState&&Ca(s.placementState),h=f==null?void 0:f[0],v=f==null?void 0:f[1];return o?null:u.jsx(mo.div,{"data-radix-popper-side":h,"data-radix-popper-align":v,...i,ref:p})},"PopperAnchor")),Pv="PopperContent",[$0,IO]=Cv(Pv),W0=g.forwardRef(Nr(function(t,r){var P,M,T,U,V,X,ne;const{__scopePopper:n,side:o="bottom",sideOffset:i=0,align:s="center",alignOffset:a=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:p=[],collisionPadding:d=0,sticky:f=Mp.Partial,hideWhenDetached:h=!1,updatePositionStrategy:v=Rp.Optimized,onPlaced:m,...y}=t,x=jv(Pv,n),[k,b]=g.useState(null),_=_r(r,b),[S,w]=g.useState(null),j=Sv(S),C=(j==null?void 0:j.width)??0,I=(j==null?void 0:j.height)??0,E=o+(s!=="center"?"-"+s:""),z=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},O=Array.isArray(p)?p:[p],L=O.length>0,B={padding:z,boundary:O.filter(Av),altBoundary:L},{refs:N,floatingStyles:R,placement:q,isPositioned:W,middlewareData:$}=E0({strategy:"fixed",placement:E,whileElementsMounted:Nr((...ue)=>v0(...ue,{animationFrame:v===Rp.Always}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[I0({mainAxis:i+I,alignmentAxis:a}),c&&j0({mainAxis:!0,crossAxis:!1,...f===Mp.Partial?{limiter:P0()}:{},...B}),c&&A0({...B}),z0({...B,apply:Nr(({elements:ue,rects:ve,availableWidth:We,availableHeight:ze})=>{const{width:Ee,height:we}=ve.reference,he=ue.floating.style;he.setProperty("--radix-popper-available-width",`${We}px`),he.setProperty("--radix-popper-available-height",`${ze}px`),he.setProperty("--radix-popper-anchor-width",`${Ee}px`),he.setProperty("--radix-popper-anchor-height",`${we}px`)},"apply")}),S&&D0({element:S,padding:l}),H0({arrowWidth:C,arrowHeight:I}),h&&O0(L?{strategy:"referenceHidden",...B}:{strategy:"referenceHidden",padding:B.padding,altBoundary:B.altBoundary})]}),Z=x.setPlacementState;Nt(()=>(Z(q),()=>{Z(void 0)}),[q,Z]);const[oe,G]=Ca(q),te=vn(m);Nt(()=>{W&&(te==null||te())},[W,te]);const be=(P=$.arrow)==null?void 0:P.x,Q=(M=$.arrow)==null?void 0:M.y,ie=((T=$.arrow)==null?void 0:T.centerOffset)!==0,[ke,Y]=g.useState();return Nt(()=>{k&&Y(window.getComputedStyle(k).zIndex)},[k]),u.jsx("div",{ref:N.setFloating,"data-radix-popper-content-wrapper":"",style:{...R,transform:W?R.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ke,"--radix-popper-transform-origin":[(U=$.transformOrigin)==null?void 0:U.x,(V=$.transformOrigin)==null?void 0:V.y].join(" "),...((X=$.hide)==null?void 0:X.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:u.jsx($0,{scope:n,placedSide:oe,placedAlign:G,onArrowChange:w,arrowX:be,arrowY:Q,shouldHideArrow:ie,children:u.jsx(mo.div,{"data-side":oe,"data-align":G,...y,ref:_,style:{...y.style,animation:W?(ne=y.style)==null?void 0:ne.animation:"none"}})})})},"PopperContent"));function Av(e){return e!==null}Nr(Av,"isNotNull");var H0=Nr(e=>({name:"transformOrigin",options:e,fn(t){var y,x,k;const{placement:r,rects:n,middlewareData:o}=t,s=((y=o.arrow)==null?void 0:y.centerOffset)!==0,a=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[c,p]=Ca(r),d={start:"0%",center:"50%",end:"100%"}[p],f=(((x=o.arrow)==null?void 0:x.x)??0)+a/2,h=(((k=o.arrow)==null?void 0:k.y)??0)+l/2;let v="",m="";return c==="bottom"?(v=s?d:`${f}px`,m=`${-l}px`):c==="top"?(v=s?d:`${f}px`,m=`${n.floating.height+l}px`):c==="right"?(v=`${-l}px`,m=s?d:`${h}px`):c==="left"&&(v=`${n.floating.width+l}px`,m=s?d:`${h}px`),{data:{x:v,y:m}}}}),"transformOrigin");function Ca(e){const[t,r="center"]=e.split("-");return[t,r]}Nr(Ca,"getSideAndAlignFromPlacement");var V0=Object.defineProperty,q0=(e,t)=>V0(e,"name",{value:t,configurable:!0}),U0=g.forwardRef(q0(function(t,r){var l;const{container:n,...o}=t,[i,s]=g.useState(!1);Nt(()=>s(!0),[]);const a=n||i&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return a?Ur.createPortal(u.jsx(mo.div,{...o,ref:r}),a):null},"Portal")),Z0=Object.defineProperty,gr=(e,t)=>Z0(e,"name",{value:t,configurable:!0});function zv(e,t){return g.useReducer((r,n)=>t[r][n]??r,e)}gr(zv,"useStateMachine");var Ov=gr(e=>{const{present:t,children:r}=e,n=Dv(t),o=typeof r=="function"?r({present:n.isPresent}):g.Children.only(r),i=Mv(n.ref,Rv(o));return typeof r=="function"||n.isPresent?g.cloneElement(o,{ref:i}):null},"Presence");function Dv(e){const[t,r]=g.useState(),n=g.useRef(null),o=g.useRef(e),i=g.useRef("none"),s=g.useRef(void 0),a=e?"mounted":"unmounted",[l,c]=zv(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{l==="mounted"?(i.current=s.current??Vn(n.current),s.current=void 0):i.current="none"},[l]),Nt(()=>{const p=n.current,d=o.current;if(d!==e){const h=i.current,v=Vn(p);e?(s.current=v,c("MOUNT")):v==="none"||(p==null?void 0:p.display)==="none"?c("UNMOUNT"):c(d&&h!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,c]),Nt(()=>{if(t){let p;const d=t.ownerDocument.defaultView??window,f=gr(v=>{const y=Vn(n.current).includes(CSS.escape(v.animationName));if(v.target===t&&y&&(c("ANIMATION_END"),!o.current)){const x=t.style.animationFillMode;t.style.animationFillMode="forwards",p=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),h=gr(v=>{v.target===t&&(i.current=Vn(n.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(p),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:g.useCallback(p=>{if(p){const d=getComputedStyle(p);n.current=d,s.current=Vn(d)}else n.current=null;r(p)},[])}}gr(Dv,"usePresence");function Ql(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}gr(Ql,"setRef");function Mv(...e){const t=g.useRef(e);return t.current=e,g.useCallback(r=>{const n=t.current;let o=!1;const i=n.map(s=>{const a=Ql(s,r);return!o&&typeof a=="function"&&(o=!0),a});if(o)return()=>{for(let s=0;s<i.length;s++){const a=i[s];typeof a=="function"?a():Ql(n[s],null)}}},[])}gr(Mv,"useStableComposedRefs");function Vn(e){return(e==null?void 0:e.animationName)||"none"}gr(Vn,"getAnimationName");function Rv(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}gr(Rv,"getElementRef");var Y0=Object.defineProperty,G0=(e,t)=>Y0(e,"name",{value:t,configurable:!0}),Tp=ho[" useEffectEvent ".trim().toString()],Lp=ho[" useInsertionEffect ".trim().toString()];function Tv(e){if(typeof Tp=="function")return Tp(e);const t=g.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Lp=="function"?Lp(()=>{t.current=e}):Nt(()=>{t.current=e}),g.useMemo(()=>((...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)}),[])}G0(Tv,"useEffectEvent");var K0=Object.defineProperty,Ri=(e,t)=>K0(e,"name",{value:t,configurable:!0}),X0=ho[" useInsertionEffect ".trim().toString()]||Nt;function Lv({prop:e,defaultProp:t,onChange:r=Ri(()=>{},"onChange"),caller:n}){const[o,i,s]=Nv({defaultProp:t,onChange:r}),a=e!==void 0,l=a?e:o,c=g.useCallback(p=>{var d;if(a){const f=Fv(p)?p(e):p;f!==e&&((d=s.current)==null||d.call(s,f))}else i(p)},[a,e,i,s]);return[l,c]}Ri(Lv,"useControllableState");function Nv({defaultProp:e,onChange:t}){const[r,n]=g.useState(e),o=g.useRef(r),i=g.useRef(t);return X0(()=>{i.current=t},[t]),g.useEffect(()=>{var s;o.current!==r&&((s=i.current)==null||s.call(i,r),o.current=r)},[r,o]),[r,n,i]}Ri(Nv,"useUncontrolledState");function Fv(e){return typeof e=="function"}Ri(Fv,"isFunction");var Np=Symbol("RADIX:SYNC_STATE");function J0(e,t,r,n){const{prop:o,defaultProp:i,onChange:s,caller:a}=t,l=o!==void 0,c=Tv(s),p=[{...r,state:i}];n&&p.push(n);const[d,f]=g.useReducer((y,x)=>{if(x.type===Np)return{...y,state:x.state};const k=e(y,x);return l&&!Object.is(k.state,y.state)&&c(k.state),k},...p),h=d.state,v=g.useRef(h);g.useEffect(()=>{v.current!==h&&(v.current=h,l||c(h))},[h,v,l]);const m=g.useMemo(()=>o!==void 0?{...d,state:o}:d,[d,o]);return g.useEffect(()=>{l&&!Object.is(o,d.state)&&f({type:Np,state:o})},[o,d.state,l]),[m,f]}Ri(J0,"useControllableStateReducer");var Q0=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Dn=new WeakMap,ns=new WeakMap,os={},ol=0,Bv=function(e){return e&&(e.host||Bv(e.parentNode))},e1=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=Bv(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},t1=function(e,t,r,n){var o=e1(t,Array.isArray(e)?e:[e]);os[r]||(os[r]=new WeakMap);var i=os[r],s=[],a=new Set,l=new Set(o),c=function(d){!d||a.has(d)||(a.add(d),c(d.parentNode))};o.forEach(c);var p=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(f){if(a.has(f))p(f);else try{var h=f.getAttribute(n),v=h!==null&&h!=="false",m=(Dn.get(f)||0)+1,y=(i.get(f)||0)+1;Dn.set(f,m),i.set(f,y),s.push(f),m===1&&v&&ns.set(f,!0),y===1&&f.setAttribute(r,"true"),v||f.setAttribute(n,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return p(t),a.clear(),ol++,function(){s.forEach(function(d){var f=Dn.get(d)-1,h=i.get(d)-1;Dn.set(d,f),i.set(d,h),f||(ns.has(d)||d.removeAttribute(n),ns.delete(d)),h||d.removeAttribute(r)}),ol--,ol||(Dn=new WeakMap,Dn=new WeakMap,ns=new WeakMap,os={})}},r1=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),o=Q0(e);return o?(n.push.apply(n,Array.from(o.querySelectorAll("[aria-live], script"))),t1(n,o,r,"aria-hidden")):function(){return null}},Gt=function(){return Gt=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Gt.apply(this,arguments)};function $v(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function n1(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var js="right-scroll-bar-position",Ps="width-before-scroll-bar",o1="with-scroll-bars-hidden",i1="--removed-body-scroll-bar-size";function il(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function s1(e,t){var r=g.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var o=r.value;o!==n&&(r.value=n,r.callback(n,o))}}}})[0];return r.callback=t,r.facade}var a1=typeof window<"u"?g.useLayoutEffect:g.useEffect,Fp=new WeakMap;function l1(e,t){var r=s1(null,function(n){return e.forEach(function(o){return il(o,n)})});return a1(function(){var n=Fp.get(r);if(n){var o=new Set(n),i=new Set(e),s=r.current;o.forEach(function(a){i.has(a)||il(a,null)}),i.forEach(function(a){o.has(a)||il(a,s)})}Fp.set(r,e)},[e]),r}function c1(e){return e}function u1(e,t){t===void 0&&(t=c1);var r=[],n=!1,o={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(i){var s=t(i,n);return r.push(s),function(){r=r.filter(function(a){return a!==s})}},assignSyncMedium:function(i){for(n=!0;r.length;){var s=r;r=[],s.forEach(i)}r={push:function(a){return i(a)},filter:function(){return r}}},assignMedium:function(i){n=!0;var s=[];if(r.length){var a=r;r=[],a.forEach(i),s=r}var l=function(){var p=s;s=[],p.forEach(i)},c=function(){return Promise.resolve().then(l)};c(),r={push:function(p){s.push(p),c()},filter:function(p){return s=s.filter(p),r}}}};return o}function d1(e){e===void 0&&(e={});var t=u1(null);return t.options=Gt({async:!0,ssr:!1},e),t}var Wv=function(e){var t=e.sideCar,r=$v(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return g.createElement(n,Gt({},r))};Wv.isSideCarExport=!0;function p1(e,t){return e.useMedium(t),Wv}var Hv=d1(),sl=function(){},Ia=g.forwardRef(function(e,t){var r=g.useRef(null),n=g.useState({onScrollCapture:sl,onWheelCapture:sl,onTouchMoveCapture:sl}),o=n[0],i=n[1],s=e.forwardProps,a=e.children,l=e.className,c=e.removeScrollBar,p=e.enabled,d=e.shards,f=e.sideCar,h=e.noRelative,v=e.noIsolation,m=e.inert,y=e.allowPinchZoom,x=e.as,k=x===void 0?"div":x,b=e.gapMode,_=$v(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=f,w=l1([r,t]),j=Gt(Gt({},_),o);return g.createElement(g.Fragment,null,p&&g.createElement(S,{sideCar:Hv,removeScrollBar:c,shards:d,noRelative:h,noIsolation:v,inert:m,setCallbacks:i,allowPinchZoom:!!y,lockRef:r,gapMode:b}),s?g.cloneElement(g.Children.only(a),Gt(Gt({},j),{ref:w})):g.createElement(k,Gt({},j,{className:l,ref:w}),a))});Ia.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ia.classNames={fullWidth:Ps,zeroRight:js};var f1=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function h1(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=f1();return t&&e.setAttribute("nonce",t),e}function v1(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function g1(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var m1=function(){var e=0,t=null;return{add:function(r){e==0&&(t=h1())&&(v1(t,r),g1(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},_1=function(){var e=m1();return function(t,r){g.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},Vv=function(){var e=_1(),t=function(r){var n=r.styles,o=r.dynamic;return e(n,o),null};return t},y1={left:0,top:0,right:0,gap:0},al=function(e){return parseInt(e||"",10)||0},b1=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[al(r),al(n),al(o)]},x1=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return y1;var t=b1(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},k1=Vv(),ro="data-scroll-locked",w1=function(e,t,r,n){var o=e.left,i=e.top,s=e.right,a=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(o1,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(a,"px ").concat(n,`;
  }
  body[`).concat(ro,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(a,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(js,` {
    right: `).concat(a,"px ").concat(n,`;
  }
  
  .`).concat(Ps,` {
    margin-right: `).concat(a,"px ").concat(n,`;
  }
  
  .`).concat(js," .").concat(js,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(Ps," .").concat(Ps,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(ro,`] {
    `).concat(i1,": ").concat(a,`px;
  }
`)},Bp=function(){var e=parseInt(document.body.getAttribute(ro)||"0",10);return isFinite(e)?e:0},S1=function(){g.useEffect(function(){return document.body.setAttribute(ro,(Bp()+1).toString()),function(){var e=Bp()-1;e<=0?document.body.removeAttribute(ro):document.body.setAttribute(ro,e.toString())}},[])},E1=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,o=n===void 0?"margin":n;S1();var i=g.useMemo(function(){return x1(o)},[o]);return g.createElement(k1,{styles:w1(i,!t,o,r?"":"!important")})},ec=!1;if(typeof window<"u")try{var is=Object.defineProperty({},"passive",{get:function(){return ec=!0,!0}});window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{ec=!1}var Mn=ec?{passive:!1}:!1,C1=function(e){return e.tagName==="TEXTAREA"},qv=function(e,t){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!C1(e)&&r[t]==="visible")},I1=function(e){return qv(e,"overflowY")},j1=function(e){return qv(e,"overflowX")},$p=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var o=Uv(e,n);if(o){var i=Zv(e,n),s=i[1],a=i[2];if(s>a)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},P1=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},A1=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},Uv=function(e,t){return e==="v"?I1(t):j1(t)},Zv=function(e,t){return e==="v"?P1(t):A1(t)},z1=function(e,t){return e==="h"&&t==="rtl"?-1:1},O1=function(e,t,r,n,o){var i=z1(e,window.getComputedStyle(t).direction),s=i*n,a=r.target,l=t.contains(a),c=!1,p=s>0,d=0,f=0;do{if(!a)break;var h=Zv(e,a),v=h[0],m=h[1],y=h[2],x=m-y-i*v;(v||x)&&Uv(e,a)&&(d+=x,f+=v);var k=a.parentNode;a=k&&k.nodeType===Node.DOCUMENT_FRAGMENT_NODE?k.host:k}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(p&&Math.abs(d)<1||!p&&Math.abs(f)<1)&&(c=!0),c},ss=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Wp=function(e){return[e.deltaX,e.deltaY]},Hp=function(e){return e&&"current"in e?e.current:e},D1=function(e,t){return e[0]===t[0]&&e[1]===t[1]},M1=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},R1=0,Rn=[];function T1(e){var t=g.useRef([]),r=g.useRef([0,0]),n=g.useRef(),o=g.useState(R1++)[0],i=g.useState(Vv)[0],s=g.useRef(e);g.useEffect(function(){s.current=e},[e]),g.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var m=n1([e.lockRef.current],(e.shards||[]).map(Hp),!0).filter(Boolean);return m.forEach(function(y){return y.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),m.forEach(function(y){return y.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=g.useCallback(function(m,y){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!s.current.allowPinchZoom;var x=ss(m),k=r.current,b="deltaX"in m?m.deltaX:k[0]-x[0],_="deltaY"in m?m.deltaY:k[1]-x[1],S,w=m.target,j=Math.abs(b)>Math.abs(_)?"h":"v";if("touches"in m&&j==="h"&&w.type==="range")return!1;var C=window.getSelection(),I=C&&C.anchorNode,E=I?I===w||I.contains(w):!1;if(E)return!1;var z=$p(j,w);if(!z)return!0;if(z?S=j:(S=j==="v"?"h":"v",z=$p(j,w)),!z)return!1;if(!n.current&&"changedTouches"in m&&(b||_)&&(n.current=S),!S)return!0;var O=n.current||S;return O1(O,y,m,O==="h"?b:_)},[]),l=g.useCallback(function(m){var y=m;if(!(!Rn.length||Rn[Rn.length-1]!==i)){var x="deltaY"in y?Wp(y):ss(y),k=t.current.filter(function(S){return S.name===y.type&&(S.target===y.target||y.target===S.shadowParent)&&D1(S.delta,x)})[0];if(k&&k.should){y.cancelable&&y.preventDefault();return}if(!k){var b=(s.current.shards||[]).map(Hp).filter(Boolean).filter(function(S){return S.contains(y.target)}),_=b.length>0?a(y,b[0]):!s.current.noIsolation;_&&y.cancelable&&y.preventDefault()}}},[]),c=g.useCallback(function(m,y,x,k){var b={name:m,delta:y,target:x,should:k,shadowParent:L1(x)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(_){return _!==b})},1)},[]),p=g.useCallback(function(m){r.current=ss(m),n.current=void 0},[]),d=g.useCallback(function(m){c(m.type,Wp(m),m.target,a(m,e.lockRef.current))},[]),f=g.useCallback(function(m){c(m.type,ss(m),m.target,a(m,e.lockRef.current))},[]);g.useEffect(function(){return Rn.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",l,Mn),document.addEventListener("touchmove",l,Mn),document.addEventListener("touchstart",p,Mn),function(){Rn=Rn.filter(function(m){return m!==i}),document.removeEventListener("wheel",l,Mn),document.removeEventListener("touchmove",l,Mn),document.removeEventListener("touchstart",p,Mn)}},[]);var h=e.removeScrollBar,v=e.inert;return g.createElement(g.Fragment,null,v?g.createElement(i,{styles:M1(o)}):null,h?g.createElement(E1,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function L1(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const N1=p1(Hv,T1);var Yv=g.forwardRef(function(e,t){return g.createElement(Ia,Gt({},e,{ref:t,sideCar:N1}))});Yv.classNames=Ia.classNames;var F1=Object.defineProperty,br=(e,t)=>F1(e,"name",{value:t,configurable:!0}),Su="Popover",[Gv,jO]=du(Su,[Iv]),Eu=Iv(),[B1,bo]=Gv(Su),$1=br(e=>{const{__scopePopover:t,children:r,open:n,defaultOpen:o,onOpenChange:i,modal:s=!1}=e,a=Eu(t),l=g.useRef(null),[c,p]=g.useState(!1),[d,f]=g.useState(0),[h,v]=g.useState(0),[m,y]=Lv({prop:n,defaultProp:o??!1,onChange:i,caller:Su});return u.jsx(N0,{...a,children:u.jsx(B1,{scope:t,contentId:Cs(),titleId:Cs(),descriptionId:Cs(),titlePresent:d>0,descriptionPresent:h>0,setTitleCount:f,setDescriptionCount:v,triggerRef:l,open:m,onOpenChange:y,onOpenToggle:g.useCallback(()=>y(x=>!x),[y]),hasCustomAnchor:c,onCustomAnchorAdd:g.useCallback(()=>p(!0),[]),onCustomAnchorRemove:g.useCallback(()=>p(!1),[]),modal:s,children:r})})},"Popover"),W1="PopoverTrigger",H1=g.forwardRef(br(function(t,r){const{__scopePopover:n,...o}=t,i=bo(W1,n),s=Eu(n),a=_r(r,i.triggerRef),l=u.jsx(mo.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":Cu(i.open),...o,ref:a,onClick:Lr(t.onClick,i.onOpenToggle)});return i.hasCustomAnchor?l:u.jsx(B0,{asChild:!0,...s,children:l})},"PopoverTrigger")),Kv="PopoverPortal",[V1,q1]=Gv(Kv,{forceMount:void 0}),U1=br(e=>{const{__scopePopover:t,forceMount:r,children:n,container:o}=e,i=bo(Kv,t);return u.jsx(V1,{scope:t,forceMount:r,children:u.jsx(Ov,{present:r||i.open,children:u.jsx(U0,{asChild:!0,container:o,children:n})})})},"PopoverPortal"),xi="PopoverContent",Z1=g.forwardRef(br(function(t,r){const n=q1(xi,t.__scopePopover),{forceMount:o=n.forceMount,...i}=t,s=bo(xi,t.__scopePopover);return u.jsx(Ov,{present:o||s.open,children:s.modal?u.jsx(G1,{...i,ref:r}):u.jsx(K1,{...i,ref:r})})},"PopoverContent")),Y1=pu("PopoverContent.RemoveScroll"),G1=g.forwardRef(br(function(t,r){const n=bo(xi,t.__scopePopover),o=g.useRef(null),i=_r(r,o),s=g.useRef(!1),{nodes:a,registry:l}=iv();return g.useEffect(()=>{const c=o.current;if(c)return r1(c)},[]),u.jsx(Yv,{as:Y1,allowPinchZoom:!0,shards:g.useMemo(()=>[o,...a.map(c=>({current:c}))],[o,a]),children:u.jsx(Xv,{...t,ref:i,branchNodes:a,branchRegistry:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Lr(t.onCloseAutoFocus,c=>{var p;c.preventDefault(),s.current||(p=n.triggerRef.current)==null||p.focus()}),onPointerDownOutside:Lr(t.onPointerDownOutside,c=>{const p=c.detail.originalEvent,d=p.button===0&&p.ctrlKey===!0,f=p.button===2||d;s.current=f},{checkForDefaultPrevented:!1}),onFocusOutside:Lr(t.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1})})})},"PopoverContentModal")),K1=g.forwardRef(br(function(t,r){const n=bo(xi,t.__scopePopover),o=g.useRef(!1),i=g.useRef(!1);return u.jsx(Xv,{...t,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var a,l;(a=t.onCloseAutoFocus)==null||a.call(t,s),s.defaultPrevented||(o.current||(l=n.triggerRef.current)==null||l.focus(),s.preventDefault()),o.current=!1,i.current=!1},onInteractOutside:s=>{var c,p;(c=t.onInteractOutside)==null||c.call(t,s),s.defaultPrevented||(o.current=!0,s.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const a=s.target;((p=n.triggerRef.current)==null?void 0:p.contains(a))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&i.current&&s.preventDefault()}})},"PopoverContentNonModal")),Xv=g.forwardRef(br(function(t,r){const{__scopePopover:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:s,disableOutsidePointerEvents:a,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:p,onInteractOutside:d,"aria-describedby":f,branchNodes:h,branchRegistry:v,...m}=t,y=bo(xi,n),x=Eu(n),[k,b]=g.useState(null),_=_r(r,b);return sv(k),gu(),u.jsx(ov,{registry:v,children:u.jsx(Sk,{asChild:!0,loop:!0,trapped:o,branches:h,onMountAutoFocus:i,onUnmountAutoFocus:s,children:u.jsx(_k,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:d,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:p,onDismiss:()=>y.onOpenChange(!1),deferPointerDownOutside:!0,children:u.jsx(W0,{"data-state":Cu(y.open),role:"dialog",id:y.contentId,"aria-labelledby":y.titlePresent?y.titleId:void 0,"aria-describedby":y.descriptionPresent?Jv(f,y.descriptionId):f,...x,...m,ref:_,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})})},"PopoverContentImpl"));function Cu(e){return e?"open":"closed"}br(Cu,"getState");function Jv(...e){const t=new Set;for(const r of e)if(typeof r=="string")for(const n of String(r).trim().split(/\s+/))n&&t.add(n);return t.size>0?Array.from(t).join(" "):void 0}br(Jv,"concatAriaDescribedby");A();A();var Qv={ActionBar:"_ActionBar_5vdfr_1","ActionBar-label":"_ActionBar-label_5vdfr_17",ActionBarAction:"_ActionBarAction_5vdfr_30","ActionBar-group":"_ActionBar-group_5vdfr_38","ActionBarAction--disabled":"_ActionBarAction--disabled_5vdfr_74","ActionBarAction--active":"_ActionBarAction--active_5vdfr_104","ActionBar-separator":"_ActionBar-separator_5vdfr_117"},ki=ee("ActionBar",Qv),X1=ee("ActionBarAction",Qv),gt=({label:e,children:t})=>u.jsxs("div",{className:ki(),onClick:r=>{r.stopPropagation()},children:[e&&u.jsx(gt.Group,{children:u.jsx("div",{className:ki("label"),children:e})}),t]}),ja=g.forwardRef((e,t)=>{var r=e,{children:n,label:o,onClick:i,active:s=!1,disabled:a}=r,l=Bt(r,["children","label","onClick","active","disabled"]);return u.jsx("button",F(D({type:"button"},l),{ref:t,className:X1({active:s,disabled:a}),onClick:i,title:o,tabIndex:0,disabled:a,children:n}))});ja.displayName="Action";var J1=({children:e})=>u.jsx("div",{className:ki("group"),children:e}),Q1=({label:e})=>u.jsx("div",{className:ki("label"),children:e}),ew=()=>u.jsx("div",{className:ki("separator")});gt.Action=ja;gt.Label=Q1;gt.Group=J1;gt.Separator=ew;A();A();A();var tw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),eg=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();A();A();var rw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},nw=g.forwardRef((e,t)=>{var r=e,{color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c}=r,p=Bt(r,["color","size","strokeWidth","absoluteStrokeWidth","className","children","iconNode"]);return g.createElement("svg",D(F(D({ref:t},rw),{width:o,height:o,stroke:n,strokeWidth:s?Number(i)*24/Number(o):i,className:eg("lucide",a)}),p),[...c.map(([d,f])=>g.createElement(d,f)),...Array.isArray(l)?l:[l]])}),re=(e,t)=>{const r=g.forwardRef((n,o)=>{var i=n,{className:s}=i,a=Bt(i,["className"]);return g.createElement(nw,D({ref:o,iconNode:t,className:eg(`lucide-${tw(e)}`,s)},a))});return r.displayName=`${e}`,r},Iu=re("AlignLeft",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);A();var ow=re("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);A();var Pa=re("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);A();A();var tg=re("AlignCenter",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);A();var rg=re("AlignJustify",[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]]);A();var ng=re("AlignRight",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);A();var iw=re("Bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);A();var wi=re("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);A();var og=re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);A();var ig=re("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);A();var sw=re("ChevronsDownUp",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);A();var aw=re("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);A();var lw=re("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);A();var ju=re("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);A();var cw=re("CornerLeftUp",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);A();var uw=re("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);A();var dw=re("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);A();var Vp=re("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);A();var pw=re("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);A();var fw=re("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);A();var hw=re("Heading1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);A();var vw=re("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);A();var gw=re("Heading3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);A();var mw=re("Heading4",[["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3",key:"tj5zdr"}],["path",{d:"M21 10v8",key:"1kdml4"}],["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}]]);A();var _w=re("Heading5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);A();var yw=re("Heading6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);A();var bw=re("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);A();var sg=re("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);A();var xw=re("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);A();var ag=re("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);A();var lg=re("ListOrdered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);A();var kw=re("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);A();var ww=re("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);A();var Sw=re("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);A();var Ew=re("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);A();var Cw=re("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);A();var cg=re("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);A();var Iw=re("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);A();var jw=re("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);A();var Pw=re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);A();var Aw=re("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);A();var zw=re("RectangleEllipsis",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);A();var Ow=re("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);A();var Dw=re("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);A();var Mw=re("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);A();var Rw=re("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);A();var Tw=re("SquareCode",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);A();var Lw=re("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);A();var Nw=re("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);A();var Fw=re("ToyBrick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);A();var Pu=re("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);A();var Aa=re("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);A();var Bw=re("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);A();var $w=re("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);A();var Ww=re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);A();var Hw=re("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);A();var Vw=re("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);A();A();A();var qp={ControlLeft:"ctrl",ControlRight:"ctrl",MetaLeft:"meta",MetaRight:"meta",ShiftLeft:"shift",ShiftRight:"shift",KeyA:"a",KeyB:"b",KeyC:"c",KeyD:"d",KeyE:"e",KeyF:"f",KeyG:"g",KeyH:"h",KeyI:"i",KeyJ:"j",KeyK:"k",KeyL:"l",KeyM:"m",KeyN:"n",KeyO:"o",KeyP:"p",KeyQ:"q",KeyR:"r",KeyS:"s",KeyT:"t",KeyU:"u",KeyV:"v",KeyW:"w",KeyX:"x",KeyY:"y",KeyZ:"z",Delete:"delete",Backspace:"backspace",AltRight:"altRight"},Ut=Bh()(cu(e=>({held:{},hold:t=>e(r=>r.held[t]?r:{held:F(D({},r.held),{[t]:!0})}),release:t=>e(r=>r.held[t]?{held:F(D({},r.held),{[t]:!1})}:r),reset:(t={})=>e(()=>({held:t})),triggers:{}}))),ug=e=>{const t=i=>{if(i.getModifierState("AltGraph")){Ut.getState().hold("altRight");return}const s=qp[i.code];if(s){Ut.getState().hold(s);const{held:a,triggers:l}=Ut.getState();Object.values(l).forEach(({combo:c,cb:p})=>{Object.entries(c).every(([f,h])=>h===!!a[f])&&Object.entries(a).every(([f,h])=>h===!!c[f])&&p(i)!==!1&&i.preventDefault()}),s!=="meta"&&s!=="ctrl"&&s!=="shift"&&Ut.getState().release(s)}},r=i=>{if(!i.getModifierState("AltGraph")&&i.code==="ControlRight"){Ut.getState().release("altRight");return}const s=qp[i.code];s&&(s==="meta"?Ut.getState().reset():Ut.getState().release(s))},n=i=>{document.visibilityState==="hidden"&&Ut.getState().reset()},o=()=>{Ut.getState().reset()};return window.addEventListener("blur",o),e.addEventListener("keydown",t),e.addEventListener("keyup",r),e.addEventListener("visibilitychange",n),()=>{e.removeEventListener("keydown",t),e.removeEventListener("keyup",r),e.removeEventListener("visibilitychange",n),window.removeEventListener("blur",o)}},qw=()=>{g.useEffect(()=>ug(document),[])},Yt=(e,t)=>{g.useEffect(()=>Ut.setState(r=>({triggers:F(D({},r.triggers),{[`${Object.keys(e).join("+")}`]:{combo:e,cb:t}})})),[])},Up=0;function Uw(e,t=300){let r;return(...n)=>{clearTimeout(r),r=setTimeout(()=>{e(...n)},t)}}var Zp=e=>F(D({},e),{ui:F(D({},e.ui),{field:F(D({},e.ui.field),{focus:null})})}),Zw=(e,t)=>{const r=Uw(n=>{const{histories:o,index:i}=t().history,s={state:n,id:pt("history")},a=[...o.slice(0,i+1),s];e({history:F(D({},t().history),{histories:a,index:a.length-1})})},250);return{initialAppState:{},index:Up,histories:[],hasPast:()=>t().history.index>Up,hasFuture:()=>t().history.index<t().history.histories.length-1,prevHistory:()=>{const{history:n}=t();return n.hasPast()?n.histories[n.index-1]:null},nextHistory:()=>{const n=t().history;return n.hasFuture()?n.histories[n.index+1]:null},currentHistory:()=>t().history.histories[t().history.index],back:()=>{var n;const{history:o,dispatch:i}=t();if(o.hasPast()){const s=Zp(((n=o.prevHistory())==null?void 0:n.state)||o.initialAppState);i({type:"set",state:s}),e({history:F(D({},o),{index:o.index-1})})}},forward:()=>{var n;const{history:o,dispatch:i}=t();if(o.hasFuture()){const s=(n=o.nextHistory())==null?void 0:n.state;i({type:"set",state:s?Zp(s):{}}),e({history:F(D({},o),{index:o.index+1})})}},setHistories:n=>{var o;const{dispatch:i,history:s}=t();i({type:"set",state:((o=n[n.length-1])==null?void 0:o.state)||s.initialAppState}),e({history:F(D({},s),{histories:n,index:n.length-1})})},setHistoryIndex:n=>{var o;const{dispatch:i,history:s}=t();i({type:"set",state:((o=s.histories[n])==null?void 0:o.state)||s.initialAppState}),e({history:F(D({},s),{index:n})})},record:r}};function Yw(e,{histories:t,index:r,initialAppState:n}){g.useEffect(()=>e.setState({history:F(D({},e.getState().history),{histories:t,index:r,initialAppState:n})}),[t,r,n]);const o=()=>{e.getState().history.back()},i=()=>{e.getState().history.forward()};Yt({altRight:!1,meta:!0,z:!0},o),Yt({altRight:!1,meta:!0,shift:!0,z:!0},i),Yt({altRight:!1,meta:!0,y:!0},i),Yt({altRight:!1,ctrl:!0,z:!0},o),Yt({altRight:!1,ctrl:!0,shift:!0,z:!0},i),Yt({altRight:!1,ctrl:!0,y:!0},i)}A();var Gw=(e,t)=>{const r=new Map;return{registerNode:(n,o)=>{r.set(n,o)},unregisterNode:n=>{r.delete(n)},syncNode:n=>{var o;n&&((o=r.get(n))==null||o.sync())},syncNodes:n=>{n.forEach(o=>{var i;o&&((i=r.get(o))==null||i.sync())})},setOverlayVisible:(n,o)=>{if(!n)return;const i=r.get(n);if(i){if(o){i.showOverlay();return}i.hideOverlay()}}}};A();A();var Yp=(e,t)=>{const r=[];return yt(e,t,n=>n,n=>(r.push(n),n)),r},Kw=(e,t)=>{const r=(...o)=>Se(null,[...o],function*(i={},s){const{state:a,permissions:l,config:c}=t(),{cache:p,globalPermissions:d}=l,f=(x,k=!1)=>Se(null,null,function*(){var b,_;const{config:S,state:w,setComponentLoading:j}=t(),C=p[x.props.id],I=w.indexes.nodes,E=(b=I[x.props.id])==null?void 0:b.parentId,z=E?I[E]:null,O=(_=z==null?void 0:z.data)!=null?_:null,L=x.type==="root"?S.root:S.components[x.type];if(!L)return;const B=D(D({},d),L.permissions);if(L.resolvePermissions){const N=lu(x,C==null?void 0:C.lastData),R=Object.values(N).some(W=>W===!0),q=(C==null?void 0:C.lastParentId)!==E;if(R||q||k){const W=j(x.props.id,!0,50),$=yield L.resolvePermissions(x,{changed:N,lastPermissions:(C==null?void 0:C.lastPermissions)||null,permissions:B,appState:gi(w),lastData:(C==null?void 0:C.lastData)||null,parent:O}),Z=t().permissions;e({permissions:F(D({},Z),{cache:F(D({},Z.cache),{[x.props.id]:{lastParentId:E,lastData:x,lastPermissions:$}}),resolvedPermissions:F(D({},Z.resolvedPermissions),{[x.props.id]:$})})}),W()}}}),h=(x=!1)=>{const{state:k}=t();f({type:"root",props:F(D({},k.data.root.props),{id:"root"})},x)},{item:v,type:m,root:y}=i;v?yield f(v,s):m?Yp(a,c).filter(x=>x.type===m).map(x=>Se(null,null,function*(){yield f(x,s)})):y?h(s):Yp(a,c).map(x=>Se(null,null,function*(){yield f(x,s)}))});return{cache:{},globalPermissions:{drag:!0,edit:!0,delete:!0,duplicate:!0,insert:!0},resolvedPermissions:{},getPermissions:({item:o,type:i,root:s}={})=>{const{config:a,permissions:l}=t(),{globalPermissions:c,resolvedPermissions:p}=l;if(o){const d=a.components[o.type],f=D(D({},c),d==null?void 0:d.permissions),h=p[o.props.id];return h?D(D({},c),h):f}else if(i){const d=a.components[i];return D(D({},c),d==null?void 0:d.permissions)}else if(s){const d=a.root,f=D(D({},c),d==null?void 0:d.permissions),h=p.root;return h?D(D({},c),h):f}return c},resolvePermissions:r,refreshPermissions:o=>r(o,!0)}},Xw=(e,t)=>{g.useEffect(()=>{const{permissions:r}=e.getState(),{globalPermissions:n}=r;e.setState({permissions:F(D({},r),{globalPermissions:D(D({},n),t)})}),r.resolvePermissions()},[t]),g.useEffect(()=>e.subscribe(r=>r.state.data,()=>{e.getState().permissions.resolvePermissions()}),[]),g.useEffect(()=>e.subscribe(r=>r.config,()=>{e.getState().permissions.resolvePermissions()}),[])};A();var Jw=(e,t)=>({fields:{},loading:!1,lastResolvedData:{},id:void 0}),Qw=(e,t)=>{const r=g.useCallback(n=>Se(null,null,function*(){var o,i;const{fields:s,lastResolvedData:a}=e.getState().fields,l=e.getState().metadata,c=e.getState().state.indexes.nodes,p=c[t||"root"],d=p==null?void 0:p.data,f=p!=null&&p.parentId?c[p.parentId]:null,h=(f==null?void 0:f.data)||null,{getComponentConfig:v,state:m,config:y}=e.getState(),x=v(d==null?void 0:d.type);if(!d||!x)return;const k=x.fields||{},b=x.resolveFields;let _=s;if(n&&(e.setState(S=>({fields:F(D({},S.fields),{fields:k,id:t})})),_=k),b){const S=setTimeout(()=>{e.setState(I=>({fields:F(D({},I.fields),{loading:!0})}))},50),w=((o=a.props)==null?void 0:o.id)===t?a:null,j=lu(d,w),C=yield b(d,{changed:j,fields:k,lastFields:_,metadata:D(D({},l),x.metadata),lastData:w,appState:gi(m),parent:h});if(clearTimeout(S),((i=e.getState().selectedItem)==null?void 0:i.props.id)!==t||e.getState().config!==y)return;e.setState({fields:{fields:C,loading:!1,lastResolvedData:d,id:t}})}else e.setState(S=>({fields:F(D({},S.fields),{fields:k,id:t})}))}),[t]);g.useEffect(()=>{r(!0);const n=e.subscribe(i=>i.state.indexes.nodes[t||"root"],()=>r()),o=e.subscribe(i=>i.config,()=>r(!0));return()=>{n(),o()}},[t])};A();var eS=e=>{if("type"in e&&e.type!=="root")throw new Error("Converting non-root item to root.");const{readOnly:t}=e;if(e.props){if("id"in e.props){const r=e.props,{id:n}=r;return{props:Bt(r,["id"]),readOnly:t}}return{props:e.props,readOnly:t}}return{props:{},readOnly:t}},tS={title:{type:"text"}},dg=e=>Bh()(cu((t,r)=>{var n,o;return F(D({instanceId:pt(),state:Hl,config:{components:{}},componentState:{},plugins:[],overrides:{},viewports:_i,zoomConfig:{autoZoom:1,rootHeight:0,zoom:1},status:"LOADING",iframe:{},_experimentalFullScreenCanvas:!1,_experimentalVirtualization:!1,metadata:{},dictionary:{},dnd:{},fieldTransforms:{}},e),{fields:Jw(),history:Zw(t,r),nodes:Gw(),permissions:Kw(t,r),getCurrentData:()=>{var i;const s=r();return(i=s.selectedItem)!=null?i:s.state.data.root},getComponentConfig:i=>{var s;const{config:a,selectedItem:l}=r(),c=((s=a.root)==null?void 0:s.fields)||tS;return i&&i!=="root"?a.components[i]:l?a.components[l.type]:F(D({},a.root),{fields:c})},selectedItem:(n=e==null?void 0:e.state)!=null&&n.ui.itemSelector?rt((o=e==null?void 0:e.state)==null?void 0:o.ui.itemSelector,e.state):null,dispatch:i=>t(s=>{var a,l;const{record:c}=r().history,d=cp({record:c,appStore:s})(s.state,i),f=d.ui.itemSelector?rt(d.ui.itemSelector,d):null;return(l=(a=r()).onAction)==null||l.call(a,i,d,r().state),F(D({},s),{state:d,selectedItem:f})}),setZoomConfig:i=>t({zoomConfig:i}),setStatus:i=>t({status:i}),setComponentState:i=>t({componentState:i}),pendingLoadTimeouts:{},setComponentLoading:(i,s=!0,a=0)=>{const{setComponentState:l,pendingLoadTimeouts:c}=r(),p=pt(),d=()=>{var v;const{componentState:m}=r();l(F(D({},m),{[i]:F(D({},m[i]),{loadingCount:(((v=m[i])==null?void 0:v.loadingCount)||0)+1})}))},f=()=>{var v;const{componentState:m}=r();clearTimeout(h),delete c[p],t({pendingLoadTimeouts:c}),l(F(D({},m),{[i]:F(D({},m[i]),{loadingCount:Math.max((((v=m[i])==null?void 0:v.loadingCount)||0)-1,0)})}))},h=setTimeout(()=>{s?d():f(),delete c[p],t({pendingLoadTimeouts:c})},a);return t({pendingLoadTimeouts:F(D({},c),{[i]:h})}),f},unsetComponentLoading:i=>{const{setComponentLoading:s}=r();s(i,!1)},setUi:(i,s)=>t(a=>{const c=cp({record:()=>{},appStore:a})(a.state,{type:"setUi",ui:i,recordHistory:s}),p=c.ui.itemSelector?rt(c.ui.itemSelector,c):null;return F(D({},a),{state:c,selectedItem:p})}),resolveComponentData:(i,s)=>Se(null,null,function*(){var a,l;const{config:c,metadata:p,setComponentLoading:d,permissions:f,state:h}=r(),v="id"in i.props?i.props.id:"root",m=(a=h.indexes.nodes[v])==null?void 0:a.parentId,y=m?h.indexes.nodes[m]:null,x=(l=y==null?void 0:y.data)!=null?l:null,k={};return yield Fh(i,c,p,b=>{const _="id"in b.props?b.props.id:"root";k[_]=d(_,!0,50)},b=>Se(null,null,function*(){const _="id"in b.props?b.props.id:"root";"type"in b?yield f.refreshPermissions({item:b}):yield f.refreshPermissions({root:!0}),k[_]()}),s,x,h.data.root)}),resolveAndCommitData:()=>Se(null,null,function*(){const{config:i,state:s,dispatch:a,resolveComponentData:l}=r();yt(s,i,c=>c,(c,p)=>(p.length>1||l(c,"load").then(d=>{const{state:f}=r(),h=f.indexes.nodes[d.node.props.id];if(h&&d.didChange)if(d.node.props.id==="root")a({type:"replaceRoot",root:eS(d.node)});else{const v=`${h.parentId}:${h.zone}`,y=f.indexes.zones[v].contentIds.indexOf(d.node.props.id);a({type:"replace",data:d.node,destinationIndex:y,destinationZone:v})}}),c))})})})),Au=g.createContext(null),ll=null,pg=()=>(ll||(ll=dg()),ll);function H(e){var t;const r=(t=g.useContext(Au))!=null?t:pg();return ba(r,e)}function ye(){var e;return(e=g.useContext(Au))!=null?e:pg()}A();A();var rS={IconButton:"_IconButton_1pxxt_1","IconButton--active":"_IconButton--active_1pxxt_15","IconButton--disabled":"_IconButton--disabled_1pxxt_28"};A();A();A();A();var Gp=(e,t,r)=>{const n=Array.from(e),[o]=n.splice(t,1);return n.splice(r,0,o),n};A();var nS=(e,t,r)=>{const n=Array.from(e);return n.splice(t,1),n.splice(t,0,r),n};A();A();A();A();var oS="Invariant failed";function iS(e,t){throw new Error(oS)}var as=function(t){var r=t.top,n=t.right,o=t.bottom,i=t.left,s=n-i,a=o-r,l={top:r,right:n,bottom:o,left:i,width:s,height:a,x:i,y:r,center:{x:(n+i)/2,y:(o+r)/2}};return l},sS=function(t,r){return{top:t.top-r.top,left:t.left-r.left,bottom:t.bottom+r.bottom,right:t.right+r.right}},Kp=function(t,r){return{top:t.top+r.top,left:t.left+r.left,bottom:t.bottom-r.bottom,right:t.right-r.right}},cl={top:0,right:0,bottom:0,left:0},aS=function(t){var r=t.borderBox,n=t.margin,o=n===void 0?cl:n,i=t.border,s=i===void 0?cl:i,a=t.padding,l=a===void 0?cl:a,c=as(sS(r,o)),p=as(Kp(r,s)),d=as(Kp(p,l));return{marginBox:c,borderBox:as(r),paddingBox:p,contentBox:d,margin:o,border:s,padding:l}},kt=function(t){var r=t.slice(0,-2),n=t.slice(-2);if(n!=="px")return 0;var o=Number(r);return isNaN(o)&&iS(),o},lS=function(t,r){var n={top:kt(r.marginTop),right:kt(r.marginRight),bottom:kt(r.marginBottom),left:kt(r.marginLeft)},o={top:kt(r.paddingTop),right:kt(r.paddingRight),bottom:kt(r.paddingBottom),left:kt(r.paddingLeft)},i={top:kt(r.borderTopWidth),right:kt(r.borderRightWidth),bottom:kt(r.borderBottomWidth),left:kt(r.borderLeftWidth)};return aS({borderBox:t,margin:n,padding:o,border:i})},fg=function(t){var r=t.getBoundingClientRect(),n=window.getComputedStyle(t);return lS(r,n)},cS=(e,t,r)=>{const n=fg(t),{width:o,height:i}=n.contentBox,s=e.height==="auto"?i:e.height;let a=0,l=1;if(typeof e.width=="number"&&(e.width>o||s>i)){const c=Math.min(o/e.width,1),p=Math.min(i/s,1);r=c,c<p?a=s/r:(a=s,r=p),l=r}else l=1,r=1,a=s;return{autoZoom:l,rootHeight:a,zoom:r}},hg=e=>{const t=ye();return n=>{const{state:o,zoomConfig:i,setZoomConfig:s}=t.getState(),{viewports:a}=o.ui,l=(n==null?void 0:n.viewports)||a;e.current&&s(cS(l==null?void 0:l.current,e.current,i.zoom))}};A();var uS={Loader:"_Loader_1w5zn_13","loader-animation":"_loader-animation_1w5zn_1"};A();A();var dS={"header-publish":"Publish","header-undo":"undo","header-redo":"redo","header-toggle-leftsidebar":"Toggle left sidebar","header-toggle-rightsidebar":"Toggle right sidebar","header-toggle-menubar":"Toggle menu bar","action-selectparent":"Select parent","action-duplicate":"Duplicate","action-delete":"Delete","label-page":"Page","label-component":"Component","outline-empty":"No items","outline-item-collapse":"Collapse","outline-item-expand":"Expand","outline-header-title":"Outline","outline-header-collapseall":"Collapse all","outline-item-duplicate":"Duplicate","outline-item-delete":"Delete","drawer-category-collapse":"Collapse {title}","drawer-category-expand":"Expand {title}","drawer-category-other":"Other","canvas-noconfig":"No configuration for {type}","field-readonly":"Read-only","field-arrayitem-summary":"Item #{index}","field-arrayitem-duplicate":"Duplicate","field-arrayitem-delete":"Delete","field-external-selectdata":"Select data","field-external-search":"Search","field-external-togglefilters":"Toggle filters","field-external-item":"External item","field-external-result-singular":"{count} result","field-external-result-plural":"{count} results","field-richtext-bold":"Bold","field-richtext-italic":"Italic","field-richtext-underline":"Underline","field-richtext-strikethrough":"Strikethrough","field-richtext-blockquote":"Blockquote","field-richtext-code-inline":"Inline code","field-richtext-code-block":"Code block","field-richtext-list-bullet":"Bullet list","field-richtext-list-ordered":"Ordered list","field-richtext-horizontalrule":"Horizontal rule","field-richtext-align-left":"Align left","field-richtext-align-center":"Align center","field-richtext-align-right":"Align right","field-richtext-align-justify":"Justify","field-richtext-select":"Select","field-richtext-headingselect-1":"Heading 1","field-richtext-headingselect-2":"Heading 2","field-richtext-headingselect-3":"Heading 3","field-richtext-headingselect-4":"Heading 4","field-richtext-headingselect-5":"Heading 5","field-richtext-headingselect-6":"Heading 6","field-richtext-alignselect-left":"Left","field-richtext-alignselect-center":"Center","field-richtext-alignselect-right":"Right","field-richtext-alignselect-justify":"Justify","field-richtext-listselect-bullet":"Bullet list","field-richtext-listselect-ordered":"Ordered list","viewport-zoom-in":"Zoom viewport in","viewport-zoom-out":"Zoom viewport out","viewport-zoom-auto":"{zoom}% (Auto)","viewport-toggle-menu":"Toggle viewport menu","viewport-switch":"Switch to {label} viewport","viewport-switch-default":"Switch viewport","plugin-blocks":"Blocks","plugin-outline":"Outline","plugin-fields":"Fields","plugin-components":"Components","layout-maximize":"maximize","layout-minimize":"minimize","loader-loading":"loading"},pS=(e,t)=>e.replace(/\{(\w+)\}/g,(r,n)=>t[n]!==void 0?String(t[n]):r),fS=(e,t,r)=>{var n;const o=(n=e[t])!=null?n:dS[t];return r?pS(o,r):o},J=(e,t)=>H(r=>fS(r.dictionary,e,t)),hS=ee("Loader",uS),kn=e=>{var t=e,{color:r,size:n=16}=t,o=Bt(t,["color","size"]);const i=J("loader-loading");return u.jsx("span",D({className:hS(),style:{width:n,height:n,color:r},"aria-label":i},o))},vS=ee("IconButton",rS),Xe=g.forwardRef((e,t)=>{var r=e,{active:n=!1,children:o,href:i,onClick:s,type:a,disabled:l,tabIndex:c,newTab:p,fullWidth:d,title:f,suppressHydrationWarning:h}=r,v=Bt(r,["active","children","href","onClick","type","disabled","tabIndex","newTab","fullWidth","title","suppressHydrationWarning"]);const[m,y]=g.useState(!1),x=i?"a":"button";return u.jsxs(x,F(D({},v),{ref:t,className:vS({active:n,disabled:l,fullWidth:d}),onClick:k=>{s&&(y(!0),Promise.resolve(s(k)).then(()=>{y(!1)}))},type:a,disabled:l||m,tabIndex:c,target:p?"_blank":void 0,rel:p?"noreferrer":void 0,href:i,title:f,"aria-label":f,suppressHydrationWarning:h,children:[o,m&&u.jsxs(u.Fragment,{children:["  ",u.jsx(kn,{size:14})]})]}))});Xe.displayName="IconButton";A();var vg=g.createContext({}),Le=()=>g.useContext(vg);A();A();A();var gg={Select:"_Select_1n4iv_1","Select-buttonInner":"_Select-buttonInner_1n4iv_6","Select-buttonIcon":"_Select-buttonIcon_1n4iv_11","Select--standalone":"_Select--standalone_1n4iv_17","Select--actionBar":"_Select--actionBar_1n4iv_22","Select-items":"_Select-items_1n4iv_27",SelectItem:"_SelectItem_1n4iv_38","SelectItem--isSelected":"_SelectItem--isSelected_1n4iv_53","SelectItem-icon":"_SelectItem-icon_1n4iv_59"};A();var ls=ee("Select",gg),mg=ee("SelectItem",gg),gS=({children:e,isSelected:t,onClick:r})=>u.jsx("button",{className:mg({isSelected:t}),onClick:r,children:e}),mS=({children:e,options:t,onChange:r,value:n,defaultValue:o,mode:i,disabled:s=!1})=>{const[a,l]=g.useState(!1),c=J("field-richtext-select"),p=t.length>0,d=s||!p,f=u.jsxs("div",{className:ls("buttonInner"),children:[u.jsx("span",{className:ls("buttonIcon"),children:e}),u.jsx(wi,{size:12})]}),h=i==="actionBar"?u.jsx(ja,{active:n!==o,disabled:d,children:f}):u.jsx(Xe,{title:c,active:n!==o,disabled:d,children:f});return u.jsx("div",{className:ls({actionBar:i==="actionBar",standalone:i==="standalone"}),children:u.jsxs($1,{open:a,onOpenChange:l,children:[p?u.jsx(H1,{asChild:!0,children:h}):h,t.length>0&&u.jsx(U1,{children:u.jsx(Z1,{align:"start",children:u.jsx("ul",{className:ls("items"),"data-puck-rte-menu":!0,children:t.map(v=>{const m=v.icon;return u.jsx("li",{children:u.jsxs(gS,{isSelected:n===v.value,onClick:()=>{r(v.value),l(!1)},children:[m&&u.jsx("div",{className:mg("icon"),children:u.jsx(m,{size:16})}),v.label]})},v.value)})})})})]})})};function zu({renderDefaultIcon:e,onChange:t,options:r,value:n,defaultValue:o}){var i,s;const{inline:a,readOnly:l}=Le(),c=g.useMemo(()=>r.reduce((d,f)=>F(D({},d),{[f.value]:f}),{}),[r]),p=(s=n&&((i=c[n])==null?void 0:i.icon))!=null?s:e;return u.jsx(mS,{options:r,onChange:t,value:n,defaultValue:o,mode:a?"actionBar":"standalone",disabled:l,children:u.jsx(p,{})})}/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/align-left.js:
lucide-react/dist/esm/icons/heading.js:
lucide-react/dist/esm/icons/list.js:
lucide-react/dist/esm/icons/align-center.js:
lucide-react/dist/esm/icons/align-justify.js:
lucide-react/dist/esm/icons/align-right.js:
lucide-react/dist/esm/icons/bold.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/chevron-up.js:
lucide-react/dist/esm/icons/chevrons-down-up.js:
lucide-react/dist/esm/icons/circle-check-big.js:
lucide-react/dist/esm/icons/code.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/corner-left-up.js:
lucide-react/dist/esm/icons/ellipsis-vertical.js:
lucide-react/dist/esm/icons/expand.js:
lucide-react/dist/esm/icons/globe.js:
lucide-react/dist/esm/icons/hammer.js:
lucide-react/dist/esm/icons/hash.js:
lucide-react/dist/esm/icons/heading-1.js:
lucide-react/dist/esm/icons/heading-2.js:
lucide-react/dist/esm/icons/heading-3.js:
lucide-react/dist/esm/icons/heading-4.js:
lucide-react/dist/esm/icons/heading-5.js:
lucide-react/dist/esm/icons/heading-6.js:
lucide-react/dist/esm/icons/italic.js:
lucide-react/dist/esm/icons/layers.js:
lucide-react/dist/esm/icons/layout-grid.js:
lucide-react/dist/esm/icons/link.js:
lucide-react/dist/esm/icons/list-ordered.js:
lucide-react/dist/esm/icons/lock-open.js:
lucide-react/dist/esm/icons/lock.js:
lucide-react/dist/esm/icons/maximize-2.js:
lucide-react/dist/esm/icons/minimize-2.js:
lucide-react/dist/esm/icons/minus.js:
lucide-react/dist/esm/icons/monitor.js:
lucide-react/dist/esm/icons/panel-left.js:
lucide-react/dist/esm/icons/panel-right.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/quote.js:
lucide-react/dist/esm/icons/rectangle-ellipsis.js:
lucide-react/dist/esm/icons/redo-2.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/sliders-horizontal.js:
lucide-react/dist/esm/icons/smartphone.js:
lucide-react/dist/esm/icons/square-code.js:
lucide-react/dist/esm/icons/strikethrough.js:
lucide-react/dist/esm/icons/tablet.js:
lucide-react/dist/esm/icons/toy-brick.js:
lucide-react/dist/esm/icons/trash.js:
lucide-react/dist/esm/icons/type.js:
lucide-react/dist/esm/icons/underline.js:
lucide-react/dist/esm/icons/undo-2.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/icons/zoom-in.js:
lucide-react/dist/esm/icons/zoom-out.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/A();var _S={left:Iu,center:tg,right:ng,justify:rg},yS=e=>{var t;const r=J("field-richtext-alignselect-left"),n=J("field-richtext-alignselect-center"),o=J("field-richtext-alignselect-right"),i=J("field-richtext-alignselect-justify"),s={left:r,center:n,right:o,justify:i};let a=[];return(e==null?void 0:e.textAlign)!==!1&&((t=e==null?void 0:e.textAlign)!=null&&t.alignments?(e!=null&&e.textAlign.alignments.includes("left")&&a.push("left"),e!=null&&e.textAlign.alignments.includes("center")&&a.push("center"),e!=null&&e.textAlign.alignments.includes("right")&&a.push("right"),e!=null&&e.textAlign.alignments.includes("justify")&&a.push("justify")):a=["left","center","right","justify"]),g.useMemo(()=>a.map(l=>({value:l,label:s[l],icon:_S[l]})),[a,s])};A();var bS={h1:hw,h2:vw,h3:gw,h4:mw,h5:_w,h6:yw},xS=e=>{var t;const r=J("field-richtext-headingselect-1"),n=J("field-richtext-headingselect-2"),o=J("field-richtext-headingselect-3"),i=J("field-richtext-headingselect-4"),s=J("field-richtext-headingselect-5"),a=J("field-richtext-headingselect-6"),l={h1:r,h2:n,h3:o,h4:i,h5:s,h6:a};let c=[];return(e==null?void 0:e.heading)!==!1&&((t=e==null?void 0:e.heading)!=null&&t.levels?(e!=null&&e.heading.levels.includes(1)&&c.push("h1"),e!=null&&e.heading.levels.includes(2)&&c.push("h2"),e!=null&&e.heading.levels.includes(3)&&c.push("h3"),e!=null&&e.heading.levels.includes(4)&&c.push("h4"),e!=null&&e.heading.levels.includes(5)&&c.push("h5"),e!=null&&e.heading.levels.includes(6)&&c.push("h6")):c=["h1","h2","h3","h4","h5","h6"]),g.useMemo(()=>c.map(p=>({value:p,label:l[p],icon:bS[p]})),[c,l])};A();var kS={ul:Pa,ol:lg},wS=e=>{const t=J("field-richtext-listselect-bullet"),r=J("field-richtext-listselect-ordered"),n={ul:t,ol:r};let o=[];return(e==null?void 0:e.listItem)!==!1&&(o=["ul","ol"]),g.useMemo(()=>o.map(i=>({value:i,label:n[i],icon:kS[i]})),[o,n])};A();A();var SS={RichTextMenu:"_RichTextMenu_1ve2j_1","RichTextMenu--form":"_RichTextMenu--form_1ve2j_7","RichTextMenu-group":"_RichTextMenu-group_1ve2j_21","RichTextMenu--inline":"_RichTextMenu--inline_1ve2j_39"};A();A();A();A();var ES={Control:"_Control_id4pm_1","Control--inline":"_Control--inline_id4pm_6"},Xp=ee("Control",ES);function at({icon:e,disabled:t,active:r,onClick:n,title:o}){const{inline:i}=Le();return i?u.jsx("span",{className:Xp({inline:!0}),children:u.jsx(ja,{onClick:n,disabled:t,active:r,label:o,children:e})}):u.jsx("span",{className:Xp(),children:u.jsx(Xe,{onClick:n,disabled:t,active:r,title:o,children:e})})}function CS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-align-left");return u.jsx(at,{icon:u.jsx(Iu,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().setTextAlign("left").run()},disabled:!(t!=null&&t.canAlignLeft),active:t==null?void 0:t.isAlignLeft,title:r})}A();function IS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-align-center");return u.jsx(at,{icon:u.jsx(tg,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().setTextAlign("center").run()},disabled:!(t!=null&&t.canAlignCenter),active:t==null?void 0:t.isAlignCenter,title:r})}A();function jS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-align-right");return u.jsx(at,{icon:u.jsx(ng,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().setTextAlign("right").run()},disabled:!(t!=null&&t.canAlignRight),active:t==null?void 0:t.isAlignRight,title:r})}A();function PS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-align-justify");return u.jsx(at,{icon:u.jsx(rg,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().setTextAlign("justify").run()},disabled:!(t!=null&&t.canAlignJustify),active:t==null?void 0:t.isAlignJustify,title:r})}A();A();function AS(){const e=Le(),t=yS(e.options);return u.jsx(zu,{options:t,onChange:()=>{},value:"left",defaultValue:"left",renderDefaultIcon:Iu})}var zS=g.lazy(()=>Zr(()=>import("./loaded-SMPR6KZF-BOaBwi7x.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(e=>({default:e.AlignSelectLoaded}))),_g=()=>u.jsx(g.Suspense,{fallback:u.jsx(AS,{}),children:u.jsx(zS,{})});A();function tc(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-bold");return u.jsx(at,{icon:u.jsx(iw,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().toggleBold().run()},disabled:!(t!=null&&t.canBold),active:t==null?void 0:t.isBold,title:r})}A();function rc(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-italic");return u.jsx(at,{icon:u.jsx(bw,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().toggleItalic().run()},disabled:!(t!=null&&t.canItalic),active:t==null?void 0:t.isItalic,title:r})}A();function nc(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-underline");return u.jsx(at,{icon:u.jsx(Bw,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().toggleUnderline().run()},disabled:!(t!=null&&t.canUnderline),active:t==null?void 0:t.isUnderline,title:r})}A();function OS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-strikethrough");return u.jsx(at,{icon:u.jsx(Lw,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().toggleStrike().run()},disabled:!(t!=null&&t.canStrike),active:t==null?void 0:t.isStrike,title:r})}A();function DS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-code-inline");return u.jsx(at,{icon:u.jsx(lw,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().toggleCode().run()},disabled:!(t!=null&&t.canInlineCode),active:t==null?void 0:t.isInlineCode,title:r})}A();function MS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-list-bullet");return u.jsx(at,{icon:u.jsx(Pa,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().toggleBulletList().run()},disabled:!(t!=null&&t.canBulletList),active:t==null?void 0:t.isBulletList,title:r})}A();function RS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-list-ordered");return u.jsx(at,{icon:u.jsx(lg,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().toggleOrderedList().run()},disabled:!(t!=null&&t.canOrderedList),active:t==null?void 0:t.isOrderedList,title:r})}A();function TS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-code-block");return u.jsx(at,{icon:u.jsx(Tw,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().toggleCodeBlock().run()},disabled:!(t!=null&&t.canCodeBlock),active:t==null?void 0:t.isCodeBlock,title:r})}A();function LS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-blockquote");return u.jsx(at,{icon:u.jsx(Aw,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().toggleBlockquote().run()},disabled:!(t!=null&&t.canBlockquote),active:t==null?void 0:t.isBlockquote,title:r})}A();function NS(){const{editor:e,editorState:t}=Le(),r=J("field-richtext-horizontalrule");return u.jsx(at,{icon:u.jsx(Cw,{}),onClick:n=>{n.stopPropagation(),e==null||e.chain().focus().setHorizontalRule().run()},disabled:!(t!=null&&t.canHorizontalRule),title:r})}A();A();function FS(){const e=Le(),t=xS(e.options);return u.jsx(zu,{options:t,onChange:()=>{},value:"p",defaultValue:"p",renderDefaultIcon:ow})}var BS=g.lazy(()=>Zr(()=>import("./loaded-JKA25A3T-D2rBvgcz.js"),__vite__mapDeps([7,1,2,3,4,5,6])).then(e=>({default:e.HeadingSelectLoaded}))),yg=()=>u.jsx(g.Suspense,{fallback:u.jsx(FS,{}),children:u.jsx(BS,{})});A();A();function $S(){const e=Le(),t=wS(e.options);return u.jsx(zu,{options:t,onChange:()=>{},value:"p",defaultValue:"p",renderDefaultIcon:Pa})}var WS=g.lazy(()=>Zr(()=>import("./loaded-36WRJPBT-CIarO-qV.js"),__vite__mapDeps([8,1,2,3,4,5,6])).then(e=>({default:e.ListSelectLoaded}))),bg=()=>u.jsx(g.Suspense,{fallback:u.jsx($S,{}),children:u.jsx(WS,{})}),xg=ee("RichTextMenu",SS),Jp=({children:e})=>u.jsx(Ne,{children:e}),Ne=({children:e})=>{const{inline:t}=Le();return u.jsx("div",{className:xg({inline:t,form:!t}),"data-puck-rte-menu":!0,children:e})},Ho=({children:e})=>u.jsx("div",{className:xg("group"),children:e});Ne.Group=Ho;Ne.Control=at;Ne.AlignCenter=IS;Ne.AlignJustify=PS;Ne.AlignLeft=CS;Ne.AlignRight=jS;Ne.AlignSelect=_g;Ne.Blockquote=LS;Ne.Bold=tc;Ne.BulletList=MS;Ne.CodeBlock=TS;Ne.HeadingSelect=yg;Ne.HorizontalRule=NS;Ne.InlineCode=DS;Ne.Italic=rc;Ne.ListSelect=bg;Ne.OrderedList=RS;Ne.Strikethrough=OS;Ne.Underline=nc;var kg=({editor:e=null,editorState:t=null,field:r,readOnly:n,inline:o})=>{const{renderMenu:i,renderInlineMenu:s}=r,a=g.useMemo(()=>s||Jp,[s]),l=g.useMemo(()=>i||Jp,[i]);return u.jsx(vg.Provider,{value:{editor:e,editorState:t,inline:o,options:r.options,readOnly:n},children:o?u.jsx(a,{editor:e,editorState:t,readOnly:n,children:u.jsxs(Ho,{children:[u.jsx(tc,{}),u.jsx(rc,{}),u.jsx(nc,{})]})}):u.jsxs(l,{editor:e,editorState:t,readOnly:n,children:[u.jsxs(Ho,{children:[u.jsx(yg,{}),u.jsx(bg,{})]}),u.jsxs(Ho,{children:[u.jsx(tc,{}),u.jsx(rc,{}),u.jsx(nc,{})]}),u.jsx(Ho,{children:u.jsx(_g,{})})]})})};A();var Qp=ee("RichTextEditor",jh),wg=g.memo(({children:e,menu:t,readOnly:r=!1,field:n,inline:o=!1,editor:i,id:s})=>{const{initialHeight:a}=n,l=H(f=>{var h;return((h=f.currentRichText)==null?void 0:h.id)===s&&o===f.currentRichText.inline}),c=ye(),p=g.useCallback(f=>{var h,v;(f.metaKey||f.ctrlKey)&&f.key.toLowerCase()==="i"&&(f.stopPropagation(),f.preventDefault(),(v=i==null?void 0:(h=i.commands).toggleItalic)==null||v.call(h)),f.key.toLowerCase()==="backspace"&&f.stopPropagation()},[i]),d=g.useCallback(f=>{var h,v;const m=!!((v=(h=f.relatedTarget)==null?void 0:h.closest)!=null&&v.call(h,"[data-puck-rte-menu]"));f.relatedTarget&&!m?c.setState({currentRichText:null}):f.stopPropagation()},[c]);return u.jsxs("div",{className:Qp({editor:!o,inline:o,isActive:l,disabled:r}),style:o?{}:{height:a??192,overflowY:"auto"},onKeyDownCapture:p,onBlur:d,children:[!o&&u.jsx("div",{className:Qp("menu"),children:t}),e]})});wg.displayName="EditorInner";A();var HS=g.lazy(()=>Zr(()=>import("./full-7ZJV44EE-CC-wRESF.js"),__vite__mapDeps([9,1,2,3,4,5,6])).then(e=>({default:e.LoadedRichTextMenuFull}))),VS=e=>u.jsx(g.Suspense,{fallback:u.jsx(kg,D({},e)),children:u.jsx(HS,D({},e))});A();A();A();A();A();A();var Ou=(e,t=e)=>({slot:({value:r,propName:n,field:o,isReadOnly:i})=>{const s=i?t:e;return l=>s(F(D({allow:(o==null?void 0:o.type)==="slot"?o.allow:[],disallow:(o==null?void 0:o.type)==="slot"?o.disallow:[]},l),{zone:n,content:r}))}});A();A();A();function Sg(e,t,r){const n={};return Object.keys(e).forEach(o=>{const i=o;n[i]=s=>{var a=s,{parentId:l}=a,c=Bt(a,["parentId"]);const p=c.propPath.replace(/\[\d+\]/g,"[*]"),d=(t==null?void 0:t[c.propPath])||(t==null?void 0:t[p])||r||!1,f=e[i];return f==null?void 0:f(F(D({},c),{field:c.field,isReadOnly:d,componentId:l}))}}),n}function qS(e,t,r,n,o){const i=g.useMemo(()=>Sg(r,n,o),[r,n,o]),s=g.useMemo(()=>bn(t,i,e).props,[e,t,i]);return g.useMemo(()=>D(D({},t.props),s),[t.props,s])}function Du(e,t,r,n=r,o,i){return qS(e,t,Ou(r,n),o,i)}A();A();var US=ee("RichTextEditor",jh);function Eg({content:e}){return u.jsx("div",{className:US(),children:u.jsx("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:e}})})}A();var oc=(e,t,r)=>{if(!e)return null;if(t.length===0)return r(e);const[n,...o]=t;return Array.isArray(e)?e.map(i=>oc(i,t,r)):F(D({},e),{[n]:oc(e[n],o,r)})},ZS=g.lazy(()=>Zr(()=>import("./Render-DQXAYUBI-LK-1oFa6.js"),__vite__mapDeps([10,11,4,2,3,5,6])).then(e=>({default:e.RichTextRender})));function za(e,t){const r=(i,s=[])=>{if(!i)return[];const a=[];for(const[l,c]of Object.entries(i)){const p=[...s,l];c.type==="richtext"&&a.push({path:p,field:c}),c.type==="array"&&"arrayFields"in c&&a.push(...r(c.arrayFields,p)),c.type==="object"&&"objectFields"in c&&a.push(...r(c.objectFields,p))}return a},n=g.useMemo(()=>r(e),[e]);return g.useMemo(()=>{if(!(n!=null&&n.length))return{};let i=D({},t);for(const{path:s,field:a}of n)i=oc(i,s,l=>u.jsx(g.Suspense,{fallback:u.jsx(Eg,{content:l}),children:u.jsx(ZS,{content:l,field:a})},s.join(".")));return i},[n,t,e])}A();var Mu=e=>u.jsx(Cg,D({},e)),YS=({config:e,item:t,metadata:r})=>{const n=e.components[t.type],o=Du(e,t,s=>u.jsx(Mu,F(D({},s),{config:e,metadata:r}))),i=za(n.fields,o);return u.jsx(n.render,F(D(D({},o),i),{puck:F(D({},o.puck),{metadata:r||{}})}))},Cg=g.forwardRef(function({className:t,style:r,content:n,config:o,metadata:i,as:s},a){const l=s??"div";return u.jsx(l,{className:t,style:r,ref:a,children:n.map(c=>o.components[c.type]?u.jsx(YS,{config:o,item:c,metadata:i},c.props.id):null)})});const ef=e=>Symbol.iterator in e,tf=e=>"entries"in e,rf=(e,t)=>{const r=e instanceof Map?e:new Map(e.entries()),n=t instanceof Map?t:new Map(t.entries());if(r.size!==n.size)return!1;for(const[o,i]of r)if(!n.has(o)||!Object.is(i,n.get(o)))return!1;return!0},GS=(e,t)=>{const r=e[Symbol.iterator](),n=t[Symbol.iterator]();let o=r.next(),i=n.next();for(;!o.done&&!i.done;){if(!Object.is(o.value,i.value))return!1;o=r.next(),i=n.next()}return!!o.done&&!!i.done};function KS(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:ef(e)&&ef(t)?tf(e)&&tf(t)?rf(e,t):GS(e,t):rf({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function $e(e){const t=fn.useRef(void 0);return r=>{const n=e(r);return KS(t.current,n)?t.current:t.current=n}}var XS=Symbol.for("preact-signals");function Oa(){if(pr>1)pr--;else{var e,t=!1;for((function(){var o=Xs;for(Xs=void 0;o!==void 0;){var i=o.S;if(i.v===o.v)for(var s=i.t;s!==void 0;s=s.x)s.i===o.i&&(s.i=i.i);o=o.o}})();ai!==void 0;){var r=ai;for(ai=void 0,Ks++;r!==void 0;){var n=r.u;if(r.u=void 0,r.f&=-3,!(8&r.f)&&jg(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(Ks=0,pr--,t)throw e}}function Ae(e){if(pr>0)return e();ic=++JS,pr++;try{return e()}finally{Oa()}}var si,Ie=void 0;function de(e){var t=Ie,r=si;Ie=void 0,si=void 0;try{return e()}finally{Ie=t,si=r}}var ai=void 0,pr=0,Ks=0,JS=0,ic=0,Xs=void 0,Js=0;function Ig(e){if(Ie!==void 0){var t=e.n;if(t===void 0||t.t!==Ie)return t={i:0,S:e,p:Ie.s,n:void 0,t:Ie,e:void 0,x:void 0,r:t},Ie.s!==void 0&&(Ie.s.n=t),Ie.s=t,e.n=t,32&Ie.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=Ie.s,t.n=void 0,Ie.s.n=t,Ie.s=t),t}}function lt(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}lt.prototype.brand=XS;lt.prototype.h=function(){return!0};lt.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:de(function(){var n;(n=t.W)==null||n.call(t)}))};lt.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&de(function(){var o;(o=t.Z)==null||o.call(t)}))}};lt.prototype.subscribe=function(e){var t=this;return ft(function(){var r=t.value;de(function(){return e(r)})},{name:"sub"})};lt.prototype.valueOf=function(){return this.value};lt.prototype.toString=function(){return this.value+""};lt.prototype.toJSON=function(){return this.value};lt.prototype.peek=function(){var e=this;return de(function(){return e.value})};Object.defineProperty(lt.prototype,"value",{get:function(){var e=Ig(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Ks>100)throw new Error("Cycle detected");(function(r){pr!==0&&Ks===0&&r.l!==ic&&(r.l=ic,Xs={S:r,v:r.v,i:r.i,o:Xs})})(this),this.v=e,this.i++,Js++,pr++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Oa()}}}});function xo(e,t){return new lt(e,t)}function jg(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Pg(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Ag(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function wn(e,t){lt.call(this,void 0,t),this.x=e,this.s=void 0,this.g=Js-1,this.f=4}wn.prototype=new lt;wn.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Js))return!0;if(this.g=Js,this.f|=1,this.i>0&&!jg(this))return this.f&=-2,!0;var e=Ie;try{Pg(this),Ie=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return Ie=e,Ag(this),this.f&=-2,!0};wn.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}lt.prototype.S.call(this,e)};wn.prototype.U=function(e){if(this.t!==void 0&&(lt.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};wn.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(wn.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Ig(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function nf(e,t){return new wn(e,t)}function zg(e){var t=e.m;if(e.m=void 0,typeof t=="function"){pr++;var r=Ie;Ie=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,Ru(e),n}finally{Ie=r,Oa()}}}function Ru(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,zg(e)}function QS(e){if(Ie!==this)throw new Error("Out-of-order effect");Ag(this),Ie=e,this.f&=-2,8&this.f&&Ru(this),Oa()}function ko(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t==null?void 0:t.name,si&&si.push(this)}ko.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.m=t)}finally{e()}};ko.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,zg(this),Pg(this),pr++;var e=Ie;return Ie=this,QS.bind(this,e)};ko.prototype.N=function(){2&this.f||(this.f|=2,this.u=ai,ai=this)};ko.prototype.d=function(){this.f|=8,1&this.f||Ru(this)};ko.prototype.dispose=function(){this.d()};function ft(e,t){var r=new ko(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var e2=Object.create,Tu=Object.defineProperty,t2=Object.defineProperties,r2=Object.getOwnPropertyDescriptor,n2=Object.getOwnPropertyDescriptors,of=Object.getOwnPropertySymbols,o2=Object.prototype.hasOwnProperty,i2=Object.prototype.propertyIsEnumerable,s2=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),wo=e=>{throw TypeError(e)},sc=(e,t,r)=>t in e?Tu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,a2=(e,t)=>{for(var r in t||(t={}))o2.call(t,r)&&sc(e,r,t[r]);if(of)for(var r of of(t))i2.call(t,r)&&sc(e,r,t[r]);return e},l2=(e,t)=>t2(e,n2(t)),sf=(e,t)=>Tu(e,"name",{value:t,configurable:!0}),c2=e=>{var t;return[,,,e2((t=void 0)!=null?t:null)]},Og=["class","method","getter","setter","accessor","field","value","get","set"],Vo=e=>e!==void 0&&typeof e!="function"?wo("Function expected"):e,u2=(e,t,r,n,o)=>({kind:Og[e],name:t,metadata:n,addInitializer:i=>r._?wo("Already initialized"):o.push(Vo(i||null))}),Dg=(e,t)=>sc(t,s2("metadata"),e[3]),Qr=(e,t,r,n)=>{for(var o=0,i=e[t>>1],s=i&&i.length;o<s;o++)t&1?i[o].call(r):n=i[o].call(r,n);return n},So=(e,t,r,n,o,i)=>{var s,a,l,c,p,d=t&7,f=!!(t&8),h=!!(t&16),v=d>3?e.length+1:d?f?1:2:0,m=Og[d+5],y=d>3&&(e[v-1]=[]),x=e[v]||(e[v]=[]),k=d&&(!h&&!f&&(o=o.prototype),d<5&&(d>3||!h)&&r2(d<4?o:{get[r](){return St(this,i)},set[r](_){return Ar(this,i,_)}},r));d?h&&d<4&&sf(i,(d>2?"set ":d>1?"get ":"")+r):sf(o,r);for(var b=n.length-1;b>=0;b--)c=u2(d,r,l={},e[3],x),d&&(c.static=f,c.private=h,p=c.access={has:h?_=>d2(o,_):_=>r in _},d^3&&(p.get=h?_=>(d^1?St:p2)(_,o,d^4?i:k.get):_=>_[r]),d>2&&(p.set=h?(_,S)=>Ar(_,o,S,d^4?i:k.set):(_,S)=>_[r]=S)),a=(0,n[b])(d?d<4?h?i:k[m]:d>4?void 0:{get:k.get,set:k.set}:o,c),l._=1,d^4||a===void 0?Vo(a)&&(d>4?y.unshift(a):d?h?i=a:k[m]=a:o=a):typeof a!="object"||a===null?wo("Object expected"):(Vo(s=a.get)&&(k.get=s),Vo(s=a.set)&&(k.set=s),Vo(s=a.init)&&y.unshift(s));return d||Dg(e,o),k&&Tu(o,r,k),h?d^4?i:k:o},Lu=(e,t,r)=>t.has(e)||wo("Cannot "+r),d2=(e,t)=>Object(t)!==t?wo('Cannot use the "in" operator on this value'):e.has(t),St=(e,t,r)=>(Lu(e,t,"read from private field"),r?r.call(e):t.get(e)),qo=(e,t,r)=>t.has(e)?wo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Ar=(e,t,r,n)=>(Lu(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),p2=(e,t,r)=>(Lu(e,t,"access private method"),r);function ac(e,t){if(t){let r;return nf(()=>{const n=e();return n&&r&&t(r,n)?r:(r=n,n)})}return nf(e)}function Tt(e,t){if(Object.is(e,t))return!0;if(e===null||t===null)return!1;if(typeof e=="function"&&typeof t=="function")return e===t;if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:!e.some((n,o)=>!Tt(n,t[o]));if(typeof e=="object"&&typeof t=="object"){const r=Object.keys(e),n=Object.keys(t);return r.length!==n.length?!1:!r.some(i=>!Tt(e[i],t[i]))}return!1}function pe({get:e},t){return{init(r){return xo(r)},get(){return e.call(this).value},set(r){const n=e.call(this);n.peek()!==r&&(n.value=r)}}}function Me(e,t){const r=new WeakMap;return function(){let n=r.get(this);return n||(n=ac(e.bind(this)),r.set(this,n)),n.value}}function ul(e=!0){return function(t,r){r.addInitializer(function(){const n=r.kind==="field"?this:r.static?this:Object.getPrototypeOf(this),o=Object.getOwnPropertyDescriptor(n,r.name);o&&Object.defineProperty(n,r.name,l2(a2({},o),{enumerable:e}))})}}function Ti(...e){const t=e.map(r=>ft(r));return()=>t.forEach(r=>r())}var Mg,Rg,Tg,Lg,Ng,Fg,ot,Nu,dl,lc,cc,Qe,Fu,pl,Bg,uc,Bu,fl,dc,pc;Fg=[pe],Ng=[pe],Lg=[pe],Tg=[ul()],Rg=[ul()],Mg=[ul()];var Sn=class{constructor(e,t=Object.is){this.defaultValue=e,this.equals=t,Qr(ot,5,this),qo(this,Qe),qo(this,Nu,Qr(ot,8,this)),Qr(ot,11,this),qo(this,Fu,Qr(ot,12,this)),Qr(ot,15,this),qo(this,Bu,Qr(ot,16,this)),Qr(ot,19,this),this.reset=this.reset.bind(this),this.reset()}get current(){return St(this,Qe,dc)}get initial(){return St(this,Qe,lc)}get previous(){return St(this,Qe,Bg)}set current(e){const t=de(()=>St(this,Qe,dc));e&&t&&this.equals(t,e)||Ae(()=>{St(this,Qe,lc)||Ar(this,Qe,e,cc),Ar(this,Qe,t,uc),Ar(this,Qe,e,pc)})}reset(e=this.defaultValue){Ae(()=>{Ar(this,Qe,void 0,uc),Ar(this,Qe,e,cc),Ar(this,Qe,e,pc)})}};ot=c2();Nu=new WeakMap;Qe=new WeakSet;Fu=new WeakMap;Bu=new WeakMap;dl=So(ot,20,"#initial",Fg,Qe,Nu),lc=dl.get,cc=dl.set;pl=So(ot,20,"#previous",Ng,Qe,Fu),Bg=pl.get,uc=pl.set;fl=So(ot,20,"#current",Lg,Qe,Bu),dc=fl.get,pc=fl.set;So(ot,2,"current",Tg,Sn);So(ot,2,"initial",Rg,Sn);So(ot,2,"previous",Mg,Sn);Dg(ot,Sn);function hl(e){return de(()=>{const t={};for(const r in e)t[r]=e[r];return t})}var en,f2=class{constructor(){qo(this,en,new WeakMap)}get(e,t){var r;return e?(r=St(this,en).get(e))==null?void 0:r.get(t):void 0}set(e,t,r){var n;if(e)return St(this,en).has(e)||St(this,en).set(e,new Map),(n=St(this,en).get(e))==null?void 0:n.set(t,r)}clear(e){var t;return e?(t=St(this,en).get(e))==null?void 0:t.clear():void 0}};en=new WeakMap;var h2=Object.create,$g=Object.defineProperty,v2=Object.getOwnPropertyDescriptor,af=Object.getOwnPropertySymbols,g2=Object.prototype.hasOwnProperty,m2=Object.prototype.propertyIsEnumerable,Wg=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Da=e=>{throw TypeError(e)},lf=Math.pow,fc=(e,t,r)=>t in e?$g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_2=(e,t)=>{for(var r in t||(t={}))g2.call(t,r)&&fc(e,r,t[r]);if(af)for(var r of af(t))m2.call(t,r)&&fc(e,r,t[r]);return e},y2=e=>{var t;return[,,,h2((t=e==null?void 0:e[Wg("metadata")])!=null?t:null)]},Hg=["class","method","getter","setter","accessor","field","value","get","set"],Vg=e=>e!==void 0&&typeof e!="function"?Da("Function expected"):e,b2=(e,t,r,n,o)=>({kind:Hg[e],name:t,metadata:n,addInitializer:i=>r._?Da("Already initialized"):o.push(Vg(i||null))}),x2=(e,t)=>fc(t,Wg("metadata"),e[3]),k2=(e,t,r,n)=>{for(var o=0,i=e[t>>1],s=i&&i.length;o<s;o++)i[o].call(r);return n},qg=(e,t,r,n,o,i)=>{for(var s,a,l,c,p=t&7,d=!1,f=!1,h=2,v=Hg[p+5],m=e[h]||(e[h]=[]),y=(o=o.prototype,v2(o,r)),x=n.length-1;x>=0;x--)l=b2(p,r,a={},e[3],m),l.static=d,l.private=f,c=l.access={has:k=>r in k},c.get=k=>k[r],s=(0,n[x])(y[v],l),a._=1,Vg(s)&&(y[v]=s);return y&&$g(o,r,y),o},Ug=(e,t,r)=>t.has(e)||Da("Cannot "+r),w2=(e,t,r)=>(Ug(e,t,"read from private field"),t.get(e)),S2=(e,t,r)=>t.has(e)?Da("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),E2=(e,t,r,n)=>(Ug(e,t,"write to private field"),t.set(e,r),r),tt=class hc{constructor(t,r){this.x=t,this.y=r}static delta(t,r){return new hc(t.x-r.x,t.y-r.y)}static distance(t,r){return Math.hypot(t.x-r.x,t.y-r.y)}static equals(t,r){return t.x===r.x&&t.y===r.y}static from({x:t,y:r}){return new hc(t,r)}},At=class tn{constructor(t,r,n,o){this.left=t,this.top=r,this.width=n,this.height=o,this.scale={x:1,y:1}}get inverseScale(){return{x:1/this.scale.x,y:1/this.scale.y}}translate(t,r){const{top:n,left:o,width:i,height:s,scale:a}=this,l=new tn(o+t,n+r,i,s);return l.scale=_2({},a),l}get boundingRectangle(){const{width:t,height:r,left:n,top:o,right:i,bottom:s}=this;return{width:t,height:r,left:n,top:o,right:i,bottom:s}}get center(){const{left:t,top:r,right:n,bottom:o}=this;return new tt((t+n)/2,(r+o)/2)}get area(){const{width:t,height:r}=this;return t*r}equals(t){if(!(t instanceof tn))return!1;const{left:r,top:n,width:o,height:i}=this;return r===t.left&&n===t.top&&o===t.width&&i===t.height}containsPoint(t){const{top:r,left:n,bottom:o,right:i}=this;return r<=t.y&&t.y<=o&&n<=t.x&&t.x<=i}intersectionArea(t){return t instanceof tn?C2(this,t):0}intersectionRatio(t){const{area:r}=this,n=this.intersectionArea(t);return n/(t.area+r-n)}get bottom(){const{top:t,height:r}=this;return t+r}get right(){const{left:t,width:r}=this;return t+r}get aspectRatio(){const{width:t,height:r}=this;return t/r}get corners(){return[{x:this.left,y:this.top},{x:this.right,y:this.top},{x:this.left,y:this.bottom},{x:this.right,y:this.bottom}]}static from({top:t,left:r,width:n,height:o}){return new tn(r,t,n,o)}static delta(t,r,n={x:"center",y:"center"}){const o=(i,s)=>{const a=n[s],l=s==="x"?i.left:i.top,c=s==="x"?i.width:i.height;return a=="start"?l:a=="end"?l+c:l+c/2};return tt.delta({x:o(t,"x"),y:o(t,"y")},{x:o(r,"x"),y:o(r,"y")})}static intersectionRatio(t,r){return tn.from(t).intersectionRatio(tn.from(r))}};function C2(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),s=o-n,a=i-r;return n<o&&r<i?s*a:0}var Zg,Yg,vc,As,Li,Ma=class extends(vc=Sn,Yg=[Me],Zg=[Me],vc){constructor(t){const r=tt.from(t);super(r,(n,o)=>tt.equals(n,o)),k2(Li,5,this),S2(this,As,0),this.velocity={x:0,y:0}}get delta(){return tt.delta(this.current,this.initial)}get direction(){const{current:t,previous:r}=this;if(!r)return null;const n={x:t.x-r.x,y:t.y-r.y};return!n.x&&!n.y?null:Math.abs(n.x)>Math.abs(n.y)?n.x>0?"right":"left":n.y>0?"down":"up"}get current(){return super.current}set current(t){const{current:r}=this,n=tt.from(t),o={x:n.x-r.x,y:n.y-r.y},i=Date.now(),s=i-w2(this,As),a=l=>Math.round(l/s*100);Ae(()=>{E2(this,As,i),this.velocity={x:a(o.x),y:a(o.y)},super.current=n})}reset(t=this.defaultValue){super.reset(tt.from(t)),this.velocity={x:0,y:0}}};Li=y2(vc);As=new WeakMap;qg(Li,2,"delta",Yg,Ma);qg(Li,2,"direction",Zg,Ma);x2(Li,Ma);function gc({x:e,y:t},r){const n=Math.abs(e),o=Math.abs(t);return typeof r=="number"?Math.sqrt(lf(n,2)+lf(o,2))>r:"x"in r&&"y"in r?n>r.x&&o>r.y:"x"in r?n>r.x:"y"in r?o>r.y:!1}var Gg=(e=>(e.Horizontal="x",e.Vertical="y",e))(Gg||{}),Kg=Object.values(Gg),I2=Object.create,$u=Object.defineProperty,j2=Object.defineProperties,P2=Object.getOwnPropertyDescriptor,A2=Object.getOwnPropertyDescriptors,Qs=Object.getOwnPropertySymbols,Xg=Object.prototype.hasOwnProperty,Jg=Object.prototype.propertyIsEnumerable,Qg=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Eo=e=>{throw TypeError(e)},mc=(e,t,r)=>t in e?$u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Wu=(e,t)=>{for(var r in t||(t={}))Xg.call(t,r)&&mc(e,r,t[r]);if(Qs)for(var r of Qs(t))Jg.call(t,r)&&mc(e,r,t[r]);return e},Hu=(e,t)=>j2(e,A2(t)),cf=(e,t)=>$u(e,"name",{value:t,configurable:!0}),em=(e,t)=>{var r={};for(var n in e)Xg.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Qs)for(var n of Qs(e))t.indexOf(n)<0&&Jg.call(e,n)&&(r[n]=e[n]);return r},Co=e=>{var t;return[,,,I2((t=e==null?void 0:e[Qg("metadata")])!=null?t:null)]},tm=["class","method","getter","setter","accessor","field","value","get","set"],Uo=e=>e!==void 0&&typeof e!="function"?Eo("Function expected"):e,z2=(e,t,r,n,o)=>({kind:tm[e],name:t,metadata:n,addInitializer:i=>r._?Eo("Already initialized"):o.push(Uo(i||null))}),En=(e,t)=>mc(t,Qg("metadata"),e[3]),ce=(e,t,r,n)=>{for(var o=0,i=e[t>>1],s=i&&i.length;o<s;o++)t&1?i[o].call(r):n=i[o].call(r,n);return n},fe=(e,t,r,n,o,i)=>{var s,a,l,c,p,d=t&7,f=!!(t&8),h=!!(t&16),v=d>3?e.length+1:d?f?1:2:0,m=tm[d+5],y=d>3&&(e[v-1]=[]),x=e[v]||(e[v]=[]),k=d&&(!h&&!f&&(o=o.prototype),d<5&&(d>3||!h)&&P2(d<4?o:{get[r](){return De(this,i)},set[r](_){return mt(this,i,_)}},r));d?h&&d<4&&cf(i,(d>2?"set ":d>1?"get ":"")+r):cf(o,r);for(var b=n.length-1;b>=0;b--)c=z2(d,r,l={},e[3],x),d&&(c.static=f,c.private=h,p=c.access={has:h?_=>O2(o,_):_=>r in _},d^3&&(p.get=h?_=>(d^1?De:rm)(_,o,d^4?i:k.get):_=>_[r]),d>2&&(p.set=h?(_,S)=>mt(_,o,S,d^4?i:k.set):(_,S)=>_[r]=S)),a=(0,n[b])(d?d<4?h?i:k[m]:d>4?void 0:{get:k.get,set:k.set}:o,c),l._=1,d^4||a===void 0?Uo(a)&&(d>4?y.unshift(a):d?h?i=a:k[m]=a:o=a):typeof a!="object"||a===null?Eo("Object expected"):(Uo(s=a.get)&&(k.get=s),Uo(s=a.set)&&(k.set=s),Uo(s=a.init)&&y.unshift(s));return d||En(e,o),k&&$u(o,r,k),h?d^4?i:k:o},Vu=(e,t,r)=>t.has(e)||Eo("Cannot "+r),O2=(e,t)=>Object(t)!==t?Eo('Cannot use the "in" operator on this value'):e.has(t),De=(e,t,r)=>(Vu(e,t,"read from private field"),r?r.call(e):t.get(e)),_e=(e,t,r)=>t.has(e)?Eo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),mt=(e,t,r,n)=>(Vu(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),rm=(e,t,r)=>(Vu(e,t,"access private method"),r);function nm(e,t){return{plugin:e,options:t}}function Ni(e){return t=>nm(e,t)}function Si(e){return typeof e=="function"?{plugin:e,options:void 0}:e}var om,Ei,qu,zs;om=[pe];var Je=class{constructor(e,t){this.manager=e,this.options=t,_e(this,qu,ce(Ei,8,this,!1)),ce(Ei,11,this),_e(this,zs,new Set)}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return de(()=>this.disabled)}configure(e){this.options=e}registerEffect(e){const t=ft(e.bind(this));return De(this,zs).add(t),t}destroy(){De(this,zs).forEach(e=>e())}static configure(e){return nm(this,e)}};Ei=Co(null);qu=new WeakMap;zs=new WeakMap;fe(Ei,4,"disabled",om,Je,qu);En(Ei,Je);var Fi=class extends Je{},Os,vl=class{constructor(e){this.manager=e,this.instances=new Map,_e(this,Os,[])}get values(){return Array.from(this.instances.values())}set values(e){const t=e.map(Si).reduce((n,o)=>{const i=n.find(({plugin:s})=>s===o.plugin);return i?(i.options=o.options,n):[...n,o]},[]),r=t.map(({plugin:n})=>n);for(const n of De(this,Os))if(!r.includes(n)){if(n.prototype instanceof Fi)continue;this.unregister(n)}for(const{plugin:n,options:o}of t)this.register(n,o);mt(this,Os,r)}get(e){return this.instances.get(e)}register(e,t){const r=this.instances.get(e);if(r)return r.options!==t&&(r.options=t),r;const n=new e(this.manager,t);return this.instances.set(e,n),n}unregister(e){const t=this.instances.get(e);t&&(t.destroy(),this.instances.delete(e))}destroy(){for(const e of this.instances.values())e.destroy();this.instances.clear()}};Os=new WeakMap;function D2(e,t){return e.priority===t.priority?e.type===t.type?t.value-e.value:t.type-e.type:t.priority-e.priority}var cs=[],qn,Un,M2=class extends Je{constructor(e){super(e),_e(this,qn),_e(this,Un),this.computeCollisions=this.computeCollisions.bind(this),mt(this,Un,xo(cs)),this.destroy=Ti(()=>{const t=this.computeCollisions(),r=de(()=>this.manager.dragOperation.position.current);if(t!==cs){const n=De(this,qn);if(mt(this,qn,r),n&&r.x==n.x&&r.y==n.y)return}else mt(this,qn,void 0);De(this,Un).value=t},()=>{const{dragOperation:t}=this.manager;t.status.initialized&&this.forceUpdate()})}forceUpdate(e=!0){de(()=>{e?De(this,Un).value=this.computeCollisions():mt(this,qn,void 0)})}computeCollisions(e,t){const{registry:r,dragOperation:n}=this.manager,{source:o,shape:i,status:s}=n;if(!s.initialized||!i)return cs;const a=[],l=[];for(const c of e??r.droppables){if(c.disabled||o&&!c.accepts(o))continue;const p=t??c.collisionDetector;if(!p)continue;l.push(c),c.shape;const d=de(()=>p({droppable:c,dragOperation:n}));d&&(c.collisionPriority!=null&&(d.priority=c.collisionPriority),a.push(d))}return l.length===0?cs:(a.sort(D2),a)}get collisions(){return De(this,Un).value}};qn=new WeakMap;Un=new WeakMap;var im,sm,am,Uu,lm,Rt,Zu,Qn,Yu,Gu;am=[pe],sm=[pe],im=[pe];var mr=class rn{constructor(t,r){_e(this,Zu,ce(Rt,8,this)),ce(Rt,11,this),_e(this,Qn),_e(this,Yu,ce(Rt,12,this)),ce(Rt,15,this),_e(this,Gu,ce(Rt,16,this)),ce(Rt,19,this);const{effects:n,id:o,data:i={},disabled:s=!1,register:a=!0}=t;let l=o;mt(this,Qn,xo(o)),this.manager=r,this.data=i,this.disabled=s,this.effects=()=>{var c;return[()=>{const{id:p,manager:d}=this;if(p!==l)return l=p,d==null||d.registry.register(this),()=>d==null?void 0:d.registry.unregister(this)},...(c=n==null?void 0:n())!=null?c:[]]},this.register=this.register.bind(this),this.unregister=this.unregister.bind(this),this.destroy=this.destroy.bind(this),r&&a&&queueMicrotask(this.register)}get id(){var t,r;const n=De(this,Qn).value;return(r=(t=rn.pendingIdChanges)==null?void 0:t.get(this))!=null?r:n}set id(t){var r,n;const o=(n=(r=rn.pendingIdChanges)==null?void 0:r.get(this))!=null?n:De(this,Qn).peek();t!==o&&(rn.pendingIdChanges||(rn.pendingIdChanges=new Map,queueMicrotask(()=>{var i;return rm(i=rn,Uu,lm).call(i)})),rn.pendingIdChanges.set(this,t))}register(){var t;return(t=this.manager)==null?void 0:t.registry.register(this)}unregister(){var t;(t=this.manager)==null||t.registry.unregister(this)}destroy(){var t;(t=this.manager)==null||t.registry.unregister(this)}};Rt=Co(null);Uu=new WeakSet;lm=function(){const e=mr.pendingIdChanges;mr.pendingIdChanges=null,e&&Ae(()=>{for(const[t,r]of e)De(t,Qn).value=r})};Zu=new WeakMap;Qn=new WeakMap;Yu=new WeakMap;Gu=new WeakMap;fe(Rt,4,"manager",am,mr,Zu);fe(Rt,4,"data",sm,mr,Yu);fe(Rt,4,"disabled",im,mr,Gu);_e(mr,Uu);En(Rt,mr);mr.pendingIdChanges=null;var Ra=mr,uf=class{constructor(){this.map=xo(new Map),this.cleanupFunctions=new WeakMap,this.register=(e,t)=>{const r=this.map.peek(),n=r.get(e),o=()=>this.unregister(e,t);if(n===t)return o;if(n&&n.id===e){const a=this.cleanupFunctions.get(n);a==null||a(),this.cleanupFunctions.delete(n)}const i=new Map(r);for(const[a,l]of r)if(l===t&&a!==e){i.delete(a);break}i.set(e,t),this.map.value=i;const s=Ti(...t.effects());return this.cleanupFunctions.set(t,s),o},this.unregister=(e,t)=>{const r=this.map.peek();if(r.get(e)!==t)return;const n=this.cleanupFunctions.get(t);n==null||n(),this.cleanupFunctions.delete(t);const o=new Map(r);o.delete(e),this.map.value=o}}[Symbol.iterator](){return this.map.peek().values()}get value(){return this.map.value.values()}has(e){return this.map.value.has(e)}get(e){return this.map.value.get(e)}destroy(){for(const e of this){const t=this.cleanupFunctions.get(e);t==null||t(),e.destroy()}this.map.value=new Map}},cm,um,dm,pm,fm,hm,_c,it,Ku,Xu,Ju,tr=class extends(_c=Ra,hm=[pe],fm=[pe],pm=[pe],dm=[Me],um=[Me],cm=[Me],_c){constructor(t,r){var n=t,{modifiers:o,type:i,sensors:s,plugins:a,effects:l}=n,c=em(n,["modifiers","type","sensors","plugins","effects"]);super(Hu(Wu({},c),{effects:()=>{var p;return[...(p=l==null?void 0:l())!=null?p:[],()=>{const{manager:d,plugins:f}=this;if(!(!d||!f))for(const h of f){const{plugin:v}=Si(h);d.registry.plugins.register(v)}}]}}),r),ce(it,5,this),_e(this,Ku,ce(it,8,this)),ce(it,11,this),_e(this,Xu,ce(it,12,this)),ce(it,15,this),_e(this,Ju,ce(it,16,this,this.isDragSource?"dragging":"idle")),ce(it,19,this),this.type=i,this.sensors=s,this.modifiers=o,this.alignment=c.alignment,this.plugins=a}pluginConfig(t){if(this.plugins)for(const r of this.plugins){const n=Si(r);if(n.plugin===t)return n.options}}get isDropping(){return this.status==="dropping"&&this.isDragSource}get isDragging(){return this.status==="dragging"&&this.isDragSource}get isDragSource(){var t,r;return((r=(t=this.manager)==null?void 0:t.dragOperation.source)==null?void 0:r.id)===this.id}};it=Co(_c);Ku=new WeakMap;Xu=new WeakMap;Ju=new WeakMap;fe(it,4,"type",hm,tr,Ku);fe(it,4,"modifiers",fm,tr,Xu);fe(it,4,"status",pm,tr,Ju);fe(it,2,"isDropping",dm,tr);fe(it,2,"isDragging",um,tr);fe(it,2,"isDragSource",cm,tr);En(it,tr);var vm,gm,mm,_m,ym,bm,yc,Fe,Qu,ed,td,rd,nd,rr=class extends(yc=Ra,bm=[pe],ym=[pe],_m=[pe],mm=[pe],gm=[pe],vm=[Me],yc){constructor(t,r){var n=t,{accept:o,collisionDetector:i,collisionPriority:s,type:a}=n,l=em(n,["accept","collisionDetector","collisionPriority","type"]);super(l,r),ce(Fe,5,this),_e(this,Qu,ce(Fe,8,this)),ce(Fe,11,this),_e(this,ed,ce(Fe,12,this)),ce(Fe,15,this),_e(this,td,ce(Fe,16,this)),ce(Fe,19,this),_e(this,rd,ce(Fe,20,this)),ce(Fe,23,this),_e(this,nd,ce(Fe,24,this)),ce(Fe,27,this),this.accept=o,this.collisionDetector=i,this.collisionPriority=s,this.type=a}accepts(t){const{accept:r}=this;return r?typeof r=="function"?r(t):t.type?Array.isArray(r)?r.includes(t.type):t.type===r:!1:!0}get isDropTarget(){var t,r;return((r=(t=this.manager)==null?void 0:t.dragOperation.target)==null?void 0:r.id)===this.id}};Fe=Co(yc);Qu=new WeakMap;ed=new WeakMap;td=new WeakMap;rd=new WeakMap;nd=new WeakMap;fe(Fe,4,"accept",bm,rr,Qu);fe(Fe,4,"type",ym,rr,ed);fe(Fe,4,"collisionDetector",_m,rr,td);fe(Fe,4,"collisionPriority",mm,rr,rd);fe(Fe,4,"shape",gm,rr,nd);fe(Fe,2,"isDropTarget",vm,rr);En(Fe,rr);var R2=class{constructor(){this.registry=new Map}addEventListener(e,t){const{registry:r}=this,n=new Set(r.get(e));return n.add(t),r.set(e,n),()=>this.removeEventListener(e,t)}removeEventListener(e,t){const{registry:r}=this,n=new Set(r.get(e));n.delete(t),r.set(e,n)}dispatch(e,...t){const{registry:r}=this,n=r.get(e);if(n)for(const o of n)o(...t)}},T2=class extends R2{constructor(e){super(),this.manager=e}dispatch(e,t){const r=[t,this.manager];super.dispatch(e,...r)}};function Ds(e,t=!0){let r=!1;return Hu(Wu({},e),{cancelable:t,get defaultPrevented(){return r},preventDefault(){t&&(r=!0)}})}var L2=class extends Fi{constructor(e){super(e);const t=(n,o)=>n.map(({id:i})=>i).join("")===o.map(({id:i})=>i).join("");let r=[];this.destroy=Ti(()=>{const{dragOperation:n,collisionObserver:o}=e;n.status.initializing&&(r=[],o.enable())},()=>{const{collisionObserver:n,monitor:o}=e,{collisions:i}=n;if(n.isDisabled()||Ra.pendingIdChanges)return;const s=Ds({collisions:i});if(o.dispatch("collision",s),s.defaultPrevented||t(i,r))return;r=i;const[a]=i;de(()=>{var l;(a==null?void 0:a.id)!==((l=e.dragOperation.target)==null?void 0:l.id)&&(n.disable(),e.actions.setDropTarget(a==null?void 0:a.id).then(()=>{n.enable()}))})})}},Ct=(e=>(e[e.Lowest=0]="Lowest",e[e.Low=1]="Low",e[e.Normal=2]="Normal",e[e.High=3]="High",e[e.Highest=4]="Highest",e))(Ct||{}),nr=(e=>(e[e.Collision=0]="Collision",e[e.ShapeIntersection=1]="ShapeIntersection",e[e.PointerIntersection=2]="PointerIntersection",e))(nr||{}),xm,km,wm,Sm,Em,Cm,Im,jt,od;Im=[pe],Cm=[Me],Em=[Me],Sm=[Me],wm=[Me],km=[Me],xm=[Me];var xr=class{constructor(){ce(jt,5,this),_e(this,od,ce(jt,8,this,"idle")),ce(jt,11,this)}get current(){return this.value}get idle(){return this.value==="idle"}get initializing(){return this.value==="initializing"}get initialized(){const{value:e}=this;return e!=="idle"&&e!=="initialization-pending"}get dragging(){return this.value==="dragging"}get dropped(){return this.value==="dropped"}set(e){this.value=e}};jt=Co(null);od=new WeakMap;fe(jt,4,"value",Im,xr,od);fe(jt,2,"current",Cm,xr);fe(jt,2,"idle",Em,xr);fe(jt,2,"initializing",Sm,xr);fe(jt,2,"initialized",wm,xr);fe(jt,2,"dragging",km,xr);fe(jt,2,"dropped",xm,xr);En(jt,xr);var N2=class{constructor(e){this.manager=e}setDragSource(e){const{dragOperation:t}=this.manager;t.sourceIdentifier=typeof e=="string"||typeof e=="number"?e:e.id}setDropTarget(e){return de(()=>{const{dragOperation:t}=this.manager,r=e??null;if(t.targetIdentifier===r)return Promise.resolve(!1);t.targetIdentifier=r;const n=Ds({operation:t.snapshot()});return t.status.dragging&&this.manager.monitor.dispatch("dragover",n),this.manager.renderer.rendering.then(()=>n.defaultPrevented)})}start(e){return de(()=>{const{dragOperation:t}=this.manager;if(e.source!=null&&this.setDragSource(e.source),!t.source)throw new Error("Cannot start a drag operation without a drag source");if(!t.status.idle)throw new Error("Cannot start a drag operation while another is active");const n=new AbortController,{event:o,coordinates:i}=e;Ae(()=>{t.status.set("initialization-pending"),t.shape=null,t.canceled=!1,t.activatorEvent=o??null,t.position.reset(i)});const s=Ds({operation:t.snapshot()});return this.manager.monitor.dispatch("beforedragstart",s),s.defaultPrevented?(t.reset(),n.abort(),n):(t.status.set("initializing"),t.controller=n,this.manager.renderer.rendering.then(()=>{if(n.signal.aborted)return;const{status:a}=t;a.current==="initializing"&&Ae(()=>{t.status.set("dragging"),this.manager.monitor.dispatch("dragstart",{nativeEvent:o,operation:t.snapshot(),cancelable:!1})})}),n)})}move(e){return de(()=>{var t,r;const{dragOperation:n}=this.manager,{status:o,controller:i}=n;if(!o.dragging||!i||i.signal.aborted)return;const s=Ds({nativeEvent:e.event,operation:n.snapshot(),by:e.by,to:e.to},(t=e.cancelable)!=null?t:!0);((r=e.propagate)==null||r)&&this.manager.monitor.dispatch("dragmove",s),queueMicrotask(()=>{var a,l,c,p,d;if(s.defaultPrevented)return;const f=(d=e.to)!=null?d:{x:n.position.current.x+((l=(a=e.by)==null?void 0:a.x)!=null?l:0),y:n.position.current.y+((p=(c=e.by)==null?void 0:c.y)!=null?p:0)};n.position.current=f})})}stop(e={}){return de(()=>{var t,r;const{dragOperation:n}=this.manager,{controller:o}=n;if(!o||o.signal.aborted)return;let i;const s=()=>{const l={resume:()=>{},abort:()=>{}};return i=new Promise((c,p)=>{l.resume=c,l.abort=p}),l};o.abort();const a=()=>{this.manager.renderer.rendering.then(()=>{n.status.set("dropped");const l=de(()=>{var p;return((p=n.source)==null?void 0:p.status)==="dropping"}),c=()=>{n.controller===o&&(n.controller=void 0),n.reset()};if(l){const{source:p}=n,d=ft(()=>{(p==null?void 0:p.status)==="idle"&&(d(),c())})}else this.manager.renderer.rendering.then(c)})};n.canceled=(t=e.canceled)!=null?t:!1,this.manager.monitor.dispatch("dragend",{nativeEvent:e.event,operation:n.snapshot(),canceled:(r=e.canceled)!=null?r:!1,suspend:s}),i?i.then(a).catch(()=>n.reset()):a()})}},io=class extends Je{constructor(e,t){super(e,t),this.manager=e,this.options=t}},F2=class extends AbortController{constructor(e,t){super(),this.constraints=e,this.onActivate=t,this.activated=!1;for(const r of e??[])r.controller=this}onEvent(e){var t;if(!this.activated)if((t=this.constraints)!=null&&t.length)for(const r of this.constraints)r.onEvent(e);else this.activate(e)}activate(e){this.activated||(this.activated=!0,this.onActivate(e))}abort(e){this.activated=!1,super.abort(e)}},Ms,jm=class{constructor(e){this.options=e,_e(this,Ms)}set controller(e){mt(this,Ms,e),e.signal.addEventListener("abort",()=>this.abort())}activate(e){var t;(t=De(this,Ms))==null||t.activate(e)}};Ms=new WeakMap;var df=class extends Je{constructor(e,t){super(e,t),this.manager=e,this.options=t}apply(e){return e.transform}},B2=class{constructor(e){this.draggables=new uf,this.droppables=new uf,this.plugins=new vl(e),this.sensors=new vl(e),this.modifiers=new vl(e)}register(e,t){if(e instanceof tr)return this.draggables.register(e.id,e);if(e instanceof rr)return this.droppables.register(e.id,e);if(e.prototype instanceof df)return this.modifiers.register(e,t);if(e.prototype instanceof io)return this.sensors.register(e,t);if(e.prototype instanceof Je)return this.plugins.register(e,t);throw new Error("Invalid instance type")}unregister(e){if(e instanceof Ra)return e instanceof tr?this.draggables.unregister(e.id,e):e instanceof rr?this.droppables.unregister(e.id,e):()=>{};if(e.prototype instanceof df)return this.modifiers.unregister(e);if(e.prototype instanceof io)return this.sensors.unregister(e);if(e.prototype instanceof Je)return this.plugins.unregister(e);throw new Error("Invalid instance type")}destroy(){this.draggables.destroy(),this.droppables.destroy(),this.plugins.destroy(),this.sensors.destroy(),this.modifiers.destroy()}},Pm,Am,zm,Om,Dm,Mm,Rm,Tm,Lm,Zo,Rs,Zn,Pe,id,sd,ad,ld,cd,Yo;Lm=[Me],Tm=[pe],Rm=[pe],Mm=[pe],Dm=[pe],Om=[pe],zm=[Me],Am=[Me],Pm=[Me];var $t=class{constructor(e){ce(Pe,5,this),_e(this,Zo),_e(this,Rs),_e(this,Zn,new Sn(void 0,(t,r)=>t&&r?t.equals(r):t===r)),this.status=new xr,_e(this,id,ce(Pe,8,this,!1)),ce(Pe,11,this),_e(this,sd,ce(Pe,12,this,null)),ce(Pe,15,this),_e(this,ad,ce(Pe,16,this,null)),ce(Pe,19,this),_e(this,ld,ce(Pe,20,this,null)),ce(Pe,23,this),_e(this,cd,ce(Pe,24,this,[])),ce(Pe,27,this),this.position=new Ma({x:0,y:0}),_e(this,Yo,{x:0,y:0}),mt(this,Zo,e)}get shape(){const{current:e,initial:t,previous:r}=De(this,Zn);return!e||!t?null:{current:e,initial:t,previous:r}}set shape(e){e?De(this,Zn).current=e:De(this,Zn).reset()}get source(){var e;const t=this.sourceIdentifier;if(t==null)return null;const r=De(this,Zo).registry.draggables.get(t);return r&&mt(this,Rs,r),(e=r??De(this,Rs))!=null?e:null}get target(){var e;const t=this.targetIdentifier;return t!=null&&(e=De(this,Zo).registry.droppables.get(t))!=null?e:null}get transform(){const{x:e,y:t}=this.position.delta;let r={x:e,y:t};for(const n of this.modifiers)r=n.apply(Hu(Wu({},this.snapshot()),{transform:r}));return mt(this,Yo,r),r}snapshot(){return de(()=>({source:this.source,target:this.target,activatorEvent:this.activatorEvent,transform:De(this,Yo),shape:this.shape?hl(this.shape):null,position:hl(this.position),status:hl(this.status),canceled:this.canceled}))}reset(){Ae(()=>{this.status.set("idle"),this.sourceIdentifier=null,this.targetIdentifier=null,De(this,Zn).reset(),this.position.reset({x:0,y:0}),mt(this,Yo,{x:0,y:0}),this.modifiers=[]})}};Pe=Co(null);Zo=new WeakMap;Rs=new WeakMap;Zn=new WeakMap;id=new WeakMap;sd=new WeakMap;ad=new WeakMap;ld=new WeakMap;cd=new WeakMap;Yo=new WeakMap;fe(Pe,2,"shape",Lm,$t);fe(Pe,4,"canceled",Tm,$t,id);fe(Pe,4,"activatorEvent",Rm,$t,sd);fe(Pe,4,"sourceIdentifier",Mm,$t,ad);fe(Pe,4,"targetIdentifier",Dm,$t,ld);fe(Pe,4,"modifiers",Om,$t,cd);fe(Pe,2,"source",zm,$t);fe(Pe,2,"target",Am,$t);fe(Pe,2,"transform",Pm,$t);En(Pe,$t);var $2={get rendering(){return Promise.resolve()}};function Ft(e,t){return typeof e=="function"?e(t):e??t}var W2=class{constructor(t){this.destroy=()=>{this.dragOperation.status.idle||this.actions.stop({canceled:!0}),this.dragOperation.modifiers.forEach(f=>f.destroy()),this.registry.destroy(),this.collisionObserver.destroy()};var r;const n=t??{},o=Ft(n.plugins,[]),i=Ft(n.sensors,[]),s=Ft(n.modifiers,[]),a=(r=n.renderer)!=null?r:$2,l=new T2(this),c=new B2(this);this.registry=c,this.monitor=l,this.renderer=a,this.actions=new N2(this),this.dragOperation=new $t(this),this.collisionObserver=new M2(this),this.plugins=[L2,...o],this.modifiers=s,this.sensors=i;const{destroy:p}=this,d=Ti(()=>{var f,h,v;const m=de(()=>this.dragOperation.modifiers),y=this.modifiers;for(const x of m)y.includes(x)||x.destroy();this.dragOperation.modifiers=(v=(h=(f=this.dragOperation.source)==null?void 0:f.modifiers)==null?void 0:h.map(x=>{const{plugin:k,options:b}=Si(x);return new k(this,b)}))!=null?v:y});this.destroy=()=>{d(),p()}}get plugins(){return this.registry.plugins.values}set plugins(t){this.registry.plugins.values=t}get modifiers(){return this.registry.modifiers.values}set modifiers(t){this.registry.modifiers.values=t}get sensors(){return this.registry.sensors.values}set sensors(t){this.registry.sensors.values=t}},Nm=e=>{throw TypeError(e)},ud=(e,t,r)=>t.has(e)||Nm("Cannot "+r),le=(e,t,r)=>(ud(e,t,"read from private field"),t.get(e)),ut=(e,t,r)=>t.has(e)?Nm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ht=(e,t,r,n)=>(ud(e,t,"write to private field"),t.set(e,r),r),Fm=(e,t,r)=>(ud(e,t,"access private method"),r);function Ta(e){return e?e instanceof KeyframeEffect?!0:"getKeyframes"in e&&typeof e.getKeyframes=="function":!1}function Bm(e,t){const r=e.getAnimations();let n=null;for(const o of r){if(o.playState!=="running")continue;const{effect:i}=o,a=(Ta(i)?i.getKeyframes():[]).filter(t);a.length>0&&(n=[a[a.length-1],o])}return n}function La(e){const{width:t,height:r,top:n,left:o,bottom:i,right:s}=e.getBoundingClientRect();return{width:t,height:r,top:n,left:o,bottom:i,right:s}}function dd(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Bi(e){return"nodeType"in e}function xt(e){var t,r,n;return e?dd(e)?e:Bi(e)?"defaultView"in e?(t=e.defaultView)!=null?t:window:(n=(r=e.ownerDocument)==null?void 0:r.defaultView)!=null?n:window:window:window}function pd(e){const{Document:t}=xt(e);return e instanceof t||"nodeType"in e&&e.nodeType===Node.DOCUMENT_NODE}function Hr(e){return!e||dd(e)?!1:e instanceof xt(e).HTMLElement||"namespaceURI"in e&&typeof e.namespaceURI=="string"&&e.namespaceURI.endsWith("html")}function $m(e){return e instanceof xt(e).SVGElement||"namespaceURI"in e&&typeof e.namespaceURI=="string"&&e.namespaceURI.endsWith("svg")}function Io(e){return e?dd(e)?e.document:Bi(e)?pd(e)?e:Hr(e)||$m(e)?e.ownerDocument:document:document:document}function H2(e){var t,r,n,o;const{documentElement:i}=Io(e),s=xt(e).visualViewport,a=(t=s==null?void 0:s.width)!=null?t:i.clientWidth,l=(r=s==null?void 0:s.height)!=null?r:i.clientHeight,c=(n=s==null?void 0:s.offsetTop)!=null?n:0,p=(o=s==null?void 0:s.offsetLeft)!=null?o:0;return{top:c,left:p,right:p+a,bottom:c+l,width:a,height:l}}function V2(e,t){if(q2(e)&&e.open===!1)return!1;const{overflow:r,overflowX:n,overflowY:o}=getComputedStyle(e);return r==="visible"&&n==="visible"&&o==="visible"}function q2(e){return e.tagName==="DETAILS"}function Ci(e,t=e.getBoundingClientRect(),r=0){var n,o,i,s,a;let l=t;const{ownerDocument:c}=e,p=(n=c.defaultView)!=null?n:window;let d=e.parentElement;for(;d&&d!==c.documentElement;){if(!V2(d)){const b=d.getBoundingClientRect(),_=r*(b.bottom-b.top),S=r*(b.right-b.left),w=r*(b.bottom-b.top),j=r*(b.right-b.left);l={top:Math.max(l.top,b.top-_),right:Math.min(l.right,b.right+S),bottom:Math.min(l.bottom,b.bottom+w),left:Math.max(l.left,b.left-j),width:0,height:0},l.width=l.right-l.left,l.height=l.bottom-l.top}d=d.parentElement}const f=p.visualViewport,h=(o=f==null?void 0:f.offsetTop)!=null?o:0,v=(i=f==null?void 0:f.offsetLeft)!=null?i:0,m=(s=f==null?void 0:f.width)!=null?s:p.innerWidth,y=(a=f==null?void 0:f.height)!=null?a:p.innerHeight,x=r*y,k=r*m;return l={top:Math.max(l.top,h-x),right:Math.min(l.right,v+m+k),bottom:Math.min(l.bottom,h+y+x),left:Math.max(l.left,v-k),width:0,height:0},l.width=l.right-l.left,l.height=l.bottom-l.top,l.width<0&&(l.width=0),l.height<0&&(l.height=0),l}function so(e){return{x:e.clientX,y:e.clientY}}var Wm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bc(e=document,t=new Set){if(t.has(e))return[];t.add(e);const r=[e];for(const n of Array.from(e.querySelectorAll("iframe, frame")))try{const o=n.contentDocument;o&&!t.has(o)&&r.push(...bc(o,t))}catch{}try{const n=e.defaultView;if(n&&n!==window.top){const o=n.parent;o&&o.document&&o.document!==e&&r.push(...bc(o.document,t))}}catch{}return r}function fd(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function Hm(){var e,t;const r=fd()?window.visualViewport:null;return{x:(e=r==null?void 0:r.offsetLeft)!=null?e:0,y:(t=r==null?void 0:r.offsetTop)!=null?t:0}}function hd(e){return!e||!Bi(e)?!1:e instanceof xt(e).ShadowRoot}function ea(e){if(e&&Bi(e)){let t=e.getRootNode();if(hd(t))return t;if(t instanceof Document)return t}return Io(e)}function vd(e){return e.matchMedia("(prefers-reduced-motion: reduce)").matches}function U2(e){const t="input, textarea, select, canvas, [contenteditable]",r=e.cloneNode(!0),n=Array.from(e.querySelectorAll(t));return Array.from(r.querySelectorAll(t)).forEach((i,s)=>{const a=n[s];if(pf(i)&&pf(a)&&(i.type!=="file"&&(i.value=a.value),i.type==="radio"&&i.name&&(i.name=`Cloned__${i.name}`)),ff(i)&&ff(a)&&a.width>0&&a.height>0){const l=i.getContext("2d");l==null||l.drawImage(a,0,0)}}),r}function pf(e){return"value"in e}function ff(e){return e.tagName==="CANVAS"}function Vm(e,{x:t,y:r}){const n=e.elementFromPoint(t,r);if(Z2(n)){const{contentDocument:o}=n;if(o){const{left:i,top:s}=n.getBoundingClientRect();return Vm(o,{x:t-i,y:r-s})}}return n}function Z2(e){return(e==null?void 0:e.tagName)==="IFRAME"}var xc=new WeakMap;function Y2(e){return!!e.closest(`
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      a[href],
      [contenteditable]:not([contenteditable="false"])
    `)}var qm=class{constructor(){this.entries=new Set,this.clear=()=>{for(const e of this.entries){const[t,{type:r,listener:n,options:o}]=e;t.removeEventListener(r,n,o)}this.entries.clear()}}bind(e,t){const r=Array.isArray(e)?e:[e],n=Array.isArray(t)?t:[t],o=[];for(const s of r)for(const a of n){const{type:l,listener:c,options:p}=a,d=[s,a];s.addEventListener(l,c,p),this.entries.add(d),o.push(d)}const i=this.entries;return function(){for(const a of o){const[l,{type:c,listener:p,options:d}]=a;l.removeEventListener(c,p,d),i.delete(a)}}}};function ao(e){const t=e==null?void 0:e.ownerDocument.defaultView;if(t&&t.self!==t.parent)return t.frameElement}function G2(e){const t=new Set;let r=ao(e);for(;r;)t.add(r),r=ao(r);return t}function K2(e,t){const r=setTimeout(e,t);return()=>clearTimeout(r)}function Um(e,t){const r=()=>performance.now();let n,o;return function(...i){const s=this;o?(n==null||n(),n=K2(()=>{e.apply(s,i),o=r()},t-(r()-o))):(e.apply(s,i),o=r())}}function X2(e,t){return e===t?!0:!e||!t?!1:e.top==t.top&&e.left==t.left&&e.right==t.right&&e.bottom==t.bottom}function J2(e,t=e.getBoundingClientRect()){const{width:r,height:n}=Ci(e,t);return r>0&&n>0}var Q2=Wm?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},Ts,eE=class extends Q2{constructor(e){super(t=>{if(!le(this,Ts)){ht(this,Ts,!0);return}e(t,this)}),ut(this,Ts,!1)}};Ts=new WeakMap;var hf=Array.from({length:100},(e,t)=>t/100),Zm=75,nn,ta,jr,on,Go,Ge,li,Ko,ra,Ym,Gm,Km=class{constructor(e,t,r={debug:!1,skipInitial:!1}){this.element=e,this.callback=t,ut(this,ra),this.disconnect=()=>{var i,s,a;ht(this,li,!0),(i=le(this,jr))==null||i.disconnect(),(s=le(this,on))==null||s.disconnect(),le(this,Go).disconnect(),(a=le(this,Ge))==null||a.remove()},ut(this,nn,!0),ut(this,ta),ut(this,jr),ut(this,on),ut(this,Go),ut(this,Ge),ut(this,li,!1),ut(this,Ko,Um(()=>{var i,s,a;const{element:l}=this;if((i=le(this,on))==null||i.disconnect(),le(this,li)||!le(this,nn)||!l.isConnected)return;const c=(s=l.ownerDocument)!=null?s:document,{innerHeight:p,innerWidth:d}=(a=c.defaultView)!=null?a:window,f=l.getBoundingClientRect(),h=Ci(l,f),{top:v,left:m,bottom:y,right:x}=h,k=-Math.floor(v),b=-Math.floor(m),_=-Math.floor(d-x),S=-Math.floor(p-y),w=`${k}px ${_}px ${S}px ${b}px`;this.boundingClientRect=f,ht(this,on,new IntersectionObserver(j=>{const[C]=j,{intersectionRect:I}=C;(C.intersectionRatio!==1?C.intersectionRatio:At.intersectionRatio(I,Ci(l)))!==1&&le(this,Ko).call(this)},{threshold:hf,rootMargin:w,root:c})),le(this,on).observe(l),Fm(this,ra,Ym).call(this)},Zm)),this.boundingClientRect=e.getBoundingClientRect(),ht(this,nn,J2(e,this.boundingClientRect));let n=!0;this.callback=i=>{n&&(n=!1,r.skipInitial)||t(i)};const o=e.ownerDocument;r!=null&&r.debug&&(ht(this,Ge,document.createElement("div")),le(this,Ge).style.background="rgba(0,0,0,0.15)",le(this,Ge).style.position="fixed",le(this,Ge).style.pointerEvents="none",o.body.appendChild(le(this,Ge))),ht(this,Go,new IntersectionObserver(i=>{var s,a;const l=i[i.length-1],{boundingClientRect:c,isIntersecting:p}=l,{width:d,height:f}=c,h=le(this,nn);ht(this,nn,p),!(!d&&!f)&&(h&&!p?((s=le(this,on))==null||s.disconnect(),this.callback(null),(a=le(this,jr))==null||a.disconnect(),ht(this,jr,void 0),le(this,Ge)&&(le(this,Ge).style.visibility="hidden")):le(this,Ko).call(this),p&&!le(this,jr)&&(ht(this,jr,new eE(le(this,Ko))),le(this,jr).observe(e)))},{threshold:hf,root:o})),le(this,nn)&&!r.skipInitial&&this.callback(this.boundingClientRect),le(this,Go).observe(e)}};nn=new WeakMap;ta=new WeakMap;jr=new WeakMap;on=new WeakMap;Go=new WeakMap;Ge=new WeakMap;li=new WeakMap;Ko=new WeakMap;ra=new WeakSet;Ym=function(){le(this,li)||(Fm(this,ra,Gm).call(this),!X2(this.boundingClientRect,le(this,ta))&&(this.callback(this.boundingClientRect),ht(this,ta,this.boundingClientRect)))};Gm=function(){if(le(this,Ge)){const{top:e,left:t,width:r,height:n}=Ci(this.element);le(this,Ge).style.overflow="hidden",le(this,Ge).style.visibility="visible",le(this,Ge).style.top=`${Math.floor(e)}px`,le(this,Ge).style.left=`${Math.floor(t)}px`,le(this,Ge).style.width=`${Math.floor(r)}px`,le(this,Ge).style.height=`${Math.floor(n)}px`}};var us=new WeakMap,ds=new WeakMap;function tE(e,t){let r=us.get(e);return r||(r={disconnect:new Km(e,o=>{const i=us.get(e);i&&i.callbacks.forEach(s=>s(o))},{skipInitial:!0}).disconnect,callbacks:new Set}),r.callbacks.add(t),us.set(e,r),()=>{r.callbacks.delete(t),r.callbacks.size===0&&(us.delete(e),r.disconnect())}}function rE(e,t){const r=new Set;for(const n of e){const o=tE(n,t);r.add(o)}return()=>r.forEach(n=>n())}function nE(e,t){var r;const n=e.ownerDocument;if(!ds.has(n)){const s=new AbortController,a=new Set;document.addEventListener("scroll",l=>a.forEach(c=>c(l)),{capture:!0,passive:!0,signal:s.signal}),ds.set(n,{disconnect:()=>s.abort(),listeners:a})}const{listeners:o,disconnect:i}=(r=ds.get(n))!=null?r:{};return!o||!i?()=>{}:(o.add(t),()=>{o.delete(t),o.size===0&&(i(),ds.delete(n))})}var Xo,Jo,Ls,kc,oE=class{constructor(e,t,r){this.callback=t,ut(this,Xo),ut(this,Jo,!1),ut(this,Ls),ut(this,kc,Um(s=>{if(!le(this,Jo)&&s.target&&"contains"in s.target&&typeof s.target.contains=="function"){for(const a of le(this,Ls))if(s.target.contains(a)){this.callback(le(this,Xo).boundingClientRect);break}}},Zm));const n=G2(e),o=rE(n,t),i=nE(e,le(this,kc));ht(this,Ls,n),ht(this,Xo,new Km(e,t,r)),this.disconnect=()=>{le(this,Jo)||(ht(this,Jo,!0),o(),i(),le(this,Xo).disconnect())}}};Xo=new WeakMap;Jo=new WeakMap;Ls=new WeakMap;kc=new WeakMap;function wc(e){return"showPopover"in e&&"hidePopover"in e&&typeof e.showPopover=="function"&&typeof e.hidePopover=="function"}function no(e){try{wc(e)&&e.isConnected&&e.hasAttribute("popover")&&!e.matches(":popover-open")&&e.showPopover()}catch{}}function vf(e){return!Wm||!e?!1:e===Io(e).scrollingElement}function Xm(e){var t,r;const n=xt(e),o=vf(e)?H2(e):La(e),i=n.visualViewport,s=vf(e)?{height:(t=i==null?void 0:i.height)!=null?t:n.innerHeight,width:(r=i==null?void 0:i.width)!=null?r:n.innerWidth}:{height:e.clientHeight,width:e.clientWidth},a={current:{x:e.scrollLeft,y:e.scrollTop},max:{x:e.scrollWidth-s.width,y:e.scrollHeight-s.height}},l=a.current.y<=0,c=a.current.x<=0,p=a.current.y>=a.max.y,d=a.current.x>=a.max.x;return{rect:o,position:a,isTop:l,isLeft:c,isBottom:p,isRight:d}}function iE(e,t){const{isTop:r,isBottom:n,isLeft:o,isRight:i,position:s}=Xm(e),{x:a,y:l}=t??{x:0,y:0},c=!r&&s.current.y+l>0,p=!n&&s.current.y+l<s.max.y,d=!o&&s.current.x+a>0,f=!i&&s.current.x+a<s.max.x;return{top:c,bottom:p,left:d,right:f,x:d||f,y:c||p}}var gd=class{constructor(t){this.scheduler=t,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{const{tasks:r,resolvers:n}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(const o of r)o();for(const o of n)o()}}schedule(t){return this.tasks.add(t),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(r=>this.resolvers.add(r))}},na=new gd(e=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()}),sE=new gd(e=>setTimeout(e,50)),oa=new Map,aE=oa.clear.bind(oa);function Wt(e,t=!1){if(!t)return gf(e);let r=oa.get(e);return r||(r=gf(e),oa.set(e,r),sE.schedule(aE),r)}function gf(e){return xt(e).getComputedStyle(e)}function lE(e,t=Wt(e,!0)){return t.position==="fixed"||t.position==="sticky"}function cE(e,t=Wt(e,!0)){const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(o=>{const i=t[o];return typeof i=="string"?r.test(i):!1})}var uE={excludeElement:!0,escapeShadowDOM:!0};function Sc(e,t=uE){const{limit:r,excludeElement:n,escapeShadowDOM:o}=t,i=new Set;function s(a){if(r!=null&&i.size>=r||!a)return i;if(pd(a)&&a.scrollingElement!=null&&!i.has(a.scrollingElement))return i.add(a.scrollingElement),i;if(o&&hd(a))return s(a.host);if(!Hr(a))return $m(a)?s(a.parentElement):i;if(i.has(a))return i;const l=Wt(a,!0);if(n&&a===e||cE(a,l)&&i.add(a),lE(a,l)){const{scrollingElement:c}=a.ownerDocument;return c&&i.add(c),i}return s(a.parentNode)}return e?s(e):i}function lo(e,t=window.frameElement){const r={x:0,y:0,scaleX:1,scaleY:1};if(!e)return r;let n=ao(e);for(;n;){if(n===t)return r;const o=La(n),{x:i,y:s}=dE(n,o);r.x=r.x+o.left,r.y=r.y+o.top,r.scaleX=r.scaleX*i,r.scaleY=r.scaleY*s,n=ao(n)}return r}function dE(e,t=La(e)){const r=Math.round(t.width),n=Math.round(t.height);if(Hr(e))return{x:r/e.offsetWidth,y:n/e.offsetHeight};const o=Wt(e,!0);return{x:(parseFloat(o.width)||r)/r,y:(parseFloat(o.height)||n)/n}}function pE(e){if(e==="none")return null;const t=e.split(" "),r=parseFloat(t[0]),n=parseFloat(t[1]);return isNaN(r)&&isNaN(n)?null:{x:isNaN(r)?n:r,y:isNaN(n)?r:n}}function co(e){if(e==="none")return null;const[t,r,n="0"]=e.split(" "),o={x:parseFloat(t),y:parseFloat(r),z:parseInt(n,10)};return isNaN(o.x)&&isNaN(o.y)?null:{x:isNaN(o.x)?0:o.x,y:isNaN(o.y)?0:o.y,z:isNaN(o.z)?0:o.z}}function Na(e){var t,r,n,o,i,s,a,l,c;const{scale:p,transform:d,translate:f}=e,h=pE(p),v=co(f),m=fE(d);if(!m&&!h&&!v)return null;const y={x:(t=h==null?void 0:h.x)!=null?t:1,y:(r=h==null?void 0:h.y)!=null?r:1},x={x:(n=v==null?void 0:v.x)!=null?n:0,y:(o=v==null?void 0:v.y)!=null?o:0},k={x:(i=m==null?void 0:m.x)!=null?i:0,y:(s=m==null?void 0:m.y)!=null?s:0,scaleX:(a=m==null?void 0:m.scaleX)!=null?a:1,scaleY:(l=m==null?void 0:m.scaleY)!=null?l:1};return{x:x.x+k.x,y:x.y+k.y,z:(c=v==null?void 0:v.z)!=null?c:0,scaleX:y.x*k.scaleX,scaleY:y.y*k.scaleY}}function fE(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}var It=(e=>(e[e.Idle=0]="Idle",e[e.Forward=1]="Forward",e[e.Reverse=-1]="Reverse",e))(It||{}),hE={x:.2,y:.2},vE={x:10,y:10};function gE(e,t,r,n=25,o=hE,i=vE){const{x:s,y:a}=t,{rect:l,isTop:c,isBottom:p,isLeft:d,isRight:f}=Xm(e),h=lo(e),v=Wt(e,!0),m=Na(v),y=m!==null?(m==null?void 0:m.scaleX)<0:!1,x=m!==null?(m==null?void 0:m.scaleY)<0:!1,k=new At(l.left*h.scaleX+h.x,l.top*h.scaleY+h.y,l.width*h.scaleX,l.height*h.scaleY),b={x:0,y:0},_={x:0,y:0},S={height:k.height*o.y,width:k.width*o.x};return S.height>0&&(!c||x&&!p)&&a<=k.top+S.height&&(r==null?void 0:r.y)!==1&&s>=k.left-i.x&&s<=k.right+i.x?(b.y=x?1:-1,_.y=n*Math.abs((k.top+S.height-a)/S.height)):S.height>0&&(!p||x&&!c)&&a>=k.bottom-S.height&&(r==null?void 0:r.y)!==-1&&s>=k.left-i.x&&s<=k.right+i.x&&(b.y=x?-1:1,_.y=n*Math.abs((k.bottom-S.height-a)/S.height)),S.width>0&&(!f||y&&!d)&&s>=k.right-S.width&&(r==null?void 0:r.x)!==-1&&a>=k.top-i.y&&a<=k.bottom+i.y?(b.x=y?-1:1,_.x=n*Math.abs((k.right-S.width-s)/S.width)):S.width>0&&(!d||y&&!f)&&s<=k.left+S.width&&(r==null?void 0:r.x)!==1&&a>=k.top-i.y&&a<=k.bottom+i.y&&(b.x=y?1:-1,_.x=n*Math.abs((k.left+S.width-s)/S.width)),{direction:b,speed:_}}function Jm(e,{block:t="nearest",inline:r="nearest"}={}){if(!Hr(e))return;const n=Sc(e),o=[];for(const i of n){if(!Hr(i))continue;const{top:s,left:a}=mE(e,i);let l=s,c=a;for(const p of o)l-=p.scrollTop,c-=p.scrollLeft;if(t!=="none"){const p=l<i.scrollTop,d=l+e.offsetHeight>i.scrollTop+i.clientHeight;p!==d&&(t==="center"?i.scrollTop=l-i.clientHeight/2+e.offsetHeight/2:p?i.scrollTop=l:i.scrollTop=l+e.offsetHeight-i.clientHeight)}if(r!=="none"){const p=c<i.scrollLeft,d=c+e.offsetWidth>i.scrollLeft+i.clientWidth;p!==d&&(r==="center"?i.scrollLeft=c-i.clientWidth/2+e.offsetWidth/2:p?i.scrollLeft=c:i.scrollLeft=c+e.offsetWidth-i.clientWidth)}o.push(i)}}function mf(e){let t=0,r=0,n=e;for(;n;){t+=n.offsetTop,r+=n.offsetLeft;const o=n.offsetParent;if(!Hr(o))break;t+=o.clientTop,r+=o.clientLeft,n=o}return{top:t,left:r}}function mE(e,t){const r=mf(e),n=mf(t);return{top:r.top-n.top-t.clientTop,left:r.left-n.left-t.clientLeft}}function _E(e,t,r){const{scaleX:n,scaleY:o,x:i,y:s}=t,a=e.left+i+(1-n)*parseFloat(r),l=e.top+s+(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),c=n?e.width*n:e.width,p=o?e.height*o:e.height;return{width:c,height:p,top:l,right:a+c,bottom:l+p,left:a}}function yE(e,t,r){const{scaleX:n,scaleY:o,x:i,y:s}=t,a=e.left-i-(1-n)*parseFloat(r),l=e.top-s-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),c=n?e.width/n:e.width,p=o?e.height/o:e.height;return{width:c,height:p,top:l,right:a+c,bottom:l+p,left:a}}function Qm({element:e,keyframes:t,options:r}){return e.animate(t,r).finished}function _f(e,t=Wt(e).translate,r=!0){if(r){const n=Bm(e,o=>"translate"in o);if(n){const{translate:o=""}=n[0];if(typeof o=="string"){const i=co(o);if(i)return i}}}if(t){const n=co(t);if(n)return n}return{x:0,y:0,z:0}}var bE=new gd(e=>setTimeout(e,0)),ci=new Map,xE=ci.clear.bind(ci);function kE(e){const t=e.ownerDocument;let r=ci.get(t);if(r)return r;r=t.getAnimations(),ci.set(t,r),bE.schedule(xE);const n=r.filter(o=>Ta(o.effect)&&o.effect.target===e);return ci.set(e,n),r}function wE(e,t){const r=kE(e).filter(n=>{var o,i;if(Ta(n.effect)){const{target:s}=n.effect;if((i=s&&((o=t.isValidTarget)==null?void 0:o.call(t,s)))!=null?i:!0)return n.effect.getKeyframes().some(l=>{for(const c of t.properties)if(l[c])return!0})}}).map(n=>{const{effect:o,currentTime:i}=n,s=o==null?void 0:o.getComputedTiming().duration;if(!(n.pending||n.playState==="finished")&&typeof s=="number"&&typeof i=="number"&&i<s)return n.currentTime=s,()=>{n.currentTime=i}});if(r.length>0)return()=>r.forEach(n=>n==null?void 0:n())}var Pt=class extends At{constructor(e,t={}){var r,n,o,i;const{frameTransform:s=lo(e),ignoreTransforms:a,getBoundingClientRect:l=La}=t,c=wE(e,{properties:["transform","translate","scale","width","height"],isValidTarget:S=>(S!==e||fd())&&S.contains(e)}),p=l(e);let{top:d,left:f,width:h,height:v}=p,m;const y=Wt(e),x=Na(y),k={x:(r=x==null?void 0:x.scaleX)!=null?r:1,y:(n=x==null?void 0:x.scaleY)!=null?n:1},b=SE(e,y);c==null||c(),x&&(m=yE(p,x,y.transformOrigin),(a||b)&&(d=m.top,f=m.left,h=m.width,v=m.height));const _={width:(o=m==null?void 0:m.width)!=null?o:h,height:(i=m==null?void 0:m.height)!=null?i:v};if(b&&!a&&m){const S=_E(m,b,y.transformOrigin);d=S.top,f=S.left,h=S.width,v=S.height,k.x=b.scaleX,k.y=b.scaleY}s&&(a||(f*=s.scaleX,h*=s.scaleX,d*=s.scaleY,v*=s.scaleY),f+=s.x,d+=s.y),super(f,d,h,v),this.scale=k,this.intrinsicWidth=_.width,this.intrinsicHeight=_.height}};function SE(e,t){const r=e.getAnimations();if(!r.length)return null;let n,o,i,s=!1;for(const a of r){if(a.playState!=="running")continue;const l=Ta(a.effect)?a.effect.getKeyframes():[],c=l[l.length-1];if(!c)continue;const{transform:p,translate:d,scale:f}=c;typeof p=="string"&&p&&(n=p,s=!0),typeof d=="string"&&d&&(o=d,s=!0),typeof f=="string"&&f&&(i=f,s=!0)}return s?Na({transform:n??t.transform,translate:o??t.translate,scale:i??t.scale}):null}function ui(e){return"style"in e&&typeof e.style=="object"&&e.style!==null&&"setProperty"in e.style&&"removeProperty"in e.style&&typeof e.style.setProperty=="function"&&typeof e.style.removeProperty=="function"}var EE=class{constructor(e){this.element=e,this.initial=new Map}set(e,t=""){const{element:r}=this;if(ui(r))for(const[n,o]of Object.entries(e)){const i=`${t}${n}`;this.initial.has(i)||this.initial.set(i,r.style.getPropertyValue(i)),r.style.setProperty(i,typeof o=="string"?o:`${o}px`)}}remove(e,t=""){const{element:r}=this;if(ui(r))for(const n of e){const o=`${t}${n}`;r.style.removeProperty(o)}}reset(){const{element:e}=this;if(ui(e)){for(const[t,r]of this.initial)e.style.setProperty(t,r);e.getAttribute("style")===""&&e.removeAttribute("style")}}};function Vr(e){return e?e instanceof xt(e).Element||Bi(e)&&e.nodeType===Node.ELEMENT_NODE:!1}function Ii(e){if(!e)return!1;const{KeyboardEvent:t}=xt(e.target);return e instanceof t}function CE(e){if(!e)return!1;const{PointerEvent:t}=xt(e.target);return e instanceof t}function IE(e){if(!Vr(e))return!1;const{tagName:t}=e;return t==="INPUT"||t==="TEXTAREA"||jE(e)}function jE(e){return e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"}var gl={};function Ec(e){const t=gl[e]==null?0:gl[e]+1;return gl[e]=t,`${e}-${t}`}var PE=({dragOperation:e,droppable:t})=>{const r=e.position.current;if(!r)return null;const{id:n}=t;if(!t.shape)return null;if(t.shape.containsPoint(r)){const o=tt.distance(t.shape.center,r);return{id:n,value:1/o,type:nr.PointerIntersection,priority:Ct.High}}return null},AE=({dragOperation:e,droppable:t})=>{const{shape:r}=e;if(!t.shape||!(r!=null&&r.current))return null;const n=r.current.intersectionArea(t.shape);if(n){const{position:o}=e,i=tt.distance(t.shape.center,o.current),a=n/(r.current.area+t.shape.area-n)/i;return{id:t.id,value:a,type:nr.ShapeIntersection,priority:Ct.Normal}}return null},e_=e=>{var t;return(t=PE(e))!=null?t:AE(e)},zE=e=>{const{dragOperation:t,droppable:r}=e,{shape:n,position:o}=t;if(!r.shape)return null;const i=n?At.from(n.current.boundingRectangle).corners:void 0,a=At.from(r.shape.boundingRectangle).corners.reduce((l,c,p)=>{var d;return l+tt.distance(tt.from(c),(d=i==null?void 0:i[p])!=null?d:o.current)},0)/4;return{id:r.id,value:1/a,type:nr.Collision,priority:Ct.Normal}},OE=Object.create,md=Object.defineProperty,DE=Object.defineProperties,ME=Object.getOwnPropertyDescriptor,RE=Object.getOwnPropertyDescriptors,ia=Object.getOwnPropertySymbols,t_=Object.prototype.hasOwnProperty,r_=Object.prototype.propertyIsEnumerable,n_=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),jo=e=>{throw TypeError(e)},Cc=(e,t,r)=>t in e?md(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ji=(e,t)=>{for(var r in t||(t={}))t_.call(t,r)&&Cc(e,r,t[r]);if(ia)for(var r of ia(t))r_.call(t,r)&&Cc(e,r,t[r]);return e},_d=(e,t)=>DE(e,RE(t)),yf=(e,t)=>md(e,"name",{value:t,configurable:!0}),o_=(e,t)=>{var r={};for(var n in e)t_.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ia)for(var n of ia(e))t.indexOf(n)<0&&r_.call(e,n)&&(r[n]=e[n]);return r},Po=e=>{var t;return[,,,OE((t=e==null?void 0:e[n_("metadata")])!=null?t:null)]},i_=["class","method","getter","setter","accessor","field","value","get","set"],Qo=e=>e!==void 0&&typeof e!="function"?jo("Function expected"):e,TE=(e,t,r,n,o)=>({kind:i_[e],name:t,metadata:n,addInitializer:i=>r._?jo("Already initialized"):o.push(Qo(i||null))}),Cn=(e,t)=>Cc(t,n_("metadata"),e[3]),Be=(e,t,r,n)=>{for(var o=0,i=e[t>>1],s=i&&i.length;o<s;o++)t&1?i[o].call(r):n=i[o].call(r,n);return n},zt=(e,t,r,n,o,i)=>{var s,a,l,c,p,d=t&7,f=!!(t&8),h=!!(t&16),v=d>3?e.length+1:d?f?1:2:0,m=i_[d+5],y=d>3&&(e[v-1]=[]),x=e[v]||(e[v]=[]),k=d&&(!h&&!f&&(o=o.prototype),d<5&&(d>3||!h)&&ME(d<4?o:{get[r](){return xe(this,i)},set[r](_){return st(this,i,_)}},r));d?h&&d<4&&yf(i,(d>2?"set ":d>1?"get ":"")+r):yf(o,r);for(var b=n.length-1;b>=0;b--)c=TE(d,r,l={},e[3],x),d&&(c.static=f,c.private=h,p=c.access={has:h?_=>LE(o,_):_=>r in _},d^3&&(p.get=h?_=>(d^1?xe:_n)(_,o,d^4?i:k.get):_=>_[r]),d>2&&(p.set=h?(_,S)=>st(_,o,S,d^4?i:k.set):(_,S)=>_[r]=S)),a=(0,n[b])(d?d<4?h?i:k[m]:d>4?void 0:{get:k.get,set:k.set}:o,c),l._=1,d^4||a===void 0?Qo(a)&&(d>4?y.unshift(a):d?h?i=a:k[m]=a:o=a):typeof a!="object"||a===null?jo("Object expected"):(Qo(s=a.get)&&(k.get=s),Qo(s=a.set)&&(k.set=s),Qo(s=a.init)&&y.unshift(s));return d||Cn(e,o),k&&md(o,r,k),h?d^4?i:k:o},yd=(e,t,r)=>t.has(e)||jo("Cannot "+r),LE=(e,t)=>Object(t)!==t?jo('Cannot use the "in" operator on this value'):e.has(t),xe=(e,t,r)=>(yd(e,t,"read from private field"),r?r.call(e):t.get(e)),Re=(e,t,r)=>t.has(e)?jo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),st=(e,t,r,n)=>(yd(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),_n=(e,t,r)=>(yd(e,t,"access private method"),r),bf={role:"button",roleDescription:"draggable"},NE="dnd-kit-description",FE="dnd-kit-announcement",BE={draggable:"To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel."},$E={dragstart({operation:{source:e}}){if(e)return`Picked up draggable item ${e.id}.`},dragover({operation:{source:e,target:t}}){if(!(!e||e.id===(t==null?void 0:t.id)))return t?`Draggable item ${e.id} was moved over droppable target ${t.id}.`:`Draggable item ${e.id} is no longer over a droppable target.`},dragend({operation:{source:e,target:t},canceled:r}){if(e)return r?`Dragging was cancelled. Draggable item ${e.id} was dropped.`:t?`Draggable item ${e.id} was dropped over droppable target ${t.id}`:`Draggable item ${e.id} was dropped.`}};function WE(e){const t=e.tagName.toLowerCase();return["input","select","textarea","a","button"].includes(t)}function HE(e,t){const r=document.createElement("div");return r.id=e,r.style.setProperty("display","none"),r.textContent=t,r}function VE(e){const t=document.createElement("div");return t.id=e,t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),t.style.setProperty("position","fixed"),t.style.setProperty("width","1px"),t.style.setProperty("height","1px"),t.style.setProperty("margin","-1px"),t.style.setProperty("border","0"),t.style.setProperty("padding","0"),t.style.setProperty("overflow","hidden"),t.style.setProperty("clip","rect(0 0 0 0)"),t.style.setProperty("clip-path","inset(100%)"),t.style.setProperty("white-space","nowrap"),t}var qE=["dragover","dragmove"],UE=class extends Je{constructor(e,t){super(e);const{id:r,idPrefix:{description:n=NE,announcement:o=FE}={},announcements:i=$E,screenReaderInstructions:s=BE,debounce:a=500}=t??{},l=r?`${n}-${r}`:Ec(n),c=r?`${o}-${r}`:Ec(o);let p,d,f,h;const v=(S=h)=>{!f||!S||(f==null?void 0:f.nodeValue)!==S&&(f.nodeValue=S)},m=()=>na.schedule(v),y=ZE(m,a),x=Object.entries(i).map(([S,w])=>this.manager.monitor.addEventListener(S,(j,C)=>{const I=f;if(!I)return;const E=w==null?void 0:w(j,C);E&&I.nodeValue!==E&&(h=E,qE.includes(S)?y():(m(),y.cancel()))})),k=()=>{let S=[];p!=null&&p.isConnected||(p=HE(l,s.draggable),S.push(p)),d!=null&&d.isConnected||(d=VE(c),f=document.createTextNode(""),d.appendChild(f),S.push(d)),S.length>0&&document.body.append(...S)},b=new Set;function _(){for(const S of b)S()}this.registerEffect(()=>{var S;b.clear();for(const w of this.manager.registry.draggables.value){const j=(S=w.handle)!=null?S:w.element;if(j){(!p||!d)&&b.add(k),(!WE(j)||fd())&&!j.hasAttribute("tabindex")&&b.add(()=>j.setAttribute("tabindex","0")),!j.hasAttribute("role")&&j.tagName.toLowerCase()!=="button"&&b.add(()=>j.setAttribute("role",bf.role)),j.hasAttribute("aria-roledescription")||b.add(()=>j.setAttribute("aria-roledescription",bf.roleDescription)),j.hasAttribute("aria-describedby")||b.add(()=>j.setAttribute("aria-describedby",l));for(const I of["aria-pressed","aria-grabbed"]){const E=String(w.isDragging);j.getAttribute(I)!==E&&b.add(()=>j.setAttribute(I,E))}const C=String(w.disabled);j.getAttribute("aria-disabled")!==C&&b.add(()=>j.setAttribute("aria-disabled",C))}}b.size>0&&na.schedule(_)}),this.destroy=()=>{super.destroy(),p==null||p.remove(),d==null||d.remove(),x.forEach(S=>S())}}};function ZE(e,t){let r;const n=()=>{clearTimeout(r),r=setTimeout(e,t)};return n.cancel=()=>clearTimeout(r),n}var sa=new Map,s_,a_,l_,c_,Ic,di,fr,bd,uo,u_,d_,p_,f_,qr=class extends(Ic=Fi,c_=[pe],l_=[Me],a_=[Me],s_=[Me],Ic){constructor(t,r){super(t,r),Be(fr,5,this),Re(this,uo),Re(this,di,new Set),Re(this,bd,Be(fr,8,this,new Set)),Be(fr,11,this),this.registerEffect(_n(this,uo,u_))}register(t){return xe(this,di).add(t),()=>{xe(this,di).delete(t)}}addRoot(t){return de(()=>{const r=new Set(this.additionalRoots);r.add(t),this.additionalRoots=r}),()=>{de(()=>{const r=new Set(this.additionalRoots);r.delete(t),this.additionalRoots=r})}}get sourceRoot(){var t;const{source:r}=this.manager.dragOperation;return ea((t=r==null?void 0:r.element)!=null?t:null)}get targetRoot(){var t;const{target:r}=this.manager.dragOperation;return ea((t=r==null?void 0:r.element)!=null?t:null)}get roots(){const{status:t}=this.manager.dragOperation;if(t.initializing||t.initialized){const r=[this.sourceRoot,this.targetRoot].filter(n=>n!=null);return new Set([...r,...this.additionalRoots])}return new Set}};fr=Po(Ic);di=new WeakMap;bd=new WeakMap;uo=new WeakSet;u_=function(){const{roots:e}=this,t=[];for(const r of e)for(const n of xe(this,di))t.push(_n(this,uo,d_).call(this,r,n));return()=>{for(const r of t)r()}};d_=function(e,t){let r=sa.get(e);r||(r=new Map,sa.set(e,r));let n=r.get(t);if(!n){const i=pd(e)?_n(this,uo,p_).call(this,e,r,t):_n(this,uo,f_).call(this,e,r,t);if(!i)return()=>{};n=i,r.set(t,n)}n.refCount++;let o=!1;return()=>{o||(o=!0,n.refCount--,n.refCount===0&&n.cleanup())}};p_=function(e,t,r){var n;const o=e.createElement("style"),{nonce:i}=(n=this.options)!=null?n:{};i&&o.setAttribute("nonce",i),o.textContent=r,e.head.prepend(o);const s=new MutationObserver(a=>{for(const l of a)for(const c of Array.from(l.removedNodes))if(c===o){e.head.prepend(o);return}});return s.observe(e.head,{childList:!0}),{refCount:0,cleanup:()=>{s.disconnect(),o.remove(),t.delete(r),t.size===0&&sa.delete(e)}}};f_=function(e,t,r){"adoptedStyleSheets"in e&&Array.isArray(e.adoptedStyleSheets);const n=e.ownerDocument.defaultView,{CSSStyleSheet:o}=n??{};if(!o)return null;const i=new o;return i.replaceSync(r),e.adoptedStyleSheets.push(i),{refCount:0,cleanup:()=>{var s;if(hd(e)&&((s=e.host)!=null&&s.isConnected)){const a=e.adoptedStyleSheets.indexOf(i);a!==-1&&e.adoptedStyleSheets.splice(a,1)}t.delete(r),t.size===0&&sa.delete(e)}}};zt(fr,4,"additionalRoots",c_,qr,bd);zt(fr,2,"sourceRoot",l_,qr);zt(fr,2,"targetRoot",a_,qr);zt(fr,2,"roots",s_,qr);Cn(fr,qr);qr.configure=Ni(qr);var Fa=qr,YE=class extends Je{constructor(e,t){super(e,t),this.manager=e;const{cursor:r="grabbing"}=t??{},n=e.registry.plugins.get(Fa),o=n==null?void 0:n.register(`* { cursor: ${r} !important; }`);if(o){const i=this.destroy.bind(this);this.destroy=()=>{o(),i()}}}},$i="data-dnd-",jc=`${$i}dropping`,Ye="--dnd-",Zt=`${$i}dragging`,aa=`${$i}placeholder`,GE=[Zt,aa,"popover","aria-pressed","aria-grabbing"],KE=["view-transition-name"],XE=`
  :is(:root,:host) [${Zt}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${Ye}top, 0px) !important;
    left: var(${Ye}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${Ye}width, auto);
    max-width: var(${Ye}width, auto);
    height: var(${Ye}height, auto);
    max-height: var(${Ye}height, auto);
    transform: var(${Ye}transform, none) !important;
    transition: var(${Ye}transition) !important;
  }

  :is(:root,:host) [${aa}] {
    transition: none;
  }

  :is(:root,:host) [${aa}='hidden'] {
    visibility: hidden;
  }

  [${Zt}] * {
    pointer-events: none !important;
  }

  [${Zt}]:not([${jc}]) {
    translate: var(${Ye}translate) !important;
  }

  [${Zt}][style*='${Ye}scale'] {
    scale: var(${Ye}scale) !important;
    transform-origin: var(${Ye}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${Zt}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${Zt}]::backdrop, [${$i}overlay]:not([${Zt}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g," ").replace(/\s+/g," ").trim();function JE(e,t="hidden"){return de(()=>{const{element:r,manager:n}=e;if(!r||!n)return;const o=QE(r,n.registry.droppables),i=[],s=U2(r),{remove:a}=s;return eC(o,s,i),tC(s,t),s.remove=()=>{i.forEach(l=>l()),a.call(s)},s})}function QE(e,t){const r=new Map;for(const n of t)if(n.element&&(e===n.element||e.contains(n.element))){const o=`${$i}${Ec("dom-id")}`;n.element.setAttribute(o,""),r.set(n,o)}return r}function eC(e,t,r){for(const[n,o]of e){if(!n.element)continue;const i=`[${o}]`,s=t.matches(i)?t:t.querySelector(i);if(n.element.removeAttribute(o),!s)continue;const a=n.element;n.proxy=s,s.removeAttribute(o),xc.set(a,s),r.push(()=>{xc.delete(a),n.proxy=void 0})}}function tC(e,t="hidden"){e.setAttribute("inert","true"),e.setAttribute("tab-index","-1"),e.setAttribute("aria-hidden","true"),e.setAttribute(aa,t)}function h_(e,t){return e===t?!0:ao(e)===ao(t)}function xf(e){const{target:t}=e;"newState"in e&&e.newState==="closed"&&Vr(t)&&t.hasAttribute("popover")&&requestAnimationFrame(()=>no(t))}function Pc(e){return e.tagName==="TR"}function rC(e,t,r){const n=new MutationObserver(o=>{let i=!1;for(const s of o){if(s.target!==e){i=!0;continue}if(s.type!=="attributes")continue;const a=s.attributeName;if(a.startsWith("aria-")||GE.includes(a))continue;const l=e.getAttribute(a);if(a==="style"){if(ui(e)&&ui(t)){const c=e.style;for(const p of Array.from(t.style))c.getPropertyValue(p)===""&&t.style.removeProperty(p);for(const p of Array.from(c)){if(KE.includes(p)||p.startsWith(Ye))continue;const d=c.getPropertyValue(p);t.style.setProperty(p,d)}}}else l!==null?t.setAttribute(a,l):t.removeAttribute(a)}i&&r&&t.replaceChildren(...e.cloneNode(!0).childNodes)});return n.observe(e,{attributes:!0,subtree:!0,childList:!0}),n}function nC(e,t,r){const n=new MutationObserver(o=>{for(const i of o)if(i.addedNodes.length!==0)for(const s of Array.from(i.addedNodes)){if(s.contains(e)&&e.nextElementSibling!==t){e.insertAdjacentElement("afterend",t),no(r);return}if(s.contains(t)&&t.previousElementSibling!==e){t.insertAdjacentElement("beforebegin",e),no(r);return}}e.isConnected&&t.isConnected&&e.nextElementSibling!==t&&(e.insertAdjacentElement("afterend",t),no(r))});return n.observe(e.ownerDocument.body,{childList:!0,subtree:!0}),n}function oC(e){return new ResizeObserver(()=>{var t,r,n;const o=new Pt(e.placeholder,{frameTransform:e.frameTransform,ignoreTransforms:!0}),i=(t=e.transformOrigin)!=null?t:{x:1,y:1},s=(e.width-o.width)*i.x+e.delta.x,a=(e.height-o.height)*i.y+e.delta.y,l=Hm();if(e.styles.set({width:o.width-e.widthOffset,height:o.height-e.heightOffset,top:e.top+a+l.y,left:e.left+s+l.x},Ye),(r=e.getElementMutationObserver())==null||r.takeRecords(),Pc(e.element)&&Pc(e.placeholder)){const m=Array.from(e.element.cells),y=Array.from(e.placeholder.cells);e.getSavedCellWidths()||e.setSavedCellWidths(m.map(x=>x.style.width));for(const[x,k]of m.entries()){const b=y[x];k.style.width=`${b.getBoundingClientRect().width}px`}}const c=(n=e.getTranslate())!=null?n:{x:0,y:0},p=e.left+s+l.x+c.x,d=e.top+a+l.y+c.y,f=o.width-e.widthOffset,h=o.height-e.heightOffset,v=e.frameTransform;e.dragOperation.shape=new At(p*v.scaleX+v.x,d*v.scaleY+v.y,f*v.scaleX,h*v.scaleY)})}var iC=250,sC="ease";function aC(e){var t,r,n,o;const{animation:i}=e;if(typeof i=="function"){const k=i({source:e.source,element:e.element,feedbackElement:e.feedbackElement,placeholder:e.placeholder,translate:e.translate,moved:e.moved});Promise.resolve(k).then(()=>{e.cleanup(),requestAnimationFrame(e.restoreFocus)});return}const{duration:s=iC,easing:a=sC}=i??{};no(e.feedbackElement);const[,l]=(t=Bm(e.feedbackElement,k=>"translate"in k))!=null?t:[];l==null||l.pause();const c=(r=e.placeholder)!=null?r:e.element,p={frameTransform:h_(e.feedbackElement,c)?null:void 0},d=new Pt(e.feedbackElement,p),f=(n=co(Wt(e.feedbackElement).translate))!=null?n:e.translate,h=new Pt(c,p),v=At.delta(d,h,e.alignment),m={x:f.x-v.x,y:f.y-v.y},y=Math.round(d.intrinsicHeight)!==Math.round(h.intrinsicHeight)?{minHeight:[`${d.intrinsicHeight}px`,`${h.intrinsicHeight}px`],maxHeight:[`${d.intrinsicHeight}px`,`${h.intrinsicHeight}px`]}:{},x=Math.round(d.intrinsicWidth)!==Math.round(h.intrinsicWidth)?{minWidth:[`${d.intrinsicWidth}px`,`${h.intrinsicWidth}px`],maxWidth:[`${d.intrinsicWidth}px`,`${h.intrinsicWidth}px`]}:{};e.styles.set({transition:e.transition},Ye),e.feedbackElement.setAttribute(jc,""),(o=e.getElementMutationObserver())==null||o.takeRecords(),Qm({element:e.feedbackElement,keyframes:_d(ji(ji({},y),x),{translate:[`${f.x}px ${f.y}px 0`,`${m.x}px ${m.y}px 0`]}),options:{duration:vd(xt(e.feedbackElement))?0:e.moved||e.feedbackElement!==e.element?s:0,easing:a}}).then(()=>{e.feedbackElement.removeAttribute(jc),l==null||l.finish(),e.cleanup(),requestAnimationFrame(e.restoreFocus)})}var v_,Ac,Pi,xd,Ns,g_,m_,po=class extends(Ac=Je,v_=[pe],Ac){constructor(t,r){super(t,r),Re(this,Ns),Re(this,xd,Be(Pi,8,this)),Be(Pi,11,this),this.state={initial:{},current:{}};const n=t.registry.plugins.get(Fa),o=n==null?void 0:n.register(XE);if(o){const i=this.destroy.bind(this);this.destroy=()=>{o(),i()}}this.registerEffect(_n(this,Ns,g_).bind(this,n)),this.registerEffect(_n(this,Ns,m_))}};Pi=Po(Ac);xd=new WeakMap;Ns=new WeakSet;g_=function(e){const{overlay:t}=this;if(!t||!e)return;const r=ea(t);if(r)return e.addRoot(r)};m_=function(){var e,t,r,n,o,i,s;const{state:a,manager:l,options:c}=this,{dragOperation:p}=l,{position:d,source:f,status:h}=p;if(h.idle){a.current={},a.initial={};return}if(!f)return;const{element:v}=f,m=f.pluginConfig(po),y=(t=(e=m==null?void 0:m.feedback)!=null?e:c==null?void 0:c.feedback)!=null?t:"default",x=typeof y=="function"?y(f,l):y;if(!v||x==="none"||!h.initialized||h.initializing)return;const{initial:k}=a,b=(r=this.overlay)!=null?r:v,_=lo(b),S=lo(v),w=!h_(v,b),j=new Pt(v,{frameTransform:w?S:null,ignoreTransforms:!w}),C={x:S.scaleX/_.scaleX,y:S.scaleY/_.scaleY};let{width:I,height:E,top:z,left:O}=j;w&&(I=I/C.x,E=E/C.y);const L=new EE(b),B=Wt(v),{transition:N,translate:R,boxSizing:q,paddingBlockStart:W,paddingBlockEnd:$,paddingInlineStart:Z,paddingInlineEnd:oe,borderInlineStartWidth:G,borderInlineEndWidth:te,borderBlockStartWidth:be,borderBlockEndWidth:Q}=B,ie=N.split(",").filter(ge=>!/^\s*(transform|translate|scale)\b/.test(ge)).join(","),ke=Na(B),Y=B.transform,P=x==="clone",M=q==="content-box",T=M?parseInt(Z)+parseInt(oe)+parseInt(G)+parseInt(te):0,U=M?parseInt(W)+parseInt($)+parseInt(be)+parseInt(Q):0,V=x!=="move"&&!this.overlay?JE(f,P?"clone":"hidden"):null,X=de(()=>Ii(l.dragOperation.activatorEvent));if(!k.translate){if(this.overlay&&ke)k.translate={x:ke.x,y:ke.y};else if(R!=="none"){const ge=co(R);ge&&(k.translate=ge)}}if(!k.transformOrigin){const ge=de(()=>d.current),Oe=O+((n=ke==null?void 0:ke.x)!=null?n:0),qe=z+((o=ke==null?void 0:ke.y)!=null?o:0);k.transformOrigin={x:(ge.x-Oe*_.scaleX-_.x)/(I*_.scaleX),y:(ge.y-qe*_.scaleY-_.y)/(E*_.scaleY)}}const{transformOrigin:ne}=k,ue=z*_.scaleY+_.y,ve=O*_.scaleX+_.x;if(!k.coordinates&&(k.coordinates={x:ve,y:ue},C.x!==1||C.y!==1)){const{scaleX:ge,scaleY:Oe}=S,{x:qe,y:Ht}=ne;k.coordinates.x+=(I*ge-I)*qe,k.coordinates.y+=(E*Oe-E)*Ht}k.dimensions||(k.dimensions={width:I,height:E}),k.frameTransform||(k.frameTransform=_);const We={x:k.coordinates.x-ve,y:k.coordinates.y-ue},ze={width:(k.dimensions.width*k.frameTransform.scaleX-I*_.scaleX)*ne.x,height:(k.dimensions.height*k.frameTransform.scaleY-E*_.scaleY)*ne.y},Ee={x:We.x/_.scaleX+ze.width,y:We.y/_.scaleY+ze.height},we={left:O+Ee.x,top:z+Ee.y};b.setAttribute(Zt,"true");const he=de(()=>p.transform),Ot=(i=k.translate)!=null?i:{x:0,y:0},or=he.x*_.scaleX+Ot.x,jn=he.y*_.scaleY+Ot.y,Pn=Hm();L.set({width:I-T,height:E-U,top:we.top+Pn.y,left:we.left+Pn.x,translate:`${or}px ${jn}px 0`,transform:this.overlay?"none":Y,transition:ie?`${ie}, translate 0ms linear`:"translate 0ms linear",scale:w?`${C.x} ${C.y}`:"","transform-origin":`${ne.x*100}% ${ne.y*100}%`},Ye),V&&(v.insertAdjacentElement("afterend",V),c!=null&&c.rootElement&&(typeof c.rootElement=="function"?c.rootElement(f):c.rootElement).appendChild(v)),wc(b)&&(b.hasAttribute("popover")||b.setAttribute("popover","manual"),no(b),b.addEventListener("beforetoggle",xf));let ir,kr,wr;const Mo=oC({placeholder:V,element:v,feedbackElement:b,frameTransform:_,transformOrigin:ne,width:I,height:E,top:z,left:O,widthOffset:T,heightOffset:U,delta:Ee,styles:L,dragOperation:p,getTranslate:()=>a.current.translate,getElementMutationObserver:()=>ir,getSavedCellWidths:()=>wr,setSavedCellWidths:ge=>{wr=ge}}),Ka=new Pt(b);de(()=>p.shape=Ka);const An=xt(b),Ro=ge=>{this.manager.actions.stop({event:ge})},Ki=vd(An);X&&An.addEventListener("resize",Ro),de(()=>f.status)==="idle"&&requestAnimationFrame(()=>f.status="dragging"),V&&(Mo.observe(V),ir=rC(v,V,P),kr=nC(v,V,b));const To=(s=l.dragOperation.source)==null?void 0:s.id,Xi=()=>{var ge;if(!X||To==null)return;const Oe=l.registry.draggables.get(To),qe=(ge=Oe==null?void 0:Oe.handle)!=null?ge:Oe==null?void 0:Oe.element;Hr(qe)&&qe.focus()},Xr=()=>{var ge;if(ir==null||ir.disconnect(),kr==null||kr.disconnect(),Mo.disconnect(),An.removeEventListener("resize",Ro),wc(b)&&(b.removeEventListener("beforetoggle",xf),b.removeAttribute("popover")),b.removeAttribute(Zt),L.reset(),wr&&Pc(v)){const Ht=Array.from(v.cells);for(const[K,se]of Ht.entries())se.style.width=(ge=wr[K])!=null?ge:""}f.status="idle";const Oe=a.current.translate!=null,qe=p.status.dragging;V&&(!qe&&Oe||V.parentElement!==b.parentElement)&&b.isConnected&&V.replaceWith(b),V==null||V.remove()},Ji=c==null?void 0:c.dropAnimation,Qi=this,Xa=Ti(()=>{var ge,Oe,qe;const{transform:Ht,status:K}=p;if(!(!Ht.x&&!Ht.y&&!a.current.translate)&&K.dragging){const se=(ge=k.translate)!=null?ge:{x:0,y:0},ae={x:Ht.x/_.scaleX+se.x,y:Ht.y/_.scaleY+se.y},Ce=a.current.translate,Ue=de(()=>p.modifiers),ct=de(()=>{var Dt;return(Dt=p.shape)==null?void 0:Dt.current}),nt=c==null?void 0:c.keyboardTransition,Sr=X&&!Ki&&nt!==null?`${(Oe=nt==null?void 0:nt.duration)!=null?Oe:250}ms ${(qe=nt==null?void 0:nt.easing)!=null?qe:"cubic-bezier(0.25, 1, 0.5, 1)"}`:"0ms linear";if(L.set({transition:ie?`${ie}, translate ${Sr}`:`translate ${Sr}`,translate:`${ae.x}px ${ae.y}px 0`},Ye),ir==null||ir.takeRecords(),ct&&ct!==Ka&&Ce&&!Ue.length){const Dt=tt.delta(ae,Ce);p.shape=At.from(ct.boundingRectangle).translate(Dt.x*_.scaleX,Dt.y*_.scaleY)}else p.shape=new Pt(b);a.current.translate=ae}},function(){if(p.status.dropped){this.dispose(),f.status="dropping";const ge=(m==null?void 0:m.dropAnimation)!==void 0?m.dropAnimation:Qi.dropAnimation!==void 0?Qi.dropAnimation:Ji;let Oe=a.current.translate;const qe=Oe!=null;if(!Oe&&v!==b&&(Oe={x:0,y:0}),!Oe||ge===null){Xr();return}l.renderer.rendering.then(()=>{aC({source:f,element:v,feedbackElement:b,placeholder:V,translate:Oe,moved:qe,transition:N,alignment:f.alignment,styles:L,animation:ge??void 0,getElementMutationObserver:()=>ir,cleanup:Xr,restoreFocus:Xi})})}});return()=>{Xr(),Xa()}};zt(Pi,4,"overlay",v_,po,xd);Cn(Pi,po);po.configure=Ni(po);var Wi=po,No=!0,lC=!1,__,y_,b_,x_,Or,kd,wd;x_=(b_=[pe],It.Forward),y_=(__=[pe],It.Reverse);var Ai=class{constructor(){Re(this,kd,Be(Or,8,this,No)),Be(Or,11,this),Re(this,wd,Be(Or,12,this,No)),Be(Or,15,this)}isLocked(e){return e===It.Idle?!1:e==null?this[It.Forward]===No&&this[It.Reverse]===No:this[e]===No}unlock(e){e!==It.Idle&&(this[e]=lC)}};Or=Po(null);kd=new WeakMap;wd=new WeakMap;zt(Or,4,x_,b_,Ai,kd);zt(Or,4,y_,__,Ai,wd);Cn(Or,Ai);var cC=[It.Forward,It.Reverse],kf=class{constructor(){this.x=new Ai,this.y=new Ai}isLocked(){return this.x.isLocked()&&this.y.isLocked()}},uC=class extends Je{constructor(e){super(e);const t=xo(new kf);let r=null;this.signal=t,ft(()=>{const{status:n}=e.dragOperation;if(!n.initialized){r=null,t.value=new kf;return}const{delta:o}=e.dragOperation.position;if(r){const i={x:wf(o.x,r.x),y:wf(o.y,r.y)},s=t.peek();Ae(()=>{for(const a of Kg)for(const l of cC)i[a]===l&&s[a].unlock(l);t.value=s})}r=o})}get current(){return this.signal.peek()}};function wf(e,t){return Math.sign(e-t)}var k_,zc,zi,Sd,Pr,Oc,Hi=class extends(zc=Fi,k_=[pe],zc){constructor(e){super(e),Re(this,Sd,Be(zi,8,this,!1)),Be(zi,11,this),Re(this,Pr),Re(this,Oc,()=>{if(!xe(this,Pr))return;const{element:i,by:s}=xe(this,Pr);s.y&&(i.scrollTop+=s.y),s.x&&(i.scrollLeft+=s.x)}),this.scroll=(i,s)=>{var a;if(this.disabled)return!1;const l=this.getScrollableElements();if(!l)return st(this,Pr,void 0),!1;const{position:c}=this.manager.dragOperation,p=c==null?void 0:c.current;if(p){const{by:d}=i??{},f=d?{x:Sf(d.x),y:Sf(d.y)}:void 0,h=f?void 0:this.scrollIntentTracker.current;if(h!=null&&h.isLocked())return!1;for(const v of l){const m=iE(v,d);if(m.x||m.y){const{speed:y,direction:x}=gE(v,p,f,s==null?void 0:s.acceleration,s==null?void 0:s.threshold);if(h)for(const k of Kg)h[k].isLocked(x[k])&&(y[k]=0,x[k]=0);if(x.x||x.y){const{x:k,y:b}=d??x,_=k*y.x,S=b*y.y;if(_||S){const w=(a=xe(this,Pr))==null?void 0:a.by;if(this.autoScrolling&&w&&(w.x&&!_||w.y&&!S))continue;return st(this,Pr,{element:v,by:{x:_,y:S}}),na.schedule(xe(this,Oc)),!0}}}}}return st(this,Pr,void 0),!1};let t=null,r=null;const n=ac(()=>{const{position:i,source:s}=e.dragOperation;if(!i)return null;const a=Vm(ea(s==null?void 0:s.element),i.current);return a&&(t=a),a??t}),o=ac(()=>{const i=n.value,{documentElement:s}=Io(i);if(!i||i===s){const{target:a}=e.dragOperation,l=a==null?void 0:a.element;if(l){const c=Sc(l,{excludeElement:!1});return r=c,c}}if(i){const a=Sc(i,{excludeElement:!1});return this.autoScrolling&&r&&a.size<(r==null?void 0:r.size)?r:(r=a,a)}return r=null,null},Tt);this.getScrollableElements=()=>o.value,this.scrollIntentTracker=new uC(e),this.destroy=e.monitor.addEventListener("dragmove",i=>{this.disabled||i.defaultPrevented||!Ii(e.dragOperation.activatorEvent)||!i.by||this.scroll({by:i.by})&&i.preventDefault()})}};zi=Po(zc);Sd=new WeakMap;Pr=new WeakMap;Oc=new WeakMap;zt(zi,4,"autoScrolling",k_,Hi,Sd);Cn(zi,Hi);function Sf(e){return e>0?It.Forward:e<0?It.Reverse:It.Idle}var dC=class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{const{tasks:t,resolvers:r}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(const n of t)n();for(const n of r)n()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(t=>this.resolvers.add(t))}},pC=new dC(e=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()}),fC=10,Dc=class extends Je{constructor(t,r){super(t,r);const n=t.registry.plugins.get(Hi);if(!n)throw new Error("AutoScroller plugin depends on Scroller plugin");this.destroy=ft(()=>{var o,i,s;if(this.disabled)return;const{position:a,status:l}=t.dragOperation;if(l.dragging){const c={acceleration:(o=this.options)==null?void 0:o.acceleration,threshold:typeof((i=this.options)==null?void 0:i.threshold)=="number"?{x:this.options.threshold,y:this.options.threshold}:(s=this.options)==null?void 0:s.threshold};if(n.scroll(void 0,c)){n.autoScrolling=!0;const d=setInterval(()=>pC.schedule(()=>n.scroll(void 0,c)),fC);return()=>{clearInterval(d)}}else n.autoScrolling=!1}})}};Dc.configure=Ni(Dc);var Ed=Dc,Ef={capture:!0,passive:!0},ei,hC=class extends Fi{constructor(e){super(e),Re(this,ei),this.handleScroll=()=>{xe(this,ei)==null&&st(this,ei,setTimeout(()=>{this.manager.collisionObserver.forceUpdate(!1),st(this,ei,void 0)},50))};const{dragOperation:t}=this.manager;this.destroy=ft(()=>{var r,n,o;if(t.status.dragging){const s=(o=(n=(r=t.source)==null?void 0:r.element)==null?void 0:n.ownerDocument)!=null?o:document;return s.addEventListener("scroll",this.handleScroll,Ef),()=>{s.removeEventListener("scroll",this.handleScroll,Ef)}}})}};ei=new WeakMap;var vC="* { user-select: none !important; -webkit-user-select: none !important; }",gC=class extends Je{constructor(e){super(e),this.manager=e;const t=e.registry.plugins.get(Fa),r=t==null?void 0:t.register(vC);if(this.destroy=ft(()=>{const{dragOperation:n}=this.manager;if(n.status.initialized)return ml(),document.addEventListener("selectionchange",ml,{capture:!0}),()=>{document.removeEventListener("selectionchange",ml,{capture:!0})}}),r){const n=this.destroy.bind(this);this.destroy=()=>{r(),n()}}}};function ml(){var e;(e=document.getSelection())==null||e.removeAllRanges()}var ti=Object.freeze({offset:10,keyboardCodes:{start:["Space","Enter"],cancel:["Escape"],end:["Space","Enter","Tab"],up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"]},preventActivation(e,t){var r;const n=(r=t.handle)!=null?r:t.element;return e.target!==n}}),Yn,la=class extends io{constructor(t,r){super(t),this.manager=t,this.options=r,Re(this,Yn,[]),this.listeners=new qm,this.handleSourceKeyDown=(n,o,i)=>{if(this.disabled||n.defaultPrevented||!Vr(n.target)||o.disabled)return;const{keyboardCodes:s=ti.keyboardCodes,preventActivation:a=ti.preventActivation}=i??{};s.start.includes(n.code)&&this.manager.dragOperation.status.idle&&(a!=null&&a(n,o)||this.handleStart(n,o,i))}}bind(t,r=this.options){return ft(()=>{var o;const i=(o=t.handle)!=null?o:t.element,s=a=>{Ii(a)&&this.handleSourceKeyDown(a,t,r)};if(i)return i.addEventListener("keydown",s),()=>{i.removeEventListener("keydown",s)}})}handleStart(t,r,n){const{element:o}=r;if(!o)throw new Error("Source draggable does not have an associated element");t.preventDefault(),t.stopImmediatePropagation(),Jm(o);const{center:i}=new Pt(o);if(this.manager.actions.start({event:t,coordinates:{x:i.x,y:i.y},source:r}).signal.aborted)return this.cleanup();this.sideEffects();const a=Io(o),l=[this.listeners.bind(a,[{type:"keydown",listener:c=>this.handleKeyDown(c,r,n),options:{capture:!0}}])];xe(this,Yn).push(...l)}handleKeyDown(t,r,n){const{keyboardCodes:o=ti.keyboardCodes}=n??{};if(Tn(t,[...o.end,...o.cancel])){t.preventDefault();const i=Tn(t,o.cancel);this.handleEnd(t,i);return}Tn(t,o.up)?this.handleMove("up",t):Tn(t,o.down)&&this.handleMove("down",t),Tn(t,o.left)?this.handleMove("left",t):Tn(t,o.right)&&this.handleMove("right",t)}handleEnd(t,r){this.manager.actions.stop({event:t,canceled:r}),this.cleanup()}handleMove(t,r){var n,o;const{shape:i}=this.manager.dragOperation,s=r.shiftKey?5:1;let a={x:0,y:0},l=(o=(n=this.options)==null?void 0:n.offset)!=null?o:ti.offset;if(typeof l=="number"&&(l={x:l,y:l}),!!i){switch(t){case"up":a={x:0,y:-l.y*s};break;case"down":a={x:0,y:l.y*s};break;case"left":a={x:-l.x*s,y:0};break;case"right":a={x:l.x*s,y:0};break}(a.x||a.y)&&(r.preventDefault(),this.manager.actions.move({event:r,by:a}))}}sideEffects(){const t=this.manager.registry.plugins.get(Ed);(t==null?void 0:t.disabled)===!1&&(t.disable(),xe(this,Yn).push(()=>{t.enable()}))}cleanup(){xe(this,Yn).forEach(t=>t()),st(this,Yn,[])}destroy(){this.cleanup(),this.listeners.clear()}};Yn=new WeakMap;la.configure=Ni(la);la.defaults=ti;var mC=la;function Tn(e,t){return t.includes(e.code)}var sn,_C=class extends jm{constructor(){super(...arguments),Re(this,sn)}onEvent(e){switch(e.type){case"pointerdown":st(this,sn,so(e));break;case"pointermove":if(!xe(this,sn))return;const{x:t,y:r}=so(e),n={x:t-xe(this,sn).x,y:r-xe(this,sn).y},{tolerance:o}=this.options;if(o&&gc(n,o)){this.abort();return}gc(n,this.options.value)&&this.activate(e);break;case"pointerup":this.abort();break}}abort(){st(this,sn,void 0)}};sn=new WeakMap;var Gn,an,yC=class extends jm{constructor(){super(...arguments),Re(this,Gn),Re(this,an)}onEvent(e){switch(e.type){case"pointerdown":st(this,an,so(e)),st(this,Gn,setTimeout(()=>this.activate(e),this.options.value));break;case"pointermove":if(!xe(this,an))return;const{x:t,y:r}=so(e),n={x:t-xe(this,an).x,y:r-xe(this,an).y};gc(n,this.options.tolerance)&&this.abort();break;case"pointerup":this.abort();break}}abort(){xe(this,Gn)&&(clearTimeout(xe(this,Gn)),st(this,an,void 0),st(this,Gn,void 0))}};Gn=new WeakMap;an=new WeakMap;var cr=class{};cr.Delay=yC;cr.Distance=_C;var Mc=Object.freeze({activationConstraints(e,t){var r;const{pointerType:n,target:o}=e;if(!(n==="mouse"&&Vr(o)&&(t.handle===o||(r=t.handle)!=null&&r.contains(o))))return n==="touch"?[new cr.Delay({value:250,tolerance:5})]:IE(o)&&!e.defaultPrevented?[new cr.Delay({value:200,tolerance:0})]:[new cr.Delay({value:200,tolerance:10}),new cr.Distance({value:5})]},preventActivation(e,t){var r;const{target:n}=e;return n===t.element||n===t.handle||!Vr(n)||(r=t.handle)!=null&&r.contains(n)?!1:Y2(n)}}),Kn,ca=class extends io{constructor(t,r){super(t),this.manager=t,this.options=r,Re(this,Kn,new Set),this.listeners=new qm,this.latest={event:void 0,coordinates:void 0},this.handleMove=()=>{const{event:n,coordinates:o}=this.latest;!n||!o||this.manager.actions.move({event:n,to:o})},this.handleCancel=this.handleCancel.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activationConstraints(t,r,n=this.options){const{activationConstraints:o=Mc.activationConstraints}=n??{};return typeof o=="function"?o(t,r):o}bind(t,r=this.options){return ft(()=>{var o;const i=new AbortController,{signal:s}=i,a=c=>{CE(c)&&this.handlePointerDown(c,t,r)};let l=[(o=t.handle)!=null?o:t.element];r!=null&&r.activatorElements&&(Array.isArray(r.activatorElements)?l=r.activatorElements:l=r.activatorElements(t));for(const c of l)c&&(kC(c.ownerDocument.defaultView),c.addEventListener("pointerdown",a,{signal:s}));return()=>i.abort()})}handlePointerDown(t,r,n){if(this.disabled||!t.isPrimary||t.button!==0||!Vr(t.target)||r.disabled||bC(t)||!this.manager.dragOperation.status.idle)return;const{preventActivation:o=Mc.preventActivation}=n??{};if(o!=null&&o(t,r))return;const{target:i}=t,s=Hr(i)&&i.draggable&&i.getAttribute("draggable")==="true",a=lo(r.element),{x:l,y:c}=so(t);this.initialCoordinates={x:l*a.scaleX+a.x,y:c*a.scaleY+a.y};const p=this.activationConstraints(t,r,n);t.sensor=this;const d=new F2(p,m=>this.handleStart(r,m));d.signal.onabort=()=>this.handleCancel(t),d.onEvent(t),this.controller=d;const f=bc(),h=this.listeners.bind(f,[{type:"pointermove",listener:m=>this.handlePointerMove(m,r)},{type:"pointerup",listener:this.handlePointerUp,options:{capture:!0}},{type:"pointercancel",listener:this.handleCancel},{type:"dragstart",listener:s?this.handleCancel:ps,options:{capture:!0}}]),v=()=>{h(),this.initialCoordinates=void 0};xe(this,Kn).add(v)}handlePointerMove(t,r){var n,o;if(((n=this.controller)==null?void 0:n.activated)===!1){(o=this.controller)==null||o.onEvent(t);return}if(this.manager.dragOperation.status.dragging){const i=so(t),s=lo(r.element);i.x=i.x*s.scaleX+s.x,i.y=i.y*s.scaleY+s.y,t.preventDefault(),t.stopPropagation(),this.latest.event=t,this.latest.coordinates=i,na.schedule(this.handleMove)}}handlePointerUp(t){const{status:r}=this.manager.dragOperation;if(!r.idle){t.preventDefault(),t.stopPropagation();const n=!r.initialized;this.manager.actions.stop({event:t,canceled:n})}this.cleanup()}handleKeyDown(t){t.key==="Escape"&&(t.preventDefault(),this.handleCancel(t))}handleStart(t,r){const{manager:n,initialCoordinates:o}=this;if(!o||!n.dragOperation.status.idle||r.defaultPrevented)return;if(n.actions.start({coordinates:o,event:r,source:t}).signal.aborted)return this.cleanup();r.preventDefault();const a=Io(r.target).body;try{a.setPointerCapture(r.pointerId)}catch{this.handleCancel(r);return}const l=Vr(r.target)?[r.target,a]:a,c=this.listeners.bind(l,[{type:"touchmove",listener:ps,options:{passive:!1}},{type:"click",listener:ps},{type:"contextmenu",listener:ps},{type:"keydown",listener:this.handleKeyDown}]);xe(this,Kn).add(c)}handleCancel(t){const{dragOperation:r}=this.manager;r.status.initialized&&this.manager.actions.stop({event:t,canceled:!0}),this.cleanup()}cleanup(){const{controller:t}=this;this.controller=void 0,t&&!t.signal.aborted&&t.abort(),this.latest={event:void 0,coordinates:void 0},xe(this,Kn).forEach(r=>r()),xe(this,Kn).clear()}destroy(){this.cleanup(),this.listeners.clear()}};Kn=new WeakMap;ca.configure=Ni(ca);ca.defaults=Mc;var w_=ca;function bC(e){return"sensor"in e}function ps(e){e.preventDefault()}function xC(){}var Cf=new WeakSet;function kC(e){!e||Cf.has(e)||(e.addEventListener("touchmove",xC,{capture:!1,passive:!1}),Cf.add(e))}var Fr={modifiers:[],plugins:[UE,Ed,YE,Wi,gC],sensors:[w_,mC]},S_=class extends W2{constructor(e={}){const t=Ft(e.plugins,Fr.plugins),r=Ft(e.sensors,Fr.sensors),n=Ft(e.modifiers,Fr.modifiers);super(_d(ji({},e),{plugins:[hC,Hi,Fa,...t],sensors:r,modifiers:n}))}},E_,C_,Rc,Dr,Cd,Id,Vi=class extends(Rc=tr,C_=[pe],E_=[pe],Rc){constructor(e,t){var r=e,{element:n,effects:o=()=>[],handle:i}=r,s=o_(r,["element","effects","handle"]);super(ji({effects:()=>[...o(),()=>{var a,l;const{manager:c}=this;if(!c)return;const d=((l=(a=this.sensors)==null?void 0:a.map(Si))!=null?l:[...c.sensors]).map(f=>{const h=f instanceof io?f:c.registry.register(f.plugin),v=f instanceof io?void 0:f.options;return h.bind(this,v)});return function(){d.forEach(h=>h())}}]},s),t),Re(this,Cd,Be(Dr,8,this)),Be(Dr,11,this),Re(this,Id,Be(Dr,12,this)),Be(Dr,15,this),this.element=n,this.handle=i}};Dr=Po(Rc);Cd=new WeakMap;Id=new WeakMap;zt(Dr,4,"handle",C_,Vi,Cd);zt(Dr,4,"element",E_,Vi,Id);Cn(Dr,Vi);var I_,j_,Tc,Mr,jd,_l,P_,A_,pi,Pd,Ba=class extends(Tc=rr,j_=[pe],I_=[pe],Tc){constructor(e,t){var r=e,{element:n,effects:o=()=>[]}=r,i=o_(r,["element","effects"]);const{collisionDetector:s=e_}=i,a=c=>{const{manager:p,element:d}=this;if(!d||c===null){this.shape=void 0;return}if(!p)return;const f=new Pt(d),h=de(()=>this.shape);return f&&(h!=null&&h.equals(f))?h:(this.shape=f,f)},l=xo(!1);super(_d(ji({},i),{collisionDetector:s,effects:()=>[...o(),()=>{const{element:c,manager:p}=this;if(!p)return;const{dragOperation:d}=p,{source:f}=d;l.value=!!(f&&d.status.initialized&&c&&!this.disabled&&this.accepts(f))},()=>{const{element:c}=this;if(l.value&&c){const p=new oE(c,a);return()=>{p.disconnect(),this.shape=void 0}}},()=>{var c;if((c=this.manager)!=null&&c.dragOperation.status.initialized)return()=>{this.shape=void 0}}]}),t),Re(this,pi),Re(this,jd,Be(Mr,8,this)),Be(Mr,11,this),Re(this,Pd,Be(Mr,12,this)),Be(Mr,15,this),this.element=n,this.refreshShape=()=>a()}set element(e){st(this,pi,e,A_)}get element(){var e;return(e=this.proxy)!=null?e:xe(this,pi,P_)}};Mr=Po(Tc);jd=new WeakMap;pi=new WeakSet;Pd=new WeakMap;_l=zt(Mr,20,"#element",j_,pi,jd),P_=_l.get,A_=_l.set;zt(Mr,4,"proxy",I_,Ba,Pd);Cn(Mr,Ba);function wC(e){return e!=null&&typeof e=="object"&&"current"in e}function Br(e){var t;if(e!=null)return wC(e)?(t=e.current)!=null?t:void 0:e}var SC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ao=SC?g.useLayoutEffect:g.useEffect;function EC(){const e=g.useState(0)[1];return g.useCallback(()=>{e(t=>t+1)},[e])}function Ad(e,t){const r=g.useRef(new Map),n=EC();return Ao(()=>{if(!e){r.current.clear();return}return ft(()=>{var o;let i=!1,s=!1;for(const a of r.current){const[l]=a,c=de(()=>a[1]),p=e[l];c!==p&&(i=!0,r.current.set(l,p),s=(o=t==null?void 0:t(l,c,p))!=null?o:!1)}i&&(s?queueMicrotask(()=>Ur.flushSync(n)):n())})},[e]),g.useMemo(()=>e&&new Proxy(e,{get(o,i){const s=o[i];return r.current.set(i,s),s}}),[e])}function CC(e,t){e()}function Ln(e){const t=g.useRef(e);return Ao(()=>{t.current=e},[e]),t}function me(e,t,r=g.useEffect,n=Object.is){const o=g.useRef(e);r(()=>{const i=o.current;n(e,i)||(o.current=e,t(e,i))},[t,e])}function oo(e,t){const r=g.useRef(Br(e));Ao(()=>{const n=Br(e);n!==r.current&&(r.current=n,t(n))})}var IC=Object.defineProperty,jC=Object.defineProperties,PC=Object.getOwnPropertyDescriptors,ua=Object.getOwnPropertySymbols,z_=Object.prototype.hasOwnProperty,O_=Object.prototype.propertyIsEnumerable,If=(e,t,r)=>t in e?IC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D_=(e,t)=>{for(var r in t||(t={}))z_.call(t,r)&&If(e,r,t[r]);if(ua)for(var r of ua(t))O_.call(t,r)&&If(e,r,t[r]);return e},M_=(e,t)=>jC(e,PC(t)),AC=(e,t)=>{var r={};for(var n in e)z_.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ua)for(var n of ua(e))t.indexOf(n)<0&&O_.call(e,n)&&(r[n]=e[n]);return r},zC=new S_,R_=g.createContext(zC),OC=g.memo(g.forwardRef(({children:e},t)=>{const[r,n]=g.useState(0),o=g.useRef(null),i=g.useRef(null),s=g.useMemo(()=>({renderer:{get rendering(){var a;return(a=o.current)!=null?a:Promise.resolve()}},trackRendering(a){o.current||(o.current=new Promise(l=>{i.current=l})),g.startTransition(()=>{a(),n(l=>l+1)})}}),[]);return Ao(()=>{var a;(a=i.current)==null||a.call(i),o.current=null},[e,r]),g.useImperativeHandle(t,()=>s),null})),yl=[void 0,Tt];function zd(e){var t=e,{children:r,onCollision:n,onBeforeDragStart:o,onDragStart:i,onDragMove:s,onDragOver:a,onDragEnd:l}=t,c=AC(t,["children","onCollision","onBeforeDragStart","onDragStart","onDragMove","onDragOver","onDragEnd"]);const p=g.useRef(null),{plugins:d,modifiers:f,sensors:h}=c,v=Ft(d,Fr.plugins),m=Ft(h,Fr.sensors),y=Ft(f,Fr.modifiers),x=Ln(o),k=Ln(i),b=Ln(a),_=Ln(s),S=Ln(l),w=Ln(n),j=DC(()=>{var C;return(C=c.manager)!=null?C:new S_(c)});return g.useEffect(()=>{if(!p.current)throw new Error("Renderer not found");const{renderer:C,trackRendering:I}=p.current,{monitor:E}=j;j.renderer=C;const z=[E.addEventListener("beforedragstart",O=>{const L=x.current;L&&I(()=>L(O,j))}),E.addEventListener("dragstart",O=>{var L;return(L=k.current)==null?void 0:L.call(k,O,j)}),E.addEventListener("dragover",O=>{const L=b.current;L&&I(()=>L(O,j))}),E.addEventListener("dragmove",O=>{const L=_.current;L&&I(()=>L(O,j))}),E.addEventListener("dragend",O=>{const L=S.current;L&&I(()=>L(O,j))}),E.addEventListener("collision",O=>{var L;return(L=w.current)==null?void 0:L.call(w,O,j)})];return()=>z.forEach(O=>O())},[j]),me(v,()=>j&&(j.plugins=v),...yl),me(m,()=>j&&(j.sensors=m),...yl),me(y,()=>j&&(j.modifiers=y),...yl),u.jsxs(R_.Provider,{value:j,children:[u.jsx(OC,{ref:p,children:r}),r]})}function DC(e){const t=g.useRef(null);return t.current||(t.current=e()),g.useInsertionEffect(()=>()=>{var r;return(r=t.current)==null?void 0:r.destroy()},[]),t.current}function T_(){return g.useContext(R_)}function Od(e){var t;const r=(t=T_())!=null?t:void 0,[n]=g.useState(()=>e(r));return n.manager!==r&&(n.manager=r),Ao(n.register,[r,n]),n}function MC(e){const{disabled:t,data:r,element:n,handle:o,id:i,modifiers:s,sensors:a,plugins:l}=e,c=Od(d=>new Vi(M_(D_({},e),{register:!1,handle:Br(o),element:Br(n)}),d)),p=Ad(c,RC);return me(i,()=>c.id=i),oo(o,d=>c.handle=d),oo(n,d=>c.element=d),me(r,()=>r&&(c.data=r)),me(t,()=>c.disabled=t===!0),me(a,()=>c.sensors=a),me(s,()=>c.modifiers=s,void 0,Tt),me(l,()=>c.plugins=l,void 0,Tt),me(e.alignment,()=>c.alignment=e.alignment),{draggable:p,get isDragging(){return p.isDragging},get isDropping(){return p.isDropping},get isDragSource(){return p.isDragSource},handleRef:g.useCallback(d=>{c.handle=d??void 0},[c]),ref:g.useCallback(d=>{var f,h;!d&&((f=c.element)!=null&&f.isConnected)&&!((h=c.manager)!=null&&h.dragOperation.status.idle)||(c.element=d??void 0)},[c])}}function RC(e,t,r){return!!(e==="isDragSource"&&!r&&t)}var TC=Object.create,L_=Object.defineProperty,LC=Object.getOwnPropertyDescriptor,N_=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),$a=e=>{throw TypeError(e)},NC=(e,t,r)=>t in e?L_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,FC=e=>{var t;return[,,,TC((t=e==null?void 0:e[N_("metadata")])!=null?t:null)]},F_=["class","method","getter","setter","accessor","field","value","get","set"],B_=e=>e!==void 0&&typeof e!="function"?$a("Function expected"):e,BC=(e,t,r,n,o)=>({kind:F_[e],name:t,metadata:n,addInitializer:i=>r._?$a("Already initialized"):o.push(B_(i||null))}),$C=(e,t)=>NC(t,N_("metadata"),e[3]),WC=(e,t,r,n)=>{for(var o=0,i=e[t>>1],s=i&&i.length;o<s;o++)i[o].call(r);return n},$_=(e,t,r,n,o,i)=>{for(var s,a,l,c,p=t&7,d=!1,f=!1,h=2,v=F_[p+5],m=e[h]||(e[h]=[]),y=(o=o.prototype,LC(o,r)),x=n.length-1;x>=0;x--)l=BC(p,r,a={},e[3],m),l.static=d,l.private=f,c=l.access={has:k=>r in k},c.get=k=>k[r],s=(0,n[x])(y[v],l),a._=1,B_(s)&&(y[v]=s);return y&&L_(o,r,y),o},W_=(e,t,r)=>t.has(e)||$a("Cannot "+r),HC=(e,t,r)=>(W_(e,t,"read from private field"),t.get(e)),VC=(e,t,r)=>t.has(e)?$a("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),qC=(e,t,r,n)=>(W_(e,t,"write to private field"),t.set(e,r),r),un=class Lc{constructor(t,r){this.x=t,this.y=r}static delta(t,r){return new Lc(t.x-r.x,t.y-r.y)}static distance(t,r){return Math.hypot(t.x-r.x,t.y-r.y)}static equals(t,r){return t.x===r.x&&t.y===r.y}static from({x:t,y:r}){return new Lc(t,r)}},H_,V_,Nc,Fs,qi,Dd=class extends(Nc=Sn,V_=[Me],H_=[Me],Nc){constructor(e){const t=un.from(e);super(t,(r,n)=>un.equals(r,n)),WC(qi,5,this),VC(this,Fs,0),this.velocity={x:0,y:0}}get delta(){return un.delta(this.current,this.initial)}get direction(){const{current:e,previous:t}=this;if(!t)return null;const r={x:e.x-t.x,y:e.y-t.y};return!r.x&&!r.y?null:Math.abs(r.x)>Math.abs(r.y)?r.x>0?"right":"left":r.y>0?"down":"up"}get current(){return super.current}set current(e){const{current:t}=this,r=un.from(e),n={x:r.x-t.x,y:r.y-t.y},o=Date.now(),i=o-HC(this,Fs),s=a=>Math.round(a/i*100);Ae(()=>{qC(this,Fs,o),this.velocity={x:s(n.x),y:s(n.y)},super.current=r})}reset(e=this.defaultValue){super.reset(un.from(e)),this.velocity={x:0,y:0}}};qi=FC(Nc);Fs=new WeakMap;$_(qi,2,"delta",V_,Dd);$_(qi,2,"direction",H_,Dd);$C(qi,Dd);var q_=(e=>(e.Horizontal="x",e.Vertical="y",e))(q_||{});Object.values(q_);var UC=({dragOperation:e,droppable:t})=>{const r=e.position.current;if(!r)return null;const{id:n}=t;if(!t.shape)return null;if(t.shape.containsPoint(r)){const o=un.distance(t.shape.center,r);return{id:n,value:1/o,type:nr.PointerIntersection,priority:Ct.High}}return null},ZC=({dragOperation:e,droppable:t})=>{const{shape:r}=e;if(!t.shape||!(r!=null&&r.current))return null;const n=r.current.intersectionArea(t.shape);if(n){const{position:o}=e,i=un.distance(t.shape.center,o.current),a=n/(r.current.area+t.shape.area-n)/i;return{id:t.id,value:a,type:nr.ShapeIntersection,priority:Ct.Normal}}return null},YC=e=>{var t;return(t=UC(e))!=null?t:ZC(e)};function Md(e){const{collisionDetector:t,data:r,disabled:n,element:o,id:i,accept:s,type:a}=e,l=Od(p=>new Ba(M_(D_({},e),{register:!1,element:Br(o)}),p)),c=Ad(l);return me(i,()=>l.id=i),oo(o,p=>l.element=p),me(s,()=>l.accept=s,void 0,Tt),me(t,()=>l.collisionDetector=t??YC),me(r,()=>r&&(l.data=r)),me(n,()=>l.disabled=n===!0),me(a,()=>l.type=a),{droppable:c,get isDropTarget(){return c.isDropTarget},ref:g.useCallback(p=>{var d,f;!p&&((d=l.element)!=null&&d.isConnected)&&!((f=l.manager)!=null&&f.dragOperation.status.idle)||(l.element=p??void 0)},[l])}}var GC=Object.create,U_=Object.defineProperty,KC=Object.defineProperties,XC=Object.getOwnPropertyDescriptor,JC=Object.getOwnPropertyDescriptors,da=Object.getOwnPropertySymbols,Z_=Object.prototype.hasOwnProperty,Y_=Object.prototype.propertyIsEnumerable,QC=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ui=e=>{throw TypeError(e)},Fc=(e,t,r)=>t in e?U_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,jf=(e,t)=>{for(var r in t||(t={}))Z_.call(t,r)&&Fc(e,r,t[r]);if(da)for(var r of da(t))Y_.call(t,r)&&Fc(e,r,t[r]);return e},Pf=(e,t)=>KC(e,JC(t)),eI=(e,t)=>{var r={};for(var n in e)Z_.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&da)for(var n of da(e))t.indexOf(n)<0&&Y_.call(e,n)&&(r[n]=e[n]);return r},tI=e=>{var t;return[,,,GC((t=void 0)!=null?t:null)]},G_=["class","method","getter","setter","accessor","field","value","get","set"],ri=e=>e!==void 0&&typeof e!="function"?Ui("Function expected"):e,rI=(e,t,r,n,o)=>({kind:G_[e],name:t,metadata:n,addInitializer:i=>r._?Ui("Already initialized"):o.push(ri(i||null))}),nI=(e,t)=>Fc(t,QC("metadata"),e[3]),fs=(e,t,r,n)=>{for(var o=0,i=e[t>>1],s=i&&i.length;o<s;o++)t&1?i[o].call(r):n=i[o].call(r,n);return n},K_=(e,t,r,n,o,i)=>{for(var s,a,l,c,p,d=t&7,f=!1,h=!1,v=e.length+1,m=G_[d+5],y=e[v-1]=[],x=e[v]||(e[v]=[]),k=(o=o.prototype,XC({get[r](){return ni(this,i)},set[r](_){return ln(this,i,_)}},r)),b=n.length-1;b>=0;b--)c=rI(d,r,l={},e[3],x),c.static=f,c.private=h,p=c.access={has:_=>r in _},p.get=_=>_[r],p.set=(_,S)=>_[r]=S,a=(0,n[b])({get:k.get,set:k.set},c),l._=1,a===void 0?ri(a)&&(k[m]=a):typeof a!="object"||a===null?Ui("Object expected"):(ri(s=a.get)&&(k.get=s),ri(s=a.set)&&(k.set=s),ri(s=a.init)&&y.unshift(s));return k&&U_(o,r,k),o},X_=(e,t,r)=>t.has(e)||Ui("Cannot "+r),ni=(e,t,r)=>(X_(e,t,"read from private field"),t.get(e)),Fo=(e,t,r)=>t.has(e)?Ui("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ln=(e,t,r,n)=>(X_(e,t,"write to private field"),t.set(e,r),r);function pn(e){return e instanceof Ld||e instanceof ty}var hs=10,oI=class extends Je{constructor(e){super(e);const t=ft(()=>{const{dragOperation:n}=e;if(Ii(n.activatorEvent)&&pn(n.source)&&n.status.initialized){const o=e.registry.plugins.get(Hi);if(o)return o.disable(),()=>o.enable()}}),r=e.monitor.addEventListener("dragmove",(n,o)=>{queueMicrotask(()=>{if(this.disabled||n.defaultPrevented||!n.nativeEvent)return;const{dragOperation:i}=o;if(!Ii(n.nativeEvent)||!pn(i.source)||!i.shape)return;const{actions:s,collisionObserver:a,registry:l}=o,{by:c}=n;if(!c)return;const p=iI(c),{source:d,target:f}=i,{center:h}=i.shape.current,v=[],m=[];Ae(()=>{for(const S of l.droppables){const{id:w}=S;if(!S.accepts(d)||w===(f==null?void 0:f.id)&&pn(S)||!S.element)continue;let j=S.shape;const C=new Pt(S.element,{getBoundingClientRect:I=>Ci(I,void 0,.2)});!C.height||!C.width||(p=="down"&&h.y+hs<C.center.y||p=="up"&&h.y-hs>C.center.y||p=="left"&&h.x-hs>C.center.x||p=="right"&&h.x+hs<C.center.x)&&(v.push(S),S.shape=C,m.push(()=>S.shape=j))}}),n.preventDefault(),a.disable();const y=a.computeCollisions(v,zE);Ae(()=>m.forEach(S=>S()));const[x]=y;if(!x)return;const{id:k}=x,{index:b,group:_}=d.sortable;s.setDropTarget(k).then(()=>{const{source:S,target:w,shape:j}=i;if(!S||!pn(S)||!j)return;const{index:C,group:I,target:E}=S.sortable,z=b!==C||_!==I,O=z?E:w==null?void 0:w.element;if(!O)return;Jm(O);const L=new Pt(O);if(!L)return;const B=At.delta(L,At.from(j.current.boundingRectangle),S.alignment);s.move({by:B}),z?s.setDropTarget(S.id).then(()=>a.enable()):a.enable()})})});this.destroy=()=>{r(),t()}}};function iI(e){const{x:t,y:r}=e;if(t>0)return"right";if(t<0)return"left";if(r>0)return"down";if(r<0)return"up"}var sI=Object.defineProperty,aI=Object.defineProperties,lI=Object.getOwnPropertyDescriptors,Af=Object.getOwnPropertySymbols,cI=Object.prototype.hasOwnProperty,uI=Object.prototype.propertyIsEnumerable,zf=(e,t,r)=>t in e?sI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Nn=(e,t)=>{for(var r in t||(t={}))cI.call(t,r)&&zf(e,r,t[r]);if(Af)for(var r of Af(t))uI.call(t,r)&&zf(e,r,t[r]);return e},Fn=(e,t)=>aI(e,lI(t));function dI(e,t,r){if(t===r)return e;const n=e.slice();return n.splice(r,0,n.splice(t,1)[0]),n}function bl(e){return"initialIndex"in e&&typeof e.initialIndex=="number"&&"index"in e&&typeof e.index=="number"}function pI(e,t,r){var n,o,i;const{source:s,target:a,canceled:l}=t.operation;if(!s||!a||l)return"preventDefault"in t&&t.preventDefault(),e;const c=(_,S)=>_===S||typeof _=="object"&&"id"in _&&_.id===S;if(Array.isArray(e)){const _=e.findIndex(w=>c(w,s.id)),S=e.findIndex(w=>c(w,a.id));if(_===-1||S===-1){if(bl(s)){const w=s.initialIndex,j=s.index;return w===j||w<0||w>=e.length?("preventDefault"in t&&t.preventDefault(),e):r(e,w,j)}return e}if(!l&&"index"in s&&typeof s.index=="number"){const w=s.index;if(w!==_)return r(e,_,w)}return r(e,_,S)}const p=Object.entries(e);let d=-1,f,h=-1,v;for(const[_,S]of p)if(d===-1&&(d=S.findIndex(w=>c(w,s.id)),d!==-1&&(f=_)),h===-1&&(h=S.findIndex(w=>c(w,a.id)),h!==-1&&(v=_)),d!==-1&&h!==-1)break;if(d===-1&&bl(s)){const _=s.initialGroup,S=s.initialIndex,w=s.group,j=s.index;if(_==null||w==null||!(_ in e)||!(w in e)||_===w&&S===j)return"preventDefault"in t&&t.preventDefault(),e;if(_===w)return Fn(Nn({},e),{[_]:r(e[_],S,j)});const C=e[_][S];return Fn(Nn({},e),{[_]:[...e[_].slice(0,S),...e[_].slice(S+1)],[w]:[...e[w].slice(0,j),C,...e[w].slice(j)]})}if(!s.manager)return e;const{dragOperation:m}=s.manager,y=(o=(n=m.shape)==null?void 0:n.current.center)!=null?o:m.position.current;if(v==null&&a.id in e){const _=a.shape&&y.y>a.shape.center.y?e[a.id].length:0;v=a.id,h=_}if(f==null||v==null||f===v&&d===h){if(f!=null&&f===v&&d===h&&bl(s)){const _=s.group!=null&&s.group!==f,S=s.index!==d;if(_||S){const w=(i=s.group)!=null?i:f;if(w in e){if(f===w)return Fn(Nn({},e),{[f]:r(e[f],d,s.index)});const j=e[f][d];return Fn(Nn({},e),{[f]:[...e[f].slice(0,d),...e[f].slice(d+1)],[w]:[...e[w].slice(0,s.index),j,...e[w].slice(s.index)]})}}}return"preventDefault"in t&&t.preventDefault(),e}if(f===v)return Fn(Nn({},e),{[f]:r(e[f],d,h)});const k=a.shape&&Math.round(y.y)>Math.round(a.shape.center.y)?1:0,b=e[f][d];return Fn(Nn({},e),{[f]:[...e[f].slice(0,d),...e[f].slice(d+1)],[v]:[...e[v].slice(0,h+k),b,...e[v].slice(h+k)]})}function fI(e,t){return pI(e,t,dI)}var Of="__default__",hI=class extends Je{constructor(e){super(e);const t=()=>{const n=new Map;for(const o of e.registry.droppables)if(o instanceof Ld){const{sortable:i}=o,{group:s}=i;let a=n.get(s);a||(a=new Set,n.set(s,a)),a.add(i)}for(const[o,i]of n)n.set(o,new Set(vs(i)));return n},r=[e.monitor.addEventListener("dragover",(n,o)=>{if(this.disabled)return;const{dragOperation:i}=o,{source:s,target:a}=i;if(!pn(s)||!pn(a)||s.sortable===a.sortable)return;const l=t(),c=s.sortable.group===a.sortable.group,p=l.get(s.sortable.group),d=c?p:l.get(a.sortable.group);!p||!d||queueMicrotask(()=>{n.defaultPrevented||o.renderer.rendering.then(()=>{var f,h,v;const m=t();for(const[E,z]of l.entries()){const O=Array.from(z).entries();for(const[L,B]of O)if(B.index!==L||B.group!==E||!((f=m.get(E))!=null&&f.has(B)))return}const y=s.sortable.element,x=a.sortable.element;if(!x||!y||!c&&a.id===s.sortable.group)return;const k=vs(p),b=c?k:vs(d),_=(h=s.sortable.group)!=null?h:Of,S=(v=a.sortable.group)!=null?v:Of,w={[_]:k,[S]:b},j=fI(w,n);if(w===j)return;const C=j[S].indexOf(s.sortable),I=j[S].indexOf(a.sortable);o.collisionObserver.disable(),Df(y,C,x,I),Ae(()=>{for(const[E,z]of j[_].entries())z.index=E;if(!c)for(const[E,z]of j[S].entries())z.group=a.sortable.group,z.index=E}),o.actions.setDropTarget(s.id).then(()=>o.collisionObserver.enable())})})}),e.monitor.addEventListener("dragend",(n,o)=>{if(!n.canceled)return;const{dragOperation:i}=o,{source:s}=i;pn(s)&&(s.sortable.initialIndex===s.sortable.index&&s.sortable.initialGroup===s.sortable.group||queueMicrotask(()=>{const a=t(),l=a.get(s.sortable.initialGroup);l&&o.renderer.rendering.then(()=>{for(const[h,v]of a.entries()){const m=Array.from(v).entries();for(const[y,x]of m)if(x.index!==y||x.group!==h)return}const c=vs(l),p=s.sortable.element,d=c[s.sortable.initialIndex],f=d==null?void 0:d.element;!d||!f||!p||(Df(p,d.index,f,s.index),Ae(()=>{for(const[h,v]of a.entries()){const m=Array.from(v).values();for(const y of m)y.index=y.initialIndex,y.group=y.initialGroup}}))})}))})];this.destroy=()=>{for(const n of r)n()}}};function Df(e,t,r,n){const o=n<t?"afterend":"beforebegin";r.insertAdjacentElement(o,e)}function vI(e,t){return e.index-t.index}function vs(e){return Array.from(e).sort(vI)}var Mf=[oI,hI],J_={duration:250,easing:"cubic-bezier(0.25, 1, 0.5, 1)",idle:!1},gs=new f2,Q_,ey,Rr,Rd,oi,ii,Td,Xn;ey=[pe],Q_=[pe];var Wa=class{constructor(e,t){Fo(this,Rd,fs(Rr,8,this)),fs(Rr,11,this),Fo(this,oi),Fo(this,ii),Fo(this,Td,fs(Rr,12,this)),fs(Rr,15,this),Fo(this,Xn),this.register=()=>(Ae(()=>{var f,h;(f=this.manager)==null||f.registry.register(this.droppable),(h=this.manager)==null||h.registry.register(this.draggable)}),()=>this.unregister()),this.unregister=()=>{Ae(()=>{var f,h;(f=this.manager)==null||f.registry.unregister(this.droppable),(h=this.manager)==null||h.registry.unregister(this.draggable)})},this.destroy=()=>{Ae(()=>{this.droppable.destroy(),this.draggable.destroy()})};var r=e,{effects:n=()=>[],group:o,index:i,sensors:s,type:a,transition:l=J_,plugins:c}=r,p=eI(r,["effects","group","index","sensors","type","transition","plugins"]);const d=Ft(c,Mf);this.droppable=new Ld(p,t,this),this.draggable=new ty(Pf(jf({},p),{plugins:d,effects:()=>[()=>{var f,h,v;const m=(f=this.manager)==null?void 0:f.dragOperation.status;m!=null&&m.initializing&&this.id===((v=(h=this.manager)==null?void 0:h.dragOperation.source)==null?void 0:v.id)&&gs.clear(this.manager),m!=null&&m.dragging&&gs.set(this.manager,this.id,de(()=>({initialIndex:this.index,initialGroup:this.group})))},()=>{const{index:f,group:h,manager:v}=this,m=ni(this,ii),y=ni(this,oi);(f!==m||h!==y)&&(ln(this,ii,f),ln(this,oi,h),this.animate())},()=>{var f,h;const{target:v}=this,{isDragSource:m}=this.draggable;((h=(f=this.draggable.pluginConfig(Wi))==null?void 0:f.feedback)!=null?h:"default")==="move"&&m&&(this.droppable.disabled=!v)},...n()],type:a,sensors:s}),t,this),ln(this,Xn,p.element),this.manager=t,this.index=i,ln(this,ii,i),this.group=o,ln(this,oi,o),this.type=a,this.transition=l}get initialIndex(){var e,t;return(t=(e=gs.get(this.manager,this.id))==null?void 0:e.initialIndex)!=null?t:this.index}get initialGroup(){var e,t;return(t=(e=gs.get(this.manager,this.id))==null?void 0:e.initialGroup)!=null?t:this.group}animate(){de(()=>{const{manager:e,transition:t}=this,{shape:r}=this.droppable;if(!e)return;const{idle:n}=e.dragOperation.status;!r||!t||n&&!t.idle||e.renderer.rendering.then(()=>{const{element:o}=this;if(!o)return;for(const p of o.getAnimations())"transitionProperty"in p&&(p.transitionProperty==="transform"||p.transitionProperty==="translate"||p.transitionProperty==="scale")&&p.cancel();const i=this.refreshShape();if(!i)return;const s={x:r.boundingRectangle.left-i.boundingRectangle.left,y:r.boundingRectangle.top-i.boundingRectangle.top},{translate:a}=Wt(o),l=_f(o,a,!1),c=_f(o,a);if(s.x||s.y){const p=vd(xt(o))?Pf(jf({},t),{duration:0}):t;Qm({element:o,keyframes:{translate:[`${l.x+s.x}px ${l.y+s.y}px ${l.z}`,`${c.x}px ${c.y}px ${c.z}`]},options:p}).then(()=>{e.dragOperation.status.dragging||(this.droppable.shape=void 0)})}})})}get manager(){return this.draggable.manager}set manager(e){Ae(()=>{this.draggable.manager=e,this.droppable.manager=e})}set element(e){Ae(()=>{const t=ni(this,Xn),r=this.droppable.element,n=this.draggable.element;(!r||r===t)&&(this.droppable.element=e),(!n||n===t)&&(this.draggable.element=e),ln(this,Xn,e)})}get element(){var e,t;const r=ni(this,Xn);if(r)return(t=(e=xc.get(r))!=null?e:r)!=null?t:this.droppable.element}set target(e){this.droppable.element=e}get target(){return this.droppable.element}set source(e){this.draggable.element=e}get source(){return this.draggable.element}get disabled(){return this.draggable.disabled&&this.droppable.disabled}set plugins(e){this.draggable.plugins=Ft(e,Mf)}set disabled(e){Ae(()=>{this.droppable.disabled=e,this.draggable.disabled=e})}set data(e){Ae(()=>{this.droppable.data=e,this.draggable.data=e})}set handle(e){this.draggable.handle=e}set id(e){this.droppable.id=e,this.draggable.id=e}get id(){return this.droppable.id}set sensors(e){this.draggable.sensors=e}set modifiers(e){this.draggable.modifiers=e}set collisionPriority(e){this.droppable.collisionPriority=e}set collisionDetector(e){this.droppable.collisionDetector=e??e_}set alignment(e){this.draggable.alignment=e}get alignment(){return this.draggable.alignment}set type(e){Ae(()=>{this.droppable.type=e,this.draggable.type=e})}get type(){return this.draggable.type}set accept(e){this.droppable.accept=e}get accept(){return this.droppable.accept}get isDropTarget(){return this.droppable.isDropTarget}get isDragSource(){return this.draggable.isDragSource}get isDragging(){return this.draggable.isDragging}get isDropping(){return this.draggable.isDropping}get status(){return this.draggable.status}refreshShape(){return this.droppable.refreshShape()}accepts(e){return this.droppable.accepts(e)}};Rr=tI();Rd=new WeakMap;oi=new WeakMap;ii=new WeakMap;Td=new WeakMap;Xn=new WeakMap;K_(Rr,4,"index",ey,Wa,Rd);K_(Rr,4,"group",Q_,Wa,Td);nI(Rr,Wa);var ty=class extends Vi{constructor(e,t,r){super(e,t),this.sortable=r}get index(){return this.sortable.index}get initialIndex(){return this.sortable.initialIndex}get group(){return this.sortable.group}get initialGroup(){return this.sortable.initialGroup}},Ld=class extends Ba{constructor(e,t,r){super(e,t),this.sortable=r}get index(){return this.sortable.index}get group(){return this.sortable.group}},gI=Object.defineProperty,mI=Object.defineProperties,_I=Object.getOwnPropertyDescriptors,Rf=Object.getOwnPropertySymbols,yI=Object.prototype.hasOwnProperty,bI=Object.prototype.propertyIsEnumerable,Tf=(e,t,r)=>t in e?gI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,xl=(e,t)=>{for(var r in t||(t={}))yI.call(t,r)&&Tf(e,r,t[r]);if(Rf)for(var r of Rf(t))bI.call(t,r)&&Tf(e,r,t[r]);return e},xI=(e,t)=>mI(e,_I(t));function Nd(e){const{accept:t,collisionDetector:r,collisionPriority:n,id:o,data:i,element:s,handle:a,index:l,group:c,disabled:p,modifiers:d,sensors:f,target:h,type:v,plugins:m}=e,y=xl(xl({},J_),e.transition),x=Od(b=>new Wa(xI(xl({},e),{transition:y,register:!1,handle:Br(a),element:Br(s),target:Br(h)}),b)),k=Ad(x,kI);return me(o,()=>x.id=o),Ao(()=>{Ae(()=>{x.group=c,x.index=l})},[x,c,l]),me(v,()=>x.type=v),me(t,()=>x.accept=t,void 0,Tt),me(i,()=>i&&(x.data=i)),me(l,()=>{var b;(b=x.manager)!=null&&b.dragOperation.status.idle&&(y!=null&&y.idle)&&x.refreshShape()},CC),oo(a,b=>x.handle=b),oo(s,b=>x.element=b),oo(h,b=>x.target=b),me(p,()=>x.disabled=p===!0),me(f,()=>x.sensors=f),me(r,()=>x.collisionDetector=r),me(n,()=>x.collisionPriority=n),me(m,()=>x.plugins=m,void 0,Tt),me(y,()=>x.transition=y,void 0,Tt),me(d,()=>x.modifiers=d,void 0,Tt),me(e.alignment,()=>x.alignment=e.alignment),{sortable:k,get isDragging(){return k.isDragging},get isDropping(){return k.isDropping},get isDragSource(){return k.isDragSource},get isDropTarget(){return k.isDropTarget},handleRef:g.useCallback(b=>{x.handle=b??void 0},[x]),ref:g.useCallback(b=>{var _,S;!b&&((_=x.element)!=null&&_.isConnected)&&!((S=x.manager)!=null&&S.dragOperation.status.idle)||(x.element=b??void 0)},[x]),sourceRef:g.useCallback(b=>{var _,S;!b&&((_=x.source)!=null&&_.isConnected)&&!((S=x.manager)!=null&&S.dragOperation.status.idle)||(x.source=b??void 0)},[x]),targetRef:g.useCallback(b=>{var _,S;!b&&((_=x.target)!=null&&_.isConnected)&&!((S=x.manager)!=null&&S.dragOperation.status.idle)||(x.target=b??void 0)},[x])}}function kI(e,t,r){return!!(e==="isDragSource"&&!r&&t)}function ry(e,t,r){var n=this,o=g.useRef(null),i=g.useRef(0),s=g.useRef(null),a=g.useRef([]),l=g.useRef(),c=g.useRef(),p=g.useRef(e),d=g.useRef(!0);g.useEffect(function(){p.current=e},[e]);var f=!t&&t!==0&&typeof window<"u";if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0;var h=!!(r=r||{}).leading,v=!("trailing"in r)||!!r.trailing,m="maxWait"in r,y=m?Math.max(+r.maxWait||0,t):null;g.useEffect(function(){return d.current=!0,function(){d.current=!1}},[]);var x=g.useMemo(function(){var k=function(C){var I=a.current,E=l.current;return a.current=l.current=null,i.current=C,c.current=p.current.apply(E,I)},b=function(C,I){f&&cancelAnimationFrame(s.current),s.current=f?requestAnimationFrame(C):setTimeout(C,I)},_=function(C){if(!d.current)return!1;var I=C-o.current;return!o.current||I>=t||I<0||m&&C-i.current>=y},S=function(C){return s.current=null,v&&a.current?k(C):(a.current=l.current=null,c.current)},w=function C(){var I=Date.now();if(_(I))return S(I);if(d.current){var E=t-(I-o.current),z=m?Math.min(E,y-(I-i.current)):E;b(C,z)}},j=function(){var C=Date.now(),I=_(C);if(a.current=[].slice.call(arguments),l.current=n,o.current=C,I){if(!s.current&&d.current)return i.current=o.current,b(w,t),h?k(o.current):c.current;if(m)return b(w,t),k(o.current)}return s.current||b(w,t),c.current};return j.cancel=function(){s.current&&(f?cancelAnimationFrame(s.current):clearTimeout(s.current)),i.current=0,a.current=o.current=l.current=s.current=null},j.isPending=function(){return!!s.current},j.flush=function(){return s.current?S(Date.now()):c.current},j},[h,m,t,y,v,f]);return x}function wI(e,t){return e===t}function Lf(e){return typeof e=="function"?function(){return e}:e}function BO(e,t,r){var n,o,i=r&&r.equalityFn||wI,s=(n=g.useState(Lf(e)),o=n[1],[n[0],g.useCallback(function(d){return o(Lf(d))},[])]),a=s[0],l=s[1],c=ry(g.useCallback(function(d){return l(d)},[l]),t,r),p=g.useRef(e);return i(p.current,e)||(c(e),p.current=e),[a,c]}function SI(e){return typeof e=="object"?e.key:e}function EI(e,t){const r=e.length;return new Proxy(e,{get(n,o,i){if(typeof o=="string"){const s=o.charCodeAt(0);if(s>=48&&s<=57){const a=+o;if(Number.isInteger(a)&&a>=0&&a<r){let l=n[a];if(typeof l!="object"){const c=t[a*2];l=n[a]={index:a,key:l,start:c,size:t[a*2+1],end:c+t[a*2+1],lane:0}}return l}}if(o==="length")return r}return Reflect.get(n,o,i)}})}function Bn(e,t,r){let n=r.initialDeps??[],o,i=!0;function s(){const a=e();return(a.length!==n.length||a.some((c,p)=>n[p]!==c))&&(n=a,o=t(...a),r!=null&&r.onChange&&!(i&&r.skipInitialOnChange)&&r.onChange(o),i=!1),o}return s.updateDeps=a=>{n=a},s}function Nf(e,t){if(e===void 0)throw new Error("Unexpected undefined");return e}const dn=(e,t)=>Math.abs(e-t)<1.01,CI=(e,t,r)=>{let n;return Object.assign(function(...o){e.clearTimeout(n),n=e.setTimeout(()=>t.apply(this,o),r)},{cancel:()=>{e.clearTimeout(n)}})};function II({offset:e,isScrolling:t,elementMax:r,holdOffset:n,scrollOffset:o,pendingWrite:i,clampedMaxAtWrite:s}){var a;return t&&i===null&&e===o?"spurious":i!==null&&Math.abs(e-i.target)<1.5?"readBack":i!==null&&!i.smooth&&r!==null&&i.target>r+n+.5&&Math.abs(e-(r+n))<1.5||i!==null&&!i.smooth&&((a=i.lowMaxes)!=null&&a.some(l=>Math.abs(e-l)<1.5))?"clampedReadBack":s!==null&&Math.abs(e-s)<1.5?"clampedEcho":"external"}const jI=e=>e==="smooth"||e==="smoothFinishing";function PI({kind:e,offset:t,command:r,target:n}){return e!=="spurious"&&e!=="readBack"&&e!=="clampedReadBack"&&(r==null?void 0:r.index)!=null&&r.phase!=="queued"&&!jI(r.phase)&&!dn(t,r.lastTargetOffset)&&!dn(t,n())&&e!=="clampedEcho"}const Bc=40;function AI(e){const t=e[e.length-1];if(t===void 0)return!1;let r=e.length-2;for(;r>=0&&t.t-e[r].t<Bc;)r--;if(r<0)return!1;const n=e[r];let o=r-1;for(;o>=0&&n.t-e[o].t<Bc;)o--;if(o<0)return!1;const i=e[o],s=(t.offset-n.offset)/(t.t-n.t),a=(n.offset-i.offset)/(n.t-i.t);return s*a>=0&&Math.abs(s)>=2*Math.abs(a)&&Math.abs(s)-Math.abs(a)>=.8}function zI(e){const t=e[e.length-1];if(t===void 0)return!1;let r=e.length-2;for(;r>=0&&t.t-e[r].t<Bc;)r--;if(r<0)return!1;const n=e[r];return Math.abs(t.offset-n.offset)/(t.t-n.t)>=.05}let Bo;const pa=()=>{if(Bo!==void 0)return Bo;if(typeof navigator>"u")return Bo=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return Bo=!0;const e=navigator.maxTouchPoints;return Bo=navigator.platform==="MacIntel"&&e!==void 0&&e>0};let kl;const OI=()=>kl!==void 0?kl:kl=pa()&&typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("overflow-anchor: auto"),$n={capture:!0,passive:!0};class DI{constructor(t){this.host=t,this._touch=null,this.inMotion=()=>this._touch!==null&&this._touch.phase!=="lateFling",this.dragging=()=>{var r;return((r=this._touch)==null?void 0:r.phase)==="down"&&this._touch.moved},this.tail=()=>{var r;return((r=this._touch)==null?void 0:r.phase)==="tail"?this._touch.moved?"fling":"tap":null},this.onScroll=({isScrolling:r,ownReadBack:n,moved:o,external:i})=>{var s,a,l;return r&&((s=this._touch)==null?void 0:s.phase)==="tail"?this._openTail(this._touch.moved||!n,!1):((a=this._touch)==null?void 0:a.phase)==="lateFling"&&(this.host.now()>this._touch.until?this._touch=null:i&&r&&o&&this._openTail(!0,!1)),!n&&r&&o&&((l=this._touch)==null?void 0:l.phase)==="down"?(this._touch.moved=!0,!0):!1},this.touchStart=()=>{this.end(),this._touch={phase:"down",moved:!1}},this.touchEnd=()=>{var r;const n=((r=this._touch)==null?void 0:r.phase)==="down"&&this._touch.moved;this.end(),this._openTail(n,n)},this.end=()=>{var r;const n=this.host.getWindow();((r=this._touch)==null?void 0:r.phase)==="tail"&&n!=null&&n.clearTimeout(this._touch.timerId),this._touch=null},this.listen=r=>{const n=()=>this.touchStart(),o=()=>this.touchEnd();return r.addEventListener("touchstart",n,$n),r.addEventListener("touchend",o,$n),r.addEventListener("touchcancel",o,$n),()=>{r.removeEventListener("touchstart",n,$n),r.removeEventListener("touchend",o,$n),r.removeEventListener("touchcancel",o,$n),this.end()}},this._openTail=(r,n)=>{const o=this.host.getWindow();if(!pa()||o==null)return;this.end();const i={phase:"tail",moved:r,awaitingFling:n,timerId:o.setTimeout(()=>{if(this.host.tailStillMoving()){this._openTail(i.moved,i.awaitingFling);return}this._touch=i.awaitingFling?{phase:"lateFling",until:this.host.now()+1e3}:null,this.host.onTailClosed()},150)};this._touch=i}}get touch(){return this._touch}}const Ff=e=>{const{clientWidth:t,clientHeight:r}=e;return{width:t,height:r}},ny=e=>{const t=new Set;return{schedule:r=>{const n=e.requestAnimationFrame(()=>{t.delete(n),r()});t.add(n)},cancel:()=>{t.forEach(r=>e.cancelAnimationFrame(r)),t.clear()}}},MI=e=>e,Fd=e=>{const t=e.overscan*Math.max(e.lanes??1,1),r=Math.max(e.startIndex-t,0),o=Math.min(e.endIndex+t,e.count-1)-r+1,i=new Array(o);for(let s=0;s<o;s++)i[s]=r+s;return i},oy=(e,t)=>{const r=e.scrollElement;if(!r)return;const n=e.targetWindow;if(!n)return;const o=a=>{const{width:l,height:c}=a;t({width:Math.round(l),height:Math.round(c)})};if(o(Ff(r)),!n.ResizeObserver)return()=>{};const i=ny(n),s=new n.ResizeObserver(()=>{const a=()=>{o(Ff(r))};e.options.useAnimationFrameWithResizeObserver?i.schedule(a):a()});return s.observe(r,{box:"content-box"}),()=>{s.unobserve(r),i.cancel()}},$c={passive:!0},RI=(e,t)=>{const r=e.scrollElement;if(!r)return;const n=()=>{t({width:r.innerWidth,height:r.innerHeight})};return n(),r.addEventListener("resize",n,$c),()=>{r.removeEventListener("resize",n)}},TI=typeof window>"u"?!0:"onscrollend"in window,iy=(e,t,r)=>{const n=e.scrollElement;if(!n)return;const o=e.targetWindow;if(!o)return;const i=e.options.useScrollendEvent&&TI;let s=0;const a=i?null:CI(o,()=>t(r(n),!1),e.options.isScrollingResetDelay),l=d=>()=>{s=r(n),a==null||a(),t(s,d)},c=l(!0),p=l(!1);return n.addEventListener("scroll",c,$c),i&&n.addEventListener("scrollend",p,$c),()=>{n.removeEventListener("scroll",c),i&&n.removeEventListener("scrollend",p),a==null||a.cancel()}},sy=(e,t)=>iy(e,t,r=>{const{horizontal:n,isRtl:o}=e.options;return n?r.scrollLeft*(o&&-1||1):r.scrollTop}),LI=(e,t)=>iy(e,t,r=>e.options.horizontal?r.scrollX:r.scrollY),NI=(e,t,r)=>{if(r.options.useCachedMeasurements){const n=r.indexFromElement(e),o=r.options.getItemKey(n);return r.itemSizeCache.get(o)??r.options.estimateSize(n)}if(t!=null&&t.borderBoxSize){const n=t.borderBoxSize[0];if(n)return Math.round(n[r.options.horizontal?"inlineSize":"blockSize"])}if(!t){const n=r.indexFromElement(e),o=r.options.getItemKey(n),i=r.itemSizeCache.get(o);if(i!==void 0)return i}return e[r.options.horizontal?"offsetWidth":"offsetHeight"]},ay=(e,{adjustments:t=0,behavior:r},n)=>{var o,i;(i=(o=n.scrollElement)==null?void 0:o.scrollTo)==null||i.call(o,{[n.options.horizontal?"left":"top"]:e+t,behavior:r})},FI=ay,ly=ay,Bf=(e,t)=>e==="smooth"?t?"smoothLanded":"smooth":"instant",$o=e=>(e==null?void 0:e.phase)==="smooth"||(e==null?void 0:e.phase)==="smoothLanded";function BI(e,t,r,n){if(t===0)return!1;const o=n(0),i=new Set;let s=0;for(;s<e;){const l=r(s);if(l===o)break;i.add(l),s++}const a=e-s;if(a===0||a>=t)return!1;for(let l=0;l<a;l++)if(n(l)!==r(s+l))return!1;for(let l=a;l<t;l++)if(i.has(n(l)))return!1;return!0}class $I{constructor(t){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this._holdOffset=0,this._reportedOverscroll=!1,this._iosGesture=new DI({getWindow:()=>this.targetWindow,now:()=>this.now(),tailStillMoving:()=>{const r=this.scrollState;if((r==null?void 0:r.phase)!=="queued"||this.pendingWrite!==null)return!1;const n=this._readElementOffset();return n===null||this._lastElementOffset===null||Math.abs(n-this._lastElementOffset)<1?!1:(this._lastElementOffset=n,r.samples=[...r.samples??[],{t:this.now(),offset:n}],!0)},onTailClosed:()=>{const r=this.scrollState;(r==null?void 0:r.phase)==="queued"&&zI(r.samples??[])&&(this.scrollState=null),this._flushHoldIfReady(!0),this._writeAwaitingCommand(),this._retryClampedAdjustment()}}),this._lastElementOffset=null,this.pendingWrite=null,this._clampedAdjustment=null,this.elementsCache=new Map,this._resizeBatch=null,this.now=()=>{var r,n,o;return((o=(n=(r=this.targetWindow)==null?void 0:r.performance)==null?void 0:n.now)==null?void 0:o.call(n))??Date.now()},this.observer=(()=>{let r=null,n=null;const o=()=>{if(r)return r;const s=this.targetWindow;if(!s||!s.ResizeObserver)return null;const a=n=ny(s);return r=new s.ResizeObserver(l=>{const c=()=>{const p={sync:!1};this._resizeBatch=p;try{l.forEach(i)}finally{this._resizeBatch=null,p.notify&&(this.notify(p.sync),this._noteClampMax(),this._flushHoldIfReady(!0),this._retryClampedAdjustment())}};this.options.useAnimationFrameWithResizeObserver?a.schedule(c):c()})},i=s=>{const a=s.target,l=this.indexFromElement(a);if(!a.isConnected){this.observer.unobserve(a);for(const[c,p]of this.elementsCache)if(p===a){this.elementsCache.delete(c);break}return}this.isIndexInRange(l)&&this.shouldMeasureDuringScroll(l)&&this.resizeItem(l,this.options.measureElement(a,s,this))};return{disconnect:()=>{var s;(s=o())==null||s.disconnect(),n==null||n.cancel(),r=null,n=null},observe:s=>{var a;return(a=o())==null?void 0:a.observe(s,{box:"border-box"})},unobserve:s=>{var a;return(a=o())==null?void 0:a.unobserve(s)}}})(),this.range=null,this.setOptions=r=>{var n;const o={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:MI,rangeExtractor:Fd,onChange:()=>{},measureElement:NI,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(const p in r){const d=r[p];d!==void 0&&(o[p]=d)}const i=this.options;let s=null,a=null,l=!1;if(i!==void 0&&i.enabled&&o.enabled&&o.anchorTo==="end"&&this.scrollElement!==null){const p=i.count,d=o.count,f=this.getMeasurements(),h=((n=this._singleLaneMeasurements)==null?void 0:n.items)??f,v=b=>SI(h[b]),m=p>0?v(0):null,y=p>0?v(p-1):null;if(d!==p||p>0&&d>0&&(o.getItemKey(0)!==m||o.getItemKey(d-1)!==y)){l=!0;const b=p>0?this.getVirtualItemForOffset(this.getScrollOffset())??f[0]:null;b&&(s=[b.key,this.getScrollOffset()-b.start]);const _=o.followOnAppend===!0?"auto":o.followOnAppend||null;_&&d>0&&this.isAtEnd(i.scrollEndThreshold)&&(p===0||o.getItemKey(d-1)!==y)&&(d>p||BI(p,d,v,o.getItemKey))&&(a=_)}}this.options=o,l&&(this.pendingMin=0,this.itemSizeCacheVersion++);let c=null;if(s&&this.scrollOffset!==null&&!this._awaitingCommandReadBack()){const[p,d]=s,f=this.getMeasurements(),{count:h,getItemKey:v}=this.options;let m=0;for(;m<h&&v(m)!==p;)m++;if(m<h){const y=f[m];if(y){const x=Math.max(0,y.start+d);!a&&x!==this.scrollOffset&&(c=x-this.scrollOffset,this.scrollOffset=x)}}}a?this.pendingScrollAnchor={kind:"follow",behavior:a}:c!==null&&(this._canWriteScroll()?this.pendingScrollAnchor={kind:"anchor",delta:c}:(this._holdOffset+=c,this._followOffsetTarget(c)))},this.notify=r=>{var n,o;(o=(n=this.options).onChange)==null||o.call(n,this,r)},this.maybeNotify=Bn(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),r=>{this.notify(r)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{var r;this.unsubs.filter(Boolean).forEach(n=>n()),this.unsubs=[],this.observer.disconnect(),this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,(r=this._momentumStop)==null||r.restore(),this._momentumStop=null,this.isScrolling=!1,this.scrollDirection=null,this._holdOffset=0,this._reportedOverscroll=!1,this._clampedAdjustment=null,this.pendingWrite=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var r;const n=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==n){if(this.cleanup(),!n){this.maybeNotify();return}this.scrollElement=n,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((r=this.scrollElement)==null?void 0:r.window)??null,this.elementsCache.forEach(i=>{this.observer.observe(i)}),this.unsubs.push(this.options.observeElementRect(this,i=>{this.scrollRect=i,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(i,s)=>{var a,l,c,p;const d=s?this._elementMaxScrollOffset():null,f=this._reportedOverscroll;this._reportedOverscroll=i<0||d!==null&&i>d+1;const h=i;this._lastElementOffset=h,i=this._toLayoutOffset(i);const v=this._classifyScrollEvent(i,s,d);if(v==="spurious")return;v==="readBack"?i=this.pendingWrite.target:v==="clampedReadBack"&&((a=this.scrollState)==null?void 0:a.index)!=null&&i<this.getMaxScrollOffset()-1.5?this.scrollState.lastTargetOffset=i:PI({kind:v,offset:i,command:this.scrollState,target:()=>this.getScrollStateTarget(this.scrollState)})&&(this.scrollState=null),this.pendingWrite=null,this._clampedAdjustment!==null&&Math.abs(i-this._clampedAdjustment.maxAtWrite)>=1.5&&(this._clampedAdjustment=null);const m=this.getScrollOffset(),y=this.scrollDirection;this.scrollDirection=s?m===i?this.scrollDirection:m<i?"forward":"backward":null,this.scrollOffset=i,this.isScrolling=s;const x=this.scrollState;if((x==null?void 0:x.phase)==="queued"&&v==="external"&&s)if(f||this._reportedOverscroll)x.samples=[];else{const k=this.now();x.samples=[...(x.samples??[]).filter(b=>k-b.t<=200),{t:k,offset:h}],(y!==null&&this.scrollDirection!==y||AI(x.samples))&&(this.scrollState=null)}this._iosGesture.onScroll({isScrolling:s,ownReadBack:v==="readBack",moved:i!==m,external:v==="external"&&((l=this.scrollState)==null?void 0:l.phase)!=="smooth"&&((c=this.scrollState)==null?void 0:c.phase)!=="smoothFinishing"})&&((p=this.scrollState)==null?void 0:p.phase)==="queued"&&(this.scrollState=null),this._flushHoldIfReady(!0),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement&&this.unsubs.push(this._iosGesture.listen(this.scrollElement)),this._scrollToOffset(this.getScrollOffset())}this._noteClampMax();const o=this.pendingScrollAnchor;this.pendingScrollAnchor=null,o&&this.scrollElement&&this.options.enabled&&(o.kind==="anchor"?this._canWriteScroll()?$o(this.scrollState)&&!dn(this.getScrollOffset()-o.delta,this.scrollState.lastTargetOffset)||(this._followOffsetTarget(o.delta),this._scrollToOffset(this.getScrollOffset())):(this._holdOffset+=o.delta,this._followOffsetTarget(o.delta),this.notify(!1)):this.scrollToEnd({behavior:o.behavior})),this._flushHoldIfReady(!1),this._retryClampedAdjustment()},this._classifyScrollEvent=(r,n,o)=>{var i;return II({offset:r,isScrolling:n,elementMax:o,holdOffset:this._holdOffset,scrollOffset:this.scrollOffset,pendingWrite:this.pendingWrite,clampedMaxAtWrite:((i=this._clampedAdjustment)==null?void 0:i.maxAtWrite)??null})},this._retryClampedAdjustment=()=>{if(this._clampedAdjustment===null||!this.scrollElement||!this.options.enabled||!this._canWriteScroll())return;const{target:r,maxAtWrite:n}=this._clampedAdjustment,o=this.getMaxScrollOffset();o>n+.5&&(this._clampedAdjustment=r>o+.5?{target:r,maxAtWrite:o}:null,this._scrollToOffset(r))},this._writeAwaitingCommand=()=>{const r=this.scrollState;if(r===null||r.phase!=="queued")return;const{behavior:n}=r;this.getMeasurements();const o=this.getScrollStateTarget(r);r.lastTargetOffset=o,this._clampedAdjustment=null,r.phase=Bf(n,r.index!=null&&dn(o,this.getScrollOffset())),this._scrollToOffset(o,{behavior:n}),this.scheduleScrollReconcile()},this._readElementOffset=()=>{const r=this.scrollElement;if(r==null)return null;const{horizontal:n,isRtl:o}=this.options;return typeof r.scrollTop=="number"?n?r.scrollLeft*(o&&-1||1):r.scrollTop:typeof r.scrollY=="number"?n?r.scrollX:r.scrollY:null},this._canWriteScroll=()=>!(pa()&&this._iosGesture.inMotion())&&!this._reportedOverscroll,this._flushHoldIfReady=r=>{var n;if(this._holdOffset===0||!this.scrollElement||!this.options.enabled||!this._canWriteScroll()||((n=this.scrollState)==null?void 0:n.phase)==="smooth")return;this._holdOffset=0,this.scrollOffset!==null&&this.scrollOffset<0&&(this.scrollOffset=0),this.notify(r);const o=this.getCommandWrittenOffset()??this.getScrollOffset();this._clampedAdjustment=this._clampedBy(o),this._scrollToOffset(o)},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getMeasurementOptions=Bn(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode,this.options.gap],(r,n,o,i,s,a,l,c)=>(this.prevLanes!==void 0&&this.prevLanes!==a&&(this.lanesChangedFlag=!0),this.prevLanes=a,this.pendingMin=null,{count:r,paddingStart:n,scrollMargin:o,getItemKey:i,enabled:s,lanes:a,laneAssignmentMode:l,gap:c}),{key:!1}),this.isIndexInRange=r=>r>=0&&r<this.options.count,this.getMeasurements=Bn(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:r,paddingStart:n,scrollMargin:o,getItemKey:i,enabled:s,lanes:a,laneAssignmentMode:l,gap:c},p)=>{var d;const f=this.itemSizeCache;if(!s)return this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>r)for(const k of this.laneAssignments.keys())k>=r&&this.laneAssignments.delete(k);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),this.measurementsCache.length===0&&!this.lanesSettling&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(k=>{this.itemSizeCache.set(k.key,k.size)}));const h=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===r&&(this.lanesSettling=!1),a===1){const k=r*2;let b=(d=this._singleLaneMeasurements)==null?void 0:d.flat;if(!b||b.length<k){const j=new Float64Array(k);b&&h>0&&j.set(b.subarray(0,h*2)),b=j}const _=h===0?new Array(r):this._singleLaneMeasurements.items.slice();let S;if(h===0)S=n+o;else{const j=h-1;S=b[j*2]+b[j*2+1]+c}for(let j=h;j<r;j++){const C=i(j);_[j]=C;const I=f.get(C),E=typeof I=="number"?I:this.options.estimateSize(j);b[j*2]=S,b[j*2+1]=E,S+=E+c}this._singleLaneMeasurements={flat:b,items:_};const w=EI(_,b);return this.measurementsCache=w,w}const v=this.measurementsCache.slice(0,h),m=new Array(a).fill(void 0),y=new Float64Array(a);let x=0;for(let k=0;k<h;k++){const b=v[k];b&&(m[b.lane]===void 0&&x++,m[b.lane]=k,y[b.lane]=b.end)}for(let k=h;k<r;k++){const b=i(k),_=this.laneAssignments.get(k);let S,w;const j=l==="estimate"||f.has(b);if(_!==void 0&&this.options.lanes>1){S=_;const z=m[S],O=z!==void 0?v[z]:void 0;w=O?O.end+c:n+o}else if(x===a){let z=0,O=y[0],L=m[0];for(let B=1;B<a;B++){const N=y[B];(N<O||N===O&&m[B]<L)&&(z=B,O=N,L=m[B])}S=z,w=O+c,j&&this.laneAssignments.set(k,S)}else S=k%this.options.lanes,w=n+o,j&&this.laneAssignments.set(k,S);const C=f.get(b),I=typeof C=="number"?C:this.options.estimateSize(k),E=w+I;v[k]={index:k,start:w,size:I,end:E,key:b,lane:S},m[S]===void 0&&x++,m[S]=k,y[S]=E}return this.measurementsCache=v,v},{key:!1,debug:()=>this.options.debug}),this.calculateRange=Bn(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(r,n,o,i)=>r.length===0||n===0?(this.range=null,null):(this.range=HI(r,n,o,i,i===1&&this._singleLaneMeasurements!==null?this._singleLaneMeasurements.flat:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=Bn(()=>{let r=null,n=null;const o=this.calculateRange();return o&&(r=o.startIndex,n=o.endIndex),this.maybeNotify.updateDeps([this.isScrolling,r,n]),[this.options.rangeExtractor,this.options.overscan,this.options.count,r,n,this.options.lanes]},(r,n,o,i,s,a)=>i===null||s===null?[]:r({startIndex:i,endIndex:s,overscan:n,count:o,lanes:a}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=r=>{const n=this.options.indexAttribute,o=r.getAttribute(n);return o?parseInt(o,10):(console.warn(`Missing attribute name '${n}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=r=>{var n;if(!$o(this.scrollState))return!0;const o=this.scrollState.index??((n=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))==null?void 0:n.index);if(o!==void 0&&this.range){const i=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),s=Math.max(0,o-i),a=Math.min(this.options.count-1,o+i);return r>=s&&r<=a}return!0},this.measureElement=r=>{if(!r){this.elementsCache.forEach((s,a)=>{s.isConnected||(this.observer.unobserve(s),this.elementsCache.delete(a))});return}const n=this.indexFromElement(r);if(!this.isIndexInRange(n))return;const o=this.options.getItemKey(n),i=this.elementsCache.get(o);i!==r&&(i&&this.observer.unobserve(i),this.observer.observe(r),this.elementsCache.set(o,r)),r.isConnected&&(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(r,void 0,this))},this.resizeItem=(r,n)=>{var o,i,s;if(!this.isIndexInRange(r))return;(o=this._resizeBatch)!=null&&o.sync&&this.getMeasurements();let a,l,c;const p=(i=this._singleLaneMeasurements)==null?void 0:i.flat;if(this.options.lanes===1&&p!=null)c=this.options.getItemKey(r),l=p[r*2],a=p[r*2+1];else{const h=this.measurementsCache[r];if(!h)return;c=h.key,l=h.start,a=h.size}const d=this.itemSizeCache.get(c)??a,f=n-d;if(f!==0){const h=this.options.anchorTo==="end"&&!$o(this.scrollState)&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,v=h?this._getLayoutTotalSize():0,m=this.getScrollOffset(),x=!this.itemSizeCache.has(c)?l<m:l+d<=m&&this.scrollDirection!=="backward",k=!$o(this.scrollState)&&(this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[r]??{index:r,key:c,start:l,size:a,end:l+a,lane:0},f,this):x);(this.pendingMin===null||r<this.pendingMin)&&(this.pendingMin=r),this.itemSizeCache.set(c,n),this.itemSizeCacheVersion++;let b=!1;if(this._awaitingCommandReadBack()||(h?b=this.applyScrollAdjustment(this._getLayoutTotalSize()-v):k&&(b=this.applyScrollAdjustment(f))),this._resizeBatch){this._resizeBatch.notify=!0,(s=this._resizeBatch).sync||(s.sync=b);return}this.notify(b),this._noteClampMax(),this._flushHoldIfReady(!0),this._retryClampedAdjustment()}},this.getVirtualItems=Bn(()=>[this.getVirtualIndexes(),this.getMeasurements(),this._holdOffset],(r,n,o)=>{const i=[];for(let s=0,a=r.length;s<a;s++){const l=r[s],c=n[l];i.push(o===0?c:{...c,start:c.start-o,end:c.end-o})}return i},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=r=>{var n;const o=this.getMeasurements();if(o.length===0)return;const i=(n=this._singleLaneMeasurements)==null?void 0:n.flat,s=this.options.lanes===1&&i!=null,a=cy(0,o.length-1,s?l=>i[l*2]:l=>Nf(o[l]).start,r);return Nf(o[a])},this._noteClampMax=()=>{if(!this._awaitingCommandReadBack())return;const r=this._elementMaxScrollOffset();if(r===null)return;const n=this.pendingWrite,o=Math.max(r,0)+this._holdOffset;if(o>=n.target)return;const i=n.lowMaxes??(n.lowMaxes=[]);i[i.length-1]!==o&&i.push(o)},this.getMaxScrollOffset=()=>(this._elementMaxScrollOffset()??0)+this._holdOffset,this._toLayoutOffset=r=>{var n;let o=r+this._holdOffset;return((n=this.pendingScrollAnchor)==null?void 0:n.kind)==="anchor"&&(o+=this.pendingScrollAnchor.delta),o},this._elementMaxScrollOffset=()=>{const r=this.scrollElement;if(r===null)return null;if("scrollHeight"in r)return this.options.horizontal?r.scrollWidth-r.clientWidth:r.scrollHeight-r.clientHeight;if("document"in r){const n=r.document.documentElement;return this.options.horizontal?n.scrollWidth-r.innerWidth:n.scrollHeight-r.innerHeight}return null},this._momentumStop=null,this._stopMomentum=r=>{const n=this.scrollElement,o=this.targetWindow;if(n===null||o===null)return;const i="document"in n?n.document.scrollingElement:n;if(!(i!=null&&i.style))return;if(this._momentumStop){this._momentumStop.done=r;return}const{style:s}=i,a=this.options.horizontal?"overflow-x":"overflow-y",l=s.getPropertyValue(a),c=s.getPropertyPriority(a);s.setProperty(a,"hidden","important");const p={restore:()=>s.getPropertyValue(a)!=="hidden"||s.getPropertyPriority(a)!=="important"?!1:(s.setProperty(a,l,c),!0),done:r};this._momentumStop=p,o.requestAnimationFrame(()=>o.requestAnimationFrame(()=>{this._momentumStop===p&&(this._momentumStop=null,p.restore()&&p.done())}))},this._clampedBy=r=>{const n=this._elementMaxScrollOffset();if(n===null)return null;const o=n+this._holdOffset;return r>o+.5?{target:r,maxAtWrite:o}:null},this.getVirtualDistanceFromEnd=()=>Math.max(this._getLayoutTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(r=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=r,this.getOffsetForAlignment=(r,n,o=0)=>{if(!this.scrollElement)return 0;const i=this.getSize(),s=this.getScrollOffset();n==="auto"&&(n=r>=s+i?"end":"start"),n==="center"?r+=(o-i)/2:n==="end"&&(r-=i);const a=this.getMaxScrollOffset();return Math.max(Math.min(a,r),0)},this.getOffsetForIndex=(r,n="auto")=>{r=Math.max(0,Math.min(r,this.options.count-1));const o=this.getSize(),i=this.getScrollOffset(),s=this.measurementsCache[r];if(!s)return;if(n==="auto")if(s.end>=i+o-this.options.scrollPaddingEnd)n="end";else if(s.start<=i+this.options.scrollPaddingStart)n="start";else return[i,n];if(n==="end"&&r===this.options.count-1){const l=this.getMaxScrollOffset(),c=l-this.options.paddingEnd+this.options.scrollPaddingEnd;return[Math.max(Math.min(c,l),0),n]}const a=n==="end"?s.end+this.options.scrollPaddingEnd:s.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,n,s.size),n]},this.scrollToOffset=(r,{align:n="start",behavior:o="auto"}={})=>{this._startScroll({index:null,align:n},this.getOffsetForAlignment(r,n),o,"absolute")},this.scrollToIndex=(r,{align:n="auto",behavior:o="auto"}={})=>{r=Math.max(0,Math.min(r,this.options.count-1));const i=this.getOffsetForIndex(r,n);if(!i)return;const[s,a]=i;this._startScroll({index:r,align:a},s,o,"absolute")},this.scrollBy=(r,{behavior:n="auto"}={})=>{const o=this.getOffsetForAlignment((this.getCommandWrittenOffset()??this.getScrollOffset())+r,"start");this._startScroll({index:null,align:"start"},o,n,"relative")},this.scrollToEnd=({behavior:r="auto"}={})=>{if(this.options.count>0){this._startScroll({index:this.options.count-1,align:"end",toEnd:!0},Math.max(this.getMaxScrollOffset(),0),r,"absolute");return}this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:r})},this.cancelScroll=()=>{this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null},this.getTotalSize=()=>Math.max(this._getLayoutTotalSize()-this._holdOffset,0),this._getLayoutTotalSize=()=>{var r,n;const o=this.getMeasurements();let i;if(o.length===0)i=this.options.paddingStart;else if(this.options.lanes===1){const s=o.length-1,a=(r=this._singleLaneMeasurements)==null?void 0:r.flat;a!=null?i=a[s*2]+a[s*2+1]:i=((n=o[s])==null?void 0:n.end)??0}else{const s=Array(this.options.lanes).fill(null);let a=o.length-1;for(;a>=0&&s.some(l=>l===null);){const l=o[a];s[l.lane]===null&&(s[l.lane]=l.end),a--}i=Math.max(...s.filter(l=>l!==null))}return Math.max(i-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{const r=[];if(this.itemSizeCache.size===0)return r;const n=this.getMeasurements();for(const o of n)o&&this.itemSizeCache.has(o.key)&&r.push({index:o.index,key:o.key,start:o.start,size:o.size,end:o.end,lane:o.lane});return r},this._scrollToOffset=(r,{adjustments:n,behavior:o}={})=>{const i={target:r+(n??0),smooth:o==="smooth"};return this.pendingWrite=i,this.options.scrollToFn(r-this._holdOffset,{behavior:o,adjustments:n},this),i},this.getCommandWrittenOffset=()=>this.scrollState!==null&&this.pendingWrite!==null&&!this.pendingWrite.smooth?this.pendingWrite.target:null,this._awaitingCommandReadBack=()=>{const r=this.getCommandWrittenOffset();return!(pa()&&this._iosGesture.dragging())&&r!==null&&!dn(r,this.getScrollOffset())},this._followOffsetTarget=r=>{this.scrollState!==null&&this.scrollState.index==null&&(this.scrollState.lastTargetOffset+=r)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(t)}get scrollAdjustments(){return 0}applyScrollAdjustment(t,r){if(t===0)return!1;if(this._followOffsetTarget(t),this._canWriteScroll()){const n=this.getScrollOffset();this._clampedAdjustment=this._clampedBy(n+t);const o=this._scrollToOffset(n,{adjustments:t,behavior:r});return this.scrollOffset!==null&&(this.pendingWrite===o&&(this.scrollOffset+=t),this.scrollOffset<0&&(this.scrollOffset=0)),!0}else return this._holdOffset+=t,this.scrollOffset!==null&&(this.scrollOffset+=t),!0}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}this.rafId==null&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}getScrollStateTarget(t){const r=t.toEnd?[Math.max(this.getMaxScrollOffset(),0)]:t.index!=null?this.getOffsetForIndex(t.index,t.align):void 0;return r?r[0]:t.lastTargetOffset}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}if(this.scrollState.phase==="queued"){this.scheduleScrollReconcile();return}this.getMeasurements();const n=this.getScrollStateTarget(this.scrollState),o=this.scrollState.index==null?1:this.options.useAnimationFrameWithResizeObserver?3:2,i=n!==this.scrollState.lastTargetOffset;if(!i&&dn(n,this.getScrollOffset())){if(this.scrollState.phase==="smooth"?this.scrollState.phase="smoothLanded":this.scrollState.phase==="smoothFinishing"&&(this.scrollState.phase="instant"),this.scrollState.stableFrames++,this.scrollState.stableFrames>=o){this.getScrollOffset()!==n&&this._scrollToOffset(n,{behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,i){const s=this.getSize()||600,a=Math.abs(n-this.getScrollOffset()),l=$o(this.scrollState)&&a>s;this.scrollState.lastTargetOffset=n,l?this.scrollState.phase="smooth":this.scrollState.phase==="smooth"?this.scrollState.phase="smoothFinishing":this.scrollState.phase==="smoothLanded"&&(this.scrollState.phase="instant"),this._scrollToOffset(n,{behavior:l?"smooth":"auto"})}this.scheduleScrollReconcile()}_startScroll(t,r,n,o){this.pendingScrollAnchor=null,this._clampedAdjustment=null;const i=this._iosGesture.tail();if(o==="absolute"&&i!==null){if(i==="fling"&&OI()){this._stopMomentum(()=>{const s=this.scrollState;(s==null?void 0:s.phase)!=="queued"||this._iosGesture.tail()!=="fling"||this._reportedOverscroll||(this._iosGesture.end(),this._flushHoldIfReady(!0),this._writeAwaitingCommand())}),this.scrollState={...t,startedAt:this.now(),lastTargetOffset:r,stableFrames:0,phase:"queued",behavior:n,samples:[]},this.scheduleScrollReconcile();return}this._iosGesture.end()}this.scrollState={...t,startedAt:this.now(),lastTargetOffset:r,stableFrames:0,behavior:n,phase:Bf(n,t.index!=null&&dn(r,this.getScrollOffset()))},this._scrollToOffset(r,{behavior:n}),this.scheduleScrollReconcile()}}const cy=(e,t,r,n)=>{for(;e<=t;){const o=(e+t)/2|0,i=r(o);if(i<n)e=o+1;else if(i>n)t=o-1;else return o}return e>0?e-1:0};function WI(e,t,r){let n=0;for(;n<=t;){const o=(n+t)/2|0,i=e[o*2];if(i<r)n=o+1;else if(i>r)t=o-1;else return o}return n>0?n-1:0}function HI(e,t,r,n,o){const i=e.length-1;if(e.length<=n)return{startIndex:0,endIndex:i};if(n===1&&o!==null){const c=WI(o,i,r);let p=c;const d=r+t;for(;p<i&&o[p*2]+o[p*2+1]<d;)p++;return{startIndex:c,endIndex:p}}let a=cy(0,i,c=>e[c].start,r),l=a;if(n===1)for(;l<i&&e[l].end<r+t;)l++;else if(n>1){const c=Array(n).fill(0);for(;l<i&&c.some(d=>d<r+t);){const d=e[l];c[d.lane]=d.end,l++}const p=Array(n).fill(r+t);for(;a>=0&&p.some(d=>d>=r);){const d=e[a];p[d.lane]=d.start,a--}a=Math.max(0,a-a%n),l=Math.min(i,l+(n-1-l%n))}return{startIndex:a,endIndex:l}}const wl=typeof document<"u"?g.useLayoutEffect:g.useEffect;function VI({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:r="transform",...n}){const o=g.useReducer(f=>f+1,0)[1],i=g.useRef({enabled:t,mode:r,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});i.current.enabled=t,i.current.mode=r;const s=g.useRef(!1),a=f=>{const h=i.current;if(!h.enabled||!h.container)return;const v=f.getTotalSize();if(v!==h.lastSize){h.lastSize=v;const m=f.options.horizontal?"width":"height";h.container.style[m]=`${v}px`}},l=(f,h,v)=>{const m=i.current,y=!!f.options.horizontal,x=h.start-f.options.scrollMargin;m.lastPositions.get(v)!==x&&(m.lastPositions.set(v,x),m.mode==="transform"?v.style.transform=y?`translate3d(${x}px, 0, 0)`:`translate3d(0, ${x}px, 0)`:v.style[y?"left":"top"]=`${x}px`)},c=f=>{const h=i.current;if(!(!h.enabled||!h.container)){a(f);for(const v of f.getVirtualItems()){const m=f.elementsCache.get(v.key);m&&l(f,v,m)}}},p={...n,onChange:(f,h)=>{var v;const m=i.current;let y=!0;if(m.enabled){c(f);const x=f.range,k=m.prevRange;y=!k||k.isScrolling!==f.isScrolling||k.startIndex!==(x==null?void 0:x.startIndex)||k.endIndex!==(x==null?void 0:x.endIndex),y&&(m.prevRange=x?{startIndex:x.startIndex,endIndex:x.endIndex,isScrolling:f.isScrolling}:null)}y&&(e&&h&&!s.current?Ur.flushSync(o):o()),(v=n.onChange)==null||v.call(n,f,h)}},[d]=g.useState(()=>{const f=new $I(p),h=f.measureElement;return f.measureElement=v=>{s.current=!0;try{h(v)}finally{s.current=!1}const m=i.current;if(v!==null&&m.enabled&&m.container){const y=f.measurementsCache[f.indexFromElement(v)];y&&l(f,y,v)}},Object.assign(f,{containerRef:v=>{const m=i.current;m.container=v,m.lastSize=null,v!==null&&c(f)}})});return d.setOptions(p),wl(()=>d._didMount(),[]),wl(()=>(a(d),d._willUpdate())),wl(()=>{c(d)}),d}function uy(e){return VI({observeElementRect:oy,observeElementOffset:sy,scrollToFn:ly,...e})}function ms(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Sl={exports:{}},$f;function qI(){return $f||($f=1,(function(e,t){(function(r){e.exports=r()})(function(){return(function r(n,o,i){function s(c,p){if(!o[c]){if(!n[c]){var d=typeof ms=="function"&&ms;if(!p&&d)return d(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}p=o[c]={exports:{}},n[c][0].call(p.exports,function(f){var h=n[c][1][f];return s(h||f)},p,p.exports,r,n,o,i)}return o[c].exports}for(var a=typeof ms=="function"&&ms,l=0;l<i.length;l++)s(i[l]);return s})({1:[function(r,n,o){(function(i,s,a,l,c,p,d,f,h){var v=r("crypto");function m(w,j){j=k(w,j);var C;return(C=j.algorithm!=="passthrough"?v.createHash(j.algorithm):new S).write===void 0&&(C.write=C.update,C.end=C.update),_(j,C).dispatch(w),C.update||C.end(""),C.digest?C.digest(j.encoding==="buffer"?void 0:j.encoding):(w=C.read(),j.encoding!=="buffer"?w.toString(j.encoding):w)}(o=n.exports=m).sha1=function(w){return m(w)},o.keys=function(w){return m(w,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},o.MD5=function(w){return m(w,{algorithm:"md5",encoding:"hex"})},o.keysMD5=function(w){return m(w,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var y=v.getHashes?v.getHashes().slice():["sha1","md5"],x=(y.push("passthrough"),["buffer","hex","binary","base64"]);function k(w,j){var C={};if(C.algorithm=(j=j||{}).algorithm||"sha1",C.encoding=j.encoding||"hex",C.excludeValues=!!j.excludeValues,C.algorithm=C.algorithm.toLowerCase(),C.encoding=C.encoding.toLowerCase(),C.ignoreUnknown=j.ignoreUnknown===!0,C.respectType=j.respectType!==!1,C.respectFunctionNames=j.respectFunctionNames!==!1,C.respectFunctionProperties=j.respectFunctionProperties!==!1,C.unorderedArrays=j.unorderedArrays===!0,C.unorderedSets=j.unorderedSets!==!1,C.unorderedObjects=j.unorderedObjects!==!1,C.replacer=j.replacer||void 0,C.excludeKeys=j.excludeKeys||void 0,w===void 0)throw new Error("Object argument required.");for(var I=0;I<y.length;++I)y[I].toLowerCase()===C.algorithm.toLowerCase()&&(C.algorithm=y[I]);if(y.indexOf(C.algorithm)===-1)throw new Error('Algorithm "'+C.algorithm+'"  not supported. supported values: '+y.join(", "));if(x.indexOf(C.encoding)===-1&&C.algorithm!=="passthrough")throw new Error('Encoding "'+C.encoding+'"  not supported. supported values: '+x.join(", "));return C}function b(w){if(typeof w=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(w))!=null}function _(w,j,C){C=C||[];function I(E){return j.update?j.update(E,"utf8"):j.write(E,"utf8")}return{dispatch:function(E){return this["_"+((E=w.replacer?w.replacer(E):E)===null?"null":typeof E)](E)},_object:function(E){var z,O=Object.prototype.toString.call(E),L=/\[object (.*)\]/i.exec(O);if(L=(L=L?L[1]:"unknown:["+O+"]").toLowerCase(),0<=(O=C.indexOf(E)))return this.dispatch("[CIRCULAR:"+O+"]");if(C.push(E),a!==void 0&&a.isBuffer&&a.isBuffer(E))return I("buffer:"),I(E);if(L==="object"||L==="function"||L==="asyncfunction")return O=Object.keys(E),w.unorderedObjects&&(O=O.sort()),w.respectType===!1||b(E)||O.splice(0,0,"prototype","__proto__","constructor"),w.excludeKeys&&(O=O.filter(function(B){return!w.excludeKeys(B)})),I("object:"+O.length+":"),z=this,O.forEach(function(B){z.dispatch(B),I(":"),w.excludeValues||z.dispatch(E[B]),I(",")});if(!this["_"+L]){if(w.ignoreUnknown)return I("["+L+"]");throw new Error('Unknown object type "'+L+'"')}this["_"+L](E)},_array:function(E,B){B=B!==void 0?B:w.unorderedArrays!==!1;var O=this;if(I("array:"+E.length+":"),!B||E.length<=1)return E.forEach(function(N){return O.dispatch(N)});var L=[],B=E.map(function(N){var R=new S,q=C.slice();return _(w,R,q).dispatch(N),L=L.concat(q.slice(C.length)),R.read().toString()});return C=C.concat(L),B.sort(),this._array(B,!1)},_date:function(E){return I("date:"+E.toJSON())},_symbol:function(E){return I("symbol:"+E.toString())},_error:function(E){return I("error:"+E.toString())},_boolean:function(E){return I("bool:"+E.toString())},_string:function(E){I("string:"+E.length+":"),I(E.toString())},_function:function(E){I("fn:"),b(E)?this.dispatch("[native]"):this.dispatch(E.toString()),w.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(E.name)),w.respectFunctionProperties&&this._object(E)},_number:function(E){return I("number:"+E.toString())},_xml:function(E){return I("xml:"+E.toString())},_null:function(){return I("Null")},_undefined:function(){return I("Undefined")},_regexp:function(E){return I("regex:"+E.toString())},_uint8array:function(E){return I("uint8array:"),this.dispatch(Array.prototype.slice.call(E))},_uint8clampedarray:function(E){return I("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(E))},_int8array:function(E){return I("int8array:"),this.dispatch(Array.prototype.slice.call(E))},_uint16array:function(E){return I("uint16array:"),this.dispatch(Array.prototype.slice.call(E))},_int16array:function(E){return I("int16array:"),this.dispatch(Array.prototype.slice.call(E))},_uint32array:function(E){return I("uint32array:"),this.dispatch(Array.prototype.slice.call(E))},_int32array:function(E){return I("int32array:"),this.dispatch(Array.prototype.slice.call(E))},_float32array:function(E){return I("float32array:"),this.dispatch(Array.prototype.slice.call(E))},_float64array:function(E){return I("float64array:"),this.dispatch(Array.prototype.slice.call(E))},_arraybuffer:function(E){return I("arraybuffer:"),this.dispatch(new Uint8Array(E))},_url:function(E){return I("url:"+E.toString())},_map:function(E){return I("map:"),E=Array.from(E),this._array(E,w.unorderedSets!==!1)},_set:function(E){return I("set:"),E=Array.from(E),this._array(E,w.unorderedSets!==!1)},_file:function(E){return I("file:"),this.dispatch([E.name,E.size,E.type,E.lastModfied])},_blob:function(){if(w.ignoreUnknown)return I("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return I("domwindow")},_bigint:function(E){return I("bigint:"+E.toString())},_process:function(){return I("process")},_timer:function(){return I("timer")},_pipe:function(){return I("pipe")},_tcp:function(){return I("tcp")},_udp:function(){return I("udp")},_tty:function(){return I("tty")},_statwatcher:function(){return I("statwatcher")},_securecontext:function(){return I("securecontext")},_connection:function(){return I("connection")},_zlib:function(){return I("zlib")},_context:function(){return I("context")},_nodescript:function(){return I("nodescript")},_httpparser:function(){return I("httpparser")},_dataview:function(){return I("dataview")},_signal:function(){return I("signal")},_fsevent:function(){return I("fsevent")},_tlswrap:function(){return I("tlswrap")}}}function S(){return{buf:"",write:function(w){this.buf+=w},end:function(w){this.buf+=w},read:function(){return this.buf}}}o.writeToStream=function(w,j,C){return C===void 0&&(C=j,j={}),_(j=k(w,j),C).dispatch(w)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(r,n,o){(function(i,s,a,l,c,p,d,f,h){(function(v){var m=typeof Uint8Array<"u"?Uint8Array:Array,y=43,x=47,k=48,b=97,_=65,S=45,w=95;function j(C){return C=C.charCodeAt(0),C===y||C===S?62:C===x||C===w?63:C<k?-1:C<k+10?C-k+26+26:C<_+26?C-_:C<b+26?C-b+26:void 0}v.toByteArray=function(C){var I,E;if(0<C.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var z=C.length,z=C.charAt(z-2)==="="?2:C.charAt(z-1)==="="?1:0,O=new m(3*C.length/4-z),L=0<z?C.length-4:C.length,B=0;function N(R){O[B++]=R}for(I=0;I<L;I+=4,0)N((16711680&(E=j(C.charAt(I))<<18|j(C.charAt(I+1))<<12|j(C.charAt(I+2))<<6|j(C.charAt(I+3))))>>16),N((65280&E)>>8),N(255&E);return z==2?N(255&(E=j(C.charAt(I))<<2|j(C.charAt(I+1))>>4)):z==1&&(N((E=j(C.charAt(I))<<10|j(C.charAt(I+1))<<4|j(C.charAt(I+2))>>2)>>8&255),N(255&E)),O},v.fromByteArray=function(C){var I,E,z,O,L=C.length%3,B="";function N(R){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(R)}for(I=0,z=C.length-L;I<z;I+=3)E=(C[I]<<16)+(C[I+1]<<8)+C[I+2],B+=N((O=E)>>18&63)+N(O>>12&63)+N(O>>6&63)+N(63&O);switch(L){case 1:B=(B+=N((E=C[C.length-1])>>2))+N(E<<4&63)+"==";break;case 2:B=(B=(B+=N((E=(C[C.length-2]<<8)+C[C.length-1])>>10))+N(E>>4&63))+N(E<<2&63)+"="}return B}})(o===void 0?this.base64js={}:o)}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(r,n,o){(function(i,s,y,l,c,p,d,f,h){var v=r("base64-js"),m=r("ieee754");function y(P,M,T){if(!(this instanceof y))return new y(P,M,T);var U,V,X,ne,ue=typeof P;if(M==="base64"&&ue=="string")for(P=(ne=P).trim?ne.trim():ne.replace(/^\s+|\s+$/g,"");P.length%4!=0;)P+="=";if(ue=="number")U=W(P);else if(ue=="string")U=y.byteLength(P,M);else{if(ue!="object")throw new Error("First argument needs to be a number, array or string.");U=W(P.length)}if(y._useTypedArrays?V=y._augment(new Uint8Array(U)):((V=this).length=U,V._isBuffer=!0),y._useTypedArrays&&typeof P.byteLength=="number")V._set(P);else if($(ne=P)||y.isBuffer(ne)||ne&&typeof ne=="object"&&typeof ne.length=="number")for(X=0;X<U;X++)y.isBuffer(P)?V[X]=P.readUInt8(X):V[X]=P[X];else if(ue=="string")V.write(P,0,M);else if(ue=="number"&&!y._useTypedArrays&&!T)for(X=0;X<U;X++)V[X]=0;return V}function x(P,M,T,U){return y._charsWritten=te((function(V){for(var X=[],ne=0;ne<V.length;ne++)X.push(255&V.charCodeAt(ne));return X})(M),P,T,U)}function k(P,M,T,U){return y._charsWritten=te((function(V){for(var X,ne,ue=[],ve=0;ve<V.length;ve++)ne=V.charCodeAt(ve),X=ne>>8,ne=ne%256,ue.push(ne),ue.push(X);return ue})(M),P,T,U)}function b(P,M,T){var U="";T=Math.min(P.length,T);for(var V=M;V<T;V++)U+=String.fromCharCode(P[V]);return U}function _(P,M,T,X){X||(Y(typeof T=="boolean","missing or invalid endian"),Y(M!=null,"missing offset"),Y(M+1<P.length,"Trying to read beyond buffer length"));var V,X=P.length;if(!(X<=M))return T?(V=P[M],M+1<X&&(V|=P[M+1]<<8)):(V=P[M]<<8,M+1<X&&(V|=P[M+1])),V}function S(P,M,T,X){X||(Y(typeof T=="boolean","missing or invalid endian"),Y(M!=null,"missing offset"),Y(M+3<P.length,"Trying to read beyond buffer length"));var V,X=P.length;if(!(X<=M))return T?(M+2<X&&(V=P[M+2]<<16),M+1<X&&(V|=P[M+1]<<8),V|=P[M],M+3<X&&(V+=P[M+3]<<24>>>0)):(M+1<X&&(V=P[M+1]<<16),M+2<X&&(V|=P[M+2]<<8),M+3<X&&(V|=P[M+3]),V+=P[M]<<24>>>0),V}function w(P,M,T,U){if(U||(Y(typeof T=="boolean","missing or invalid endian"),Y(M!=null,"missing offset"),Y(M+1<P.length,"Trying to read beyond buffer length")),!(P.length<=M))return U=_(P,M,T,!0),32768&U?-1*(65535-U+1):U}function j(P,M,T,U){if(U||(Y(typeof T=="boolean","missing or invalid endian"),Y(M!=null,"missing offset"),Y(M+3<P.length,"Trying to read beyond buffer length")),!(P.length<=M))return U=S(P,M,T,!0),2147483648&U?-1*(4294967295-U+1):U}function C(P,M,T,U){return U||(Y(typeof T=="boolean","missing or invalid endian"),Y(M+3<P.length,"Trying to read beyond buffer length")),m.read(P,M,T,23,4)}function I(P,M,T,U){return U||(Y(typeof T=="boolean","missing or invalid endian"),Y(M+7<P.length,"Trying to read beyond buffer length")),m.read(P,M,T,52,8)}function E(P,M,T,U,V){if(V||(Y(M!=null,"missing value"),Y(typeof U=="boolean","missing or invalid endian"),Y(T!=null,"missing offset"),Y(T+1<P.length,"trying to write beyond buffer length"),Q(M,65535)),V=P.length,!(V<=T))for(var X=0,ne=Math.min(V-T,2);X<ne;X++)P[T+X]=(M&255<<8*(U?X:1-X))>>>8*(U?X:1-X)}function z(P,M,T,U,V){if(V||(Y(M!=null,"missing value"),Y(typeof U=="boolean","missing or invalid endian"),Y(T!=null,"missing offset"),Y(T+3<P.length,"trying to write beyond buffer length"),Q(M,4294967295)),V=P.length,!(V<=T))for(var X=0,ne=Math.min(V-T,4);X<ne;X++)P[T+X]=M>>>8*(U?X:3-X)&255}function O(P,M,T,U,V){V||(Y(M!=null,"missing value"),Y(typeof U=="boolean","missing or invalid endian"),Y(T!=null,"missing offset"),Y(T+1<P.length,"Trying to write beyond buffer length"),ie(M,32767,-32768)),P.length<=T||E(P,0<=M?M:65535+M+1,T,U,V)}function L(P,M,T,U,V){V||(Y(M!=null,"missing value"),Y(typeof U=="boolean","missing or invalid endian"),Y(T!=null,"missing offset"),Y(T+3<P.length,"Trying to write beyond buffer length"),ie(M,2147483647,-2147483648)),P.length<=T||z(P,0<=M?M:4294967295+M+1,T,U,V)}function B(P,M,T,U,V){V||(Y(M!=null,"missing value"),Y(typeof U=="boolean","missing or invalid endian"),Y(T!=null,"missing offset"),Y(T+3<P.length,"Trying to write beyond buffer length"),ke(M,34028234663852886e22,-34028234663852886e22)),P.length<=T||m.write(P,M,T,U,23,4)}function N(P,M,T,U,V){V||(Y(M!=null,"missing value"),Y(typeof U=="boolean","missing or invalid endian"),Y(T!=null,"missing offset"),Y(T+7<P.length,"Trying to write beyond buffer length"),ke(M,17976931348623157e292,-17976931348623157e292)),P.length<=T||m.write(P,M,T,U,52,8)}o.Buffer=y,o.SlowBuffer=y,o.INSPECT_MAX_BYTES=50,y.poolSize=8192,y._useTypedArrays=(function(){try{var P=new ArrayBuffer(0),M=new Uint8Array(P);return M.foo=function(){return 42},M.foo()===42&&typeof M.subarray=="function"}catch{return!1}})(),y.isEncoding=function(P){switch(String(P).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},y.isBuffer=function(P){return!(P==null||!P._isBuffer)},y.byteLength=function(P,M){var T;switch(P+="",M||"utf8"){case"hex":T=P.length/2;break;case"utf8":case"utf-8":T=oe(P).length;break;case"ascii":case"binary":case"raw":T=P.length;break;case"base64":T=G(P).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":T=2*P.length;break;default:throw new Error("Unknown encoding")}return T},y.concat=function(P,M){if(Y($(P),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),P.length===0)return new y(0);if(P.length===1)return P[0];if(typeof M!="number")for(V=M=0;V<P.length;V++)M+=P[V].length;for(var T=new y(M),U=0,V=0;V<P.length;V++){var X=P[V];X.copy(T,U),U+=X.length}return T},y.prototype.write=function(P,M,T,U){isFinite(M)?isFinite(T)||(U=T,T=void 0):(ve=U,U=M,M=T,T=ve),M=Number(M)||0;var V,X,ne,ue,ve=this.length-M;switch((!T||ve<(T=Number(T)))&&(T=ve),U=String(U||"utf8").toLowerCase()){case"hex":V=(function(We,ze,Ee,we){Ee=Number(Ee)||0;var he=We.length-Ee;(!we||he<(we=Number(we)))&&(we=he),Y((he=ze.length)%2==0,"Invalid hex string"),he/2<we&&(we=he/2);for(var Ot=0;Ot<we;Ot++){var or=parseInt(ze.substr(2*Ot,2),16);Y(!isNaN(or),"Invalid hex string"),We[Ee+Ot]=or}return y._charsWritten=2*Ot,Ot})(this,P,M,T);break;case"utf8":case"utf-8":X=this,ne=M,ue=T,V=y._charsWritten=te(oe(P),X,ne,ue);break;case"ascii":case"binary":V=x(this,P,M,T);break;case"base64":X=this,ne=M,ue=T,V=y._charsWritten=te(G(P),X,ne,ue);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":V=k(this,P,M,T);break;default:throw new Error("Unknown encoding")}return V},y.prototype.toString=function(P,M,T){var U,V,X,ne,ue=this;if(P=String(P||"utf8").toLowerCase(),M=Number(M)||0,(T=T!==void 0?Number(T):ue.length)===M)return"";switch(P){case"hex":U=(function(ve,We,ze){var Ee=ve.length;(!We||We<0)&&(We=0),(!ze||ze<0||Ee<ze)&&(ze=Ee);for(var we="",he=We;he<ze;he++)we+=Z(ve[he]);return we})(ue,M,T);break;case"utf8":case"utf-8":U=(function(ve,We,ze){var Ee="",we="";ze=Math.min(ve.length,ze);for(var he=We;he<ze;he++)ve[he]<=127?(Ee+=be(we)+String.fromCharCode(ve[he]),we=""):we+="%"+ve[he].toString(16);return Ee+be(we)})(ue,M,T);break;case"ascii":case"binary":U=b(ue,M,T);break;case"base64":V=ue,ne=T,U=(X=M)===0&&ne===V.length?v.fromByteArray(V):v.fromByteArray(V.slice(X,ne));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":U=(function(ve,We,ze){for(var Ee=ve.slice(We,ze),we="",he=0;he<Ee.length;he+=2)we+=String.fromCharCode(Ee[he]+256*Ee[he+1]);return we})(ue,M,T);break;default:throw new Error("Unknown encoding")}return U},y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},y.prototype.copy=function(P,M,T,U){if(M=M||0,(U=U||U===0?U:this.length)!==(T=T||0)&&P.length!==0&&this.length!==0){Y(T<=U,"sourceEnd < sourceStart"),Y(0<=M&&M<P.length,"targetStart out of bounds"),Y(0<=T&&T<this.length,"sourceStart out of bounds"),Y(0<=U&&U<=this.length,"sourceEnd out of bounds"),U>this.length&&(U=this.length);var V=(U=P.length-M<U-T?P.length-M+T:U)-T;if(V<100||!y._useTypedArrays)for(var X=0;X<V;X++)P[X+M]=this[X+T];else P._set(this.subarray(T,T+V),M)}},y.prototype.slice=function(P,M){var T=this.length;if(P=q(P,T,0),M=q(M,T,T),y._useTypedArrays)return y._augment(this.subarray(P,M));for(var U=M-P,V=new y(U,void 0,!0),X=0;X<U;X++)V[X]=this[X+P];return V},y.prototype.get=function(P){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(P)},y.prototype.set=function(P,M){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(P,M)},y.prototype.readUInt8=function(P,M){if(M||(Y(P!=null,"missing offset"),Y(P<this.length,"Trying to read beyond buffer length")),!(P>=this.length))return this[P]},y.prototype.readUInt16LE=function(P,M){return _(this,P,!0,M)},y.prototype.readUInt16BE=function(P,M){return _(this,P,!1,M)},y.prototype.readUInt32LE=function(P,M){return S(this,P,!0,M)},y.prototype.readUInt32BE=function(P,M){return S(this,P,!1,M)},y.prototype.readInt8=function(P,M){if(M||(Y(P!=null,"missing offset"),Y(P<this.length,"Trying to read beyond buffer length")),!(P>=this.length))return 128&this[P]?-1*(255-this[P]+1):this[P]},y.prototype.readInt16LE=function(P,M){return w(this,P,!0,M)},y.prototype.readInt16BE=function(P,M){return w(this,P,!1,M)},y.prototype.readInt32LE=function(P,M){return j(this,P,!0,M)},y.prototype.readInt32BE=function(P,M){return j(this,P,!1,M)},y.prototype.readFloatLE=function(P,M){return C(this,P,!0,M)},y.prototype.readFloatBE=function(P,M){return C(this,P,!1,M)},y.prototype.readDoubleLE=function(P,M){return I(this,P,!0,M)},y.prototype.readDoubleBE=function(P,M){return I(this,P,!1,M)},y.prototype.writeUInt8=function(P,M,T){T||(Y(P!=null,"missing value"),Y(M!=null,"missing offset"),Y(M<this.length,"trying to write beyond buffer length"),Q(P,255)),M>=this.length||(this[M]=P)},y.prototype.writeUInt16LE=function(P,M,T){E(this,P,M,!0,T)},y.prototype.writeUInt16BE=function(P,M,T){E(this,P,M,!1,T)},y.prototype.writeUInt32LE=function(P,M,T){z(this,P,M,!0,T)},y.prototype.writeUInt32BE=function(P,M,T){z(this,P,M,!1,T)},y.prototype.writeInt8=function(P,M,T){T||(Y(P!=null,"missing value"),Y(M!=null,"missing offset"),Y(M<this.length,"Trying to write beyond buffer length"),ie(P,127,-128)),M>=this.length||(0<=P?this.writeUInt8(P,M,T):this.writeUInt8(255+P+1,M,T))},y.prototype.writeInt16LE=function(P,M,T){O(this,P,M,!0,T)},y.prototype.writeInt16BE=function(P,M,T){O(this,P,M,!1,T)},y.prototype.writeInt32LE=function(P,M,T){L(this,P,M,!0,T)},y.prototype.writeInt32BE=function(P,M,T){L(this,P,M,!1,T)},y.prototype.writeFloatLE=function(P,M,T){B(this,P,M,!0,T)},y.prototype.writeFloatBE=function(P,M,T){B(this,P,M,!1,T)},y.prototype.writeDoubleLE=function(P,M,T){N(this,P,M,!0,T)},y.prototype.writeDoubleBE=function(P,M,T){N(this,P,M,!1,T)},y.prototype.fill=function(P,M,T){if(M=M||0,T=T||this.length,Y(typeof(P=typeof(P=P||0)=="string"?P.charCodeAt(0):P)=="number"&&!isNaN(P),"value is not a number"),Y(M<=T,"end < start"),T!==M&&this.length!==0){Y(0<=M&&M<this.length,"start out of bounds"),Y(0<=T&&T<=this.length,"end out of bounds");for(var U=M;U<T;U++)this[U]=P}},y.prototype.inspect=function(){for(var P=[],M=this.length,T=0;T<M;T++)if(P[T]=Z(this[T]),T===o.INSPECT_MAX_BYTES){P[T+1]="...";break}return"<Buffer "+P.join(" ")+">"},y.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(y._useTypedArrays)return new y(this).buffer;for(var P=new Uint8Array(this.length),M=0,T=P.length;M<T;M+=1)P[M]=this[M];return P.buffer};var R=y.prototype;function q(P,M,T){return typeof P!="number"?T:M<=(P=~~P)?M:0<=P||0<=(P+=M)?P:0}function W(P){return(P=~~Math.ceil(+P))<0?0:P}function $(P){return(Array.isArray||function(M){return Object.prototype.toString.call(M)==="[object Array]"})(P)}function Z(P){return P<16?"0"+P.toString(16):P.toString(16)}function oe(P){for(var M=[],T=0;T<P.length;T++){var U=P.charCodeAt(T);if(U<=127)M.push(P.charCodeAt(T));else for(var V=T,X=(55296<=U&&U<=57343&&T++,encodeURIComponent(P.slice(V,T+1)).substr(1).split("%")),ne=0;ne<X.length;ne++)M.push(parseInt(X[ne],16))}return M}function G(P){return v.toByteArray(P)}function te(P,M,T,U){for(var V=0;V<U&&!(V+T>=M.length||V>=P.length);V++)M[V+T]=P[V];return V}function be(P){try{return decodeURIComponent(P)}catch{return"�"}}function Q(P,M){Y(typeof P=="number","cannot write a non-number as a number"),Y(0<=P,"specified a negative value for writing an unsigned value"),Y(P<=M,"value is larger than maximum value for type"),Y(Math.floor(P)===P,"value has a fractional component")}function ie(P,M,T){Y(typeof P=="number","cannot write a non-number as a number"),Y(P<=M,"value larger than maximum allowed value"),Y(T<=P,"value smaller than minimum allowed value"),Y(Math.floor(P)===P,"value has a fractional component")}function ke(P,M,T){Y(typeof P=="number","cannot write a non-number as a number"),Y(P<=M,"value larger than maximum allowed value"),Y(T<=P,"value smaller than minimum allowed value")}function Y(P,M){if(!P)throw new Error(M||"Failed assertion")}y._augment=function(P){return P._isBuffer=!0,P._get=P.get,P._set=P.set,P.get=R.get,P.set=R.set,P.write=R.write,P.toString=R.toString,P.toLocaleString=R.toString,P.toJSON=R.toJSON,P.copy=R.copy,P.slice=R.slice,P.readUInt8=R.readUInt8,P.readUInt16LE=R.readUInt16LE,P.readUInt16BE=R.readUInt16BE,P.readUInt32LE=R.readUInt32LE,P.readUInt32BE=R.readUInt32BE,P.readInt8=R.readInt8,P.readInt16LE=R.readInt16LE,P.readInt16BE=R.readInt16BE,P.readInt32LE=R.readInt32LE,P.readInt32BE=R.readInt32BE,P.readFloatLE=R.readFloatLE,P.readFloatBE=R.readFloatBE,P.readDoubleLE=R.readDoubleLE,P.readDoubleBE=R.readDoubleBE,P.writeUInt8=R.writeUInt8,P.writeUInt16LE=R.writeUInt16LE,P.writeUInt16BE=R.writeUInt16BE,P.writeUInt32LE=R.writeUInt32LE,P.writeUInt32BE=R.writeUInt32BE,P.writeInt8=R.writeInt8,P.writeInt16LE=R.writeInt16LE,P.writeInt16BE=R.writeInt16BE,P.writeInt32LE=R.writeInt32LE,P.writeInt32BE=R.writeInt32BE,P.writeFloatLE=R.writeFloatLE,P.writeFloatBE=R.writeFloatBE,P.writeDoubleLE=R.writeDoubleLE,P.writeDoubleBE=R.writeDoubleBE,P.fill=R.fill,P.inspect=R.inspect,P.toArrayBuffer=R.toArrayBuffer,P}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(r,n,o){(function(i,s,v,l,c,p,d,f,h){var v=r("buffer").Buffer,m=4,y=new v(m);y.fill(0),n.exports={hash:function(x,k,b,_){for(var S=k((function(E,z){E.length%m!=0&&(O=E.length+(m-E.length%m),E=v.concat([E,y],O));for(var O,L=[],B=z?E.readInt32BE:E.readInt32LE,N=0;N<E.length;N+=m)L.push(B.call(E,N));return L})(x=v.isBuffer(x)?x:new v(x),_),8*x.length),k=_,w=new v(b),j=k?w.writeInt32BE:w.writeInt32LE,C=0;C<S.length;C++)j.call(w,S[C],4*C,!0);return w}}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(r,n,o){(function(i,s,v,l,c,p,d,f,h){var v=r("buffer").Buffer,m=r("./sha"),y=r("./sha256"),x=r("./rng"),k={sha1:m,sha256:y,md5:r("./md5")},b=64,_=new v(b);function S(E,z){var O=k[E=E||"sha1"],L=[];return O||w("algorithm:",E,"is not yet supported"),{update:function(B){return v.isBuffer(B)||(B=new v(B)),L.push(B),B.length,this},digest:function(B){var N=v.concat(L),N=z?(function(R,q,W){v.isBuffer(q)||(q=new v(q)),v.isBuffer(W)||(W=new v(W)),q.length>b?q=R(q):q.length<b&&(q=v.concat([q,_],b));for(var $=new v(b),Z=new v(b),oe=0;oe<b;oe++)$[oe]=54^q[oe],Z[oe]=92^q[oe];return W=R(v.concat([$,W])),R(v.concat([Z,W]))})(O,z,N):O(N);return L=null,B?N.toString(B):N}}}function w(){var E=[].slice.call(arguments).join(" ");throw new Error([E,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}_.fill(0),o.createHash=function(E){return S(E)},o.createHmac=S,o.randomBytes=function(E,z){if(!z||!z.call)return new v(x(E));try{z.call(this,void 0,new v(x(E)))}catch(O){z(O)}};var j,C=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],I=function(E){o[E]=function(){w("sorry,",E,"is not implemented yet")}};for(j in C)I(C[j])}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(r,n,o){(function(i,s,a,l,c,p,d,f,h){var v=r("./helpers");function m(w,j){w[j>>5]|=128<<j%32,w[14+(j+64>>>9<<4)]=j;for(var C=1732584193,I=-271733879,E=-1732584194,z=271733878,O=0;O<w.length;O+=16){var L=C,B=I,N=E,R=z,C=x(C,I,E,z,w[O+0],7,-680876936),z=x(z,C,I,E,w[O+1],12,-389564586),E=x(E,z,C,I,w[O+2],17,606105819),I=x(I,E,z,C,w[O+3],22,-1044525330);C=x(C,I,E,z,w[O+4],7,-176418897),z=x(z,C,I,E,w[O+5],12,1200080426),E=x(E,z,C,I,w[O+6],17,-1473231341),I=x(I,E,z,C,w[O+7],22,-45705983),C=x(C,I,E,z,w[O+8],7,1770035416),z=x(z,C,I,E,w[O+9],12,-1958414417),E=x(E,z,C,I,w[O+10],17,-42063),I=x(I,E,z,C,w[O+11],22,-1990404162),C=x(C,I,E,z,w[O+12],7,1804603682),z=x(z,C,I,E,w[O+13],12,-40341101),E=x(E,z,C,I,w[O+14],17,-1502002290),C=k(C,I=x(I,E,z,C,w[O+15],22,1236535329),E,z,w[O+1],5,-165796510),z=k(z,C,I,E,w[O+6],9,-1069501632),E=k(E,z,C,I,w[O+11],14,643717713),I=k(I,E,z,C,w[O+0],20,-373897302),C=k(C,I,E,z,w[O+5],5,-701558691),z=k(z,C,I,E,w[O+10],9,38016083),E=k(E,z,C,I,w[O+15],14,-660478335),I=k(I,E,z,C,w[O+4],20,-405537848),C=k(C,I,E,z,w[O+9],5,568446438),z=k(z,C,I,E,w[O+14],9,-1019803690),E=k(E,z,C,I,w[O+3],14,-187363961),I=k(I,E,z,C,w[O+8],20,1163531501),C=k(C,I,E,z,w[O+13],5,-1444681467),z=k(z,C,I,E,w[O+2],9,-51403784),E=k(E,z,C,I,w[O+7],14,1735328473),C=b(C,I=k(I,E,z,C,w[O+12],20,-1926607734),E,z,w[O+5],4,-378558),z=b(z,C,I,E,w[O+8],11,-2022574463),E=b(E,z,C,I,w[O+11],16,1839030562),I=b(I,E,z,C,w[O+14],23,-35309556),C=b(C,I,E,z,w[O+1],4,-1530992060),z=b(z,C,I,E,w[O+4],11,1272893353),E=b(E,z,C,I,w[O+7],16,-155497632),I=b(I,E,z,C,w[O+10],23,-1094730640),C=b(C,I,E,z,w[O+13],4,681279174),z=b(z,C,I,E,w[O+0],11,-358537222),E=b(E,z,C,I,w[O+3],16,-722521979),I=b(I,E,z,C,w[O+6],23,76029189),C=b(C,I,E,z,w[O+9],4,-640364487),z=b(z,C,I,E,w[O+12],11,-421815835),E=b(E,z,C,I,w[O+15],16,530742520),C=_(C,I=b(I,E,z,C,w[O+2],23,-995338651),E,z,w[O+0],6,-198630844),z=_(z,C,I,E,w[O+7],10,1126891415),E=_(E,z,C,I,w[O+14],15,-1416354905),I=_(I,E,z,C,w[O+5],21,-57434055),C=_(C,I,E,z,w[O+12],6,1700485571),z=_(z,C,I,E,w[O+3],10,-1894986606),E=_(E,z,C,I,w[O+10],15,-1051523),I=_(I,E,z,C,w[O+1],21,-2054922799),C=_(C,I,E,z,w[O+8],6,1873313359),z=_(z,C,I,E,w[O+15],10,-30611744),E=_(E,z,C,I,w[O+6],15,-1560198380),I=_(I,E,z,C,w[O+13],21,1309151649),C=_(C,I,E,z,w[O+4],6,-145523070),z=_(z,C,I,E,w[O+11],10,-1120210379),E=_(E,z,C,I,w[O+2],15,718787259),I=_(I,E,z,C,w[O+9],21,-343485551),C=S(C,L),I=S(I,B),E=S(E,N),z=S(z,R)}return Array(C,I,E,z)}function y(w,j,C,I,E,z){return S((j=S(S(j,w),S(I,z)))<<E|j>>>32-E,C)}function x(w,j,C,I,E,z,O){return y(j&C|~j&I,w,j,E,z,O)}function k(w,j,C,I,E,z,O){return y(j&I|C&~I,w,j,E,z,O)}function b(w,j,C,I,E,z,O){return y(j^C^I,w,j,E,z,O)}function _(w,j,C,I,E,z,O){return y(C^(j|~I),w,j,E,z,O)}function S(w,j){var C=(65535&w)+(65535&j);return(w>>16)+(j>>16)+(C>>16)<<16|65535&C}n.exports=function(w){return v.hash(w,m,16)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(r,n,o){(function(i,s,a,l,c,p,d,f,h){n.exports=function(v){for(var m,y=new Array(v),x=0;x<v;x++)(3&x)==0&&(m=4294967296*Math.random()),y[x]=m>>>((3&x)<<3)&255;return y}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(r,n,o){(function(i,s,a,l,c,p,d,f,h){var v=r("./helpers");function m(k,b){k[b>>5]|=128<<24-b%32,k[15+(b+64>>9<<4)]=b;for(var _,S,w,j=Array(80),C=1732584193,I=-271733879,E=-1732584194,z=271733878,O=-1009589776,L=0;L<k.length;L+=16){for(var B=C,N=I,R=E,q=z,W=O,$=0;$<80;$++){j[$]=$<16?k[L+$]:x(j[$-3]^j[$-8]^j[$-14]^j[$-16],1);var Z=y(y(x(C,5),(Z=I,S=E,w=z,(_=$)<20?Z&S|~Z&w:!(_<40)&&_<60?Z&S|Z&w|S&w:Z^S^w)),y(y(O,j[$]),(_=$)<20?1518500249:_<40?1859775393:_<60?-1894007588:-899497514)),O=z,z=E,E=x(I,30),I=C,C=Z}C=y(C,B),I=y(I,N),E=y(E,R),z=y(z,q),O=y(O,W)}return Array(C,I,E,z,O)}function y(k,b){var _=(65535&k)+(65535&b);return(k>>16)+(b>>16)+(_>>16)<<16|65535&_}function x(k,b){return k<<b|k>>>32-b}n.exports=function(k){return v.hash(k,m,20,!0)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(r,n,o){(function(i,s,a,l,c,p,d,f,h){function v(b,_){var S=(65535&b)+(65535&_);return(b>>16)+(_>>16)+(S>>16)<<16|65535&S}function m(b,_){var S,w=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),j=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),C=new Array(64);b[_>>5]|=128<<24-_%32,b[15+(_+64>>9<<4)]=_;for(var I,E,z=0;z<b.length;z+=16){for(var O=j[0],L=j[1],B=j[2],N=j[3],R=j[4],q=j[5],W=j[6],$=j[7],Z=0;Z<64;Z++)C[Z]=Z<16?b[Z+z]:v(v(v((E=C[Z-2],x(E,17)^x(E,19)^k(E,10)),C[Z-7]),(E=C[Z-15],x(E,7)^x(E,18)^k(E,3))),C[Z-16]),S=v(v(v(v($,x(E=R,6)^x(E,11)^x(E,25)),R&q^~R&W),w[Z]),C[Z]),I=v(x(I=O,2)^x(I,13)^x(I,22),O&L^O&B^L&B),$=W,W=q,q=R,R=v(N,S),N=B,B=L,L=O,O=v(S,I);j[0]=v(O,j[0]),j[1]=v(L,j[1]),j[2]=v(B,j[2]),j[3]=v(N,j[3]),j[4]=v(R,j[4]),j[5]=v(q,j[5]),j[6]=v(W,j[6]),j[7]=v($,j[7])}return j}var y=r("./helpers"),x=function(b,_){return b>>>_|b<<32-_},k=function(b,_){return b>>>_};n.exports=function(b){return y.hash(b,m,32,!0)}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(r,n,o){(function(i,s,a,l,c,p,d,f,h){o.read=function(v,m,y,x,z){var b,_,S=8*z-x-1,w=(1<<S)-1,j=w>>1,C=-7,I=y?z-1:0,E=y?-1:1,z=v[m+I];for(I+=E,b=z&(1<<-C)-1,z>>=-C,C+=S;0<C;b=256*b+v[m+I],I+=E,C-=8);for(_=b&(1<<-C)-1,b>>=-C,C+=x;0<C;_=256*_+v[m+I],I+=E,C-=8);if(b===0)b=1-j;else{if(b===w)return _?NaN:1/0*(z?-1:1);_+=Math.pow(2,x),b-=j}return(z?-1:1)*_*Math.pow(2,b-x)},o.write=function(v,m,y,x,k,O){var _,S,w=8*O-k-1,j=(1<<w)-1,C=j>>1,I=k===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=x?0:O-1,z=x?1:-1,O=m<0||m===0&&1/m<0?1:0;for(m=Math.abs(m),isNaN(m)||m===1/0?(S=isNaN(m)?1:0,_=j):(_=Math.floor(Math.log(m)/Math.LN2),m*(x=Math.pow(2,-_))<1&&(_--,x*=2),2<=(m+=1<=_+C?I/x:I*Math.pow(2,1-C))*x&&(_++,x/=2),j<=_+C?(S=0,_=j):1<=_+C?(S=(m*x-1)*Math.pow(2,k),_+=C):(S=m*Math.pow(2,C-1)*Math.pow(2,k),_=0));8<=k;v[y+E]=255&S,E+=z,S/=256,k-=8);for(_=_<<k|S,w+=k;0<w;v[y+E]=255&_,E+=z,_/=256,w-=8);v[y+E-z]|=128*O}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(r,n,o){(function(i,s,a,l,c,p,d,f,h){var v,m,y;function x(){}(i=n.exports={}).nextTick=(m=typeof window<"u"&&window.setImmediate,y=typeof window<"u"&&window.postMessage&&window.addEventListener,m?function(k){return window.setImmediate(k)}:y?(v=[],window.addEventListener("message",function(k){var b=k.source;b!==window&&b!==null||k.data!=="process-tick"||(k.stopPropagation(),0<v.length&&v.shift()())},!0),function(k){v.push(k),window.postMessage("process-tick","*")}):function(k){setTimeout(k,0)}),i.title="browser",i.browser=!0,i.env={},i.argv=[],i.on=x,i.addListener=x,i.once=x,i.off=x,i.removeListener=x,i.removeAllListeners=x,i.emit=x,i.binding=function(k){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(k){throw new Error("process.chdir is not supported")}}).call(this,r("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},r("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Sl)),Sl.exports}var UI=qI();const El=Sh(UI);A();A();A();var ZI=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},Wf=e=>Array.isArray(e)?[...e]:ZI(e)?D({},e):{};function Ha(e,t,r){const n=t.split("."),o=D({},e);let i=o;for(let s=0;s<n.length;s++){const[a,l]=n[s].replace("]","").split("["),c=s===n.length-1;if(l!==void 0){i[a]=Array.isArray(i[a])?[...i[a]]:[];const p=Number(l);if(c){i[a][p]=r;continue}i[a][p]=Wf(i[a][p]),i=i[a][p];continue}if(c){i[a]=r;continue}i[a]=Wf(i[a]),i=i[a]}return o}A();A();var YI={Button:"_Button_oe4qj_1","Button--medium":"_Button--medium_oe4qj_34","Button--large":"_Button--large_oe4qj_62","Button-icon":"_Button-icon_oe4qj_89","Button--primary":"_Button--primary_oe4qj_93","Button--disabled":"_Button--disabled_oe4qj_123","Button--secondary":"_Button--secondary_oe4qj_135","Button--flush":"_Button--flush_oe4qj_171","Button--fullWidth":"_Button--fullWidth_oe4qj_179","Button-spinner":"_Button-spinner_oe4qj_184"};A();var GI=/^(data-.*)$/,KI=e=>{let t={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&GI.test(r)&&(t[r]=e[r]);return t},Cl=ee("Button",YI),Wc=e=>{var t=e,{children:r,href:n,onClick:o,variant:i="primary",type:s,disabled:a,tabIndex:l,newTab:c,fullWidth:p,icon:d,size:f="medium",loading:h=!1}=t,v=Bt(t,["children","href","onClick","variant","type","disabled","tabIndex","newTab","fullWidth","icon","size","loading"]);const[m,y]=g.useState(h);g.useEffect(()=>y(h),[h]);const x=n?"a":s?"button":"span",k=KI(v);return u.jsxs(x,F(D({className:Cl({primary:i==="primary",secondary:i==="secondary",disabled:a,fullWidth:p,[f]:!0}),onClick:_=>{o&&(y(!0),Promise.resolve(o(_)).then(()=>{y(!1)}))},type:s,disabled:a||m,tabIndex:l,target:c?"_blank":void 0,rel:c?"noreferrer":void 0,href:n},k),{children:[d&&u.jsx("div",{className:Cl("icon"),children:d}),r,m&&u.jsx("div",{className:Cl("spinner"),children:u.jsx(kn,{size:14})})]}))};A();A();var In={InputWrapper:"_InputWrapper_qyenz_1","Input-label":"_Input-label_qyenz_5","Input-labelIcon":"_Input-labelIcon_qyenz_17","Input-disabledIcon":"_Input-disabledIcon_qyenz_24","Input-input":"_Input-input_qyenz_29","Input-select":"_Input-select_qyenz_61","Input-selectIcon":"_Input-selectIcon_qyenz_71",Input:"_Input_qyenz_1","Input--readOnly":"_Input--readOnly_qyenz_111","Input-radioGroupItems":"_Input-radioGroupItems_qyenz_150","Input-radio":"_Input-radio_qyenz_150","Input-radioInner":"_Input-radioInner_qyenz_179","Input-radioInput":"_Input-radioInput_qyenz_261"},Bs=ee("Input",In),dy=({children:e,icon:t,label:r,el:n="label",readOnly:o,className:i})=>{const s=n,a=J("field-readonly");return u.jsxs(s,{className:i,children:[u.jsxs("div",{className:Bs("label"),children:[t?u.jsx("div",{className:Bs("labelIcon"),children:t}):u.jsx(u.Fragment,{}),r,o&&u.jsx("div",{className:Bs("disabledIcon"),title:a,children:u.jsx(ww,{size:"12"})})]}),e]})},XI=({children:e,icon:t,label:r,el:n="label",readOnly:o})=>{const i=H(a=>a.overrides),s=g.useMemo(()=>i.fieldLabel||dy,[i]);return r?u.jsx(s,{label:r,icon:t,className:Bs({readOnly:o}),readOnly:o,el:n,children:e}):u.jsx(u.Fragment,{children:e})};A();A();A();A();var py={ArrayField:"_ArrayField_62huh_5","ArrayField--isDraggingFrom":"_ArrayField--isDraggingFrom_62huh_30","ArrayField-addButton":"_ArrayField-addButton_62huh_38","ArrayField--hasItems":"_ArrayField--hasItems_62huh_58","ArrayField-inner":"_ArrayField-inner_62huh_93",ArrayFieldItem:"_ArrayFieldItem_62huh_101","ArrayFieldItem--isDragging":"_ArrayFieldItem--isDragging_62huh_110","ArrayFieldItem--isExpanded":"_ArrayFieldItem--isExpanded_62huh_114","ArrayFieldItem-summary":"_ArrayFieldItem-summary_62huh_132","ArrayFieldItem--noFields":"_ArrayFieldItem--noFields_62huh_167","ArrayField--addDisabled":"_ArrayField--addDisabled_62huh_176","ArrayFieldItem-body":"_ArrayFieldItem-body_62huh_228","ArrayFieldItem-fieldset":"_ArrayFieldItem-fieldset_62huh_237","ArrayFieldItem-rhs":"_ArrayFieldItem-rhs_62huh_250","ArrayFieldItem-actions":"_ArrayFieldItem-actions_62huh_256"};A();A();function Jt(e,t){const r=g.useContext(e);if(!r)throw new Error("useContextStore must be used inside context");return ba(r,$e(t))}function JI(e){return({children:r,value:n})=>{const[o]=g.useState(()=>Gr(()=>n));return u.jsx(e.Provider,{value:o,children:r})}}function QI(e){const t=g.createContext(Gr(cu(()=>e)));return{ctx:t,Provider:JI(t)}}var Zi=QI({}),Va=()=>g.useContext(Zi.ctx);function Bd(e){const t=g.useContext(Zi.ctx);if(!t)throw new Error("useContextStore must be used inside context");return ba(t,$e(e))}A();A();var ej={DragIcon:"_DragIcon_5e515_1","DragIcon--disabled":"_DragIcon--disabled_5e515_10"},tj=ee("DragIcon",ej),fy=({isDragDisabled:e})=>u.jsx("div",{className:tj({disabled:e}),children:u.jsx("svg",{viewBox:"0 0 20 20",width:"12",fill:"currentColor",children:u.jsx("path",{d:"M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"})})});A();A();var{Delay:hy,Distance:rj}=cr,Hf=[new hy({value:200,tolerance:10})],Vf=[new hy({value:200,tolerance:10}),new rj({value:5})],$d=({other:e=Vf,mouse:t,touch:r=Hf}={touch:Hf,other:Vf})=>{const[n]=g.useState(()=>[w_.configure({activationConstraints(o,i){var s;const{pointerType:a,target:l}=o;return a==="mouse"&&Vr(l)&&(i.handle===l||(s=i.handle)!=null&&s.contains(l))?t:a==="touch"?r:e}})]);return n};A();A();A();var Jn=(e,t,r,n,o)=>{},Il="increasing",nj=(e,t)=>{var r;const{dragOperation:n,droppable:o}=e,{shape:i}=o,{position:s}=n,a=(r=n.shape)==null?void 0:r.current;if(!a||!i)return null;const l=i.center,c=Math.sqrt(Math.pow(l.x-t.x,2)+Math.pow(l.y-t.y,2)),p=Math.sqrt(Math.pow(l.x-s.current.x,2)+Math.pow(l.y-s.current.y,2));return Il=p===c?Il:p<c?"decreasing":"increasing",Jn(a.center,l,o.id.toString()),Il==="decreasing"?{id:o.id,value:1,type:nr.Collision}:null};A();var vy=(e,t)=>e==="dynamic"?Math.abs(t.y)>Math.abs(t.x)?t.y===0?null:t.y>0?"down":"up":t.x===0?null:t.x>0?"right":"left":e==="x"?t.x===0?null:t.x>0?"right":"left":t.y===0?null:t.y>0?"down":"up";A();var oj=(e,t,r,n=0)=>{const o=e.boundingRectangle,i=t.center;if(r==="down"){const a=n*t.boundingRectangle.height;return o.bottom>=i.y+a}else if(r==="up"){const a=n*t.boundingRectangle.height;return o.top<i.y-a}else if(r==="left"){const a=n*t.boundingRectangle.width;return i.x-a>=o.left}const s=n*t.boundingRectangle.width;return o.right-s>=i.x};A();var qf=10,Mt={current:{x:0,y:0},delta:{x:0,y:0},previous:{x:0,y:0},direction:null},ij=(e,t="dynamic")=>(Mt.current=e,Mt.delta={x:e.x-Mt.previous.x,y:e.y-Mt.previous.y},Mt.direction=vy(t,Mt.delta)||Mt.direction,(Math.abs(Mt.delta.x)>qf||Math.abs(Mt.delta.y)>qf)&&(Mt.previous=tt.from(e)),Mt);A();var gy=({dragOperation:e,droppable:t})=>{const r=e.position.current;if(!r)return null;const{id:n}=t;if(!t.shape)return null;if(t.shape.containsPoint(r)){const o=tt.distance(t.shape.center,r);return{id:n,value:1/o,type:nr.PointerIntersection,priority:Ct.High}}return null},sj=e=>{const{dragOperation:t,droppable:r}=e,{shape:n,position:o}=t;if(!r.shape)return null;const i=n?At.from(n.current.boundingRectangle).corners:void 0,a=At.from(r.shape.boundingRectangle).corners.reduce((l,c,p)=>{var d;return l+tt.distance(tt.from(c),(d=i==null?void 0:i[p])!=null?d:o.current)},0)/4;return{id:r.id,value:1/a,type:nr.Collision,priority:Ct.Normal}};A();var Hc=Gr(()=>({fallbackEnabled:!1})),jl="",Wd=(e,t=.05)=>(r=>{var n,o,i,s,a;const{dragOperation:l,droppable:c}=r,{position:p}=l,d=(n=l.shape)==null?void 0:n.current,{shape:f}=c;if(!d||!f)return null;const{center:h}=d,{fallbackEnabled:v}=Hc.getState(),m=ij(p.current,e),y={direction:m.direction},{center:x}=f,k=oj(d,f,m.direction,t);if(((o=l.source)==null?void 0:o.id)===c.id){const S=nj(r,m.previous);if(Jn(h,x,c.id.toString()),S)return F(D({},S),{priority:Ct.Highest,data:y})}const b=d.intersectionArea(f),_=b/f.area;if(b&&k){Jn(h,x,c.id.toString());const S={id:c.id,value:_,priority:Ct.High,type:nr.Collision},w=jl===c.id;return jl="",F(D({},S),{id:w?"flush":S.id,data:y})}if(v&&((i=l.source)==null?void 0:i.id)!==c.id){const S=f.boundingRectangle.right>d.boundingRectangle.left&&f.boundingRectangle.left<d.boundingRectangle.right,w=f.boundingRectangle.bottom>d.boundingRectangle.top&&f.boundingRectangle.top<d.boundingRectangle.bottom;if(e==="y"&&S||w){const j=sj(r);if(j){const C=vy(e,{x:d.center.x-(((s=c.shape)==null?void 0:s.center.x)||0),y:d.center.y-(((a=c.shape)==null?void 0:a.center.y)||0)});return y.direction=C,b?(Jn(h,x,c.id.toString()),jl=c.id,F(D({},j),{priority:Ct.Low,data:y})):(Jn(h,x,c.id.toString()),F(D({},j),{priority:Ct.Lowest,data:y}))}}}return Jn(h,x,c.id.toString()),null});A();var Hd=(e,t="ltr")=>e==="up"||t==="ltr"&&e==="left"||t==="rtl"&&e==="right"?"before":"after",Vd=({position:e,sourceIndex:t,targetIndex:r,isSameZone:n})=>{let o=r;return n&&o>=t&&(o=o-1),e==="after"&&(o=o+1),o},aj=({children:e,onDragStart:t,onDragEnd:r,onMove:n})=>{const o=$d({mouse:[new cr.Distance({value:5})]});return u.jsx(zd,{sensors:o,onDragStart:i=>{var s,a;return t((a=(s=i.operation.source)==null?void 0:s.id.toString())!=null?a:"")},onDragOver:(i,s)=>{var a;i.preventDefault();const{operation:l}=i,{source:c,target:p}=l;if(!c||!p)return;const d=c.data.index,f=p.data.index,h=(a=s.collisionObserver.collisions[0])==null?void 0:a.data;d!==f&&c.id!==p.id&&n({source:d,target:Vd({position:Hd(h==null?void 0:h.direction),sourceIndex:d,targetIndex:f,isSameZone:!0})})},onDragEnd:()=>{setTimeout(()=>{r()},250)},children:e})},lj=({id:e,index:t,disabled:r,children:n,type:o="item"})=>{const{ref:i,isDragging:s,isDropping:a,handleRef:l}=Nd({id:e,type:o,index:t,disabled:r,data:{index:t},collisionDetector:Wd("y")});return n({isDragging:s,isDropping:a,ref:i,handleRef:l})};A();var fa=g.createContext({}),qd=()=>{const e=g.useContext(fa);return F(D({},e),{readOnlyFields:e.readOnlyFields||{}})},cj=({children:e,name:t,subName:r,wildcardName:n=t,readOnlyFields:o})=>{const i=`${t}.${r}`,s=`${n}.${r}`,a=g.useMemo(()=>Object.keys(o).reduce((l,c)=>{if(c.indexOf(i)>-1||c.indexOf(s)>-1){const d=new RegExp(`^(${t}|${n}).`.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\./g,"\\.").replace(/\*/g,"\\*")),f=c.replace(d,"");return F(D({},l),{[f]:o[c]})}return l},{}),[t,r,n,o]);return u.jsx(fa.Provider,{value:{readOnlyFields:a,localName:r},children:e})};A();var qa=(e,t)=>t.split(".").reduce((n,o)=>{if(!n)return;const[i,s]=o.replace("]","").split("["),a=n[i];return s&&a?a[parseInt(s)]:a},e);A();var uj=({field:e,id:t,index:r,name:n,subName:o,localName:i,onChange:s,forceReadOnly:a})=>{const l=typeof r<"u"?`${n}[${r}]`:n,c=n?`${l}.${o}`:o,p=typeof r<"u"?`${i}[${r}]`:i??o,d=typeof r<"u"?`${i}[*]`:i,f=`${p}.${o}`,h=`${d}.${o}`,{readOnlyFields:v}=qd(),m=a||(typeof v[c]<"u"?v[f]:v[h]),y=e.label||o;return u.jsx(cj,{name:p,wildcardName:d,subName:o,readOnlyFields:v,children:u.jsx(by,{name:c,label:y,id:t,readOnly:m,field:F(D({},e),{label:y}),onChange:(x,k)=>{s(x,k,o)}})})},my=g.memo(uj),Pl=ee("ArrayField",py),zr=ee("ArrayFieldItem",py),dj=({index:e,originalIndex:t,field:r,name:n})=>{const o=Bd(a=>{const l=`${[n]}[${e}]`;return qa(a,l)}),i=J("field-arrayitem-summary",{index:t});return g.useMemo(()=>o&&r.getItemSummary?r.getItemSummary(o,e):i,[o,r,t,e,i])},pj=g.memo(dj),fj=({id:e,arrayId:t,index:r,dragIndex:n,originalIndex:o,field:i,onChange:s,onToggleExpand:a,readOnly:l,actions:c,name:p,localName:d})=>{const f=H(m=>{var y;return((y=m.state.ui.arrayState[t])==null?void 0:y.openId)===e}),h=H(m=>m.permissions.getPermissions({item:m.selectedItem}).edit),v=g.useMemo(()=>i.arrayFields?Object.values(i.arrayFields).some(m=>m.type!=="slot"&&m.visible!==!1):!1,[i.arrayFields]);return u.jsx(lj,{id:e,index:n,disabled:l,children:({isDragging:m,ref:y,handleRef:x})=>u.jsxs("div",{ref:y,className:zr({isExpanded:f&&v,isDragging:m,noFields:!v}),children:[u.jsxs("div",{ref:x,onClick:k=>{m||(k.preventDefault(),k.stopPropagation(),v&&a(e,f))},className:zr("summary"),children:[u.jsx(pj,{index:r,originalIndex:o,field:i,name:p}),u.jsxs("div",{className:zr("rhs"),children:[!l&&u.jsx("div",{className:zr("actions"),children:c}),u.jsx("div",{children:u.jsx(fy,{})})]})]}),u.jsx("div",{className:zr("body"),children:f&&v&&u.jsx("fieldset",{className:zr("fieldset"),children:Object.keys(i.arrayFields).map(k=>{const b=i.arrayFields[k];return u.jsx(my,{id:`${e}_${k}`,name:p,index:r,subName:k,localName:d,field:b,onChange:s,forceReadOnly:!h},`${e}_${k}_${r}`)})})})]})})},hj=g.memo(fj),vj=({field:e,onChange:t,id:r,name:n=r,label:o,labelIcon:i,readOnly:s,Label:a=l=>u.jsx("div",D({},l))})=>{const l=H(N=>N.setUi),c=ye(),p=Va(),{localName:d=n}=qd(),f=()=>{var N;return(N=qa(p.getState(),n))!=null?N:[]},h=g.useCallback(()=>{var N;const{state:R}=c.getState(),q=R.ui.arrayState[r];if((N=q==null?void 0:q.items)!=null&&N.length)return q;const W=f();return{items:Array.from(W||[]).map(($,Z)=>({_originalIndex:Z,_currentIndex:Z,_arrayId:`${r}-${Z}`})),openId:""}},[c,r,f,n]),v=Bd(()=>f().length),m=g.useMemo(h,[h]),y=H(N=>{const R=N.state.ui.arrayState[r];return R??m}),x=ye(),k=g.useCallback(N=>{const R=x.getState().state;return{arrayState:F(D({},R.ui.arrayState),{[r]:D(D({},h()),N)})}},[x]),b=g.useCallback(()=>h().items.reduce((N,R)=>R._originalIndex>N?R._originalIndex:N,-1),[]),_=g.useCallback(N=>{let R=b();const q=h(),W=Array.from(N||[]).map(($,Z)=>{var oe,G,te;const be=q.items[Z],Q={_originalIndex:(oe=be==null?void 0:be._originalIndex)!=null?oe:R+1,_currentIndex:(G=be==null?void 0:be._currentIndex)!=null?G:Z,_arrayId:((te=q.items[Z])==null?void 0:te._arrayId)||`${r}-${R+1}`};return Q._originalIndex>R&&(R=Q._originalIndex),Q});return F(D({},q),{items:W})},[]),[S,w]=g.useState(""),j=!!S,C=g.useRef([]);g.useEffect(()=>{C.current=f()},[]);const I=g.useCallback(N=>{if(e.type!=="array"||!e.arrayFields)return;const R=x.getState().config;return su({value:N,fields:e.arrayFields,mappers:{slot:({value:q})=>q.map($=>au($,R,!0))},config:R})},[x,e]),E=g.useCallback(()=>{const N=h(),R=N.items.map(($,Z)=>F(D({},$),{_currentIndex:Z})),q=x.getState().state,W={arrayState:F(D({},q.ui.arrayState),{[r]:F(D({},N),{items:R})})};l(W,!1)},[]),z=g.useCallback(N=>{const R=_(N);l(k(R),!1),t(N)},[_,l,k,t]);g.useEffect(()=>{const N=_(f());l(k(N),!1)},[v]);const O=J("field-arrayitem-duplicate"),L=J("field-arrayitem-delete");if(e.type!=="array"||!e.arrayFields)return null;const B=e.max!==void 0&&(y==null?void 0:y.items.length)>=e.max||s;return u.jsx(a,{label:o||n,icon:i||u.jsx(Pa,{size:16}),el:"div",readOnly:s,children:u.jsx(aj,{onDragStart:N=>{C.current=f(),w(N),E()},onDragEnd:()=>{w(""),t(C.current);const N=p.getState();p.setState(Ha(N,n,C.current)),E()},onMove:N=>{const R=h();if(R.items[N.source]._arrayId!==S)return;const q=Gp(C.current,N.source,N.target),W=Gp(R.items,N.source,N.target),$=x.getState().state,Z={arrayState:F(D({},$.ui.arrayState),{[r]:F(D({},R),{items:W})})};l(Z,!1),C.current=q},children:u.jsxs("div",{className:Pl({hasItems:v>0,addDisabled:B}),children:[y.items.length>0&&u.jsx("div",{className:Pl("inner"),"data-dnd-container":!0,children:y.items.map((N,R)=>{const{_arrayId:q=`${r}-${R}`,_originalIndex:W=R,_currentIndex:$=R}=N;return u.jsx(hj,{index:$,dragIndex:R,originalIndex:W,arrayId:r,id:q,readOnly:s,field:e,name:n,localName:d,onChange:(Z,oe,G)=>{const te=f(),be=Array.from(te||[])[R]||{};t(nS(te,R,F(D({},be),{[G]:Z})),oe)},onToggleExpand:(Z,oe)=>{l(k(oe?{openId:""}:{openId:Z}))},actions:u.jsxs(u.Fragment,{children:[u.jsx("div",{className:zr("action"),children:u.jsx(Xe,{type:"button",disabled:!!B,onClick:Z=>{Z.stopPropagation();const G=[...f()||[]],te=I(G[R]);G.splice(R,0,te),z(G)},title:O,children:u.jsx(ju,{size:16})})}),u.jsx("div",{className:zr("action"),children:u.jsx(Xe,{type:"button",disabled:e.min!==void 0&&e.min>=y.items.length,onClick:Z=>{Z.stopPropagation();const G=[...f()||[]];G.splice(R,1),z(G)},title:L,children:u.jsx(Pu,{size:16})})})]})},q)})}),!B&&u.jsx("button",{type:"button",className:Pl("addButton"),onClick:()=>{var N;if(j)return;const q=f()||[],W=typeof e.defaultItemProps=="function"?e.defaultItemProps(q.length):(N=e.defaultItemProps)!=null?N:{},$=Ph(I(W),e.arrayFields),Z=[...q,$];z(Z)},children:u.jsx(Pw,{size:21})})]})})})};A();A();A();var Yi=(e,t=!0)=>Bd(r=>t?qa(r,e):void 0);A();var gj=e=>H(t=>t.state.ui.field.focus===e),Ud=(e,t,{tracked:r=!0,fallback:n}={})=>{const o=Yi(e,r),i=gj(e),[s,a]=g.useState(o),l=g.useCallback((c,...p)=>{a(c),t(c,...p)},[t]);return g.useEffect(()=>{r&&(i||a(o))},[r,i,o]),r?[typeof n<"u"&&s==null?n:s,l]:[void 0,t]},mj=ee("Input",In),Uf=({field:e,onChange:t,readOnly:r,id:n,name:o=n,label:i,labelIcon:s,Label:a})=>{const[l,c]=Ud(o,t,{fallback:""});return u.jsx(a,{label:i||o,icon:s||u.jsxs(u.Fragment,{children:[e.type==="text"&&u.jsx(Aa,{size:16}),e.type==="number"&&u.jsx(fw,{size:16})]}),readOnly:r,children:u.jsx("input",{className:mj("input"),autoComplete:"off",type:e.type,title:i||o,name:o,value:l,onChange:p=>{if(e.type==="number"){const d=Number(p.currentTarget.value);if(typeof e.min<"u"&&d<e.min||typeof e.max<"u"&&d>e.max)return;c(d)}else c(p.currentTarget.value)},readOnly:r,tabIndex:r?-1:void 0,id:n,min:e.type==="number"?e.min:void 0,max:e.type==="number"?e.max:void 0,placeholder:e.type==="text"||e.type==="number"?e.placeholder:void 0,step:e.type==="number"?e.step:void 0})})};A();A();A();var _y={"ExternalInput-actions":"_ExternalInput-actions_143vl_1","ExternalInput-button":"_ExternalInput-button_143vl_5","ExternalInput--dataSelected":"_ExternalInput--dataSelected_143vl_34","ExternalInput--readOnly":"_ExternalInput--readOnly_143vl_41","ExternalInput-detachButton":"_ExternalInput-detachButton_143vl_48",ExternalInput:"_ExternalInput_143vl_1",ExternalInputModal:"_ExternalInputModal_143vl_118","ExternalInputModal-grid":"_ExternalInputModal-grid_143vl_128","ExternalInputModal--filtersToggled":"_ExternalInputModal--filtersToggled_143vl_139","ExternalInputModal-filters":"_ExternalInputModal-filters_143vl_144","ExternalInputModal-masthead":"_ExternalInputModal-masthead_143vl_164","ExternalInputModal-tableWrapper":"_ExternalInputModal-tableWrapper_143vl_173","ExternalInputModal-table":"_ExternalInputModal-table_143vl_173","ExternalInputModal-thead":"_ExternalInputModal-thead_143vl_189","ExternalInputModal-th":"_ExternalInputModal-th_143vl_189","ExternalInputModal-td":"_ExternalInputModal-td_143vl_204","ExternalInputModal-tr":"_ExternalInputModal-tr_143vl_210","ExternalInputModal-tbody":"_ExternalInputModal-tbody_143vl_217","ExternalInputModal--hasData":"_ExternalInputModal--hasData_143vl_244","ExternalInputModal-loadingBanner":"_ExternalInputModal-loadingBanner_143vl_248","ExternalInputModal--isLoading":"_ExternalInputModal--isLoading_143vl_265","ExternalInputModal-searchForm":"_ExternalInputModal-searchForm_143vl_269","ExternalInputModal-search":"_ExternalInputModal-search_143vl_269","ExternalInputModal-searchIcon":"_ExternalInputModal-searchIcon_143vl_306","ExternalInputModal-searchIconText":"_ExternalInputModal-searchIconText_143vl_333","ExternalInputModal-searchInput":"_ExternalInputModal-searchInput_143vl_343","ExternalInputModal-searchActions":"_ExternalInputModal-searchActions_143vl_358","ExternalInputModal-searchActionIcon":"_ExternalInputModal-searchActionIcon_143vl_371","ExternalInputModal-footerContainer":"_ExternalInputModal-footerContainer_143vl_375","ExternalInputModal-footer":"_ExternalInputModal-footer_143vl_375","ExternalInputModal-field":"_ExternalInputModal-field_143vl_388"};A();A();var _j={Modal:"_Modal_g5xob_1","Modal--isOpen":"_Modal--isOpen_g5xob_15","Modal-inner":"_Modal-inner_g5xob_19"},Zf=ee("Modal",_j),yj=({children:e,onClose:t,isOpen:r})=>{const[n,o]=g.useState(null);return g.useEffect(()=>{o(document.getElementById("puck-portal-root"))},[]),n?Ur.createPortal(u.jsx("div",{className:Zf({isOpen:r}),onClick:t,children:u.jsx("div",{className:Zf("inner"),onClick:i=>i.stopPropagation(),children:e})}),n):u.jsx("div",{})};A();A();var bj={Heading:"_Heading_97eh4_1","Heading--xxxxl":"_Heading--xxxxl_97eh4_12","Heading--xxxl":"_Heading--xxxl_97eh4_18","Heading--xxl":"_Heading--xxl_97eh4_22","Heading--xl":"_Heading--xl_97eh4_26","Heading--l":"_Heading--l_97eh4_30","Heading--m":"_Heading--m_97eh4_34","Heading--s":"_Heading--s_97eh4_38","Heading--xs":"_Heading--xs_97eh4_42"},xj=ee("Heading",bj),Ua=({children:e,rank:t,size:r="m"})=>{const n=t?`h${t}`:"span";return u.jsx(n,{className:xj({[r]:!0}),children:e})};A();var _s=ee("ExternalInput",_y),je=ee("ExternalInputModal",_y),kj=({count:e})=>{const t=J("field-external-result-singular",{count:e}),r=J("field-external-result-plural",{count:e});return u.jsx("span",{className:je("footer"),children:e===1?t:r})},Al={},wj=({field:e,onChange:t,value:r=null,name:n,id:o,readOnly:i})=>{var s;const{mapProp:a=R=>R,mapRow:l=R=>R,filterFields:c}=e||{},{enabled:p}=(s=e.cache)!=null?s:{enabled:!0},[d,f]=g.useState([]),[h,v]=g.useState(!1),[m,y]=g.useState(!0),x=!!c,[k,b]=g.useState(e.initialFilters||{}),[_,S]=g.useState(x),w=g.useMemo(()=>d.map(l),[d]),j=g.useMemo(()=>{const R=new Set;for(const q of w)for(const W of Object.keys(q))(typeof q[W]=="string"||typeof q[W]=="number"||g.isValidElement(q[W]))&&R.add(W);return Array.from(R)},[w]),[C,I]=g.useState(e.initialQuery||""),E=g.useCallback((R,q)=>Se(null,null,function*(){y(!0);const W=`${o}-${R}-${JSON.stringify(q)}`;let $;p&&Al[W]?$=Al[W]:$=yield e.fetchList({query:R,filters:q}),$&&(f($),y(!1),p&&(Al[W]=$))}),[o,e]),z=g.useCallback(R=>e.renderFooter?e.renderFooter(R):u.jsx(kj,{count:R.items.length}),[e.renderFooter]);g.useEffect(()=>{E(C,k)},[]);const O=J("field-external-item"),L=J("field-external-search"),B=J("field-external-togglefilters"),N=J("field-external-selectdata");return u.jsxs("div",{className:_s({dataSelected:!!r,modalVisible:h,readOnly:i}),id:o,children:[u.jsxs("div",{className:_s("actions"),children:[u.jsx("button",{type:"button",onClick:()=>v(!0),className:_s("button"),disabled:i,children:r?e.getItemSummary?e.getItemSummary(r):O:u.jsxs(u.Fragment,{children:[u.jsx(ag,{size:"16"}),u.jsx("span",{children:e.placeholder})]})}),r&&u.jsx("button",{type:"button",className:_s("detachButton"),onClick:()=>{t(null)},disabled:i,children:u.jsx(kw,{size:16})})]}),u.jsx(yj,{onClose:()=>v(!1),isOpen:h,children:u.jsxs("form",{className:je({isLoading:m,loaded:!m,hasData:w.length>0,filtersToggled:_}),onSubmit:R=>{R.preventDefault(),R.stopPropagation(),E(C,k)},children:[u.jsx("div",{className:je("masthead"),children:e.showSearch?u.jsxs("div",{className:je("searchForm"),children:[u.jsxs("label",{className:je("search"),children:[u.jsx("span",{className:je("searchIconText"),children:L}),u.jsx("div",{className:je("searchIcon"),children:u.jsx(Dw,{size:"18"})}),u.jsx("input",{className:je("searchInput"),name:"q",type:"search",placeholder:e.placeholder,onChange:R=>{I(R.currentTarget.value)},autoComplete:"off",value:C})]}),u.jsxs("div",{className:je("searchActions"),children:[u.jsx(Wc,{type:"submit",loading:m,fullWidth:!0,children:L}),x&&u.jsx("div",{className:je("searchActionIcon"),children:u.jsx(Xe,{type:"button",title:B,onClick:R=>{R.preventDefault(),R.stopPropagation(),S(!_)},children:u.jsx(Mw,{size:20})})})]})]}):u.jsx(Ua,{rank:"2",size:"xs",children:e.placeholder||N})}),u.jsxs("div",{className:je("grid"),children:[x&&u.jsx("div",{className:je("filters"),children:x&&Object.keys(c).map(R=>{const q=c[R];return u.jsx("div",{className:je("field"),children:u.jsx(dy,{label:q.label||R,children:u.jsx(Tj,{field:q,id:`external_field_${R}_filter`,value:k[R],onChange:W=>{b($=>{const Z=F(D({},$),{[R]:W});return E(C,Z),Z})}})})},R)})}),u.jsxs("div",{className:je("tableWrapper"),children:[u.jsxs("table",{className:je("table"),children:[u.jsx("thead",{className:je("thead"),children:u.jsx("tr",{className:je("tr"),children:j.map(R=>u.jsx("th",{className:je("th"),style:{textAlign:"left"},children:R},R))})}),u.jsx("tbody",{className:je("tbody"),children:w.map((R,q)=>u.jsx("tr",{style:{whiteSpace:"nowrap"},className:je("tr"),onClick:()=>{t(a(d[q])),v(!1)},children:j.map(W=>u.jsx("td",{className:je("td"),children:R[W]},W))},q))})]}),u.jsx("div",{className:je("loadingBanner"),children:u.jsx(kn,{size:24})})]})]}),u.jsx("div",{className:je("footerContainer"),children:u.jsx(z,{items:w})})]})})]})},Sj=({field:e,onChange:t,id:r,name:n=r,label:o,labelIcon:i,Label:s,readOnly:a})=>{var l,c,p;const d=Yi(n),f=e,h=e,v=J("field-external-selectdata");return g.useEffect(()=>{h.adaptor&&console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.")},[]),e.type!=="external"?null:u.jsx(s,{label:o||n,icon:i||u.jsx(ag,{size:16}),el:"div",children:u.jsx(wj,{name:n,field:F(D({},f),{placeholder:(l=h.adaptor)!=null&&l.name?`Select from ${h.adaptor.name}`:f.placeholder||v,mapProp:((c=h.adaptor)==null?void 0:c.mapProp)||f.mapProp,mapRow:f.mapRow,fetchList:(p=h.adaptor)!=null&&p.fetchList?()=>Se(null,null,function*(){return yield h.adaptor.fetchList(h.adaptorParams)}):f.fetchList}),onChange:t,value:d,id:r,readOnly:a})})};A();var ys=ee("Input",In),Ej=({field:e,onChange:t,readOnly:r,id:n,name:o=n,label:i,labelIcon:s,Label:a})=>{const l=Yi(o);return e.type!=="radio"||!e.options?null:u.jsx(a,{icon:s||u.jsx(aw,{size:16}),label:i||o,readOnly:r,el:"div",children:u.jsx("div",{className:ys("radioGroupItems"),id:n,children:e.options.map(c=>{var p;return u.jsxs("label",{className:ys("radio"),children:[u.jsx("input",{type:"radio",className:ys("radioInput"),value:JSON.stringify({value:c.value}),name:o,onChange:d=>{t(JSON.parse(d.target.value).value)},disabled:r,checked:l===c.value}),u.jsx("div",{className:ys("radioInner"),children:c.label||((p=c.value)==null?void 0:p.toString())})]},c.label+c.value)})})})};A();var zl=ee("Input",In),Cj=({field:e,onChange:t,label:r,labelIcon:n,Label:o,id:i,name:s=i,readOnly:a})=>{const l=Yi(s);return e.type!=="select"||!e.options?null:u.jsx(o,{label:r||s,icon:n||u.jsx(wi,{size:16}),readOnly:a,children:u.jsxs("div",{className:zl("select"),children:[u.jsx("select",{id:i,title:r||s,className:zl("input"),disabled:a,onChange:c=>{t(JSON.parse(c.target.value).value)},value:JSON.stringify({value:l}),children:e.options.map(c=>u.jsx("option",{label:c.label,value:JSON.stringify({value:c.value})},c.label+JSON.stringify(c.value)))}),u.jsx(wi,{size:18,className:zl("selectIcon")})]})})};A();var Ij=ee("Input",In),jj=({field:e,onChange:t,readOnly:r,id:n,name:o=n,label:i,labelIcon:s,Label:a})=>{const[l,c]=Ud(o,t,{fallback:""});return u.jsx(a,{label:i||o,icon:s||u.jsx(Aa,{size:16}),readOnly:r,children:u.jsx("textarea",{id:n,className:Ij("input"),autoComplete:"off",name:o,value:l,onChange:p=>c(p.currentTarget.value),readOnly:r,tabIndex:r?-1:void 0,rows:5,placeholder:e.type==="textarea"?e.placeholder:void 0})})};A();A();var Zd=g.memo(e=>{var t;return u.jsx(wg,F(D({},e),{editor:null,menu:u.jsx(kg,{field:e.field,editor:null,editorState:null,readOnly:(t=e.readOnly)!=null?t:!1}),children:u.jsx("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:e.content},contentEditable:!0})}))});Zd.displayName="EditorFallback";var Pj=g.lazy(()=>Zr(()=>import("./Editor-44C53YAG-CLtzia7E.js"),__vite__mapDeps([12,11,4,2,3,1,5,6])).then(e=>({default:e.Editor}))),Aj=({onChange:e,readOnly:t=!1,id:r,name:n=r,label:o,labelIcon:i,Label:s,field:a})=>{const l=Yi(n),c={onChange:e,content:l,readOnly:t,field:a,id:r,name:n};return u.jsx(u.Fragment,{children:u.jsx(s,{label:o||n,icon:i||u.jsx(Aa,{size:16}),readOnly:t,el:"div",children:u.jsx(g.Suspense,{fallback:u.jsx(Zd,D({},c)),children:u.jsx(Pj,D({},c))})})})};A();A();var zj={ObjectField:"_ObjectField_c5reb_1","ObjectField-fieldset":"_ObjectField-fieldset_c5reb_10"},Yf=ee("ObjectField",zj),Oj=({field:e,onChange:t,id:r,name:n=r,label:o,labelIcon:i,Label:s,readOnly:a})=>{const{localName:l=n}=qd(),c=Va(),p=H(f=>f.permissions.getPermissions({item:f.selectedItem}).edit),d=()=>{var f;return(f=qa(c.getState(),n))!=null?f:{}};return e.type!=="object"||!e.objectFields?null:u.jsx(s,{label:o||n,icon:i||u.jsx(uw,{size:16}),el:"div",readOnly:a,children:u.jsx("div",{className:Yf(),children:u.jsx("fieldset",{className:Yf("fieldset"),children:Object.keys(e.objectFields).map(f=>{const h=e.objectFields[f],v=`${l}.${f}`;return u.jsx(my,{id:`${r}_${f}`,name:n,subName:f,localName:l,field:h,forceReadOnly:!p,onChange:(m,y,x)=>{const k=d();k[x]!==m&&t(F(D({},k),{[x]:m}),y)}},v)})})})})};A();var Za=()=>{if(typeof fn.useId<"u")return fn.useId();const[e]=g.useState(pt());return e},Dj=ee("Input",In),Mj=ee("InputWrapper",In),qt={array:vj,external:Sj,object:Oj,select:Cj,textarea:jj,radio:Ej,text:Uf,number:Uf,richtext:Aj};function yy(e){var t,r,n;const o=H(L=>L.dispatch),i=H(L=>L.overrides),s=H($e(L=>{var B;return(B=L.selectedItem)==null?void 0:B.readOnly})),a=g.useContext(fa),{id:l,Label:c=XI}=e,p=e.field,d=p.label,f=p.labelIcon,h=Za(),v=l||h,m=g.useMemo(()=>{var L,B,N,R,q,W,$,Z,oe,G;return F(D({},i.fieldTypes),{custom:(L=i.fieldTypes)==null?void 0:L.custom,array:((B=i.fieldTypes)==null?void 0:B.array)||qt.array,external:((N=i.fieldTypes)==null?void 0:N.external)||qt.external,object:((R=i.fieldTypes)==null?void 0:R.object)||qt.object,select:((q=i.fieldTypes)==null?void 0:q.select)||qt.select,textarea:((W=i.fieldTypes)==null?void 0:W.textarea)||qt.textarea,radio:(($=i.fieldTypes)==null?void 0:$.radio)||qt.radio,text:((Z=i.fieldTypes)==null?void 0:Z.text)||qt.text,number:((oe=i.fieldTypes)==null?void 0:oe.number)||qt.number,richtext:((G=i.fieldTypes)==null?void 0:G.richtext)||qt.richtext})},[i]),y=p.type==="custom"||!!((t=i.fieldTypes)!=null&&t[p.type]),x=(r=e.name)!=null?r:v,k=Va(),b=g.useMemo(()=>y?(L,B)=>{var N;(N=e.onChange)==null||N.call(e,L,B),k.setState(Ha(k.getState(),x,L))}:e.onChange,[y,e.onChange,x,k]),[_,S]=Ud(x,b,{tracked:y}),w=g.useMemo(()=>F(D({},e),{field:p,label:d,labelIcon:f,Label:c,id:v,value:_,onChange:S}),[e,p,d,f,c,v,_,S]),j=g.useCallback(L=>{w.name&&(L.target.nodeName==="INPUT"||L.target.nodeName==="TEXTAREA")&&(L.stopPropagation(),o({type:"setUi",ui:{field:{focus:w.name}}}))},[w.name]),C=g.useCallback(L=>{"name"in L.target&&o({type:"setUi",ui:{field:{focus:null}}})},[]);let I=g.useMemo(()=>p.type!=="custom"&&p.type!=="slot"?qt[p.type]:L=>null,[p.type]);const E=p.type==="custom"?p.key:void 0;let z=g.useMemo(()=>{if(p.type==="custom"&&!m[p.type])return p.render?p.render:null;if(p.type!=="slot")return m[p.type]},[p.type,E,m]);const{visible:O=!0}=e.field;if(!O||p.type==="slot")return null;if(!z)throw new Error(`Field type for ${p.type} did not exist.`);return u.jsx(fa.Provider,{value:{readOnlyFields:a.readOnlyFields||s||{},localName:(n=a.localName)!=null?n:w.name},children:u.jsx("div",{className:Mj(),onFocus:j,onBlur:C,onClick:L=>{L.stopPropagation()},children:u.jsx(z,F(D({},w),{children:u.jsx(I,D({},w))}))})})}function by(e){return u.jsx(yy,D({},e))}function Rj(e){var t=e,{value:r}=t,n=Bt(t,["value"]);const o=g.useMemo(()=>l=>u.jsx("div",F(D({},l),{className:Dj({readOnly:n.readOnly})})),[n.readOnly]),i=Va(),s=g.useCallback(a=>{n.id&&(i.setState({[n.id]:a}),n.onChange(a))},[i,n.onChange,n.id]);return g.useEffect(()=>{n.id&&i.setState({[n.id]:r})},[n.id,r,i]),u.jsx(yy,F(D({},n),{onChange:s,Label:o}))}function Tj(e){const t=Za();return e.field.type==="slot"?null:u.jsx(Zi.Provider,{value:{[t]:e.value},children:u.jsx(Rj,F(D({},e),{id:t}))})}A();A();A();A();var Lj={DraggableComponent:"_DraggableComponent_1627v_1","DraggableComponent-overlayWrapper":"_DraggableComponent-overlayWrapper_1627v_6","DraggableComponent-overlay":"_DraggableComponent-overlay_1627v_6","DraggableComponent-loadingOverlay":"_DraggableComponent-loadingOverlay_1627v_38","DraggableComponent--hover":"_DraggableComponent--hover_1627v_54","DraggableComponent--isSelected":"_DraggableComponent--isSelected_1627v_72","DraggableComponent-actionsOverlay":"_DraggableComponent-actionsOverlay_1627v_89","DraggableComponent-actions":"_DraggableComponent-actions_1627v_89","DraggableComponent-actionsAction":"_DraggableComponent-actionsAction_1627v_111"};A();function Gf(e){let t={x:0,y:0},r=e;for(;r&&r!==document.documentElement;){const n=r.parentElement;n&&(t.x+=n.scrollLeft,t.y+=n.scrollTop),r=n}return t}A();var zo=g.createContext(null),Ve=g.createContext(Gr(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:()=>{},unregisterRootVirtualizer:()=>{},scrollToComponent:()=>!1}))),Nj=({children:e,store:t})=>u.jsx(Ve.Provider,{value:t,children:e}),Oi=({children:e,value:t})=>{const r=H(i=>i.dispatch),n=g.useCallback(i=>{r({type:"registerZone",zone:i})},[r]),o=g.useMemo(()=>D({registerZone:n},t),[t]);return u.jsx(u.Fragment,{children:o&&u.jsx(zo.Provider,{value:o,children:e})})};A();var xy=(e,t=[])=>{const r=ye();return g.useCallback(()=>{let n=()=>{};const o=s=>{s?e(!1):(setTimeout(()=>{e(!0)},0),n&&n())},i=r.getState().state.ui.isDragging;return o(i),i&&(n=r.subscribe(s=>s.state.ui.isDragging,s=>{o(s)})),n},[r,...t])};A();A();A();var _t=()=>{if(typeof window>"u")return;let e=document.querySelector("#preview-frame");return(e==null?void 0:e.tagName)==="IFRAME"?e.contentDocument||document:(e==null?void 0:e.ownerDocument)||document};A();A();var ky=e=>typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e,fo=e=>`[data-puck-component="${ky(e)}"]`,Di=e=>`[data-puck-dropzone="${ky(e)}"]`,Yd={duration:250,easing:"ease"},Fj=10,Gd=e=>{var t,r;return(r=(t=e.defaultView)==null?void 0:t.matchMedia("(prefers-reduced-motion: reduce)").matches)!=null?r:!1},wy=(e,{zones:t,itemId:r,targetZone:n,getExpectedOrder:o,initialExpectedOrder:i=[]},s)=>{const a=new Set(i);let l=0;const c=()=>{var p;const d=e.querySelector(Di(n)),f=o(),h=r??f.find(_=>!a.has(_)),v=h&&(p=d==null?void 0:d.querySelector(`:scope > ${fo(h)}:not([data-dnd-dragging]):not([data-dnd-placeholder])`))!=null?p:null,m=d?Array.from(d.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(_=>_.getAttribute("data-puck-component")):[],y=new Set(m),x=f.filter(_=>y.has(_)),k=m.length===x.length&&m.every((_,S)=>_===x[S]),b=t.every(_=>_===n||!h||!e.querySelector(`${Di(_)} > ${fo(h)}`));if((!v||!k||!b)&&l<Fj){l++,requestAnimationFrame(c);return}s(v)};requestAnimationFrame(c)},Bj=(e,t)=>{var r,n;const o={x:0,y:0,scaleX:1,scaleY:1};let i=(r=e.ownerDocument.defaultView)==null?void 0:r.frameElement;for(;i&&i!==t;){const s=i.getBoundingClientRect(),a=i.offsetWidth?s.width/i.offsetWidth:1,l=i.offsetHeight?s.height/i.offsetHeight:1;o.x+=s.left,o.y+=s.top,o.scaleX*=a,o.scaleY*=l,i=(n=i.ownerDocument.defaultView)==null?void 0:n.frameElement}return o},$j=(e,t)=>{var r,n;const o=e.getBoundingClientRect();if(e.ownerDocument===t)return o;const i=Bj(e,(n=(r=t.defaultView)==null?void 0:r.frameElement)!=null?n:null);return{left:o.left*i.scaleX+i.x,top:o.top*i.scaleY+i.y,width:o.width*i.scaleX,height:o.height*i.scaleY}},Wj=({element:e,feedbackElement:t,placeholder:r,translate:n})=>{var o;if(Gd(t.ownerDocument))return;const i=r??e,a={frameTransform:t.ownerDocument===i.ownerDocument?null:void 0},l=new Pt(t,a),c=new Pt(i,a),p=(o=co(Wt(t).translate))!=null?o:n,d={x:p.x-(l.center.x-c.center.x),y:p.y-(l.center.y-c.center.y)};return t.setAttribute("data-dnd-dropping",""),t.animate({translate:[`${p.x}px ${p.y}px 0`,`${d.x}px ${d.y}px 0`]},Yd).finished.catch(()=>{}).then(()=>{t.removeAttribute("data-dnd-dropping")})},Hj=({feedbackElement:e,itemId:t,targetZone:r,getExpectedOrder:n})=>{var o;const i=e.ownerDocument,s=(o=_t())!=null?o:i;if(Gd(i))return;const a=e.getBoundingClientRect(),l=n(),c=e.cloneNode(!0);c.removeAttribute("id"),c.removeAttribute("popover"),c.removeAttribute("data-puck-component"),c.removeAttribute("data-puck-dnd"),c.removeAttribute("data-dnd-dragging"),c.setAttribute("inert","true"),Object.assign(c.style,{position:"fixed",left:`${a.left}px`,top:`${a.top}px`,width:`${a.width}px`,height:`${a.height}px`,margin:"0",overflow:"hidden",pointerEvents:"none",transform:"none",transition:"none",translate:"none",zIndex:"2147483647"});const p=s.createElement("style");p.textContent=`
    ${t?`${fo(t)} { visibility: hidden !important; }`:""}
    [data-puck-overlay] { opacity: 0 !important; }
  `,s.head.appendChild(p),i.body.appendChild(c);const d=()=>{c.remove(),p.remove()};wy(s,{zones:[r],itemId:t,targetZone:r,getExpectedOrder:n,initialExpectedOrder:l},f=>{if(!f){d();return}const h=f.getAttribute("data-puck-component");!t&&h&&(p.textContent+=`
          ${fo(h)} { visibility: hidden !important; }
        `);const v=$j(f,i);c.animate({left:[`${a.left}px`,`${v.left}px`],top:[`${a.top}px`,`${v.top}px`],width:[`${a.width}px`,`${v.width}px`],height:[`${a.height}px`,`${v.height}px`]},F(D({},Yd),{fill:"forwards"})).finished.catch(()=>{}).then(d)})},Vj=(e,t)=>{var r,n,o;const i=(r=e.source.manager)==null?void 0:r.dragOperation;if(!(((n=i==null?void 0:i.canceled)!=null?n:!1)||((o=i==null?void 0:i.target)==null?void 0:o.type)==="void")&&t){Hj(F(D({},t),{feedbackElement:e.feedbackElement}));return}return Wj(e)};A();var ha=(e,t)=>{var r,n;return(n=(r=e.indexes.zones[t])==null?void 0:r.contentIds)!=null?n:[]},Sy=(e,t)=>{const r=ye();return g.useCallback(n=>{var o;const i=Object.values((o=e.getState().previewIndex)!=null?o:{}),s=t?i.find(l=>(l==null?void 0:l.props.id)===t&&!l.ghost):i.find(l=>(l==null?void 0:l.type)==="insert"),a=t?(s==null?void 0:s.linePlaceholder)||(s==null?void 0:s.type)==="insert":!!s;return Vj(n,s&&a?{itemId:s.type==="move"?t:void 0,targetZone:s.zone,getExpectedOrder:()=>ha(r.getState().state,s.zone)}:void 0)},[r,e,t])};A();function qj(e,t){typeof e=="function"?e(t):e&&typeof e=="object"&&"current"in e&&(e.current=t)}function Vc(e,t){e.forEach(r=>{qj(r,t)})}var Cr=ee("DraggableComponent",Lj),Uj=100,Ey=8,Zj=Ey*6.5,Yj=-44,Kf=Ey,Gj=({label:e,children:t,parentAction:r})=>u.jsxs(gt,{children:[u.jsxs(gt.Group,{children:[r,e&&u.jsx(gt.Label,{label:e})]}),u.jsx(gt.Group,{children:t})]}),Kj=({children:e})=>u.jsx(u.Fragment,{children:e}),Xj=({children:e,depth:t,componentType:r,id:n,index:o,zoneCompound:i,isLoading:s=!1,isSelected:a=!1,debug:l,label:c,autoDragAxis:p,userDragAxis:d,inDroppableZone:f=!0,itemRef:h})=>{const v=H(K=>{var se;return((se=K.selectedItem)==null?void 0:se.props.id)===n?K.zoomConfig.zoom:1}),m=H(K=>K._experimentalFullScreenCanvas),y=H(K=>K.overrides),x=H(K=>K.dispatch),k=H(K=>K.iframe),b=g.useRef(0),_=g.useContext(zo),[S,w]=g.useState({}),j=g.useCallback((K,se)=>{var ae;(ae=_==null?void 0:_.registerLocalZone)==null||ae.call(_,K,se),w(Ce=>F(D({},Ce),{[K]:se}))},[w]),C=g.useCallback(K=>{var se;(se=_==null?void 0:_.unregisterLocalZone)==null||se.call(_,K),w(ae=>{const Ce=D({},ae);return delete Ce[K],Ce})},[w]),I=Object.values(S).filter(Boolean).length>0,E=H($e(K=>{var se;return(se=K.state.indexes.nodes[n])==null?void 0:se.path})),z=H($e(K=>{const se=rt({index:o,zone:i},K.state);return K.permissions.getPermissions({item:se})})),O=g.useContext(Ve),L=ye(),[B,N]=g.useState(d||p),R=g.useMemo(()=>Wd(B),[B]),q=Sy(O,n),{ref:W,isDragging:$,sortable:Z}=Nd({id:n,index:o,group:i,type:"component",data:{areaId:_==null?void 0:_.areaId,zone:i,index:o,componentType:r,containsActiveZone:I,depth:t,path:E||[],inDroppableZone:f},collisionPriority:t,collisionDetector:R,transition:{duration:200,easing:"cubic-bezier(0.2, 0, 0, 1)"},plugins:K=>[...K,Wi.configure({feedback:"clone",dropAnimation:q})]});g.useEffect(()=>{const K=O.getState().enabledIndex[i];Z.droppable.disabled=!K,Z.draggable.disabled=!z.drag;const se=O.subscribe(ae=>{Z.droppable.disabled=!ae.enabledIndex[i]});return G.current&&!z.drag?(G.current.setAttribute("data-puck-disabled",""),()=>{var ae;(ae=G.current)==null||ae.removeAttribute("data-puck-disabled"),se()}):se},[z.drag,i]);const[,oe]=g.useState(0),G=g.useRef(null),te=g.useCallback(K=>{W(K),G.current!==K&&(G.current=K,oe(se=>se+1),h&&Vc([h],K))},[h,W]),[be,Q]=g.useState();g.useEffect(()=>{var K,se,ae;Q(k.enabled?(K=G.current)==null?void 0:K.ownerDocument.body:(ae=(se=G.current)==null?void 0:se.closest("[data-puck-preview]"))!=null?ae:document.body)},[k.enabled]);const ie=g.useCallback(()=>{var K,se;if(!G.current)return;const ae=G.current,Ce=ae.getBoundingClientRect(),Ue=k.enabled?null:ae.closest("[data-puck-preview]"),ct=(()=>{let On=ae;for(;On&&On!==document.documentElement;){if(getComputedStyle(On).position==="fixed")return!0;On=On.parentElement}return!1})(),nt=Ue==null?void 0:Ue.getBoundingClientRect(),Sr=Ue?Gf(Ue):{x:0,y:0},Dt=ct?{x:0,y:0}:Gf(ae),Er=ct?{x:0,y:0}:{x:Dt.x-Sr.x-((K=nt==null?void 0:nt.left)!=null?K:0),y:Dt.y-Sr.y-((se=nt==null?void 0:nt.top)!=null?se:0)};return{left:`${Ce.left+Er.x}px`,top:`${Ce.top+Er.y}px`,height:`${Ce.height}px`,width:`${Ce.width}px`,position:ct?"fixed":void 0}},[k.enabled]),[ke,Y]=g.useState(),P=g.useRef(null),M=g.useRef(null),T=g.useCallback(()=>{Y(ie()),h&&Vc([h],G.current)},[ie,h]),U=g.useCallback(()=>{M.current==null&&(M.current=requestAnimationFrame(()=>{M.current=null,T()}))},[T]);g.useEffect(()=>()=>{M.current!=null&&(cancelAnimationFrame(M.current),M.current=null)},[]),g.useEffect(()=>{if(G.current){const K=new ResizeObserver(()=>{U()});return K.observe(G.current),()=>{K.disconnect()}}},[U,h]);const V=H(K=>K.nodes.registerNode),X=H(K=>K.nodes.unregisterNode),ne=g.useCallback(()=>{kr(!1)},[]),ue=g.useCallback(()=>{kr(!0)},[]),ve=g.useRef({sync:()=>null,hideOverlay:()=>null,showOverlay:()=>null});g.useLayoutEffect(()=>{ve.current.sync=T,ve.current.hideOverlay=ne,ve.current.showOverlay=ue},[ne,ue,T]),g.useEffect(()=>(V(n,ve.current),()=>{X(n)}),[n,V,X]);const We=g.useMemo(()=>y.actionBar||Gj,[y.actionBar]),ze=g.useMemo(()=>y.componentOverlay||Kj,[y.componentOverlay]),Ee=g.useCallback(K=>{if(!!O.getState().draggedItem)return;K.target.closest("[data-puck-overlay-portal]")||K.stopPropagation(),x(m?{type:"setUi",ui:{itemSelector:a?null:{index:o,zone:i}}}:{type:"setUi",ui:{itemSelector:{index:o,zone:i}}})},[o,i,n,a,m]),we=g.useCallback(()=>{const{nodes:K,zones:se}=L.getState().state.indexes,ae=K[n],Ce=ae!=null&&ae.parentId?K[ae==null?void 0:ae.parentId]:null;if(!Ce||!ae.parentId)return;const Ue=`${Ce.parentId}:${Ce.zone}`,ct=se[Ue].contentIds.indexOf(ae.parentId);x({type:"setUi",ui:{itemSelector:{zone:Ue,index:ct}}})},[_,E]),he=g.useCallback(()=>{x({type:"duplicate",sourceIndex:o,sourceZone:i})},[o,i]),Ot=g.useCallback(()=>{x({type:"remove",index:o,zone:i})},[o,i]),[or,jn]=g.useState(!1),Pn=Jt(Ve,K=>K.hoveringComponent===n);g.useEffect(()=>{if(!G.current)return;const K=G.current,se=Ce=>{const Ue=!!O.getState().draggedItem;jn(Ue?!!$:!0),Ce.stopPropagation()},ae=Ce=>{Ce.stopPropagation(),jn(!1)};return K.setAttribute("data-puck-component",n),K.setAttribute("data-puck-dnd",n),K.style.position="relative",K.addEventListener("click",Ee),K.addEventListener("mouseover",se),K.addEventListener("mouseout",ae),()=>{K.removeAttribute("data-puck-component"),K.removeAttribute("data-puck-dnd"),K.removeEventListener("click",Ee),K.removeEventListener("mouseover",se),K.removeEventListener("mouseout",ae)}},[G.current,Ee,I,i,n,$,f]);const[ir,kr]=g.useState(!1),[wr,Mo]=g.useState(!0),[Ka,An]=g.useTransition();g.useEffect(()=>{An(()=>{or||Pn||a?(U(),kr(!0),Ki(!1)):kr(!1)})},[or,Pn,a,k]);const[Ro,Ki]=g.useState(!1),To=xy(K=>{K?An(()=>{T(),Mo(!0)}):Mo(!1)});g.useEffect(()=>{$&&Ki(!0)},[$]),g.useEffect(()=>{if(Ro)return To()},[Ro,To]),g.useEffect(()=>{if(!wr||!(a||$))return;const K=G.current;if(!K)return;const se=K.ownerDocument,ae=se.defaultView;if(!ae)return;b.current=0,U();const Ce=()=>U(),Ue=()=>U();se.addEventListener("scroll",Ce,!0),ae.addEventListener("resize",Ue);let ct=0;const nt=Sr=>{if(Sr-b.current>=Uj){b.current=Sr;const Dt=G.current;if(Dt){const Er=Dt.getBoundingClientRect(),zn=P.current;(!zn||Math.abs(Er.x-zn.x)>.5||Math.abs(Er.y-zn.y)>.5||Math.abs(Er.width-zn.width)>.5||Math.abs(Er.height-zn.height)>.5)&&(P.current=Er,U())}}ct=requestAnimationFrame(nt)};return ct=requestAnimationFrame(nt),()=>{se.removeEventListener("scroll",Ce,!0),ae.removeEventListener("resize",Ue),cancelAnimationFrame(ct)}},[wr,a,$,U]);const Xi=g.useCallback(K=>{if(K&&K.ownerDocument.defaultView){const ae=K.getBoundingClientRect(),Ue=ae.x<0,nt=ae.y<0;Ue&&(K.style.transformOrigin="left top",K.style.left="0px"),nt&&(K.style.top="12px",Ue||(K.style.transformOrigin="right top"))}},[v]),Xr=g.useRef(null);g.useEffect(()=>{Xi(Xr.current)},[Xr.current,Xi]),g.useEffect(()=>{if(d){N(d);return}if(G.current){const K=window.getComputedStyle(G.current);if(K.display==="inline"||K.display==="inline-block"){N("x");return}}N(p)},[G,d,p]);const Ji=J("action-selectparent"),Qi=J("action-duplicate"),Xa=J("action-delete"),ge=g.useMemo(()=>(_==null?void 0:_.areaId)&&(_==null?void 0:_.areaId)!=="root"&&u.jsx(gt.Action,{onClick:we,label:Ji,children:u.jsx(cw,{size:16})}),[_==null?void 0:_.areaId,Ji]),Oe=g.useMemo(()=>F(D({},_),{areaId:n,zoneCompound:i,index:o,depth:t+1,registerLocalZone:j,unregisterLocalZone:C}),[_,n,i,o,t,j,C]),qe=H(K=>{var se;return((se=K.currentRichText)==null?void 0:se.inlineComponentId)===n?K.currentRichText:null}),Ht=z.duplicate||z.delete;return u.jsxs(Oi,{value:Oe,children:[wr&&ir&&Ur.createPortal(u.jsxs("div",{className:Cr({isSelected:a,isDragging:$,hover:or||Pn}),style:D({},ke),"data-puck-overlay":!0,children:[l,s&&u.jsx("div",{className:Cr("loadingOverlay"),children:u.jsx(kn,{})}),u.jsx("div",{className:Cr("actionsOverlay"),style:{top:Zj/v},children:u.jsx("div",{className:Cr("actions"),style:{transform:`scale(${1/v}`,top:Yj/v,right:0,paddingLeft:Kf,paddingRight:Kf},ref:Xr,children:u.jsxs(We,{parentAction:ge,label:c,children:[qe&&u.jsxs(u.Fragment,{children:[u.jsx(VS,{editor:qe.editor,field:qe.field,inline:!0,readOnly:!1}),Ht&&u.jsx(gt.Separator,{})]}),z.duplicate&&u.jsx(gt.Action,{onClick:he,label:Qi,children:u.jsx(ju,{className:Cr("actionsAction")})}),z.delete&&u.jsx(gt.Action,{onClick:Ot,label:Xa,children:u.jsx(Pu,{className:Cr("actionsAction")})})]})})}),u.jsx("div",{className:Cr("overlayWrapper"),children:u.jsx(ze,{componentId:n,componentType:r,hover:or,isSelected:a,children:u.jsx("div",{className:Cr("overlay")})})})]}),be||document.body),e(te)]})};A();var Cy={DropZone:"_DropZone_wc2ks_1","DropZone--hasChildren":"_DropZone--hasChildren_wc2ks_11","DropZone--isAreaSelected":"_DropZone--isAreaSelected_wc2ks_24","DropZone--hoveringOverArea":"_DropZone--hoveringOverArea_wc2ks_25","DropZone--isRootZone":"_DropZone--isRootZone_wc2ks_25","DropZone-item":"_DropZone-item_wc2ks_39","DropZone-linePlaceholder":"_DropZone-linePlaceholder_wc2ks_43","DropZone-hitbox":"_DropZone-hitbox_wc2ks_55","DropZone--isEnabled":"_DropZone--isEnabled_wc2ks_63","DropZone--isAnimating":"_DropZone--isAnimating_wc2ks_74"};A();var Iy=(e,{allow:t,disallow:r})=>{if(!e)return!0;const n=new Set(t),o=new Set(r);return r?(o.has(e)&&n.has(e)&&o.delete(e),!o.has(e)):t?n.has(e):!0};A();A();var jy={Drawer:"_Drawer_1n90m_1","Drawer-draggable":"_Drawer-draggable_1n90m_8","Drawer-draggableBg":"_Drawer-draggableBg_1n90m_12","DrawerItem-draggable":"_DrawerItem-draggable_1n90m_22","DrawerItem--disabled":"_DrawerItem--disabled_1n90m_38",DrawerItem:"_DrawerItem_1n90m_22","Drawer--isDraggingFrom":"_Drawer--isDraggingFrom_1n90m_48","DrawerItem-name":"_DrawerItem-name_1n90m_72"};A();A();A();function Jj(e,t){const r=setTimeout(e,t);return()=>clearTimeout(r)}function Qj(e,t){const r=()=>performance.now();let n,o=0;return function(...i){const s=r(),a=this;s-o>=t?(e.apply(a,i),o=s):(n==null||n(),n=Jj(()=>{e.apply(a,i),o=r()},t-(s-o)))}}A();var eP=class{constructor(e,t){this.scaleFactor=1,this.frameEl=null,this.frameRect=null;var r;this.target=e,this.original=t,this.frameEl=document.querySelector("iframe#preview-frame"),this.frameEl&&(this.frameRect=this.frameEl.getBoundingClientRect(),this.scaleFactor=this.frameRect.width/(((r=this.frameEl.contentWindow)==null?void 0:r.innerWidth)||1))}get x(){return this.original.x}get y(){return this.original.y}get global(){return document!==this.target.ownerDocument&&this.frameRect?{x:this.x*this.scaleFactor+this.frameRect.left,y:this.y*this.scaleFactor+this.frameRect.top}:this.original}get frame(){return document===this.target.ownerDocument&&this.frameRect?{x:(this.x-this.frameRect.left)/this.scaleFactor,y:(this.y-this.frameRect.top)/this.scaleFactor}:this.original}};A();var tP=typeof PointerEvent<"u"?PointerEvent:Event,Py=class extends tP{constructor(e,t){super(e,t),this._originalTarget=null,this.originalTarget=t.originalTarget}set originalTarget(e){this._originalTarget=e}get originalTarget(){return this._originalTarget}},rP=e=>e.sort((t,r)=>{const n=t.data,o=r.data;return n.depth>o.depth?1:o.depth>n.depth?-1:0}),nP=e=>{let t=e==null?void 0:e.id;if(!e)return null;if(e.type==="component"){const r=e.data;r.containsActiveZone?t=null:t=r.zone}else if(e.type==="void")return"void";return t},bs=6,oP=(e,t)=>{const r=[];let n=e.target.ownerDocument.elementsFromPoint(e.x,e.y);const o=n.find(s=>s.getAttribute("data-puck-preview")),i=n.find(s=>s.getAttribute("data-puck-drawer"));if(i&&(n=[i]),o){const s=_t();s&&(n=s.elementsFromPoint(e.frame.x,e.frame.y))}if(n)for(let s=0;s<n.length;s++){const a=n[s],l=a.getAttribute("data-puck-dropzone"),c=a.getAttribute("data-puck-dnd"),p=a.hasAttribute("data-puck-dnd-void");if((l||c)&&!p){const d=a.getBoundingClientRect(),f={left:d.left+bs,right:d.right-bs,top:d.top+bs,bottom:d.bottom-bs};if(e.frame.x<f.left||e.frame.x>f.right||e.frame.y>f.bottom||e.frame.y<f.top)continue}if(l){const d=t.registry.droppables.get(l);d&&r.push(d)}if(c){const d=t.registry.droppables.get(c);d&&r.push(d)}}return r},iP=(e,t)=>{var r;const n=oP(e,t);if(n.length>0){const o=rP(n),i=t.dragOperation.source,s=o.findIndex(v=>v.id===(i==null?void 0:i.id)),a=i==null?void 0:i.id;let l=[...o];a&&s>-1&&l.splice(s,1),l=l.filter(v=>{const m=v.data;if(a&&s>-1&&m.path.indexOf(a)>-1)return!1;if(v.type==="dropzone"){const y=v.data;if(!y.isDroppableTarget||y.areaId===a)return!1}else if(v.type==="component"&&!v.data.inDroppableZone)return!1;return!0}),l.reverse();const c=l[0];if(!c)return{zone:null,area:null};const p=c.data,d="containsActiveZone"in p,f=nP(c),h=d&&p.containsActiveZone?l[0].id:(r=l[0])==null?void 0:r.data.areaId;return{zone:f,area:h}}return{zone:et,area:hn}},sP=({onChange:e},t)=>class extends Je{constructor(n,o){super(n),!(typeof window>"u")&&this.registerEffect(()=>{const s=Qj(c=>{const p=c instanceof Py&&c.originalTarget||c.target,d=new eP(p,{x:c.clientX,y:c.clientY});document.elementsFromPoint(d.global.x,d.global.y).some(v=>v.id===t)&&e(iP(d,n),n)},50),a=c=>{s(c)};return document.body.addEventListener("pointermove",a,{capture:!0}),()=>{document.body.removeEventListener("pointermove",a,{capture:!0})}})}};A();var aP=({zones:e,itemId:t,targetZone:r,getExpectedOrder:n})=>{const o=_t();if(!o||Gd(o))return()=>{};const i=Array.from(new Set(e)).map(c=>`${Di(c)} > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`).join(", "),s=()=>{const c=new Map;return o.querySelectorAll(i).forEach(p=>{const d=p.getAttribute("data-puck-component");d&&d!==t&&c.set(d,{el:p,rect:p.getBoundingClientRect()})}),c},a=s(),l=n();return()=>{wy(o,{zones:e,itemId:t,targetZone:r,getExpectedOrder:n,initialExpectedOrder:l},()=>{s().forEach(({el:c,rect:p},d)=>{var f;const h=(f=a.get(d))==null?void 0:f.rect;if(!h)return;const v=h.x-p.x,m=h.y-p.y;Math.abs(v)<1&&Math.abs(m)<1||c.animate({translate:[`${v}px ${m}px 0`,"0px 0px 0"]},Yd)})})}};A();var Ol=(e,{isDraggingBetweenSlots:t=!1,isNewComponent:r=!1}={})=>e==="auto"?t||r?"static":"fluid":e;A();A();A();var Gi=(e,t)=>{const r=e.indexes.nodes[t];if(!r)return;const n=`${r.parentId}:${r.zone}`,o=e.indexes.zones[n].contentIds.indexOf(t);return{zone:n,index:o}};function Oo(e,t,r="force",n=!1,o){return Se(this,null,function*(){const i=yield t().resolveComponentData(e,r);if(!i.didChange&&!n)return;const s=Gi(t().state,i.node.props.id);if(!s){console.warn(`Warning: Could not find component with id "${e.props.id}" to resolve its data. Component may have been removed or the id is invalid.`);return}t().dispatch({type:"replace",data:vo(i.node),destinationIndex:s.index,destinationZone:s.zone,ui:o})})}var lP=(e,t,r,n)=>Se(null,null,function*(){const{getState:o}=n,i=pt(e),s={type:"insert",componentType:e,destinationIndex:r,destinationZone:t,id:i},a=o().state,l=Th(a,s,o()),c=o().dispatch;c(F(D({},s),{recordHistory:!0}));const p={index:r,zone:t};c({type:"setUi",ui:{itemSelector:p}});const d=rt(p,l);d&&(yield Oo(d,o,"insert"))});A();var Ay=(e,t,r,n)=>Se(null,null,function*(){var o,i,s;const a=n.getState().dispatch;a({type:"move",sourceIndex:t.index,sourceZone:(o=t.zone)!=null?o:et,destinationIndex:r.index,destinationZone:(i=r.zone)!=null?i:et,recordHistory:!1});const l=(s=n.getState().state.indexes.nodes[e])==null?void 0:s.data;l&&(yield Oo(l,n.getState,"move"))});A();function zy(e){function t(r){return r?r.getAttribute("dir")||t(r.parentElement):"ltr"}return e?t(e):"ltr"}A();A();A();var va=(e,t,r)=>Math.max(t,Math.min(r,e)),cP=(e,t)=>{const r=va(e.x,Math.min(t.x1,t.x2),Math.max(t.x1,t.x2)),n=va(e.y,Math.min(t.y1,t.y2),Math.max(t.y1,t.y2));return Math.hypot(e.x-r,e.y-n)};A();var uP=e=>{const t=e.replace(/\[[^\]]*\]/g," ").trim();return t&&t!=="none"?t.split(/\s+/).length:0},Oy=(e,t,r=t.getComputedStyle(e))=>{const n=r.display,o=zy(e)==="rtl";if(n==="flex"||n==="inline-flex"){const i=r.flexDirection;if(i.startsWith("row")){const s=i==="row-reverse";return{axis:"x",reversed:o?!s:s}}return{axis:"y",reversed:i==="column-reverse"}}return n==="grid"||n==="inline-grid"?r.gridAutoFlow.startsWith("column")||uP(r.gridTemplateColumns)>1?{axis:"x",reversed:o}:{axis:"y",reversed:!1}:{axis:"y",reversed:!1}},Dy=({axis:e,reversed:t})=>{const r=e==="x",n=t?-1:1;return{horizontal:r,reversed:t,forward:n,start:a=>r?t?a.right:a.left:t?a.bottom:a.top,end:a=>r?t?a.left:a.right:t?a.top:a.bottom,isBefore:(a,l)=>n>0?a<=l:a>=l}},Xf=(e,t,r)=>{var n,o;const i=e.ownerDocument.defaultView;if(!i)return null;const s=new Map(r.map((S,w)=>[S,w])),a=Array.from(e.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(S=>{var w,j;return{index:(j=s.get((w=S.getAttribute("data-puck-component"))!=null?w:""))!=null?j:-1,el:S}}).filter(S=>S.index!==-1).sort((S,w)=>S.index-w.index).map(({index:S,el:w})=>({index:S,rect:w.getBoundingClientRect()}));if(a.length===0)return 0;const l=Oy(e,i),{horizontal:c,reversed:p,start:d,end:f}=Dy(l),h=(S,w,j,C=[j])=>{let I=1/0,E=-1/0;for(const z of C)I=Math.min(I,c?z.top:z.left),E=Math.max(E,c?z.bottom:z.right);return c?{index:S,x1:w,x2:w,y1:j.top,y2:j.bottom,laneStart:I,laneEnd:E}:{index:S,x1:j.left,x2:j.right,y1:w,y2:w,laneStart:I,laneEnd:E}},v=[],m=(S,w,j)=>{const C=j==="before"?d(w):f(w);return h(S,C,w)};for(let S=0;S<=a.length;S++){const w=a[S-1],j=a[S];if(!j)v.push(m(w.index+1,w.rect,"after"));else if(!w)v.push(m(j.index,j.rect,"before"));else if(j.index-w.index>1)v.push(m(w.index+1,w.rect,"after")),v.push(m(j.index,j.rect,"before"));else if(p?f(w.rect)<d(j.rect):f(w.rect)>d(j.rect))v.push(m(j.index,j.rect,"before")),v.push(m(j.index,w.rect,"after"));else{const C=(f(w.rect)+d(j.rect))/2;v.push(h(j.index,C,j.rect,[w.rect,j.rect]))}}const y=c?t.y:t.x;let x=null,k=1/0,b=null,_=1/0;for(const S of v){const w=cP(t,S);w<k&&(k=w,x=S),y>=S.laneStart&&y<=S.laneEnd&&w<_&&(_=w,b=S)}return(o=(n=b??x)==null?void 0:n.index)!=null?o:null};A();var Jf=(e,t)=>{var r;const n=document.querySelector("iframe#preview-frame");if(!n||e.ownerDocument!==n.contentDocument)return t;const o=n.getBoundingClientRect(),i=o.width/(((r=n.contentWindow)==null?void 0:r.innerWidth)||1);return i>0?{x:(t.x-o.left)/i,y:(t.y-o.top)/i}:t},dP=e=>{const t=ye(),r=g.useRef(null),n=g.useCallback(l=>{var c;const p=(c=_t())==null?void 0:c.querySelector("[data-puck-entry]");l?p==null||p.setAttribute("data-puck-line-drag","true"):p==null||p.removeAttribute("data-puck-line-drag")},[]),o=g.useCallback((l,c)=>{var p;const d=(p=_t())==null?void 0:p.querySelector(Di(l));if(!d)return null;const f=Jf(d,c.dragOperation.position.current),h=ha(t.getState().state,l);return Xf(d,f,h)},[t]),i=g.useCallback(l=>{var c;const{previewIndex:p={}}=e.getState(),d=Object.values(p).find(x=>x==null?void 0:x.linePlaceholder);if(!d)return;const f=(c=_t())==null?void 0:c.querySelector(Di(d.zone));if(!f)return;const h=Jf(f,l.dragOperation.position.current),v=f.getBoundingClientRect();if(!(h.x>=v.left&&h.x<=v.right&&h.y>=v.top&&h.y<=v.bottom))return;const y=Xf(f,h,ha(t.getState().state,d.zone));y!==null&&y!==d.index&&e.setState({previewIndex:F(D({},p),{[d.zone]:F(D({},d),{index:y})})})},[t,e]),s=g.useCallback(()=>{var l;(l=r.current)==null||l.call(r),r.current=null},[]),a=g.useCallback(l=>{s();const c=_t();if(!c)return;let p=null;const d=()=>{p===null&&(p=requestAnimationFrame(()=>{p=null,i(l)}))};c.addEventListener("scroll",d,{capture:!0,passive:!0}),r.current=()=>{p!==null&&cancelAnimationFrame(p),c.removeEventListener("scroll",d,{capture:!0})}},[s,i]);return g.useEffect(()=>s,[s]),{getTargetIndex:o,setActive:n,startScrollTracking:a,stopScrollTracking:s,update:i}},My=g.createContext({dragListeners:{}});function pP(e,t,r=[]){const{setDragListeners:n}=g.useContext(My);g.useEffect(()=>{n&&n(o=>F(D({},o),{[e]:[...o[e]||[],t]}))},r)}var fP=100,hP=e=>{const t=g.useRef(null);return g.useCallback(r=>{Hc.setState({fallbackEnabled:!1});const n=pt();t.current=n,setTimeout(()=>{t.current===n&&(Hc.setState({fallbackEnabled:!0}),r.collisionObserver.forceUpdate(!0))},e)},[])},vP=({children:e,disableAutoScroll:t,behavior:r="auto"})=>{const n=H(I=>I.dispatch),o=H(I=>I.instanceId),i=ye(),s=g.useRef(null),a=hP(100),[l]=g.useState(()=>{const I=new Map;return Gr(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:(E,z)=>{I.set(E,z)},unregisterRootVirtualizer:E=>{I.delete(E)},scrollToComponent:E=>{const z=Array.from(I.values());if(z.length>0)for(const O of z){const L=O.resolveIndex(E);L<0||O.virtualizer.scrollToIndex(L,{behavior:"auto",align:"auto"})}else{const O=_t(),L=O==null?void 0:O.querySelector(fo(E));L==null||L.scrollIntoView({behavior:"smooth"})}}}))}),c=g.useCallback(I=>{const{zoneDepthIndex:E={},areaDepthIndex:z={}}=l.getState()||{},O=Object.keys(E).length>0,L=Object.keys(z).length>0;let B=!1,N=!1;return(I.zone&&!E[I.zone]||!I.zone&&O)&&(B=!0),(I.area&&!z[I.area]||!I.area&&L)&&(N=!0),{zoneChanged:B,areaChanged:N}},[l]),p=g.useCallback((I,E)=>{const{zoneChanged:z,areaChanged:O}=c(I);!z&&!O||(l.setState({zoneDepthIndex:I.zone?{[I.zone]:!0}:{},areaDepthIndex:I.area?{[I.area]:!0}:{}}),a(E),setTimeout(()=>{E.collisionObserver.forceUpdate(!0)},50),s.current=null)},[l]),d=ry(p,fP),f=()=>{d.cancel(),s.current=null};g.useEffect(()=>{},[]);const[h]=g.useState(()=>[...t?Fr.plugins.filter(I=>I!==Ed):Fr.plugins,sP({onChange:(I,E)=>{const z=l.getState(),{zoneChanged:O,areaChanged:L}=c(I),B=E.dragOperation.status.dragging;if(L||O){let N={},R={};I.zone&&(N={[I.zone]:!0}),I.area&&(R={[I.area]:!0}),l.setState({nextZoneDepthIndex:N,nextAreaDepthIndex:R})}if(I.zone!=="void"&&(z!=null&&z.zoneDepthIndex.void)){p(I,E);return}if(L){if(B){const N=s.current;N&&N.area===I.area&&N.zone===I.zone||(f(),d(I,E),s.current=I)}else f(),p(I,E);return}O&&p(I,E),f()}},o)]),v=$d(),[m,y]=g.useState({}),x=g.useRef(null),k=g.useRef(void 0),{getTargetIndex:b,setActive:_,startScrollTracking:S,stopScrollTracking:w,update:j}=dP(l),C=g.useMemo(()=>({mode:"edit",areaId:"root",depth:0}),[]);return u.jsx(My.Provider,{value:{dragListeners:m,setDragListeners:y},children:u.jsx(zd,{plugins:h,sensors:v,onDragEnd:(I,E)=>{var z,O;w();const L=(z=_t())==null?void 0:z.querySelector("[data-puck-entry]");L==null||L.removeAttribute("data-puck-dragging");const{source:B,target:N}=I.operation;if(!B){_(!1),l.setState({draggedItem:null});return}const{zone:R,index:q}=B.data,{previewIndex:W={}}=l.getState()||{},$=(O=Object.values(W).find(te=>(te==null?void 0:te.props.id)===B.id&&!te.ghost))!=null?O:null,Z=!I.canceled&&(N==null?void 0:N.type)!=="void"&&($!=null&&$.linePlaceholder)?aP({zones:k.current?[k.current.zone,$.zone]:[$.zone],itemId:$.type==="move"?$.props.id:void 0,targetZone:$.zone,getExpectedOrder:()=>ha(i.getState().state,$.zone)}):null,oe=()=>{var te,be,Q,ie,ke;if(_(!1),l.setState({draggedItem:null}),I.canceled||(N==null?void 0:N.type)==="void"){l.setState({previewIndex:{}}),(te=m.dragend)==null||te.forEach(M=>{M(I,E)}),n({type:"setUi",ui:{itemSelector:null,isDragging:!1}});return}const Y=$&&$.linePlaceholder&&k.current&&$.zone===k.current.zone&&$.index>k.current.index?$.index-1:(be=$==null?void 0:$.index)!=null?be:q;$&&(l.setState({previewIndex:{}}),$.type==="insert"?lP($.componentType,$.zone,$.index,i):k.current&&Ay($.props.id,k.current,F(D({},$),{index:Y}),i),Z==null||Z());const P=((Q=k.current)==null?void 0:Q.zone)!==($==null?void 0:$.zone)||((ie=k.current)==null?void 0:ie.index)!==Y;n({type:"setUi",ui:{itemSelector:$?{index:Y,zone:$.zone}:{index:q,zone:R},isDragging:!1},recordHistory:P}),(ke=m.dragend)==null||ke.forEach(M=>{M(I,E)})};let G;G=ft(()=>{B.status==="idle"&&(oe(),G==null||G())})},onDragMove:(I,E)=>{var z;j(E),(z=m.dragmove)==null||z.forEach(O=>{O(I,E)})},onDragOver:(I,E)=>{var z,O,L,B,N,R;if(I.preventDefault(),!((z=l.getState())==null?void 0:z.draggedItem))return;f();const{source:W,target:$}=I.operation;if(!$||!W||$.type==="void")return;const[Z]=W.id.split(":"),[oe]=$.id.split(":"),G=W.data;let te=G.zone,be=G.index,Q="",ie=0;if($.type==="component"){const Y=$.data;Q=Y.zone;const P=(O=E.collisionObserver.collisions[0])==null?void 0:O.data,M=Hd(P==null?void 0:P.direction,zy($.element));ie=Vd({position:M,sourceIndex:be,targetIndex:Y.index,isSameZone:te===Q})}else Q=$.id.toString(),ie=0;const ke=((L=i.getState().state.indexes.nodes[$.id])==null?void 0:L.path)||[];if(!(oe===Z||ke.find(Y=>{const[P]=Y.split(":");return P===Z}))){if(x.current==="new"){const Y=Ol(r,{isNewComponent:!0})==="static";Y&&(ie=(B=b(Q,E))!=null?B:ie),_(Y),l.setState({previewIndex:{[Q]:{componentType:G.componentType,type:"insert",index:ie,zone:Q,element:W.element,props:{id:W.id.toString()},linePlaceholder:Y}}})}else{k.current||(k.current={zone:G.zone,index:G.index});const Y=rt(k.current,i.getState().state);if(Y){const P=k.current.zone,M=P!==Q,T=Ol(r,{isDraggingBetweenSlots:M})==="static";T&&(ie=(N=b(Q,E))!=null?N:ie),_(T);const U={[Q]:{componentType:G.componentType,type:"move",index:ie,zone:Q,props:Y.props,element:W.element,linePlaceholder:T}};if(T&&M){const V=l.getState().previewIndex[P];let X=k.current.index;V&&!V.linePlaceholder&&(X=V.index),U[P]={componentType:G.componentType,type:"move",index:X,zone:P,props:Y.props,element:W.element,ghost:!0}}l.setState({previewIndex:U})}}(R=m.dragover)==null||R.forEach(Y=>{Y(I,E)})}},onDragStart:(I,E)=>{var z;r!=="fluid"&&S(E);const{source:O}=I.operation;if((O==null?void 0:O.type)==="component"){const L=O.data,B={zone:L.zone,index:L.index};k.current=B;const N=rt(B,i.getState().state);if(N){const R=Ol(r)==="static";_(R),l.setState({previewIndex:{[L.zone]:{componentType:L.componentType,type:"move",index:L.index,zone:L.zone,props:N.props,element:O.element,linePlaceholder:R}}})}}(z=m.dragstart)==null||z.forEach(L=>{L(I,E)})},onBeforeDragStart:I=>{var E,z,O,L;const B=((E=I.operation.source)==null?void 0:E.type)==="drawer";x.current=B?"new":"existing",k.current=void 0,l.setState({draggedItem:I.operation.source}),((z=i.getState().selectedItem)==null?void 0:z.props.id)!==((O=I.operation.source)==null?void 0:O.id)?n({type:"setUi",ui:{itemSelector:null,isDragging:!0},recordHistory:!1}):n({type:"setUi",ui:{isDragging:!0},recordHistory:!1});const N=(L=_t())==null?void 0:L.querySelector("[data-puck-entry]");N==null||N.setAttribute("data-puck-dragging","true"),_(!1)},children:u.jsx(Nj,{store:l,children:u.jsx(Oi,{value:C,children:e})})})})},gP=({children:e,disableAutoScroll:t,behavior:r})=>H(o=>o.status)==="LOADING"?e:u.jsx(vP,{disableAutoScroll:t,behavior:r,children:e}),$s=ee("Drawer",jy),Wn=ee("DrawerItem",jy),qc=({children:e,name:t,label:r,dragRef:n,isDragDisabled:o})=>{const i=g.useMemo(()=>e||(({children:s})=>u.jsx("div",{className:Wn("default"),children:s})),[e]);return u.jsx("div",{className:Wn({disabled:o}),ref:n,onMouseDown:s=>s.preventDefault(),"data-testid":n?`drawer-item:${t}`:"","data-puck-drawer-item":!0,children:u.jsx(i,{name:t,children:u.jsx("div",{className:Wn("draggableWrapper"),children:u.jsxs("div",{className:Wn("draggable"),children:[u.jsx("div",{className:Wn("name"),children:r??t}),u.jsx("div",{className:Wn("icon"),children:u.jsx(fy,{})})]})})})})},mP=({children:e,name:t,label:r,id:n,isDragDisabled:o})=>{const i=g.useContext(Ve),s=Sy(i),{ref:a}=MC({id:n,data:{componentType:t},disabled:o,type:"drawer",plugins:[Wi.configure({dropAnimation:s})]});return u.jsxs("div",{className:$s("draggable"),children:[u.jsx("div",{className:$s("draggableBg"),children:u.jsx(qc,{name:t,label:r,children:e})}),u.jsx("div",{className:$s("draggableFg"),children:u.jsx(qc,{name:t,label:r,dragRef:a,isDragDisabled:o,children:e})})]})},_P=({name:e,children:t,id:r,label:n,index:o,isDragDisabled:i})=>{const s=r||e,[a,l]=g.useState(pt(s));return typeof o<"u"&&console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."),pP("dragend",()=>{l(pt(s))},[s]),u.jsx("div",{children:u.jsx(mP,{name:e,label:n,id:a,isDragDisabled:i,children:t})},a)},Kd=({children:e,droppableId:t,direction:r})=>{t&&console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."),r&&console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");const n=Za(),{ref:o}=Md({id:n,type:"void",collisionPriority:0});return u.jsx("div",{className:$s(),ref:o,"data-puck-dnd":n,"data-puck-drawer":!0,"data-puck-dnd-void":!0,children:e})};Kd.Item=_P;A();var Qf=(e,t)=>e.getState().state.indexes.zones[t].contentIds.length,yP=({zoneCompound:e,userMinEmptyHeight:t,ref:r})=>{const n=ye(),[o,i]=g.useState(0),[s,a]=g.useState(!1),{draggedItem:l,isZone:c}=Jt(Ve,h=>{var v,m;return{draggedItem:((v=h.draggedItem)==null?void 0:v.data.zone)===e?h.draggedItem:null,isZone:((m=h.draggedItem)==null?void 0:m.data.zone)===e}}),p=g.useRef(0),d=xy(h=>{if(h){const v=Qf(n,e);if(i(0),v||p.current===0){a(!1);return}const m=n.getState().selectedItem,y=n.getState().state.indexes.zones,x=n.getState().nodes;x.setOverlayVisible(m==null?void 0:m.props.id,!1),setTimeout(()=>{var k;const b=((k=y[e])==null?void 0:k.contentIds)||[];x.syncNodes(b),m&&setTimeout(()=>{x.syncNode(m.props.id),x.setOverlayVisible(m.props.id,!0)},200),a(!1)},100)}},[n,o,e]);g.useEffect(()=>{if(l&&r.current&&c){const h=r.current.getBoundingClientRect();return p.current=Qf(n,e),i(h.height),a(!0),d()}},[r.current,l,d]);const f=isNaN(Number(t))?t:`${t}px`;return[o?`${o}px`:f,s]};A();A();function bP(e,t){const r=T_();return g.useCallback((...n)=>Se(null,null,function*(){return yield r==null?void 0:r.renderer.rendering,e(...n)}),[...t,r])}var xP=(e,t)=>{const r=g.useContext(Ve),n=Jt(Ve,p=>p.previewIndex[t]),o=H(p=>p.state.ui.isDragging),[i,s]=g.useState(e),[a,l]=g.useState(n),c=bP((p,d,f,h,v,m)=>{f&&!v||(d&&!d.linePlaceholder?s(hi(p.filter(y=>y!==d.props.id),d.index,d.props.id)):s(v&&!m?p.filter(y=>y!==h):p),l(d))},[]);return g.useEffect(()=>{var p;const d=r.getState(),f=(p=d.draggedItem)==null?void 0:p.id,h=Object.values(d.previewIndex||{}),v=h.length>0,m=h.some(y=>y==null?void 0:y.linePlaceholder);c(e,n,o,f,v,m)},[e,n,o]),[i,a]};A();var kP="dynamic",wP="x",eh="y",SP=(e,t)=>{const r=H(s=>s.status),[n,o]=g.useState(t||eh),i=g.useCallback(()=>{if(e.current){const s=window.getComputedStyle(e.current);s.display==="grid"?o(kP):s.display==="flex"&&s.flexDirection==="row"?o(wP):o(eh)}},[e.current]);return g.useEffect(()=>{const s=()=>{i()};return window.addEventListener("viewportchange",s),()=>{window.removeEventListener("viewportchange",s)}},[]),g.useEffect(i,[r,t]),[n,i]};A();var EP=({componentId:e,zone:t})=>{const r=H(i=>i.config),n=H(i=>i.metadata),o=H($e(i=>{var s,a;const l=i.state.indexes;return((a=(s=l.zones[`${e}:${t}`])==null?void 0:s.contentIds)!=null?a:[]).map(p=>l.nodes[p].flatData)}));return u.jsx(Mu,{content:o,zone:t,config:r,metadata:n})};A();function Ry(e,t,r,n,o){const i=g.useRef(null),s=g.useRef(null),a=g.useRef(t.props),l=g.useMemo(()=>Sg(r,n,o),[r,n,o]),c=g.useMemo(()=>{var d,f,h,v;const m=t.type==="root"?e.root:(d=e.components)==null?void 0:d[t.type],y=(f=m==null?void 0:m.fields)!=null?f:{},x=i.current!==l;let k,b=!1;if(!s.current||x)for(const S in t.props)((h=y[S])==null?void 0:h.type)==="slot"&&(b=!0);else{k=["id"];const S=new Set([...Object.keys(t.props),...Object.keys(s.current)]);for(const w of S)t.props[w]!==s.current[w]&&(k.push(w),((v=y[w])==null?void 0:v.type)==="slot"&&(b=!0))}const _=bn(t,l,e,!1,b,k).props;return s.current=t.props,i.current=l,a.current=k?D(D({},a.current),_):_,a.current},[e,t,l]);return g.useMemo(()=>D(D({},t.props),c),[t.props,c])}A();A();A();var Ty=(e,t={})=>{if(!e)return;const{disableDrag:r=!1,disableDragOnFocus:n=!0}=t,o=a=>{a.stopPropagation()};e.addEventListener("mouseover",o,{capture:!0});const i=()=>{setTimeout(()=>{e.addEventListener("pointerdown",o,{capture:!0})},200)},s=()=>{e.removeEventListener("pointerdown",o,{capture:!0})};return r?e.addEventListener("pointerdown",o,{capture:!0}):n&&(e.addEventListener("focus",i,{capture:!0}),e.addEventListener("blur",s,{capture:!0})),e.setAttribute("data-puck-overlay-portal","true"),()=>{e.removeEventListener("mouseover",o,{capture:!0}),r?e.removeEventListener("pointerdown",o,{capture:!0}):n&&(e.removeEventListener("focus",i,{capture:!0}),e.removeEventListener("blur",s,{capture:!0})),e.removeAttribute("data-puck-overlay-portal")}};A();var CP={InlineTextField:"_InlineTextField_104qp_1"},IP=ee("InlineTextField",CP),jP=({propPath:e,componentId:t,value:r,isReadOnly:n,opts:o={}})=>{var i;const s=g.useRef(null),a=ye(),l=(i=o.disableLineBreaks)!=null?i:!1;g.useEffect(()=>{const h=a.getState(),v=h.state.indexes.nodes[t].data;if(!h.getComponentConfig(v.type))throw new Error(`InlineTextField Error: No config defined for ${v.type}`);if(s.current){const y=r??"";y!==s.current.innerText&&s.current.replaceChildren(y);const x=Ty(s.current),k=b=>Se(null,null,function*(){const S=a.getState().state.indexes.nodes[t];let w=b.target.innerText;l&&(w=w.replaceAll(/\n/gm,""));const j=Ha(S.data.props,e,w);yield Oo(F(D({},S.data),{props:j}),a.getState,"replace",!0)});return s.current.addEventListener("input",k),()=>{var b;(b=s.current)==null||b.removeEventListener("input",k),x==null||x()}}},[a,s.current,r,l]);const[c,p]=g.useState(!1),[d,f]=g.useState(!1);return u.jsx("span",{className:IP(),ref:s,contentEditable:c||d?"plaintext-only":"false",onClick:h=>{h.preventDefault(),h.stopPropagation()},onClickCapture:h=>{h.preventDefault(),h.stopPropagation();const v=Gi(a.getState().state,t);a.getState().setUi({itemSelector:v})},onKeyDown:h=>{h.stopPropagation(),(l&&h.key==="Enter"||n)&&h.preventDefault()},onKeyUp:h=>{h.stopPropagation(),h.preventDefault()},onMouseOverCapture:()=>p(!0),onMouseOutCapture:()=>p(!1),onFocus:()=>f(!0),onBlur:()=>f(!1)})},Dl=g.memo(jP),PP=()=>({text:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>r.contentEditable?u.jsx(Dl,{propPath:n,componentId:t,value:e,opts:{disableLineBreaks:!0},isReadOnly:o}):e,textarea:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>r.contentEditable?u.jsx(Dl,{propPath:n,componentId:t,value:e,isReadOnly:o}):e,custom:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>r.contentEditable&&typeof e=="string"?u.jsx(Dl,{propPath:n,componentId:t,value:e,isReadOnly:o}):e});A();var AP=g.lazy(()=>Zr(()=>import("./Editor-44C53YAG-CLtzia7E.js"),__vite__mapDeps([12,11,4,2,3,1,5,6])).then(e=>({default:e.Editor}))),Ly=g.lazy(()=>Zr(()=>import("./Render-DQXAYUBI-LK-1oFa6.js"),__vite__mapDeps([10,11,4,2,3,5,6])).then(e=>({default:e.RichTextRender}))),Ny=g.memo(({value:e,componentId:t,propPath:r,field:n,id:o})=>{const i=g.useRef(null),s=ye(),a=f=>{f.preventDefault(),f.stopPropagation()},l=f=>{f.preventDefault(),f.stopPropagation();const h=Gi(s.getState().state,t);s.getState().setUi({itemSelector:h})};g.useEffect(()=>{if(!i.current)return;const f=Ty(i.current,{disableDragOnFocus:!0});return()=>f==null?void 0:f()},[i.current]);const c=g.useCallback((f,h)=>Se(null,null,function*(){const m=s.getState().state.indexes.nodes[t],y=Ha(m.data.props,r,f);yield Oo(F(D({},m.data),{props:y}),s.getState,"replace",!0,h)}),[s,t,r]),p=g.useCallback(f=>{s.setState({currentRichText:{inlineComponentId:t,inline:!0,field:n,editor:f,id:o}})},[n,t]);if(!n.contentEditable)return u.jsx(g.Suspense,{fallback:u.jsx(Eg,{content:e}),children:u.jsx(Ly,{content:e,field:n})});const d={content:e,onChange:c,field:n,inline:!0,onFocus:p,id:o,name:r};return u.jsx("div",{ref:i,onClick:a,onClickCapture:l,children:u.jsx(g.Suspense,{fallback:u.jsx(Zd,D({},d)),children:u.jsx(AP,D({},d))})})});Ny.displayName="InlineEditorWrapper";var zP=()=>({richtext:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>{const{contentEditable:i=!0,tiptap:s}=r;if(i===!1||o)return u.jsx(Ly,{content:e,field:r});const a=`${t}_${r.type}_${n}`;return u.jsx(Ny,{value:e,componentId:t,propPath:n,field:r,id:a},a)}});A();A();function OP(e,t,r=[]){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;const n=new Set(r),o=Object.keys(e).filter(s=>!n.has(s)),i=Object.keys(t).filter(s=>!n.has(s));if(o.length!==i.length)return!1;for(let s=0;s<o.length;s++){const a=o[s];if(!Object.prototype.hasOwnProperty.call(t,a))return!1;const l=e[a],c=t[a];if(!Object.is(l,c))return!1}return!0}var DP=({Component:e,componentProps:t})=>u.jsx(e,D({},t)),th=g.memo(DP,(e,t)=>{let r=!0;return"puck"in e.componentProps&&"puck"in t.componentProps&&(r=mi(e.componentProps.puck,t.componentProps.puck)),e.Component===t.Component&&OP(e.componentProps,t.componentProps,["puck"])&&r});A();var MP=5,Fy=320,By=new Map,RP=e=>{var t;return(t=By.get(e))!=null?t:Fy},TP=(e,t)=>{t<=0||By.set(e,t)},LP=({contentIds:e,zoneCompound:t,renderItem:r})=>{const n=H(b=>{var _,S;return(S=(_=b.selectedItem)==null?void 0:_.props.id)!=null?S:null}),o=_t(),i=g.useContext(Ve),s=Jt(Ve,b=>{var _;const S=(_=b.draggedItem)==null?void 0:_.id;return S?String(S):null}),a=Jt(Ve,b=>{var _,S,w;if((_=b.draggedItem)!=null&&_.id){const[j]=(w=Object.entries((S=b.previewIndex)!=null?S:{}).find(([,C])=>!(C!=null&&C.ghost)))!=null?w:[];return j==null?void 0:j.split(":")[0]}return null}),l=o==null?void 0:o.defaultView,c=g.useRef(new Map),p=ye(),d=g.useCallback(b=>{var _,S,w,j;if(!b||b==="root")return-1;const C=e.indexOf(b);if(C>-1)return C;const I=(w=(S=(_=p.getState().state.indexes.nodes)==null?void 0:_[b])==null?void 0:S.path)!=null?w:[];for(let E=I.length-1;E>=0;E-=1){const z=(j=I[E])==null?void 0:j.split(":")[0];if(!z||z==="root")continue;const O=e.indexOf(z);if(O>-1)return O}return-1},[p,e]),f=g.useMemo(()=>{const b=new Set;return[n,s,a].forEach(_=>{const S=d(_);S>-1&&b.add(S)}),Array.from(b).sort((_,S)=>_-S)},[a,s,d,n]),h=g.useCallback(b=>{const _=Fd(b);return f.forEach(S=>{_.includes(S)||_.push(S)}),_.sort((S,w)=>S-w),_},[f]),v=uy({count:e.length,getItemKey:b=>e[b],estimateSize:b=>RP(e[b]),getScrollElement:()=>l??null,overscan:MP,observeElementRect:(b,_)=>l?RI(b,_):oy(b,_),observeElementOffset:(b,_)=>l?LI(b,_):sy(b,_),scrollToFn:(b,_,S)=>l?FI(b,_,S):ly(b,_,S),rangeExtractor:h,initialOffset:()=>l?l.scrollY:0});g.useEffect(()=>(i.getState().registerRootVirtualizer(t,{resolveIndex:b=>d(b),virtualizer:v}),()=>{i.getState().unregisterRootVirtualizer(t)}),[d,v,t,i]);const m=g.useCallback(b=>{const _=c.current.get(b);if(_)return _;const S=w=>{if(!w)return;const j=Math.ceil(w.getBoundingClientRect().height)||Fy;typeof j=="number"&&j>0&&TP(b,j)};return c.current.set(b,S),S},[]);g.useEffect(()=>{const b=new Set(e);Array.from(c.current.keys()).forEach(_=>{b.has(_)||c.current.delete(_)})},[e]);const y=v.getVirtualItems(),x=v.getTotalSize(),k=g.useMemo(()=>{const b=[];let _=0,S=-1;y.forEach(j=>{if(!j)return;const C=e[j.index],I=Math.max(j.start-_,0);I>0&&b.push(u.jsx("div",{style:{height:`${I}px`}},`gap:${S}:${j.index}`)),b.push(r({componentId:C,index:j.index,measureRef:m(C)})),_=j.end,S=j.index});const w=Math.max(x-_,0);return w>0&&b.push(u.jsx("div",{style:{height:`${w}px`}},`gap:${S}:end`)),b},[x,y,m]);return u.jsx(u.Fragment,{children:k})};A();var NP=ee("DropZone",Cy),rh="var(--puck-line-placeholder-width, 2px)",FP=({zoneRef:e,contentIds:t,index:r})=>{const[n,o]=g.useState();return g.useLayoutEffect(()=>{var i,s,a,l;const c=e.current,p=c==null?void 0:c.ownerDocument.defaultView;if(!c||!p)return;const d=q=>q?p.getComputedStyle(q):void 0,f=q=>parseFloat(q??"")||0,h=q=>{const W=t[q];if(typeof W>"u")return;const $=c.querySelector(`:scope > ${fo(W)}:not([data-dnd-dragging])`);if($)return{el:$,rect:$.getBoundingClientRect()}},v=c.getBoundingClientRect(),m=p.getComputedStyle(c),y=h(r-1),x=h(r),k=x??y,b=Oy(c,p,m),{horizontal:_,reversed:S,forward:w,start:j,end:C,isBefore:I}=Dy(b),E=f(_?m.columnGap:m.rowGap),z=(q,W)=>{var $;const Z=W==="start"==!S?_?"marginLeft":"marginTop":_?"marginRight":"marginBottom";return f(($=d(q))==null?void 0:$[Z])},O=f(m.borderLeftWidth),L=f(m.borderTopWidth),B=f(m.borderRightWidth),N=f(m.borderBottomWidth);let R;x?y&&I(C(y.rect),j(x.rect))?R=(C(y.rect)+j(x.rect))/2:R=j(x.rect)-w*(Math.max(z(x.el,"start"),E)/2):y?R=C(y.rect)+w*(Math.max(z(y.el,"end"),E)/2):R=_?S?v.right-B-f(m.paddingRight):v.left+O+f(m.paddingLeft):S?v.bottom-N-f(m.paddingBottom):v.top+L+f(m.paddingTop),o(_?{top:((i=k==null?void 0:k.rect.top)!=null?i:v.top+L+f(m.paddingTop))-v.top+c.scrollTop-L,height:(s=k==null?void 0:k.rect.height)!=null?s:v.height-L-N-f(m.paddingTop)-f(m.paddingBottom),left:va(R-v.left+c.scrollLeft-O,0,c.scrollWidth),width:rh,transform:"translateX(-50%)"}:{left:((a=k==null?void 0:k.rect.left)!=null?a:v.left+O+f(m.paddingLeft))-v.left+c.scrollLeft-O,width:(l=k==null?void 0:k.rect.width)!=null?l:v.width-O-B-f(m.paddingLeft)-f(m.paddingRight),top:va(R-v.top+c.scrollTop-L,0,c.scrollHeight),height:rh,transform:"translateY(-50%)"})},[e,t,r]),n?u.jsx("div",{className:NP("linePlaceholder"),style:n,"data-puck-line-placeholder":!0}):null},BP=ee("DropZone",Cy),$P=({element:e,label:t,override:r})=>e?u.jsx("div",{dangerouslySetInnerHTML:{__html:e.outerHTML}}):u.jsx(qc,{name:t,children:r}),Uc=e=>u.jsx($y,D({},e)),WP=({zoneCompound:e,componentId:t,index:r,dragAxis:n,collisionAxis:o,inDroppableZone:i,itemRef:s})=>{var a,l,c,p;const d=H(G=>G.metadata),f=g.useContext(zo),{depth:h=1}=f??{},v=g.useContext(Ve),m=H($e(G=>{var te;return(te=G.state.indexes.nodes[t])==null?void 0:te.flatData.props})),y=H(G=>{var te;return(te=G.state.indexes.nodes[t])==null?void 0:te.data.type}),x=H($e(G=>{var te;return(te=G.state.indexes.nodes[t])==null?void 0:te.data.readOnly})),k=ye(),b=g.useMemo(()=>{if(m)return Mh({type:y,props:m});const G=v.getState().previewIndex[e];return t===(G==null?void 0:G.props.id)?{type:G.componentType,props:G.props,previewType:G.type,element:G.element}:null},[k,t,e,y,m]),_=H(G=>b!=null&&b.type?G.config.components[b.type]:null),S=g.useMemo(()=>({renderDropZone:Uc,isEditing:!0,dragRef:null,metadata:D(D({},d),_==null?void 0:_.metadata)}),[d,_==null?void 0:_.metadata]),w=H(G=>G.overrides),j=H(G=>{var te;return((te=G.componentState[t])==null?void 0:te.loadingCount)>0}),C=H(G=>{var te;return((te=G.selectedItem)==null?void 0:te.props.id)===t||!1}),I=J("label-component"),E=J("canvas-noconfig",{type:(l=(a=b==null?void 0:b.type)==null?void 0:a.toString())!=null?l:""});let z=(p=(c=_==null?void 0:_.label)!=null?c:b==null?void 0:b.type.toString())!=null?p:I;const O=g.useMemo(()=>F(D(D({},_==null?void 0:_.defaultProps),b==null?void 0:b.props),{puck:S,editMode:!0}),[_==null?void 0:_.defaultProps,b==null?void 0:b.props,S]),L=g.useMemo(()=>{var G;return{type:(G=b==null?void 0:b.type)!=null?G:y,props:O}},[b==null?void 0:b.type,y,O]),B=H(G=>G.config),N=H(G=>G.plugins),R=H(G=>G.fieldTransforms),q=g.useMemo(()=>D(D(D(D(D({},Ou(Uc,G=>u.jsx(EP,{componentId:t,zone:G.zone}))),PP()),zP()),N.reduce((G,te)=>D(D({},G),te.fieldTransforms),{})),R),[N,R]),W=Ry(B,L,q,x,j);if(!b)return;const $=_?_.render:()=>u.jsx("div",{style:{padding:48,textAlign:"center"},children:E});let Z=b.type;const oe="previewType"in b?b.previewType==="insert":!1;return u.jsx(Xj,{id:t,componentType:Z,zoneCompound:e,depth:h+1,index:r,isLoading:j,isSelected:C,label:z,autoDragAxis:n,userDragAxis:o,inDroppableZone:i,itemRef:s,children:G=>{var te;return _!=null&&_.inline&&!oe?u.jsx(th,{Component:$,componentProps:F(D({},W),{puck:F(D({},W.puck),{dragRef:G})})}):u.jsx("div",{ref:G,children:oe?u.jsx($P,{label:z,override:(te=w.componentItem)!=null?te:w.drawerItem,element:"element"in b&&b.element?b.element:void 0}):u.jsx(th,{Component:$,componentProps:W})})}})},nh=g.memo(WP),$y=g.forwardRef(function({zone:t,allow:r,disallow:n,style:o,className:i,minEmptyHeight:s="128px",collisionAxis:a,as:l},c){const p=g.useContext(zo),d=ye(),{areaId:f,depth:h=0,registerLocalZone:v,unregisterLocalZone:m}=p??{},y=H($e(P=>{var M;return f?(M=P.state.indexes.nodes[f])==null?void 0:M.path:null}));let x=et;f&&t!==et&&(x=`${f}:${t}`);const k=x===et||t===et||f==="root",b=Jt(Ve,P=>P.nextAreaDepthIndex[f||""]),_=H($e(P=>{var M;return(M=P.state.indexes.zones[x])==null?void 0:M.contentIds})),S=H($e(P=>{var M;return(M=P.state.indexes.zones[x])==null?void 0:M.type}));g.useEffect(()=>{(!S||S==="dropzone")&&p!=null&&p.registerZone&&(p==null||p.registerZone(x))},[S,d]),g.useEffect(()=>{S==="dropzone"&&x!==et&&console.warn("DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots")},[S]);const w=g.useMemo(()=>_||[],[_]),j=g.useRef(null),C=g.useCallback(P=>Iy(P,{allow:r,disallow:n}),[r,n]),I=Jt(Ve,P=>{var M;const T=(M=P.draggedItem)==null?void 0:M.data.componentType;return C(T)}),E=b||k,z=Jt(Ve,P=>{var M;let T=!0;return T=(M=P.zoneDepthIndex[x])!=null?M:!1,T&&(T=I),T});g.useEffect(()=>(v&&v(x,I||z),()=>{m&&m(x)}),[I,z,x]);const[O,L]=xP(w,x),B=L&&!L.linePlaceholder?1:0,N=O.length===B,R=z&&N,q=g.useContext(Ve);g.useEffect(()=>{const{enabledIndex:P}=q.getState();q.setState({enabledIndex:F(D({},P),{[x]:z})})},[z,q,x]);const W={id:x,collisionPriority:z?h:0,disabled:!R,collisionDetector:gy,type:"dropzone",data:{areaId:f,depth:h,isDroppableTarget:I,path:y||[]}},{ref:$}=Md(W),Z=H(P=>(P==null?void 0:P.selectedItem)&&f===(P==null?void 0:P.selectedItem.props.id)),[oe]=SP(j,a),[G,te]=yP({zoneCompound:x,userMinEmptyHeight:s,ref:j}),be=g.useCallback(P=>{Vc([j,$,c],P)},[$]),Q=H(P=>P._experimentalVirtualization),ie=l??"div",Y=Q&&((f??hn)===hn&&h===0);return u.jsxs(ie,{className:`${BP({isRootZone:k,hoveringOverArea:E,isEnabled:z,isAreaSelected:Z,hasChildren:w.length>0,isAnimating:te})}${i?` ${i}`:""}`,ref:be,"data-testid":`dropzone:${x}`,"data-puck-dropzone":x,style:F(D({},o),{"--puck-slot-min-empty-height":G,backgroundColor:o==null?void 0:o.backgroundColor}),children:[Y?u.jsx(LP,{contentIds:O,zoneCompound:x,renderItem:P=>u.jsx(nh,{zoneCompound:x,componentId:P.componentId,dragAxis:oe,index:P.index,collisionAxis:a,inDroppableZone:I,itemRef:P.measureRef},P.componentId)}):O.map((P,M)=>u.jsx(nh,{zoneCompound:x,componentId:P,dragAxis:oe,index:M,collisionAxis:a,inDroppableZone:I},P)),(L==null?void 0:L.linePlaceholder)&&u.jsx(FP,{zoneRef:j,contentIds:w,index:L.index})]})}),HP=({config:e,item:t,metadata:r})=>{const n=e.components[t.type],o=Du(e,t,a=>u.jsx(Mu,F(D({},a),{config:e,metadata:r}))),i=g.useMemo(()=>({areaId:o.id,depth:1}),[o]),s=za(n.fields,o);return u.jsx(Oi,{value:i,children:u.jsx(n.render,F(D(D({},o),s),{puck:F(D({},o.puck),{renderDropZone:Zc,metadata:D(D({},r),n.metadata)})}))},o.id)},Zc=e=>u.jsx(Wy,D({},e)),Wy=g.forwardRef(function({className:t,style:r,zone:n,as:o},i){const s=g.useContext(zo),{areaId:a="root"}=s||{},{config:l,data:c,metadata:p}=g.useContext(Gc);let d=`${a}:${n}`,f=(c==null?void 0:c.content)||[];g.useEffect(()=>{f||s!=null&&s.registerZone&&(s==null||s.registerZone(d))},[f]);const h=o??"div";return!c||!l?null:(d!==et&&(f=Rh(c,d).zones[d]),u.jsx(h,{className:t,style:r,ref:i,children:f.map(v=>l.components[v.type]?u.jsx(HP,{config:l,item:v,metadata:p},v.props.id):null)}))}),Yc=e=>u.jsx(VP,D({},e)),VP=g.forwardRef(function(t,r){const n=g.useContext(zo);return(n==null?void 0:n.mode)==="edit"?u.jsx(u.Fragment,{children:u.jsx($y,F(D({},t),{ref:r}))}):u.jsx(u.Fragment,{children:u.jsx(Wy,F(D({},t),{ref:r}))})}),Gc=fn.createContext({config:{components:{}},data:{root:{},content:[]},metadata:{}});function qP({config:e,data:t,metadata:r={}}){var n,o;const i=F(D({},t),{root:t.root||{},content:t.content||[]}),s="props"in i.root?i.root.props:i.root,a=(s==null?void 0:s.title)||"",l=F(D({},s),{puck:{renderDropZone:Yc,isEditing:!1,dragRef:null,metadata:r},title:a,editMode:!1,id:"puck-root"}),c=Du(e,{type:"root",props:l},f=>u.jsx(Cg,F(D({},f),{config:e,metadata:r}))),p=za((n=e.root)==null?void 0:n.fields,l),d=g.useMemo(()=>({mode:"render",depth:0}),[]);return(o=e.root)!=null&&o.render?u.jsx(Gc.Provider,{value:{config:e,data:i,metadata:r},children:u.jsx(Oi,{value:d,children:u.jsx(e.root.render,F(D(D({},c),p),{children:u.jsx(Zc,{zone:$l})}))})}):u.jsx(Gc.Provider,{value:{config:e,data:i,metadata:r},children:u.jsx(Oi,{value:d,children:u.jsx(Zc,{zone:$l})})})}A();A();function UP(e,t,r){return Se(this,null,function*(){const n=t().state.indexes.nodes[e];if(!n){console.warn(`Warning: Could not find component with id "${e}" to resolve its data. Component may have been removed or the id is invalid.`);return}yield Oo(n.data,t,r)})}A();function ZP(e,t,r){return Se(this,null,function*(){const n=rt(e,t().state);if(!n){console.warn(`Warning: Could not find component for selector "${JSON.stringify(e)}" to resolve its data. Component may have been removed or the selector is invalid.`);return}const o=vo(n);yield Oo(o,t,r)})}var oh=(e,t)=>{const r={back:e.history.back,forward:e.history.forward,setHistories:e.history.setHistories,setHistoryIndex:e.history.setHistoryIndex,hasPast:e.history.hasPast(),hasFuture:e.history.hasFuture(),histories:e.history.histories,index:e.history.index},n={appState:gi(e.state),config:e.config,dispatch:e.dispatch,getPermissions:e.permissions.getPermissions,refreshPermissions:e.permissions.refreshPermissions,resolveDataById:(o,i)=>UP(o,t,i),resolveDataBySelector:(o,i)=>ZP(o,t,i),history:r,selectedItem:e.selectedItem||null,getItemBySelector:o=>rt(o,e.state),getItemById:o=>e.state.indexes.nodes[o].data,getSelectorForId:o=>Gi(e.state,o),getParentById:o=>{const s=e.state.indexes.nodes[o].parentId;if(s===null)return;const a=e.state.indexes.nodes[s];if(a)return a.data},dictionary:e.dictionary};return n.__private={appState:e.state},n},YP=g.createContext(null),ih=e=>({state:e.state,config:e.config,dispatch:e.dispatch,permissions:e.permissions,history:e.history,selectedItem:e.selectedItem,dictionary:e.dictionary}),GP=e=>{const[t]=g.useState(()=>Gr(()=>oh(ih(e.getState()),e.getState)));return g.useEffect(()=>e.subscribe(r=>ih(r),r=>{t.setState(oh(r,e.getState))}),[]),t};A();A();A();A();A();var KP={ComponentList:"_ComponentList_htktj_1","ComponentList--isExpanded":"_ComponentList--isExpanded_htktj_5","ComponentList-content":"_ComponentList-content_htktj_9","ComponentList-title":"_ComponentList-title_htktj_17","ComponentList-titleIcon":"_ComponentList-titleIcon_htktj_63"},xs=ee("ComponentList",KP),Hy=({name:e,label:t})=>{var r;const n=H(i=>i.overrides),o=H(i=>i.permissions.getPermissions({type:e}).insert);return g.useEffect(()=>{n.componentItem&&console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`")},[n]),u.jsx(Kd.Item,{label:t,name:e,isDragDisabled:!o,children:(r=n.componentItem)!=null?r:n.drawerItem})},eo=({children:e,title:t,id:r})=>{const n=H(p=>p.config),o=H(p=>p.setUi),i=H(p=>p.state.ui.componentList),{expanded:s=!0}=i[r]||{},a=`puck-drawer-category-${r}`,l=J("drawer-category-collapse",{title:t??""}),c=J("drawer-category-expand",{title:t??""});return u.jsxs("div",{className:xs({isExpanded:s}),children:[t&&u.jsxs("button",{type:"button",className:xs("title"),"aria-expanded":s,"aria-controls":a,onClick:()=>o({componentList:F(D({},i),{[r]:F(D({},i[r]),{expanded:!s})})}),title:s?l:c,children:[u.jsx("div",{children:t}),u.jsx("div",{className:xs("titleIcon"),children:s?u.jsx(ig,{size:12}):u.jsx(wi,{size:12})})]}),u.jsx("div",{className:xs("content"),id:a,children:u.jsx(Kd,{children:e||Object.keys(n.components).map(p=>{var d;return u.jsx(Hy,{label:(d=n.components[p].label)!=null?d:p,name:p},p)})})})]})};eo.Item=Hy;var XP=()=>{const[e,t]=g.useState(),r=H(i=>i.config),n=H(i=>i.state.ui.componentList),o=J("drawer-category-other");return g.useEffect(()=>{var i,s,a;if(Object.keys(n).length>0){const l=[];let c;c=Object.entries(n).map(([d,f])=>{var h,v;return!f.components||(f.components.forEach(m=>{l.push(m)}),f.visible===!1)?null:u.jsx(eo,{id:d,title:((v=(h=r.categories)==null?void 0:h[d])==null?void 0:v.title)||f.title||d,children:f.components.map((m,y)=>{var x;const k=r.components[m]||{};return u.jsx(eo.Item,{label:(x=k.label)!=null?x:m,name:m,index:y},m)})},d)});const p=Object.keys(r.components).filter(d=>l.indexOf(d)===-1);p.length>0&&!((i=n.other)!=null&&i.components)&&((s=n.other)==null?void 0:s.visible)!==!1&&c.push(u.jsx(eo,{id:"other",title:((a=n.other)==null?void 0:a.title)||o,children:p.map((d,f)=>{var h;const v=r.components[d]||{};return u.jsx(eo.Item,{name:d,label:(h=v.label)!=null?h:d,index:f},d)})},"other")),t(c)}},[r.categories,r.components,n,o]),e},Vy=()=>{const e=H(n=>n.overrides),t=XP(),r=g.useMemo(()=>(e.components&&console.warn("The `components` override has been deprecated and renamed to `drawer`"),e.components||e.drawer||"div"),[e]);return u.jsx(r,{children:t||u.jsx(eo,{id:"all"})})};A();var JP={BlocksPlugin:"_BlocksPlugin_9af19_1"},QP=ee("BlocksPlugin",JP),eA=(e={})=>{var t,r;return{name:"blocks",label:(t=e.label)!=null?t:"Blocks",render:()=>u.jsx("div",{className:QP(),children:u.jsx(Vy,{})}),icon:(r=e.icon)!=null?r:u.jsx(pw,{})}};A();A();A();var tA=(e,t)=>Object.keys(e.indexes.zones).filter(r=>r.split(":")[0]===t);A();A();A();A();A();A();A();function rA(e,t){if(typeof e!="string")throw new Error(`Can't get field definition for path (${e}): Path should be a string`);if(!t||typeof t!="object")return;const r=e.split(/\.|\[\d+\]/).filter(Boolean);let n=t,o;for(let i=0;i<r.length;i++){const s=r[i];if(o=n[s],i===r.length-1)return o;if(!o||(o.type!=="object"||!o.objectFields)&&(o.type!=="array"||!o.arrayFields))return;o.type==="object"&&(n=o.objectFields),o.type==="array"&&(n=o.arrayFields)}}var qy=(e,t,r)=>{var n;const[o,i]=e.split(":");if(!i)return;const s=(n=r[o])==null?void 0:n.data.type,a=s&&s!==hn?t.components[s]:t.root;return rA(i,a==null?void 0:a.fields)},sh={},nA=(e,t,r)=>{var n;if(((n=r.zones[e])==null?void 0:n.type)!=="slot")return sh;const o=qy(e,t,r.nodes);return(o==null?void 0:o.type)!=="slot"?sh:{allow:o.allow,disallow:o.disallow}},Uy="outline-item",oA="outline-zone",Xd=(e,t,r)=>{const n=e.get(t);if(n!==void 0)return n;const o=r();return e.set(t,o),o},ga=(e,t,r,n,o)=>Xd(e,`zone:${t}`,()=>{const i=nA(t,n,o);return Iy(r,i)}),iA=(e,t,r,n,o)=>Xd(e,`childZones:${t}`,()=>Object.keys(o.zones).some(i=>i.startsWith(`${t}:`)&&ga(e,i,r,n,o))),sA=(e,t,r,n)=>Xd(e,`subtree:${t}`,()=>{var o;return t===r?!0:(((o=n[t])==null?void 0:o.path)||[]).some(s=>s.split(":")[0]===r)}),Zy=(e,t)=>r=>{if(r.type!==Uy)return!1;const n=r.data,o=e.outlineStore.getState().acceptCache,{config:i,state:s}=e.appStore.getState(),a=s.indexes,l=t.kind==="row"?t.itemId:t.zoneCompound.split(":")[0];return sA(o,l,n.itemId,a.nodes)?!1:t.kind==="zone"?ga(o,t.zoneCompound,n.componentType,i,a):ga(o,t.zoneCompound,n.componentType,i,a)||iA(o,t.itemId,n.componentType,i,a)};A();var aA=600,Yy=()=>{let e=null,t=null;const r=()=>{e!==null&&(clearTimeout(e),e=null),t=null};return Gr((n,o)=>({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map,startDrag:i=>n({status:"dragging",draggedRow:i,acceptCache:new Map}),setTarget:(i,s)=>{var a,l,c,p;const d=o();((a=d.indicator)==null?void 0:a.targetId)===i.targetId&&((l=d.indicator)==null?void 0:l.position)===i.position&&((c=d.drop)==null?void 0:c.zone)===s.zone&&((p=d.drop)==null?void 0:p.index)===s.index||n({indicator:i,drop:s})},clearTarget:()=>{o().indicator===null&&o().drop===null||n({indicator:null,drop:null})},scheduleExpand:(i,s)=>{t===i||o().tempExpandedIds.has(i)||(r(),t=i,n({expandCandidateId:i}),e=setTimeout(()=>{e=null,t=null,n(a=>({tempExpandedIds:new Set(a.tempExpandedIds).add(i),expandCandidateId:null})),s()},aA))},cancelPendingExpand:()=>{r(),o().expandCandidateId!==null&&n({expandCandidateId:null})},endDrag:()=>{r(),n({status:"dropping",indicator:null,drop:null,expandCandidateId:null})},reset:()=>{r(),n({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map})}}))},Jd=g.createContext(Yy()),Ya=()=>g.useContext(Jd),Qd=e=>Jt(Jd,e),lA=({kind:e,zoneCompound:t})=>{const r=ye(),n=Ya(),o=`${e}:${t}`,i=g.useMemo(()=>Zy({appStore:r,outlineStore:n},{kind:"zone",zoneCompound:t}),[r,n,t]),{ref:s}=Md({id:o,type:oA,accept:i,collisionDetector:gy,data:{kind:"zone",zoneCompound:t}}),a=Qd(c=>{var p;return((p=c.indicator)==null?void 0:p.targetId)===o});return g.useMemo(()=>({isDropTarget:a,ref:s}),[a,s])},Gy=lA;A();A();var cA={DropLine:"_DropLine_eyz3q_2","DropLine--top":"_DropLine--top_eyz3q_12","DropLine--bottom":"_DropLine--bottom_eyz3q_16","DropLine--outset":"_DropLine--outset_eyz3q_20"},uA=ee("DropLine",cA),ep=({edge:e,outset:t})=>u.jsx("div",{className:uA({top:e==="top",bottom:e==="bottom",outset:!!t})});A();A();A();A();var dA=(...e)=>[...e].filter(Boolean).join(" "),Ky=dA;A();var pA={"LayerTree-helper":"_LayerTree-helper_1m7e4_2","LayerTree-helperRoot":"_LayerTree-helperRoot_1m7e4_11"},ah=ee("LayerTree",pA),Xy=({zoneCompound:e})=>{const{ref:t,isDropTarget:r}=Gy({kind:"empty",zoneCompound:e}),n=J("outline-empty"),[o]=e.split(":"),i=o===hn;return u.jsxs("li",{className:Ky(ah("helper"),i?ah("helperRoot"):void 0),"data-puck-drop-target":r||void 0,ref:t,children:[n,r&&u.jsx(ep,{edge:"top"})]})};A();A();var fA=({componentType:e,index:t,itemId:r,zoneCompound:n})=>{const o=ye(),i=Ya(),s=g.useMemo(()=>Zy({appStore:o,outlineStore:i},{kind:"row",itemId:r,zoneCompound:n}),[o,i,r,n]),a=g.useMemo(()=>Wd("y"),[]),{handleRef:l,ref:c,isDragSource:p}=Nd({id:r,index:t,group:n,type:Uy,accept:s,data:{kind:"row",itemId:r,zoneCompound:n,index:t,componentType:e},collisionPriority:1,collisionDetector:a,transition:{duration:0},plugins:m=>[...m,Wi.configure({feedback:"clone",dropAnimation:null})]}),{indicatorPosition:d,isExpandCandidate:f,isTempExpanded:h}=Qd(m=>{var y;return{indicatorPosition:((y=m.indicator)==null?void 0:y.targetId)===r?m.indicator.position:null,isExpandCandidate:m.expandCandidateId===r,isTempExpanded:m.tempExpandedIds.has(r)}});return{rowRef:g.useCallback(m=>{c(m),l(m)},[c,l]),isDragSource:p,indicatorPosition:d,isExpandCandidate:f,isTempExpanded:h}};A();var hA={Layer:"_Layer_onfgu_1","Layer-inner":"_Layer-inner_onfgu_8","Layer--isSortable":"_Layer--isSortable_onfgu_18","Layer-content":"_Layer-content_onfgu_22","Layer-clickable":"_Layer-clickable_onfgu_29","Layer-caret":"_Layer-caret_onfgu_57","Layer--containsZone":"_Layer--containsZone_onfgu_68","Layer-title":"_Layer-title_onfgu_76","Layer-name":"_Layer-name_onfgu_85","Layer-icon":"_Layer-icon_onfgu_91","Layer-zones":"_Layer-zones_onfgu_101","Layer--isExpanded":"_Layer--isExpanded_onfgu_106","Layer--isSelected":"_Layer--isSelected_onfgu_115","Layer--isExpandCandidate":"_Layer--isExpandCandidate_onfgu_138","Layer--isDragSource":"_Layer--isDragSource_onfgu_143"};A();A();var vA={LayerActions:"_LayerActions_d90t9_2","LayerActions--visible":"_LayerActions--visible_d90t9_18"},gA=ee("LayerActions",vA),mA=({node:e,visible:t})=>{const r=H(c=>c.dispatch),n=Ya(),o=H($e(c=>{const p=rt({index:e.index,zone:e.zoneCompound},c.state),d=c.permissions.getPermissions({item:p});return{delete:d.delete,duplicate:d.duplicate}})),i=J("outline-item-duplicate"),s=J("outline-item-delete"),a=g.useCallback(c=>{c.stopPropagation(),n.getState().status==="idle"&&r({type:"remove",index:e.index,zone:e.zoneCompound})},[r,n,e]),l=g.useCallback(c=>{c.stopPropagation(),n.getState().status==="idle"&&r({type:"duplicate",sourceIndex:e.index,sourceZone:e.zoneCompound})},[r,n,e.index,e.zoneCompound]);return!o.delete&&!o.duplicate?null:u.jsxs("div",{className:gA({visible:t}),children:[o.duplicate&&u.jsx(Xe,{onClick:l,title:i,type:"button",children:u.jsx(ju,{})}),o.delete&&u.jsx(Xe,{onClick:a,title:s,type:"button",children:u.jsx(Pu,{})})]})},sr=ee("Layer",hA),Jy=g.forwardRef(function({dataIndex:t,depth:r,isSelected:n,node:o,selectedId:i},s){const a=H(I=>I.dispatch),l=H(I=>{var E,z;return(z=(E=I.state.ui.itemExpanded)==null?void 0:E[o.itemId])!=null?z:!1}),c=Jt(Ve,I=>I.hoveringComponent===o.itemId),p=H(I=>{var E;const z=rt({index:o.index,zone:o.zoneCompound},I.state);return(E=I.permissions.getPermissions({item:z}))==null?void 0:E.drag}),{indicatorPosition:d,isDragSource:f,isExpandCandidate:h,isTempExpanded:v,rowRef:m}=fA({componentType:o.componentType,index:o.index,itemId:o.itemId,zoneCompound:o.zoneCompound}),y=g.useContext(Ve),x=Ya(),k=J("outline-item-collapse"),b=J("outline-item-expand"),_=o.childZones.length>0,S=g.useCallback(I=>{a({type:"setUi",ui:{itemSelector:I}})},[a]),w=l||v,j=d!==null,C=o.childZones.length!==1;return u.jsxs("li",{ref:s,className:sr({containsZone:_,isDragSource:f,isExpandCandidate:h,isExpanded:w,isHovering:c,isSelected:n,isSortable:p}),"data-index":t,"data-puck-layer-tree-id":o.itemId,children:[j&&u.jsx(ep,{edge:d==="before"?"top":"bottom",outset:!0}),u.jsxs("div",{className:sr("inner"),ref:m,onMouseEnter:I=>{I.stopPropagation(),x.getState().status==="idle"&&y.setState({hoveringComponent:o.itemId})},onMouseLeave:I=>{I.stopPropagation(),y.setState({hoveringComponent:null})},children:[u.jsx("div",{className:sr("caret"),children:u.jsx(Xe,{onClick:I=>{I.stopPropagation(),x.getState().status==="idle"&&a({type:"setUi",ui:E=>{var z;const O=D({},E.itemExpanded);return(z=E.itemExpanded)!=null&&z[o.itemId]?delete O[o.itemId]:O[o.itemId]=!0,{itemExpanded:O}},recordHistory:!1})},title:l?k:b,type:"button",children:u.jsx(og,{})})}),u.jsxs("div",{className:sr("content"),children:[u.jsx("button",{type:"button",className:sr("clickable"),onClick:()=>{x.getState().status==="idle"&&(S({index:o.index,zone:o.zoneCompound}),y.getState().scrollToComponent(o.itemId))},children:u.jsxs("div",{className:sr("title"),children:[u.jsx("div",{className:sr("icon"),children:o.componentType==="Text"||o.componentType==="Heading"?u.jsx(Aa,{}):u.jsx(xw,{})}),u.jsx("div",{className:sr("name"),children:o.label})]})}),u.jsx(mA,{node:o,visible:c&&!f})]})]}),_&&w&&o.childZones.map(I=>u.jsx("div",{className:sr("zones"),children:u.jsx(rb,{depth:C?r+1:r,selectedId:i,tree:C?I:F(D({},I),{label:void 0})})},I.zoneCompound))]})});A();var Qy={LayerTree:"_LayerTree_o5tyt_1","LayerTree--nested":"_LayerTree--nested_o5tyt_12"},_A=ee("LayerTree",Qy),yA=({depth:e,selectedId:t,tree:r})=>u.jsxs("ul",{className:_A({nested:e>0}),children:[r.items.length===0&&u.jsx(Xy,{zoneCompound:r.zoneCompound}),r.items.map(n=>u.jsx(Jy,{depth:e,isSelected:t===n.itemId,node:n,selectedId:t},n.itemId))]});A();var bA=ee("LayerTree",Qy),eb=32,xA=8,tb=new Map,kA=e=>{var t;return(t=tb.get(e))!=null?t:eb},wA=(e,t)=>{t<=0||tb.set(e,t)},SA=e=>{var t;let r=(t=e==null?void 0:e.parentElement)!=null?t:null;for(;r;){const{overflow:n,overflowY:o}=getComputedStyle(r);if([n,o].some(i=>/auto|scroll/.test(i)))return r;r=r.parentElement}return null},EA=({depth:e,selectedId:t,tree:r})=>{const n=g.useRef(null),o=Qd(h=>{var v;return((v=h.draggedRow)==null?void 0:v.zoneCompound)===r.zoneCompound?h.draggedRow.index:null}),i=g.useCallback(h=>{const v=Fd(h);return o!==null&&!v.includes(o)&&(v.push(o),v.sort((m,y)=>m-y)),v},[o]),s=uy({count:r.items.length,estimateSize:h=>kA(r.items[h].itemId),getItemKey:h=>r.items[h].itemId,getScrollElement:()=>SA(n.current),overscan:xA,rangeExtractor:i,measureElement:h=>{const v=Math.ceil(h.getBoundingClientRect().height),m=h.dataset.puckLayerTreeId;return m&&wA(m,v),v||eb}}),a=s.getVirtualItems(),l=s.getTotalSize(),c=[];let p=0,d=-1;a.forEach(h=>{const v=r.items[h.index],m=Math.max(h.start-p,0);m>0&&c.push(u.jsx("li",{"aria-hidden":"true",style:{height:`${m}px`}},`gap:${r.zoneCompound}:${d}:${h.index}`)),c.push(u.jsx(Jy,{dataIndex:h.index,depth:e,isSelected:t===v.itemId,node:v,ref:s.measureElement,selectedId:t},v.itemId)),p=h.end,d=h.index});const f=Math.max(l-p,0);return f>0&&c.push(u.jsx("li",{"aria-hidden":"true",style:{height:`${f}px`}},`gap:${r.zoneCompound}:${d}:end`)),u.jsxs("ul",{className:bA({nested:e>0}),ref:n,children:[r.items.length===0&&u.jsx(Xy,{zoneCompound:r.zoneCompound}),c]})};A();var CA={"LayerTree-zoneTitle":"_LayerTree-zoneTitle_fvhlh_2","LayerTree-zoneIcon":"_LayerTree-zoneIcon_fvhlh_19"},lh=ee("LayerTree",CA),IA=25,jA=({label:e,zoneCompound:t})=>{const{ref:r,isDropTarget:n}=Gy({kind:"label",zoneCompound:t});return u.jsxs("div",{className:lh("zoneTitle"),"data-puck-drop-target":n||void 0,ref:r,children:[u.jsx("div",{className:lh("zoneIcon"),children:u.jsx(sg,{})}),e,n&&u.jsx(ep,{edge:"bottom"})]})},rb=({depth:e,selectedId:t,tree:r})=>{const n=e===0&&r.items.length>=IA;return u.jsxs(u.Fragment,{children:[r.label&&u.jsx(jA,{label:r.label,zoneCompound:r.zoneCompound}),n?u.jsx(EA,{depth:e,selectedId:t,tree:r}):u.jsx(yA,{depth:e,selectedId:t,tree:r})]})};A();A();A();function PA(e,t){return Object.keys(t).some(r=>r.startsWith(`${e}:`))}var AA=2,zA=60,OA=(e,t)=>{let r,n=0,o=0;const i=()=>{var s;const a=(s=_t())==null?void 0:s.querySelector(`[data-puck-component="${e}"]`),l=a?a.getBoundingClientRect().top:null;if(n=l===r?n+1:0,r=l,o+=1,n>=AA||o>=zA){t(e);return}requestAnimationFrame(i)};requestAnimationFrame(i)},nb=e=>{if(typeof document>"u")return;const t=document.getElementById("preview-frame");e?t==null||t.setAttribute("data-puck-outline-dragging","true"):t==null||t.removeAttribute("data-puck-outline-dragging")},DA=(e,t)=>{const r=e.operation.source,n=r==null?void 0:r.data;if(!r||!n)return;const o=t.appStore.getState(),i=rt({zone:n.zoneCompound,index:n.index},o.state);if(!i||!o.permissions.getPermissions({item:i}).drag){e.preventDefault();return}t.outlineDndStore.getState().startDrag({itemId:n.itemId,zoneCompound:n.zoneCompound,index:n.index,componentType:n.componentType}),nb(!0),o.dispatch({type:"setUi",ui:{isDragging:!0},recordHistory:!1})},ch=(e,t,r)=>{var n,o;const i=r.outlineDndStore.getState(),s=i.draggedRow;if(!s)return;const a=e.operation.target;if(!a){i.cancelPendingExpand(),i.clearTarget();return}const l=a.data;if(l.kind==="zone"){i.cancelPendingExpand(),i.setTarget({targetId:a.id.toString(),position:"inside"},{zone:l.zoneCompound,index:0});return}const{config:c,state:p}=r.appStore.getState(),d=p.indexes,f=i.acceptCache;if(ga(f,l.zoneCompound,s.componentType,c,d)){const m=(n=t.collisionObserver.collisions[0])==null?void 0:n.data,y=Hd(m==null?void 0:m.direction);i.setTarget({targetId:a.id.toString(),position:y},{zone:l.zoneCompound,index:Vd({position:y,sourceIndex:s.index,targetIndex:l.index,isSameZone:l.zoneCompound===s.zoneCompound})})}else i.clearTarget();const h=!!((o=p.ui.itemExpanded)!=null&&o[l.itemId])||i.tempExpandedIds.has(l.itemId),v=PA(l.itemId,d.zones);!h&&v?i.scheduleExpand(l.itemId,()=>{requestAnimationFrame(()=>t.collisionObserver.forceUpdate(!0))}):i.cancelPendingExpand()},MA=(e,t)=>{const{source:r}=e.operation,n=t.outlineDndStore.getState(),o=n.draggedRow,i=e.canceled?null:n.drop,s=t.appStore.getState().dispatch;if(nb(!1),o&&i){Ay(o.itemId,{zone:o.zoneCompound,index:o.index},{zone:i.zone,index:i.index},t.appStore);const l=i.zone!==o.zoneCompound||i.index!==o.index;s({type:"setUi",ui:{itemSelector:{zone:i.zone,index:i.index},isDragging:!1},recordHistory:l}),OA(o.itemId,t.scrollToComponent)}else s({type:"setUi",ui:{isDragging:!1},recordHistory:!1});n.endDrag();const a=()=>t.outlineDndStore.getState().reset();if(!r||r.status==="idle")a();else{const l=ft(()=>{r.status==="idle"&&(a(),l==null||l())})}},RA=[],TA=({children:e})=>{const t=ye(),r=g.useContext(Ve),[n]=g.useState(()=>Yy()),o=H(a=>{var l,c;return(c=(l=a.dnd)==null?void 0:l.disableOutlineDrag)!=null?c:!1}),i=$d({mouse:[new cr.Distance({value:5})]}),s=g.useMemo(()=>({outlineDndStore:n,appStore:t,scrollToComponent:a=>r.getState().scrollToComponent(a)}),[n,t,r]);return u.jsx(Jd.Provider,{value:n,children:u.jsx(zd,{sensors:o?RA:i,onBeforeDragStart:a=>{DA(a,s)},onDragOver:(a,l)=>{a.preventDefault(),ch(a,l,s)},onDragMove:(a,l)=>{ch(a,l,s)},onDragEnd:a=>{MA(a,s)},children:e})})};A();var LA={LayerTreeRoot:"_LayerTreeRoot_1qowl_1"};A();var NA=e=>{const t={};return Object.keys(e).forEach(r=>{const[n]=r.split(":");n&&(t[n]||(t[n]=[]),t[n].push(r))}),t},FA=(e,t,r,n)=>{var o,i;if(n!==void 0)return n;const[,s]=e.split(":");if(s)return(i=(o=qy(e,r,t))==null?void 0:o.label)!=null?i:s},BA=({config:e,itemId:t,index:r,nodes:n,zoneCompound:o,zones:i,zonesByParent:s,componentFallbackLabel:a})=>{var l,c,p,d;const f=n[t],h=(c=(l=f==null?void 0:f.data.type)==null?void 0:l.toString())!=null?c:a,v=(d=(p=e.components[h])==null?void 0:p.label)!=null?d:h;return{childZones:(s[t]||[]).map(y=>ob({config:e,nodes:n,zoneCompound:y,zones:i,zonesByParent:s})),componentType:h,index:r,itemId:t,label:v,zoneCompound:o}},ob=({config:e,label:t,nodes:r,zoneCompound:n,zones:o,zonesByParent:i=NA(o),componentFallbackLabel:s})=>{var a,l;return{items:((l=(a=o[n])==null?void 0:a.contentIds)!=null?l:[]).map((p,d)=>BA({config:e,itemId:p,index:d,nodes:r,zoneCompound:n,zones:o,zonesByParent:i})),label:FA(n,r,e,t),zoneCompound:n}},$A=ee("LayerTreeRoot",LA),WA=({selectedId:e,trees:t})=>{const r=H(n=>{var o,i;return(i=(o=n.dnd)==null?void 0:o.disableOutlineDrag)!=null?i:!1});return u.jsx(TA,{children:u.jsx("div",{className:$A(),"data-puck-dnd-disabled":r||void 0,children:t.map(n=>u.jsx(rb,{depth:0,selectedId:e,tree:n},n.zoneCompound))})})};A();A();var HA={CollapseAll:"_CollapseAll_1r4cy_1","CollapseAll-icon":"_CollapseAll-icon_1r4cy_5","CollapseAll--visible":"_CollapseAll--visible_1r4cy_10"},uh=ee("CollapseAll",HA);function VA({className:e}){const t=H(i=>{var s;return Object.keys((s=i.state.ui.itemExpanded)!=null?s:{}).length>0}),r=H(i=>i.dispatch),n=J("outline-header-collapseall"),o=()=>{r({type:"setUi",ui:{itemExpanded:{}}})};return u.jsx("div",{className:Ky(uh({visible:t}),e),children:u.jsx(Xe,{title:n,onClick:o,children:u.jsx(sw,{className:uh("icon")})})})}var qA=VA;A();A();var UA={OutlineHeader:"_OutlineHeader_ntv8r_1"},ZA=ee("OutlineHeader",UA),YA=({children:e,title:t})=>{const r=J("outline-header-title");return u.jsxs("div",{className:ZA(),children:[u.jsx(Ua,{rank:"2",size:"xs",children:r??t}),e]})},GA=YA;A();var KA={OutlineWrapper:"_OutlineWrapper_b9ln0_1","OutlineWrapper-collapseAll":"_OutlineWrapper-collapseAll_b9ln0_9","OutlineWrapper-layers":"_OutlineWrapper-layers_b9ln0_15"},Kc=ee("OutlineWrapper",KA),XA=({children:e})=>u.jsx("div",{className:Kc(),children:e}),ib=()=>{const e=H(c=>c.overrides.outline),t=H(c=>c.config),r=H(c=>c.state.indexes.nodes),n=H(c=>c.state.indexes.zones),o=H(c=>{var p;return((p=c.selectedItem)==null?void 0:p.props.id)||null}),i=J("label-component"),s=H($e(c=>tA(c.state,"root"))),a=g.useMemo(()=>s.map(c=>ob({config:t,label:s.length===1?"":c.split(":")[1],nodes:r,zoneCompound:c,zones:n,componentFallbackLabel:i})),[t,r,s,n,i]),l=g.useMemo(()=>e||XA,[e]);return u.jsxs(l,{children:[u.jsx(GA,{children:u.jsx(qA,{className:Kc("collapseAll")})}),u.jsx("div",{className:Kc("layers"),children:u.jsx(WA,{selectedId:o,trees:a})})]})};A();var JA={OutlinePlugin:"_OutlinePlugin_1ylsc_1"},QA=ee("OutlinePlugin",JA),ez=(e={})=>{var t,r;return{name:"outline",label:(t=e.label)!=null?t:"Outline",render:()=>u.jsx("div",{className:QA(),children:u.jsx(ib,{})}),icon:(r=e.icon)!=null?r:u.jsx(sg,{})}};A();A();A();var tz={Breadcrumbs:"_Breadcrumbs_8c6w5_1","Breadcrumbs-breadcrumbLabel":"_Breadcrumbs-breadcrumbLabel_8c6w5_7","Breadcrumbs-breadcrumb":"_Breadcrumbs-breadcrumb_8c6w5_7"};A();var rz=e=>{const t=H(a=>{var l;return(l=a.selectedItem)==null?void 0:l.props.id}),r=H(a=>a.config),n=H(a=>{var l;return(l=a.state.indexes.nodes[t])==null?void 0:l.path}),o=ye(),i=J("label-page"),s=J("label-component");return g.useMemo(()=>{const a=(n==null?void 0:n.map(l=>{var c,p,d,f;const[h]=l.split(":");if(h==="root")return{label:((c=r==null?void 0:r.root)==null?void 0:c.label)||i,selector:null};const v=o.getState().state.indexes.nodes[h],m=v.path[v.path.length-1],x=(((p=o.getState().state.indexes.zones[m])==null?void 0:p.contentIds)||[]).indexOf(h);return{label:v?(f=(d=r.components[v.data.type])==null?void 0:d.label)!=null?f:v.data.type:s,selector:v?{index:x,zone:v.path[v.path.length-1]}:null}}))||[];return e?a.slice(a.length-e):a},[n,e,i,s])},Ml=ee("Breadcrumbs",tz),sb=({children:e,numParents:t=1})=>{const r=H(o=>o.setUi),n=rz(t);return u.jsxs("div",{className:Ml(),children:[n.map((o,i)=>u.jsxs("div",{className:Ml("breadcrumb"),children:[u.jsx("button",{type:"button",className:Ml("breadcrumbLabel"),onClick:()=>r({itemSelector:o.selector}),children:o.label}),u.jsx(og,{size:16})]},i)),e]})};A();A();var nz={PuckFields:"_PuckFields_wnj25_1","PuckFields--isLoading":"_PuckFields--isLoading_wnj25_6","PuckFields-loadingOverlay":"_PuckFields-loadingOverlay_wnj25_10","PuckFields-loadingOverlayInner":"_PuckFields-loadingOverlayInner_wnj25_25","PuckFields-field":"_PuckFields-field_wnj25_32","PuckFields--wrapFields":"_PuckFields--wrapFields_wnj25_36"},Ws=ee("PuckFields",nz),oz=({children:e})=>u.jsx(u.Fragment,{children:e}),iz=(e,t)=>(r,n)=>Se(null,null,function*(){const{dispatch:o,state:i,selectedItem:s,resolveComponentData:a}=t.getState(),{data:l,ui:c}=i,{itemSelector:p}=c,d=l.root.props||l.root,f=s?s.props:d,h=F(D({},f),{[e]:r});if(s&&p){const v=yield a(F(D({},s),{props:h}),"replace"),m=Gi(t.getState().state,s.props.id);if(!m)return;o({type:"replace",destinationIndex:m.index,destinationZone:m.zone||et,data:v.node,ui:n});return}if(l.root.props){o({type:"replaceRoot",root:(yield a(F(D({},l.root),{props:h}),"replace")).node,ui:D(D({},c),n),recordHistory:!0});return}o({type:"setData",data:{root:h}})}),sz=({fieldName:e})=>{const t=H(c=>c.fields.fields[e]),r=H(c=>((c.selectedItem?c.selectedItem.readOnly:c.state.data.root.readOnly)||{})[e]),n=H(c=>t?c.selectedItem?`${c.selectedItem.props.id}_${t.type}_${e}`:`root_${t.type}_${e}`:null),o=H($e(c=>{const{selectedItem:p,permissions:d}=c;return p?d.getPermissions({item:p}):d.getPermissions({root:!0})})),i=ye(),s=g.useCallback(iz(e,i),[e]),{visible:a=!0}=t??{},l=g.useContext(Zi.ctx);return g.useEffect(()=>i.subscribe(c=>{var p;return(p=c.getCurrentData().props)==null?void 0:p[e]},c=>{l.setState({[e]:c})}),[i,l]),!t||!n||!a||t.type==="slot"?null:u.jsx("div",{className:Ws("field"),children:u.jsx(by,{field:t,name:e,id:n,readOnly:!o.edit||r,onChange:s})},n)},az=({fieldName:e})=>{const t=ye(),r=g.useMemo(()=>{var n;const o=(n=t.getState().getCurrentData().props)==null?void 0:n[e];return{[e]:o}},[]);return u.jsx(Zi.Provider,{value:r,children:u.jsx(sz,{fieldName:e})})},lz=g.memo(az),cz=({wrapFields:e=!0})=>{const t=H(p=>p.overrides),r=H(p=>{var d,f;const h=p.selectedItem?(d=p.componentState[p.selectedItem.props.id])==null?void 0:d.loadingCount:(f=p.componentState.root)==null?void 0:f.loadingCount;return(h??0)>0}),n=H($e(p=>p.state.ui.itemSelector)),o=H(p=>{var d;return(d=p.selectedItem)==null?void 0:d.props.id}),i=ye();Qw(i,o);const s=H(p=>p.fields.loading),a=H($e(p=>p.fields.id===o?Object.keys(p.fields.fields):[])),l=s||r,c=g.useMemo(()=>t.fields||oz,[t]);return u.jsxs("form",{className:Ws({wrapFields:e}),onSubmit:p=>{p.preventDefault()},children:[u.jsx(c,{isLoading:l,itemSelector:n,children:a.map(p=>u.jsx(lz,{fieldName:p},p))}),l&&u.jsx("div",{className:Ws("loadingOverlay"),children:u.jsx("div",{className:Ws("loadingOverlayInner"),children:u.jsx(kn,{size:16})})})]})},tp=g.memo(cz);A();var uz={FieldsPlugin:"_FieldsPlugin_18cj3_1","FieldsPlugin-header":"_FieldsPlugin-header_18cj3_7"},dh=ee("FieldsPlugin",uz),dz=()=>{const e=J("label-page"),t=H(r=>{var n,o;const i=r.selectedItem;return i?(o=(n=r.config.components[i.type])==null?void 0:n.label)!=null?o:i.type:null});return t??e},pz=({desktopSideBar:e="right",label:t,icon:r}={})=>({name:"fields",label:t??"Fields",render:()=>u.jsxs("div",{className:dh(),children:[u.jsx("div",{className:dh("header"),children:u.jsx(sb,{numParents:2,children:u.jsx(dz,{})})}),u.jsx(tp,{})]}),icon:r??u.jsx(zw,{}),mobileOnly:e==="right"});A();A();A();A();A();var fz=`@import "https://rsms.me/inter/inter.css";

/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* bundle/index.css */

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/styles.module.css/#css-module-data */
._InputWrapper_qyenz_1 + ._InputWrapper_qyenz_1 {
  margin-top: var(--puck-space-3);
}
._Input-label_qyenz_5 {
  align-items: center;
  color: var(--puck-field-label-color-text, var(--puck-color-text-secondary));
  display: flex;
  padding-bottom: var(--puck-field-label-space-y, var(--puck-space-3));
  font-size: var(--puck-field-label-font-size, var(--puck-font-size-xxs));
  font-weight: var( --puck-field-label-font-weight, var(--puck-font-weight-semibold) );
}
._Input-labelIcon_qyenz_17 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-end: var(--puck-space-1);
  padding-inline-start: var(--puck-space-1);
}
._Input-disabledIcon_qyenz_24 {
  color: var(--puck-color-text-muted);
  margin-inline-start: auto;
}
._Input-input_qyenz_29 {
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: var(--puck-field-color-text, var(--puck-color-text));
  font-family: inherit;
  font-size: var(--puck-font-size-xs);
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
}
@media (min-width: 458px) {
  ._Input-input_qyenz_29 {
    font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  }
}
._Input-select_qyenz_61 {
  position: relative;
  width: 100%;
}
select._Input-input_qyenz_29 {
  appearance: none;
  cursor: pointer;
}
._Input-selectIcon_qyenz_71 {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  fill: var(--puck-field-color-border, var(--puck-color-border));
  stroke-width: 0;
}
._Input-selectIcon_qyenz_71:dir(rtl) {
  right: auto;
  left: 12px;
}
@media (hover: hover) and (pointer: fine) {
  ._Input_qyenz_1:has(> input):hover ._Input-input_qyenz_29:not([readonly]),
  ._Input_qyenz_1:has(> textarea):hover ._Input-input_qyenz_29:not([readonly]) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:has(> ._Input-select_qyenz_61):hover ._Input-input_qyenz_29:not([disabled]) {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:not(._Input--readOnly_qyenz_111):has(> ._Input-select_qyenz_61):hover ._Input-selectIcon_qyenz_71 {
    fill: var(--puck-field-color-border-hover, var(--puck-color-border-hover));
  }
}
._Input-input_qyenz_29:focus {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-input_qyenz_29,
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
  opacity: 1;
  outline: 0;
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 ~ ._Input-selectIcon_qyenz_71 {
  fill: var(--puck-field-color-text-disabled, var(--puck-color-text-secondary));
}
._Input-radioGroupItems_qyenz_150 {
  --_puck-field-radio-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-radio-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-radio-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  display: flex;
  border: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  border-radius: var(--_puck-field-radio-radius);
  flex-wrap: wrap;
}
._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  flex-grow: 1;
}
._Input-radio_qyenz_150:first-of-type {
  border-bottom-left-radius: var(--_puck-field-radio-radius);
  border-top-left-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:first-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radio_qyenz_150:last-of-type {
  border-bottom-right-radius: var(--_puck-field-radio-radius);
  border-inline-end: 0;
  border-top-right-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:last-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-radio-border-width)) );
  text-align: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Input-radio_qyenz_150:has(:focus-visible) {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-radioInner_qyenz_179:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._Input--readOnly_qyenz_111 ._Input-radioGroupItems_qyenz_150 {
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_qyenz_111 ._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text-secondary));
  cursor: default;
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--puck-field-color-border-disabled, var(--puck-color-border));
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150:last-of-type {
  border-inline-end: 0;
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-medium);
}
._Input--readOnly_qyenz_111 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
textarea._Input-input_qyenz_29 {
  margin-bottom: calc(var(--puck-space-1) * -1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data */
._ArrayField_62huh_5 {
  --_puck-field-array-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  --_puck-field-array-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-array-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-array-radius-inner: calc( var(--_puck-field-array-radius) - var(--_puck-field-array-border-width) );
  display: flex;
  flex-direction: column;
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  border: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-radius: var(--_puck-field-array-radius);
}
._ArrayField--isDraggingFrom_62huh_30 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  overflow: hidden;
}
._ArrayField-addButton_62huh_38 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: none;
  border-radius: var(--_puck-field-array-radius-inner);
  display: flex;
  color: var(--puck-field-array-add-color-icon, var(--puck-color-interactive));
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: calc(var(--puck-field-space-y, var(--puck-space-3)) + 2px) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  text-align: left;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayField--hasItems_62huh_58 > ._ArrayField-addButton_62huh_38 {
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayField-addButton_62huh_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayField-inner_62huh_93 {
  margin-top: -1px;
}
._ArrayFieldItem_62huh_101 {
  display: block;
  position: relative;
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
}
._ArrayFieldItem--isDragging_62huh_110 {
  border-top: transparent;
}
._ArrayFieldItem--isExpanded_62huh_114::before {
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 {
  border-bottom: 0;
  outline-offset: 0px !important;
  outline: var(--_puck-field-array-border-width) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring)) !important;
  z-index: 2;
}
._ArrayFieldItem--isDragging_62huh_110 {
  outline: var(--puck-border-width-focus) var(--puck-field-color-border-dragging, var(--puck-color-selection-border)) solid !important;
}
._ArrayFieldItem--isDragging_62huh_110 ._ArrayFieldItem-summary_62huh_132:active {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
}
._ArrayFieldItem_62huh_101 + ._ArrayFieldItem_62huh_101 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayFieldItem-summary_62huh_132 {
  --_puck-drag-icon-color: var(--puck-field-color-text, var(--puck-color-text));
  --_puck-drag-icon-color-hover: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  list-style: none;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  position: relative;
  overflow: hidden;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayFieldItem--noFields_62huh_167 > ._ArrayFieldItem-summary_62huh_132 {
  cursor: grab;
}
._ArrayFieldItem_62huh_101:first-of-type > ._ArrayFieldItem-summary_62huh_132 {
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem_62huh_101:last-of-type:not(._ArrayFieldItem--isExpanded_62huh_114) > ._ArrayFieldItem-summary_62huh_132 {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem--isExpanded_62huh_114:last-of-type {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayFieldItem-summary_62huh_132:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayFieldItem-summary_62huh_132:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayFieldItem-summary_62huh_132:active {
  background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-summary_62huh_132 {
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-semibold);
  transition: none;
}
._ArrayFieldItem-body_62huh_228 {
  background: var(--puck-field-color-surface, var(--puck-color-surface));
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-body_62huh_228 {
  display: block;
}
._ArrayFieldItem-fieldset_62huh_237 {
  border: none;
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
}
._ArrayFieldItem-rhs_62huh_250 {
  display: flex;
  gap: var(--puck-space-1);
  align-items: center;
}
._ArrayFieldItem-actions_62huh_256 {
  color: var(--puck-color-text-secondary);
  display: flex;
  gap: var(--puck-space-1);
  opacity: 0;
}
._ArrayFieldItem-summary_62huh_132:focus-within > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256,
._ArrayFieldItem-summary_62huh_132:hover > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256 {
  opacity: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data */
._IconButton_1pxxt_1 {
  align-items: center;
  background: var(--puck-iconbutton-color-bg, transparent);
  border: none;
  border-radius: var(--puck-iconbutton-radius, var(--puck-radius-m));
  color: var(--puck-iconbutton-color-icon, currentColor);
  display: flex;
  font-family: var(--puck-font-family);
  justify-content: center;
  padding: var(--puck-iconbutton-space, var(--puck-space-1));
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._IconButton--active_1pxxt_15 {
  color: var( --puck-iconbutton-color-icon-active, var(--puck-color-interactive) );
}
._IconButton_1pxxt_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._IconButton_1pxxt_1:hover:not(._IconButton--disabled_1pxxt_28) {
    background: var( --_puck-iconbutton-color-bg-hover, var( --puck-iconbutton-color-bg-hover, var(--puck-color-interactive-neutral-hover) ) );
    color: var( --puck-iconbutton-color-icon-hover, var(--puck-color-interactive) );
    cursor: pointer;
    transition: none;
  }
}
._IconButton_1pxxt_1:active {
  background: var( --puck-iconbutton-color-bg-active, var(--puck-color-interactive-soft) );
  transition: none;
}
._IconButton--disabled_1pxxt_28 {
  color: var( --puck-iconbutton-color-icon-disabled, var(--puck-color-text-subtle) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DragIcon/styles.module.css/#css-module-data */
._DragIcon_5e515_1 {
  color: var(--_puck-drag-icon-color, var(--puck-color-text-muted));
  cursor: grab;
  padding: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
}
._DragIcon--disabled_5e515_10 {
  cursor: no-drop;
}
@media (hover: hover) and (pointer: fine) {
  ._DragIcon_5e515_1:not(._DragIcon--disabled_5e515_10):hover {
    color: var(--_puck-drag-icon-color-hover, var(--puck-color-focus-ring));
  }
}

/* components/Sortable/styles.css */
[data-dnd-placeholder]:not([data-puck-line-drag] *) * {
  opacity: 0 !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --_puck-field-array-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ExternalInput/styles.module.css/#css-module-data */
._ExternalInput-actions_143vl_1 {
  display: flex;
}
._ExternalInput-button_143vl_5 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  font-weight: var(--puck-font-weight-medium);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  cursor: pointer;
}
._ExternalInput--dataSelected_143vl_34 ._ExternalInput-button_143vl_5 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  display: block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
._ExternalInput--readOnly_143vl_41 ._ExternalInput-button_143vl_5 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
}
._ExternalInput-detachButton_143vl_48 {
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-bottom-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  background-color: var( --puck-field-external-detach-color-bg, var(--puck-color-surface-subtle) );
  color: var( --puck-field-external-detach-color-text, var(--puck-color-text-muted) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  padding: var(--puck-space-2) var(--puck-space-3);
  position: relative;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  margin-inline-start: -1px;
  cursor: pointer;
}
._ExternalInput-button_143vl_5:focus-visible,
._ExternalInput-detachButton_143vl_48:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover,
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    transition: none;
  }
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-external-detach-color-text, var(--puck-color-text-muted)) );
  }
  ._ExternalInput--dataSelected_143vl_34:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  }
}
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:active,
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ExternalInputModal_143vl_118 {
  color: var(--puck-color-text);
  display: grid;
  grid-template-rows: min-content minmax(128px, 100%) min-content;
  grid-template-columns: 100%;
  position: relative;
  min-height: 50dvh;
  max-height: 90dvh;
}
._ExternalInputModal-grid_143vl_128 {
  display: flex;
  flex-direction: column;
}
@media (min-width: 458px) {
  ._ExternalInputModal-grid_143vl_128 {
    display: grid;
    grid-template-columns: 100%;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-grid_143vl_128 {
    grid-template-columns: 25% 75%;
  }
}
._ExternalInputModal-filters_143vl_144 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
  display: none;
}
@media (min-width: 458px) {
  ._ExternalInputModal-filters_143vl_144 {
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
    display: none;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
    display: block;
  }
}
._ExternalInputModal-masthead_143vl_164 {
  background-color: var(--puck-color-surface-subtle);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-5);
  padding: var(--puck-space-5);
}
._ExternalInputModal-tableWrapper_143vl_173 {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
}
._ExternalInputModal-table_143vl_173 {
  border-collapse: unset;
  border-spacing: 0px;
  color: var(--puck-color-text);
  position: relative;
  z-index: 0;
  min-width: 100%;
}
._ExternalInputModal-thead_143vl_189 {
  background-color: var(--puck-color-surface);
  position: sticky;
  top: 0;
  z-index: 1;
}
._ExternalInputModal-th_143vl_189 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-td_143vl_204 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-tr_143vl_210 ._ExternalInputModal-td_143vl_204:first-of-type {
  font-weight: var(--puck-font-weight-medium);
  width: 1%;
  white-space: nowrap;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover {
    background: var(--puck-color-interactive-soft-hover);
    color: var(--puck-color-interactive);
    cursor: pointer;
    position: relative;
    margin-inline-start: -5px;
  }
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover ._ExternalInputModal-td_143vl_204:first-of-type {
    border-inline-start: var(--puck-border-width-strong) solid var(--puck-color-interactive);
    padding-inline-start: 20px;
  }
}
._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:last-of-type ._ExternalInputModal-td_143vl_204 {
  border-bottom: none;
}
._ExternalInputModal-tableWrapper_143vl_173 {
  display: none;
}
._ExternalInputModal--hasData_143vl_244 ._ExternalInputModal-tableWrapper_143vl_173 {
  display: block;
}
._ExternalInputModal-loadingBanner_143vl_248 {
  display: none;
  background-color: color-mix(in srgb, var(--puck-color-surface) 90%, transparent);
  padding: 64px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
._ExternalInputModal--isLoading_143vl_265 ._ExternalInputModal-loadingBanner_143vl_248 {
  display: flex;
}
._ExternalInputModal-searchForm_143vl_269 {
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-3);
  flex-grow: 1;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchForm_143vl_269 {
    flex-wrap: nowrap;
  }
}
._ExternalInputModal-search_143vl_269 {
  display: flex;
  background: var(--puck-color-surface);
  border-width: var(--puck-border-width-regular);
  border-style: solid;
  border-color: var(--puck-color-border);
  border-radius: var(--puck-radius-m);
  flex-grow: 1;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within {
  border-color: var(--puck-color-border-hover);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover {
    border-color: var(--puck-color-border-hover);
    transition: none;
  }
}
._ExternalInputModal-searchIcon_143vl_306 {
  align-items: center;
  background: var(--puck-color-surface-subtle);
  border-bottom-left-radius: var(--puck-radius-m);
  border-top-left-radius: var(--puck-radius-m);
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-subtle);
  display: flex;
  justify-content: center;
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within ._ExternalInputModal-searchIcon_143vl_306 {
  color: var(--puck-color-text-secondary);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover ._ExternalInputModal-searchIcon_143vl_306 {
    color: var(--puck-color-text-secondary);
    transition: none;
  }
}
._ExternalInputModal-searchIconText_143vl_333 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._ExternalInputModal-searchInput_143vl_343 {
  border: none;
  border-radius: var(--puck-radius-m);
  background: var(--puck-color-surface);
  font-family: inherit;
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  width: 100%;
}
._ExternalInputModal-searchInput_143vl_343:focus {
  outline: 0;
}
._ExternalInputModal-searchActions_143vl_358 {
  display: flex;
  gap: var(--puck-space-2);
  height: 44px;
  width: 100%;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchActions_143vl_358 {
    width: auto;
  }
}
._ExternalInputModal-searchActionIcon_143vl_371 {
  align-self: center;
}
._ExternalInputModal-footerContainer_143vl_375 {
  background-color: var(--puck-color-surface-subtle);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._ExternalInputModal-footer_143vl_375 {
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  text-align: right;
}
._ExternalInputModal-field_143vl_388 {
  color: var(--puck-color-text-secondary);
  margin: var(--puck-space-4);
  margin-bottom: var(--puck-space-3);
  display: block;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Modal/styles.module.css/#css-module-data */
._Modal_g5xob_1 {
  background: var(--puck-color-overlay-backdrop);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 32px;
}
._Modal--isOpen_g5xob_15 {
  display: flex;
}
._Modal-inner_g5xob_19 {
  width: 100%;
  max-width: 1024px;
  border-radius: var(--puck-radius-l);
  overflow: hidden;
  background: var(--puck-color-surface);
  display: flex;
  flex-direction: column;
  max-height: 90dvh;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Heading/styles.module.css/#css-module-data */
._Heading_97eh4_1 {
  display: block;
  color: var(--_puck-heading-color, var(--puck-color-text));
  font-weight: var(--puck-font-weight-bold);
  margin: 0;
}
._Heading_97eh4_1 b {
  font-weight: var(--puck-font-weight-bold);
}
._Heading--xxxxl_97eh4_12 {
  font-size: var(--puck-font-size-xxxxl);
  letter-spacing: var(--puck-letter-spacing-heading);
  font-weight: var(--puck-font-weight-heavy);
}
._Heading--xxxl_97eh4_18 {
  font-size: var(--puck-font-size-xxxl);
}
._Heading--xxl_97eh4_22 {
  font-size: var(--puck-font-size-xxl);
}
._Heading--xl_97eh4_26 {
  font-size: var(--puck-font-size-xl);
}
._Heading--l_97eh4_30 {
  font-size: var(--puck-font-size-l);
}
._Heading--m_97eh4_34 {
  font-size: var(--puck-font-size-m);
}
._Heading--s_97eh4_38 {
  font-size: var(--puck-font-size-s);
}
._Heading--xs_97eh4_42 {
  font-size: var(--puck-font-size-xs);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Button/Button.module.css/#css-module-data */
._Button_oe4qj_1 {
  --_puck-button-default-space-x: 20px;
  --_puck-button-default-font-size: var(--puck-font-size-xxs);
  --_puck-button-default-font-weight: var(--puck-font-weight-regular);
  --_puck-button-default-color-bg-disabled: var(--puck-color-bg-disabled);
  --_puck-button-default-color-text-disabled: var(--puck-color-text-disabled);
  appearance: none;
  background: none;
  border: var(--puck-border-width-regular) solid transparent;
  border-radius: var(--puck-button-radius, var(--puck-radius-m));
  color: var(--puck-color-text-inverse);
  display: inline-flex;
  align-items: center;
  gap: var(--puck-space-2);
  letter-spacing: var(--puck-letter-spacing-ui);
  font-family: var(--puck-font-family);
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
}
._Button_oe4qj_1:hover,
._Button_oe4qj_1:active {
  transition: none;
}
._Button--medium_oe4qj_34 {
  min-height: 34px;
  padding-bottom: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-medium-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-medium-font-size, var(--_puck-button-default-font-size) );
}
._Button--large_oe4qj_62 {
  padding-bottom: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-large-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-large-font-size, var(--_puck-button-default-font-size) );
}
._Button-icon_oe4qj_89 {
  margin-top: 2px;
}
._Button--primary_oe4qj_93 {
  background: var( --puck-button-primary-color-bg, var(--puck-color-interactive) );
  border-color: var(--puck-button-primary-color-border, transparent);
  color: var(--puck-button-primary-color-text, var(--puck-color-text-inverse));
}
._Button_oe4qj_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--primary_oe4qj_93:hover {
    background-color: var( --puck-button-primary-color-bg-hover, var(--puck-color-interactive-hover) );
  }
}
._Button--primary_oe4qj_93:active {
  background-color: var( --puck-button-primary-color-bg-active, var(--puck-color-interactive-active) );
}
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123,
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-primary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-primary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--secondary_oe4qj_135 {
  background: var(--puck-button-secondary-color-bg, transparent);
  border-color: var(--puck-button-secondary-color-border, currentColor);
  color: var(--puck-button-secondary-color-text, currentColor);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--secondary_oe4qj_135:hover {
    background-color: var( --puck-button-secondary-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var(--puck-button-secondary-color-text, var(--puck-color-text));
  }
}
._Button--secondary_oe4qj_135:active {
  background-color: var( --puck-button-secondary-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-button-secondary-color-text, var(--puck-color-text));
}
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123,
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-secondary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-secondary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--flush_oe4qj_171 {
  border-radius: var(--puck-radius-none);
}
._Button--disabled_oe4qj_123:hover {
  cursor: not-allowed;
}
._Button--fullWidth_oe4qj_179 {
  justify-content: center;
  width: 100%;
}
._Button-spinner_oe4qj_184 {
  padding-inline-start: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Select/styles.module.css/#css-module-data */
._Select_1n4iv_1 {
  position: relative;
  z-index: 1;
}
._Select-buttonInner_1n4iv_6 {
  align-items: center;
  display: flex;
}
._Select-buttonIcon_1n4iv_11 {
  align-items: center;
  display: flex;
  justify-content: center;
}
._Select--standalone_1n4iv_17 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Select--actionBar_1n4iv_22 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._Select-items_1n4iv_27 {
  background: var(--puck-color-surface);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-l);
  margin: 10px 8px;
  margin-left: 0;
  padding: var(--puck-space-1);
  z-index: 2;
  list-style: none;
}
._SelectItem_1n4iv_38 {
  background: transparent;
  border-radius: var(--puck-radius-m);
  border: none;
  color: var(--puck-color-text-secondary);
  cursor: pointer;
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  padding: var(--puck-space-2) var(--puck-space-3);
  width: 100%;
}
._SelectItem--isSelected_1n4iv_53 {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
  font-weight: var(--puck-font-weight-medium);
}
._SelectItem--isSelected_1n4iv_53 ._SelectItem-icon_1n4iv_59 {
  color: var(--puck-color-interactive);
}
._SelectItem_1n4iv_38:hover {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data */
._RichTextEditor_5wzos_1 .ProseMirror {
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: text;
  outline: none;
  position: relative;
}
._RichTextEditor_5wzos_1 .rich-text * {
  white-space: pre-wrap;
  user-select: auto;
  -webkit-user-select: auto;
}
._RichTextEditor_5wzos_1 .rich-text blockquote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: var(--puck-border-width-strong) solid var(--puck-color-border);
}
._RichTextEditor_5wzos_1 .rich-text code {
  background-color: var(--puck-color-surface-muted);
  padding: var(--puck-space-1) var(--puck-space-2);
  border-radius: var(--puck-radius-m);
}
._RichTextEditor_5wzos_1 .rich-text p:empty::before {
  content: "\\a0";
}
._RichTextEditor_5wzos_1 .rich-text pre code {
  display: block;
  padding: var(--puck-space-2) var(--puck-space-3);
}
._RichTextEditor_5wzos_1 .rich-text > *:first-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:first-child,
._RichTextEditor_5wzos_1 .rich-text * p:first-of-type {
  margin-top: 0;
}
._RichTextEditor_5wzos_1 .rich-text > *:last-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:last-child,
._RichTextEditor_5wzos_1 .rich-text * p:last-of-type {
  margin-bottom: 0;
}
._RichTextEditor--editor_5wzos_50 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  resize: vertical;
  text-align: initial;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
  min-height: 128px;
}
._RichTextEditor--editor_5wzos_50 .rich-text {
  flex-grow: 1;
}
._RichTextEditor--editor_5wzos_50 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50 .rich-text .ProseMirror {
  height: 100%;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._RichTextEditor--editor_5wzos_50 .rich-text ul,
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  padding-left: var(--puck-space-5);
}
._RichTextEditor--editor_5wzos_50 .rich-text li {
  line-height: 1.5;
}
._RichTextEditor--editor_5wzos_50 .rich-text p {
  margin-block: var(--puck-space-3);
}
._RichTextEditor--editor_5wzos_50 .rich-text ul {
  list-style: disc;
}
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  list-style: decimal;
}
._RichTextEditor--editor_5wzos_50:focus-within {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._RichTextEditor--editor_5wzos_50:hover:not(._RichTextEditor--disabled_5wzos_123) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 {
  background: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text .ProseMirror {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .ProseMirror[contenteditable=false] {
  cursor: default;
}
._RichTextEditor_5wzos_1:not(:focus-within):not(._RichTextEditor--isActive_5wzos_159) .ProseMirror ::selection {
  background-color: transparent;
}
._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  position: sticky;
  top: 0;
  z-index: 1;
}
._RichTextEditor--disabled_5wzos_123 ._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ObjectField/styles.module.css/#css-module-data */
._ObjectField_c5reb_1 {
  display: flex;
  flex-direction: column;
  background-color: var(--puck-field-color-surface, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
}
._ObjectField-fieldset_c5reb_10 {
  border: none;
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Fields/styles.module.css/#css-module-data */
._PuckFields_wnj25_1 {
  position: relative;
  font-family: var(--puck-font-family);
}
._PuckFields--isLoading_wnj25_6 {
  min-height: 48px;
}
._PuckFields-loadingOverlay_wnj25_10 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}
._PuckFields-loadingOverlayInner_wnj25_25 {
  display: flex;
  padding: var(--puck-space-4);
  position: sticky;
  top: 0;
}
._PuckFields-field_wnj25_32 * {
  box-sizing: border-box;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 {
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
  padding-bottom: var(--puck-space-3);
  display: block;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 + ._PuckFields-field_wnj25_32 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-top: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ComponentList/styles.module.css/#css-module-data */
._ComponentList_htktj_1 {
  max-width: 100%;
}
._ComponentList--isExpanded_htktj_5 + ._ComponentList_htktj_1 {
  margin-top: var(--puck-space-3);
}
._ComponentList-content_htktj_9 {
  display: none;
}
._ComponentList--isExpanded_htktj_5 > ._ComponentList-content_htktj_9 {
  display: block;
}
._ComponentList-title_htktj_17 {
  background-color: transparent;
  border: 0;
  color: var(--puck-drawer-category-color-text, var(--puck-color-text-muted));
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: var(--puck-drawer-category-font-size, var(--puck-font-size-xxxs));
  list-style: none;
  margin-bottom: 6px;
  padding: var(--puck-drawer-category-space, var(--puck-space-2));
  text-transform: uppercase;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  gap: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  width: 100%;
}
._ComponentList-title_htktj_17:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ComponentList-title_htktj_17:hover {
    background-color: var( --puck-drawer-category-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-drawer-category-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._ComponentList-title_htktj_17:active {
  background-color: var( --puck-drawer-category-color-bg-active, var(--puck-color-interactive-subtle) );
  transition: none;
}
._ComponentList-titleIcon_htktj_63 {
  margin-inline-start: auto;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Preview/styles.module.css/#css-module-data */
._PuckPreview_zbic3_1 {
  position: relative;
  height: 100%;
}
._PuckPreview-frame_zbic3_6 {
  border: none;
  height: 100%;
  width: 100%;
}
._PuckPreview-frame_zbic3_6[data-puck-outline-dragging] {
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/drop-line/styles.module.css/#css-module-data */
._DropLine_eyz3q_2 {
  background: var(--_puck-outline-color-drop-indicator);
  border-radius: calc(var(--_puck-outline-drop-indicator-size) / 2);
  height: var(--_puck-outline-drop-indicator-size);
  inset-inline: 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropLine--top_eyz3q_12 {
  top: 0;
}
._DropLine--bottom_eyz3q_16 {
  bottom: 0;
}
._DropLine--top_eyz3q_12._DropLine--outset_eyz3q_20 {
  top: calc(-1 * var(--_puck-outline-drop-indicator-size));
}
._DropLine--bottom_eyz3q_16._DropLine--outset_eyz3q_20 {
  bottom: calc(-1 * var(--_puck-outline-drop-indicator-size));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/empty-zone-placeholder/styles.module.css/#css-module-data */
._LayerTree-helper_1m7e4_2 {
  color: var(--puck-outline-color-text-helper, var(--puck-color-text-subtle));
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-helperRoot_1m7e4_11 {
  padding-inline-start: var(--puck-space-3);
}
._LayerTree-helper_1m7e4_2[data-puck-drop-target] {
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer/styles.module.css/#css-module-data */
._Layer_onfgu_1 {
  position: relative;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
}
._Layer-inner_onfgu_8 {
  align-items: center;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Layer--isSortable_onfgu_18 > ._Layer-inner_onfgu_8 {
  cursor: grab;
}
._Layer-content_onfgu_22 {
  display: flex;
  gap: var(--puck-space-4);
  flex: 1 1 auto;
  min-width: 0;
}
._Layer-clickable_onfgu_29 {
  align-items: center;
  background: none;
  border: 0;
  border-radius: var(--_puck-outline-radius);
  color: inherit;
  cursor: inherit;
  display: flex;
  flex: 1 1 auto;
  font: inherit;
  min-width: 0;
  padding: 0;
}
[data-puck-dnd-disabled] ._Layer-inner_onfgu_8,
[data-puck-dnd-disabled] ._Layer-clickable_onfgu_29 {
  cursor: pointer;
}
._Layer-clickable_onfgu_29:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
  z-index: 1;
}
._Layer-caret_onfgu_57 {
  visibility: hidden;
  display: flex;
  flex-shrink: 0;
}
._Layer-caret_onfgu_57 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-content_onfgu_22 {
  font-weight: var(--puck-font-weight-bold);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 {
  visibility: visible;
}
._Layer-title_onfgu_76 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  margin: var(--puck-space-1);
  cursor: pointer;
}
._Layer-name_onfgu_85 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._Layer-icon_onfgu_91 {
  color: var(--puck-outline-color-icon, var(--puck-color-text-subtle));
  margin-top: var(--puck-space-1);
}
._Layer-icon_onfgu_91 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._Layer-zones_onfgu_101 {
  display: none;
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-4));
}
._Layer--isExpanded_onfgu_106 > ._Layer-zones_onfgu_101 {
  display: block;
}
._Layer--isExpanded_onfgu_106 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 svg {
  transform: rotate(90deg);
}
@media (hover: hover) and (pointer: fine) {
  ._Layer_onfgu_1:not(._Layer--isSelected_onfgu_115) > ._Layer-inner_onfgu_8:hover {
    --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-hover);
    border-color: var(--_puck-outline-color-border-hover);
    background: var(--_puck-outline-color-bg-hover);
    transition: none;
  }
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  border-color: var( --puck-outline-color-border-selected, var(--puck-color-selection-border) );
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-selected);
  background: var(--_puck-outline-color-bg-selected);
}
._Layer--isExpandCandidate_onfgu_138 > ._Layer-inner_onfgu_8 {
  border-color: var(--_puck-outline-color-border-hover);
  background: var(--_puck-outline-color-bg-hover);
}
._Layer--isDragSource_onfgu_143 > ._Layer-inner_onfgu_8 {
  color: var(--puck-color-text-muted);
  background: transparent;
}
._Layer--isDragSource_onfgu_143 > ._Layer-zones_onfgu_101 {
  opacity: 0.5;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-actions/styles.module.css/#css-module-data */
._LayerActions_d90t9_2 {
  position: sticky;
  inset-inline-end: calc(var(--puck-space-1) * -1);
  padding-inline: var(--puck-space-1);
  display: flex;
  visibility: hidden;
  flex-shrink: 0;
  color: var(--_puck-outline-color-text);
  background: var(--_puck-outline-actions-color-bg);
  border-top-right-radius: var(--_puck-outline-radius);
  border-bottom-right-radius: var(--_puck-outline-radius);
}
._LayerActions--visible_d90t9_18 {
  visibility: visible;
}
._LayerActions_d90t9_2 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-items/styles.module.css/#css-module-data */
._LayerTree_o5tyt_1 {
  color: var(--_puck-outline-color-text);
  font-family: var(--puck-outline-font-family, var(--puck-font-family));
  font-size: var(--puck-outline-font-size, var(--puck-font-size-xxxs));
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0;
}
._LayerTree--nested_o5tyt_12 {
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-3));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-zone/styles.module.css/#css-module-data */
._LayerTree-zoneTitle_fvhlh_2 {
  color: var(--_puck-outline-zone-color-text);
  font-size: var( --puck-outline-zone-font-size, calc(var(--puck-font-size-xxxs) * 0.9) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-zoneIcon_fvhlh_19 {
  margin-top: var(--puck-space-1);
}
._LayerTree-zoneIcon_fvhlh_19 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._LayerTree-zoneTitle_fvhlh_2[data-puck-drop-target] {
  color: var(--_puck-outline-color-text-hover);
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/styles.module.css/#css-module-data */
._LayerTreeRoot_1qowl_1 {
  min-width: max-content;
  --_puck-iconbutton-color-bg-hover: transparent;
  --_puck-outline-color-text: var( --puck-outline-color-text, var(--puck-color-text-primary) );
  --_puck-outline-border-width: var( --puck-outline-border-width, var(--puck-border-width-regular) );
  --_puck-outline-radius: var(--puck-outline-radius, var(--puck-radius-m));
  --_puck-outline-caret-size: var( --puck-outline-action-size, var(--puck-icon-size-s) );
  --_puck-outline-icon-size: var( --puck-outline-icon-size, var(--puck-icon-size-xs) );
  --_puck-outline-color-bg-selected: var( --puck-outline-color-bg-selected, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-bg-hover: var( --puck-outline-color-bg-hover, var(--puck-color-interactive-soft) );
  --_puck-outline-color-border-hover: var( --puck-outline-color-border-hover, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-text-hover: var( --puck-outline-color-text-hover, var(--puck-color-interactive) );
  --_puck-outline-color-drop-indicator: var( --puck-outline-color-drop-indicator, var(--puck-color-line-placeholder) );
  --_puck-outline-drop-indicator-size: var(--puck-line-placeholder-width);
  --_puck-outline-zone-color-text: var( --puck-outline-zone-color-text, var(--puck-color-text-muted) );
  --_puck-outline-actions-color-bg: transparent;
  --_puck-outline-caret-slot: calc( var(--_puck-outline-caret-size) + var(--puck-iconbutton-space, var(--puck-space-1)) * 2 );
  --_puck-outline-label-indent: calc( var(--_puck-outline-caret-slot) + var(--puck-space-2) + var(--_puck-outline-border-width) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/collapse-all/styles.module.css/#css-module-data */
._CollapseAll_1r4cy_1 {
  visibility: hidden;
}
._CollapseAll-icon_1r4cy_5 {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._CollapseAll--visible_1r4cy_10 {
  visibility: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/outline-header/styles.module.css/#css-module-data */
._OutlineHeader_ntv8r_1 {
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--puck-space-2);
  padding-block: var(--puck-space-3);
  padding-inline: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/styles.module.css/#css-module-data */
._OutlineWrapper_b9ln0_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
}
._OutlineWrapper-collapseAll_b9ln0_9 {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
._OutlineWrapper-layers_b9ln0_15 {
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  padding: var(--puck-space-1);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Layout/styles.module.css/#css-module-data */
._Puck_tzaxg_19 {
  font-family: var(--puck-font-family);
  overflow-x: hidden;
  visibility: visible !important;
}
@media (min-width: 766px) {
  ._Puck_tzaxg_19 {
    overflow-x: auto;
  }
}
._Puck-portal_tzaxg_31 {
  position: relative;
  z-index: 2;
}
._PuckLayout_tzaxg_36 {
  height: 100dvh;
}
._PuckLayout-inner_tzaxg_40 {
  --puck-frame-width: auto;
  --puck-pluginbar-width: min-content;
  --puck-sidebar-width: 0px;
  --puck-sidebar-left-width: var( --puck-user-sidebar-left-width, var(--puck-sidebar-width) );
  --puck-sidebar-right-width: var( --puck-user-sidebar-right-width, var(--puck-sidebar-width) );
  background-color: var(--puck-color-surface-subtle);
  display: grid;
  grid-template-areas: "header" "editor" "left" "right" "sidenav";
  grid-template-columns: var(--puck-frame-width);
  grid-template-rows: min-content auto 0 0 var(--puck-pluginbar-width);
  height: 100%;
  position: relative;
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-exit);
  z-index: 0;
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 68px;
    grid-template-areas: "header header header header" "sidenav left editor right";
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) 0;
    grid-template-rows: min-content auto;
  }
  ._Puck--hidePlugins_tzaxg_73 ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 0;
  }
}
._PuckLayout--mounted_tzaxg_78 ._PuckLayout-inner_tzaxg_40 {
  --puck-sidebar-width: 186px;
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 30% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 55% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto min-content 0 var(--puck-pluginbar-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
@media (min-width: 638px) {
  ._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 458px) {
  ._PuckLayout-mounted_tzaxg_156 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: minmax(266px, auto);
  }
}
@media (min-width: 638px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: minmax(186px, 250px);
  }
}
@media (min-width: 766px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: auto;
  }
}
@media (min-width: 990px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 256px;
  }
}
@media (min-width: 1198px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 274px;
  }
}
@media (min-width: 1398px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 290px;
  }
}
@media (min-width: 1598px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 320px;
  }
}
._PuckLayout-nav_tzaxg_197 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  background-color: var( --puck-pluginbar-color-bg, var(--puck-color-surface-subtle) );
  grid-area: sidenav;
  overflow: hidden;
  width: 100%;
}
@media (min-width: 638px) {
  ._PuckLayout-nav_tzaxg_197 {
    border-top: 0;
    border-right: var(--puck-border-width-regular) solid var(--puck-color-border);
    box-sizing: border-box;
  }
}
._PuckLayout-header_tzaxg_217 {
  grid-area: header;
}
._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
    overflow: auto;
  }
}
._PuckPluginTab_tzaxg_231 {
  display: none;
  flex-grow: 1;
  max-height: 100%;
}
._PuckPluginTab--visible_tzaxg_237 {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
._PuckPluginTab-body_tzaxg_243 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/MenuBar/styles.module.css/#css-module-data */
._MenuBar_1hxnj_1 {
  background-color: var(--_puck-menu-bar-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: none;
  left: 0;
  margin-top: 1px;
  padding: var(--puck-space-2) var(--puck-space-4);
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
}
._MenuBar--menuOpen_1hxnj_14 {
  display: block;
}
@media (min-width: 638px) {
  ._MenuBar_1hxnj_1 {
    border: none;
    display: block;
    margin-top: 0;
    overflow-y: visible;
    padding: 0;
    position: static;
  }
}
._MenuBar-inner_1hxnj_29 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-2) var(--puck-space-4);
  justify-content: flex-end;
}
@media (min-width: 638px) {
  ._MenuBar-inner_1hxnj_29 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
._MenuBar-history_1hxnj_45 {
  display: flex;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Header/styles.module.css/#css-module-data */
._PuckHeader_c2nei_1 {
  --_puck-menu-bar-color-bg: var( --puck-header-color-bg, var(--puck-color-surface) );
  background: var(--puck-header-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-header-color-text, var(--puck-color-text));
  --_puck-heading-color: var(--puck-header-color-text, var(--puck-color-text));
  grid-area: header;
  position: relative;
  max-width: 100vw;
}
@media (min-width: 638px) {
  ._PuckHeader_c2nei_1 {
    padding-left: 67px;
  }
  ._PuckHeader--hidePlugins_c2nei_21 {
    padding-left: 0;
  }
}
._PuckHeader-inner_c2nei_26 {
  align-items: end;
  display: grid;
  gap: var(--puck-space-chrome-gutter);
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: var(--puck-space-chrome-gutter);
}
@media (min-width: 638px) {
  ._PuckHeader-inner_c2nei_26 {
    border-left: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
  ._PuckHeader--hidePlugins_c2nei_21 ._PuckHeader-inner_c2nei_26 {
    border-left: none;
  }
}
._PuckHeader-toggle_c2nei_46 {
  display: flex;
  margin-inline-start: calc(var(--puck-space-1) * -1);
  padding-top: 2px;
}
._PuckHeader-rightSideBarToggle_c2nei_52,
._PuckHeader-leftSideBarToggle_c2nei_53 {
  display: none;
}
@media (min-width: 638px) {
  ._PuckHeader-rightSideBarToggle_c2nei_52,
  ._PuckHeader-leftSideBarToggle_c2nei_53 {
    display: block;
  }
}
._PuckHeader-title_c2nei_64 {
  align-self: center;
}
._PuckHeader-path_c2nei_68 {
  font-family: var(--puck-font-family-monospaced);
  font-size: var(--puck-font-size-xxs);
  font-weight: normal;
  word-break: break-all;
}
._PuckHeader-tools_c2nei_75 {
  display: flex;
  gap: var(--puck-space-4);
  justify-content: flex-end;
}
._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text-muted);
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._PuckHeader--menuOpen_c2nei_86 ._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text);
}
@media (min-width: 638px) {
  ._PuckHeader-menuButton_c2nei_81 {
    display: none;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/SidebarSection/styles.module.css/#css-module-data */
._SidebarSection_1uv88_1 {
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--puck-color-text);
}
._SidebarSection_1uv88_1:last-of-type {
  flex-grow: 1;
}
._SidebarSection-title_1uv88_12 {
  background: var(--_puck-sidebar-section-color-bg, var(--puck-color-surface));
  padding: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  overflow-x: auto;
}
._SidebarSection--noBorderTop_1uv88_20 > ._SidebarSection-title_1uv88_12 {
  border-top: 0px;
}
._SidebarSection-content_1uv88_24:last-child {
  padding-bottom: var(--puck-space-1);
}
._SidebarSection_1uv88_1:last-of-type ._SidebarSection-content_1uv88_24 {
  border-bottom: none;
  flex-grow: 1;
}
._SidebarSection-breadcrumbLabel_1uv88_33 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._SidebarSection-breadcrumbLabel_1uv88_33:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._SidebarSection-breadcrumbLabel_1uv88_33:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._SidebarSection-breadcrumbLabel_1uv88_33:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._SidebarSection-breadcrumbs_1uv88_62 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-breadcrumb_1uv88_33 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-heading_1uv88_74 {
  padding-inline-end: var(--puck-space-4);
}
._SidebarSection-loadingOverlay_1uv88_78 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Breadcrumbs/styles.module.css/#css-module-data */
._Breadcrumbs_8c6w5_1 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Breadcrumbs-breadcrumbLabel_8c6w5_7:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._Breadcrumbs-breadcrumb_8c6w5_7 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ViewportControls/styles.module.css/#css-module-data */
._ViewportControls_v26yb_1 {
  position: relative;
}
._ViewportControls--fullScreen_v26yb_5 {
  border-radius: 32px;
  display: flex;
  position: absolute;
  bottom: var(--puck-space-3);
  right: var(--puck-space-3);
  overflow: hidden;
}
._ViewportControls-toggleButton_v26yb_14 {
  display: none;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14 {
  align-items: center;
  background-color: var(--puck-color-surface-inverse);
  border: var(--puck-border-width-regular) solid var(--puck-color-border-inverse);
  border-radius: var(--puck-radius-pill);
  cursor: pointer;
  color: var(--puck-color-text-inverse);
  display: flex;
  justify-content: center;
  width: 42px;
  height: 42px;
  z-index: 1;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14:hover {
  color: var(--puck-color-interactive-inverse-hover);
  border: var(--puck-border-width-regular) solid var(--puck-color-interactive-inverse-hover);
}
._ViewportControls-actions_v26yb_39 {
  display: flex;
}
._ViewportControls-actionsInner_v26yb_43 {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  background: var(--puck-color-surface-muted);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-pill);
  margin-left: none;
  margin-right: none;
  padding-right: 42px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(100%);
  transition: transform var(--puck-duration-medium) var(--puck-ease-emphasized);
}
._ViewportControls--fullScreen_v26yb_5._ViewportControls--isExpanded_v26yb_67 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(42px);
}
._ViewportControls-divider_v26yb_72 {
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-bottom: var(--puck-space-2);
  margin-top: var(--puck-space-2);
}
._ViewportControls-zoomSelect_v26yb_79 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 10px;
  color: currentColor;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  border: 0;
  font-size: var(--puck-font-size-xxxs);
  padding: 0;
  padding-left: var(--puck-space-2);
  width: 96px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
  display: none;
}
@media (min-width: 638px) {
  ._ViewportControls-zoom_v26yb_79,
  ._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
    display: flex;
    justify-content: center;
  }
}
._ViewportControls-zoomSelect_v26yb_79:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
._ViewportButton-inner_v26yb_110 {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
}
._ViewportButton--isActive_v26yb_118 ._ViewportButton-inner_v26yb_110 {
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Canvas/styles.module.css/#css-module-data */
._PuckCanvas_zw9iy_1 {
  color: var(--puck-canvas-color-text, var(--puck-color-text));
  background: var(--puck-canvas-color-bg, var(--puck-color-surface-muted));
  display: flex;
  grid-area: editor;
  flex-direction: column;
  padding: var(--puck-space-chrome-gutter);
  position: relative;
  overflow: auto;
}
@media (min-width: 1198px) {
  ._PuckCanvas_zw9iy_1 {
    padding: calc(var(--puck-space-chrome-gutter) * 1.5);
    padding-top: calc(var(--puck-space-chrome-gutter) * 0.5);
  }
  ._PuckCanvas_zw9iy_1:not(._PuckCanvas_zw9iy_1:has(._PuckCanvas-controls_zw9iy_18)) {
    padding-top: calc(var(--puck-space-chrome-gutter) * 1.5);
  }
}
._PuckCanvas--fullScreen_zw9iy_23 {
  padding: 0;
  overflow: hidden;
}
@media (min-width: 1198px) {
  ._PuckCanvas--fullScreen_zw9iy_23 {
    padding: 0;
  }
}
._PuckCanvas-inner_zw9iy_34 {
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 288px;
  position: relative;
  width: 100%;
}
._PuckCanvas-root_zw9iy_43 {
  background: var(--puck-canvas-preview-color-bg, var(--puck-color-surface));
  outline: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: content-box;
  min-width: 321px;
  position: absolute;
  pointer-events: none;
  transform-origin: top;
  top: 0;
  bottom: 0;
  opacity: 0;
}
@media (min-width: 1198px) {
  ._PuckCanvas-root_zw9iy_43 {
    min-width: unset;
  }
}
@media (prefers-reduced-motion: reduce) {
  ._PuckCanvas-root_zw9iy_43 {
    transition: none !important;
  }
}
._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-root_zw9iy_43 {
  pointer-events: unset;
  opacity: 1;
}
._PuckCanvas-loader_zw9iy_73 {
  align-items: center;
  color: var(--puck-color-text-subtle);
  display: flex;
  height: 100%;
  justify-content: center;
  transition: opacity var(--puck-duration-slow) var(--puck-ease-entrance);
  opacity: 0;
  pointer-events: none;
}
._PuckCanvas--showLoader_zw9iy_84 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 1;
}
._PuckCanvas--showLoader_zw9iy_84._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 0;
  height: 0;
  transition: none;
}
._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: calc(var(--puck-space-chrome-gutter) * 0.5);
}
._PuckCanvas--fullScreen_zw9iy_23 ._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: 0;
  z-index: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css/#css-module-data */
@media (min-width: 766px) {
  ._ResizeHandle_144bf_2 {
    position: absolute;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    background: transparent;
    top: 0;
  }
  ._ResizeHandle_144bf_2:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ._ResizeHandle--left_144bf_16 {
    right: -3px;
  }
  ._ResizeHandle--right_144bf_20 {
    left: -3px;
  }
}

/* components/Puck/components/ResizeHandle/styles.css */
[data-resize-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  cursor: col-resize;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Sidebar/styles.module.css/#css-module-data */
._Sidebar_16oed_1 {
  border-block-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  position: relative;
  display: none;
  flex-direction: column;
  overflow-y: auto;
}
._Sidebar--isVisible_16oed_10 {
  display: flex;
}
._Sidebar--left_16oed_14 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-left-color-bg, var(--puck-color-surface) );
  background: var( --puck-sidebar-left-color-bg, var(--puck-color-surface-subtle) );
  grid-area: left;
}
@media (min-width: 766px) {
  ._Sidebar--left_16oed_14 {
    border-block-start: 0;
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar--right_16oed_34 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-right-color-bg, var(--puck-color-surface) );
  background: var(--puck-sidebar-right-color-bg, var(--puck-color-surface));
  grid-area: right;
}
@media (min-width: 766px) {
  ._Sidebar--right_16oed_34 {
    border-block-start: 0;
    border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar-resizeHandle_16oed_51 {
  position: absolute;
  height: 100%;
}
._Sidebar--left_16oed_14 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: left;
  justify-self: end;
}
._Sidebar--right_16oed_34 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: right;
  justify-self: start;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Nav/styles.module.css/#css-module-data */
._Nav_vll2r_1 {
  display: flex;
}
._Nav-list_vll2r_5 {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  gap: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._Nav-list_vll2r_5 {
    padding-top: 32px;
    flex-direction: column;
    gap: var(--puck-space-4);
    width: 100%;
  }
}
._Nav-mobileActions_vll2r_23 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline-start: auto;
  padding: var(--puck-space-1) var(--puck-space-4);
  border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
}
@media (min-width: 638px) {
  ._Nav-mobileActions_vll2r_23 {
    display: none;
  }
}
._NavItem-link_vll2r_39 {
  text-align: center;
  align-items: center;
  color: var(--puck-pluginbar-color-text, var(--puck-color-text-secondary));
  display: flex;
  gap: var(--puck-space-2);
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--puck-radius-m);
  padding: var(--puck-space-2) var(--puck-space-1);
  width: 64px;
  box-sizing: border-box;
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    width: auto;
  }
}
._NavItem_vll2r_39:first-of-type {
  padding-left: var(--puck-space-4);
}
._NavItem_vll2r_39:last-of-type {
  padding-right: var(--puck-space-4);
}
@media (min-width: 638px) {
  ._NavItem_vll2r_39:first-of-type,
  ._NavItem_vll2r_39:last-of-type {
    padding: 0;
  }
}
._NavItem-link_vll2r_39 {
  border-top: var(--puck-border-width-strong) solid transparent;
  border-bottom: var(--puck-border-width-strong) solid transparent;
  border-radius: var(--puck-radius-none);
  flex-direction: column;
  font-size: var(--puck-pluginbar-font-size, var(--puck-font-size-xxxs));
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    border: 0;
    border-left: var(--puck-border-width-strong) solid transparent;
    border-right: var(--puck-border-width-strong) solid transparent;
  }
}
._NavItem-linkIcon_vll2r_90 {
  height: 2em;
  width: 2em;
}
._NavItem-linkIcon_vll2r_90 svg {
  height: 100%;
  width: 100%;
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: var(--puck-color-interactive-subtle);
  color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  font-weight: var(--puck-font-weight-semibold);
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: transparent;
  border-top-color: var(--puck-color-interactive);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: var(--puck-font-weight-semibold);
}
@media (min-width: 638px) {
  ._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
    border-top-color: transparent;
    border-right-color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  }
}
._NavItem_vll2r_39:not(._NavItem--active_vll2r_100) > ._NavItem-link_vll2r_39:hover {
  background-color: var( --puck-pluginbar-color-bg-hover, var(--puck-color-interactive-soft) );
  color: var(--puck-pluginbar-color-text-hover, var(--puck-color-interactive));
}
@media (min-width: 638px) {
  ._NavItem--mobileOnly_vll2r_136 {
    display: none;
  }
}
._NavItem--desktopOnly_vll2r_141 {
  display: none;
}
@media (min-width: 638px) {
  ._NavItem--desktopOnly_vll2r_141 {
    display: block;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/blocks/styles.module.css/#css-module-data */
._BlocksPlugin_9af19_1 {
  padding: var(--puck-drawer-space, var(--puck-space-4));
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/outline/styles.module.css/#css-module-data */
._OutlinePlugin_1ylsc_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/fields/styles.module.css/#css-module-data */
._FieldsPlugin_18cj3_1 {
  background: var(--puck-color-surface);
  height: 100%;
  overflow-y: auto;
}
._FieldsPlugin-header_18cj3_7 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  font-weight: var(--puck-font-weight-semibold);
  padding-bottom: var(--puck-space-2);
  padding-left: var(--puck-space-4);
  padding-right: var(--puck-space-4);
  padding-top: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._FieldsPlugin-header_18cj3_7 {
    padding: var(--puck-space-4);
  }
}`,hz=`/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}`,ab="data-puck-style-source",lb="puck",vz="data-puck-style-id",cb={uiDefault:"ui-default",iframeInteractions:"iframe-styles"},ph=new WeakMap,gz=e=>{if(e)return e;if(!(typeof document>"u"))return document},mz=e=>{const t=ph.get(e);if(t)return t;const r=new Map;return ph.set(e,r),r},ub=(e,t,r=!1)=>{const n=e.head;if(n){if(t.parentElement!==n){r?n.prepend(t):n.append(t);return}r&&n.firstChild!==t&&n.prepend(t),!r&&n.lastChild!==t&&n.append(t)}},_z=(e,t,r,n=!1)=>{const o=e.createElement("style");return o.setAttribute(ab,lb),o.setAttribute(vz,t),o.textContent=r,ub(e,o,n),o},db=e=>(e==null?void 0:e.getAttribute(ab))===lb,pb=e=>{const t=gz(e==null?void 0:e.document);g.useInsertionEffect(()=>{if(!e||!t)return;const r=mz(t),n=r.get(e.id);if(n)n.count=n.count+1,n.el.textContent!==e.cssText&&(n.el.textContent=e.cssText),ub(t,n.el,e.prepend);else{const o=_z(t,e.id,e.cssText,e.prepend);r.set(e.id,{count:1,el:o})}return()=>{const o=r.get(e.id);o&&(o.count=o.count-1,o.count<=0&&(o.el.remove(),r.delete(e.id)))}},[e==null?void 0:e.cssText,e==null?void 0:e.id,e==null?void 0:e.prepend,e==null?void 0:e.document,t])},ks=null,yz=()=>ks!==null?ks:typeof document>"u"?!1:(ks=getComputedStyle(document.documentElement).getPropertyValue("--_puck-styles-loaded").trim()!=="",ks),bz=()=>{const e=yz();pb(e?null:{cssText:fz,id:cb.uiDefault,prepend:!0}),g.useEffect(()=>{},[])},xz=e=>{pb(e?{cssText:hz,document:e,id:cb.iframeInteractions}:null)},rp='style, link[rel="stylesheet"]',Rl="data-puck-style-mirror",fb=e=>!e.matches(rp)||db(e)?!1:e.tagName==="STYLE"?!!e.innerHTML.trim():!0,kz=e=>{const t=[];return e.querySelectorAll(rp).forEach(r=>{fb(r)&&t.push(r)}),t},fh=e=>Array.from(document.styleSheets).find(t=>t.ownerNode.href===e.href),wz=e=>{if(e)try{return Array.from(e.cssRules).map(t=>t.cssText).join("")}catch{console.warn("Access to stylesheet %s is denied. Ignoring…",e.href)}return""},hh=(e,t)=>{const r=e.attributes;(r==null?void 0:r.length)>0&&Array.from(r).forEach(n=>{t.setAttribute(n.name,n.value)})},vh=e=>setTimeout(e,0),Sz=({children:e,debug:t=!1,onStylesLoaded:r=()=>null,syncHostStyles:n=!0})=>{const{document:o,window:i}=Ez();return xz(o),g.useEffect(()=>{if(!i||!o)return()=>{};let s=[];const a={},l=()=>{s.forEach(({mirror:_})=>{_.remove()}),s=[],Array.from(o.head.querySelectorAll(`[${Rl}="true"]`)).forEach(_=>{_.remove()}),Object.keys(a).forEach(_=>{delete a[_]})},c=_=>s.findIndex(S=>S.original===_),p=(_,S=!1)=>Se(null,null,function*(){let w;if(_.nodeName==="LINK"&&S){w=document.createElement("style"),w.type="text/css";let j=fh(_);j||(yield new Promise(I=>{const E=()=>{I(),_.removeEventListener("load",E)};_.addEventListener("load",E)}),j=fh(_));const C=wz(j);if(!C){t&&console.warn("Tried to load styles for link element, but couldn't find them. Skipping...");return}w.innerHTML=C,w.setAttribute("data-href",_.getAttribute("href"))}else w=_.cloneNode(!0);return w.setAttribute(Rl,"true"),w}),d=_=>Se(null,null,function*(){const S=c(_);if(S>-1){t&&console.log("Tried to add an element that was already mirrored. Updating instead..."),s[S].mirror.innerText=_.innerText;return}const w=yield p(_);if(!w)return;const j=El(w.outerHTML);if(a[j]){t&&console.log("iframe already contains element that is being mirrored. Skipping...");return}a[j]=!0,o.head.append(w),s.push({original:_,mirror:w}),t&&console.log(`Added style node ${_.outerHTML}`)}),f=_=>{var S,w;const j=c(_);if(j===-1){t&&console.log("Tried to remove an element that did not exist. Skipping...");return}const C=El(_.outerHTML);(w=(S=s[j])==null?void 0:S.mirror)==null||w.remove(),delete a[C],t&&console.log(`Removed style node ${_.outerHTML}`)},h=new MutationObserver(_=>{_.forEach(S=>{S.type==="childList"&&(S.addedNodes.forEach(w=>{if(w.nodeType===Node.TEXT_NODE||w.nodeType===Node.ELEMENT_NODE){const j=w.nodeType===Node.TEXT_NODE?w.parentElement:w;j&&fb(j)&&vh(()=>d(j))}}),S.removedNodes.forEach(w=>{if(w.nodeType===Node.TEXT_NODE||w.nodeType===Node.ELEMENT_NODE){const j=w.nodeType===Node.TEXT_NODE?w.parentElement:w;j&&j.matches(rp)&&!db(j)&&vh(()=>f(j))}}))})});if(!n)return r(),()=>{h.disconnect(),l()};const v=i.parent.document,m=kz(v),y=[];let x=0;const k=v.getElementsByTagName("html")[0];hh(k,o.documentElement);const b=v.getElementsByTagName("body")[0];return hh(b,o.body),Promise.all(m.map((_,S)=>Se(null,null,function*(){if(_.nodeName==="LINK"){const j=_.href;if(y.indexOf(j)>-1)return;y.push(j)}const w=yield p(_);if(w)return s.push({original:_,mirror:w}),w}))).then(_=>{const S=_.filter(w=>typeof w<"u");S.forEach(w=>{w.onload=()=>{x=x+1,x>=S.length&&r()},w.onerror=()=>{const j=w instanceof HTMLLinkElement?w.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${j?`: ${j}`:""}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),x=x+1,x>=S.length&&r()}}),o.head.querySelectorAll(`[${Rl}="true"]`).forEach(w=>{w.remove()}),o.head.append(...S),S.forEach(w=>{w.nodeName==="STYLE"&&(x=x+1)}),x>=S.length&&r(),h.observe(v.head,{childList:!0,subtree:!0}),S.forEach(w=>{const j=El(w.outerHTML);a[j]=!0})}),()=>{h.disconnect(),l()}},[n]),u.jsx(u.Fragment,{children:e})},np=g.createContext({}),Ez=()=>g.useContext(np);function hb(e){var t=e,{children:r,className:n,debug:o,id:i,onReady:s=()=>{},onNotReady:a=()=>{},frameRef:l,syncHostStyles:c=!0}=t,p=Bt(t,["children","className","debug","id","onReady","onNotReady","frameRef","syncHostStyles"]);const[d,f]=g.useState(!1),[h,v]=g.useState({}),[m,y]=g.useState(),[x,k]=g.useState(!1);return g.useEffect(()=>{d&&k(!c)},[d,c]),g.useEffect(()=>{var b;if(l.current){const _=l.current.contentDocument,S=l.current.contentWindow;v({document:_||void 0,window:S||void 0}),y((b=l.current.contentDocument)==null?void 0:b.getElementById("frame-root")),_&&S&&x?s():a()}},[l,d,x]),u.jsx("iframe",F(D({},p),{className:n,id:i,srcDoc:'<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',ref:l,onLoad:()=>{f(!0)},children:u.jsx(np.Provider,{value:h,children:d&&m&&u.jsx(Sz,{debug:o,onStylesLoaded:()=>k(!0),syncHostStyles:c,children:Ur.createPortal(r,m)})})}))}hb.displayName="AutoFrame";var Cz=hb;A();var Iz=Ou(Uc),vb=g.memo(()=>{var e,t,r,n;const o=H($e(d=>{var f;return(f=d.state.indexes.nodes.root)==null?void 0:f.flatData.props})),i=H(d=>d.config),s=H(d=>d.metadata),a=g.useMemo(()=>{const d=vo({props:o??{}});return Mh(d)},[o]),l=Ry(i,a,Iz),c=g.useMemo(()=>F(D({},l),{children:u.jsx(Yc,{zone:et}),puck:{renderDropZone:Yc,isEditing:!0,dragRef:null,metadata:s},editMode:!0}),[l,s]),p=za((t=(e=i.root)==null?void 0:e.fields)!=null?t:{},c);return(r=i.root)!=null&&r.render?(n=i.root)==null?void 0:n.render(F(D(D({},c),p),{id:"puck-root"})):u.jsx(u.Fragment,{children:c.children})});vb.displayName="EditorPage";var jz=vb;A();var Pz={PuckPreview:"_PuckPreview_zbic3_1","PuckPreview-frame":"_PuckPreview-frame_zbic3_6"},Tl=ee("PuckPreview",Pz),Az=e=>{const t=H(r=>r.status);g.useEffect(()=>{if(e.current&&t==="READY"){const r=e.current,n=s=>{const a=new Py("pointermove",F(D({},s),{bubbles:!0,cancelable:!1,clientX:s.clientX,clientY:s.clientY,pointerId:s.pointerId,pointerType:s.pointerType,isPrimary:s.isPrimary,originalTarget:s.target}));r.dispatchEvent(a)},o=()=>{var s;i(),(s=r.contentDocument)==null||s.addEventListener("pointermove",n,{capture:!0})},i=()=>{var s;(s=r.contentDocument)==null||s.removeEventListener("pointermove",n)};return o(),()=>{i()}}},[t])},zz=e=>{const t=H(o=>o.state.ui.previewMode),r=H(o=>o.status),n=H(o=>o.iframe.enabled);g.useEffect(()=>{var o,i;const s=n?(i=(o=e.current)==null?void 0:o.contentDocument)==null?void 0:i.querySelector("[data-puck-entry]"):e.current;s==null||s.setAttribute("data-puck-preview-mode",t)},[t,r,n])},gb=({id:e="puck-preview"})=>{const t=H(d=>d.dispatch),r=H(d=>d.config),n=H(d=>d.setStatus),o=H(d=>d.iframe),i=H(d=>d.overrides),s=H(d=>d.metadata),a=H(d=>d.state.ui.previewMode==="edit"?null:d.state.data),l=g.useMemo(()=>i.iframe,[i]),c=g.useRef(null);Az(c),zz(c);const p=a?u.jsx(qP,{data:a,config:r,metadata:s}):u.jsx(jz,{});return g.useEffect(()=>{o.enabled||n("READY")},[o.enabled]),u.jsx("div",{className:Tl(),id:e,"data-puck-preview":!0,onClick:d=>{const f=d.target;!f.hasAttribute("data-puck-component")&&!f.hasAttribute("data-puck-dropzone")&&t({type:"setUi",ui:{itemSelector:null}})},children:o.enabled?u.jsx(Cz,{id:"preview-frame",className:Tl("frame"),"data-rfd-iframe":!0,syncHostStyles:o.syncHostStyles,onReady:()=>{n("READY")},onNotReady:()=>{n("MOUNTED")},frameRef:c,children:u.jsx(np.Consumer,{children:({document:d})=>l?u.jsx(l,{document:d,children:p}):p})}):u.jsx("div",{id:"preview-frame",className:Tl("frame"),ref:c,"data-puck-entry":!0,children:p})})};A();A();var Oz=({overrides:e,plugins:t})=>{const r=D({},e);return t==null||t.forEach(n=>{n.overrides&&Object.keys(n.overrides).forEach(o=>{var i;const s=o;if(!((i=n.overrides)!=null&&i[s]))return;if(s==="fieldTypes"){const c=n.overrides.fieldTypes;Object.keys(c).forEach(p=>{r.fieldTypes=r.fieldTypes||{};const d=r.fieldTypes[p],f=h=>c[p](F(D({},h),{children:d?d(h):h.children}));r.fieldTypes[p]=f});return}const a=r[s],l=c=>n.overrides[s](F(D({},c),{children:a?a(c):c.children}));r[s]=l})}),r},Dz=({overrides:e,plugins:t})=>g.useMemo(()=>Oz({overrides:e,plugins:t}),[t,e]);A();A();var op={Puck:"_Puck_tzaxg_19","Puck-portal":"_Puck-portal_tzaxg_31",PuckLayout:"_PuckLayout_tzaxg_36","PuckLayout-inner":"_PuckLayout-inner_tzaxg_40","Puck--hidePlugins":"_Puck--hidePlugins_tzaxg_73","PuckLayout--mounted":"_PuckLayout--mounted_tzaxg_78","PuckLayout--mobilePanelHeightToggle":"_PuckLayout--mobilePanelHeightToggle_tzaxg_82","PuckLayout--leftSideBarVisible":"_PuckLayout--leftSideBarVisible_tzaxg_82","PuckLayout--isExpanded":"_PuckLayout--isExpanded_tzaxg_90","PuckLayout--mobilePanelHeightMinContent":"_PuckLayout--mobilePanelHeightMinContent_tzaxg_110","PuckLayout--rightSideBarVisible":"_PuckLayout--rightSideBarVisible_tzaxg_137","PuckLayout-mounted":"_PuckLayout-mounted_tzaxg_156","PuckLayout-nav":"_PuckLayout-nav_tzaxg_197","PuckLayout-header":"_PuckLayout-header_tzaxg_217",PuckPluginTab:"_PuckPluginTab_tzaxg_231","PuckPluginTab--visible":"_PuckPluginTab--visible_tzaxg_237","PuckPluginTab-body":"_PuckPluginTab-body_tzaxg_243"};A();var Xc=({children:e})=>u.jsx(u.Fragment,{children:e});A();var Mz=()=>{const e=ye(),t=g.useCallback(()=>{const r=e.getState().dispatch;r({type:"setUi",ui:n=>({previewMode:n.previewMode==="edit"?"interactive":"edit"})})},[e]);Yt({meta:!0,i:!0},t),Yt({ctrl:!0,i:!0},t)};A();A();A();var Rz={MenuBar:"_MenuBar_1hxnj_1","MenuBar--menuOpen":"_MenuBar--menuOpen_1hxnj_14","MenuBar-inner":"_MenuBar-inner_1hxnj_29","MenuBar-history":"_MenuBar-history_1hxnj_45"},Ll=ee("MenuBar",Rz);function Tz({menuOpen:e=!1,renderHeaderActions:t,setMenuOpen:r}){const n=H(c=>c.history.back),o=H(c=>c.history.forward),i=H(c=>c.history.hasFuture()),s=H(c=>c.history.hasPast()),a=J("header-undo"),l=J("header-redo");return u.jsx("div",{className:Ll({menuOpen:e}),onClick:c=>{var p;const d=c.target;window.matchMedia("(min-width: 638px)").matches||d.tagName==="A"&&((p=d.getAttribute("href"))!=null&&p.startsWith("#"))&&r(!1)},children:u.jsxs("div",{className:Ll("inner"),children:[u.jsxs("div",{className:Ll("history"),children:[u.jsx(Xe,{type:"button",title:a,disabled:!s,onClick:n,children:u.jsx($w,{size:21})}),u.jsx(Xe,{type:"button",title:l,disabled:!i,onClick:o,children:u.jsx(Ow,{size:21})})]}),u.jsx(u.Fragment,{children:t&&t()})]})})}A();var Lz={PuckHeader:"_PuckHeader_c2nei_1","PuckHeader--hidePlugins":"_PuckHeader--hidePlugins_c2nei_21","PuckHeader-inner":"_PuckHeader-inner_c2nei_26","PuckHeader-toggle":"_PuckHeader-toggle_c2nei_46","PuckHeader-rightSideBarToggle":"_PuckHeader-rightSideBarToggle_c2nei_52","PuckHeader-leftSideBarToggle":"_PuckHeader-leftSideBarToggle_c2nei_53","PuckHeader-title":"_PuckHeader-title_c2nei_64","PuckHeader-path":"_PuckHeader-path_c2nei_68","PuckHeader-tools":"_PuckHeader-tools_c2nei_75","PuckHeader-menuButton":"_PuckHeader-menuButton_c2nei_81","PuckHeader--menuOpen":"_PuckHeader--menuOpen_c2nei_86"},ar=ee("PuckHeader",Lz),Nz=({hidePlugins:e})=>{const{onPublish:t,renderHeader:r,renderHeaderActions:n,headerTitle:o,headerPath:i,iframe:s}=Ga(),a=H(C=>C.dispatch),l=ye(),c=g.useMemo(()=>r?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),I=>{var E=I,{actions:z}=E,O=Bt(E,["actions"]);const L=r,B=H(N=>N.state);return u.jsx(L,F(D({},O),{dispatch:a,state:B,children:z}))}):Xc,[r]),p=g.useMemo(()=>n?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),I=>{const E=n,z=H(O=>O.state);return u.jsx(E,F(D({},I),{dispatch:a,state:z}))}):Xc,[n]),d=H(C=>C.overrides.header||c),f=H(C=>C.overrides.headerActions||p),[h,v]=g.useState(!1),m=H(C=>{var I,E;return(E=((I=C.state.indexes.nodes.root)==null?void 0:I.data).props.title)!=null?E:""}),y=H(C=>C.state.ui.leftSideBarVisible),x=H(C=>C.state.ui.rightSideBarVisible),k=g.useCallback(C=>{const I=window.matchMedia("(min-width: 638px)").matches,E=C==="left"?y:x,z=C==="left"?"rightSideBarVisible":"leftSideBarVisible";a({type:"setUi",ui:D({[`${C}SideBarVisible`]:!E},I?{}:{[z]:!1})})},[a,y,x]),b=J("header-publish"),_=J("label-page"),S=J("header-toggle-leftsidebar"),w=J("header-toggle-rightsidebar"),j=J("header-toggle-menubar");return u.jsx(d,{actions:u.jsx(u.Fragment,{children:u.jsx(f,{children:u.jsx(Wc,{onClick:()=>{const C=l.getState().state.data;t&&t(C)},icon:u.jsx(Vp,{size:"14px"}),children:b})})}),children:u.jsx("header",{className:ar({leftSideBarVisible:y,rightSideBarVisible:x,hidePlugins:e}),children:u.jsxs("div",{className:ar("inner"),children:[u.jsxs("div",{className:ar("toggle"),children:[u.jsx("div",{className:ar("leftSideBarToggle"),children:u.jsx(Xe,{type:"button",onClick:()=>{k("left")},title:S,children:u.jsx(Iw,{focusable:"false"})})}),u.jsx("div",{className:ar("rightSideBarToggle"),children:u.jsx(Xe,{type:"button",onClick:()=>{k("right")},title:w,children:u.jsx(jw,{focusable:"false"})})})]}),u.jsx("div",{className:ar("title"),children:u.jsxs(Ua,{rank:"2",size:"xs",children:[o||m||_,i&&u.jsxs(u.Fragment,{children:[" ",u.jsx("code",{className:ar("path"),children:i})]})]})}),u.jsxs("div",{className:ar("tools"),children:[u.jsx("div",{className:ar("menuButton"),children:u.jsx(Xe,{type:"button",onClick:()=>v(!h),title:j,children:h?u.jsx(ig,{focusable:"false"}):u.jsx(wi,{focusable:"false"})})}),u.jsx(Tz,{dispatch:a,onPublish:t,menuOpen:h,renderHeaderActions:()=>u.jsx(f,{children:u.jsx(Wc,{onClick:()=>{const C=l.getState().state.data;t&&t(C)},icon:u.jsx(Vp,{size:"14px"}),children:b})}),setMenuOpen:v})]})]})})})},Fz=g.memo(Nz);A();A();var Bz={SidebarSection:"_SidebarSection_1uv88_1","SidebarSection-title":"_SidebarSection-title_1uv88_12","SidebarSection--noBorderTop":"_SidebarSection--noBorderTop_1uv88_20","SidebarSection-content":"_SidebarSection-content_1uv88_24","SidebarSection-breadcrumbLabel":"_SidebarSection-breadcrumbLabel_1uv88_33","SidebarSection-breadcrumbs":"_SidebarSection-breadcrumbs_1uv88_62","SidebarSection-breadcrumb":"_SidebarSection-breadcrumb_1uv88_33","SidebarSection-heading":"_SidebarSection-heading_1uv88_74","SidebarSection-loadingOverlay":"_SidebarSection-loadingOverlay_1uv88_78"},Hn=ee("SidebarSection",Bz),$z=({children:e,title:t,background:r,showBreadcrumbs:n,noBorderTop:o,isLoading:i})=>u.jsxs("div",{className:Hn({noBorderTop:o}),style:{background:r},children:[u.jsx("div",{className:Hn("title"),children:u.jsxs("div",{className:Hn("breadcrumbs"),children:[n&&u.jsx(sb,{}),u.jsx("div",{className:Hn("heading"),children:u.jsx(Ua,{rank:"2",size:"xs",children:t})})]})}),u.jsx("div",{className:Hn("content"),children:e}),i&&u.jsx("div",{className:Hn("loadingOverlay"),children:u.jsx(kn,{size:32})})]});A();A();A();var mb={ViewportControls:"_ViewportControls_v26yb_1","ViewportControls--fullScreen":"_ViewportControls--fullScreen_v26yb_5","ViewportControls-toggleButton":"_ViewportControls-toggleButton_v26yb_14","ViewportControls-actions":"_ViewportControls-actions_v26yb_39","ViewportControls-actionsInner":"_ViewportControls-actionsInner_v26yb_43","ViewportControls--isExpanded":"_ViewportControls--isExpanded_v26yb_67","ViewportControls-divider":"_ViewportControls-divider_v26yb_72","ViewportControls-zoomSelect":"_ViewportControls-zoomSelect_v26yb_79","ViewportControls-zoom":"_ViewportControls-zoom_v26yb_79","ViewportButton-inner":"_ViewportButton-inner_v26yb_110","ViewportButton--isActive":"_ViewportButton--isActive_v26yb_118"},gh={Smartphone:u.jsx(Rw,{size:16}),Tablet:u.jsx(Nw,{size:16}),Monitor:u.jsx(cg,{size:16}),FullWidth:u.jsx(dw,{size:16})},Ir=ee("ViewportControls",mb),mh=ee("ViewportButton",mb),Jc=({children:e,title:t,onClick:r,isActive:n,disabled:o})=>u.jsx("span",{className:mh({isActive:n}),suppressHydrationWarning:!0,children:u.jsx(Xe,{type:"button",title:t,disabled:o||n,onClick:r,suppressHydrationWarning:!0,children:u.jsx("span",{className:mh("inner"),children:e})})}),_h=[{label:"25%",value:.25},{label:"50%",value:.5},{label:"75%",value:.75},{label:"100%",value:1},{label:"125%",value:1.25},{label:"150%",value:1.5},{label:"200%",value:2}],Wz=({viewport:e,isActive:t,onClick:r})=>{var n;const o=J("viewport-switch",{label:(n=e.label)!=null?n:""}),i=J("viewport-switch-default");return u.jsx(Jc,{title:e.label?o:i,onClick:r,isActive:t,children:typeof e.icon=="string"?gh[e.icon]||e.icon:e.icon||gh.Smartphone})},Hz=({autoZoom:e,zoom:t,onViewportChange:r,onZoom:n,fullScreen:o})=>{var i,s;const a=H(b=>b.viewports),l=H(b=>b.state.ui.viewports),c=_h.find(b=>b.value===e),p=J("viewport-zoom-auto",{zoom:(e*100).toFixed(0)}),d=g.useMemo(()=>[..._h,...c?[]:[{value:e,label:p}]].filter(b=>b.value<=e).sort((b,_)=>b.value>_.value?1:-1),[e,p]),[f,h]=g.useState(l.current.width);g.useEffect(()=>{h(l.current.width)},[l.current]);const[v,m]=g.useState(!1),y=J("viewport-zoom-out"),x=J("viewport-zoom-in"),k=J("viewport-toggle-menu");return u.jsxs("div",{className:Ir({isExpanded:v,fullScreen:o}),suppressHydrationWarning:!0,children:[u.jsx("div",{className:Ir("actions"),children:u.jsxs("div",{className:Ir("actionsInner"),children:[a.map((b,_)=>u.jsx(Wz,{viewport:b,onClick:()=>{h(b.width),r(b)},isActive:f===b.width},_)),u.jsx("div",{className:Ir("divider")}),u.jsx(Jc,{title:y,disabled:t<=((i=d[0])==null?void 0:i.value),onClick:b=>{b.stopPropagation(),n(d[Math.max(d.findIndex(_=>_.value===t)-1,0)].value)},children:u.jsx(Vw,{size:16})}),u.jsx(Jc,{title:x,disabled:t>=((s=d[d.length-1])==null?void 0:s.value),onClick:b=>{b.stopPropagation(),n(d[Math.min(d.findIndex(_=>_.value===t)+1,d.length-1)].value)},children:u.jsx(Hw,{size:16})}),u.jsxs("div",{className:Ir("zoom"),children:[u.jsx("div",{className:Ir("divider")}),u.jsx("select",{className:Ir("zoomSelect"),value:t.toString(),onClick:b=>{b.stopPropagation()},onChange:b=>{n(parseFloat(b.currentTarget.value))},children:d.map(b=>u.jsx("option",{value:b.value,label:b.label},b.label))})]})]})}),u.jsx("button",{className:Ir("toggleButton"),title:k,onClick:()=>m(b=>!b),children:v?u.jsx(Ww,{size:16}):u.jsx(cg,{size:16})})]})};A();var Vz={PuckCanvas:"_PuckCanvas_zw9iy_1","PuckCanvas-controls":"_PuckCanvas-controls_zw9iy_18","PuckCanvas--fullScreen":"_PuckCanvas--fullScreen_zw9iy_23","PuckCanvas-inner":"_PuckCanvas-inner_zw9iy_34","PuckCanvas-root":"_PuckCanvas-root_zw9iy_43","PuckCanvas--ready":"_PuckCanvas--ready_zw9iy_68","PuckCanvas-loader":"_PuckCanvas-loader_zw9iy_73","PuckCanvas--showLoader":"_PuckCanvas--showLoader_zw9iy_84"};A();var _b=g.createContext(null),qz=({children:e})=>{const t=g.useRef(null),r=g.useMemo(()=>({frameRef:t}),[]);return u.jsx(_b.Provider,{value:r,children:e})},yb=()=>{const e=g.useContext(_b);if(e===null)throw new Error("useCanvasFrame must be used within a FrameProvider");return e},Wo=ee("PuckCanvas",Vz),Nl=150,Uz=()=>{var e;const{frameRef:t}=yb(),r=hg(t),{viewports:n=_i,ui:o}=Ga(),{dispatch:i,overrides:s,setUi:a,zoomConfig:l,setZoomConfig:c,status:p,iframe:d,_experimentalFullScreenCanvas:f}=H($e(z=>({dispatch:z.dispatch,overrides:z.overrides,setUi:z.setUi,zoomConfig:z.zoomConfig,setZoomConfig:z.setZoomConfig,status:z.status,iframe:z.iframe,_experimentalFullScreenCanvas:z._experimentalFullScreenCanvas}))),{leftSideBarVisible:h,rightSideBarVisible:v,leftSideBarWidth:m,rightSideBarWidth:y,viewports:x}=H($e(z=>({leftSideBarVisible:z.state.ui.leftSideBarVisible,rightSideBarVisible:z.state.ui.rightSideBarVisible,leftSideBarWidth:z.state.ui.leftSideBarWidth,rightSideBarWidth:z.state.ui.rightSideBarWidth,viewports:z.state.ui.viewports}))),[k,b]=g.useState(!1),_=g.useRef(!1),S=g.useMemo(()=>({children:O})=>u.jsx(u.Fragment,{children:O}),[]),w=g.useMemo(()=>s.preview||S,[s]),j=g.useCallback(()=>{if(t.current){const z=t.current,O=fg(z);return{width:O.contentBox.width,height:O.contentBox.height}}return{width:0,height:0}},[t]);g.useEffect(()=>{r()},[t,h,v,m,y,x]),g.useEffect(()=>{const{height:z}=j();x.current.height==="auto"&&c(F(D({},l),{rootHeight:z/l.zoom}))},[l.zoom,j,c]),g.useEffect(()=>{r()},[x.current.width,x]),g.useEffect(()=>{if(!t.current)return;const z=new ResizeObserver(()=>{_.current||r()});return z.observe(t.current),()=>{z.disconnect()}},[t.current]);const[C,I]=g.useState(!1);g.useEffect(()=>{setTimeout(()=>{I(!0)},500)},[]);const E=ye();return g.useEffect(()=>{var z,O;if(typeof window>"u"||(z=o==null?void 0:o.viewports)!=null&&z.current)return;const L=window.innerWidth,B=(O=t.current)==null?void 0:O.getBoundingClientRect().width;if(!L||!B||n.length===0)return;const N=Object.values(n).find($=>$.width==="100%"),R=!!N;let W=Object.entries(n).filter(([$,Z])=>Z.width!=="100%").map(([$,Z])=>({key:$,diff:Math.abs(L-(typeof Z.width=="string"?L:Z.width)),value:Z})).sort(($,Z)=>$.diff>Z.diff?1:-1)[0].value;if(W.width<B&&R&&(W=N),d.enabled){const $=E.getState(),Z={state:F(D({},$.state),{ui:F(D({},$.state.ui),{viewports:F(D({},$.state.ui.viewports),{current:F(D({},$.state.ui.viewports.current),{height:(W==null?void 0:W.height)||"auto",width:W==null?void 0:W.width})})})})};let oe=$.history;$.history.histories.length===1&&(oe=F(D({},oe),{histories:[Z]})),E.setState(F(D({},Z),{history:oe}))}},[n,t.current,d,E,(e=o==null?void 0:o.viewports)==null?void 0:e.current]),u.jsxs("div",{className:Wo({ready:p==="READY"||!d.enabled||!d.waitForStyles,showLoader:C,fullScreen:f}),onClick:z=>{const O=z.target;!O.hasAttribute("data-puck-component")&&!O.hasAttribute("data-puck-dropzone")&&i({type:"setUi",ui:{itemSelector:null},recordHistory:!1})},children:[x.controlsVisible&&d.enabled&&u.jsx("div",{className:Wo("controls"),children:u.jsx(Hz,{fullScreen:f,autoZoom:l.autoZoom,zoom:l.zoom,onViewportChange:z=>{b(!0),_.current=!0;const O=F(D({},z),{height:z.height||"auto",zoom:l.zoom}),L={viewports:F(D({},x),{current:O})};a(L),r({viewports:F(D({},x),{current:O})})},onZoom:z=>{b(!0),_.current=!0,c(F(D({},l),{zoom:z}))}})}),u.jsxs("div",{className:Wo("inner"),ref:t,children:[u.jsx("div",{className:Wo("root"),style:{width:d.enabled?x.current.width:"100%",height:l.rootHeight,transform:d.enabled?`scale(${l.zoom})`:void 0,transition:k?`width ${Nl}ms ease-out, height ${Nl}ms ease-out, transform ${Nl}ms ease-out`:"",overflow:d.enabled?void 0:"auto"},suppressHydrationWarning:!0,id:"puck-canvas-root",onTransitionEnd:()=>{b(!1),_.current=!1},children:u.jsx(w,{children:u.jsx(gb,{})})}),u.jsx("div",{className:Wo("loader"),children:u.jsx(kn,{size:24})})]})]})};A();function yh(e,t){const[r,n]=g.useState(null),o=g.useRef(null),i=H(a=>e==="left"?a.state.ui.leftSideBarWidth:a.state.ui.rightSideBarWidth);g.useEffect(()=>{if(typeof window<"u"&&!i)try{const a=localStorage.getItem("puck-sidebar-widths");if(a){const c=JSON.parse(a)[e];c&&t({type:"setUi",ui:{[e==="left"?"leftSideBarWidth":"rightSideBarWidth"]:c}})}}catch(a){console.error(`Failed to load ${e} sidebar width from localStorage`,a)}},[t,e,i]),g.useEffect(()=>{i!==void 0&&n(i)},[i]);const s=g.useCallback(a=>{t({type:"setUi",ui:{[e==="left"?"leftSideBarWidth":"rightSideBarWidth"]:a}});let l={};try{const c=localStorage.getItem("puck-sidebar-widths");l=c?JSON.parse(c):{}}catch(c){console.error(`Failed to save ${e} sidebar width to localStorage`,c)}finally{localStorage.setItem("puck-sidebar-widths",JSON.stringify(F(D({},l),{[e]:a})))}window.dispatchEvent(new CustomEvent("viewportchange",{bubbles:!0,cancelable:!1}))},[t,e]);return{width:r,setWidth:n,sidebarRef:o,handleResizeEnd:s}}A();A();A();var Zz={ResizeHandle:"_ResizeHandle_144bf_2","ResizeHandle--left":"_ResizeHandle--left_144bf_16","ResizeHandle--right":"_ResizeHandle--right_144bf_20"},Yz=ee("ResizeHandle",Zz),Gz=({position:e,sidebarRef:t,onResize:r,onResizeEnd:n})=>{const{frameRef:o}=yb(),i=hg(o),s=g.useRef(null),a=g.useRef(!1),l=g.useRef(0),c=g.useRef(0),p=g.useCallback(h=>{if(!a.current)return;const v=h.clientX-l.current,m=e==="left"?c.current+v:c.current-v,y=Math.max(192,m);r(y),h.preventDefault()},[r,e]),d=g.useCallback(()=>{var h;if(!a.current)return;a.current=!1,document.body.style.cursor="",document.body.style.userSelect="";const v=document.getElementById("resize-overlay");v&&document.body.removeChild(v),document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d);const m=((h=t.current)==null?void 0:h.getBoundingClientRect().width)||0;n(m),i()},[n]),f=g.useCallback(h=>{var v;a.current=!0,l.current=h.clientX,c.current=((v=t.current)==null?void 0:v.getBoundingClientRect().width)||0,document.body.style.cursor="col-resize",document.body.style.userSelect="none";const m=document.createElement("div");m.id="resize-overlay",m.setAttribute("data-resize-overlay",""),document.body.appendChild(m),document.addEventListener("mousemove",p),document.addEventListener("mouseup",d),h.preventDefault()},[e,p,d]);return u.jsx("div",{ref:s,className:Yz({[e]:!0}),onMouseDown:f})};A();var Kz={Sidebar:"_Sidebar_16oed_1","Sidebar--isVisible":"_Sidebar--isVisible_16oed_10","Sidebar--left":"_Sidebar--left_16oed_14","Sidebar--right":"_Sidebar--right_16oed_34","Sidebar-resizeHandle":"_Sidebar-resizeHandle_16oed_51"},bh=ee("Sidebar",Kz),xh=({position:e,sidebarRef:t,isVisible:r,onResize:n,onResizeEnd:o,children:i})=>u.jsxs(u.Fragment,{children:[u.jsx("div",{ref:t,className:bh({[e]:!0,isVisible:r}),children:i}),u.jsx("div",{className:`${bh("resizeHandle")}`,children:u.jsx(Gz,{position:e,sidebarRef:t,onResize:n,onResizeEnd:o})})]});A();var Xz=e=>{let t=e;for(;t&&t!==document.body;){const r=window.getComputedStyle(t);if(r.display==="none"||r.visibility==="hidden"||r.opacity==="0"||t.getAttribute("aria-hidden")==="true"||t.hasAttribute("hidden"))return!1;t=t.parentElement}return!0},Jz=e=>{var t;if(e!=null&&e.defaultPrevented)return!0;const r=((t=e==null?void 0:e.composedPath)==null?void 0:t.call(e)[0])||(e==null?void 0:e.target)||document.activeElement;if(r instanceof HTMLElement){const o=r.tagName.toLowerCase();if(o==="input"||o==="textarea"||o==="select"||r.isContentEditable)return!0;const i=r.getAttribute("role");if(i==="textbox"||i==="combobox"||i==="searchbox"||i==="listbox"||i==="grid")return!0}const n=document.querySelector('dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]');return!!(n&&Xz(n))},Qz=()=>{const e=ye(),t=g.useCallback(r=>{var n;if(Jz(r))return!1;const{state:o,dispatch:i,permissions:s,selectedItem:a}=e.getState(),l=(n=o.ui)==null?void 0:n.itemSelector;return!(l!=null&&l.zone)||!a||!s.getPermissions({item:a}).delete||i({type:"remove",index:l.index,zone:l.zone}),!0},[e]);Yt({delete:!0},t),Yt({backspace:!0},t)};A();A();var bb={Nav:"_Nav_vll2r_1","Nav-list":"_Nav-list_vll2r_5","Nav-mobileActions":"_Nav-mobileActions_vll2r_23","NavItem-link":"_NavItem-link_vll2r_39",NavItem:"_NavItem_vll2r_39","NavItem-linkIcon":"_NavItem-linkIcon_vll2r_90","NavItem--active":"_NavItem--active_vll2r_100","NavItem--mobileOnly":"_NavItem--mobileOnly_vll2r_136","NavItem--desktopOnly":"_NavItem--desktopOnly_vll2r_141"},Fl=ee("Nav",bb),ws=ee("NavItem",bb),eO=({label:e,icon:t,onClick:r,isActive:n,mobileOnly:o,desktopOnly:i})=>u.jsx("li",{className:ws({active:n,mobileOnly:o,desktopOnly:i}),children:r&&u.jsxs("div",{className:ws("link"),onClick:r,children:[t&&u.jsx("span",{className:ws("linkIcon"),children:t}),u.jsx("span",{className:ws("linkLabel"),children:e})]})}),tO=({items:e,mobileActions:t})=>u.jsxs("nav",{className:Fl(),children:[u.jsx("ul",{className:Fl("list"),children:Object.entries(e).map(([r,n])=>u.jsx(eO,D({},n),r))}),t&&u.jsx("div",{className:Fl("mobileActions"),children:t})]});A();var xb=e=>D({enabled:!0,waitForStyles:!0,syncHostStyles:!0},e),kh=ee("Puck",op),Ss=ee("PuckLayout",op),wh=ee("PuckPluginTab",op),rO=typeof window>"u"?g.useEffect:g.useLayoutEffect,nO=()=>{const e=J("label-page"),t=H(r=>{var n,o,i;return r.selectedItem?(o=(n=r.config.components[r.selectedItem.type])==null?void 0:n.label)!=null?o:r.selectedItem.type.toString():(i=r.config.root)==null?void 0:i.label});return u.jsx($z,{noBorderTop:!0,showBreadcrumbs:!0,title:t||e,children:u.jsx(tp,{})})},oO=({children:e,visible:t,mobileOnly:r})=>u.jsx("div",{className:wh({visible:t,mobileOnly:r}),children:u.jsx("div",{className:wh("body"),children:e})}),kb=({children:e})=>{var t,r;const{iframe:n,initialHistory:o,plugins:i,height:s}=Ga(),a=H(Q=>Q.dnd),l=g.useMemo(()=>xb(n),[n]);bz();const c=H(Q=>Q.dispatch),p=H(Q=>Q.state.ui.leftSideBarVisible),d=H(Q=>Q.state.ui.rightSideBarVisible),f=H(Q=>Q.instanceId),{width:h,setWidth:v,sidebarRef:m,handleResizeEnd:y}=yh("left",c),{width:x,setWidth:k,sidebarRef:b,handleResizeEnd:_}=yh("right",c);g.useEffect(()=>{window.matchMedia("(min-width: 638px)").matches||c({type:"setUi",ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});const Q=()=>{window.matchMedia("(min-width: 638px)").matches||c({type:"setUi",ui:ie=>D(D({},ie),ie.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener("resize",Q),()=>{window.removeEventListener("resize",Q)}},[]);const S=H(Q=>Q.overrides),w=g.useMemo(()=>S.puck||Xc,[S]),[j,C]=g.useState(!1);rO(()=>{C(!0)},[]);const I=H(Q=>Q.status==="READY");qw(),g.useEffect(()=>{if(I&&l.enabled){const Q=_t();if(Q)return ug(Q)}},[I,l.enabled]),Mz(),Qz();const E={};h&&(E["--puck-user-sidebar-left-width"]=`${h}px`),x&&(E["--puck-user-sidebar-right-width"]=`${x}px`);const z=H(Q=>Q.setUi),O=H(Q=>{var ie;return(ie=Q.state.ui.plugin)==null?void 0:ie.current}),L=ye(),B=g.useMemo(()=>!!(i!=null&&i.find(Q=>Q.name==="legacy-side-bar")),[i]),N=J("plugin-blocks"),R=J("plugin-outline"),q=J("plugin-fields"),W=g.useMemo(()=>{const Q={},ie=[eA({label:N}),ez({label:R})],ke=P=>P.name==="legacy-side-bar"?-1:0,Y=[...ie,...i??[]].sort((P,M)=>ke(P)-ke(M));return i!=null&&i.some(P=>P.name==="fields")||Y.push(pz({label:q})),Y==null||Y.forEach(P=>{var M,T,U;P.name&&P.render&&(Q[P.name]&&delete Q[P.name],Q[P.name]={label:(M=P.label)!=null?M:P.name,icon:(T=P.icon)!=null?T:u.jsx(Fw,{}),onClick:()=>{P.name===O?z(p?{leftSideBarVisible:!1}:{leftSideBarVisible:!0}):P.name&&z({plugin:{current:P.name},leftSideBarVisible:!0})},isActive:p&&O===P.name,render:P.render,mobilePanelHeight:(U=P.mobilePanelHeight)!=null?U:"toggle",mobileOnly:B||P.mobileOnly,desktopOnly:P.name==="legacy-side-bar"||P.desktopOnly})}),Q},[i,O,L,p,N,R,q]),$=O??Object.keys(W)[0],Z=(r=(t=W[$])==null?void 0:t.mobilePanelHeight)!=null?r:"toggle";g.useEffect(()=>{if(!O){const Q=Object.keys(W);z({plugin:{current:Q[0]}})}},[W,O]);const oe=W.fields&&W.fields.mobileOnly===!1,G=H(Q=>{var ie;return(ie=Q.state.ui.mobilePanelExpanded)!=null?ie:!1}),te=J("layout-maximize"),be=J("layout-minimize");return u.jsxs("div",{className:`Puck ${kh({hidePlugins:B})}`,id:f,style:{height:s,visibility:"hidden"},children:[u.jsx(gP,{disableAutoScroll:a==null?void 0:a.disableAutoScroll,behavior:a==null?void 0:a.behavior,children:u.jsx(w,{children:e||u.jsx(qz,{children:u.jsx("div",{className:Ss({leftSideBarVisible:p,mounted:j,rightSideBarVisible:!oe&&d,isExpanded:G,mobilePanelHeightToggle:Z==="toggle",mobilePanelHeightMinContent:Z==="min-content"}),style:{height:s},children:u.jsxs("div",{className:Ss("inner"),style:E,children:[u.jsx("div",{className:Ss("header"),children:u.jsx(Fz,{hidePlugins:B})}),u.jsx("div",{className:Ss("nav"),children:u.jsx(tO,{items:W,mobileActions:p&&Z==="toggle"&&u.jsx(Xe,{type:"button",title:G?be:te,onClick:()=>{z({mobilePanelExpanded:!G})},children:G?u.jsx(Ew,{size:21}):u.jsx(Sw,{size:21})})})}),u.jsx(xh,{position:"left",sidebarRef:m,isVisible:p,onResize:v,onResizeEnd:y,children:Object.entries(W).map(([Q,{mobileOnly:ie,render:ke,label:Y}])=>u.jsx(oO,{visible:O===Q,mobileOnly:ie,children:u.jsx(ke,{})},Q))}),u.jsx(Uz,{}),!oe&&u.jsx(xh,{position:"right",sidebarRef:b,isVisible:d,onResize:k,onResizeEnd:_,children:u.jsx(nO,{})})]})})})})}),u.jsx("div",{id:"puck-portal-root",className:kh("portal")})]})},wb=g.createContext({});function iO(e){return u.jsx(wb.Provider,{value:e,children:e.children})}var Ga=()=>g.useContext(wb);function sO({children:e}){const{config:t,data:r,ui:n,onChange:o,permissions:i={},plugins:s,overrides:a,viewports:l=_i,iframe:c,dnd:p,initialHistory:d,metadata:f,dictionary:h,onAction:v,fieldTransforms:m,_experimentalFullScreenCanvas:y,_experimentalVirtualization:x}=Ga(),k=g.useMemo(()=>xb(c),[c]),[b]=g.useState(()=>{var N,R,q;const W=D(D({},Hl.ui),n);let $={};Object.keys((r==null?void 0:r.root)||{}).length>0&&!((N=r==null?void 0:r.root)!=null&&N.props)&&console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");const Z=((R=r==null?void 0:r.root)==null?void 0:R.props)||(r==null?void 0:r.root)||{},oe=D(D({},(q=t.root)==null?void 0:q.defaultProps),Z),G=au(vo(F(D({},r==null?void 0:r.root),{props:oe})),t),te=F(D({},Hl),{data:F(D({},r),{root:F(D({},r==null?void 0:r.root),{props:G.props}),content:r.content||[]}),ui:F(D(D({},W),$),{componentList:t.categories?Object.entries(t.categories).reduce((be,[Q,ie])=>F(D({},be),{[Q]:{title:ie.title,components:ie.components,expanded:ie.defaultExpanded,visible:ie.visible}}),{}):{}})});return yt(te,t)}),{appendData:_=!0}=d||{},[S]=g.useState([...(d==null?void 0:d.histories)||[],..._?[{state:b}]:[]].map(N=>{let R=D(D({},b),N.state);return N.state.indexes||(R=yt(R,t)),F(D({},N),{state:R})})),w=g.useMemo(()=>(d==null?void 0:d.index)!==void 0&&(d==null?void 0:d.index)>=0&&(d==null?void 0:d.index)<S.length?d==null?void 0:d.index:S.length-1,[]),j=S[w].state,C=Dz({overrides:a,plugins:s}),I=g.useMemo(()=>{const R=(s||[]).reduce((q,W)=>D(D({},q),W.fieldTransforms),{});return D(D({},R),m)},[m,s]),E=Za(),z=g.useCallback(N=>({instanceId:E,state:N,config:t,plugins:s||[],overrides:C,viewports:l,iframe:k,_experimentalFullScreenCanvas:!!y,_experimentalVirtualization:!!x,onAction:v,metadata:f,dictionary:h||{},dnd:p,fieldTransforms:I}),[E,j,t,s,C,l,k,y,x,v,f,h,p,I]),[O]=g.useState(()=>dg(z(j)));g.useEffect(()=>{},[O]),g.useEffect(()=>{const N=O.getState().state;O.setState(D({},z(N)))},[z]),Yw(O,{histories:S,index:w,initialAppState:j});const L=g.useRef(null);g.useEffect(()=>O.subscribe(N=>N.state.data,N=>{if(o){if(mi(N,L.current))return;o(N),L.current=N}}),[o]),Xw(O,i);const B=GP(O);return g.useEffect(()=>{const{resolveAndCommitData:N}=O.getState();setTimeout(()=>{N()},0)},[]),u.jsx(Au.Provider,{value:O,children:u.jsx(YP.Provider,{value:B,children:e})})}function Do(e){return u.jsx(iO,F(D({},e),{children:u.jsx(sO,F(D({},e),{children:u.jsx(kb,{children:e.children})}))}))}Do.Components=Vy;Do.Fields=tp;Do.Layout=kb;Do.Outline=ib;Do.Preview=gb;A();A();A();A();A();A();A();A();A();A();A();A();A();A();function aO(){const[e,t]=g.useState("outbox");return u.jsxs("div",{children:[u.jsx(ya,{title:"Messages & marketing",children:"Transactional texts and emails (quotes, confirmations, receipts, reminders) send as needed. Promotional messages need recorded consent, respect quiet hours (9 pm–8 am Eastern) and are capped at one promotional SMS per customer per month. STOP is honored immediately."}),u.jsx(eu,{value:e,onChange:t,tabs:[{id:"outbox",label:"Outbox"},{id:"send",label:"Promotional send"},{id:"inbound",label:"Inbound SMS"},{id:"consents",label:"Consent records"},{id:"templates",label:"Email templates"}]}),u.jsx("div",{className:"mt-6",children:e==="outbox"?u.jsx(lO,{}):e==="send"?u.jsx(cO,{}):e==="inbound"?u.jsx(uO,{}):e==="consents"?u.jsx(dO,{}):u.jsx(pO,{})})]})}function lO(){const{data:e,loading:t}=fi("messages.list",{limit:300}),[r,n]=g.useState(null);return t&&!e?u.jsx(ma,{}):e!=null&&e.length?u.jsxs(u.Fragment,{children:[u.jsx(Mi,{tone:"warn",children:"Twilio and the email provider are not connected, so messages are recorded here and marked “not sent”. Connecting them (Integrations) sends the same messages for real."}),u.jsx("div",{className:"scroll-x mt-3 rounded-xl border border-line bg-surface",children:u.jsxs("table",{className:"data min-w-[860px]",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"When"}),u.jsx("th",{children:"Channel"}),u.jsx("th",{children:"To"}),u.jsx("th",{children:"Template"}),u.jsx("th",{children:"Kind"}),u.jsx("th",{children:"Status"}),u.jsx("th",{children:"Preview"})]})}),u.jsx("tbody",{children:e.map(o=>u.jsxs("tr",{className:"cursor-pointer",onClick:()=>n(o),children:[u.jsx("td",{className:"num text-xs",children:new Date(o.at).toLocaleString()}),u.jsx("td",{children:o.channel}),u.jsx("td",{className:"num text-xs",children:o.to}),u.jsx("td",{className:"text-xs",children:o.template}),u.jsx("td",{children:u.jsx(Et,{tone:o.kind==="promotional"?"info":"neutral",children:o.kind})}),u.jsx("td",{children:u.jsx(Et,{tone:Eh(o.status),children:o.status.replace(/_/g," ")})}),u.jsxs("td",{className:"max-w-[320px] truncate text-xs text-muted",children:[o.subject?`${o.subject} — `:"",o.body]})]},o.id))})]})}),r&&u.jsx(tu,{open:!0,onClose:()=>n(null),title:`${r.channel.toUpperCase()} to ${r.to}`,children:u.jsxs("div",{className:"grid gap-2 text-sm",children:[r.subject&&u.jsxs("div",{children:[u.jsx("b",{children:"Subject:"})," ",r.subject]}),u.jsx("pre",{className:"whitespace-pre-wrap rounded-lg bg-raised p-3 font-sans",children:r.body}),u.jsxs("div",{className:"text-xs text-muted",children:[r.status.replace(/_/g," "),r.reason?` — ${r.reason}`:""]})]})})]}):u.jsx(_a,{title:"No messages yet",children:"Messages appear when customers book, buy, enroll or contact you."})}function cO(){const{busy:e,run:t}=yn(),[r,n]=g.useState({channel:"email",audience:"consented",template:"equipment_recommendation",subject:"Gear that matches your training",body:"Hi {{name}}, based on your Academy level these items support your drills — only if you need them."}),[o,i]=g.useState(null);return u.jsxs(vt,{className:"grid max-w-2xl gap-3 p-5",children:[u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsx(Ke,{label:"Channel",children:s=>u.jsxs(hr,{id:s,value:r.channel,onChange:a=>n({...r,channel:a.target.value}),children:[u.jsx("option",{value:"email",children:"Email"}),u.jsx("option",{value:"sms",children:"SMS"})]})}),u.jsx(Ke,{label:"Audience",children:s=>u.jsxs(hr,{id:s,value:r.audience,onChange:a=>n({...r,audience:a.target.value}),children:[u.jsx("option",{value:"consented",children:"All customers (consent checked per person)"}),u.jsx("option",{value:"members",children:"Paid members only"})]})})]}),r.channel==="email"&&u.jsx(Ke,{label:"Subject",children:s=>u.jsx(Tr,{id:s,value:r.subject,onChange:a=>n({...r,subject:a.target.value})})}),u.jsx(Ke,{label:"Message",children:s=>u.jsx(Ch,{id:s,rows:4,value:r.body,onChange:a=>n({...r,body:a.target.value})})}),u.jsx(Lt,{disabled:e,onClick:async()=>i(await t(()=>Xt("marketing.sendPromo",{...r,template:r.template}),"Send processed")??null),children:"Send with compliance checks"}),o&&u.jsx(Mi,{tone:"info",title:"Result per recipient",children:Object.keys(o).length?Object.entries(o).map(([s,a])=>u.jsxs("div",{children:[s.replace(/_/g," "),": ",a]},s)):"No customers with contact details yet."})]})}function uO(){const{busy:e,run:t}=yn(),[r,n]=g.useState({from:"",body:"STOP"}),[o,i]=g.useState(null);return u.jsxs(vt,{className:"grid max-w-xl gap-3 p-5",children:[u.jsx("p",{className:"text-sm text-muted",children:"Production receives replies at the Twilio webhook (/api/webhooks/twilio). Use this to simulate one: STOP / START / HELP, or APPROVE / ALT to a quote."}),u.jsx(Ke,{label:"From (mobile)",children:s=>u.jsx(Tr,{id:s,value:r.from,onChange:a=>n({...r,from:a.target.value}),placeholder:"(404) 555-0100"})}),u.jsx(Ke,{label:"Message",children:s=>u.jsx(Tr,{id:s,value:r.body,onChange:a=>n({...r,body:a.target.value})})}),u.jsx(Lt,{disabled:e||!r.from,onClick:async()=>i(await t(()=>Xt("sms.inbound",r))),children:"Process reply"}),o&&u.jsxs(Mi,{tone:"info",children:["Handled as ",u.jsx("b",{children:o.handled}),o.reply?` · auto-reply: “${o.reply}”`:""]})]})}function dO(){const{data:e}=fi("consent.list");return e!=null&&e.length?u.jsx("div",{className:"scroll-x rounded-xl border border-line bg-surface",children:u.jsxs("table",{className:"data min-w-[720px]",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"When"}),u.jsx("th",{children:"Contact"}),u.jsx("th",{children:"Channel"}),u.jsx("th",{children:"Purpose"}),u.jsx("th",{children:"Granted"}),u.jsx("th",{children:"Source"}),u.jsx("th",{children:"Text shown"})]})}),u.jsx("tbody",{children:[...e].reverse().map(t=>u.jsxs("tr",{children:[u.jsx("td",{className:"num text-xs",children:new Date(t.at).toLocaleString()}),u.jsx("td",{className:"num text-xs",children:t.contact}),u.jsx("td",{children:t.channel}),u.jsx("td",{children:t.purpose}),u.jsx("td",{children:u.jsx(Et,{tone:t.granted?"good":"bad",children:t.granted?"yes":"revoked"})}),u.jsx("td",{className:"text-xs",children:t.source}),u.jsx("td",{className:"max-w-[280px] text-xs text-muted",children:t.text})]},t.id))})]})}):u.jsx(_a,{title:"No consent records yet"})}function pO(){return u.jsx("div",{className:"grid gap-3 md:grid-cols-2",children:jb.map(e=>u.jsxs(vt,{className:"p-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("b",{children:e.subject}),u.jsx(Et,{tone:e.kind==="promotional"?"info":"neutral",children:e.kind})]}),u.jsx("div",{className:"num text-xs text-muted",children:e.id}),u.jsx("p",{className:"mt-2 text-sm",children:e.body})]},e.id))})}const cn={verified_ad_library:{label:"Verified · ad library",tone:"good"},observed_public_page:{label:"Observed · public page",tone:"info"},ai_interpretation:{label:"AI interpretation",tone:"warn"},research_queue:{label:"Needs verification",tone:"neutral"}};function fO(){var b;const{data:e,loading:t,reload:r}=fi("ads.list"),n=fi("campaigns.list"),{can:o}=Qc(),{busy:i,run:s}=yn(),[a,l]=g.useState("all"),[c,p]=g.useState("all"),[d,f]=g.useState("library"),[h,v]=g.useState(!1),m=g.useMemo(()=>[...new Set((e??[]).map(_=>_.platform))].sort(),[e]);if(t&&!e)return u.jsx(ma,{});const y=(e??[]).filter(_=>(a==="all"||_.platform===a)&&(c==="all"||_.evidence===c)),x=(e??[]).filter(_=>_.evidence!=="research_queue"),k=_=>Object.entries(_.reduce((S,w)=>(S[w]=(S[w]??0)+1,S),{})).sort((S,w)=>w[1]-S[1]).slice(0,10);return u.jsxs("div",{children:[u.jsx(ya,{title:"Advertising intelligence",actions:o("research.manage")&&u.jsx(Lt,{size:"sm",variant:"secondary",onClick:()=>v(!0),children:"Log an observation"}),children:"Ads across Meta, Instagram, TikTok, YouTube, Google Search, Shopping, Performance Max and Pinterest. Each record is labeled by evidence. No spend, ROAS, conversions or targeting are shown, because platforms don’t disclose them."}),u.jsx("div",{className:"mb-4 grid grid-cols-2 gap-3 md:grid-cols-4",children:Object.keys(cn).map(_=>u.jsxs(vt,{className:"p-3",children:[u.jsx(Et,{tone:cn[_].tone,children:cn[_].label}),u.jsx("div",{className:"num mt-1 text-2xl",children:(e??[]).filter(S=>S.evidence===_).length})]},_))}),u.jsx(eu,{value:d,onChange:f,tabs:[{id:"library",label:"Observations"},{id:"analysis",label:"Pattern analysis"},{id:"campaigns",label:`Campaign concepts (${((b=n.data)==null?void 0:b.length)??0})`}]}),u.jsxs("div",{className:"mt-6",children:[d==="library"&&u.jsxs("div",{className:"grid gap-3",children:[u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsxs(hr,{className:"!w-56",value:a,onChange:_=>l(_.target.value),"aria-label":"Platform",children:[u.jsx("option",{value:"all",children:"All platforms"}),m.map(_=>u.jsx("option",{children:_},_))]}),u.jsxs(hr,{className:"!w-56",value:c,onChange:_=>p(_.target.value),"aria-label":"Evidence",children:[u.jsx("option",{value:"all",children:"All evidence levels"}),Object.entries(cn).map(([_,S])=>u.jsx("option",{value:_,children:S.label},_))]})]}),y.map(_=>u.jsxs(vt,{className:"grid gap-2 p-4",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsx(Et,{tone:cn[_.evidence].tone,children:cn[_.evidence].label}),u.jsx("b",{children:_.platform}),u.jsx("span",{className:"text-sm",children:_.advertiser??"Advertiser to identify"}),u.jsxs("span",{className:"text-xs text-muted",children:["· ",_.category]}),u.jsxs("span",{className:"ml-auto num text-xs text-muted",children:["observed ",_.observedAt]})]}),(_.creativeDescription||_.offer)&&u.jsxs("div",{className:"text-sm",children:[_.creativeDescription,_.offer&&u.jsxs("span",{className:"text-muted",children:[" · Offer: ",_.offer]}),_.cta&&u.jsxs("span",{className:"text-muted",children:[" · CTA: ",_.cta]})]}),(_.hooks.length>0||_.themes.length>0)&&u.jsxs("div",{className:"flex flex-wrap gap-1",children:[_.hooks.map(S=>u.jsx(Et,{tone:"info",children:S},S)),_.themes.map(S=>u.jsx(Et,{children:S},S))]}),_.notes&&u.jsx("div",{className:"text-xs text-muted",children:_.notes}),u.jsxs("a",{href:_.sourceUrl,target:"_blank",rel:"noreferrer",className:"break-all text-xs text-court",children:[_.evidence==="research_queue"?"Open the public ad library search → ":"Source → ",_.sourceUrl]})]},_.id))]}),d==="analysis"&&u.jsxs("div",{className:"grid gap-4 lg:grid-cols-2",children:[u.jsxs(Mi,{tone:"warn",title:"How to read this",children:["Patterns are counted only from verified or observed records (",x.length,"). They describe what competitors publicly run, not what performs best; platforms don’t publish performance."]}),u.jsxs(vt,{className:"p-4",children:[u.jsx("div",{className:"eyebrow mb-2",children:"Repeated messaging hooks"}),k(x.flatMap(_=>_.hooks)).map(([_,S])=>u.jsxs("div",{className:"flex justify-between text-sm",children:[u.jsx("span",{children:_}),u.jsx("span",{className:"num",children:S})]},_))]}),u.jsxs(vt,{className:"p-4",children:[u.jsx("div",{className:"eyebrow mb-2",children:"Themes"}),k(x.flatMap(_=>_.themes)).map(([_,S])=>u.jsxs("div",{className:"flex justify-between text-sm",children:[u.jsx("span",{children:_}),u.jsx("span",{className:"num",children:S})]},_))]}),u.jsxs(vt,{className:"p-4",children:[u.jsx("div",{className:"eyebrow mb-2",children:"Offers observed"}),x.filter(_=>_.offer).slice(0,12).map(_=>u.jsxs("div",{className:"text-sm",children:[u.jsx("b",{children:_.advertiser}),": ",_.offer]},_.id))]}),u.jsxs(vt,{className:"p-4 lg:col-span-2",children:[u.jsx("div",{className:"eyebrow mb-2",children:"Opportunities for Clifton’s Academy (analyst interpretation)"}),u.jsxs("ul",{className:"grid gap-1 text-sm list-disc pl-5",children:[u.jsx("li",{children:"Competitors lead with free content and lead magnets. Clifton’s free tier and sample lesson can play the same role, with the local private-lesson offer as the upgrade path no national online coach can match."}),u.jsx("li",{children:"Big retailers compete on catalog and price. Bundles tied to a specific drill (the 50-ball rule, Footwork Academy) are a differentiator worth testing in short video."}),u.jsx("li",{children:"Restringing is rarely advertised locally. A “when did you last restring?” hook could win share once fulfillment is live."})]})]})]}),d==="campaigns"&&u.jsx(vO,{list:n.data??[],reload:n.reload})]}),h&&u.jsx(hO,{onClose:()=>{v(!1),r()},busy:i,run:s})]})}function hO({onClose:e,busy:t,run:r}){const[n,o]=g.useState({platform:"Meta (Facebook/Instagram)",advertiser:"",category:"tennis coaching",creativeFormat:"video",creativeDescription:"",landingPage:"",offer:"",cta:"",hooks:"",themes:"",evidence:"verified_ad_library",sourceUrl:""});return u.jsx(tu,{open:!0,onClose:e,title:"Log an ad observation",wide:!0,children:u.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[["platform","advertiser","category","creativeFormat","offer","cta","landingPage","sourceUrl"].map(i=>u.jsx(Ke,{label:i,children:s=>u.jsx(Tr,{id:s,value:n[i],onChange:a=>o({...n,[i]:a.target.value})})},i)),u.jsx("div",{className:"sm:col-span-2",children:u.jsx(Ke,{label:"Creative description",children:i=>u.jsx(Ch,{id:i,rows:2,value:n.creativeDescription,onChange:s=>o({...n,creativeDescription:s.target.value})})})}),u.jsx(Ke,{label:"Hooks (comma-separated)",children:i=>u.jsx(Tr,{id:i,value:n.hooks,onChange:s=>o({...n,hooks:s.target.value})})}),u.jsx(Ke,{label:"Themes",children:i=>u.jsx(Tr,{id:i,value:n.themes,onChange:s=>o({...n,themes:s.target.value})})}),u.jsx(Ke,{label:"Evidence",children:i=>u.jsx(hr,{id:i,value:n.evidence,onChange:s=>o({...n,evidence:s.target.value}),children:Object.entries(cn).map(([s,a])=>u.jsx("option",{value:s,children:a.label},s))})}),u.jsx("div",{className:"sm:col-span-2",children:u.jsx(Lt,{disabled:t||!n.sourceUrl,onClick:()=>r(()=>Xt("ads.add",{...n,hooks:n.hooks.split(",").map(i=>i.trim()).filter(Boolean),themes:n.themes.split(",").map(i=>i.trim()).filter(Boolean),firstObserved:new Date().toISOString().slice(0,10),lastObserved:new Date().toISOString().slice(0,10),engagementPublic:null,observedAt:new Date().toISOString().slice(0,10)}),"Observation logged").then(e),children:"Save"})})]})})}function vO({list:e,reload:t}){const{can:r}=Qc(),{busy:n,run:o}=yn(),[i,s]=g.useState({platform:"tiktok",focus:"lessons"});return u.jsxs("div",{className:"grid gap-4",children:[u.jsxs(vt,{className:"flex flex-wrap items-end gap-3 p-4",children:[u.jsx(Ke,{label:"Platform",children:a=>u.jsxs(hr,{id:a,value:i.platform,onChange:l=>s({...i,platform:l.target.value}),children:[u.jsx("option",{value:"tiktok",children:"TikTok"}),u.jsx("option",{value:"instagram_reels",children:"Instagram Reels"}),u.jsx("option",{value:"facebook_reels",children:"Facebook Reels"}),u.jsx("option",{value:"youtube_shorts",children:"YouTube Shorts"})]})}),u.jsx(Ke,{label:"Focus",children:a=>u.jsxs(hr,{id:a,value:i.focus,onChange:l=>s({...i,focus:l.target.value}),children:[u.jsx("option",{value:"lessons",children:"Private lessons"}),u.jsx("option",{value:"membership",children:"Membership"}),u.jsx("option",{value:"equipment",children:"Equipment bundles"}),u.jsx("option",{value:"restringing",children:"Restringing"})]})}),u.jsx(Lt,{disabled:n||!r("marketing.manage"),onClick:()=>o(()=>Xt("campaigns.generate",i),"Draft created — awaiting approval").then(t),children:"Draft short-form concept"}),u.jsx("span",{className:"text-xs text-muted",children:"Short-form video first. Drafts can’t be published until the owner approves them."})]}),e.length?e.map(a=>u.jsxs(vt,{className:"grid gap-2 p-5",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsx("b",{children:a.title}),u.jsx(Et,{children:a.platform.replace("_"," ")}),u.jsx(Et,{tone:Eh(a.status),children:a.status.replace("_"," ")})]}),u.jsxs("div",{className:"text-sm",children:[u.jsx("b",{children:"Hook:"})," ",a.hook]}),u.jsx("ol",{className:"grid gap-1 text-sm list-decimal pl-5",children:a.script.map((l,c)=>u.jsx("li",{children:l},c))}),u.jsxs("div",{className:"text-sm",children:[u.jsx("b",{children:"CTA:"})," ",a.cta]}),a.basedOn.length>0&&u.jsxs("div",{className:"text-xs text-muted",children:["Reference observations: ",a.basedOn.join(" · ")]}),a.status==="pending_approval"&&r("ads.approve")&&u.jsxs("div",{className:"flex gap-2",children:[u.jsx(Lt,{size:"sm",disabled:n,onClick:()=>o(()=>Xt("campaigns.decide",{id:a.id,approve:!0}),"Approved").then(t),children:"Approve"}),u.jsx(Lt,{size:"sm",variant:"secondary",disabled:n,onClick:()=>o(()=>Xt("campaigns.decide",{id:a.id,approve:!1}),"Rejected").then(t),children:"Reject"})]})]},a.id)):u.jsx(_a,{title:"No campaign concepts yet"})]})}const Hs={coaching:[["educationalContent","Educational content"],["monetization","Monetization"],["bookingExperience","Booking experience"],["membershipValue","Membership value"],["marketing","Marketing"],["customerExperience","Customer experience"]],stores:[["productAssortment","Product assortment"],["priceCompetitiveness","Price competitiveness"],["fulfillment","Fulfillment"],["conversionExperience","Conversion experience"],["retention","Retention"],["educationalDifferentiation","Educational differentiation"]]};function gO(){const[e,t]=g.useState("coaching");return u.jsxs("div",{children:[u.jsx(ya,{title:"Competitor intelligence",children:"Two separate dashboards, five named benchmarks each, chosen for comparable business models rather than celebrity. Scores are analyst judgments with written rationale; adjust the weights to fit your priorities."}),u.jsx(eu,{value:e,onChange:t,tabs:[{id:"coaching",label:"A · Top 5 online coaching businesses"},{id:"stores",label:"B · Top 5 online tennis stores"}]}),u.jsx("div",{className:"mt-6",children:u.jsx(yO,{kind:e},e)})]})}const mO={coaching:[["courseStructure","Course structure"],["lessonOfferings","Lesson offerings"],["coachingPackages","Coaching packages"],["videoStrategy","Video strategy"],["freeContentStrategy","Free content"],["leadMagnets","Lead magnets"],["bookingExperience","Booking experience"],["checkoutFunnel","Checkout funnel"],["upsells","Upsells"]],stores:[["catalogBreadth","Catalog"],["racquetPricing","Racquet pricing"],["shoePricing","Shoe pricing"],["ballPricing","Ball pricing"],["accessories","Accessories"],["trainingEquipment","Training equipment"],["bundles","Bundles"],["membershipPrograms","Membership"],["shippingPolicy","Shipping"],["returnsPolicy","Returns"],["productVideos","Product videos"],["educationalContent","Education"],["promotions","Promotions"],["loyaltyProgram","Loyalty"],["affiliateProgram","Affiliate"],["checkoutExperience","Checkout"],["mobileUsability","Mobile"],["seoStrategy","SEO"]]};function _O(e){return e==null||e===""?"—":Array.isArray(e)?e.map(t=>typeof t=="object"?Object.values(t).filter(r=>typeof r!="object").join(" · "):String(t)).join(`
`):typeof e=="object"?Object.entries(e).map(([t,r])=>`${t}: ${typeof r=="object"?JSON.stringify(r):r}`).join(`
`):String(e)}function yO({kind:e}){const{data:t,loading:r,reload:n}=fi("competitors.list",{kind:e}),{can:o}=Qc(),{busy:i,run:s}=yn(),a=Hs[e],[l,c]=g.useState(()=>Object.fromEntries(a.map(([h])=>[h,1]))),[p,d]=g.useState(null);if(r&&!t)return u.jsx(ma,{});if(!(t!=null&&t.length))return u.jsx(_a,{title:"No research records"});const f=[...t].map(h=>({c:h,score:Ib(h.scores,l)})).sort((h,v)=>v.score-h.score);return u.jsxs("div",{className:"grid gap-5",children:[u.jsxs(vt,{className:"grid gap-3 p-4",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[u.jsx("div",{className:"eyebrow",children:"Scoring weights"}),o("research.manage")&&u.jsx(Lt,{size:"sm",variant:"secondary",disabled:i,onClick:()=>s(()=>Xt("research.refresh",{kind:e}),"Refresh queued for a researcher with web access"),children:"Request refresh"})]}),u.jsx("div",{className:"grid grid-cols-2 gap-3 md:grid-cols-6",children:a.map(([h,v])=>u.jsx(Ke,{label:`${v}: ×${l[h]}`,children:m=>u.jsx("input",{id:m,type:"range",min:0,max:3,step:.5,value:l[h],onChange:y=>c({...l,[h]:Number(y.target.value)}),className:"w-full accent-[rgb(var(--court))]"})},h))})]}),u.jsx("div",{className:"scroll-x rounded-xl border border-line bg-surface",children:u.jsxs("table",{className:"data min-w-[900px]",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"#"}),u.jsx("th",{children:"Benchmark"}),u.jsx("th",{children:"Weighted"}),a.map(([h,v])=>u.jsx("th",{children:v},h)),u.jsx("th",{children:"Confidence"}),u.jsx("th",{children:"Verified"}),u.jsx("th",{})]})}),u.jsx("tbody",{children:f.map(({c:h,score:v},m)=>u.jsxs("tr",{children:[u.jsx("td",{className:"num",children:m+1}),u.jsxs("td",{children:[u.jsx("b",{children:h.name}),u.jsx("div",{children:u.jsx("a",{href:h.website,target:"_blank",rel:"noreferrer",className:"text-xs text-court",children:h.website.replace(/^https?:\/\//,"")})})]}),u.jsx("td",{className:"num text-lg",children:v}),a.map(([y])=>{var x,k;return u.jsx("td",{className:"num",title:(x=h.scores[y])==null?void 0:x.rationale,children:((k=h.scores[y])==null?void 0:k.score)??"—"},y)}),u.jsx("td",{children:u.jsx(Et,{tone:h.confidence==="high"?"good":h.confidence==="medium"?"warn":"bad",children:h.confidence})}),u.jsx("td",{className:"num text-xs",children:h.verifiedAt}),u.jsx("td",{children:u.jsx(Lt,{size:"sm",variant:"ghost",onClick:()=>d(h),children:"Profile"})})]},h.id))})]})}),u.jsx("div",{className:"text-xs text-muted",children:"Hover a score to see its rationale. Revenue and ad spend are never estimated here."}),p&&u.jsx(tu,{open:!0,onClose:()=>d(null),title:p.name,wide:!0,children:u.jsxs("div",{className:"grid gap-4 text-sm",children:[typeof p.selectionRationale=="string"&&u.jsx(Mi,{tone:"info",title:"Why this benchmark",children:p.selectionRationale}),u.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:mO[e].map(([h,v])=>u.jsxs("div",{className:"min-w-0",children:[u.jsx("div",{className:"eyebrow",children:v}),u.jsx("div",{className:"whitespace-pre-line break-words",children:_O(p[h])})]},h))}),e==="coaching"&&Array.isArray(p.membershipPrices)&&u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Membership prices (observed)"}),p.membershipPrices.map((h,v)=>u.jsxs("div",{children:[h.plan,": ",h.price!==null?`$${h.price}`:"price not published"," / ",h.period," ",h.sourceUrl&&u.jsx("a",{href:h.sourceUrl,target:"_blank",rel:"noreferrer",className:"text-court",children:"source"})]},v))]}),Array.isArray(p.socials)&&u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Social platforms"}),p.socials.map((h,v)=>u.jsxs("div",{children:[u.jsx("a",{href:h.url,target:"_blank",rel:"noreferrer",className:"text-court",children:h.platform}),h.audienceObserved?` · ${h.audienceObserved} (observed ${h.observedAt})`:""]},v))]}),u.jsxs("div",{className:"grid gap-3 sm:grid-cols-3",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Strengths"}),u.jsx("ul",{className:"list-disc pl-4",children:p.strengths.map(h=>u.jsx("li",{children:h},h))})]}),u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Weaknesses"}),u.jsx("ul",{className:"list-disc pl-4",children:p.weaknesses.map(h=>u.jsx("li",{children:h},h))})]}),u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Opportunities for Clifton"}),u.jsx("ul",{className:"list-disc pl-4",children:p.opportunitiesForClifton.map(h=>u.jsx("li",{children:h},h))})]})]}),p.adExamples&&p.adExamples.length>0&&u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Advertising examples"}),p.adExamples.map((h,v)=>u.jsxs("div",{children:[u.jsx(Et,{tone:h.evidence==="verified_ad_library"?"good":"info",children:h.evidence.replace(/_/g," ")})," ",h.platform,": ",h.description," ",u.jsx("a",{href:h.url,target:"_blank",rel:"noreferrer",className:"text-court",children:"source"})]},v))]}),u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Score rationale"}),a.map(([h,v])=>p.scores[h]&&u.jsxs("div",{className:"flex gap-2",children:[u.jsx("span",{className:"num w-6",children:p.scores[h].score}),u.jsxs("span",{children:[u.jsxs("b",{children:[v,":"]})," ",p.scores[h].rationale]})]},h))]}),o("research.manage")&&u.jsx(bO,{c:p,kind:e,onSaved:()=>{n(),d(null)}}),u.jsxs("div",{children:[u.jsxs("div",{className:"eyebrow",children:["Sources (",p.sourceUrls.length,") · verified ",p.verifiedAt]}),p.sourceUrls.map(h=>u.jsx("div",{children:u.jsx("a",{href:h,target:"_blank",rel:"noreferrer",className:"break-all text-court",children:h})},h))]})]})})]})}function bO({c:e,kind:t,onSaved:r}){var d;const{busy:n,run:o}=yn(),[i,s]=g.useState(Hs[t][0][0]),[a,l]=g.useState(String(((d=e.scores[Hs[t][0][0]])==null?void 0:d.score)??5)),[c,p]=g.useState("");return u.jsxs(vt,{className:"grid gap-2 p-3 sm:grid-cols-[1fr_80px_2fr_auto] sm:items-end",children:[u.jsx(Ke,{label:"Criterion",children:f=>u.jsx(hr,{id:f,value:i,onChange:h=>{var v;s(h.target.value),l(String(((v=e.scores[h.target.value])==null?void 0:v.score)??5))},children:Hs[t].map(([h,v])=>u.jsx("option",{value:h,children:v},h))})}),u.jsx(Ke,{label:"Score",children:f=>u.jsx(Tr,{id:f,type:"number",min:1,max:10,value:a,onChange:h=>l(h.target.value)})}),u.jsx(Ke,{label:"Rationale (evidence)",children:f=>u.jsx(Tr,{id:f,value:c,onChange:h=>p(h.target.value)})}),u.jsx(Lt,{size:"sm",disabled:n||!c.trim(),onClick:()=>o(()=>Xt("competitors.score",{kind:t,id:e.id,criterion:i,score:Number(a),rationale:c}),"Score updated").then(r),children:"Save"})]})}const xO=[["home","Home"],["memberships","Memberships & pricing"],["partners","Partner Program"],["about","About Clifton"]];function kO(){const[e,t]=g.useState("home"),[r,n]=g.useState(0);return u.jsxs("div",{children:[u.jsx(ya,{title:"Page editor",actions:u.jsx(hr,{value:e,onChange:o=>t(o.target.value),className:"!w-60","aria-label":"Page",children:xO.map(([o,i])=>u.jsx("option",{value:o,children:i},o))}),children:"Drag blocks, edit copy and publish. Data blocks (memberships, lesson rates, videos, bundles) read live academy settings, so prices stay correct everywhere. Testimonial blocks stay hidden until real testimonials are entered."}),u.jsx(wO,{id:e,onReset:()=>n(o=>o+1)},`${e}-${r}`)]})}function wO({id:e,onReset:t}){const r=Sb(e),{busy:n,run:o}=yn();return r?u.jsxs("div",{className:"grid gap-2",children:[u.jsxs("div",{className:"flex gap-2",children:[u.jsx(Lt,{size:"sm",variant:"secondary",onClick:()=>o(()=>Xt("pages.save",{id:e,data:Eb[e]}),"Restored default layout").then(t),children:"Restore default"}),n&&u.jsx("span",{className:"text-xs text-muted",children:"Saving…"})]}),u.jsx("div",{className:"overflow-hidden rounded-xl border border-line bg-surface",style:{height:"78vh"},children:u.jsx(Do,{config:Cb,data:r,iframe:{enabled:!1},onPublish:i=>o(()=>Xt("pages.save",{id:e,data:i}),"Page published")})})]}):u.jsx(ma,{})}const WO=Object.freeze(Object.defineProperty({__proto__:null,AdsAdmin:fO,CompetitorsAdmin:gO,MarketingAdmin:aO,PagesAdmin:kO},Symbol.toStringTag,{value:"Module"}));export{Iu as A,wg as E,WO as G,ow as H,VS as L,zu as S,F as _,H as a,D as b,kg as c,Le as d,yS as e,xS as f,ee as g,wS as h,A as i,Pa as j,BO as o,jh as s,ye as u};
