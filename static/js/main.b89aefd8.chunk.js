/*! For license information please see main.b89aefd8.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[2],{43:function(t,e,n){"use strict";(function(t){var r=n(8),o=n.n(r),i=n(25);function a(){return s.call(this),null}function s(){var e,r,o,i,a,s,c,u,l,p,d,h,g,f,m,w,b,v,y,x,k,j,O,L,S,T,R,q,P,M,W,E,N,A,C,B,_,F,U,I,D,X,z,H,G,J,V,$,K=[].slice,Q={}.hasOwnProperty,Y=function(t,e){function n(){this.constructor=t}for(var r in e)Q.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},Z=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};for(k={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},P=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},W=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,x=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==W&&(W=function(t){return setTimeout(t,50)},x=function(t){return clearTimeout(t)}),N=function(t){var e,n;return e=P(),(n=function(){var r;return(r=P()-e)>=33?(e=P(),t(r,(function(){return W(n)}))):setTimeout(n,33-r)})()},E=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?K.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},j=function(){var t,e,n,r,o,i,a;for(e=arguments[0],i=0,a=(r=2<=arguments.length?K.call(arguments,1):[]).length;a>i;i++)if(n=r[i])for(t in n)Q.call(n,t)&&(o=n[t],null!=e[t]&&"object"==typeof e[t]&&null!=o&&"object"==typeof o?j(e[t],o):e[t]=o);return e},b=function(t){var e,n,r,o,i;for(n=e=0,o=0,i=t.length;i>o;o++)r=t[o],n+=Math.abs(r),e++;return n/e},L=function(t,e){var n,r,o;if(null==t&&(t="options"),null==e&&(e=!0),o=document.querySelector("[data-pace-"+t+"]")){if(n=o.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(s){return r=s,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},c=function(){function t(){}return t.prototype.on=function(t,e,n,r){var o;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(o=this.bindings)[t]&&(o[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,r,o;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,o=[];n<this.bindings[t].length;)o.push(this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):n++);return o}},t.prototype.trigger=function(){var t,e,n,r,o,i,a,s,c;if(n=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],null!=(a=this.bindings)?a[n]:void 0){for(o=0,c=[];o<this.bindings[n].length;)r=(s=this.bindings[n][o]).handler,e=s.ctx,i=s.once,r.apply(null!=e?e:this,t),c.push(i?this.bindings[n].splice(o,1):o++);return c}},t}(),p=window.Pace||{},window.Pace=p,j(p,c.prototype),M=p.options=j({},k,window.paceOptions,L()),z=0,G=(V=["ajax","document","eventLag","elements"]).length;G>z;z++)!0===M[_=V[z]]&&(M[_]=k[_]);l=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Y(e,t),e}(Error),r=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(M.target)))throw new l;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return(t=this.getElement()).className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){l=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,r,o,i,a;if(null==document.querySelector(M.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",o=0,i=(a=["webkitTransform","msTransform","transform"]).length;i>o;o++)e=a[o],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return this.progress>=100},t}(),u=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,r,o,i,a;if(null!=this.bindings[t]){for(a=[],r=0,o=(i=this.bindings[t]).length;o>r;r++)n=i[r],a.push(n.call(this,e));return a}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),X=window.XMLHttpRequest,D=window.XDomainRequest,I=window.WebSocket,O=function(t,e){var n,r,o;for(n in o=[],e.prototype)try{r=e.prototype[n],o.push(null==t[n]&&"function"!=typeof r?t[n]=r:void 0)}catch(c){c}return o},R=[],p.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],R.unshift("ignore"),n=e.apply(null,t),R.shift(),n},p.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],R.unshift("track"),n=e.apply(null,t),R.shift(),n},B=function(t){var e;if(null==t&&(t="GET"),"track"===R[0])return"force";if(!R.length&&M.ajax){if("socket"===t&&M.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),Z.call(M.ajax.trackMethods,e)>=0)return!0}return!1},d=function(t){function e(){var t,n=this;e.__super__.constructor.apply(this,arguments),t=function(t){var e;return e=t.open,t.open=function(r,o){return B(r)&&n.trigger("request",{type:r,url:o,request:t}),e.apply(t,arguments)}},window.XMLHttpRequest=function(e){var n;return n=new X(e),t(n),n};try{O(window.XMLHttpRequest,X)}catch(i){}if(null!=D){window.XDomainRequest=function(){var e;return e=new D,t(e),e};try{O(window.XDomainRequest,D)}catch(i){}}if(null!=I&&M.ajax.trackWebSockets){window.WebSocket=function(t,e){var r;return r=null!=e?new I(t,e):new I(t),B("socket")&&n.trigger("request",{type:"socket",url:t,protocols:e,request:r}),r};try{O(window.WebSocket,I)}catch(i){}}}return Y(e,t),e}(u),H=null,C=function(t){var e,n,r,o;for(n=0,r=(o=M.ajax.ignoreURLs).length;r>n;n++)if("string"==typeof(e=o[n])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(S=function(){return null==H&&(H=new d),H})().on("request",(function(t){var n,r,o,i,a;return i=t.type,o=t.request,a=t.url,C(a)||p.running||!1===M.restartOnRequestAfter&&"force"!==B(i)?void 0:(r=arguments,"boolean"==typeof(n=M.restartOnRequestAfter||0)&&(n=0),setTimeout((function(){var t,n,a,s,c;if("socket"===i?o.readyState<2:0<(a=o.readyState)&&4>a){for(p.restart(),c=[],t=0,n=(s=p.sources).length;n>t;t++){if((_=s[t])instanceof e){_.watch.apply(_,r);break}c.push(void 0)}return c}}),n))})),e=function(){function t(){var t=this;this.elements=[],S().on("request",(function(){return t.watch.apply(t,arguments)}))}return t.prototype.watch=function(t){var e,n,r,o;return r=t.type,e=t.request,o=t.url,C(o)?void 0:(n="socket"===r?new f(e):new m(e),this.elements.push(n))},t}(),m=function(t){var e,n,r,o,i,a=this;if(this.progress=0,null!=window.ProgressEvent)for(t.addEventListener("progress",(function(t){return a.progress=t.lengthComputable?100*t.loaded/t.total:a.progress+(100-a.progress)/2}),!1),n=0,r=(i=["load","abort","timeout","error"]).length;r>n;n++)e=i[n],t.addEventListener(e,(function(){return a.progress=100}),!1);else o=t.onreadystatechange,t.onreadystatechange=function(){var e;return 0===(e=t.readyState)||4===e?a.progress=100:3===t.readyState&&(a.progress=50),"function"==typeof o?o.apply(null,arguments):void 0}},f=function(t){var e,n,r,o,i=this;for(this.progress=0,n=0,r=(o=["error","open"]).length;r>n;n++)e=o[n],t.addEventListener(e,(function(){return i.progress=100}),!1)},i=function(t){var e,n,r,o;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(o=t.selectors).length;r>n;n++)e=o[n],this.elements.push(new a(e))},a=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return t.check()}),M.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),o=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),s=function(){var t,e,n,r,o,i=this;this.progress=0,t=0,o=[],r=0,n=P(),e=setInterval((function(){var a;return a=P()-n-50,n=P(),o.push(a),o.length>M.eventLag.sampleCount&&o.shift(),t=b(o),++r>=M.eventLag.minSamples&&t<M.eventLag.lagThreshold?(i.progress=100,clearInterval(e)):i.progress=3/(t+3)*100}),50)},g=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=M.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=E(this.source,"progress")),e>=100&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/M.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,M.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+M.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),F=null,A=null,v=null,U=null,w=null,y=null,p.running=!1,T=function(){return M.restartOnPushState?p.restart():void 0},null!=window.history.pushState&&(J=window.history.pushState,window.history.pushState=function(){return T(),J.apply(window.history,arguments)}),null!=window.history.replaceState&&($=window.history.replaceState,window.history.replaceState=function(){return T(),$.apply(window.history,arguments)}),h={ajax:e,elements:i,document:o,eventLag:s},(q=function(){var t,e,n,o,i,a,s,c;for(p.sources=F=[],e=0,o=(a=["ajax","elements","document","eventLag"]).length;o>e;e++)!1!==M[t=a[e]]&&F.push(new h[t](M[t]));for(n=0,i=(c=null!=(s=M.extraSources)?s:[]).length;i>n;n++)_=c[n],F.push(new _(M));return p.bar=v=new r,A=[],U=new g})(),p.stop=function(){return p.trigger("stop"),p.running=!1,v.destroy(),y=!0,null!=w&&("function"==typeof x&&x(w),w=null),q()},p.restart=function(){return p.trigger("restart"),p.stop(),p.start()},p.go=function(){var t;return p.running=!0,v.render(),t=P(),y=!1,w=N((function(e,n){var r,o,i,a,s,c,u,l,d,h,f,m,w,b,x;for(100-v.progress,o=h=0,i=!0,c=f=0,w=F.length;w>f;c=++f)for(_=F[c],d=null!=A[c]?A[c]:A[c]=[],u=m=0,b=(s=null!=(x=_.elements)?x:[_]).length;b>m;u=++m)a=s[u],i&=(l=null!=d[u]?d[u]:d[u]=new g(a)).done,l.done||(o++,h+=l.tick(e));return r=h/o,v.update(U.tick(e,r)),v.done()||i||y?(v.update(100),p.trigger("done"),setTimeout((function(){return v.finish(),p.running=!1,p.trigger("hide")}),Math.max(M.ghostTime,Math.max(M.minTime-(P()-t),0)))):n()}))},p.start=function(t){j(M,t),p.running=!0;try{v.render()}catch(r){l=r}return document.querySelector(".pace")?(p.trigger("start"),p.go()):setTimeout(p.start,50)},"function"==typeof define&&n(54)?define((function(){return p})):"object"==typeof exports?t.exports=p:M.startOnPageLoad&&p.start()}a.propTypes={color:o.a.string.isRequired},e.a=Object(i.a)({"@global":{".pace":{pointerEvents:"none",userSelect:"none"},".pace-inactive":{display:"none"},".pace .pace-progress":{background:function(t){return t.color||null},position:"fixed",zIndex:2e3,top:0,right:"100%",width:"100%",height:3}}})(a),window.paceOptions={ajax:{trackMethods:["GET","POST"]}}}).call(this,n(53)(t))},57:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(29),i=n.n(o),a=n(73),s=n(74),c=n(30),u=n(2),l=n(3),p=n(44),d=n(76),h="rgb(36, 40, 44)",g="rgba(0, 0, 0, 0.13)",f=Object(p.a)({palette:{primary:{main:"#b3294e"},secondary:{main:"#4829B2"},common:{black:"#343a40",darkBlack:h},warning:{light:"rgba(253, 200, 69, .3)",main:"rgba(253, 200, 69, .5)",dark:"rgba(253, 200, 69, .7)"},tonalOffset:.2,background:{default:"#f5f5f5"},spacing:8},breakpoints:{values:{xl:1920,lg:1280,md:960,sm:600,xs:0}},border:{borderColor:g,borderWidth:2},overrides:{MuiExpansionPanel:{root:{position:"static"}},MuiTableCell:{root:Object(l.a)({paddingLeft:16,paddingRight:16,borderBottom:"".concat(2,"px solid ").concat(g)},"@media (max-width:  ".concat(600,"px)"),{paddingLeft:8,paddingRight:8})},MuiDivider:{root:{backgroundColor:g,height:2}},MuiPrivateNotchedOutline:{root:{borderWidth:2}},MuiListItem:{divider:{borderBottom:"".concat(2,"px solid ").concat(g)}},MuiDialog:{paper:{width:"100%",maxWidth:430,marginLeft:8,marginRight:8}},MuiTooltip:{tooltip:{backgroundColor:h}},MuiExpansionPanelDetails:{root:Object(l.a)({},"@media (max-width:  ".concat(600,"px)"),{paddingLeft:8,paddingRight:8})}},typography:{useNextVariants:!0}}),m=Object(d.a)(f),w=n(25);var b=Object(w.a)((function(t){var e,n,r,o,i;return{"@global":{"*:focus":{outline:0},".text-white":{color:t.palette.common.white},".listItemLeftPadding":(e={paddingTop:"".concat(t.spacing(1.75),"px !important"),paddingBottom:"".concat(t.spacing(1.75),"px !important"),paddingLeft:"".concat(t.spacing(4),"px !important")},Object(l.a)(e,t.breakpoints.down("sm"),{paddingLeft:"".concat(t.spacing(4),"px !important")}),Object(l.a)(e,"@media (max-width:  420px)",{paddingLeft:"".concat(t.spacing(1),"px !important")}),e),".container":(n={width:"100%",paddingRight:t.spacing(4),paddingLeft:t.spacing(4),marginRight:"auto",marginLeft:"auto"},Object(l.a)(n,t.breakpoints.up("sm"),{maxWidth:540}),Object(l.a)(n,t.breakpoints.up("md"),{maxWidth:720}),Object(l.a)(n,t.breakpoints.up("lg"),{maxWidth:1170}),n),".row":{display:"flex",flexWrap:"wrap",marginRight:-t.spacing(2),marginLeft:-t.spacing(2)},".container-fluid":{width:"100%",paddingRight:t.spacing(2),paddingLeft:t.spacing(2),marginRight:"auto",marginLeft:"auto",maxWidth:1370},".lg-mg-top":(r={marginTop:"".concat(t.spacing(20),"px !important")},Object(l.a)(r,t.breakpoints.down("md"),{marginTop:"".concat(t.spacing(18),"px !important")}),Object(l.a)(r,t.breakpoints.down("sm"),{marginTop:"".concat(t.spacing(16),"px !important")}),Object(l.a)(r,t.breakpoints.down("xs"),{marginTop:"".concat(t.spacing(14),"px !important")}),r),".lg-mg-bottom":(o={marginBottom:"".concat(t.spacing(20),"px !important")},Object(l.a)(o,t.breakpoints.down("md"),{marginBottom:"".concat(t.spacing(18),"px !important")}),Object(l.a)(o,t.breakpoints.down("sm"),{marginBottom:"".concat(t.spacing(16),"px !important")}),Object(l.a)(o,t.breakpoints.down("xs"),{marginBottom:"".concat(t.spacing(14),"px !important")}),o),".lg-p-top":(i={paddingTop:"".concat(t.spacing(20),"px !important")},Object(l.a)(i,t.breakpoints.down("md"),{paddingTop:"".concat(t.spacing(18),"px !important")}),Object(l.a)(i,t.breakpoints.down("sm"),{paddingTop:"".concat(t.spacing(16),"px !important")}),Object(l.a)(i,t.breakpoints.down("xs"),{paddingTop:"".concat(t.spacing(14),"px !important")}),i)}}}),{withTheme:!0})((function(){return null})),v=n(43),y=n(5),x=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(6),n.e(11)]).then(n.bind(null,686))})),k=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8),n.e(10)]).then(n.bind(null,687))}));var j=function(){return Object(y.jsx)(c.a,{children:Object(y.jsxs)(a.a,{theme:m,children:[Object(y.jsx)(s.a,{}),Object(y.jsx)(b,{}),Object(y.jsx)(v.a,{color:m.palette.primary.light}),Object(y.jsx)(r.Suspense,{fallback:Object(y.jsx)(r.Fragment,{}),children:Object(y.jsxs)(u.c,{children:[Object(y.jsx)(u.a,{path:"/c",children:Object(y.jsx)(x,{})}),Object(y.jsx)(u.a,{children:Object(y.jsx)(k,{})})]})})]})})},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(Object(y.jsx)(j,{}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");O?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):L(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(e,t)}))}}()}},[[57,3,5]]]);
//# sourceMappingURL=main.b89aefd8.chunk.js.map