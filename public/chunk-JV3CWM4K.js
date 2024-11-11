import{Ga as Z,Ha as he,Ob as p,Pb as h,ca as ue,cb as w,ea as I,eb as K,fa as ae,ha as W,ib as q,ja as M,ka as R,lb as P,oa as ce,qa as de,ra as B,vc as fe,xa as le}from"./chunk-7MNHCEPS.js";var we=null;function X(){return we}function Wt(e){we??=e}var De=class{};var _e=new W(""),Ae=(()=>{class e{historyGo(n){throw new Error("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=I({token:e,factory:()=>R(Be),providedIn:"platform"})}}return e})();var Be=(()=>{class e extends Ae{constructor(){super(),this._doc=R(_e),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return X().getBaseHref(this._doc)}onPopState(n){let i=X().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=X().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,r){this._history.pushState(n,i,r)}replaceState(n,i,r){this._history.replaceState(n,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=I({token:e,factory:()=>new e,providedIn:"platform"})}}return e})();function Se(e,t){if(e.length==0)return t;if(t.length==0)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,n==2?e+t.substring(1):n==1?e+t:e+"/"+t}function ge(e){let t=e.match(/#|\?|$/),n=t&&t.index||e.length,i=n-(e[n-1]==="/"?1:0);return e.slice(0,i)+e.slice(n)}function L(e){return e&&e[0]!=="?"?"?"+e:e}var re=(()=>{class e{historyGo(n){throw new Error("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=I({token:e,factory:()=>R(Te),providedIn:"root"})}}return e})(),Oe=new W(""),Te=(()=>{class e extends re{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??R(_e).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Se(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+L(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${i}${r}`:i}pushState(n,i,r,s){let o=this.prepareExternalUrl(r+L(s));this._platformLocation.pushState(n,i,o)}replaceState(n,i,r,s){let o=this.prepareExternalUrl(r+L(s));this._platformLocation.replaceState(n,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static{this.\u0275fac=function(i){return new(i||e)(M(Ae),M(Oe,8))}}static{this.\u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Pe=(()=>{class e{constructor(n){this._subject=new he,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=$e(ge(pe(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+L(i))}normalize(n){return e.stripTrailingSlash(ke(this._basePath,pe(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",r=null){this._locationStrategy.pushState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+L(i)),r)}replaceState(n,i="",r=null){this._locationStrategy.replaceState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+L(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(r=>r(n,i))}subscribe(n,i,r){return this._subject.subscribe({next:n,error:i,complete:r})}static{this.normalizeQueryParams=L}static{this.joinWithSlash=Se}static{this.stripTrailingSlash=ge}static{this.\u0275fac=function(i){return new(i||e)(M(re))}}static{this.\u0275prov=I({token:e,factory:()=>Ne(),providedIn:"root"})}}return e})();function Ne(){return new Pe(M(re))}function ke(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function pe(e){return e.replace(/\/index.html$/,"")}function $e(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}var D=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(D||{}),d=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(d||{}),g=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(g||{}),b={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function xe(e){return p(e)[h.LocaleId]}function Ue(e,t,n){let i=p(e),r=[i[h.DayPeriodsFormat],i[h.DayPeriodsStandalone]],s=m(r,t);return m(s,n)}function ze(e,t,n){let i=p(e),r=[i[h.DaysFormat],i[h.DaysStandalone]],s=m(r,t);return m(s,n)}function je(e,t,n){let i=p(e),r=[i[h.MonthsFormat],i[h.MonthsStandalone]],s=m(r,t);return m(s,n)}function Ve(e,t){let i=p(e)[h.Eras];return m(i,t)}function N(e,t){let n=p(e);return m(n[h.DateFormat],t)}function k(e,t){let n=p(e);return m(n[h.TimeFormat],t)}function $(e,t){let i=p(e)[h.DateTimeFormat];return m(i,t)}function H(e,t){let n=p(e),i=n[h.NumberSymbols][t];if(typeof i>"u"){if(t===b.CurrencyDecimal)return n[h.NumberSymbols][b.Decimal];if(t===b.CurrencyGroup)return n[h.NumberSymbols][b.Group]}return i}function be(e){if(!e[h.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[h.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Ge(e){let t=p(e);return be(t),(t[h.ExtraData][2]||[]).map(i=>typeof i=="string"?Q(i):[Q(i[0]),Q(i[1])])}function He(e,t,n){let i=p(e);be(i);let r=[i[h.ExtraData][0],i[h.ExtraData][1]],s=m(r,t)||[];return m(s,n)||[]}function m(e,t){for(let n=t;n>-1;n--)if(typeof e[n]<"u")return e[n];throw new Error("Locale data API: locale data undefined")}function Q(e){let[t,n]=e.split(":");return{hours:+t,minutes:+n}}var Ye=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,x={},We=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,A=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(A||{}),c=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(c||{}),a=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(a||{});function Zt(e,t,n,i){let r=nt(e);t=_(n,t)||t;let o=[],u;for(;t;)if(u=We.exec(t),u){o=o.concat(u.slice(1));let E=o.pop();if(!E)break;t=E}else{o.push(t);break}let F=r.getTimezoneOffset();i&&(F=Ie(i,F),r=tt(r,i,!0));let S="";return o.forEach(E=>{let v=Je(E);S+=v?v(r,n,F):E==="''"?"'":E.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),S}function G(e,t,n){let i=new Date(0);return i.setFullYear(e,t,n),i.setHours(0,0,0),i}function _(e,t){let n=xe(e);if(x[n]??={},x[n][t])return x[n][t];let i="";switch(t){case"shortDate":i=N(e,g.Short);break;case"mediumDate":i=N(e,g.Medium);break;case"longDate":i=N(e,g.Long);break;case"fullDate":i=N(e,g.Full);break;case"shortTime":i=k(e,g.Short);break;case"mediumTime":i=k(e,g.Medium);break;case"longTime":i=k(e,g.Long);break;case"fullTime":i=k(e,g.Full);break;case"short":let r=_(e,"shortTime"),s=_(e,"shortDate");i=U($(e,g.Short),[r,s]);break;case"medium":let o=_(e,"mediumTime"),u=_(e,"mediumDate");i=U($(e,g.Medium),[o,u]);break;case"long":let F=_(e,"longTime"),S=_(e,"longDate");i=U($(e,g.Long),[F,S]);break;case"full":let E=_(e,"fullTime"),v=_(e,"fullDate");i=U($(e,g.Full),[E,v]);break}return i&&(x[n][t]=i),i}function U(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(n,i){return t!=null&&i in t?t[i]:n})),e}function C(e,t,n="-",i,r){let s="";(e<0||r&&e<=0)&&(r?e=-e+1:(e=-e,s=n));let o=String(e);for(;o.length<t;)o="0"+o;return i&&(o=o.slice(o.length-t)),s+o}function Ze(e,t){return C(e,3).substring(0,t)}function f(e,t,n=0,i=!1,r=!1){return function(s,o){let u=Ke(e,s);if((n>0||u>-n)&&(u+=n),e===c.Hours)u===0&&n===-12&&(u=12);else if(e===c.FractionalSeconds)return Ze(u,t);let F=H(o,b.MinusSign);return C(u,t,F,i,r)}}function Ke(e,t){switch(e){case c.FullYear:return t.getFullYear();case c.Month:return t.getMonth();case c.Date:return t.getDate();case c.Hours:return t.getHours();case c.Minutes:return t.getMinutes();case c.Seconds:return t.getSeconds();case c.FractionalSeconds:return t.getMilliseconds();case c.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function l(e,t,n=D.Format,i=!1){return function(r,s){return qe(r,s,e,t,n,i)}}function qe(e,t,n,i,r,s){switch(n){case a.Months:return je(t,r,i)[e.getMonth()];case a.Days:return ze(t,r,i)[e.getDay()];case a.DayPeriods:let o=e.getHours(),u=e.getMinutes();if(s){let S=Ge(t),E=He(t,r,i),v=S.findIndex(O=>{if(Array.isArray(O)){let[Y,T]=O,se=o>=Y.hours&&u>=Y.minutes,oe=o<T.hours||o===T.hours&&u<T.minutes;if(Y.hours<T.hours){if(se&&oe)return!0}else if(se||oe)return!0}else if(O.hours===o&&O.minutes===u)return!0;return!1});if(v!==-1)return E[v]}return Ue(t,r,i)[o<12?0:1];case a.Eras:return Ve(t,i)[e.getFullYear()<=0?0:1];default:let F=n;throw new Error(`unexpected translation type ${F}`)}}function z(e){return function(t,n,i){let r=-1*i,s=H(n,b.MinusSign),o=r>0?Math.floor(r/60):Math.ceil(r/60);switch(e){case A.Short:return(r>=0?"+":"")+C(o,2,s)+C(Math.abs(r%60),2,s);case A.ShortGMT:return"GMT"+(r>=0?"+":"")+C(o,1,s);case A.Long:return"GMT"+(r>=0?"+":"")+C(o,2,s)+":"+C(Math.abs(r%60),2,s);case A.Extended:return i===0?"Z":(r>=0?"+":"")+C(o,2,s)+":"+C(Math.abs(r%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}var Xe=0,V=4;function Qe(e){let t=G(e,Xe,1).getDay();return G(e,0,1+(t<=V?V:V+7)-t)}function ve(e){let t=e.getDay(),n=t===0?-3:V-t;return G(e.getFullYear(),e.getMonth(),e.getDate()+n)}function J(e,t=!1){return function(n,i){let r;if(t){let s=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,o=n.getDate();r=1+Math.floor((o+s)/7)}else{let s=ve(n),o=Qe(s.getFullYear()),u=s.getTime()-o.getTime();r=1+Math.round(u/6048e5)}return C(r,e,H(i,b.MinusSign))}}function j(e,t=!1){return function(n,i){let s=ve(n).getFullYear();return C(s,e,H(i,b.MinusSign),t)}}var ee={};function Je(e){if(ee[e])return ee[e];let t;switch(e){case"G":case"GG":case"GGG":t=l(a.Eras,d.Abbreviated);break;case"GGGG":t=l(a.Eras,d.Wide);break;case"GGGGG":t=l(a.Eras,d.Narrow);break;case"y":t=f(c.FullYear,1,0,!1,!0);break;case"yy":t=f(c.FullYear,2,0,!0,!0);break;case"yyy":t=f(c.FullYear,3,0,!1,!0);break;case"yyyy":t=f(c.FullYear,4,0,!1,!0);break;case"Y":t=j(1);break;case"YY":t=j(2,!0);break;case"YYY":t=j(3);break;case"YYYY":t=j(4);break;case"M":case"L":t=f(c.Month,1,1);break;case"MM":case"LL":t=f(c.Month,2,1);break;case"MMM":t=l(a.Months,d.Abbreviated);break;case"MMMM":t=l(a.Months,d.Wide);break;case"MMMMM":t=l(a.Months,d.Narrow);break;case"LLL":t=l(a.Months,d.Abbreviated,D.Standalone);break;case"LLLL":t=l(a.Months,d.Wide,D.Standalone);break;case"LLLLL":t=l(a.Months,d.Narrow,D.Standalone);break;case"w":t=J(1);break;case"ww":t=J(2);break;case"W":t=J(1,!0);break;case"d":t=f(c.Date,1);break;case"dd":t=f(c.Date,2);break;case"c":case"cc":t=f(c.Day,1);break;case"ccc":t=l(a.Days,d.Abbreviated,D.Standalone);break;case"cccc":t=l(a.Days,d.Wide,D.Standalone);break;case"ccccc":t=l(a.Days,d.Narrow,D.Standalone);break;case"cccccc":t=l(a.Days,d.Short,D.Standalone);break;case"E":case"EE":case"EEE":t=l(a.Days,d.Abbreviated);break;case"EEEE":t=l(a.Days,d.Wide);break;case"EEEEE":t=l(a.Days,d.Narrow);break;case"EEEEEE":t=l(a.Days,d.Short);break;case"a":case"aa":case"aaa":t=l(a.DayPeriods,d.Abbreviated);break;case"aaaa":t=l(a.DayPeriods,d.Wide);break;case"aaaaa":t=l(a.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":t=l(a.DayPeriods,d.Abbreviated,D.Standalone,!0);break;case"bbbb":t=l(a.DayPeriods,d.Wide,D.Standalone,!0);break;case"bbbbb":t=l(a.DayPeriods,d.Narrow,D.Standalone,!0);break;case"B":case"BB":case"BBB":t=l(a.DayPeriods,d.Abbreviated,D.Format,!0);break;case"BBBB":t=l(a.DayPeriods,d.Wide,D.Format,!0);break;case"BBBBB":t=l(a.DayPeriods,d.Narrow,D.Format,!0);break;case"h":t=f(c.Hours,1,-12);break;case"hh":t=f(c.Hours,2,-12);break;case"H":t=f(c.Hours,1);break;case"HH":t=f(c.Hours,2);break;case"m":t=f(c.Minutes,1);break;case"mm":t=f(c.Minutes,2);break;case"s":t=f(c.Seconds,1);break;case"ss":t=f(c.Seconds,2);break;case"S":t=f(c.FractionalSeconds,1);break;case"SS":t=f(c.FractionalSeconds,2);break;case"SSS":t=f(c.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=z(A.Short);break;case"ZZZZZ":t=z(A.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=z(A.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=z(A.Long);break;default:return null}return ee[e]=t,t}function Ie(e,t){e=e.replace(/:/g,"");let n=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(n)?t:n}function et(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function tt(e,t,n){let i=n?-1:1,r=e.getTimezoneOffset(),s=Ie(t,r);return et(e,i*(s-r))}function nt(e){if(me(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[r,s=1,o=1]=e.split("-").map(u=>+u);return G(r,s-1,o)}let n=parseFloat(e);if(!isNaN(e-n))return new Date(n);let i;if(i=e.match(Ye))return it(i)}let t=new Date(e);if(!me(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function it(e){let t=new Date(0),n=0,i=0,r=e[8]?t.setUTCFullYear:t.setFullYear,s=e[8]?t.setUTCHours:t.setHours;e[9]&&(n=Number(e[9]+e[10]),i=Number(e[9]+e[11])),r.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let o=Number(e[4]||0)-n,u=Number(e[5]||0)-i,F=Number(e[6]||0),S=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return s.call(t,o,u,F,S),t}function me(e){return e instanceof Date&&!isNaN(e.valueOf())}function Kt(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let i=n.indexOf("="),[r,s]=i==-1?[n,""]:[n.slice(0,i),n.slice(i+1)];if(r.trim()===t)return decodeURIComponent(s)}return null}var te=/\s+/,Fe=[],qt=(()=>{class e{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=Fe,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(te):Fe}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(te):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let r=this.stateMap.get(n);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],r=n[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(te).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static{this.\u0275fac=function(i){return new(i||e)(w(Z),w(q))}}static{this.\u0275dir=B({type:e,selectors:[["","ngClass",""]],inputs:{klass:[ce.None,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return e})();var ne=class{constructor(t,n,i,r){this.$implicit=t,this.ngForOf=n,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Xt=(()=>{class e{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,i,r){this._viewContainer=n,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let i=this._viewContainer;n.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new ne(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let u=i.get(s);i.move(u,o),Ce(u,r)}});for(let r=0,s=i.length;r<s;r++){let u=i.get(r).context;u.index=r,u.count=s,u.ngForOf=this._ngForOf}n.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);Ce(s,r)})}static ngTemplateContextGuard(n,i){return!0}static{this.\u0275fac=function(i){return new(i||e)(w(P),w(K),w(fe))}}static{this.\u0275dir=B({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return e})();function Ce(e,t){e.context.$implicit=t.item}var Qt=(()=>{class e{constructor(n,i){this._viewContainer=n,this._context=new ie,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){ye("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){ye("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}static{this.\u0275fac=function(i){return new(i||e)(w(P),w(K))}}static{this.\u0275dir=B({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return e})(),ie=class{constructor(){this.$implicit=null,this.ngIf=null}};function ye(e,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${ue(t)}'.`)}var Jt=(()=>{class e{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(n,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static{this.\u0275fac=function(i){return new(i||e)(w(P))}}static{this.\u0275dir=B({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[le]})}}return e})();var en=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=ae({})}}return e})(),rt="browser",st="server";function tn(e){return e===rt}function nn(e){return e===st}var Ee=class{};var y=function(e){return e[e.State=0]="State",e[e.Transition=1]="Transition",e[e.Sequence=2]="Sequence",e[e.Group=3]="Group",e[e.Animate=4]="Animate",e[e.Keyframes=5]="Keyframes",e[e.Style=6]="Style",e[e.Trigger=7]="Trigger",e[e.Reference=8]="Reference",e[e.AnimateChild=9]="AnimateChild",e[e.AnimateRef=10]="AnimateRef",e[e.Query=11]="Query",e[e.Stagger=12]="Stagger",e}(y||{}),on="*";function un(e,t){return{type:y.Trigger,name:e,definitions:t,options:{}}}function an(e,t=null){return{type:y.Animate,styles:t,timings:e}}function cn(e,t=null){return{type:y.Group,steps:e,options:t}}function dn(e,t=null){return{type:y.Sequence,steps:e,options:t}}function ln(e){return{type:y.Style,styles:e,offset:null}}function hn(e,t,n){return{type:y.State,name:e,styles:t,options:n}}function fn(e){return{type:y.Keyframes,steps:e}}function Dn(e,t,n=null){return{type:y.Transition,expr:e,animation:t,options:n}}function gn(e=null){return{type:y.AnimateChild,options:e}}function pn(e,t,n=null){return{type:y.Query,selector:e,animation:t,options:n}}var Le=class{constructor(t=0,n=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=t+n}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let n=t=="start"?this._onStartFns:this._onDoneFns;n.forEach(i=>i()),n.length=0}},Me=class{constructor(t){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;let n=0,i=0,r=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++n==s&&this._onFinish()}),o.onDestroy(()=>{++i==s&&this._onDestroy()}),o.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,u)=>Math.max(o,u.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let n=t*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,n/i.totalTime):1;i.setPosition(r)})}getPosition(){let t=this.players.reduce((n,i)=>n===null||i.totalTime>n.totalTime?i:n,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let n=t=="start"?this._onStartFns:this._onDoneFns;n.forEach(i=>i()),n.length=0}},mn="!";export{X as a,Wt as b,De as c,_e as d,re as e,Pe as f,Zt as g,Kt as h,qt as i,Xt as j,Qt as k,Jt as l,en as m,rt as n,tn as o,nn as p,Ee as q,y as r,on as s,un as t,an as u,cn as v,dn as w,ln as x,hn as y,fn as z,Dn as A,gn as B,pn as C,Le as D,Me as E,mn as F};