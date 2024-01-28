import{r as $,R as qt}from"./index.N54aU5bv.js";var nr={exports:{}},at={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=$,Nr=Symbol.for("react.element"),Mr=Symbol.for("react.fragment"),Tr=Object.prototype.hasOwnProperty,Pr=Ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zr={key:!0,ref:!0,__self:!0,__source:!0};function ar(t,r,e){var n,a={},o=null,i=null;e!==void 0&&(o=""+e),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(i=r.ref);for(n in r)Tr.call(r,n)&&!zr.hasOwnProperty(n)&&(a[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)a[n]===void 0&&(a[n]=r[n]);return{$$typeof:Nr,type:t,key:o,ref:i,props:a,_owner:Pr.current}}at.Fragment=Mr;at.jsx=ar;at.jsxs=ar;nr.exports=at;var _t=nr.exports;function Yr(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function Fr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Lr=function(){function t(e){var n=this;this._insertTag=function(a){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,o),n.tags.push(a)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Fr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Yr(a);try{o.insertRule(n,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},t}(),A="-ms-",nt="-moz-",y="-webkit-",or="comm",zt="rule",Yt="decl",jr="@import",sr="@keyframes",Vr="@layer",Xr=Math.abs,ot=String.fromCharCode,Br=Object.assign;function Dr(t,r){return _(t,0)^45?(((r<<2^_(t,0))<<2^_(t,1))<<2^_(t,2))<<2^_(t,3):0}function ir(t){return t.trim()}function Wr(t,r){return(t=r.exec(t))?t[0]:t}function h(t,r,e){return t.replace(r,e)}function At(t,r){return t.indexOf(r)}function _(t,r){return t.charCodeAt(r)|0}function U(t,r,e){return t.slice(r,e)}function L(t){return t.length}function Ft(t){return t.length}function Z(t,r){return r.push(t),t}function Ur(t,r){return t.map(r).join("")}var st=1,B=1,cr=0,N=0,O=0,D="";function it(t,r,e,n,a,o,i){return{value:t,root:r,parent:e,type:n,props:a,children:o,line:st,column:B,length:i,return:""}}function W(t,r){return Br(it("",null,null,"",null,null,0),t,{length:-t.length},r)}function Gr(){return O}function qr(){return O=N>0?_(D,--N):0,B--,O===10&&(B=1,st--),O}function M(){return O=N<cr?_(D,N++):0,B++,O===10&&(B=1,st++),O}function V(){return _(D,N)}function tt(){return N}function K(t,r){return U(D,t,r)}function G(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fr(t){return st=B=1,cr=L(D=t),N=0,[]}function lr(t){return D="",t}function rt(t){return ir(K(N-1,Nt(t===91?t+2:t===40?t+1:t)))}function Hr(t){for(;(O=V())&&O<33;)M();return G(t)>2||G(O)>3?"":" "}function Kr(t,r){for(;--r&&M()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return K(t,tt()+(r<6&&V()==32&&M()==32))}function Nt(t){for(;M();)switch(O){case t:return N;case 34:case 39:t!==34&&t!==39&&Nt(O);break;case 40:t===41&&Nt(t);break;case 92:M();break}return N}function Zr(t,r){for(;M()&&t+O!==57;)if(t+O===84&&V()===47)break;return"/*"+K(r,N-1)+"*"+ot(t===47?t:M())}function Jr(t){for(;!G(V());)M();return K(t,N)}function Qr(t){return lr(et("",null,null,null,[""],t=fr(t),0,[0],t))}function et(t,r,e,n,a,o,i,c,f){for(var d=0,m=0,u=i,w=0,R=0,v=0,l=1,E=1,x=1,p=0,C="",z=a,Y=o,F=n,S=C;E;)switch(v=p,p=M()){case 40:if(v!=108&&_(S,u-1)==58){At(S+=h(rt(p),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:S+=rt(p);break;case 9:case 10:case 13:case 32:S+=Hr(v);break;case 92:S+=Kr(tt()-1,7);continue;case 47:switch(V()){case 42:case 47:Z(te(Zr(M(),tt()),r,e),f);break;default:S+="/"}break;case 123*l:c[d++]=L(S)*x;case 125*l:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+m:x==-1&&(S=h(S,/\f/g,"")),R>0&&L(S)-u&&Z(R>32?Kt(S+";",n,e,u-1):Kt(h(S," ","")+";",n,e,u-2),f);break;case 59:S+=";";default:if(Z(F=Ht(S,r,e,d,m,a,c,C,z=[],Y=[],u),o),p===123)if(m===0)et(S,r,F,F,z,o,u,c,Y);else switch(w===99&&_(S,3)===110?100:w){case 100:case 108:case 109:case 115:et(t,F,F,n&&Z(Ht(t,F,F,0,0,a,c,C,a,z=[],u),Y),a,Y,u,c,n?z:Y);break;default:et(S,F,F,F,[""],Y,0,c,Y)}}d=m=R=0,l=x=1,C=S="",u=i;break;case 58:u=1+L(S),R=v;default:if(l<1){if(p==123)--l;else if(p==125&&l++==0&&qr()==125)continue}switch(S+=ot(p),p*l){case 38:x=m>0?1:(S+="\f",-1);break;case 44:c[d++]=(L(S)-1)*x,x=1;break;case 64:V()===45&&(S+=rt(M())),w=V(),m=u=L(C=S+=Jr(tt())),p++;break;case 45:v===45&&L(S)==2&&(l=0)}}return o}function Ht(t,r,e,n,a,o,i,c,f,d,m){for(var u=a-1,w=a===0?o:[""],R=Ft(w),v=0,l=0,E=0;v<n;++v)for(var x=0,p=U(t,u+1,u=Xr(l=i[v])),C=t;x<R;++x)(C=ir(l>0?w[x]+" "+p:h(p,/&\f/g,w[x])))&&(f[E++]=C);return it(t,r,e,a===0?zt:c,f,d,m)}function te(t,r,e){return it(t,r,e,or,ot(Gr()),U(t,2,-2),0)}function Kt(t,r,e,n){return it(t,r,e,Yt,U(t,0,n),U(t,n+1,-1),n)}function X(t,r){for(var e="",n=Ft(t),a=0;a<n;a++)e+=r(t[a],a,t,r)||"";return e}function re(t,r,e,n){switch(t.type){case Vr:if(t.children.length)break;case jr:case Yt:return t.return=t.return||t.value;case or:return"";case sr:return t.return=t.value+"{"+X(t.children,n)+"}";case zt:t.value=t.props.join(",")}return L(e=X(t.children,n))?t.return=t.value+"{"+e+"}":""}function ee(t){var r=Ft(t);return function(e,n,a,o){for(var i="",c=0;c<r;c++)i+=t[c](e,n,a,o)||"";return i}}function ne(t){return function(r){r.root||(r=r.return)&&t(r)}}function ae(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}var oe=function(r,e,n){for(var a=0,o=0;a=o,o=V(),a===38&&o===12&&(e[n]=1),!G(o);)M();return K(r,N)},se=function(r,e){var n=-1,a=44;do switch(G(a)){case 0:a===38&&V()===12&&(e[n]=1),r[n]+=oe(N-1,e,n);break;case 2:r[n]+=rt(a);break;case 4:if(a===44){r[++n]=V()===58?"&\f":"",e[n]=r[n].length;break}default:r[n]+=ot(a)}while(a=M());return r},ie=function(r,e){return lr(se(fr(r),e))},Zt=new WeakMap,ce=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!Zt.get(n))&&!a){Zt.set(r,!0);for(var o=[],i=ie(e,o),c=n.props,f=0,d=0;f<i.length;f++)for(var m=0;m<c.length;m++,d++)r.props[d]=o[f]?i[f].replace(/&\f/g,c[m]):c[m]+" "+i[f]}}},fe=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function dr(t,r){switch(Dr(t,r)){case 5103:return y+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return y+t+nt+t+A+t+t;case 6828:case 4268:return y+t+A+t+t;case 6165:return y+t+A+"flex-"+t+t;case 5187:return y+t+h(t,/(\w+).+(:[^]+)/,y+"box-$1$2"+A+"flex-$1$2")+t;case 5443:return y+t+A+"flex-item-"+h(t,/flex-|-self/,"")+t;case 4675:return y+t+A+"flex-line-pack"+h(t,/align-content|flex-|-self/,"")+t;case 5548:return y+t+A+h(t,"shrink","negative")+t;case 5292:return y+t+A+h(t,"basis","preferred-size")+t;case 6060:return y+"box-"+h(t,"-grow","")+y+t+A+h(t,"grow","positive")+t;case 4554:return y+h(t,/([^-])(transform)/g,"$1"+y+"$2")+t;case 6187:return h(h(h(t,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),t,"")+t;case 5495:case 3959:return h(t,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return h(h(t,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+t+t;case 4095:case 3583:case 4068:case 2532:return h(t,/(.+)-inline(.+)/,y+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(L(t)-1-r>6)switch(_(t,r+1)){case 109:if(_(t,r+4)!==45)break;case 102:return h(t,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+nt+(_(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~At(t,"stretch")?dr(h(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(_(t,r+1)!==115)break;case 6444:switch(_(t,L(t)-3-(~At(t,"!important")&&10))){case 107:return h(t,":",":"+y)+t;case 101:return h(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+y+(_(t,14)===45?"inline-":"")+"box$3$1"+y+"$2$3$1"+A+"$2box$3")+t}break;case 5936:switch(_(t,r+11)){case 114:return y+t+A+h(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return y+t+A+h(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return y+t+A+h(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return y+t+A+t+t}return t}var le=function(r,e,n,a){if(r.length>-1&&!r.return)switch(r.type){case Yt:r.return=dr(r.value,r.length);break;case sr:return X([W(r,{value:h(r.value,"@","@"+y)})],a);case zt:if(r.length)return Ur(r.props,function(o){switch(Wr(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([W(r,{props:[h(o,/:(read-\w+)/,":"+nt+"$1")]})],a);case"::placeholder":return X([W(r,{props:[h(o,/:(plac\w+)/,":"+y+"input-$1")]}),W(r,{props:[h(o,/:(plac\w+)/,":"+nt+"$1")]}),W(r,{props:[h(o,/:(plac\w+)/,A+"input-$1")]})],a)}return""})}},de=[le],me=function(r){var e=r.key;if(e==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(l){var E=l.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(l),l.setAttribute("data-s",""))})}var a=r.stylisPlugins||de,o={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(l){for(var E=l.getAttribute("data-emotion").split(" "),x=1;x<E.length;x++)o[E[x]]=!0;c.push(l)});var f,d=[ce,fe];{var m,u=[re,ne(function(l){m.insert(l)})],w=ee(d.concat(a,u)),R=function(E){return X(Qr(E),w)};f=function(E,x,p,C){m=p,R(E?E+"{"+x.styles+"}":x.styles),C&&(v.inserted[x.name]=!0)}}var v={key:e,sheet:new Lr({key:e,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:f};return v.sheet.hydrate(c),v},mr={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=typeof Symbol=="function"&&Symbol.for,Lt=I?Symbol.for("react.element"):60103,jt=I?Symbol.for("react.portal"):60106,ct=I?Symbol.for("react.fragment"):60107,ft=I?Symbol.for("react.strict_mode"):60108,lt=I?Symbol.for("react.profiler"):60114,dt=I?Symbol.for("react.provider"):60109,mt=I?Symbol.for("react.context"):60110,Vt=I?Symbol.for("react.async_mode"):60111,ut=I?Symbol.for("react.concurrent_mode"):60111,pt=I?Symbol.for("react.forward_ref"):60112,yt=I?Symbol.for("react.suspense"):60113,ue=I?Symbol.for("react.suspense_list"):60120,ht=I?Symbol.for("react.memo"):60115,gt=I?Symbol.for("react.lazy"):60116,pe=I?Symbol.for("react.block"):60121,ye=I?Symbol.for("react.fundamental"):60117,he=I?Symbol.for("react.responder"):60118,ge=I?Symbol.for("react.scope"):60119;function T(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case Lt:switch(t=t.type,t){case Vt:case ut:case ct:case lt:case ft:case yt:return t;default:switch(t=t&&t.$$typeof,t){case mt:case pt:case gt:case ht:case dt:return t;default:return r}}case jt:return r}}}function ur(t){return T(t)===ut}g.AsyncMode=Vt;g.ConcurrentMode=ut;g.ContextConsumer=mt;g.ContextProvider=dt;g.Element=Lt;g.ForwardRef=pt;g.Fragment=ct;g.Lazy=gt;g.Memo=ht;g.Portal=jt;g.Profiler=lt;g.StrictMode=ft;g.Suspense=yt;g.isAsyncMode=function(t){return ur(t)||T(t)===Vt};g.isConcurrentMode=ur;g.isContextConsumer=function(t){return T(t)===mt};g.isContextProvider=function(t){return T(t)===dt};g.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lt};g.isForwardRef=function(t){return T(t)===pt};g.isFragment=function(t){return T(t)===ct};g.isLazy=function(t){return T(t)===gt};g.isMemo=function(t){return T(t)===ht};g.isPortal=function(t){return T(t)===jt};g.isProfiler=function(t){return T(t)===lt};g.isStrictMode=function(t){return T(t)===ft};g.isSuspense=function(t){return T(t)===yt};g.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ct||t===ut||t===lt||t===ft||t===yt||t===ue||typeof t=="object"&&t!==null&&(t.$$typeof===gt||t.$$typeof===ht||t.$$typeof===dt||t.$$typeof===mt||t.$$typeof===pt||t.$$typeof===ye||t.$$typeof===he||t.$$typeof===ge||t.$$typeof===pe)};g.typeOf=T;mr.exports=g;var be=mr.exports,pr=be,ve={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yr={};yr[pr.ForwardRef]=ve;yr[pr.Memo]=xe;var we=!0;function hr(t,r,e){var n="";return e.split(" ").forEach(function(a){t[a]!==void 0?r.push(t[a]+";"):n+=a+" "}),n}var Xt=function(r,e,n){var a=r.key+"-"+e.name;(n===!1||we===!1)&&r.registered[a]===void 0&&(r.registered[a]=e.styles)},gr=function(r,e,n){Xt(r,e,n);var a=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var o=e;do r.insert(e===o?"."+a:"",o,r.sheet,!0),o=o.next;while(o!==void 0)}};function Se(t){for(var r=0,e,n=0,a=t.length;a>=4;++n,a-=4)e=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(t.charCodeAt(n+2)&255)<<16;case 2:r^=(t.charCodeAt(n+1)&255)<<8;case 1:r^=t.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var $e={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce=/[A-Z]|^ms/g,Ee=/_EMO_([^_]+?)_([^]*?)_EMO_/g,br=function(r){return r.charCodeAt(1)===45},Jt=function(r){return r!=null&&typeof r!="boolean"},kt=ae(function(t){return br(t)?t:t.replace(Ce,"-$&").toLowerCase()}),Qt=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(Ee,function(n,a,o){return j={name:a,styles:o,next:j},a})}return $e[r]!==1&&!br(r)&&typeof e=="number"&&e!==0?e+"px":e};function q(t,r,e){if(e==null)return"";if(e.__emotion_styles!==void 0)return e;switch(typeof e){case"boolean":return"";case"object":{if(e.anim===1)return j={name:e.name,styles:e.styles,next:j},e.name;if(e.styles!==void 0){var n=e.next;if(n!==void 0)for(;n!==void 0;)j={name:n.name,styles:n.styles,next:j},n=n.next;var a=e.styles+";";return a}return Oe(t,r,e)}case"function":{if(t!==void 0){var o=j,i=e(t);return j=o,q(t,r,i)}break}}if(r==null)return e;var c=r[e];return c!==void 0?c:e}function Oe(t,r,e){var n="";if(Array.isArray(e))for(var a=0;a<e.length;a++)n+=q(t,r,e[a])+";";else for(var o in e){var i=e[o];if(typeof i!="object")r!=null&&r[i]!==void 0?n+=o+"{"+r[i]+"}":Jt(i)&&(n+=kt(o)+":"+Qt(o,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var c=0;c<i.length;c++)Jt(i[c])&&(n+=kt(o)+":"+Qt(o,i[c])+";");else{var f=q(t,r,i);switch(o){case"animation":case"animationName":{n+=kt(o)+":"+f+";";break}default:n+=o+"{"+f+"}"}}}return n}var tr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,j,Bt=function(r,e,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,o="";j=void 0;var i=r[0];i==null||i.raw===void 0?(a=!1,o+=q(n,e,i)):o+=i[0];for(var c=1;c<r.length;c++)o+=q(n,e,r[c]),a&&(o+=i[c]);tr.lastIndex=0;for(var f="",d;(d=tr.exec(o))!==null;)f+="-"+d[1];var m=Se(o)+f;return{name:m,styles:o,next:j}},Re=function(r){return r()},ke=qt.useInsertionEffect?qt.useInsertionEffect:!1,vr=ke||Re,Dt={}.hasOwnProperty,xr=$.createContext(typeof HTMLElement<"u"?me({key:"css"}):null);xr.Provider;var wr=function(r){return $.forwardRef(function(e,n){var a=$.useContext(xr);return r(e,a,n)})},Sr=$.createContext({}),Mt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ie=function(r,e){var n={};for(var a in e)Dt.call(e,a)&&(n[a]=e[a]);return n[Mt]=r,n},_e=function(r){var e=r.cache,n=r.serialized,a=r.isStringTag;return Xt(e,n,a),vr(function(){return gr(e,n,a)}),null},Ae=wr(function(t,r,e){var n=t.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=t[Mt],o=[n],i="";typeof t.className=="string"?i=hr(r.registered,o,t.className):t.className!=null&&(i=t.className+" ");var c=Bt(o,void 0,$.useContext(Sr));i+=r.key+"-"+c.name;var f={};for(var d in t)Dt.call(t,d)&&d!=="css"&&d!==Mt&&(f[d]=t[d]);return f.ref=e,f.className=i,$.createElement($.Fragment,null,$.createElement(_e,{cache:r,serialized:c,isStringTag:typeof a=="string"}),$.createElement(a,f))}),Ne=Ae,Me=_t.Fragment;function k(t,r,e){return Dt.call(r,"css")?_t.jsx(Ne,Ie(t,r),e):_t.jsx(t,r,e)}function $r(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return Bt(r)}var s=function(){var r=$r.apply(void 0,arguments),e="animation-"+r.name;return{name:e,styles:"@keyframes "+e+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Te=function t(r){for(var e=r.length,n=0,a="";n<e;n++){var o=r[n];if(o!=null){var i=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))i=t(o);else{i="";for(var c in o)o[c]&&c&&(i&&(i+=" "),i+=c)}break}default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};function Pe(t,r,e){var n=[],a=hr(t,n,e);return n.length<2?e:a+r(n)}var ze=function(r){var e=r.cache,n=r.serializedArr;return vr(function(){for(var a=0;a<n.length;a++)gr(e,n[a],!1)}),null},It=wr(function(t,r){var e=!1,n=[],a=function(){for(var d=arguments.length,m=new Array(d),u=0;u<d;u++)m[u]=arguments[u];var w=Bt(m,r.registered);return n.push(w),Xt(r,w,!1),r.key+"-"+w.name},o=function(){for(var d=arguments.length,m=new Array(d),u=0;u<d;u++)m[u]=arguments[u];return Pe(r.registered,a,Te(m))},i={css:a,cx:o,theme:$.useContext(Sr)},c=t.children(i);return e=!0,$.createElement($.Fragment,null,$.createElement(ze,{cache:r,serializedArr:n}),c)}),Ye=Object.defineProperty,Fe=(t,r,e)=>r in t?Ye(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,J=(t,r,e)=>(Fe(t,typeof r!="symbol"?r+"":r,e),e),Tt=new Map,Q=new WeakMap,rr=0,Le=void 0;function je(t){return t?(Q.has(t)||(rr+=1,Q.set(t,rr.toString())),Q.get(t)):"0"}function Ve(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?je(t.root):t[r]}`).toString()}function Xe(t){let r=Ve(t),e=Tt.get(r);if(!e){const n=new Map;let a;const o=new IntersectionObserver(i=>{i.forEach(c=>{var f;const d=c.isIntersecting&&a.some(m=>c.intersectionRatio>=m);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=d),(f=n.get(c.target))==null||f.forEach(m=>{m(d,c)})})},t);a=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:o,elements:n},Tt.set(r,e)}return e}function Cr(t,r,e={},n=Le){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const f=t.getBoundingClientRect();return r(n,{isIntersecting:n,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:a,observer:o,elements:i}=Xe(e);let c=i.get(t)||[];return i.has(t)||i.set(t,c),c.push(r),o.observe(t),function(){c.splice(c.indexOf(r),1),c.length===0&&(i.delete(t),o.unobserve(t)),i.size===0&&(o.disconnect(),Tt.delete(a))}}function Be(t){return typeof t.children!="function"}var er=class extends $.Component{constructor(t){super(t),J(this,"node",null),J(this,"_unobserveCb",null),J(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),J(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),Be(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=Cr(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:R,entry:v}=this.state;return t({inView:R,entry:v,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:n,root:a,rootMargin:o,onChange:i,skip:c,trackVisibility:f,delay:d,initialInView:m,fallbackInView:u,...w}=this.props;return $.createElement(r||"div",{ref:this.handleNode,...w},t)}};function Er({threshold:t,delay:r,trackVisibility:e,rootMargin:n,root:a,triggerOnce:o,skip:i,initialInView:c,fallbackInView:f,onChange:d}={}){var m;const[u,w]=$.useState(null),R=$.useRef(),[v,l]=$.useState({inView:!!c,entry:void 0});R.current=d,$.useEffect(()=>{if(i||!u)return;let C;return C=Cr(u,(z,Y)=>{l({inView:z,entry:Y}),R.current&&R.current(z,Y),Y.isIntersecting&&o&&C&&(C(),C=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:e,delay:r},f),()=>{C&&C()}},[Array.isArray(t)?t.toString():t,u,a,n,o,i,e,f,r]);const E=(m=v.entry)==null?void 0:m.target,x=$.useRef();!u&&E&&!o&&!i&&x.current!==E&&(x.current=E,l({inView:!!c,entry:void 0}));const p=[w,v.inView,v.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}var Or={exports:{}},b={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wt=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),vt=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),wt=Symbol.for("react.provider"),St=Symbol.for("react.context"),De=Symbol.for("react.server_context"),$t=Symbol.for("react.forward_ref"),Ct=Symbol.for("react.suspense"),Et=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),We=Symbol.for("react.offscreen"),Rr;Rr=Symbol.for("react.module.reference");function P(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case Wt:switch(t=t.type,t){case bt:case xt:case vt:case Ct:case Et:return t;default:switch(t=t&&t.$$typeof,t){case De:case St:case $t:case Rt:case Ot:case wt:return t;default:return r}}case Ut:return r}}}b.ContextConsumer=St;b.ContextProvider=wt;b.Element=Wt;b.ForwardRef=$t;b.Fragment=bt;b.Lazy=Rt;b.Memo=Ot;b.Portal=Ut;b.Profiler=xt;b.StrictMode=vt;b.Suspense=Ct;b.SuspenseList=Et;b.isAsyncMode=function(){return!1};b.isConcurrentMode=function(){return!1};b.isContextConsumer=function(t){return P(t)===St};b.isContextProvider=function(t){return P(t)===wt};b.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wt};b.isForwardRef=function(t){return P(t)===$t};b.isFragment=function(t){return P(t)===bt};b.isLazy=function(t){return P(t)===Rt};b.isMemo=function(t){return P(t)===Ot};b.isPortal=function(t){return P(t)===Ut};b.isProfiler=function(t){return P(t)===xt};b.isStrictMode=function(t){return P(t)===vt};b.isSuspense=function(t){return P(t)===Ct};b.isSuspenseList=function(t){return P(t)===Et};b.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===bt||t===xt||t===vt||t===Ct||t===Et||t===We||typeof t=="object"&&t!==null&&(t.$$typeof===Rt||t.$$typeof===Ot||t.$$typeof===wt||t.$$typeof===St||t.$$typeof===$t||t.$$typeof===Rr||t.getModuleId!==void 0)};b.typeOf=P;Or.exports=b;var Ue=Or.exports;s`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;s`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;s`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;s`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;s`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;s`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;s`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;s`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;s`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;s`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;s`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;s`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Ge=s`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,qe=s`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,He=s`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ke=s`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ze=s`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gt=s`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Je=s`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qe=s`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tn=s`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rn=s`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,en=s`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nn=s`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,an=s`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function on({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:n=Gt,iterationCount:a=1}){return $r`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function sn(t){return t==null}function cn(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function kr(t,r){return e=>e?t():r()}function H(t){return kr(t,()=>null)}function Pt(t){return H(()=>({opacity:0}))(t)}const Ir=t=>{const{cascade:r=!1,damping:e=.5,delay:n=0,duration:a=1e3,fraction:o=0,keyframes:i=Gt,triggerOnce:c=!1,className:f,style:d,childClassName:m,childStyle:u,children:w,onVisibilityChange:R}=t,v=$.useMemo(()=>on({keyframes:i,duration:a}),[a,i]);return sn(w)?null:cn(w)?k(ln,{...t,animationStyles:v,children:String(w)}):Ue.isFragment(w)?k(_r,{...t,animationStyles:v}):k(Me,{children:$.Children.map(w,(l,E)=>{if(!$.isValidElement(l))return null;const x=n+(r?E*a*e:0);switch(l.type){case"ol":case"ul":return k(It,{children:({cx:p})=>k(l.type,{...l.props,className:p(f,l.props.className),style:Object.assign({},d,l.props.style),children:k(Ir,{...t,children:l.props.children})})});case"li":return k(er,{threshold:o,triggerOnce:c,onChange:R,children:({inView:p,ref:C})=>k(It,{children:({cx:z})=>k(l.type,{...l.props,ref:C,className:z(m,l.props.className),css:H(()=>v)(p),style:Object.assign({},u,l.props.style,Pt(!p),{animationDelay:x+"ms"})})})});default:return k(er,{threshold:o,triggerOnce:c,onChange:R,children:({inView:p,ref:C})=>k("div",{ref:C,className:f,css:H(()=>v)(p),style:Object.assign({},d,Pt(!p),{animationDelay:x+"ms"}),children:k(It,{children:({cx:z})=>k(l.type,{...l.props,className:z(m,l.props.className),style:Object.assign({},u,l.props.style)})})})})}})})},fn={display:"inline-block",whiteSpace:"pre"},ln=t=>{const{animationStyles:r,cascade:e=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:i=0,triggerOnce:c=!1,className:f,style:d,children:m,onVisibilityChange:u}=t,{ref:w,inView:R}=Er({triggerOnce:c,threshold:i,onChange:u});return kr(()=>k("div",{ref:w,className:f,style:Object.assign({},d,fn),children:m.split("").map((v,l)=>k("span",{css:H(()=>r)(R),style:{animationDelay:a+l*o*n+"ms"},children:v},l))}),()=>k(_r,{...t,children:m}))(e)},_r=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:n=!1,className:a,style:o,children:i,onVisibilityChange:c}=t,{ref:f,inView:d}=Er({triggerOnce:n,threshold:e,onChange:c});return k("div",{ref:f,className:a,css:H(()=>r)(d),style:Object.assign({},o,Pt(!d)),children:i})};s`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;s`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;s`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;s`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;s`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const dn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,mn=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,un=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,pn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,yn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,hn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,gn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,bn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,vn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,xn=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,wn=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Sn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,$n=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Cn(t,r,e){switch(e){case"bottom-left":return r?mn:qe;case"bottom-right":return r?un:He;case"down":return t?r?yn:Ze:r?pn:Ke;case"left":return t?r?gn:Je:r?hn:Gt;case"right":return t?r?vn:tn:r?bn:Qe;case"top-left":return r?xn:rn;case"top-right":return r?wn:en;case"up":return t?r?$n:an:r?Sn:nn;default:return r?dn:Ge}}const On=t=>{const{big:r=!1,direction:e,reverse:n=!1,...a}=t,o=$.useMemo(()=>Cn(r,n,e),[r,e,n]);return k(Ir,{keyframes:o,...a})};s`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;s`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;s`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;s`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;s`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;s`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;s`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;s`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;s`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;export{On as F,_t as j};
