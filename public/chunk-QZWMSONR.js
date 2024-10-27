import{k as Q,l as ee,m as te,n as P,o as ne,p as se,q as re,r as oe,s as ie,t as $}from"./chunk-4TCFWNX2.js";import{e as D}from"./chunk-52PAEBTB.js";var fe="firebasestorage.googleapis.com",_e="storageBucket",Pe=2*60*1e3,Se=10*60*1e3;var l=class e extends te{constructor(t,n,s=0){super(z(t),`Firebase Storage: ${n} (${z(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,e.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return z(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}},h=function(e){return e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment",e}(h||{});function z(e){return"storage/"+e}function K(){let e="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,e)}function xe(e){return new l(h.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ne(e){return new l(h.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ce(){let e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l(h.UNAUTHENTICATED,e)}function ve(){return new l(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function De(e){return new l(h.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Le(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Be(){return new l(h.CANCELED,"User canceled the upload/download.")}function qe(e){return new l(h.INVALID_URL,"Invalid URL '"+e+"'.")}function Me(e){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Fe(){return new l(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_e+"' property when initializing the app?")}function He(){return new l(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $e(){return new l(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ze(e){return new l(h.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function j(e){return new l(h.INVALID_ARGUMENT,e)}function pe(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function je(e){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(e,t){return new l(h.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function S(e){throw new l(h.INTERNAL_ERROR,"Internal error: "+e)}var b=class e{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){let t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=e.makeFromUrl(t,n)}catch{return new e(t,"")}if(s.path==="")return s;throw Me(t)}static makeFromUrl(t,n){let s=null,r="([A-Za-z0-9.\\-_]+)";function o(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}let i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),u={bucket:1,path:3};function c(_){_.path_=decodeURIComponent(_.path)}let p="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",R=new RegExp(`^https?://${g}/${p}/b/${r}/o${m}`,"i"),T={bucket:1,path:3},E=n===fe?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",U=new RegExp(`^https?://${E}/${r}/${f}`,"i"),k=[{regex:a,indices:u,postModify:o},{regex:R,indices:T,postModify:c},{regex:U,indices:{bucket:1,path:2},postModify:c}];for(let _=0;_<k.length;_++){let v=k[_],F=v.regex.exec(t);if(F){let Ie=F[v.indices.bucket],H=F[v.indices.path];H||(H=""),s=new e(Ie,H),v.postModify(s);break}}if(s==null)throw qe(t);return s}},G=class{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}};function Ge(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function u(){return a===2}let c=!1;function p(...f){c||(c=!0,t.apply(null,f))}function g(f){r=setTimeout(()=>{r=null,e(R,u())},f)}function m(){o&&clearTimeout(o)}function R(f,...U){if(c){m();return}if(f){m(),p.call(null,f,...U);return}if(u()||i){m(),p.call(null,f,...U);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,g(k)}let T=!1;function E(f){T||(T=!0,m(),!c&&(r!==null?(f||(a=2),clearTimeout(r),g(0)):f||(a=1)))}return g(0),o=setTimeout(()=>{i=!0,E(!0)},n),E}function We(e){e(!1)}function Ve(e){return e!==void 0}function Xe(e){return typeof e=="object"&&!Array.isArray(e)}function Y(e){return typeof e=="string"||e instanceof String}function ae(e){return Z()&&e instanceof Blob}function Z(){return typeof Blob<"u"}function ue(e,t,n,s){if(s<t)throw j(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw j(`Invalid value for '${e}'. Expected ${n} or less.`)}function J(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function me(e){let t=encodeURIComponent,n="?";for(let s in e)if(e.hasOwnProperty(s)){let r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var O=function(e){return e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT",e}(O||{});function Ke(e,t){let n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}var W=class{constructor(t,n,s,r,o,i,a,u,c,p,g,m=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=p,this.connectionFactory_=g,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,T)=>{this.resolve_=R,this.reject_=T,this.start_()})}start_(){let t=(s,r)=>{if(r){s(!1,new A(!1,null,!0));return}let o=this.connectionFactory_();this.pendingConnection_=o;let i=a=>{let u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;let a=o.getErrorCode()===O.NO_ERROR,u=o.getStatus();if(!a||Ke(u,this.additionalRetryCodes_)&&this.retry){let p=o.getErrorCode()===O.ABORT;s(!1,new A(!1,null,p));return}let c=this.successCodes_.indexOf(u)!==-1;s(!0,new A(c,o))})},n=(s,r)=>{let o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{let u=this.callback_(a,a.getResponse());Ve(u)?o(u):o()}catch(u){i(u)}else if(a!==null){let u=K();u.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,u)):i(u)}else if(r.canceled){let u=this.appDelete_?pe():Be();i(u)}else{let u=Le();i(u)}};this.canceled_?n(!1,new A(!1,null,!0)):this.backoffId_=Ge(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&We(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}},A=class{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}};function Ye(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Ze(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Je(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Qe(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function et(e,t,n,s,r,o,i=!0){let a=me(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return Je(c,t),Ye(c,n),Ze(c,o),Qe(c,s),new W(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}function tt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nt(...e){let t=tt();if(t!==void 0){let n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(Z())return new Blob(e);throw new l(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function st(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}function rt(e){if(typeof atob>"u")throw ze("base-64");return atob(e)}var w={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},N=class{constructor(t,n){this.data=t,this.contentType=n||null}};function ot(e,t){switch(e){case w.RAW:return new N(ge(t));case w.BASE64:case w.BASE64URL:return new N(be(e,t));case w.DATA_URL:return new N(at(t),ut(t))}throw K()}function ge(e){let t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{let o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function it(e){let t;try{t=decodeURIComponent(e)}catch{throw x(w.DATA_URL,"Malformed data URL.")}return ge(t)}function be(e,t){switch(e){case w.BASE64:{let r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw x(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case w.BASE64URL:{let r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw x(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rt(t)}catch(r){throw r.message.includes("polyfill")?r:x(e,"Invalid character found")}let s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}var B=class{constructor(t){this.base64=!1,this.contentType=null;let n=t.match(/^data:([^,]+)?,/);if(n===null)throw x(w.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let s=n[1]||null;s!=null&&(this.base64=ct(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}};function at(e){let t=new B(e);return t.base64?be(w.BASE64,t.rest):it(t.rest)}function ut(e){return new B(e).contentType}function ct(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}var q=class e{constructor(t,n){let s=0,r="";ae(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(ae(this.data_)){let s=this.data_,r=st(s,t,n);return r===null?null:new e(r)}else{let s=new Uint8Array(this.data_.buffer,t,n-t);return new e(s,!0)}}static getBlob(...t){if(Z()){let n=t.map(s=>s instanceof e?s.data_:s);return new e(nt.apply(null,n))}else{let n=t.map(i=>Y(i)?ot(w.RAW,i).data:i.data_),s=0;n.forEach(i=>{s+=i.byteLength});let r=new Uint8Array(s),o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)r[o++]=i[a]}),new e(r,!0)}}uploadData(){return this.data_}};function Re(e){let t;try{t=JSON.parse(e)}catch{return null}return Xe(t)?t:null}function lt(e){if(e.length===0)return null;let t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function ht(e,t){let n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Te(e){let t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}function dt(e,t){return t}var d=class{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||dt}},L=null;function ft(e){return!Y(e)||e.length<2?e:Te(e)}function ke(){if(L)return L;let e=[];e.push(new d("bucket")),e.push(new d("generation")),e.push(new d("metageneration")),e.push(new d("name","fullPath",!0));function t(o,i){return ft(i)}let n=new d("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}let r=new d("size");return r.xform=s,e.push(r),e.push(new d("timeCreated")),e.push(new d("updated")),e.push(new d("md5Hash",null,!0)),e.push(new d("cacheControl",null,!0)),e.push(new d("contentDisposition",null,!0)),e.push(new d("contentEncoding",null,!0)),e.push(new d("contentLanguage",null,!0)),e.push(new d("contentType",null,!0)),e.push(new d("metadata","customMetadata",!0)),L=e,L}function _t(e,t){function n(){let s=e.bucket,r=e.fullPath,o=new b(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function pt(e,t,n){let s={};s.type="file";let r=n.length;for(let o=0;o<r;o++){let i=n[o];s[i.local]=i.xform(s,t[i.server])}return _t(s,e),s}function we(e,t,n){let s=Re(t);return s===null?null:pt(e,s,n)}function mt(e,t,n,s){let r=Re(t);if(r===null||!Y(r.downloadTokens))return null;let o=r.downloadTokens;if(o.length===0)return null;let i=encodeURIComponent;return o.split(",").map(c=>{let p=e.bucket,g=e.fullPath,m="/b/"+i(p)+"/o/"+i(g),R=J(m,n,s),T=me({alt:"media",token:c});return R+T})[0]}function gt(e,t){let n={},s=t.length;for(let r=0;r<s;r++){let o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}var M=class{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};function ye(e){if(!e)throw K()}function bt(e,t){function n(s,r){let o=we(e,r,t);return ye(o!==null),o}return n}function Rt(e,t){function n(s,r){let o=we(e,r,t);return ye(o!==null),mt(o,r,e.host,e._protocol)}return n}function Ee(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ve():r=Ce():n.getStatus()===402?r=Ne(e.bucket):n.getStatus()===403?r=De(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Tt(e){let t=Ee(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=xe(e.path)),o.serverResponse=r.serverResponse,o}return n}function kt(e,t,n){let s=t.fullServerUrl(),r=J(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new M(r,o,Rt(e,n),i);return a.errorHandler=Tt(t),a}function wt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function yt(e,t,n){let s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=wt(null,t)),s}function Et(e,t,n,s,r){let o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let _=0;_<2;_++)k=k+Math.random().toString().slice(2);return k}let u=a();i["Content-Type"]="multipart/related; boundary="+u;let c=yt(t,s,r),p=gt(c,n),g="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",R=q.getBlob(g,s,m);if(R===null)throw He();let T={name:c.fullPath},E=J(o,e.host,e._protocol),f="POST",U=e.maxUploadRetryTime,y=new M(E,f,bt(e,n),U);return y.urlParams=T,y.headers=i,y.body=R.uploadData(),y.errorHandler=Ee(t),y}var qt=256*1024;var ce=null,V=class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=O.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=O.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=O.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw S("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(let o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw S("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw S("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw S("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw S("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}},X=class extends V{initXhr(){this.xhr_.responseType="text"}};function Ue(){return ce?ce():new X}var I=class e{constructor(t,n){this._service=t,n instanceof b?this._location=n:this._location=b.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new e(t,n)}get root(){let t=new b(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Te(this._location.path)}get storage(){return this._service}get parent(){let t=lt(this._location.path);if(t===null)return null;let n=new b(this._location.bucket,t);return new e(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw je(t)}};function Ut(e,t,n){e._throwIfRoot("uploadBytes");let s=Et(e.storage,e._location,ke(),new q(t,!0),n);return e.storage.makeRequestWithTokens(s,Ue).then(r=>({metadata:r,ref:e}))}function At(e){e._throwIfRoot("getDownloadURL");let t=kt(e.storage,e._location,ke());return e.storage.makeRequestWithTokens(t,Ue).then(n=>{if(n===null)throw $e();return n})}function Ot(e,t){let n=ht(e._location.path,t),s=new b(e._location.bucket,n);return new I(e.storage,s)}function It(e){return/^[A-Za-z]+:\/\//.test(e)}function Pt(e,t){return new I(e,t)}function Ae(e,t){if(e instanceof C){let n=e;if(n._bucket==null)throw Fe();let s=new I(n,n._bucket);return t!=null?Ae(s,t):s}else return t!==void 0?Ot(e,t):e}function St(e,t){if(t&&It(t)){if(e instanceof C)return Pt(e,t);throw j("To use ref(service, url), the first argument must be a Storage instance.")}else return Ae(e,t)}function le(e,t){let n=t?.[_e];return n==null?null:b.makeFromBucketSpec(n,e)}function xt(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";let{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:ee(r,e.app.options.projectId))}var C=class{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=fe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Pe,this._maxUploadRetryTime=Se,this._requests=new Set,r!=null?this._bucket=b.makeFromBucketSpec(r,this._host):this._bucket=le(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=b.makeFromBucketSpec(this._url,t):this._bucket=le(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ue("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ue("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}_getAuthToken(){return D(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;let t=this._authProvider.getImmediate({optional:!0});if(t){let n=yield t.getToken();if(n!==null)return n.accessToken}return null})}_getAppCheckToken(){return D(this,null,function*(){let t=this._appCheckProvider.getImmediate({optional:!0});return t?(yield t.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new I(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new G(pe());{let i=et(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}makeRequestWithTokens(t,n){return D(this,null,function*(){let[s,r]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()})}},he="@firebase/storage",de="0.13.2";var Oe="storage";function Mt(e,t,n){return e=P(e),Ut(e,t,n)}function Ft(e){return e=P(e),At(e)}function Ht(e,t){return e=P(e),St(e,t)}function $t(e=ie(),t){e=P(e);let s=re(e,Oe).getImmediate({identifier:t}),r=Q("storage");return r&&Nt(s,...r),s}function Nt(e,t,n,s={}){xt(e,t,n,s)}function Ct(e,{instanceIdentifier:t}){let n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new C(n,s,r,t,oe)}function vt(){se(new ne(Oe,Ct,"PUBLIC").setMultipleInstances(!0)),$(he,de,""),$(he,de,"esm2017")}vt();export{Mt as a,Ft as b,Ht as c,$t as d};
