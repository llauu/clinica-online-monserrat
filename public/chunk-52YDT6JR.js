import{E as pt,H as mt,I as ft,K as vt,L as gt,M as _t,U as Tt,c as ht}from"./chunk-4TCFWNX2.js";import{d as J,j as K,s as dt,t as Q,v as S,w as B,y as X}from"./chunk-FF7OLIXW.js";import{$a as a,Ca as j,Cb as h,Db as m,Eb as R,Fb as G,Gb as $,Ib as W,Kb as ut,Lb as H,Mb as l,Vb as f,Wa as ct,Xa as z,Xb as T,Zb as q,a as u,ab as _,b as C,da as b,e as M,eb as lt,fc as N,ga as at,ia as d,ib as U,ja as y,k as v,lb as x,oa as k,ra as rt,rb as D,sb as O,tb as r,ub as A,wa as Z,wb as p,xa as L}from"./chunk-52PAEBTB.js";var Ct=["toast-component",""];function Ot(s,n){if(s&1){let t=W();h(0,"button",5),H("click",function(){Z(t);let i=l();return L(i.remove())}),h(1,"span",6),f(2,"\xD7"),m()()}}function At(s,n){if(s&1&&(G(0),f(1),$()),s&2){let t=l(2);a(),T("[",t.duplicatesCount+1,"]")}}function Rt(s,n){if(s&1&&(h(0,"div"),f(1),D(2,At,2,1,"ng-container",4),m()),s&2){let t=l();p(t.options.titleClass),O("aria-label",t.title),a(),T(" ",t.title," "),a(),r("ngIf",t.duplicatesCount)}}function Ht(s,n){if(s&1&&R(0,"div",7),s&2){let t=l();p(t.options.messageClass),r("innerHTML",t.message,z)}}function Et(s,n){if(s&1&&(h(0,"div",8),f(1),m()),s&2){let t=l();p(t.options.messageClass),O("aria-label",t.message),a(),T(" ",t.message," ")}}function Mt(s,n){if(s&1&&(h(0,"div"),R(1,"div",9),m()),s&2){let t=l();a(),A("width",t.width()+"%")}}function jt(s,n){if(s&1){let t=W();h(0,"button",5),H("click",function(){Z(t);let i=l();return L(i.remove())}),h(1,"span",6),f(2,"\xD7"),m()()}}function Nt(s,n){if(s&1&&(G(0),f(1),$()),s&2){let t=l(2);a(),T("[",t.duplicatesCount+1,"]")}}function St(s,n){if(s&1&&(h(0,"div"),f(1),D(2,Nt,2,1,"ng-container",4),m()),s&2){let t=l();p(t.options.titleClass),O("aria-label",t.title),a(),T(" ",t.title," "),a(),r("ngIf",t.duplicatesCount)}}function Bt(s,n){if(s&1&&R(0,"div",7),s&2){let t=l();p(t.options.messageClass),r("innerHTML",t.message,z)}}function Ft(s,n){if(s&1&&(h(0,"div",8),f(1),m()),s&2){let t=l();p(t.options.messageClass),O("aria-label",t.message),a(),T(" ",t.message," ")}}function Vt(s,n){if(s&1&&(h(0,"div"),R(1,"div",9),m()),s&2){let t=l();a(),A("width",t.width()+"%")}}var Y=class{_attachedHost;component;viewContainerRef;injector;constructor(n,t){this.component=n,this.injector=t}attach(n,t){return this._attachedHost=n,n.attach(this,t)}detach(){let n=this._attachedHost;if(n)return this._attachedHost=void 0,n.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},tt=class{_attachedPortal;_disposeFn;attach(n,t){return this._attachedPortal=n,this.attachComponentPortal(n,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(n){this._disposeFn=n}},et=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new v;_activate=new v;_manualClose=new v;_resetTimeout=new v;_countDuplicate=new v;constructor(n){this._overlayRef=n}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(n,t){n&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},I=class{toastId;config;message;title;toastType;toastRef;_onTap=new v;_onAction=new v;constructor(n,t,e,i,o,c){this.toastId=n,this.config=t,this.message=e,this.title=i,this.toastType=o,this.toastRef=c,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(n){this._onAction.next(n)}onAction(){return this._onAction.asObservable()}},bt={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},yt=new at("ToastConfig"),it=class extends tt{_hostDomElement;_componentFactoryResolver;_appRef;constructor(n,t,e){super(),this._hostDomElement=n,this._componentFactoryResolver=t,this._appRef=e}attachComponentPortal(n,t){let e=this._componentFactoryResolver.resolveComponentFactory(n.component),i;return i=e.create(n.injector),this._appRef.attachView(i.hostView),this.setDisposeFn(()=>{this._appRef.detachView(i.hostView),i.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(i),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(i)),i}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},Pt=(()=>{class s{_document=y(J);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(e){return new(e||s)};static \u0275prov=b({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),st=class{_portalHost;constructor(n){this._portalHost=n}attach(n,t=!0){return this._portalHost.attach(n,t)}detach(){return this._portalHost.detach()}},kt=(()=>{class s{_overlayContainer=y(Pt);_componentFactoryResolver=y(lt);_appRef=y(N);_document=y(J);_paneElements=new Map;create(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}getPaneElement(t="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}_createPaneElement(t,e){let i=this._document.createElement("div");return i.id="toast-container",i.classList.add(t),i.classList.add("toast-container"),e?e.getContainerElement().appendChild(i):this._overlayContainer.getContainerElement().appendChild(i),i}_createPortalHost(t){return new it(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new st(this._createPortalHost(t))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=b({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),F=(()=>{class s{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,e,i,o,c){this.overlay=e,this._injector=i,this.sanitizer=o,this.ngZone=c,this.toastrConfig=u(u({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=u(u({},t.default.iconClasses),t.config.iconClasses))}show(t,e,i={},o=""){return this._preBuildNotification(o,t,e,this.applyConfig(i))}success(t,e,i={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,t,e,this.applyConfig(i))}error(t,e,i={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,t,e,this.applyConfig(i))}info(t,e,i={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,t,e,this.applyConfig(i))}warning(t,e,i={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,t,e,this.applyConfig(i))}clear(t){for(let e of this.toasts)if(t!==void 0){if(e.toastId===t){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(t){let e=this._findToast(t);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let i=this.toasts[this.currentlyActive].toastRef;i.isInactive()||(this.currentlyActive=this.currentlyActive+1,i.activate())}return!0}findDuplicate(t="",e="",i,o){let{includeTitleDuplicates:c}=this.toastrConfig;for(let g of this.toasts){let E=c&&g.title===t;if((!c||E)&&g.message===e)return g.toastRef.onDuplicate(i,o),g}return null}applyConfig(t={}){return u(u({},this.toastrConfig),t)}_findToast(t){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(t,e,i,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,e,i,o)):this._buildNotification(t,e,i,o)}_buildNotification(t,e,i,o){if(!o.toastComponent)throw new Error("toastComponent required");let c=this.findDuplicate(i,e,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&i||e)&&this.toastrConfig.preventDuplicates&&c!==null)return c;this.previousToastMessage=e;let g=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(g=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let E=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let nt=e;e&&o.enableHtml&&(nt=this.sanitizer.sanitize(ct.HTML,e));let w=new et(E),V=new I(this.index,o,nt,i,t,w),It=[{provide:I,useValue:V}],wt=j.create({providers:It,parent:this._injector}),xt=new Y(o.toastComponent,wt),ot=E.attach(xt,o.newestOnTop);w.componentInstance=ot.instance;let P={toastId:this.index,title:i||"",message:e||"",toastRef:w,onShown:w.afterActivate(),onHidden:w.afterClosed(),onTap:V.onTap(),onAction:V.onAction(),portal:ot};return g||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{P.toastRef.activate()})),this.toasts.push(P),P}static \u0275fac=function(e){return new(e||s)(d(yt),d(kt),d(j),d(ht),d(U))};static \u0275prov=b({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Zt=(()=>{class s{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=x(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,i){this.toastrService=t,this.toastPackage=e,this.ngZone=i,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state=x({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>C(u({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(i=>100-i),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>C(u({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>C(u({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),e)):this.timeout=setTimeout(()=>t(),e)}outsideInterval(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),e)):this.intervalId=setInterval(()=>t(),e)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(e){return new(e||s)(_(F),_(I),_(U))};static \u0275cmp=k({type:s,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,i){e&1&&H("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),e&2&&(ut("@flyInOut",i._state),p(i.toastClasses),A("display",i.displayStyle))},standalone:!0,features:[q],attrs:Ct,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,i){e&1&&D(0,Ot,3,0,"button",0)(1,Rt,3,5,"div",1)(2,Ht,1,3,"div",2)(3,Et,2,4,"div",3)(4,Mt,2,2,"div",4),e&2&&(r("ngIf",i.options.closeButton),a(),r("ngIf",i.title),a(),r("ngIf",i.message&&i.options.enableHtml),a(),r("ngIf",i.message&&!i.options.enableHtml),a(),r("ngIf",i.options.progressBar))},dependencies:[K],encapsulation:2,data:{animation:[dt("flyInOut",[B("inactive",S({opacity:0})),B("active",S({opacity:1})),B("removed",S({opacity:0})),X("inactive => active",Q("{{ easeTime }}ms {{ easing }}")),X("active => removed",Q("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return s})(),Lt=C(u({},bt),{toastComponent:Zt}),ce=(s={})=>rt([{provide:yt,useValue:{default:Lt,config:s}}]);var zt=(()=>{class s{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=x(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=x("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,i){this.toastrService=t,this.toastPackage=e,this.appRef=i,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(i=>100-i),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||s)(_(F),_(I),_(N))};static \u0275cmp=k({type:s,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,i){e&1&&H("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),e&2&&(p(i.toastClasses),A("display",i.displayStyle))},standalone:!0,features:[q],attrs:Ct,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,i){e&1&&D(0,jt,3,0,"button",0)(1,St,3,5,"div",1)(2,Bt,1,3,"div",2)(3,Ft,2,4,"div",3)(4,Vt,2,2,"div",4),e&2&&(r("ngIf",i.options.closeButton),a(),r("ngIf",i.title),a(),r("ngIf",i.message&&i.options.enableHtml),a(),r("ngIf",i.message&&!i.options.enableHtml),a(),r("ngIf",i.options.progressBar))},dependencies:[K],encapsulation:2,changeDetection:0})}return s})(),le=C(u({},bt),{toastComponent:zt});var me=(()=>{class s{constructor(t,e,i){this.firestoreService=t,this.auth=e,this.toastrSvc=i,this.authState=mt(this.auth),this.auth.languageCode="es"}createUser(t,e){return M(this,null,function*(){let i=yield ft(this.auth,t,e);return i&&(vt(i.user),this.logout(!1)),i})}getCurrentUser(){return this.auth.currentUser}login(t,e){return M(this,null,function*(){return new Promise((i,o)=>{gt(this.auth,t,e).then(c=>{c.user.emailVerified?i(c):this.logout(!1).then(()=>{o("Debes verificar tu correo electronico ingresar.")})}).catch(c=>{o(c)})})})}logout(t=!0){return M(this,null,function*(){yield _t(this.auth),t&&window.location.reload()})}static{this.\u0275fac=function(e){return new(e||s)(d(Tt),d(pt),d(F))}}static{this.\u0275prov=b({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{F as a,ce as b,me as c};