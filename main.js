var Mr=Object.create;var Mt=Object.defineProperty;var Br=Object.getOwnPropertyDescriptor;var Rr=Object.getOwnPropertyNames;var Dr=Object.getPrototypeOf,qr=Object.prototype.hasOwnProperty;var Un=(n,e)=>{for(var t in e)Mt(n,t,{get:e[t],enumerable:!0})},Vn=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Rr(e))!qr.call(n,i)&&i!==t&&Mt(n,i,{get:()=>e[i],enumerable:!(s=Br(e,i))||s.enumerable});return n};var Fr=(n,e,t)=>(t=n!=null?Mr(Dr(n)):{},Vn(e||!n||!n.__esModule?Mt(t,"default",{value:n,enumerable:!0}):t,n)),$r=n=>Vn(Mt({},"__esModule",{value:!0}),n);var oa={};Un(oa,{default:()=>Ds});module.exports=$r(oa);function Wn(n,e,t,s,i,r,o){n.emit("generateNode",e,t,s,i,r,o)}function jn(n,e){n.on("showNotice",e)}function Hn(n,e){n.on("updateNodeText",e)}function Yn(n,e){n.on("createNode",async(t,s,i,r,o,a,c)=>{try{let l=await e(t,s,i,r,o,a);c(l)}catch(l){console.error("[createNode] Handler error:",l),c({message:l instanceof Error?l.message:"Unknown error"})}})}function zn(n,e){n.on("log",e)}function Gn(n,e){n.on("deleteEdge",e)}function Jn(n,e){n.on("addEdge",e)}function Qn(n,e){n.on("setNodeStatus",e)}function Xn(n,e){n.on("setNodeColor",e)}function Zn(n,e){n.on("deleteNode",e)}function ei(n,e){n.on("searchNoteInVault",async(t,s)=>{try{let i=await e(t);s(i)}catch(i){console.error("[searchNoteInVault] Handler error:",i),s({message:i instanceof Error?i.message:"Unknown error"})}})}var P=require("obsidian");var J=Object.create(null);J.open="0";J.close="1";J.ping="2";J.pong="3";J.message="4";J.upgrade="5";J.noop="6";var et=Object.create(null);Object.keys(J).forEach(n=>{et[J[n]]=n});var tt={type:"error",data:"parser error"};var ni=typeof Blob=="function"||typeof Blob!="undefined"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ii=typeof ArrayBuffer=="function",ri=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,st=({type:n,data:e},t,s)=>ni&&e instanceof Blob?t?s(e):ti(e,s):ii&&(e instanceof ArrayBuffer||ri(e))?t?s(e):ti(new Blob([e]),s):s(J[n]+(e||"")),ti=(n,e)=>{let t=new FileReader;return t.onload=function(){let s=t.result.split(",")[1];e("b"+(s||""))},t.readAsDataURL(n)};function si(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}var qs;function oi(n,e){if(ni&&n.data instanceof Blob)return n.data.arrayBuffer().then(si).then(e);if(ii&&(n.data instanceof ArrayBuffer||ri(n.data)))return e(si(n.data));st(n,!1,t=>{qs||(qs=new TextEncoder),e(qs.encode(t))})}var ai="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",nt=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(let n=0;n<ai.length;n++)nt[ai.charCodeAt(n)]=n;var ci=n=>{let e=n.length*.75,t=n.length,s,i=0,r,o,a,c;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);let l=new ArrayBuffer(e),u=new Uint8Array(l);for(s=0;s<t;s+=4)r=nt[n.charCodeAt(s)],o=nt[n.charCodeAt(s+1)],a=nt[n.charCodeAt(s+2)],c=nt[n.charCodeAt(s+3)],u[i++]=r<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|c&63;return l};var Kr=typeof ArrayBuffer=="function",it=(n,e)=>{if(typeof n!="string")return{type:"message",data:li(n,e)};let t=n.charAt(0);return t==="b"?{type:"message",data:Ur(n.substring(1),e)}:et[t]?n.length>1?{type:et[t],data:n.substring(1)}:{type:et[t]}:tt},Ur=(n,e)=>{if(Kr){let t=ci(n);return li(t,e)}else return{base64:!0,data:n}},li=(n,e)=>{switch(e){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}};var ui="",fi=(n,e)=>{let t=n.length,s=new Array(t),i=0;n.forEach((r,o)=>{st(r,!1,a=>{s[o]=a,++i===t&&e(s.join(ui))})})},di=(n,e)=>{let t=n.split(ui),s=[];for(let i=0;i<t.length;i++){let r=it(t[i],e);if(s.push(r),r.type==="error")break}return s};function hi(){return new TransformStream({transform(n,e){oi(n,t=>{let s=t.length,i;if(s<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,s);else if(s<65536){i=new Uint8Array(3);let r=new DataView(i.buffer);r.setUint8(0,126),r.setUint16(1,s)}else{i=new Uint8Array(9);let r=new DataView(i.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(s))}n.data&&typeof n.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}var Fs;function Bt(n){return n.reduce((e,t)=>e+t.length,0)}function Rt(n,e){if(n[0].length===e)return n.shift();let t=new Uint8Array(e),s=0;for(let i=0;i<e;i++)t[i]=n[0][s++],s===n[0].length&&(n.shift(),s=0);return n.length&&s<n[0].length&&(n[0]=n[0].slice(s)),t}function pi(n,e){Fs||(Fs=new TextDecoder);let t=[],s=0,i=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(s===0){if(Bt(t)<1)break;let c=Rt(t,1);r=(c[0]&128)===128,i=c[0]&127,i<126?s=3:i===126?s=1:s=2}else if(s===1){if(Bt(t)<2)break;let c=Rt(t,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),s=3}else if(s===2){if(Bt(t)<8)break;let c=Rt(t,8),l=new DataView(c.buffer,c.byteOffset,c.length),u=l.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(tt);break}i=u*Math.pow(2,32)+l.getUint32(4),s=3}else{if(Bt(t)<i)break;let c=Rt(t,i);a.enqueue(it(r?c:Fs.decode(c),e)),s=0}if(i===0||i>n){a.enqueue(tt);break}}}})}var $s=4;function M(n){if(n)return Vr(n)}function Vr(n){for(var e in M.prototype)n[e]=M.prototype[e];return n}M.prototype.on=M.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};M.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};M.prototype.off=M.prototype.removeListener=M.prototype.removeAllListeners=M.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var s,i=0;i<t.length;i++)if(s=t[i],s===e||s.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+n],this};M.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(t){t=t.slice(0);for(var s=0,i=t.length;s<i;++s)t[s].apply(this,e)}return this};M.prototype.emitReserved=M.prototype.emit;M.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};M.prototype.hasListeners=function(n){return!!this.listeners(n).length};var he=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),V=typeof self!="undefined"?self:typeof window!="undefined"?window:Function("return this")(),mi="arraybuffer";function Dt(n,...e){return e.reduce((t,s)=>(n.hasOwnProperty(s)&&(t[s]=n[s]),t),{})}var Wr=V.setTimeout,jr=V.clearTimeout;function pe(n,e){e.useNativeTimers?(n.setTimeoutFn=Wr.bind(V),n.clearTimeoutFn=jr.bind(V)):(n.setTimeoutFn=V.setTimeout.bind(V),n.clearTimeoutFn=V.clearTimeout.bind(V))}var Hr=1.33;function gi(n){return typeof n=="string"?Yr(n):Math.ceil((n.byteLength||n.size)*Hr)}function Yr(n){let e=0,t=0;for(let s=0,i=n.length;s<i;s++)e=n.charCodeAt(s),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(s++,t+=4);return t}function qt(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function yi(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function wi(n){let e={},t=n.split("&");for(let s=0,i=t.length;s<i;s++){let r=t[s].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}var Ft=class extends Error{constructor(e,t,s){super(e),this.description=t,this.context=s,this.type="TransportError"}},me=class extends M{constructor(e){super(),this.writable=!1,pe(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,s){return super.emitReserved("error",new Ft(e,t,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){let t=it(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){let e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){let t=yi(e);return t.length?"?"+t:""}};var rt=class extends me{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";let t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let s=0;this._polling&&(s++,this.once("pollComplete",function(){--s||t()})),this.writable||(s++,this.once("drain",function(){--s||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){let t=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};di(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){let e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,fi(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=qt()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}};var bi=!1;try{bi=typeof XMLHttpRequest!="undefined"&&"withCredentials"in new XMLHttpRequest}catch(n){}var vi=bi;function zr(){}var Ks=class extends rt{constructor(e){if(super(e),typeof location!="undefined"){let t=location.protocol==="https:",s=location.port;s||(s=t?"443":"80"),this.xd=typeof location!="undefined"&&e.hostname!==location.hostname||s!==e.port}}doWrite(e,t){let s=this.request({method:"POST",data:e});s.on("success",t),s.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){let e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,s)=>{this.onError("xhr poll error",t,s)}),this.pollXhr=e}},ve=class n extends M{constructor(e,t,s){super(),this.createRequest=e,pe(this,s),this._opts=s,this._method=s.method||"GET",this._uri=t,this._data=s.data!==void 0?s.data:null,this._create()}_create(){var e;let t=Dt(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;let s=this._xhr=this.createRequest(t);try{s.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&s.setRequestHeader(i,this._opts.extraHeaders[i])}}catch(i){}if(this._method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(i){}try{s.setRequestHeader("Accept","*/*")}catch(i){}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(s),"withCredentials"in s&&(s.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(s.timeout=this._opts.requestTimeout),s.onreadystatechange=()=>{var i;s.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(s.getResponseHeader("set-cookie"))),s.readyState===4&&(s.status===200||s.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof s.status=="number"?s.status:0)},0))},s.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document!="undefined"&&(this._index=n.requestsCount++,n.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr=="undefined"||this._xhr===null)){if(this._xhr.onreadystatechange=zr,e)try{this._xhr.abort()}catch(t){}typeof document!="undefined"&&delete n.requests[this._index],this._xhr=null}}_onLoad(){let e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};ve.requestsCount=0;ve.requests={};if(typeof document!="undefined"){if(typeof attachEvent=="function")attachEvent("onunload",ki);else if(typeof addEventListener=="function"){let n="onpagehide"in V?"pagehide":"unload";addEventListener(n,ki,!1)}}function ki(){for(let n in ve.requests)ve.requests.hasOwnProperty(n)&&ve.requests[n].abort()}var Gr=function(){let n=Si({xdomain:!1});return n&&n.responseType!==null}(),ke=class extends Ks{constructor(e){super(e);let t=e&&e.forceBase64;this.supportsBinary=Gr&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ve(Si,this.uri(),e)}};function Si(n){let e=n.xdomain;try{if(typeof XMLHttpRequest!="undefined"&&(!e||vi))return new XMLHttpRequest}catch(t){}if(!e)try{return new V[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch(t){}}var Ci=typeof navigator!="undefined"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative",Vs=class extends me{get name(){return"websocket"}doOpen(){let e=this.uri(),t=this.opts.protocols,s=Ci?{}:Dt(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,s)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let s=e[t],i=t===e.length-1;st(s,this.supportsBinary,r=>{try{this.doWrite(s,r)}catch(o){}i&&he(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws!="undefined"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){let e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=qt()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}},Us=V.WebSocket||V.MozWebSocket,Se=class extends Vs{createSocket(e,t,s){return Ci?new Us(e,t,s):t?new Us(e,t):new Us(e)}doWrite(e,t){this.ws.send(t)}};var qe=class extends me{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{let t=pi(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(t).getReader(),i=hi();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();let r=()=>{s.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();let o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let s=e[t],i=t===e.length-1;this._writer.write(s).then(()=>{i&&he(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}};var Ws={websocket:Se,webtransport:qe,polling:ke};var Jr=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Qr=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Fe(n){if(n.length>8e3)throw"URI too long";let e=n,t=n.indexOf("["),s=n.indexOf("]");t!=-1&&s!=-1&&(n=n.substring(0,t)+n.substring(t,s).replace(/:/g,";")+n.substring(s,n.length));let i=Jr.exec(n||""),r={},o=14;for(;o--;)r[Qr[o]]=i[o]||"";return t!=-1&&s!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Xr(r,r.path),r.queryKey=Zr(r,r.query),r}function Xr(n,e){let t=/\/{2,9}/g,s=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function Zr(n,e){let t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,i,r){i&&(t[i]=r)}),t}var js=typeof addEventListener=="function"&&typeof removeEventListener=="function",$t=[];js&&addEventListener("offline",()=>{$t.forEach(n=>n())},!1);var Pe=class n extends M{constructor(e,t){if(super(),this.binaryType=mi,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){let s=Fe(e);t.hostname=s.host,t.secure=s.protocol==="https"||s.protocol==="wss",t.port=s.port,s.query&&(t.query=s.query)}else t.host&&(t.hostname=Fe(t.host).host);pe(this,t),this.secure=t.secure!=null?t.secure:typeof location!="undefined"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location!="undefined"?location.hostname:"localhost"),this.port=t.port||(typeof location!="undefined"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(s=>{let i=s.prototype.name;this.transports.push(i),this._transportsByName[i]=s}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=wi(this.opts.query)),js&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},$t.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){let t=Object.assign({},this.opts.query);t.EIO=$s,t.transport=e,this.id&&(t.sid=this.id);let s=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](s)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}let e=this.opts.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";let t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",n.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":let t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);let e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let s=0;s<this.writeBuffer.length;s++){let i=this.writeBuffer[s].data;if(i&&(t+=gi(i)),s>0&&t>this._maxPayload)return this.writeBuffer.slice(0,s);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;let e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,he(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,s){return this._sendPacket("message",e,t,s),this}send(e,t,s){return this._sendPacket("message",e,t,s),this}_sendPacket(e,t,s,i){if(typeof t=="function"&&(i=t,t=void 0),typeof s=="function"&&(i=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;let r={type:e,data:t,options:s};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){let e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},s=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}_onError(e){if(n.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),js&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){let s=$t.indexOf(this._offlineEventListener);s!==-1&&$t.splice(s,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}};Pe.protocol=$s;var Kt=class extends Pe{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),s=!1;Pe.priorWebsocketSuccess=!1;let i=()=>{s||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!s)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Pe.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{let h=new Error("probe error");h.transport=t.name,this.emitReserved("upgradeError",h)}}))};function r(){s||(s=!0,u(),t.close(),t=null)}let o=d=>{let h=new Error("probe error: "+d);h.transport=t.name,r(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function c(){o("socket closed")}function l(d){t&&d.name!==t.name&&r()}let u=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{s||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){let t=[];for(let s=0;s<e.length;s++)~this.transports.indexOf(e[s])&&t.push(e[s]);return t}},$e=class extends Kt{constructor(e,t={}){let s=typeof e=="object"?e:t;(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(i=>Ws[i]).filter(i=>!!i)),super(e,s)}};var hc=$e.protocol;function Ei(n,e="",t){let s=n;t=t||typeof location!="undefined"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t!="undefined"?n=t.protocol+"//"+n:n="https://"+n),s=Fe(n)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";let r=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+r+":"+s.port+e,s.href=s.protocol+"://"+r+(t&&t.port===s.port?"":":"+s.port),s}var Qs={};Un(Qs,{Decoder:()=>Gs,Encoder:()=>zs,PacketType:()=>_,protocol:()=>Ti});var to=typeof ArrayBuffer=="function",so=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,Ai=Object.prototype.toString,no=typeof Blob=="function"||typeof Blob!="undefined"&&Ai.call(Blob)==="[object BlobConstructor]",io=typeof File=="function"||typeof File!="undefined"&&Ai.call(File)==="[object FileConstructor]";function at(n){return to&&(n instanceof ArrayBuffer||so(n))||no&&n instanceof Blob||io&&n instanceof File}function ot(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,s=n.length;t<s;t++)if(ot(n[t]))return!0;return!1}if(at(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return ot(n.toJSON(),!0);for(let t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&ot(n[t]))return!0;return!1}function _i(n){let e=[],t=n.data,s=n;return s.data=Hs(t,e),s.attachments=e.length,{packet:s,buffers:e}}function Hs(n,e){if(!n)return n;if(at(n)){let t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){let t=new Array(n.length);for(let s=0;s<n.length;s++)t[s]=Hs(n[s],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){let t={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=Hs(n[s],e));return t}return n}function xi(n,e){return n.data=Ys(n.data,e),delete n.attachments,n}function Ys(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=Ys(n[t],e);else if(typeof n=="object")for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=Ys(n[t],e));return n}var ro=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Ti=5,_;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(_||(_={}));var zs=class{constructor(e){this.replacer=e}encode(e){return(e.type===_.EVENT||e.type===_.ACK)&&ot(e)?this.encodeAsBinary({type:e.type===_.EVENT?_.BINARY_EVENT:_.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===_.BINARY_EVENT||e.type===_.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){let t=_i(e),s=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(s),i}};function Ni(n){return Object.prototype.toString.call(n)==="[object Object]"}var Gs=class n extends M{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);let s=t.type===_.BINARY_EVENT;s||t.type===_.BINARY_ACK?(t.type=s?_.EVENT:_.ACK,this.reconstructor=new Js(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(at(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0,s={type:Number(e.charAt(0))};if(_[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===_.BINARY_EVENT||s.type===_.BINARY_ACK){let r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);let o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");s.attachments=Number(o)}if(e.charAt(t+1)==="/"){let r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););s.nsp=e.substring(r,t)}else s.nsp="/";let i=e.charAt(t+1);if(i!==""&&Number(i)==i){let r=t+1;for(;++t;){let o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}s.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){let r=this.tryParse(e.substr(t));if(n.isPayloadValid(s.type,r))s.data=r;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.reviver)}catch(t){return!1}}static isPayloadValid(e,t){switch(e){case _.CONNECT:return Ni(t);case _.DISCONNECT:return t===void 0;case _.CONNECT_ERROR:return typeof t=="string"||Ni(t);case _.EVENT:case _.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&ro.indexOf(t[0])===-1);case _.ACK:case _.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}},Js=class{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){let t=xi(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function H(n,e,t){return n.on(e,t),function(){n.off(e,t)}}var oo=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),Ke=class extends M{constructor(e,t,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let e=this.io;this.subs=[H(e,"open",this.onopen.bind(this)),H(e,"packet",this.onpacket.bind(this)),H(e,"error",this.onerror.bind(this)),H(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var s,i,r;if(oo.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;let o={type:_.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){let u=this.ids++,d=t.pop();this._registerAckCallback(u,d),o.id=u}let a=(i=(s=this.io.engine)===null||s===void 0?void 0:s.transport)===null||i===void 0?void 0:i.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var s;let i=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}let r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(r),t.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((s,i)=>{let r=(o,a)=>o?i(o):s(a);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());let s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...r)=>s!==this._queue[0]?void 0:(i!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...r)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;let t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:_.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(s=>String(s.id)===e)){let s=this.acks[e];delete this.acks[e],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case _.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case _.EVENT:case _.BINARY_EVENT:this.onevent(e);break;case _.ACK:case _.BINARY_ACK:this.onack(e);break;case _.DISCONNECT:this.ondisconnect();break;case _.CONNECT_ERROR:this.destroy();let s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){let t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){let t=this._anyListeners.slice();for(let s of t)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){let t=this,s=!1;return function(...i){s||(s=!0,t.packet({type:_.ACK,id:e,data:i}))}}onack(e){let t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:_.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){let t=this._anyListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){let t=this._anyOutgoingListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let t=this._anyOutgoingListeners.slice();for(let s of t)s.apply(this,e.data)}}};function Le(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}Le.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};Le.prototype.reset=function(){this.attempts=0};Le.prototype.setMin=function(n){this.ms=n};Le.prototype.setMax=function(n){this.max=n};Le.prototype.setJitter=function(n){this.jitter=n};var Ue=class extends M{constructor(e,t){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,pe(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((s=t.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new Le({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;let i=t.parser||Qs;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new $e(this.uri,this.opts);let t=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;let i=H(t,"open",function(){s.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=H(t,"error",r);if(this._timeout!==!1){let a=this._timeout,c=this.setTimeoutFn(()=>{i(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");let e=this.engine;this.subs.push(H(e,"ping",this.onping.bind(this)),H(e,"data",this.ondata.bind(this)),H(e,"error",this.onerror.bind(this)),H(e,"close",this.onclose.bind(this)),H(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){he(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new Ke(this,e,t),this.nsps[e]=s),s}_destroy(e){let t=Object.keys(this.nsps);for(let s of t)if(this.nsps[s].active)return;this._close()}_packet(e){let t=this.encoder.encode(e);for(let s=0;s<t.length;s++)this.engine.write(t[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var s;this.cleanup(),(s=this.engine)===null||s===void 0||s.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let t=this.backoff.duration();this._reconnecting=!0;let s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){let e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}};var ct={};function lt(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};let t=Ei(n,e.path||"/socket.io"),s=t.source,i=t.id,r=t.path,o=ct[i]&&r in ct[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o,c;return a?c=new Ue(s,e):(ct[i]||(ct[i]=new Ue(s,e)),c=ct[i]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(lt,{Manager:Ue,Socket:Ke,io:lt,connect:lt});var Oi=require("obsidian"),Ut=class extends Oi.Events{constructor(){super()}on(e,t){return super.on(e,t)}trigger(e,...t){return super.trigger(e,...t)}};var ut=n=>{let e=[];for(let t=0;t<n;t++)e.push((16*Math.random()|0).toString(16));return e.join("")};var Vt=async(n,e,t,s,i)=>{if(!n)return;let r=n.getData();r&&(n.importData({edges:[...r.edges,{...i,id:e,fromNode:t.node.id,fromSide:t.side,toNode:s.node.id,toSide:s.side}],nodes:r.nodes}),await n.requestFrame())};var ft=10,ao=5,Xs=250;function co(n,e,t){let s=Array.from(n.nodes.values());for(let i of s){let r=e.x-ft,o=e.x+e.width+ft,a=e.y-ft,c=e.y+e.height+ft,l=i.x,u=i.x+i.width,d=i.y,h=i.y+i.height,p=!(o<=l||r>=u),m=!(c<=d||a>=h);if(p&&m)return!0}return!1}function lo(n,e,t){let s=Array.from(n.nodes.values()),i=new Set((t==null?void 0:t.map(o=>o.id))||[]),r=0;for(let o of s){if(i.has(o.id))continue;let a={x:e.x+e.width/2,y:e.y+e.height/2},c={x:o.x+o.width/2,y:o.y+o.height/2},l=Math.sqrt(Math.pow(a.x-c.x,2)+Math.pow(a.y-c.y,2)),u=(e.width+o.width)/2+(e.height+o.height)/2+ft*2;l<u&&(r+=(u-l)/u*100)}return r}function uo(n){let e=(n%360+360)%360;return e>=315||e<45?"right":e>=45&&e<135?"bottom":e>=135&&e<225?"left":"top"}function fo(n,e,t,s){if(e.length===0)throw new Error("At least one parent node is required");let i=[],r=1,o=50,a=3;for(console.log(`Starting search with diameter: ${Math.round(Xs)}px, base radius: ${Math.round(Xs)}px`);i.length===0&&r<=o;){let l=[];for(let u=0;u<a&&r+u<=o;u++){let d=r+u,h=Xs*d;l.push(h)}console.log(`Searching batch ${r} with radii: ${l.map(u=>Math.round(u)).join(", ")}px`);for(let u of e){let d={x:u.x+u.width/2,y:u.y+u.height/2};for(let h of l)for(let p=0;p<360;p+=ao){let m=p*Math.PI/180,f=d.x+Math.cos(m)*h,g=d.y+Math.sin(m)*h,y={x:f-t/2,y:g-s/2,width:t,height:s};if(!co(n,y,e)){let w=lo(n,y,e),C=Math.sqrt(Math.pow(f-d.x,2)+Math.pow(g-d.y,2)),S={position:y,parentNode:u,side:uo(p),radius:h,angle:p,distanceFromParent:C,collisionScore:w};i.push(S)}}}if(r+=a,i.length>0){console.log(`Found ${i.length} candidate positions after ${r} radii checks`);break}}if(i.length===0)throw new Error(`No safe positions found even after checking ${r} radii (limit: ${o})`);i.sort((l,u)=>l.collisionScore!==u.collisionScore?l.collisionScore-u.collisionScore:l.radius!==u.radius?l.radius-u.radius:l.distanceFromParent-u.distanceFromParent);let c=i[0];return console.log(`Selected best position: radius=${Math.round(c.radius)}px, angle=${c.angle}\xB0, collision_score=${c.collisionScore.toFixed(2)}`),{position:c.position,bestParent:c.parentNode,side:c.side}}function ho(n,e,t){let s=Array.from(n.nodes.values());if(s.length===0)return{x:100,y:100,width:e,height:t};let i=-1/0,r=-1/0;return s.forEach(o=>{i=Math.max(i,o.x+o.width),r=Math.max(r,o.y+o.height)}),{x:i+100,y:r+100,width:e,height:t}}var Zs=async(n,e,t,s,i)=>{var m,f,g,y,w;if(console.log("createNode with new exhaustive algorithm",n,e,t,s,i),!e||e.length===0)throw new Error("At least one parent node is required");let r=(m=t==null?void 0:t.color)!=null?m:e[0].color,o=(g=(f=t==null?void 0:t.size)==null?void 0:f.width)!=null?g:300,a=(w=(y=t==null?void 0:t.size)==null?void 0:y.height)!=null?w:300,c;try{c=fo(n,e,o,a)}catch(C){console.error("Exhaustive search failed, using emergency positioning:",C),c={position:ho(n,o,a),bestParent:e[0],side:"right"}}let{position:l,bestParent:u,side:d}=c,h=n.createTextNode({pos:{x:l.x,y:l.y},size:{height:l.height,width:l.width},text:t==null?void 0:t.text,focus:!1});h.color=r,s&&h.setData(s),n.deselectAll(),n.addNode(h);let p=e.map(async C=>{let S=ut(16),k={x:C.x+C.width/2,y:C.y+C.height/2},A={x:h.x+h.width/2,y:h.y+h.height/2},L=A.x-k.x,b=A.y-k.y,I,O;Math.abs(L)>Math.abs(b)?L>0?(I="right",O="left"):(I="left",O="right"):b>0?(I="bottom",O="top"):(I="top",O="bottom");let $={...i,color:r};return await Vt(n,S,{side:I,node:C},{side:O,node:h},$),S});return await Promise.all(p),n.requestSave(),h};function po(n){var s,i;let t=n.workspace.getLeavesOfType("canvas").sort((r,o)=>o.activeTime-r.activeTime);for(let r of t)if(console.log("leaf",r),(i=(s=r.tabHeaderEl)==null?void 0:s.classList)!=null&&i.contains("is-active"))return r.view;return null}function mo(n,e){let t=n.workspace.getLeavesOfType("canvas");for(let s of t){let i=s.view;if(i.state){if(i.state.file===e)return i}else if(i.file.path===e)return i}return null}function Wt(n){var t;let e=po(n);return(t=e==null?void 0:e.canvas)!=null?t:null}function Ce(n,e){var s;let t=mo(n,e);return t?(n.workspace.setActiveLeaf(t.leaf),(s=t==null?void 0:t.canvas)!=null?s:null):null}function dt(n,e){let t=Object.keys(e).map(s=>go(n,s,e[s]));return t.length===1?t[0]:function(){t.forEach(s=>s())}}function go(n,e,t){let s=n[e],i=n.hasOwnProperty(e),r=i?s:function(){return Object.getPrototypeOf(n)[e].apply(this,arguments)},o=t(r);return s&&Object.setPrototypeOf(o,s),Object.setPrototypeOf(a,o),n[e]=a,c;function a(...l){return o===r&&n[e]===a&&c(),o.apply(this,l)}function c(){n[e]===a&&(i?n[e]=r:delete n[e]),o!==r&&(o=r,Object.setPrototypeOf(a,s||Function))}}var en=new WeakSet,Ii=new WeakSet,Pi=new WeakSet,jt=new WeakSet,yo=(n,e)=>{if(!e.menu)return!1;let t=e.menu.constructor.prototype;return Ii.has(t)||(n.register(dt(t,{render:s=>function(...i){let r=s.call(this,...i);if(this.menuEl.children.length===0||this.canvas.selection.size!==1)return r;let o=this.canvas.selection.values().next().value;return Object.prototype.hasOwnProperty.call(o,"path")||Object.prototype.hasOwnProperty.call(o,"bgPath")||n.events.trigger("canvas:node-menu",this,this.canvas,o),r}})),Ii.add(t)),!0},wo=(n,e)=>{if(en.has(e))return!0;let t=Object.getPrototypeOf(e);return n.register(dt(t,{addNode(s){return function(...i){return s.call(this,...i)}},addEdge:s=>function(...i){var r,o;return i[0].color=(o=(r=i[0].from)==null?void 0:r.node)==null?void 0:o.color,s.call(this,...i)},showCreationMenu:s=>function(...i){let r=i[0],o=i[1];return n.events.trigger("canvas:creation-menu",r,e,o),s.call(this,...i)}})),en.add(e),!0},bo=(n,e)=>e.nodes.size===0?(jt.has(e)||(vo(n,e),jt.add(e)),!1):Li(n,e),vo=(n,e)=>{if(!en.has(e)){let t=Object.getPrototypeOf(e);n.register(dt(t,{addNode(s){return function(...i){let r=s.call(this,...i);return jt.has(this)&&setTimeout(()=>{Li(n,this)&&jt.delete(this)},0),r}}}))}},Li=(n,e)=>{let t=e.nodes;if(t.size===0)return!1;let s=Object.getPrototypeOf(t.values().next().value);return Pi.has(s)||(n.register(dt(s,{render:i=>function(...r){let o=i.call(this,...r),a=this;return this.nodeEl.getAttribute("data-patched")!==null||this.nodeEl.setAttribute("data-patched","true"),o},showMenu:i=>function(...r){let o=r[0],a=this;return o.addSeparator(),o.addItem(c=>{c.setTitle("Split list to notes"),c.setIcon("lucide-list"),c.onClick(()=>{})}),i.call(this,...r)}})),Pi.add(s)),!0},tn=n=>{let e=n.app.workspace.getLeavesOfType("canvas");console.log("found",e.length,"canvas leaves");for(let t of e){let s=t.view.canvas;if(!s)continue;console.log("canvas",s);let i=yo(n,s),r=wo(n,s),o=bo(n,s)}return!0},Mi=()=>{console.log("cleaning up patches")};var on=require("obsidian");var ml=Fr(require("electron")),Gt=require("obsidian");function ko(n,e,t,s){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(s.next(u))}catch(d){o(d)}}function c(u){try{l(s.throw(u))}catch(d){o(d)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((s=s.apply(n,e||[])).next())})}var So=/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i,Bi="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36,gzip(gfe)",Co=/<text start="([^"]*)" dur="([^"]*)">([^<]*)<\/text>/g,Ee=class extends Error{constructor(e){super(`[YoutubeTranscript] \u{1F6A8} ${e}`)}},sn=class extends Ee{constructor(){super("YouTube is receiving too many requests from this IP and now requires solving a captcha to continue")}},nn=class extends Ee{constructor(e){super(`The video is no longer available (${e})`)}},Ht=class extends Ee{constructor(e){super(`Transcript is disabled on this video (${e})`)}},Yt=class extends Ee{constructor(e){super(`No transcripts are available for this video (${e})`)}},rn=class extends Ee{constructor(e,t,s){super(`No transcripts are available in ${e} this video (${s}). Available languages: ${t.join(", ")}`)}},zt=class{static fetchTranscript(e,t){var s;return ko(this,void 0,void 0,function*(){let i=this.retrieveVideoId(e),o=yield(yield fetch(`https://www.youtube.com/watch?v=${i}`,{headers:Object.assign(Object.assign({},(t==null?void 0:t.lang)&&{"Accept-Language":t.lang}),{"User-Agent":Bi})})).text(),a=o.split('"captions":');if(a.length<=1)throw o.includes('class="g-recaptcha"')?new sn:o.includes('"playabilityStatus":')?new Ht(e):new nn(e);let c=(s=(()=>{try{return JSON.parse(a[1].split(',"videoDetails')[0].replace(`
`,""))}catch(p){return}})())===null||s===void 0?void 0:s.playerCaptionsTracklistRenderer;if(!c)throw new Ht(e);if(!("captionTracks"in c))throw new Yt(e);if(t!=null&&t.lang&&!c.captionTracks.some(p=>p.languageCode===(t==null?void 0:t.lang)))throw new rn(t==null?void 0:t.lang,c.captionTracks.map(p=>p.languageCode),e);let l=(t!=null&&t.lang?c.captionTracks.find(p=>p.languageCode===(t==null?void 0:t.lang)):c.captionTracks[0]).baseUrl,u=yield fetch(l,{headers:Object.assign(Object.assign({},(t==null?void 0:t.lang)&&{"Accept-Language":t.lang}),{"User-Agent":Bi})});if(!u.ok)throw new Yt(e);return[...(yield u.text()).matchAll(Co)].map(p=>{var m;return{text:p[3],duration:parseFloat(p[2]),offset:parseFloat(p[1]),lang:(m=t==null?void 0:t.lang)!==null&&m!==void 0?m:c.captionTracks[0].languageCode}})})}static retrieveVideoId(e){if(e.length===11)return e;let t=e.match(So);if(t&&t.length)return t[1];throw new Ee("Impossible to retrieve Youtube video ID.")}};async function Ri(n){var t;let e=(t=n.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/))==null?void 0:t[1];if(!e)throw new Error("Failed to get YouTube ID");try{return(await zt.fetchTranscript(e)).reduce((i,r)=>i+r.text+`
`,"")}catch(s){return console.error("Error fetching YouTube transcript:",s),"Transcript service is currently unavailable. Please try again later."}}async function Eo(n,e,t){var i;let s=await n.vault.read(e);if(t){let r=n.metadataCache.getFileCache(e);if(r){let o=(0,Gt.resolveSubpath)(r,t);if(!o)return console.warn("Failed to get subpath",{file:e,subpath:t}),s;if(o.start||o.end){let a=s.slice(o.start.offset,(i=o.end)==null?void 0:i.offset);return a||(console.warn("Failed to get subpath",{file:e,subpath:t}),s)}}}return s}async function Ao(n){return await n.executeJavaScript("document.body.innerText")}async function _o(n){return await Ri(n)}async function Di(n){let e=n.app,t=n.getData();switch(t.type){case"text":return t.text;case"file":{let s=e.vault.getAbstractFileByPath(t.file);if(!s)return`ERROR when reading file ${t.file}, the file is not found, maybe it's deleted or moved`;if(s instanceof Gt.TFile){let i=await e.vault.read(s);return n.subpath?await Eo(e,s,t.subpath):`## ${s.basename}
${i}`}throw new Error("Failed to get file content")}case"link":{let s;if(t.url.includes("youtube.com"))s=await _o(t.url);else{let r=n.nodeEl.querySelector("webview");r&&(s=await Ao(r))}return s!=null?s:t.url}}}var Jt=n=>n.provider==="google",Qt=n=>n.provider==="bedrock",Xt=n=>n.provider==="openai",Zt=n=>n.provider==="anthropic";var qi=async(n,e,t,s,i,r)=>{let o=r.find(h=>h.modelId===i);if(!o){new on.Notice("Error: Active model not found. Please check plugin settings.");return}let a=s.getData(),c=[];for(let[h,p]of s.nodes){let m=await Di(p);c.push({id:h,position:{x:p.x,y:p.y},size:{width:p.width,height:p.height},text:m!=null?m:""})}let l={nodes:c,edges:a.edges.map(h=>{var p;return{label:(p=h.label)!=null?p:"",from:{nodeId:h.fromNode,side:h.fromSide},to:{nodeId:h.toNode,side:h.toSide}}})},u=Array.from(s.selection).map(h=>({nodeId:h.id})),d={modelName:o.modelId,provider:o.provider};Qt(o)&&(d.credentials={accessKeyId:o.accessKeyId,secretAccessKey:o.secretAccessKey,region:o.region}),Jt(o)&&(d.credentials={apiKey:o.apiKey}),Xt(o)&&(d.credentials={apiKey:o.apiKey}),Zt(o)&&(d.credentials={apiKey:o.apiKey});try{console.log("modelConfig",d),await Wn(n,s.view.file.path,u,l,e,t,d)}catch(h){new on.Notice("Failed to generate AI content: "+h)}};var es=Symbol.for("yaml.alias"),ts=Symbol.for("yaml.document"),Q=Symbol.for("yaml.map"),an=Symbol.for("yaml.pair"),Y=Symbol.for("yaml.scalar"),ge=Symbol.for("yaml.seq"),W=Symbol.for("yaml.node.type"),z=n=>!!n&&typeof n=="object"&&n[W]===es,oe=n=>!!n&&typeof n=="object"&&n[W]===ts,X=n=>!!n&&typeof n=="object"&&n[W]===Q,x=n=>!!n&&typeof n=="object"&&n[W]===an,E=n=>!!n&&typeof n=="object"&&n[W]===Y,Z=n=>!!n&&typeof n=="object"&&n[W]===ge;function T(n){if(n&&typeof n=="object")switch(n[W]){case Q:case ge:return!0}return!1}function N(n){if(n&&typeof n=="object")switch(n[W]){case es:case Q:case Y:case ge:return!0}return!1}var ss=n=>(E(n)||T(n))&&!!n.anchor;var j=Symbol("break visit"),Fi=Symbol("skip children"),ae=Symbol("remove node");function ce(n,e){let t=$i(e);oe(n)?Ve(null,n.contents,t,Object.freeze([n]))===ae&&(n.contents=null):Ve(null,n,t,Object.freeze([]))}ce.BREAK=j;ce.SKIP=Fi;ce.REMOVE=ae;function Ve(n,e,t,s){let i=Ki(n,e,t,s);if(N(i)||x(i))return Ui(n,s,i),Ve(n,i,t,s);if(typeof i!="symbol"){if(T(e)){s=Object.freeze(s.concat(e));for(let r=0;r<e.items.length;++r){let o=Ve(r,e.items[r],t,s);if(typeof o=="number")r=o-1;else{if(o===j)return j;o===ae&&(e.items.splice(r,1),r-=1)}}}else if(x(e)){s=Object.freeze(s.concat(e));let r=Ve("key",e.key,t,s);if(r===j)return j;r===ae&&(e.key=null);let o=Ve("value",e.value,t,s);if(o===j)return j;o===ae&&(e.value=null)}}return i}async function ns(n,e){let t=$i(e);oe(n)?await We(null,n.contents,t,Object.freeze([n]))===ae&&(n.contents=null):await We(null,n,t,Object.freeze([]))}ns.BREAK=j;ns.SKIP=Fi;ns.REMOVE=ae;async function We(n,e,t,s){let i=await Ki(n,e,t,s);if(N(i)||x(i))return Ui(n,s,i),We(n,i,t,s);if(typeof i!="symbol"){if(T(e)){s=Object.freeze(s.concat(e));for(let r=0;r<e.items.length;++r){let o=await We(r,e.items[r],t,s);if(typeof o=="number")r=o-1;else{if(o===j)return j;o===ae&&(e.items.splice(r,1),r-=1)}}}else if(x(e)){s=Object.freeze(s.concat(e));let r=await We("key",e.key,t,s);if(r===j)return j;r===ae&&(e.key=null);let o=await We("value",e.value,t,s);if(o===j)return j;o===ae&&(e.value=null)}}return i}function $i(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function Ki(n,e,t,s){var i,r,o,a,c;if(typeof t=="function")return t(n,e,s);if(X(e))return(i=t.Map)==null?void 0:i.call(t,n,e,s);if(Z(e))return(r=t.Seq)==null?void 0:r.call(t,n,e,s);if(x(e))return(o=t.Pair)==null?void 0:o.call(t,n,e,s);if(E(e))return(a=t.Scalar)==null?void 0:a.call(t,n,e,s);if(z(e))return(c=t.Alias)==null?void 0:c.call(t,n,e,s)}function Ui(n,e,t){let s=e[e.length-1];if(T(s))s.items[n]=t;else if(x(s))n==="key"?s.key=t:s.value=t;else if(oe(s))s.contents=t;else{let i=z(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}var xo={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},No=n=>n.replace(/[!,[\]{}]/g,e=>xo[e]),le=class n{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},n.defaultYaml,e),this.tags=Object.assign({},n.defaultTags,t)}clone(){let e=new n(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){let e=new n(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:n.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},n.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:n.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},n.defaultTags),this.atNextDocument=!1);let s=e.trim().split(/[ \t]+/),i=s.shift();switch(i){case"%TAG":{if(s.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),s.length<2))return!1;let[r,o]=s;return this.tags[r]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,s.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;let[r]=s;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{let o=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,o),!1}}default:return t(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){let o=e.slice(2,-1);return o==="!"||o==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),o)}let[,s,i]=e.match(/^(.*!)([^!]*)$/s);i||t(`The ${e} tag has no suffix`);let r=this.tags[s];if(r)try{return r+decodeURIComponent(i)}catch(o){return t(String(o)),null}return s==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(let[t,s]of Object.entries(this.tags))if(e.startsWith(s))return t+No(e.substring(s.length));return e[0]==="!"?e:`!<${e}>`}toString(e){let t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],s=Object.entries(this.tags),i;if(e&&s.length>0&&N(e.contents)){let r={};ce(e.contents,(o,a)=>{N(a)&&a.tag&&(r[a.tag]=!0)}),i=Object.keys(r)}else i=[];for(let[r,o]of s)r==="!!"&&o==="tag:yaml.org,2002:"||(!e||i.some(a=>a.startsWith(o)))&&t.push(`%TAG ${r} ${o}`);return t.join(`
`)}};le.defaultYaml={explicit:!1,version:"1.2"};le.defaultTags={"!!":"tag:yaml.org,2002:"};function is(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){let t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function cn(n){let e=new Set;return ce(n,{Value(t,s){s.anchor&&e.add(s.anchor)}}),e}function ln(n,e){for(let t=1;;++t){let s=`${n}${t}`;if(!e.has(s))return s}}function Vi(n,e){let t=[],s=new Map,i=null;return{onAnchor:r=>{t.push(r),i!=null||(i=cn(n));let o=ln(e,i);return i.add(o),o},setAnchors:()=>{for(let r of t){let o=s.get(r);if(typeof o=="object"&&o.anchor&&(E(o.node)||T(o.node)))o.node.anchor=o.anchor;else{let a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=r,a}}},sourceObjects:s}}function Ae(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let i=0,r=s.length;i<r;++i){let o=s[i],a=Ae(n,s,String(i),o);a===void 0?delete s[i]:a!==o&&(s[i]=a)}else if(s instanceof Map)for(let i of Array.from(s.keys())){let r=s.get(i),o=Ae(n,s,i,r);o===void 0?s.delete(i):o!==r&&s.set(i,o)}else if(s instanceof Set)for(let i of Array.from(s)){let r=Ae(n,s,i,i);r===void 0?s.delete(i):r!==i&&(s.delete(i),s.add(r))}else for(let[i,r]of Object.entries(s)){let o=Ae(n,s,i,r);o===void 0?delete s[i]:o!==r&&(s[i]=o)}return n.call(e,t,s)}function F(n,e,t){if(Array.isArray(n))return n.map((s,i)=>F(s,String(i),t));if(n&&typeof n.toJSON=="function"){if(!t||!ss(n))return n.toJSON(e,t);let s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=r=>{s.res=r,delete t.onCreate};let i=n.toJSON(e,t);return t.onCreate&&t.onCreate(i),i}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}var _e=class{constructor(e){Object.defineProperty(this,W,{value:e})}clone(){let e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:i,reviver:r}={}){if(!oe(e))throw new TypeError("A document argument is required");let o={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},a=F(this,"",o);if(typeof i=="function")for(let{count:c,res:l}of o.anchors.values())i(l,c);return typeof r=="function"?Ae(r,{"":a},"",a):a}};var ye=class extends _e{constructor(e){super(es),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){let s;t!=null&&t.aliasResolveCache?s=t.aliasResolveCache:(s=[],ce(e,{Node:(r,o)=>{(z(o)||ss(o))&&s.push(o)}}),t&&(t.aliasResolveCache=s));let i;for(let r of s){if(r===this)break;r.anchor===this.source&&(i=r)}return i}toJSON(e,t){if(!t)return{source:this.source};let{anchors:s,doc:i,maxAliasCount:r}=t,o=this.resolve(i,t);if(!o){let c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}let a=s.get(o);if(a||(F(o,null,t),a=s.get(o)),!a||a.res===void 0){let c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(r>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=rs(i,o,s)),a.count*a.aliasCount>r)){let c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return a.res}toString(e,t,s){let i=`*${this.source}`;if(e){if(is(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){let r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${i} `}return i}};function rs(n,e,t){if(z(e)){let s=e.resolve(n),i=t&&s&&t.get(s);return i?i.count*i.aliasCount:0}else if(T(e)){let s=0;for(let i of e.items){let r=rs(n,i,t);r>s&&(s=r)}return s}else if(x(e)){let s=rs(n,e.key,t),i=rs(n,e.value,t);return Math.max(s,i)}return 1}var os=n=>!n||typeof n!="function"&&typeof n!="object",v=class extends _e{constructor(e){super(Y),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:F(this.value,e,t)}toString(){return String(this.value)}};v.BLOCK_FOLDED="BLOCK_FOLDED";v.BLOCK_LITERAL="BLOCK_LITERAL";v.PLAIN="PLAIN";v.QUOTE_DOUBLE="QUOTE_DOUBLE";v.QUOTE_SINGLE="QUOTE_SINGLE";var To="tag:yaml.org,2002:";function Oo(n,e,t){var s;if(e){let i=t.filter(o=>o.tag===e),r=(s=i.find(o=>!o.format))!=null?s:i[0];if(!r)throw new Error(`Tag ${e} not found`);return r}return t.find(i=>{var r;return((r=i.identify)==null?void 0:r.call(i,n))&&!i.format})}function we(n,e,t){var d,h,p,m;if(oe(n)&&(n=n.contents),N(n))return n;if(x(n)){let f=(h=(d=t.schema[Q]).createNode)==null?void 0:h.call(d,t.schema,null,t);return f.items.push(n),f}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt!="undefined"&&n instanceof BigInt)&&(n=n.valueOf());let{aliasDuplicateObjects:s,onAnchor:i,onTagObj:r,schema:o,sourceObjects:a}=t,c;if(s&&n&&typeof n=="object"){if(c=a.get(n),c)return(p=c.anchor)!=null||(c.anchor=i(n)),new ye(c.anchor);c={anchor:null,node:null},a.set(n,c)}e!=null&&e.startsWith("!!")&&(e=To+e.slice(2));let l=Oo(n,e,o.tags);if(!l){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){let f=new v(n);return c&&(c.node=f),f}l=n instanceof Map?o[Q]:Symbol.iterator in Object(n)?o[ge]:o[Q]}r&&(r(l),delete t.onTagObj);let u=l!=null&&l.createNode?l.createNode(t.schema,n,t):typeof((m=l==null?void 0:l.nodeClass)==null?void 0:m.from)=="function"?l.nodeClass.from(t.schema,n,t):new v(n);return e?u.tag=e:l.default||(u.tag=l.tag),c&&(c.node=u),u}function ht(n,e,t){let s=t;for(let i=e.length-1;i>=0;--i){let r=e[i];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){let o=[];o[r]=s,s=o}else s=new Map([[r,s]])}return we(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}var He=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done,je=class extends _e{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){let t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>N(s)||x(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(He(e))this.add(t);else{let[s,...i]=e,r=this.get(s,!0);if(T(r))r.addIn(i,t);else if(r===void 0&&this.schema)this.set(s,ht(this.schema,i,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}deleteIn(e){let[t,...s]=e;if(s.length===0)return this.delete(t);let i=this.get(t,!0);if(T(i))return i.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){let[s,...i]=e,r=this.get(s,!0);return i.length===0?!t&&E(r)?r.value:r:T(r)?r.getIn(i,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!x(t))return!1;let s=t.value;return s==null||e&&E(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){let[t,...s]=e;if(s.length===0)return this.has(t);let i=this.get(t,!0);return T(i)?i.hasIn(s):!1}setIn(e,t){let[s,...i]=e;if(i.length===0)this.set(s,t);else{let r=this.get(s,!0);if(T(r))r.setIn(i,t);else if(r===void 0&&this.schema)this.set(s,ht(this.schema,i,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}};var Wi=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function G(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}var ue=(n,e,t)=>n.endsWith(`
`)?G(t,e):t.includes(`
`)?`
`+G(t,e):(n.endsWith(" ")?"":" ")+t;var un="flow",as="block",pt="quoted";function mt(n,e,t="flow",{indentAtStart:s,lineWidth:i=80,minContentWidth:r=20,onFold:o,onOverflow:a}={}){if(!i||i<0)return n;i<r&&(r=0);let c=Math.max(1+r,1+i-e.length);if(n.length<=c)return n;let l=[],u={},d=i-e.length;typeof s=="number"&&(s>i-Math.max(2,r)?l.push(0):d=i-s);let h,p,m=!1,f=-1,g=-1,y=-1;t===as&&(f=ji(n,f,e.length),f!==-1&&(d=f+c));for(let C;C=n[f+=1];){if(t===pt&&C==="\\"){switch(g=f,n[f+1]){case"x":f+=3;break;case"u":f+=5;break;case"U":f+=9;break;default:f+=1}y=f}if(C===`
`)t===as&&(f=ji(n,f,e.length)),d=f+e.length+c,h=void 0;else{if(C===" "&&p&&p!==" "&&p!==`
`&&p!=="	"){let S=n[f+1];S&&S!==" "&&S!==`
`&&S!=="	"&&(h=f)}if(f>=d)if(h)l.push(h),d=h+c,h=void 0;else if(t===pt){for(;p===" "||p==="	";)p=C,C=n[f+=1],m=!0;let S=f>y+1?f-2:g-1;if(u[S])return n;l.push(S),u[S]=!0,d=S+c,h=void 0}else m=!0}p=C}if(m&&a&&a(),l.length===0)return n;o&&o();let w=n.slice(0,l[0]);for(let C=0;C<l.length;++C){let S=l[C],k=l[C+1]||n.length;S===0?w=`
${e}${n.slice(0,k)}`:(t===pt&&u[S]&&(w+=`${n[S]}\\`),w+=`
${e}${n.slice(S+1,k)}`)}return w}function ji(n,e,t){let s=e,i=e+1,r=n[i];for(;r===" "||r==="	";)if(e<i+t)r=n[++e];else{do r=n[++e];while(r&&r!==`
`);s=e,i=e+1,r=n[i]}return s}var ls=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),us=n=>/^(%|---|\.\.\.)/m.test(n);function Io(n,e,t){if(!e||e<0)return!1;let s=e-t,i=n.length;if(i<=s)return!1;for(let r=0,o=0;r<i;++r)if(n[r]===`
`){if(r-o>s)return!0;if(o=r+1,i-o<=s)return!1}return!0}function gt(n,e){let t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;let{implicitKey:s}=e,i=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(us(n)?"  ":""),o="",a=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(o+=t.slice(a,c)+"\\ ",c+=1,a=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{o+=t.slice(a,c);let u=t.substr(c+2,4);switch(u){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:u.substr(0,2)==="00"?o+="\\x"+u.substr(2):o+=t.substr(c,6)}c+=5,a=c+1}break;case"n":if(s||t[c+2]==='"'||t.length<i)c+=1;else{for(o+=t.slice(a,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)o+=`
`,c+=2;o+=r,t[c+2]===" "&&(o+="\\"),c+=1,a=c+1}break;default:c+=1}return o=a?o+t.slice(a):t,s?o:mt(o,r,pt,ls(e,!1))}function fn(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return gt(n,e);let t=e.indent||(us(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:mt(s,t,un,ls(e,!1))}function Ye(n,e){let{singleQuote:t}=e.options,s;if(t===!1)s=gt;else{let i=n.includes('"'),r=n.includes("'");i&&!r?s=fn:r&&!i?s=gt:s=t?fn:gt}return s(n,e)}var dn;try{dn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch(n){dn=/\n+(?!\n|$)/g}function cs({comment:n,type:e,value:t},s,i,r){let{blockQuote:o,commentString:a,lineWidth:c}=s.options;if(!o||/\n[\t ]+$/.test(t)||/^\s*$/.test(t))return Ye(t,s);let l=s.indent||(s.forceBlockIndent||us(t)?"  ":""),u=o==="literal"?!0:o==="folded"||e===v.BLOCK_FOLDED?!1:e===v.BLOCK_LITERAL?!0:!Io(t,c,l.length);if(!t)return u?`|
`:`>
`;let d,h;for(h=t.length;h>0;--h){let k=t[h-1];if(k!==`
`&&k!=="	"&&k!==" ")break}let p=t.substring(h),m=p.indexOf(`
`);m===-1?d="-":t===p||m!==p.length-1?(d="+",r&&r()):d="",p&&(t=t.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p=p.replace(dn,`$&${l}`));let f=!1,g,y=-1;for(g=0;g<t.length;++g){let k=t[g];if(k===" ")f=!0;else if(k===`
`)y=g;else break}let w=t.substring(0,y<g?y+1:g);w&&(t=t.substring(w.length),w=w.replace(/\n+/g,`$&${l}`));let S=(f?l?"2":"1":"")+d;if(n&&(S+=" "+a(n.replace(/ ?[\r\n]+/g," ")),i&&i()),!u){let k=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`),A=!1,L=ls(s,!0);o!=="folded"&&e!==v.BLOCK_FOLDED&&(L.onOverflow=()=>{A=!0});let b=mt(`${w}${k}${p}`,l,as,L);if(!A)return`>${S}
${l}${b}`}return t=t.replace(/\n+/g,`$&${l}`),`|${S}
${l}${w}${t}${p}`}function Po(n,e,t,s){let{type:i,value:r}=n,{actualString:o,implicitKey:a,indent:c,indentStep:l,inFlow:u}=e;if(a&&r.includes(`
`)||u&&/[[\]{},]/.test(r))return Ye(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return a||u||!r.includes(`
`)?Ye(r,e):cs(n,e,t,s);if(!a&&!u&&i!==v.PLAIN&&r.includes(`
`))return cs(n,e,t,s);if(us(r)){if(c==="")return e.forceBlockIndent=!0,cs(n,e,t,s);if(a&&c===l)return Ye(r,e)}let d=r.replace(/\n+/g,`$&
${c}`);if(o){let h=f=>{var g;return f.default&&f.tag!=="tag:yaml.org,2002:str"&&((g=f.test)==null?void 0:g.test(d))},{compat:p,tags:m}=e.doc.schema;if(m.some(h)||p!=null&&p.some(h))return Ye(r,e)}return a?d:mt(d,c,un,ls(e,!1))}function Me(n,e,t,s){let{implicitKey:i,inFlow:r}=e,o=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)}),{type:a}=n;a!==v.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=v.QUOTE_DOUBLE);let c=u=>{switch(u){case v.BLOCK_FOLDED:case v.BLOCK_LITERAL:return i||r?Ye(o.value,e):cs(o,e,t,s);case v.QUOTE_DOUBLE:return gt(o.value,e);case v.QUOTE_SINGLE:return fn(o.value,e);case v.PLAIN:return Po(o,e,t,s);default:return null}},l=c(a);if(l===null){let{defaultKeyType:u,defaultStringType:d}=e.options,h=i&&u||d;if(l=c(h),l===null)throw new Error(`Unsupported default string type ${h}`)}return l}function fs(n,e){let t=Object.assign({blockQuote:!0,commentString:Wi,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e),s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function Lo(n,e){var i,r,o,a;if(e.tag){let c=n.filter(l=>l.tag===e.tag);if(c.length>0)return(i=c.find(l=>l.format===e.format))!=null?i:c[0]}let t,s;if(E(e)){s=e.value;let c=n.filter(l=>{var u;return(u=l.identify)==null?void 0:u.call(l,s)});if(c.length>1){let l=c.filter(u=>u.test);l.length>0&&(c=l)}t=(r=c.find(l=>l.format===e.format))!=null?r:c.find(l=>!l.format)}else s=e,t=n.find(c=>c.nodeClass&&s instanceof c.nodeClass);if(!t){let c=(a=(o=s==null?void 0:s.constructor)==null?void 0:o.name)!=null?a:s===null?"null":typeof s;throw new Error(`Tag not resolved for ${c} value`)}return t}function Mo(n,e,{anchors:t,doc:s}){var a;if(!s.directives)return"";let i=[],r=(E(n)||T(n))&&n.anchor;r&&is(r)&&(t.add(r),i.push(`&${r}`));let o=(a=n.tag)!=null?a:e.default?null:e.tag;return o&&i.push(s.directives.tagString(o)),i.join(" ")}function be(n,e,t,s){var c,l;if(x(n))return n.toString(e,t,s);if(z(n)){if(e.doc.directives)return n.toString(e);if((c=e.resolvedAliases)!=null&&c.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let i,r=N(n)?n:e.doc.createNode(n,{onTagObj:u=>i=u});i!=null||(i=Lo(e.doc.schema.tags,r));let o=Mo(r,i,e);o.length>0&&(e.indentAtStart=((l=e.indentAtStart)!=null?l:0)+o.length+1);let a=typeof i.stringify=="function"?i.stringify(r,e,t,s):E(r)?Me(r,e,t,s):r.toString(e,t,s);return o?E(r)||a[0]==="{"||a[0]==="["?`${o} ${a}`:`${o}
${e.indent}${a}`:a}function Hi({key:n,value:e},t,s,i){var L,b;let{allNullValues:r,doc:o,indent:a,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:d}}=t,h=N(n)&&n.comment||null;if(d){if(h)throw new Error("With simple keys, key nodes cannot have comments");if(T(n)||!N(n)&&typeof n=="object"){let I="With simple keys, collection cannot be used as a key value";throw new Error(I)}}let p=!d&&(!n||h&&e==null&&!t.inFlow||T(n)||(E(n)?n.type===v.BLOCK_FOLDED||n.type===v.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!p&&(d||!r),indent:a+c});let m=!1,f=!1,g=be(n,t,()=>m=!0,()=>f=!0);if(!p&&!t.inFlow&&g.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(t.inFlow){if(r||e==null)return m&&s&&s(),g===""?"?":p?`? ${g}`:g}else if(r&&!d||e==null&&p)return g=`? ${g}`,h&&!m?g+=ue(g,t.indent,l(h)):f&&i&&i(),g;m&&(h=null),p?(h&&(g+=ue(g,t.indent,l(h))),g=`? ${g}
${a}:`):(g=`${g}:`,h&&(g+=ue(g,t.indent,l(h))));let y,w,C;N(e)?(y=!!e.spaceBefore,w=e.commentBefore,C=e.comment):(y=!1,w=null,C=null,e&&typeof e=="object"&&(e=o.createNode(e))),t.implicitKey=!1,!p&&!h&&E(e)&&(t.indentAtStart=g.length+1),f=!1,!u&&c.length>=2&&!t.inFlow&&!p&&Z(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let S=!1,k=be(e,t,()=>S=!0,()=>f=!0),A=" ";if(h||y||w){if(A=y?`
`:"",w){let I=l(w);A+=`
${G(I,t.indent)}`}k===""&&!t.inFlow?A===`
`&&(A=`

`):A+=`
${t.indent}`}else if(!p&&T(e)){let I=k[0],O=k.indexOf(`
`),$=O!==-1,re=(b=(L=t.inFlow)!=null?L:e.flow)!=null?b:e.items.length===0;if($||!re){let De=!1;if($&&(I==="&"||I==="!")){let q=k.indexOf(" ");I==="&"&&q!==-1&&q<O&&k[q+1]==="!"&&(q=k.indexOf(" ",q+1)),(q===-1||O<q)&&(De=!0)}De||(A=`
${t.indent}`)}}else(k===""||k[0]===`
`)&&(A="");return g+=A+k,t.inFlow?S&&s&&s():C&&!S?g+=ue(g,t.indent,l(C)):f&&i&&i(),g}function ds(n,e){(n==="debug"||n==="warn")&&console.warn(e)}var hs="<<",ee={identify:n=>n===hs||typeof n=="symbol"&&n.description===hs,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new v(Symbol(hs)),{addToJSMap:pn}),stringify:()=>hs},Yi=(n,e)=>(ee.identify(e)||E(e)&&(!e.type||e.type===v.PLAIN)&&ee.identify(e.value))&&(n==null?void 0:n.doc.schema.tags.some(t=>t.tag===ee.tag&&t.default));function pn(n,e,t){if(t=n&&z(t)?t.resolve(n.doc):t,Z(t))for(let s of t.items)hn(n,e,s);else if(Array.isArray(t))for(let s of t)hn(n,e,s);else hn(n,e,t)}function hn(n,e,t){let s=n&&z(t)?t.resolve(n.doc):t;if(!X(s))throw new Error("Merge sources must be maps or map aliases");let i=s.toJSON(null,n,Map);for(let[r,o]of i)e instanceof Map?e.has(r)||e.set(r,o):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:o,writable:!0,enumerable:!0,configurable:!0});return e}function ps(n,e,{key:t,value:s}){if(N(t)&&t.addToJSMap)t.addToJSMap(n,e,s);else if(Yi(n,t))pn(n,e,s);else{let i=F(t,"",n);if(e instanceof Map)e.set(i,F(s,i,n));else if(e instanceof Set)e.add(i);else{let r=Bo(t,i,n),o=F(s,r,n);r in e?Object.defineProperty(e,r,{value:o,writable:!0,enumerable:!0,configurable:!0}):e[r]=o}}return e}function Bo(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(N(n)&&(t!=null&&t.doc)){let s=fs(t.doc,{});s.anchors=new Set;for(let r of t.anchors.keys())s.anchors.add(r.anchor);s.inFlow=!0,s.inStringifyKey=!0;let i=n.toString(s);if(!t.mapKeyWarned){let r=JSON.stringify(i);r.length>40&&(r=r.substring(0,36)+'..."'),ds(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return i}return JSON.stringify(e)}function ze(n,e,t){let s=we(n,void 0,t),i=we(e,void 0,t);return new R(s,i)}var R=class n{constructor(e,t=null){Object.defineProperty(this,W,{value:an}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return N(t)&&(t=t.clone(e)),N(s)&&(s=s.clone(e)),new n(t,s)}toJSON(e,t){let s=t!=null&&t.mapAsMap?new Map:{};return ps(t,s,this)}toString(e,t,s){return e!=null&&e.doc?Hi(this,e,t,s):JSON.stringify(this)}};function gs(n,e,t){var r;return(((r=e.inFlow)!=null?r:n.flow)?Do:Ro)(n,e,t)}function Ro({comment:n,items:e},t,{blockItemPrefix:s,flowChars:i,itemIndent:r,onChompKeep:o,onComment:a}){let{indent:c,options:{commentString:l}}=t,u=Object.assign({},t,{indent:r,type:null}),d=!1,h=[];for(let m=0;m<e.length;++m){let f=e[m],g=null;if(N(f))!d&&f.spaceBefore&&h.push(""),ms(t,h,f.commentBefore,d),f.comment&&(g=f.comment);else if(x(f)){let w=N(f.key)?f.key:null;w&&(!d&&w.spaceBefore&&h.push(""),ms(t,h,w.commentBefore,d))}d=!1;let y=be(f,u,()=>g=null,()=>d=!0);g&&(y+=ue(y,r,l(g))),d&&g&&(d=!1),h.push(s+y)}let p;if(h.length===0)p=i.start+i.end;else{p=h[0];for(let m=1;m<h.length;++m){let f=h[m];p+=f?`
${c}${f}`:`
`}}return n?(p+=`
`+G(l(n),c),a&&a()):d&&o&&o(),p}function Do({items:n},e,{flowChars:t,itemIndent:s}){let{indent:i,indentStep:r,flowCollectionPadding:o,options:{commentString:a}}=e;s+=r;let c=Object.assign({},e,{indent:s,inFlow:!0,type:null}),l=!1,u=0,d=[];for(let m=0;m<n.length;++m){let f=n[m],g=null;if(N(f))f.spaceBefore&&d.push(""),ms(e,d,f.commentBefore,!1),f.comment&&(g=f.comment);else if(x(f)){let w=N(f.key)?f.key:null;w&&(w.spaceBefore&&d.push(""),ms(e,d,w.commentBefore,!1),w.comment&&(l=!0));let C=N(f.value)?f.value:null;C?(C.comment&&(g=C.comment),C.commentBefore&&(l=!0)):f.value==null&&(w!=null&&w.comment)&&(g=w.comment)}g&&(l=!0);let y=be(f,c,()=>g=null);m<n.length-1&&(y+=","),g&&(y+=ue(y,s,a(g))),!l&&(d.length>u||y.includes(`
`))&&(l=!0),d.push(y),u=d.length}let{start:h,end:p}=t;if(d.length===0)return h+p;if(!l){let m=d.reduce((f,g)=>f+g.length+2,2);l=e.options.lineWidth>0&&m>e.options.lineWidth}if(l){let m=h;for(let f of d)m+=f?`
${r}${i}${f}`:`
`;return`${m}
${i}${p}`}else return`${h}${o}${d.join(" ")}${o}${p}`}function ms({indent:n,options:{commentString:e}},t,s,i){if(s&&i&&(s=s.replace(/^\n+/,"")),s){let r=G(e(s),n);t.push(r.trimStart())}}function xe(n,e){let t=E(e)?e.value:e;for(let s of n)if(x(s)&&(s.key===e||s.key===t||E(s.key)&&s.key.value===t))return s}var D=class extends je{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Q,e),this.items=[]}static from(e,t,s){let{keepUndefined:i,replacer:r}=s,o=new this(e),a=(c,l)=>{if(typeof r=="function")l=r.call(t,c,l);else if(Array.isArray(r)&&!r.includes(c))return;(l!==void 0||i)&&o.items.push(ze(c,l,s))};if(t instanceof Map)for(let[c,l]of t)a(c,l);else if(t&&typeof t=="object")for(let c of Object.keys(t))a(c,t[c]);return typeof e.sortMapEntries=="function"&&o.items.sort(e.sortMapEntries),o}add(e,t){var o;let s;x(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new R(e,e==null?void 0:e.value):s=new R(e.key,e.value);let i=xe(this.items,s.key),r=(o=this.schema)==null?void 0:o.sortMapEntries;if(i){if(!t)throw new Error(`Key ${s.key} already set`);E(i.value)&&os(s.value)?i.value.value=s.value:i.value=s.value}else if(r){let a=this.items.findIndex(c=>r(s,c)<0);a===-1?this.items.push(s):this.items.splice(a,0,s)}else this.items.push(s)}delete(e){let t=xe(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){var r;let s=xe(this.items,e),i=s==null?void 0:s.value;return(r=!t&&E(i)?i.value:i)!=null?r:void 0}has(e){return!!xe(this.items,e)}set(e,t){this.add(new R(e,t),!0)}toJSON(e,t,s){let i=s?new s:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(i);for(let r of this.items)ps(t,i,r);return i}toString(e,t,s){if(!e)return JSON.stringify(this);for(let i of this.items)if(!x(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),gs(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}};var te={collection:"map",default:!0,nodeClass:D,tag:"tag:yaml.org,2002:map",resolve(n,e){return X(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>D.from(n,e,t)};var K=class extends je{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(ge,e),this.items=[]}add(e){this.items.push(e)}delete(e){let t=ys(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){let s=ys(e);if(typeof s!="number")return;let i=this.items[s];return!t&&E(i)?i.value:i}has(e){let t=ys(e);return typeof t=="number"&&t<this.items.length}set(e,t){let s=ys(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);let i=this.items[s];E(i)&&os(t)?i.value=t:this.items[s]=t}toJSON(e,t){let s=[];t!=null&&t.onCreate&&t.onCreate(s);let i=0;for(let r of this.items)s.push(F(r,String(i++),t));return s}toString(e,t,s){return e?gs(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){let{replacer:i}=s,r=new this(e);if(t&&Symbol.iterator in Object(t)){let o=0;for(let a of t){if(typeof i=="function"){let c=t instanceof Set?a:String(o++);a=i.call(t,c,a)}r.items.push(we(a,void 0,s))}}return r}};function ys(n){let e=E(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}var se={collection:"seq",default:!0,nodeClass:K,tag:"tag:yaml.org,2002:seq",resolve(n,e){return Z(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>K.from(n,e,t)};var Ne={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,s){return e=Object.assign({actualString:!0},e),Me(n,e,t,s)}};var Be={identify:n=>n==null,createNode:()=>new v(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new v(null),stringify:({source:n},e)=>typeof n=="string"&&Be.test.test(n)?n:e.options.nullStr};var yt={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new v(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&yt.test.test(n)){let s=n[0]==="t"||n[0]==="T";if(e===s)return n}return e?t.options.trueStr:t.options.falseStr}};function U({format:n,minFractionDigits:e,tag:t,value:s}){if(typeof s=="bigint")return String(s);let i=typeof s=="number"?s:Number(s);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let r=JSON.stringify(s);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(r)){let o=r.indexOf(".");o<0&&(o=r.length,r+=".");let a=e-(r.length-o-1);for(;a-- >0;)r+="0"}return r}var ws={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:U},bs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){let e=Number(n.value);return isFinite(e)?e.toExponential():U(n)}},vs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){let e=new v(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:U};var ks=n=>typeof n=="bigint"||Number.isInteger(n),mn=(n,e,t,{intAsBigInt:s})=>s?BigInt(n):parseInt(n.substring(e),t);function zi(n,e,t){let{value:s}=n;return ks(s)&&s>=0?t+s.toString(e):U(n)}var Ss={identify:n=>ks(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>mn(n,2,8,t),stringify:n=>zi(n,8,"0o")},Cs={identify:ks,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>mn(n,0,10,t),stringify:U},Es={identify:n=>ks(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>mn(n,2,16,t),stringify:n=>zi(n,16,"0x")};var Gi=[te,se,Ne,Be,yt,Ss,Cs,Es,ws,bs,vs];function Ji(n){return typeof n=="bigint"||Number.isInteger(n)}var As=({value:n})=>JSON.stringify(n),qo=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:As},{identify:n=>n==null,createNode:()=>new v(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:As},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:As},{identify:Ji,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>Ji(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:As}],Fo={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},Qi=[te,se].concat(qo,Fo);var wt={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){let t=atob(n.replace(/[\n\r]/g,"")),s=new Uint8Array(t.length);for(let i=0;i<t.length;++i)s[i]=t.charCodeAt(i);return s}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},s,i,r){if(!t)return"";let o=t,a;if(typeof btoa=="function"){let c="";for(let l=0;l<o.length;++l)c+=String.fromCharCode(o[l]);a=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e!=null||(e=v.BLOCK_LITERAL),e!==v.QUOTE_DOUBLE){let c=Math.max(s.options.lineWidth-s.indent.length,s.options.minContentWidth),l=Math.ceil(a.length/c),u=new Array(l);for(let d=0,h=0;d<l;++d,h+=c)u[d]=a.substr(h,c);a=u.join(e===v.BLOCK_LITERAL?`
`:" ")}return Me({comment:n,type:e,value:a},s,i,r)}};function gn(n,e){var t;if(Z(n))for(let s=0;s<n.items.length;++s){let i=n.items[s];if(!x(i)){if(X(i)){i.items.length>1&&e("Each pair must have its own sequence indicator");let r=i.items[0]||new R(new v(null));if(i.commentBefore&&(r.key.commentBefore=r.key.commentBefore?`${i.commentBefore}
${r.key.commentBefore}`:i.commentBefore),i.comment){let o=(t=r.value)!=null?t:r.key;o.comment=o.comment?`${i.comment}
${o.comment}`:i.comment}i=r}n.items[s]=x(i)?i:new R(i)}}else e("Expected a sequence for this tag");return n}function yn(n,e,t){let{replacer:s}=t,i=new K(n);i.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let o of e){typeof s=="function"&&(o=s.call(e,String(r++),o));let a,c;if(Array.isArray(o))if(o.length===2)a=o[0],c=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){let l=Object.keys(o);if(l.length===1)a=l[0],c=o[a];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else a=o;i.items.push(ze(a,c,t))}return i}var bt={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:gn,createNode:yn};var Ge=class n extends K{constructor(){super(),this.add=D.prototype.add.bind(this),this.delete=D.prototype.delete.bind(this),this.get=D.prototype.get.bind(this),this.has=D.prototype.has.bind(this),this.set=D.prototype.set.bind(this),this.tag=n.tag}toJSON(e,t){if(!t)return super.toJSON(e);let s=new Map;t!=null&&t.onCreate&&t.onCreate(s);for(let i of this.items){let r,o;if(x(i)?(r=F(i.key,"",t),o=F(i.value,r,t)):r=F(i,"",t),s.has(r))throw new Error("Ordered maps must not include duplicate keys");s.set(r,o)}return s}static from(e,t,s){let i=yn(e,t,s),r=new this;return r.items=i.items,r}};Ge.tag="tag:yaml.org,2002:omap";var vt={collection:"seq",identify:n=>n instanceof Map,nodeClass:Ge,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){let t=gn(n,e),s=[];for(let{key:i}of t.items)E(i)&&(s.includes(i.value)?e(`Ordered maps must not include duplicate keys: ${i.value}`):s.push(i.value));return Object.assign(new Ge,t)},createNode:(n,e,t)=>Ge.from(n,e,t)};function Xi({value:n,source:e},t){return e&&(n?wn:bn).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}var wn={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new v(!0),stringify:Xi},bn={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new v(!1),stringify:Xi};var Zi={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:U},er={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){let e=Number(n.value);return isFinite(e)?e.toExponential():U(n)}},tr={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){let e=new v(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){let s=n.substring(t+1).replace(/_/g,"");s[s.length-1]==="0"&&(e.minFractionDigits=s.length)}return e},stringify:U};var kt=n=>typeof n=="bigint"||Number.isInteger(n);function _s(n,e,t,{intAsBigInt:s}){let i=n[0];if((i==="-"||i==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),s){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}let o=BigInt(n);return i==="-"?BigInt(-1)*o:o}let r=parseInt(n,t);return i==="-"?-1*r:r}function vn(n,e,t){let{value:s}=n;if(kt(s)){let i=s.toString(e);return s<0?"-"+t+i.substr(1):t+i}return U(n)}var sr={identify:kt,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>_s(n,2,2,t),stringify:n=>vn(n,2,"0b")},nr={identify:kt,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>_s(n,1,8,t),stringify:n=>vn(n,8,"0")},ir={identify:kt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>_s(n,0,10,t),stringify:U},rr={identify:kt,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>_s(n,2,16,t),stringify:n=>vn(n,16,"0x")};var Je=class n extends D{constructor(e){super(e),this.tag=n.tag}add(e){let t;x(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new R(e.key,null):t=new R(e,null),xe(this.items,t.key)||this.items.push(t)}get(e,t){let s=xe(this.items,e);return!t&&x(s)?E(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);let s=xe(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new R(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){let{replacer:i}=s,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let o of t)typeof i=="function"&&(o=i.call(t,o,o)),r.items.push(ze(o,null,s));return r}};Je.tag="tag:yaml.org,2002:set";var St={collection:"map",identify:n=>n instanceof Set,nodeClass:Je,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>Je.from(n,e,t),resolve(n,e){if(X(n)){if(n.hasAllNullValues(!0))return Object.assign(new Je,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function kn(n,e){let t=n[0],s=t==="-"||t==="+"?n.substring(1):n,i=o=>e?BigInt(o):Number(o),r=s.replace(/_/g,"").split(":").reduce((o,a)=>o*i(60)+i(a),i(0));return t==="-"?i(-1)*r:r}function or(n){let{value:e}=n,t=o=>o;if(typeof e=="bigint")t=o=>BigInt(o);else if(isNaN(e)||!isFinite(e))return U(n);let s="";e<0&&(s="-",e*=t(-1));let i=t(60),r=[e%i];return e<60?r.unshift(0):(e=(e-r[0])/i,r.unshift(e%i),e>=60&&(e=(e-r[0])/i,r.unshift(e))),s+r.map(o=>String(o).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}var xs={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>kn(n,t),stringify:or},Ns={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>kn(n,!1),stringify:or},Qe={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){let e=n.match(Qe.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");let[,t,s,i,r,o,a]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0,l=Date.UTC(t,s-1,i,r||0,o||0,a||0,c),u=e[8];if(u&&u!=="Z"){let d=kn(u,!1);Math.abs(d)<30&&(d*=60),l-=6e4*d}return new Date(l)},stringify:({value:n})=>{var e;return(e=n==null?void 0:n.toISOString().replace(/(T00:00:00)?\.000Z$/,""))!=null?e:""}};var Sn=[te,se,Ne,Be,wn,bn,sr,nr,ir,rr,Zi,er,tr,wt,ee,vt,bt,St,xs,Ns,Qe];var ar=new Map([["core",Gi],["failsafe",[te,se,Ne]],["json",Qi],["yaml11",Sn],["yaml-1.1",Sn]]),cr={binary:wt,bool:yt,float:vs,floatExp:bs,floatNaN:ws,floatTime:Ns,int:Cs,intHex:Es,intOct:Ss,intTime:xs,map:te,merge:ee,null:Be,omap:vt,pairs:bt,seq:se,set:St,timestamp:Qe},lr={"tag:yaml.org,2002:binary":wt,"tag:yaml.org,2002:merge":ee,"tag:yaml.org,2002:omap":vt,"tag:yaml.org,2002:pairs":bt,"tag:yaml.org,2002:set":St,"tag:yaml.org,2002:timestamp":Qe};function Ts(n,e,t){let s=ar.get(e);if(s&&!n)return t&&!s.includes(ee)?s.concat(ee):s.slice();let i=s;if(!i)if(Array.isArray(n))i=[];else{let r=Array.from(ar.keys()).filter(o=>o!=="yaml11").map(o=>JSON.stringify(o)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(n))for(let r of n)i=i.concat(r);else typeof n=="function"&&(i=n(i.slice()));return t&&(i=i.concat(ee)),i.reduce((r,o)=>{let a=typeof o=="string"?cr[o]:o;if(!a){let c=JSON.stringify(o),l=Object.keys(cr).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return r.includes(a)||r.push(a),r},[])}var $o=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0,Ct=class n{constructor({compat:e,customTags:t,merge:s,resolveKnownTags:i,schema:r,sortMapEntries:o,toStringDefaults:a}){this.compat=Array.isArray(e)?Ts(e,"compat"):e?Ts(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=i?lr:{},this.tags=Ts(t,this.name,s),this.toStringOptions=a!=null?a:null,Object.defineProperty(this,Q,{value:te}),Object.defineProperty(this,Y,{value:Ne}),Object.defineProperty(this,ge,{value:se}),this.sortMapEntries=typeof o=="function"?o:o===!0?$o:null}clone(){let e=Object.create(n.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}};function ur(n,e){var c;let t=[],s=e.directives===!0;if(e.directives!==!1&&n.directives){let l=n.directives.toString(n);l?(t.push(l),s=!0):n.directives.docStart&&(s=!0)}s&&t.push("---");let i=fs(n,e),{commentString:r}=i.options;if(n.commentBefore){t.length!==1&&t.unshift("");let l=r(n.commentBefore);t.unshift(G(l,""))}let o=!1,a=null;if(n.contents){if(N(n.contents)){if(n.contents.spaceBefore&&s&&t.push(""),n.contents.commentBefore){let d=r(n.contents.commentBefore);t.push(G(d,""))}i.forceBlockIndent=!!n.comment,a=n.contents.comment}let l=a?void 0:()=>o=!0,u=be(n.contents,i,()=>a=null,l);a&&(u+=ue(u,"",r(a))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(be(n.contents,i));if((c=n.directives)!=null&&c.docEnd)if(n.comment){let l=r(n.comment);l.includes(`
`)?(t.push("..."),t.push(G(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=n.comment;l&&o&&(l=l.replace(/^\n+/,"")),l&&((!o||a)&&t[t.length-1]!==""&&t.push(""),t.push(G(r(l),"")))}return t.join(`
`)+`
`}var Te=class n{constructor(e,t,s){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,W,{value:ts});let i=null;typeof t=="function"||Array.isArray(t)?i=t:s===void 0&&t&&(s=t,t=void 0);let r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},s);this.options=r;let{version:o}=r;s!=null&&s._directives?(this.directives=s._directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new le({version:o}),this.setSchema(o,s),this.contents=e===void 0?null:this.createNode(e,i,s)}clone(){let e=Object.create(n.prototype,{[W]:{value:ts}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=N(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Xe(this.contents)&&this.contents.add(e)}addIn(e,t){Xe(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){let s=cn(this);e.anchor=!t||s.has(t)?ln(t||"a",s):t}return new ye(e.anchor)}createNode(e,t,s){let i;if(typeof t=="function")e=t.call({"":e},"",e),i=t;else if(Array.isArray(t)){let g=w=>typeof w=="number"||w instanceof String||w instanceof Number,y=t.filter(g).map(String);y.length>0&&(t=t.concat(y)),i=t}else s===void 0&&t&&(s=t,t=void 0);let{aliasDuplicateObjects:r,anchorPrefix:o,flow:a,keepUndefined:c,onTagObj:l,tag:u}=s!=null?s:{},{onAnchor:d,setAnchors:h,sourceObjects:p}=Vi(this,o||"a"),m={aliasDuplicateObjects:r!=null?r:!0,keepUndefined:c!=null?c:!1,onAnchor:d,onTagObj:l,replacer:i,schema:this.schema,sourceObjects:p},f=we(e,u,m);return a&&T(f)&&(f.flow=!0),h(),f}createPair(e,t,s={}){let i=this.createNode(e,null,s),r=this.createNode(t,null,s);return new R(i,r)}delete(e){return Xe(this.contents)?this.contents.delete(e):!1}deleteIn(e){return He(e)?this.contents==null?!1:(this.contents=null,!0):Xe(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return T(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return He(e)?!t&&E(this.contents)?this.contents.value:this.contents:T(this.contents)?this.contents.getIn(e,t):void 0}has(e){return T(this.contents)?this.contents.has(e):!1}hasIn(e){return He(e)?this.contents!==void 0:T(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=ht(this.schema,[e],t):Xe(this.contents)&&this.contents.set(e,t)}setIn(e,t){He(e)?this.contents=t:this.contents==null?this.contents=ht(this.schema,Array.from(e),t):Xe(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let s;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new le({version:"1.1"}),s={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new le({version:e}),s={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,s=null;break;default:{let i=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(s)this.schema=new Ct(Object.assign(s,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:s,maxAliasCount:i,onAnchor:r,reviver:o}={}){let a={anchors:new Map,doc:this,keep:!e,mapAsMap:s===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},c=F(this.contents,t!=null?t:"",a);if(typeof r=="function")for(let{count:l,res:u}of a.anchors.values())r(u,l);return typeof o=="function"?Ae(o,{"":c},"",c):c}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){let t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return ur(this,e)}};function Xe(n){if(T(n))return!0;throw new Error("Expected a YAML collection as document contents")}var Et=class extends Error{constructor(e,t,s,i){super(),this.name=e,this.code=s,this.message=i,this.pos=t}},ne=class extends Et{constructor(e,t,s){super("YAMLParseError",e,t,s)}},At=class extends Et{constructor(e,t,s){super("YAMLWarning",e,t,s)}},Cn=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));let{line:s,col:i}=t.linePos[0];t.message+=` at line ${s}, column ${i}`;let r=i-1,o=n.substring(e.lineStarts[s-1],e.lineStarts[s]).replace(/[\n\r]+$/,"");if(r>=60&&o.length>80){let a=Math.min(r-39,o.length-79);o="\u2026"+o.substring(a),r-=a-1}if(o.length>80&&(o=o.substring(0,79)+"\u2026"),s>1&&/^ *$/.test(o.substring(0,r))){let a=n.substring(e.lineStarts[s-2],e.lineStarts[s-1]);a.length>80&&(a=a.substring(0,79)+`\u2026
`),o=a+o}if(/[^ ]/.test(o)){let a=1,c=t.linePos[1];c&&c.line===s&&c.col>i&&(a=Math.max(1,Math.min(c.col-i,80-r)));let l=" ".repeat(r)+"^".repeat(a);t.message+=`:

${o}
${l}
`}};function fe(n,{flow:e,indicator:t,next:s,offset:i,onError:r,parentIndent:o,startOnNewline:a}){let c=!1,l=a,u=a,d="",h="",p=!1,m=!1,f=null,g=null,y=null,w=null,C=null,S=null,k=null;for(let b of n)switch(m&&(b.type!=="space"&&b.type!=="newline"&&b.type!=="comma"&&r(b.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),m=!1),f&&(l&&b.type!=="comment"&&b.type!=="newline"&&r(f,"TAB_AS_INDENT","Tabs are not allowed as indentation"),f=null),b.type){case"space":!e&&(t!=="doc-start"||(s==null?void 0:s.type)!=="flow-collection")&&b.source.includes("	")&&(f=b),u=!0;break;case"comment":{u||r(b,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");let I=b.source.substring(1)||" ";d?d+=h+I:d=I,h="",l=!1;break}case"newline":l?d?d+=b.source:(!S||t!=="seq-item-ind")&&(c=!0):h+=b.source,l=!0,p=!0,(g||y)&&(w=b),u=!0;break;case"anchor":g&&r(b,"MULTIPLE_ANCHORS","A node can have at most one anchor"),b.source.endsWith(":")&&r(b.offset+b.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=b,k!=null||(k=b.offset),l=!1,u=!1,m=!0;break;case"tag":{y&&r(b,"MULTIPLE_TAGS","A node can have at most one tag"),y=b,k!=null||(k=b.offset),l=!1,u=!1,m=!0;break}case t:(g||y)&&r(b,"BAD_PROP_ORDER",`Anchors and tags must be after the ${b.source} indicator`),S&&r(b,"UNEXPECTED_TOKEN",`Unexpected ${b.source} in ${e!=null?e:"collection"}`),S=b,l=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(e){C&&r(b,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),C=b,l=!1,u=!1;break}default:r(b,"UNEXPECTED_TOKEN",`Unexpected ${b.type} token`),l=!1,u=!1}let A=n[n.length-1],L=A?A.offset+A.source.length:i;return m&&s&&s.type!=="space"&&s.type!=="newline"&&s.type!=="comma"&&(s.type!=="scalar"||s.source!=="")&&r(s.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),f&&(l&&f.indent<=o||(s==null?void 0:s.type)==="block-map"||(s==null?void 0:s.type)==="block-seq")&&r(f,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:C,found:S,spaceBefore:c,comment:d,hasNewline:p,anchor:g,tag:y,newlineAfterProp:w,end:L,start:k!=null?k:L}}function Oe(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(let e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(let e of n.items){for(let t of e.start)if(t.type==="newline")return!0;if(e.sep){for(let t of e.sep)if(t.type==="newline")return!0}if(Oe(e.key)||Oe(e.value))return!0}return!1;default:return!0}}function _t(n,e,t){if((e==null?void 0:e.type)==="flow-collection"){let s=e.end[0];s.indent===n&&(s.source==="]"||s.source==="}")&&Oe(e)&&t(s,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Os(n,e,t){let{uniqueKeys:s}=n.options;if(s===!1)return!1;let i=typeof s=="function"?s:(r,o)=>r===o||E(r)&&E(o)&&r.value===o.value;return e.some(r=>i(r.key,t))}var fr="All mapping items must start at the same column";function dr({composeNode:n,composeEmptyNode:e},t,s,i,r){var u,d;let o=(u=r==null?void 0:r.nodeClass)!=null?u:D,a=new o(t.schema);t.atRoot&&(t.atRoot=!1);let c=s.offset,l=null;for(let h of s.items){let{start:p,key:m,sep:f,value:g}=h,y=fe(p,{indicator:"explicit-key-ind",next:m!=null?m:f==null?void 0:f[0],offset:c,onError:i,parentIndent:s.indent,startOnNewline:!0}),w=!y.found;if(w){if(m&&(m.type==="block-seq"?i(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in m&&m.indent!==s.indent&&i(c,"BAD_INDENT",fr)),!y.anchor&&!y.tag&&!f){l=y.end,y.comment&&(a.comment?a.comment+=`
`+y.comment:a.comment=y.comment);continue}(y.newlineAfterProp||Oe(m))&&i(m!=null?m:p[p.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((d=y.found)==null?void 0:d.indent)!==s.indent&&i(c,"BAD_INDENT",fr);t.atKey=!0;let C=y.end,S=m?n(t,m,y,i):e(t,C,p,null,y,i);t.schema.compat&&_t(s.indent,m,i),t.atKey=!1,Os(t,a.items,S)&&i(C,"DUPLICATE_KEY","Map keys must be unique");let k=fe(f!=null?f:[],{indicator:"map-value-ind",next:g,offset:S.range[2],onError:i,parentIndent:s.indent,startOnNewline:!m||m.type==="block-scalar"});if(c=k.end,k.found){w&&((g==null?void 0:g.type)==="block-map"&&!k.hasNewline&&i(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&y.start<k.found.offset-1024&&i(S.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));let A=g?n(t,g,k,i):e(t,c,f,null,k,i);t.schema.compat&&_t(s.indent,g,i),c=A.range[2];let L=new R(S,A);t.options.keepSourceTokens&&(L.srcToken=h),a.items.push(L)}else{w&&i(S.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),k.comment&&(S.comment?S.comment+=`
`+k.comment:S.comment=k.comment);let A=new R(S);t.options.keepSourceTokens&&(A.srcToken=h),a.items.push(A)}}return l&&l<c&&i(l,"IMPOSSIBLE","Map comment with trailing content"),a.range=[s.offset,c,l!=null?l:c],a}function hr({composeNode:n,composeEmptyNode:e},t,s,i,r){var u;let o=(u=r==null?void 0:r.nodeClass)!=null?u:K,a=new o(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=s.offset,l=null;for(let{start:d,value:h}of s.items){let p=fe(d,{indicator:"seq-item-ind",next:h,offset:c,onError:i,parentIndent:s.indent,startOnNewline:!0});if(!p.found)if(p.anchor||p.tag||h)h&&h.type==="block-seq"?i(p.end,"BAD_INDENT","All sequence items must start at the same column"):i(c,"MISSING_CHAR","Sequence item without - indicator");else{l=p.end,p.comment&&(a.comment=p.comment);continue}let m=h?n(t,h,p,i):e(t,p.end,d,null,p,i);t.schema.compat&&_t(s.indent,h,i),c=m.range[2],a.items.push(m)}return a.range=[s.offset,c,l!=null?l:c],a}function de(n,e,t,s){let i="";if(n){let r=!1,o="";for(let a of n){let{source:c,type:l}=a;switch(l){case"space":r=!0;break;case"comment":{t&&!r&&s(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");let u=c.substring(1)||" ";i?i+=o+u:i=u,o="";break}case"newline":i&&(o+=c),r=!0;break;default:s(a,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:i,offset:e}}var En="Block collections are not allowed within flow collections",An=n=>n&&(n.type==="block-map"||n.type==="block-seq");function pr({composeNode:n,composeEmptyNode:e},t,s,i,r){var g,y;let o=s.start.source==="{",a=o?"flow map":"flow sequence",c=(g=r==null?void 0:r.nodeClass)!=null?g:o?D:K,l=new c(t.schema);l.flow=!0;let u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let d=s.offset+s.start.source.length;for(let w=0;w<s.items.length;++w){let C=s.items[w],{start:S,key:k,sep:A,value:L}=C,b=fe(S,{flow:a,indicator:"explicit-key-ind",next:k!=null?k:A==null?void 0:A[0],offset:d,onError:i,parentIndent:s.indent,startOnNewline:!1});if(!b.found){if(!b.anchor&&!b.tag&&!A&&!L){w===0&&b.comma?i(b.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):w<s.items.length-1&&i(b.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),b.comment&&(l.comment?l.comment+=`
`+b.comment:l.comment=b.comment),d=b.end;continue}!o&&t.options.strict&&Oe(k)&&i(k,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(w===0)b.comma&&i(b.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(b.comma||i(b.start,"MISSING_CHAR",`Missing , between ${a} items`),b.comment){let I="";e:for(let O of S)switch(O.type){case"comma":case"space":break;case"comment":I=O.source.substring(1);break e;default:break e}if(I){let O=l.items[l.items.length-1];x(O)&&(O=(y=O.value)!=null?y:O.key),O.comment?O.comment+=`
`+I:O.comment=I,b.comment=b.comment.substring(I.length+1)}}if(!o&&!A&&!b.found){let I=L?n(t,L,b,i):e(t,b.end,A,null,b,i);l.items.push(I),d=I.range[2],An(L)&&i(I.range,"BLOCK_IN_FLOW",En)}else{t.atKey=!0;let I=b.end,O=k?n(t,k,b,i):e(t,I,S,null,b,i);An(k)&&i(O.range,"BLOCK_IN_FLOW",En),t.atKey=!1;let $=fe(A!=null?A:[],{flow:a,indicator:"map-value-ind",next:L,offset:O.range[2],onError:i,parentIndent:s.indent,startOnNewline:!1});if($.found){if(!o&&!b.found&&t.options.strict){if(A)for(let q of A){if(q===$.found)break;if(q.type==="newline"){i(q,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}b.start<$.found.offset-1024&&i($.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else L&&("source"in L&&L.source&&L.source[0]===":"?i(L,"MISSING_CHAR",`Missing space after : in ${a}`):i($.start,"MISSING_CHAR",`Missing , or : between ${a} items`));let re=L?n(t,L,$,i):$.found?e(t,$.end,A,null,$,i):null;re?An(L)&&i(re.range,"BLOCK_IN_FLOW",En):$.comment&&(O.comment?O.comment+=`
`+$.comment:O.comment=$.comment);let De=new R(O,re);if(t.options.keepSourceTokens&&(De.srcToken=C),o){let q=l;Os(t,q.items,O)&&i(I,"DUPLICATE_KEY","Map keys must be unique"),q.items.push(De)}else{let q=new D(t.schema);q.flow=!0,q.items.push(De);let Kn=(re!=null?re:O).range;q.range=[O.range[0],Kn[1],Kn[2]],l.items.push(q)}d=re?re.range[2]:$.end}}let h=o?"}":"]",[p,...m]=s.end,f=d;if(p&&p.source===h)f=p.offset+p.source.length;else{let w=a[0].toUpperCase()+a.substring(1),C=u?`${w} must end with a ${h}`:`${w} in block collection must be sufficiently indented and end with a ${h}`;i(d,u?"MISSING_CHAR":"BAD_INDENT",C),p&&p.source.length!==1&&m.unshift(p)}if(m.length>0){let w=de(m,f,t.options.strict,i);w.comment&&(l.comment?l.comment+=`
`+w.comment:l.comment=w.comment),l.range=[s.offset,f,w.offset]}else l.range=[s.offset,f,f];return l}function _n(n,e,t,s,i,r){let o=t.type==="block-map"?dr(n,e,t,s,r):t.type==="block-seq"?hr(n,e,t,s,r):pr(n,e,t,s,r),a=o.constructor;return i==="!"||i===a.tagName?(o.tag=a.tagName,o):(i&&(o.tag=i),o)}function mr(n,e,t,s,i){var h,p,m;let r=s.tag,o=r?e.directives.tagName(r.source,f=>i(r,"TAG_RESOLVE_FAILED",f)):null;if(t.type==="block-seq"){let{anchor:f,newlineAfterProp:g}=s,y=f&&r?f.offset>r.offset?f:r:f!=null?f:r;y&&(!g||g.offset<y.offset)&&i(y,"MISSING_CHAR","Missing newline after block sequence props")}let a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!o||o==="!"||o===D.tagName&&a==="map"||o===K.tagName&&a==="seq")return _n(n,e,t,i,o);let c=e.schema.tags.find(f=>f.tag===o&&f.collection===a);if(!c){let f=e.schema.knownTags[o];if(f&&f.collection===a)e.schema.tags.push(Object.assign({},f,{default:!1})),c=f;else return f?i(r,"BAD_COLLECTION_TYPE",`${f.tag} used for ${a} collection, but expects ${(h=f.collection)!=null?h:"scalar"}`,!0):i(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),_n(n,e,t,i,o)}let l=_n(n,e,t,i,o,c),u=(m=(p=c.resolve)==null?void 0:p.call(c,l,f=>i(r,"TAG_RESOLVE_FAILED",f),e.options))!=null?m:l,d=N(u)?u:new v(u);return d.range=l.range,d.tag=o,c!=null&&c.format&&(d.format=c.format),d}function xn(n,e,t){let s=e.offset,i=Ko(e,n.options.strict,t);if(!i)return{value:"",type:null,comment:"",range:[s,s,s]};let r=i.mode===">"?v.BLOCK_FOLDED:v.BLOCK_LITERAL,o=e.source?Uo(e.source):[],a=o.length;for(let f=o.length-1;f>=0;--f){let g=o[f][1];if(g===""||g==="\r")a=f;else break}if(a===0){let f=i.chomp==="+"&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):"",g=s+i.length;return e.source&&(g+=e.source.length),{value:f,type:r,comment:i.comment,range:[s,g,g]}}let c=e.indent+i.indent,l=e.offset+i.length,u=0;for(let f=0;f<a;++f){let[g,y]=o[f];if(y===""||y==="\r")i.indent===0&&g.length>c&&(c=g.length);else{g.length<c&&t(l+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(c=g.length),u=f,c===0&&!n.atRoot&&t(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=g.length+y.length+1}for(let f=o.length-1;f>=a;--f)o[f][0].length>c&&(a=f+1);let d="",h="",p=!1;for(let f=0;f<u;++f)d+=o[f][0].slice(c)+`
`;for(let f=u;f<a;++f){let[g,y]=o[f];l+=g.length+y.length+1;let w=y[y.length-1]==="\r";if(w&&(y=y.slice(0,-1)),y&&g.length<c){let S=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;t(l-y.length-(w?2:1),"BAD_INDENT",S),g=""}r===v.BLOCK_LITERAL?(d+=h+g.slice(c)+y,h=`
`):g.length>c||y[0]==="	"?(h===" "?h=`
`:!p&&h===`
`&&(h=`

`),d+=h+g.slice(c)+y,h=`
`,p=!0):y===""?h===`
`?d+=`
`:h=`
`:(d+=h+y,h=" ",p=!1)}switch(i.chomp){case"-":break;case"+":for(let f=a;f<o.length;++f)d+=`
`+o[f][0].slice(c);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}let m=s+i.length+e.source.length;return{value:d,type:r,comment:i.comment,range:[s,m,m]}}function Ko({offset:n,props:e},t,s){if(e[0].type!=="block-scalar-header")return s(e[0],"IMPOSSIBLE","Block scalar header not found"),null;let{source:i}=e[0],r=i[0],o=0,a="",c=-1;for(let h=1;h<i.length;++h){let p=i[h];if(!a&&(p==="-"||p==="+"))a=p;else{let m=Number(p);!o&&m?o=m:c===-1&&(c=n+h)}}c!==-1&&s(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let l=!1,u="",d=i.length;for(let h=1;h<e.length;++h){let p=e[h];switch(p.type){case"space":l=!0;case"newline":d+=p.source.length;break;case"comment":t&&!l&&s(p,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),d+=p.source.length,u=p.source.substring(1);break;case"error":s(p,"UNEXPECTED_TOKEN",p.message),d+=p.source.length;break;default:{let m=`Unexpected token in block scalar header: ${p.type}`;s(p,"UNEXPECTED_TOKEN",m);let f=p.source;f&&typeof f=="string"&&(d+=f.length)}}}return{mode:r,indent:o,chomp:a,comment:u,length:d}}function Uo(n){let e=n.split(/\n( *)/),t=e[0],s=t.match(/^( *)/),r=[s!=null&&s[1]?[s[1],t.slice(s[1].length)]:["",t]];for(let o=1;o<e.length;o+=2)r.push([e[o],e[o+1]]);return r}function Nn(n,e,t){let{offset:s,type:i,source:r,end:o}=n,a,c,l=(h,p,m)=>t(s+h,p,m);switch(i){case"scalar":a=v.PLAIN,c=Vo(r,l);break;case"single-quoted-scalar":a=v.QUOTE_SINGLE,c=Wo(r,l);break;case"double-quoted-scalar":a=v.QUOTE_DOUBLE,c=jo(r,l);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[s,s+r.length,s+r.length]}}let u=s+r.length,d=de(o,u,e,t);return{value:c,type:a,comment:d.comment,range:[s,u,d.offset]}}function Vo(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),gr(n)}function Wo(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),gr(n.slice(1,-1)).replace(/''/g,"'")}function gr(n){var c;let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch(l){e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let s=e.exec(n);if(!s)return n;let i=s[1],r=" ",o=e.lastIndex;for(t.lastIndex=o;s=t.exec(n);)s[1]===""?r===`
`?i+=r:r=`
`:(i+=r+s[1],r=" "),o=t.lastIndex;let a=/[ \t]*(.*)/sy;return a.lastIndex=o,s=a.exec(n),i+r+((c=s==null?void 0:s[1])!=null?c:"")}function jo(n,e){let t="";for(let s=1;s<n.length-1;++s){let i=n[s];if(!(i==="\r"&&n[s+1]===`
`))if(i===`
`){let{fold:r,offset:o}=Ho(n,s);t+=r,s=o}else if(i==="\\"){let r=n[++s],o=Yo[r];if(o)t+=o;else if(r===`
`)for(r=n[s+1];r===" "||r==="	";)r=n[++s+1];else if(r==="\r"&&n[s+1]===`
`)for(r=n[++s+1];r===" "||r==="	";)r=n[++s+1];else if(r==="x"||r==="u"||r==="U"){let a={x:2,u:4,U:8}[r];t+=zo(n,s+1,a,e),s+=a}else{let a=n.substr(s-1,2);e(s-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(i===" "||i==="	"){let r=s,o=n[s+1];for(;o===" "||o==="	";)o=n[++s+1];o!==`
`&&!(o==="\r"&&n[s+2]===`
`)&&(t+=s>r?n.slice(r,s+1):i)}else t+=i}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function Ho(n,e){let t="",s=n[e+1];for(;(s===" "||s==="	"||s===`
`||s==="\r")&&!(s==="\r"&&n[e+2]!==`
`);)s===`
`&&(t+=`
`),e+=1,s=n[e+1];return t||(t=" "),{fold:t,offset:e}}var Yo={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"\x85",_:"\xA0",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function zo(n,e,t,s){let i=n.substr(e,t),o=i.length===t&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(o)){let a=n.substr(e-2,t+2);return s(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}return String.fromCodePoint(o)}function Tn(n,e,t,s){let{value:i,type:r,comment:o,range:a}=e.type==="block-scalar"?xn(n,e,s):Nn(e,n.options.strict,s),c=t?n.directives.tagName(t.source,d=>s(t,"TAG_RESOLVE_FAILED",d)):null,l;n.options.stringKeys&&n.atKey?l=n.schema[Y]:c?l=Go(n.schema,i,c,t,s):e.type==="scalar"?l=Jo(n,i,e,s):l=n.schema[Y];let u;try{let d=l.resolve(i,h=>s(t!=null?t:e,"TAG_RESOLVE_FAILED",h),n.options);u=E(d)?d:new v(d)}catch(d){let h=d instanceof Error?d.message:String(d);s(t!=null?t:e,"TAG_RESOLVE_FAILED",h),u=new v(i)}return u.range=a,u.source=i,r&&(u.type=r),c&&(u.tag=c),l.format&&(u.format=l.format),o&&(u.comment=o),u}function Go(n,e,t,s,i){var a;if(t==="!")return n[Y];let r=[];for(let c of n.tags)if(!c.collection&&c.tag===t)if(c.default&&c.test)r.push(c);else return c;for(let c of r)if((a=c.test)!=null&&a.test(e))return c;let o=n.knownTags[t];return o&&!o.collection?(n.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(i(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[Y])}function Jo({atKey:n,directives:e,schema:t},s,i,r){var a;let o=t.tags.find(c=>{var l;return(c.default===!0||n&&c.default==="key")&&((l=c.test)==null?void 0:l.test(s))})||t[Y];if(t.compat){let c=(a=t.compat.find(l=>{var u;return l.default&&((u=l.test)==null?void 0:u.test(s))}))!=null?a:t[Y];if(o.tag!==c.tag){let l=e.tagString(o.tag),u=e.tagString(c.tag),d=`Value may be parsed as either ${l} or ${u}`;r(i,"TAG_RESOLVE_FAILED",d,!0)}}return o}function yr(n,e,t){if(e){t!=null||(t=e.length);for(let s=t-1;s>=0;--s){let i=e[s];switch(i.type){case"space":case"comment":case"newline":n-=i.source.length;continue}for(i=e[++s];(i==null?void 0:i.type)==="space";)n+=i.source.length,i=e[++s];break}}return n}var Qo={composeNode:On,composeEmptyNode:Is};function On(n,e,t,s){let i=n.atKey,{spaceBefore:r,comment:o,anchor:a,tag:c}=t,l,u=!0;switch(e.type){case"alias":l=Xo(n,e,s),(a||c)&&s(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=Tn(n,e,c,s),a&&(l.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":l=mr(Qo,n,e,t,s),a&&(l.anchor=a.source.substring(1));break;default:{let d=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;s(e,"UNEXPECTED_TOKEN",d),l=Is(n,e.offset,void 0,null,t,s),u=!1}}return a&&l.anchor===""&&s(a,"BAD_ALIAS","Anchor cannot be an empty string"),i&&n.options.stringKeys&&(!E(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&s(c!=null?c:e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(l.spaceBefore=!0),o&&(e.type==="scalar"&&e.source===""?l.comment=o:l.commentBefore=o),n.options.keepSourceTokens&&u&&(l.srcToken=e),l}function Is(n,e,t,s,{spaceBefore:i,comment:r,anchor:o,tag:a,end:c},l){let u={type:"scalar",offset:yr(e,t,s),indent:-1,source:""},d=Tn(n,u,a,l);return o&&(d.anchor=o.source.substring(1),d.anchor===""&&l(o,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(d.spaceBefore=!0),r&&(d.comment=r,d.range[2]=c),d}function Xo({options:n},{offset:e,source:t,end:s},i){let r=new ye(t.substring(1));r.source===""&&i(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&i(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);let o=e+t.length,a=de(s,o,n.strict,i);return r.range=[e,o,a.offset],a.comment&&(r.comment=a.comment),r}function wr(n,e,{offset:t,start:s,value:i,end:r},o){let a=Object.assign({_directives:e},n),c=new Te(void 0,a),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},u=fe(s,{indicator:"doc-start",next:i!=null?i:r==null?void 0:r[0],offset:t,onError:o,parentIndent:0,startOnNewline:!0});u.found&&(c.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!u.hasNewline&&o(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=i?On(l,i,u,o):Is(l,u.end,s,null,u,o);let d=c.contents.range[2],h=de(r,d,!1,o);return h.comment&&(c.comment=h.comment),c.range=[t,d,h.offset],c}function xt(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];let{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function br(n){var i;let e="",t=!1,s=!1;for(let r=0;r<n.length;++r){let o=n[r];switch(o[0]){case"#":e+=(e===""?"":s?`

`:`
`)+(o.substring(1)||" "),t=!0,s=!1;break;case"%":((i=n[r+1])==null?void 0:i[0])!=="#"&&(r+=1),t=!1;break;default:t||(s=!0),t=!1}}return{comment:e,afterEmptyLine:s}}var Nt=class{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,s,i,r)=>{let o=xt(t);r?this.warnings.push(new At(o,s,i)):this.errors.push(new ne(o,s,i))},this.directives=new le({version:e.version||"1.2"}),this.options=e}decorate(e,t){let{comment:s,afterEmptyLine:i}=br(this.prelude);if(s){let r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${s}`:s;else if(i||e.directives.docStart||!r)e.commentBefore=s;else if(T(r)&&!r.flow&&r.items.length>0){let o=r.items[0];x(o)&&(o=o.key);let a=o.commentBefore;o.commentBefore=a?`${s}
${a}`:s}else{let o=r.commentBefore;r.commentBefore=o?`${s}
${o}`:s}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:br(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,s=-1){for(let i of e)yield*this.next(i);yield*this.end(t,s)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,s,i)=>{let r=xt(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",s,i)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{let t=wr(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{let t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,s=new ne(xt(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(s):this.doc.errors.push(s);break}case"doc-end":{if(!this.doc){let s="Unexpected doc-end without preceding document";this.errors.push(new ne(xt(e),"UNEXPECTED_TOKEN",s));break}this.doc.directives.docEnd=!0;let t=de(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){let s=this.doc.comment;this.doc.comment=s?`${s}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new ne(xt(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){let s=Object.assign({_directives:this.directives},this.options),i=new Te(void 0,s);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}};var In=Symbol("break visit"),Zo=Symbol("skip children"),vr=Symbol("remove item");function Re(n,e){"type"in n&&n.type==="document"&&(n={start:n.start,value:n.value}),kr(Object.freeze([]),n,e)}Re.BREAK=In;Re.SKIP=Zo;Re.REMOVE=vr;Re.itemAtPath=(n,e)=>{let t=n;for(let[s,i]of e){let r=t==null?void 0:t[s];if(r&&"items"in r)t=r.items[i];else return}return t};Re.parentCollection=(n,e)=>{let t=Re.itemAtPath(n,e.slice(0,-1)),s=e[e.length-1][0],i=t==null?void 0:t[s];if(i&&"items"in i)return i;throw new Error("Parent collection not found")};function kr(n,e,t){let s=t(e,n);if(typeof s=="symbol")return s;for(let i of["key","value"]){let r=e[i];if(r&&"items"in r){for(let o=0;o<r.items.length;++o){let a=kr(Object.freeze(n.concat([[i,o]])),r.items[o],t);if(typeof a=="number")o=a-1;else{if(a===In)return In;a===vr&&(r.items.splice(o,1),o-=1)}}typeof s=="function"&&i==="key"&&(s=s(e,n))}}return typeof s=="function"?s(e,n):s}var Pn="\uFEFF",Ln="",Mn="",Ps="";function Sr(n){switch(n){case Pn:return"byte-order-mark";case Ln:return"doc-mode";case Mn:return"flow-error-end";case Ps:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function ie(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}var Cr=new Set("0123456789ABCDEFabcdef"),ta=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Ls=new Set(",[]{}"),sa=new Set(` ,[]{}
\r	`),Bn=n=>!n||sa.has(n),Tt=class{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){var i;if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let s=(i=this.next)!=null?i:"stream";for(;s&&(t||this.hasChars(1));)s=yield*this.parseNext(s)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let s=0;for(;t===" ";)t=this.buffer[++s+e];if(t==="\r"){let i=this.buffer[s+e+1];if(i===`
`||!i&&!this.atEnd)return e+s+1}return t===`
`||s>=this.indentNext||!t&&!this.atEnd?e+s:-1}if(t==="-"||t==="."){let s=this.buffer.substr(e,3);if((s==="---"||s==="...")&&ie(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Pn&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,s=e.indexOf("#");for(;s!==-1;){let r=e[s-1];if(r===" "||r==="	"){t=s-1;break}else s=e.indexOf("#",s+1)}for(;;){let r=e[t-1];if(r===" "||r==="	")t-=1;else break}let i=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){let t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Ln,yield*this.parseLineStart()}*parseLineStart(){let e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");let t=this.peek(3);if((t==="---"||t==="...")&&ie(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!ie(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){let[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&ie(t)){let s=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=s,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);let e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Bn),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,s=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=s=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);let i=this.getLine();if(i===null)return this.setNext("flow");if((s!==-1&&s<this.indentNext&&i[0]!=="#"||s===0&&(i.startsWith("---")||i.startsWith("..."))&&ie(i[3]))&&!(s===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield Mn,yield*this.parseLineStart();let r=0;for(;i[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),i[r]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Bn),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{let o=this.charAt(1);if(this.flowKey||ie(o)||o===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){let e=this.charAt(0),t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}let s=this.buffer.substring(0,t),i=s.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){let r=this.continueScalar(i+1);if(r===-1)break;i=s.indexOf(`
`,r)}i!==-1&&(t=i-(s[i-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){let t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>ie(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,s;e:for(let r=this.pos;s=this.buffer[r];++r)switch(s){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{let o=this.buffer[r+1];if(!o&&!this.atEnd)return this.setNext("block-scalar");if(o===`
`)break}default:break e}if(!s&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{let r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let i=e+1;for(s=this.buffer[i];s===" ";)s=this.buffer[++i];if(s==="	"){for(;s==="	"||s===" "||s==="\r"||s===`
`;)s=this.buffer[++i];e=i-1}else if(!this.blockScalarKeep)do{let r=e-1,o=this.buffer[r];o==="\r"&&(o=this.buffer[--r]);let a=r;for(;o===" ";)o=this.buffer[--r];if(o===`
`&&r>=this.pos&&r+1+t>a)e=r;else break}while(!0);return yield Ps,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){let e=this.flowLevel>0,t=this.pos-1,s=this.pos-1,i;for(;i=this.buffer[++s];)if(i===":"){let r=this.buffer[s+1];if(ie(r)||e&&Ls.has(r))break;t=s}else if(ie(i)){let r=this.buffer[s+1];if(i==="\r"&&(r===`
`?(s+=1,i=`
`,r=this.buffer[s+1]):t=s),r==="#"||e&&Ls.has(r))break;if(i===`
`){let o=this.continueScalar(s+1);if(o===-1)break;s=Math.max(s,o-2)}}else{if(e&&Ls.has(i))break;t=s}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield Ps,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){let s=this.buffer.slice(this.pos,e);return s?(yield s,this.pos+=s.length,s.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Bn))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{let e=this.flowLevel>0,t=this.charAt(1);if(ie(t)||e&&Ls.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!ie(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(ta.has(t))t=this.buffer[++e];else if(t==="%"&&Cr.has(this.buffer[e+1])&&Cr.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){let e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,s;do s=this.buffer[++t];while(s===" "||e&&s==="	");let i=t-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=t),i}*pushUntil(e){let t=this.pos,s=this.buffer[t];for(;!e(s);)s=this.buffer[++t];return yield*this.pushToIndex(t,!1)}};var Ot=class{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,s=this.lineStarts.length;for(;t<s;){let r=t+s>>1;this.lineStarts[r]<e?t=r+1:s=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};let i=this.lineStarts[t-1];return{line:t,col:e-i+1}}}};function Ie(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function Er(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function _r(n){switch(n==null?void 0:n.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Ms(n){var e;switch(n.type){case"document":return n.start;case"block-map":{let t=n.items[n.items.length-1];return(e=t.sep)!=null?e:t.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function Ze(n){var t;if(n.length===0)return[];let e=n.length;e:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=n[++e])==null?void 0:t.type)==="space";);return n.splice(e,n.length)}function Ar(n){if(n.start.type==="flow-seq-start")for(let e of n.items)e.sep&&!e.value&&!Ie(e.start,"explicit-key-ind")&&!Ie(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,_r(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}var It=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Tt,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(let s of this.lexer.lex(e,t))yield*this.next(s);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}let t=Sr(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{let s=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:s,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){let e=this.peek(1);if(this.type==="doc-end"&&(!e||e.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){let t=e!=null?e:this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{let s=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in s?s.indent:0:t.type==="flow-collection"&&s.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Ar(t),s.type){case"document":s.value=t;break;case"block-scalar":s.props.push(t);break;case"block-map":{let i=s.items[s.items.length-1];if(i.value){s.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=t;else{Object.assign(i,{key:t,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{let i=s.items[s.items.length-1];i.value?s.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{let i=s.items[s.items.length-1];!i||i.value?s.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((s.type==="document"||s.type==="block-map"||s.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){let i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&Er(i.start)===-1&&(t.indent===0||i.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(s.type==="document"?s.end=i.start:s.items.push({start:i.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{let e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Er(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}let t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){let t=Ms(this.peek(2)),s=Ze(t),i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];let r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:s,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var s;let t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){let i="end"in t.value?t.value.end:void 0,r=Array.isArray(i)?i[i.length-1]:void 0;(r==null?void 0:r.type)==="comment"?i==null||i.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){let i=e.items[e.items.length-2],r=(s=i==null?void 0:i.value)==null?void 0:s.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){let i=!this.onKeyLine&&this.indent===e.indent,r=i&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind",o=[];if(r&&t.sep&&!t.value){let a=[];for(let c=0;c<t.sep.length;++c){let l=t.sep[c];switch(l.type){case"newline":a.push(c);break;case"space":break;case"comment":l.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(o=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(o.push(this.sourceToken),e.items.push({start:o}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(o.push(this.sourceToken),e.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Ie(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(_r(t.key)&&!Ie(t.sep,"newline")){let a=Ze(t.start),c=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:c,sep:l}]})}else o.length>0?t.sep=t.sep.concat(o,this.sourceToken):t.sep.push(this.sourceToken);else if(Ie(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{let a=Ze(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?e.items.push({start:o,key:null,sep:[this.sourceToken]}):Ie(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{let a=this.flowScalar(this.type);r||t.value?(e.items.push({start:o,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{let a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Ie(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&e.items.push({start:o});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var s;let t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){let i="end"in t.value?t.value.end:void 0,r=Array.isArray(i)?i[i.length-1]:void 0;(r==null?void 0:r.type)==="comment"?i==null||i.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){let i=e.items[e.items.length-2],r=(s=i==null?void 0:i.value)==null?void 0:s.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Ie(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){let i=this.startBlockValue(e);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){let t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let s;do yield*this.pop(),s=this.peek(1);while(s&&s.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{let i=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}let s=this.startBlockValue(e);s?this.stack.push(s):(yield*this.pop(),yield*this.step())}else{let s=this.peek(2);if(s.type==="block-map"&&(this.type==="map-value-ind"&&s.indent===e.indent||this.type==="newline"&&!s.items[s.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&s.type!=="flow-collection"){let i=Ms(s),r=Ze(i);Ar(e);let o=e.end.splice(1,e.end.length);o.push(this.sourceToken);let a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;let t=Ms(e),s=Ze(t);return s.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;let t=Ms(e),s=Ze(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(s=>s.type==="newline"||s.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}};function na(n){let e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new Ot||null,prettyErrors:e}}function xr(n,e={}){let{lineCounter:t,prettyErrors:s}=na(e),i=new It(t==null?void 0:t.addNewLine),r=new Nt(e),o=null;for(let a of r.compose(i.parse(n),!0,n.length))if(!o)o=a;else if(o.options.logLevel!=="silent"){o.errors.push(new ne(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return s&&t&&(o.errors.forEach(Cn(n,t)),o.warnings.forEach(Cn(n,t))),o}function Rn(n,e,t){let s;typeof e=="function"?s=e:t===void 0&&e&&typeof e=="object"&&(t=e);let i=xr(n,t);if(!i)return null;if(i.warnings.forEach(r=>ds(i.options.logLevel,r)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:s},t))}function Nr(n){let e=Rn(n);return ra(e.name)}function ra(n){let e=document.createElement("div"),t=document.createElement("h1");return t.textContent=n,t.style.margin="0",t.style.padding="0",e.appendChild(t),e}var B=require("obsidian");function Tr(n){return!n.modelId||!n.modelName?!1:Jt(n)?!!n.apiKey:Qt(n)?!!(n.accessKeyId&&n.secretAccessKey&&n.region):Xt(n)||Zt(n)?!!n.apiKey:!1}function Bs(n){switch(n){case"google":return"Google Gemini";case"bedrock":return"AWS Bedrock";case"openai":return"OpenAI";case"anthropic":return"Anthropic";default:return"Unknown Provider"}}function Or(n){let e=["modelId","modelName"];switch(n){case"google":return[...e,"apiKey"];case"bedrock":return[...e,"accessKeyId","secretAccessKey","region"];case"openai":return[...e,"apiKey"];case"anthropic":return[...e,"apiKey"];default:return e}}function Ir(n){let e={modelId:"",modelName:"",color:"#000000"};switch(n){case"google":return{...e,provider:"google",apiKey:""};case"bedrock":return{...e,provider:"bedrock",accessKeyId:"",secretAccessKey:"",region:"us-east-1"};case"openai":return{...e,provider:"openai",apiKey:""};case"anthropic":return{...e,provider:"anthropic",apiKey:""};default:throw new Error(`Unsupported provider: ${n}`)}}function Pr(){return["google","bedrock","openai","anthropic"]}var Dn=class extends B.PluginSettingTab{constructor(t,s){super(t,s);this.selectedModelIndex=-1;this.plugin=s}display(){let{containerEl:t}=this;t.empty(),new B.Setting(t).setName("AI Model Configuration").setDesc("Configure your AI models and providers.").setHeading(),this.renderModelList(t),this.renderAddModelSection(t),new B.Setting(t).setName("Socket Server Address").setDesc("The address of the UseAI WebSocket server (e.g., http://localhost:3000).").addText(s=>s.setPlaceholder("Enter WebSocket server address").setValue(this.plugin.settings.socketAddress).onChange(async i=>{i.startsWith("http")&&(this.plugin.settings.socketAddress=i,await this.plugin.saveSettings(),this.plugin.socket&&this.plugin.socket.connected&&this.plugin.socket.disconnect(),await this.plugin.initializeSocketConnection())})),new B.Setting(t).setName("Default system prompt").setDesc("The system prompt sent with each request to the API.").setClass("autoFlow").addTextArea(s=>{s.inputEl.rows=5,s.setValue(this.plugin.settings.systemPrompt),s.onChange(async i=>{this.plugin.settings.systemPrompt=i,await this.plugin.saveSettings()})}),new B.Setting(t).setName("Follow me on Twitter").setDesc("@duocdev").addButton(s=>{s.setCta(),s.setButtonText("Document").onClick(()=>{window.open("https://useai.aiocean.io/")})}).addButton(s=>{s.setCta(),s.setButtonText("Follow for update").onClick(()=>{window.open("https://twitter.com/duocdev")})}).addButton(s=>{s.setCta(),s.setButtonText("Bug report").onClick(()=>{window.open("https://aiocean.atlassian.net/servicedesk/customer/portal/5")})}).addButton(s=>{s.buttonEl.outerHTML="<a href='https://paypal.me/duocnguyen' target='_blank'><img style='border:0px;height:35px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' /></a>"})}renderModelList(t){let s=t.createDiv("model-list-container");if(this.plugin.settings.models.length===0){let i=s.createDiv("empty-state");i.textContent="No models configured. Add a model to get started.",i.style.textAlign="center",i.style.color="var(--text-muted)",i.style.padding="20px";return}this.plugin.settings.models.forEach((i,r)=>{this.renderModelCard(s,i,r)})}renderModelCard(t,s,i){let r=t.createDiv("model-card");r.style.border="1px solid var(--background-modifier-border)",r.style.borderRadius="8px",r.style.padding="16px",r.style.marginBottom="12px",r.style.backgroundColor="var(--background-secondary)";let o=r.createDiv("model-header");o.style.display="flex",o.style.justifyContent="space-between",o.style.alignItems="center",o.style.marginBottom="12px";let a=o.createDiv("model-info"),c=a.createDiv("model-title");c.textContent=s.modelName||s.modelId,c.style.fontWeight="bold",c.style.fontSize="16px";let l=a.createDiv("model-meta");l.style.fontSize="12px",l.style.color="var(--text-muted)",l.textContent=`${Bs(s.provider)} \u2022 ${s.modelId}`;let u=o.createDiv("model-actions");if(u.style.display="flex",u.style.gap="8px",u.style.alignItems="center",s.modelId===this.plugin.settings.activeModelId){let f=u.createSpan("active-indicator");f.textContent="\u2713 Active",f.style.color="var(--color-green)",f.style.fontSize="12px",f.style.fontWeight="bold"}else{let f=u.createEl("button",{text:"Set Active"});f.style.fontSize="12px",f.style.padding="4px 8px",f.addEventListener("click",async()=>{this.plugin.settings.activeModelId=s.modelId,await this.plugin.saveSettings(),this.display()})}let d=u.createEl("button",{text:"Edit"});d.style.fontSize="12px",d.style.padding="4px 8px",d.addEventListener("click",()=>{this.selectedModelIndex=i,this.display()});let h=u.createEl("button",{text:"Delete"});h.style.fontSize="12px",h.style.padding="4px 8px",h.style.color="var(--color-red)",h.addEventListener("click",async()=>{this.plugin.settings.models.splice(i,1),s.modelId===this.plugin.settings.activeModelId&&this.plugin.settings.models.length>0&&(this.plugin.settings.activeModelId=this.plugin.settings.models[0].modelId),await this.plugin.saveSettings(),this.display()});let p=Tr(s),m=r.createDiv("validation-status");if(m.style.fontSize="12px",m.style.marginBottom="8px",p)m.textContent="\u2713 Configuration is valid",m.style.color="var(--color-green)";else{m.textContent="\u26A0 Missing required fields",m.style.color="var(--color-orange)";let g=Or(s.provider).filter(y=>{let w=s[y];return!w||typeof w=="string"&&w.trim()===""});if(g.length>0){let y=m.createDiv("validation-details");y.textContent=`Missing: ${g.join(", ")}`,y.style.fontSize="11px",y.style.marginTop="4px"}}if(this.selectedModelIndex===i){let f=r.createDiv("model-config-form");f.style.marginTop="16px",f.style.paddingTop="16px",f.style.borderTop="1px solid var(--background-modifier-border)",this.renderModelConfigForm(f,s,i)}}renderModelConfigForm(t,s,i){new B.Setting(t).setName("Provider").setDesc("The AI provider for this model").addText(c=>{c.setValue(Bs(s.provider)),c.inputEl.disabled=!0}),new B.Setting(t).setName("Model ID").setDesc("The unique identifier for this model").addText(c=>{c.setValue(s.modelId),c.onChange(async l=>{s.modelId=l,await this.plugin.saveSettings()})}),new B.Setting(t).setName("Model Name").setDesc("Display name for this model").addText(c=>{c.setValue(s.modelName),c.onChange(async l=>{s.modelName=l,await this.plugin.saveSettings()})}),this.renderProviderSpecificFields(t,s),this.renderOptionalFields(t,s);let r=t.createDiv("form-actions");r.style.marginTop="16px",r.style.display="flex",r.style.gap="8px",r.createEl("button",{text:"Save & Close"}).addEventListener("click",async()=>{await this.plugin.saveSettings(),this.selectedModelIndex=-1,this.display()}),r.createEl("button",{text:"Cancel"}).addEventListener("click",()=>{this.selectedModelIndex=-1,this.display()})}renderProviderSpecificFields(t,s){switch(s.provider){case"google":new B.Setting(t).setName("API Key").setDesc("Your Google AI Studio API key").addText(i=>{i.inputEl.type="password",i.setValue(s.apiKey||""),i.onChange(async r=>{s.apiKey=r,await this.plugin.saveSettings()})});break;case"bedrock":new B.Setting(t).setName("Access Key ID").setDesc("Your AWS Access Key ID").addText(i=>{i.setValue(s.accessKeyId||""),i.onChange(async r=>{s.accessKeyId=r,await this.plugin.saveSettings()})}),new B.Setting(t).setName("Secret Access Key").setDesc("Your AWS Secret Access Key").addText(i=>{i.inputEl.type="password",i.setValue(s.secretAccessKey||""),i.onChange(async r=>{s.secretAccessKey=r,await this.plugin.saveSettings()})}),new B.Setting(t).setName("Region").setDesc("AWS region (e.g., us-east-1)").addText(i=>{i.setValue(s.region||"us-east-1"),i.onChange(async r=>{s.region=r,await this.plugin.saveSettings()})}),new B.Setting(t).setName("Model ARN (Optional)").setDesc("Specific model ARN if needed").addText(i=>{i.setValue(s.modelArn||""),i.onChange(async r=>{s.modelArn=r||void 0,await this.plugin.saveSettings()})});break;case"openai":new B.Setting(t).setName("API Key").setDesc("Your OpenAI API key").addText(i=>{i.inputEl.type="password",i.setValue(s.apiKey||""),i.onChange(async r=>{s.apiKey=r,await this.plugin.saveSettings()})}),new B.Setting(t).setName("Organization (Optional)").setDesc("Your OpenAI organization ID").addText(i=>{i.setValue(s.organization||""),i.onChange(async r=>{s.organization=r||void 0,await this.plugin.saveSettings()})}),new B.Setting(t).setName("Base URL (Optional)").setDesc("Custom API base URL").addText(i=>{i.setValue(s.baseUrl||""),i.onChange(async r=>{s.baseUrl=r||void 0,await this.plugin.saveSettings()})});break;case"anthropic":new B.Setting(t).setName("API Key").setDesc("Your Anthropic API key").addText(i=>{i.inputEl.type="password",i.setValue(s.apiKey||""),i.onChange(async r=>{s.apiKey=r,await this.plugin.saveSettings()})});break}}renderOptionalFields(t,s){new B.Setting(t).setName("Temperature (Optional)").setDesc("Controls randomness (0.0 to 2.0)").addText(i=>{var r;i.setValue(((r=s.temperature)==null?void 0:r.toString())||""),i.onChange(async o=>{let a=parseFloat(o);s.temperature=isNaN(a)?void 0:a,await this.plugin.saveSettings()})}),new B.Setting(t).setName("Top K (Optional)").setDesc("Limits token selection (1 to 100)").addText(i=>{var r;i.setValue(((r=s.topK)==null?void 0:r.toString())||""),i.onChange(async o=>{let a=parseInt(o);s.topK=isNaN(a)?void 0:a,await this.plugin.saveSettings()})}),new B.Setting(t).setName("Top P (Optional)").setDesc("Nucleus sampling (0.0 to 1.0)").addText(i=>{var r;i.setValue(((r=s.topP)==null?void 0:r.toString())||""),i.onChange(async o=>{let a=parseFloat(o);s.topP=isNaN(a)?void 0:a,await this.plugin.saveSettings()})}),new B.Setting(t).setName("Color (Optional)").setDesc("Color for UI representation").addText(i=>{i.inputEl.type="color",i.setValue(s.color||"#000000"),i.onChange(async r=>{s.color=r,await this.plugin.saveSettings()})})}renderAddModelSection(t){let s=t.createDiv("add-model-section");s.style.marginTop="20px",new B.Setting(s).setName("Add New Model").setDesc("Add a new AI model configuration").addDropdown(i=>{i.addOption("","Select a provider..."),Pr().forEach(r=>{i.addOption(r,Bs(r))}),i.onChange(async r=>{if(r){let o=Ir(r);this.plugin.settings.models.push(o),this.plugin.settings.models.length===1&&(this.plugin.settings.activeModelId=o.modelId),await this.plugin.saveSettings(),this.selectedModelIndex=this.plugin.settings.models.length-1,this.display()}})})}},Lr=Dn;var qn="",Fn=[],$n={debug:!1,systemPrompt:qn,socketAddress:"https://useai-server.fly.dev",models:Fn,activeModelId:""};var Pt=require("obsidian");var Lt="useai-prompt-view",Rs=class extends Pt.ItemView{constructor(t,s){super(t);this.eventListeners=[];this.plugin=s}getViewType(){return Lt}getDisplayText(){return"AI Prompt"}getIcon(){return"sparkles"}async onOpen(){this.cleanupEventListeners();let t=this.containerEl.children[1];t.empty(),t.addClass("useai-prompt-view");let s=t.createEl("div",{cls:"useai-prompt-form"}),i=s.createEl("div",{cls:"useai-presets-section"});i.createEl("label",{text:"Quick Presets",cls:"useai-prompt-label"});let r=i.createEl("div",{cls:"useai-presets-grid"});[{name:"Connect Ideas",prompt:`<task>
Analyze this node and identify connections to other concepts, creating a network of related ideas using systems thinking and network effects principles.
</task>

<mental_models>
- Network effects: Ideas become more valuable when connected
- Systems thinking: Understanding relationships and feedback loops
- Second-order thinking: What connections lead to what other connections?
</mental_models>

<instructions>
1. Identify the core concepts in this node
2. Think of related ideas, theories, or concepts that connect to this content
3. Create child nodes for each major connection with:
   - The related concept/idea
   - How it connects to the original content
   - Why this connection is meaningful
   - What new insights emerge from this connection
4. Consider connections across different domains (interdisciplinary thinking)
5. Look for both obvious and non-obvious relationships
</instructions>

<connection_types>
- Causal relationships (what causes what)
- Analogical connections (similar patterns in different domains)
- Contradictory ideas (what challenges this concept)
- Supporting evidence from other fields
- Historical parallels or precedents
- Future implications and trends
</connection_types>

<output_format>
Create multiple child nodes titled "Connection: [Related Concept]" with detailed explanations of how ideas relate and what insights emerge from these connections.
</output_format>`},{name:"First Principles",prompt:`<task>
Break down the content of this node to its fundamental truths and rebuild understanding from the ground up using first principles thinking.
</task>

<mental_models>
- First principles thinking: Strip away assumptions to find fundamental truths
- Occam's razor: Seek the simplest explanation that accounts for the facts
- The map is not the territory: Distinguish between models and reality
</mental_models>

<instructions>
1. Identify all assumptions embedded in the current content
2. Question each assumption: "Is this necessarily true?"
3. Break down to the most basic, undeniable facts
4. Rebuild the concept from these fundamentals
5. Compare the rebuilt understanding with the original
6. Identify what was assumption vs. what is fundamental truth
</instructions>

<analysis_framework>
For each major claim or concept:
- What evidence supports this as a fundamental truth?
- What assumptions are we making?
- If we started from scratch, what would we conclude?
- What would someone from a completely different background think?
- What are the core mechanisms at work here?
</analysis_framework>

<output_format>
Create a child node titled "First Principles: [Topic]" with:
- Fundamental truths identified
- Assumptions questioned and evaluated
- Rebuilt understanding from basics
- Comparison with original assumptions
- New insights gained from this analysis
</output_format>`},{name:"Mental Models",prompt:`<persona>You are a strategic thinking facilitator specializing in multi-perspective analysis and knowledge synthesis. You excel at breaking down complex problems into interconnected insights using diverse analytical frameworks.
</persona>

<task>
Generate a comprehensive multi-perspective analysis by creating interconnected notes that explore the topic/problem from diverse analytical angles, revealing hidden patterns, assumptions, and possibilities.
</task>

<thinking_process>
1. First, identify the core challenge or uncertainty
2. Select 3-5 complementary analytical lenses based on the nature of the content
3. For each lens, think through:
   - What unique perspective does this lens offer?
   - What patterns or insights become visible?
   - What assumptions are challenged?
   - What new questions emerge?
4. Look for connections and tensions between different perspectives
5. Synthesize emergent insights that weren't visible from any single viewpoint
</thinking_process>

<analytical_lenses>
Dynamically select from these based on relevance:

Strategic Lenses:
- Stakeholder Mapping: Who gains, who loses, who decides?
- Resource Flows: What moves where and why?
- Power Dynamics: Where does influence concentrate?
- Timeline Analysis: How does this evolve over time?

Cognitive Lenses:
- Assumption Hunting: What are we taking for granted?
- Counterfactual Thinking: What if the opposite were true?
- Analogical Reasoning: What does this remind us of?
- First Principles: What's fundamentally true here?

Systems Lenses:
- Feedback Loops: What reinforces or dampens?
- Bottlenecks: Where does flow get restricted?
- Emergence: What properties arise from interactions?
- Boundaries: What's included vs excluded?

Decision Lenses:
- Option Space: What choices actually exist?
- Reversibility: What can be undone?
- Information Value: What would we pay to know?
- Regret Minimization: What would we wish we'd considered?
</analytical_lenses>

<output_structure>
Create a network of notes with that will be connected with the selected note, following the architecture:

1. **Overview Note**: "[Topic] - Multi-Perspective Analysis"
   - Problem/situation summary
   - Key uncertainties identified
   - Map of analytical lenses applied
   - Links to all perspective notes

2. **Perspective Notes** (one per lens): "[Lens Name]: [Topic]"
   - Why this lens matters here
   - Key observations through this lens
   - Unique insights revealed
   - Critical questions raised
   - Connections to other perspectives

3. **Synthesis Note**: "Emergent Insights: [Topic]"
   - Patterns across perspectives
   - Productive tensions identified
   - Novel understanding achieved
   - Actionable next steps
   - Remaining uncertainties worth exploring

4. **Optional Deep-Dive Notes**: For particularly rich insights
   - Detailed exploration of specific findings
   - Evidence and examples
   - Implications and applications
</output_structure>

<quality_criteria>
- Each perspective should reveal something non-obvious
- Perspectives should be genuinely different, not variations of the same view
- Connections between perspectives should generate new insights
- The synthesis should be more than the sum of parts
- Output should reduce confusion while honoring complexity
</quality_criteria>

<adaptation_guidance>
- For technical problems: Emphasize systems and first-principles lenses
- For human/social challenges: Prioritize stakeholder and power dynamics
- For strategic decisions: Focus on options, timeline, and regret minimization
- For creative blocks: Use analogical and counterfactual thinking
- When completely stuck: Start with assumption hunting and inversion
</adaptation_guidance>`},{name:"Action Items",prompt:`<context>
You are an execution strategist helping users convert knowledge into systematic action. You have access to a note graph and can create or modify notes to build comprehensive implementation plans.
</context>

<objective>
Analyze the selected note(s) to extract core insights and architect a results-driven action blueprint that bridges the gap between understanding and execution.
</objective>

<thinking_framework>
Apply these cognitive strategies:
1. Outcome Mapping: Define clear end-states before determining paths
2. Force Field Analysis: Map driving and restraining forces for each action
3. Pre-mortem Planning: Anticipate failures to design preventive measures
4. Leverage Points: Identify high-impact interventions in the system
</thinking_framework>

<process>
<step_1>
Deconstruct the note content:
- Extract 3-5 fundamental insights or principles
- Identify implicit assumptions and dependencies
- Note any referenced resources or connections
</step_1>

<step_2>
For each insight, design actions using the RAPIDS framework:
- Results: What measurable outcome will this create?
- Activities: What specific behaviors must occur?
- Prerequisites: What must be true/available first?
- Indicators: How will progress be tracked?
- Dependencies: What external factors influence success?
- Scenarios: What if things go wrong? What if they go better?
</step_2>

<step_3>
Structure actions by:
- Effort/Impact matrix (prioritize high impact, low effort)
- Sequential dependencies (what must happen first)
- Resource constraints (time, attention, tools)
- Risk exposure (what could derail progress)
</step_3>
</process>

<output_specification>
Generate a new note titled "Implementation Blueprint: [Core Topic]" containing:

## \u{1F3AF} Target Outcomes
[List 2-3 specific, measurable end results]

## \u{1F50D} Key Insights Applied
[Brief summary of insights being actioned]

## \u{1F4CB} Action Sequence
For each action:
### Action [Number]: [Descriptive Title]
- **What**: [Specific behavior/task]
- **Why**: [Link to insight & expected impact]
- **When**: [Trigger/timeline/frequency]
- **Success Looks Like**: [Observable criteria]
- **Resources Needed**: [Tools/people/information]
- **Failure Modes**: [Common pitfalls + prevention]
- **If Blocked**: [Alternative approach]
- **Next Action**: [What follows completion]

## \u{1F4CA} Progress Dashboard
[Simple tracking method for the action set]

## \u{1F504} Review Triggers
[When/how to revisit and adjust the plan]
</output_specification>

<quality_criteria>
- Actions must be specific enough to do tomorrow
- Each action connects clearly to source insights
- Failure scenarios have mitigation strategies
- Progress is measurable without complex tracking
- The plan adapts to different scenarios
</quality_criteria>`},{name:"Assumptions Check",prompt:`<persona>
You are a critical thinking analyst specialized in uncovering hidden assumptions and cognitive biases in arguments, ideas, and beliefs.
</persona>

<context>
You're analyzing content from a note graph where users want to examine the validity of their thinking. Selected notes (if any) contain ideas, arguments, or beliefs that may rest on unexamined assumptions.
</context>

<task>
Systematically identify, examine, and challenge all assumptions within the content to help users think more clearly and avoid logical pitfalls.
</task>

<thinking_framework>
Apply these analytical lenses:
- Inversion: "What if the opposite were true?"
- First Principles: "What do we know for certain vs. what do we assume?"
- Devil's Advocate: "What would a skeptic say?"
- Hidden Dependencies: "What must be true for this to work?"
- Alternative Explanations: "What else could explain this?"
</thinking_framework>

<analysis_steps>
<step_1>
Surface all assumptions:
- Explicit statements taken as given
- Implicit beliefs underlying the logic
- Cultural or contextual assumptions
- Causal assumptions (A leads to B)
- Value judgments presented as facts
</step_1>

<step_2>
For each assumption, investigate:
- Is this actually true or just believed to be true?
- What evidence supports this?
- What evidence contradicts this?
- Who benefits from this assumption?
- What's the cost of being wrong?
</step_2>

<step_3>
Challenge through inversion:
- State the opposite of each assumption
- Explore scenarios where the opposite is true
- Identify which assumptions are most fragile
- Consider hybrid possibilities (partially true)
</step_3>
</analysis_steps>

<instructions>
1. Read through all content carefully
2. Extract every claim, belief, or statement that relies on assumptions
3. Categorize assumptions by type (factual, causal, value-based, etc.)
4. Apply the thinking framework to each major assumption
5. Rate assumption strength (1-10) based on evidence
6. Suggest ways to test or validate uncertain assumptions
7. Highlight which assumptions are most critical to the overall argument
</instructions>

<output_format>
Create a comprehensive analysis note with:

**Title:** "\u26A0\uFE0F Assumption Analysis: [Main Topic]"

**Summary:** Brief overview of key findings

**Assumptions Identified:**
For each assumption:
- **Assumption:** [Clear statement]
- **Type:** [Factual/Causal/Value/Cultural/etc.]
- **Evidence For:** [What supports this]
- **Evidence Against:** [What contradicts this]
- **If Inverted:** [What if opposite is true?]
- **Confidence Level:** [1-10 with reasoning]
- **Testing Method:** [How to validate]

**Critical Findings:**
- Most questionable assumptions
- Assumptions with highest impact if wrong
- Alternative interpretations overlooked

**Recommendations:**
- Which assumptions need immediate validation
- How to strengthen the argument
- Alternative approaches to consider
</output_format>

<tone>
Constructively skeptical, thorough, and intellectually honest. Challenge ideas respectfully while maintaining focus on improving thinking quality.
</tone>

<example_questions>
When analyzing, constantly ask:
- "How do we know this is true?"
- "What are we not seeing?"
- "Could there be another explanation?"
- "What would need to change for this to be false?"
- "Are we confusing correlation with causation?"
- "What biases might be influencing this view?"
</example_questions>`},{name:"Learning Path",prompt:`<persona>
You are an expert learning architect with deep expertise in cognitive science, instructional design, and knowledge management. You excel at creating personalized learning ecosystems that adapt to individual needs.
</persona>

<task>
Design a comprehensive knowledge acquisition framework that transforms raw information into mastery through systematic progression and adaptive learning strategies.
</task>

<context>
The user needs to master a complex topic but lacks a clear roadmap. Success means creating a learning journey that:
- Identifies and fills knowledge gaps systematically
- Builds competence through progressive challenges
- Ensures long-term retention and practical application
- Adapts to the learner's pace and style
</context>

<thinking_process>
Before creating the framework, analyze:
1. What is the learner's current relationship with this topic?
2. What are the hidden prerequisites often overlooked?
3. How can we create feedback loops for continuous improvement?
4. What real-world applications will cement understanding?
5. How do we measure true comprehension vs surface knowledge?
</thinking_process>

<framework_components>
<knowledge_mapping>
- Competence audit: Map what you truly understand vs what you think you know
- Dependency graph: Visualize how concepts interconnect and build upon each other
- Difficulty gradient: Order topics by cognitive load and prerequisite requirements
</knowledge_mapping>

<learning_architecture>
- Foundation phase: Core mental models and fundamental principles
- Construction phase: Building blocks and pattern recognition
- Integration phase: Connecting concepts across domains
- Mastery phase: Teaching others and creating original work
</learning_architecture>

<practice_design>
- Micro-challenges: 5-minute daily exercises targeting specific skills
- Project milestones: Real-world applications at each competence level
- Failure scenarios: Deliberately difficult problems to expose gaps
- Peer teaching: Explain concepts to validate understanding
</practice_design>

<retention_system>
- Active recall protocols: Question sets that force retrieval
- Spaced interval calendar: Optimal review timing based on forgetting curves
- Concept chaining: Link new knowledge to existing mental models
- Application diary: Document real-world uses of learned concepts
</retention_system>
</framework_components>

<output_requirements>
Generate a multi-dimensional learning blueprint that includes:

1. **Competence Baseline**
   - Current knowledge inventory with confidence ratings
   - Misconception identification and correction plan
   - Learning style assessment results

2. **Progressive Mastery Ladder**
   - Atomic skills breakdown with clear success criteria
   - Checkpoint assessments at each level
   - Alternative paths for different learning preferences

3. **Resource Ecosystem**
   - Primary sources mapped to specific objectives
   - Supplementary materials for different perspectives
   - Community connections for peer learning

4. **Implementation Schedule**
   - Daily/weekly/monthly learning rhythms
   - Buffer time for struggle and consolidation
   - Celebration milestones for motivation

5. **Evolution Metrics**
   - Leading indicators of progress
   - Competence verification methods
   - Adaptation triggers for course correction
</output_requirements>

<format>
Structure the output as an interactive learning contract with:
- Executive summary of the journey ahead
- Visual roadmap with decision points
- Detailed phase-by-phase breakdown
- Self-assessment tools and trackers
- Quick reference guides for each stage
</format>

<tone>
Empowering yet realistic, acknowledging that mastery requires effort while providing clear, achievable steps forward. Balance academic rigor with practical accessibility.
</tone>`},{name:"Decision Framework",prompt:`<context>
The user needs a comprehensive decision-making framework that can be applied to complex business or personal decisions. They want to move beyond intuitive decision-making to a systematic approach that reduces bias, considers multiple perspectives, and accounts for uncertainty. Success means creating a reusable framework that leads to better outcomes and fewer decision regrets.
</context>

<task>
Analyze the provided content and construct a multi-layered decision-making framework that integrates proven mental models, incorporates systematic evaluation methods, and provides clear implementation guidance. You have the context is the current notes of user. You have to use this ask your knowledge about my situation and the content to create the best decision framework.
</task>

<thinking_approach>
Before creating the framework, think through these steps:
1. Identify the core decision types and complexity levels in the content
2. Select the most relevant mental models for each decision type
3. Design evaluation criteria that balance quantitative and qualitative factors
4. Build in safeguards against common cognitive biases
5. Create feedback loops for continuous improvement
</thinking_approach>

<mental_models_to_integrate>
- **Decision matrix**: Systematic scoring of options against weighted criteria
- **Opportunity cost analysis**: Explicit consideration of trade-offs and alternatives foregone
- **Margin of safety**: Building buffers for uncertainty and downside protection
- **Incentive mapping**: Understanding how different stakeholders' motivations align or conflict
- **Pre-mortem analysis**: Anticipating failure modes before they occur
- **Reversibility assessment**: Evaluating the cost and feasibility of changing course
- **Second-order thinking**: Considering consequences of consequences
- **Base rate analysis**: Using historical data and outside view for calibration
</mental_models_to_integrate>

<framework_structure>
For each decision framework, include these components:

**Decision Definition**
- Clear problem statement with specific scope and boundaries
- Key assumptions and constraints
- Decision timeline and urgency level

**Stakeholder Analysis**
- Primary and secondary stakeholders
- Their interests, concerns, and decision criteria
- Power dynamics and influence mapping

**Options Generation**
- Systematic brainstorming of alternatives
- Including "do nothing" and hybrid options
- Creative options beyond obvious choices

**Evaluation Matrix**
- Weighted criteria based on strategic priorities
- Quantitative metrics where possible
- Qualitative assessments with clear scoring rubrics
- Risk-adjusted scoring considering uncertainty

**Risk Assessment**
- Probability and impact analysis for each option
- Scenario planning (best case, worst case, most likely)
- Identification of key assumptions and sensitivities
- Mitigation strategies for top risks

**Implementation Planning**
- Resource requirements and timeline
- Key milestones and decision gates
- Monitoring metrics and feedback mechanisms
- Contingency plans and pivot triggers
</framework_structure>

<output_format>
Structure your response using these XML tags:

<decision_framework_title>[Specific Topic] Decision Framework</decision_framework_title>

<framework_overview>
Brief summary of the decision domain and why this framework matters
</framework_overview>

<decision_types>
Categorize the main types of decisions in this domain
</decision_types>

<systematic_approach>
Step-by-step process for applying the framework
</systematic_approach>

<evaluation_tools>
Specific templates, checklists, and scoring methods
</evaluation_tools>

<bias_safeguards>
Built-in protections against common decision-making errors
</bias_safeguards>

<implementation_guide>
Practical steps for putting this framework into practice
</implementation_guide>

<review_process>
How to learn from decisions and improve the framework over time
</review_process>
</output_format>

<tone>
Professional yet practical. Focus on actionable insights rather than theoretical concepts. Use clear, concise language that busy decision-makers can quickly understand and apply. Include specific examples where helpful to illustrate key points.
</tone>

<quality_standards>
The framework should be:
- Comprehensive yet usable in real-world time constraints
- Flexible enough to adapt to different decision contexts
- Grounded in proven decision science principles
- Include both individual and group decision-making considerations
- Provide clear success metrics and improvement mechanisms
</quality_standards>`},{name:"Research Guide",prompt:`<persona>
You are a Strategic Research Architect specializing in knowledge discovery and systematic investigation design.
</persona>

<context>
The user has provided content that requires deeper investigation. Your role is to architect a research strategy that uncovers hidden insights, validates assumptions, and expands understanding through methodical inquiry.
</context>

<task>
Design an adaptive research ecosystem that evolves based on discoveries, creating a living framework for continuous knowledge development.
</task>

<thinking_framework>
Apply these cognitive lenses sequentially:
1. Knowledge Archaeology: Excavate implicit assumptions and buried questions
2. Hypothesis Cascading: Generate interconnected research hypotheses 
3. Evidence Triangulation: Design multi-source validation approaches
4. Insight Synthesis: Create frameworks for integrating findings
</thinking_framework>

<research_architecture>
<discovery_layers>
- Surface Layer: Obvious questions and immediate gaps
- Structural Layer: Underlying patterns and relationships
- Deep Layer: Fundamental assumptions and paradigms
- Meta Layer: Questions about the questions themselves
</discovery_layers>

<investigation_streams>
For each knowledge gap identified:
<stream>
  <trigger>What initiates this line of inquiry?</trigger>
  <hypothesis>What do we suspect might be true?</hypothesis>
  <null_hypothesis>What would disprove our assumption?</null_hypothesis>
  <methodology>
    - Data collection approach
    - Analysis framework
    - Validation criteria
  </methodology>
  <dependencies>What must be understood first?</dependencies>
  <emergence>What new questions might arise?</emergence>
</stream>
</investigation_streams>

<research_dynamics>
- Convergent paths: Where multiple inquiries meet
- Divergent branches: Where one question splits into many
- Recursive loops: Where findings circle back to refine earlier questions
- Emergent threads: Unexpected directions that arise during research
</research_dynamics>
</research_architecture>

<exemplar>
Topic: "Impact of remote work on team innovation"
<stream>
  <trigger>Observation of changing collaboration patterns</trigger>
  <hypothesis>Virtual environments alter creative ideation processes</hypothesis>
  <null_hypothesis>Innovation metrics remain unchanged regardless of work location</null_hypothesis>
  <methodology>
    - Mixed-methods study comparing innovation outputs
    - Network analysis of communication patterns
    - Longitudinal tracking of project outcomes
  </methodology>
  <dependencies>Define "innovation" metrics first</dependencies>
  <emergence>How do hybrid models compare? Cultural factors?</emergence>
</stream>
</exemplar>

<format>
Structure your research design as:

## Research Ecosystem: [Topic]

### Knowledge Landscape
- Current terrain (what we know)
- Uncharted territories (what we don't know)
- Contested zones (areas of disagreement)

### Investigation Matrix
| Research Thread | Priority | Method | Timeline | Success Indicator |
|----------------|----------|---------|----------|-------------------|
| [Specific question] | High/Med/Low | [Approach] | [Duration] | [Metric] |

### Discovery Protocols
1. **Phase 1: Foundation Building**
   - Essential definitions and boundaries
   - Baseline data collection
   
2. **Phase 2: Exploration**
   - Hypothesis testing
   - Pattern recognition
   
3. **Phase 3: Integration**
   - Synthesis of findings
   - Theory development

### Adaptive Mechanisms
- Pivot triggers (when to change direction)
- Escalation criteria (when to deepen investigation)
- Termination conditions (when enough is known)

### Knowledge Assets
- Data repositories to create
- Analytical frameworks to develop
- Visualization tools needed
- Documentation standards
</format>

<tone>
Intellectually rigorous yet accessible, balancing systematic methodology with creative exploration. Emphasize actionability and practical next steps.
</tone>

<output_validation>
Ensure the research design:
\u2713 Addresses root causes, not just symptoms
\u2713 Includes falsifiable hypotheses
\u2713 Balances breadth and depth
\u2713 Accommodates unexpected discoveries
\u2713 Provides clear decision points
\u2713 Generates transferable insights
</output_validation>`},{name:"Rewrite Notes",prompt:`<persona>
You are an expert content editor specializing in transforming verbose, unstructured notes into clear, actionable, and well-organized content. You excel at distilling complex information into its essential components while maintaining all critical insights.
</persona>

<task>
Rewrite the selected notes to be more concise, direct, and structured while preserving all important information and insights. Transform rambling thoughts into clear, scannable content that communicates effectively.
</task>

<rewriting_principles>
1. **Clarity First**: Every sentence should have a clear purpose and meaning
2. **Structure Over Stream**: Organize thoughts logically rather than chronologically
3. **Active Voice**: Use direct, active language that shows who does what
4. **Eliminate Redundancy**: Remove repetitive ideas and unnecessary words
5. **Hierarchy Matters**: Use headings, bullets, and formatting to show relationships
6. **Actionable Language**: Convert vague concepts into specific, actionable statements
</rewriting_principles>

<content_transformation>
**From Verbose to Concise:**
- Remove filler words and unnecessary qualifiers
- Combine related sentences into single, powerful statements
- Replace long phrases with precise terms
- Cut redundant explanations

**From Scattered to Structured:**
- Group related ideas under clear headings
- Use bullet points for lists and key points
- Create logical flow from general to specific
- Add transitions that guide the reader

**From Passive to Active:**
- Convert passive constructions to active voice
- Make subjects and actions explicit
- Use strong verbs instead of weak verb + noun combinations
- Eliminate unnecessary "there is/are" constructions

**From Abstract to Concrete:**
- Replace vague terms with specific examples
- Add measurable criteria where possible
- Convert concepts into actionable steps
- Include relevant context and constraints
</content_transformation>

<structural_framework>
For each rewritten section, apply this hierarchy:

**Level 1: Core Message**
- What is the main point in one sentence?
- Why does this matter?

**Level 2: Key Components**
- What are the 3-5 essential elements?
- How do they relate to each other?

**Level 3: Supporting Details**
- What evidence or examples support each component?
- What specific actions or implications follow?

**Level 4: Context and Connections**
- How does this connect to other concepts?
- What assumptions or prerequisites exist?
</structural_framework>

<output_format>
Structure the rewritten content as:

# [Clear, Descriptive Title]

## Executive Summary
[2-3 sentences capturing the essence]

## Key Points
- **Point 1**: [Concise statement with brief explanation]
- **Point 2**: [Concise statement with brief explanation]
- **Point 3**: [Concise statement with brief explanation]

## Detailed Breakdown
### [Section 1 Title]
[Structured content with clear paragraphs, bullets, or numbered lists]

### [Section 2 Title]
[Structured content with clear paragraphs, bullets, or numbered lists]

## Related Concepts
- [Connection 1]: [Brief explanation]
- [Connection 2]: [Brief explanation]

## Questions for Further Exploration
- [Specific question that emerged from the content]
- [Specific question that emerged from the content]
</output_format>

<quality_checklist>
Before finalizing, ensure the rewritten content:
\u2713 Reduces word count by at least 20% while preserving meaning
\u2713 Uses clear headings and subheadings for navigation
\u2713 Employs bullet points and lists for scannable information
\u2713 Maintains logical flow from introduction to conclusion
\u2713 Uses active voice and strong verbs throughout
\u2713 Eliminates jargon or explains necessary technical terms
</quality_checklist>

<tone>
Professional yet accessible. Direct and confident without being abrupt. Focus on clarity and usefulness over academic formality. Write as if explaining to an intelligent colleague who needs the information quickly.
</tone>

<special_instructions>
- If the original content contains multiple unrelated topics, separate them into distinct sections
- If there are contradictory statements, highlight them and suggest resolution
- If key information seems missing, note what additional details would be helpful
- Preserve any unique insights or creative connections from the original
- Maintain the author's voice while improving structure and clarity
</special_instructions>`}].forEach(p=>{let m=r.createEl("button",{cls:"useai-preset-btn",text:p.name,type:"button"}),f=()=>{this.promptInput.value=p.prompt,this.promptInput.focus()};m.addEventListener("click",f),this.eventListeners.push({element:m,event:"click",handler:f})});let a=s.createEl("div",{cls:"useai-prompt-section"});this.promptInput=a.createEl("textarea",{cls:"useai-prompt-input",placeholder:"Enter your prompt here or use presets above..."}),this.promptInput.rows=3,this.promptInput.focus();let c=s.createEl("div",{cls:"useai-logs-section"}),l=c.createEl("div",{cls:"useai-logs-header"});l.createEl("label",{text:"Logs",cls:"useai-prompt-label"});let u=l.createEl("button",{cls:"useai-clear-logs-btn",text:"Clear",type:"button"});this.logsContent=c.createEl("div",{cls:"useai-logs-content"});let d=()=>this.clearLogs();u.addEventListener("click",d),this.eventListeners.push({element:u,event:"click",handler:d});let h=p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),this.handleSubmit())};this.promptInput.addEventListener("keydown",h),this.eventListeners.push({element:this.promptInput,event:"keydown",handler:h}),this.registerEvent(this.plugin.events.on("log",(p,m,f)=>{this.addLogMessage(p,m,f)})),this.addStyles()}cleanupEventListeners(){for(let{element:t,event:s,handler:i}of this.eventListeners)t.removeEventListener(s,i);this.eventListeners=[]}addLogMessage(t,s,i){if(!this.logsContent)return;let r=document.createElement("div");r.classList.add("useai-log-entry",`useai-log-${t}`);let o=document.createElement("div");o.classList.add("useai-log-meta");let a=document.createElement("span");a.classList.add("useai-log-level",`useai-log-level-${t}`),a.textContent=t.toUpperCase();let c=document.createElement("span");c.classList.add("useai-log-timestamp"),c.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});let l=document.createElement("span");l.classList.add("useai-log-message"),l.textContent=s,o.appendChild(a),o.appendChild(c),r.appendChild(o),r.appendChild(l),this.logsContent.insertBefore(r,this.logsContent.firstChild);let u=100,d=this.logsContent.querySelectorAll(".useai-log-entry");if(d.length>u)for(let h=u;h<d.length;h++)d[h].remove();this.logsContent.scrollTop=0}clearLogs(){this.logsContent&&this.logsContent.empty()}async handleSubmit(){let t=this.promptInput.value.trim();if(!t){new Pt.Notice("Please enter a prompt"),this.promptInput.focus();return}if(!Wt(this.plugin.app)){new Pt.Notice("No active canvas found. Please open a canvas first.");return}await this.plugin.events.trigger("canvas:generate",t),this.promptInput.value=""}addStyles(){let t=document.createElement("style");t.textContent=`
            .useai-prompt-view {
                padding: 16px;
                height: 100%;
                display: flex;
                flex-direction: column;
            }

            .useai-prompt-header {
                margin-bottom: 20px;
                border-bottom: 1px solid var(--background-modifier-border);
                padding-bottom: 16px;
            }

            .useai-prompt-header h3 {
                margin: 0 0 8px 0;
                color: var(--text-normal);
            }

            .useai-prompt-description {
                margin: 0;
                color: var(--text-muted);
                font-size: 14px;
            }

            .useai-prompt-form {
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

            .useai-presets-section {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .useai-presets-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 8px;
                margin-bottom: 8px;
            }

            .useai-preset-btn {
                background: var(--interactive-normal);
                border: 1px solid var(--background-modifier-border);
                border-radius: 6px;
                padding: 8px 12px;
                font-size: 12px;
                color: var(--text-normal);
                cursor: pointer;
                transition: all 0.2s ease;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                min-height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .useai-preset-btn:hover {
                background: var(--interactive-hover);
                border-color: var(--interactive-accent);
                transform: translateY(-1px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .useai-preset-btn:active {
                transform: translateY(0);
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            }

            .useai-prompt-section {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .useai-prompt-label {
                font-weight: 500;
                color: var(--text-normal);
                font-size: 14px;
                flex: 1;
            }

            .useai-prompt-input {
                width: 100%;
                min-height: 80px;
                padding: 12px;
                border: 1px solid var(--background-modifier-border);
                border-radius: 6px;
                background: var(--background-primary);
                color: var(--text-normal);
                font-family: var(--font-monospace);
                font-size: 14px;
                resize: vertical;
                transition: border-color 0.2s ease;
                box-sizing: border-box;
                flex: 1;
            }

            .useai-prompt-input:focus {
                outline: none;
                border-color: var(--interactive-accent);
                box-shadow: 0 0 0 2px var(--interactive-accent-hover);
            }

            .useai-logs-section {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .useai-logs-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .useai-clear-logs-btn {
                background: var(--interactive-normal);
                border: 1px solid var(--background-modifier-border);
                border-radius: 4px;
                padding: 4px 8px;
                font-size: 12px;
                color: var(--text-normal);
                cursor: pointer;
                transition: background-color 0.2s ease;
            }

            .useai-clear-logs-btn:hover {
                background: var(--interactive-hover);
            }

            .useai-logs-content {
                display: flex;
                flex-direction: column;
                gap: 4px;
                border-radius: 6px;
                overflow-y: auto;
            }

            .useai-log-entry {
                display: flex;
                gap: 8px;
                padding: 4px 0;
                border-bottom: 1px solid var(--background-modifier-border-hover);
                font-size: 12px;
                line-height: 1.4;
                max-height: 40px;
                overflow-y: hidden;
                align-items: flex-start;
            }

            .useai-log-entry:last-child {
                border-bottom: none;
            }

            .useai-log-meta {
                display: flex;
                flex-direction: column;
                gap: 2px;
                flex-shrink: 0;
                min-width: 48px;
                align-items: center;
            }

            .useai-log-timestamp {
                color: var(--text-muted);
                font-family: var(--font-monospace);
                font-size: 10px;
                order: 2;
            }

            .useai-log-level {
                font-family: var(--font-monospace);
                font-size: 10px;
                font-weight: 600;
                padding: 2px 6px;
                border-radius: 3px;
                text-align: center;
                text-transform: uppercase;
                order: 1;
            }

            .useai-log-level-info {
                background: rgba(59, 130, 246, 0.15);
                color: #3b82f6;
                border: 1px solid rgba(59, 130, 246, 0.3);
            }

            .useai-log-level-warn {
                background: rgba(245, 158, 11, 0.15);
                color: #f59e0b;
                border: 1px solid rgba(245, 158, 11, 0.3);
            }

            .useai-log-level-error {
                background: rgba(239, 68, 68, 0.15);
                color: #ef4444;
                border: 1px solid rgba(239, 68, 68, 0.3);
            }

            .useai-log-message {
                color: var(--text-normal);
                word-break: break-word;
                flex: 1;
            }

            /* Optional: Different text colors for different log levels */
            .useai-log-info .useai-log-message {
                color: var(--text-normal);
            }

            .useai-log-warn .useai-log-message {
                color: var(--text-normal);
            }

            .useai-log-error .useai-log-message {
                color: var(--text-normal);
            }

            .useai-prompt-status {
                margin-top: 16px;
                padding: 12px;
                border-radius: 6px;
                background: var(--background-secondary);
                color: var(--text-muted);
                font-size: 12px;
                text-align: center;
            }
        `,document.head.appendChild(t)}async onClose(){this.cleanupEventListeners()}};var Ds=class extends P.Plugin{constructor(t,s,i){super(t,s);this.settings=$n;this.statusSections={};this.events=new Ut}async onload(){await this.loadSettings(),await this.migrateSettings(),this.statusBar=this.addStatusBarItem(),this.initializeStatusBar(),await this.initializeSocketConnection(),await this.setupClientHandlers(),this.registerView(Lt,t=>new Rs(t,this)),this.addRibbonIcon("sparkles","Open AI Prompt View",()=>{this.activatePromptView()}),this.addSettingTab(new Lr(this.app,this)),this.registerCommands(),this.patchObsidian(),this.registerEvents(),this.registerMarkdownCodeBlockProcessors()}async setupClientHandlers(){if(!this.socket){new P.Notice("No socket connection");return}ei(this.socket,async t=>{this.app.internalPlugins.plugins["global-search"].instance.openGlobalSearch(t);let s=this.app.workspace.getLeavesOfType("search")[0],r=(await s.open(s.view)).dom.resultDomLookup;return Array.from(r.values()).map(a=>({title:a.file.name,path:a.file.path,content:a.content}))}),Jn(this.socket,async(t,s,i,r,o)=>{let a=Ce(this.app,t);if(!a){new P.Notice("No canvas found");return}let c=a.nodes.get(s);if(!c){new P.Notice("From node not found");return}let l=a.nodes.get(r);if(!l){new P.Notice("To node not found");return}Vt(a,ut(16),{side:i,node:c},{side:o,node:l},{color:c.color})}),Gn(this.socket,async(t,s)=>{let i=Ce(this.app,t);if(!i){new P.Notice("No active canvas");return}let r=i.edges.get(s);if(!r){new P.Notice("Edge not found");return}i.removeEdge(r)}),Xn(this.socket,async(t,s,i)=>{let r=Ce(this.app,t);if(!r){new P.Notice("No active canvas");return}let o=r.nodes.get(s);if(!o){new P.Notice("Node not found");return}o.color=i}),jn(this.socket,async t=>{new P.Notice(t)}),zn(this.socket,async(t,s,i)=>{this.events.trigger("log",t,s,i)}),Hn(this.socket,async(t,s,i)=>{let r=Ce(this.app,t);if(!r){new P.Notice("No active canvas");return}let o=r.nodes.get(s);if(!o){new P.Notice("Node not found");return}o.setText(i)}),Yn(this.socket,async(t,s,i,r,o,a)=>{let c=Ce(this.app,t);if(!c)return new P.Notice("No active canvas"),"";s.width<500&&(s.width=500),s.height<300&&(s.height=300);let l=[];for(let d of i){let h=c.nodes.get(d);if(!h)return new P.Notice("Parent node not found"),"";l.push(h)}return"New node was created with id: "+(await Zs(c,l,{size:s,text:r,color:o},void 0,a)).id}),Zn(this.socket,async(t,s)=>{let i=Ce(this.app,t);if(!i){new P.Notice("No active canvas");return}let r=i.nodes.get(s);if(!r){new P.Notice("Node not found");return}i.removeNode(r)}),Qn(this.socket,async(t,s,i)=>{let r=Ce(this.app,t);if(!r){new P.Notice("No active canvas");return}let o=r.nodes.get(s);if(!o){new P.Notice("Node not found");return}if(o.nodeEl){let a=o.nodeEl.querySelector('[data-status-badge="true"]');a?a.textContent=i:(a=document.createElement("div"),a.textContent=i,a.style.height="20px",a.style.position="absolute",a.style.top="-10px",a.style.right="10px",a.style.zIndex="10",a.style.padding="0 5px",a.style.backgroundColor="rgba(0, 0, 0, 1)",a.style.borderRadius="5px",a.style.fontSize="12px",a.style.cursor="pointer",a.style.display="flex",a.style.alignItems="center",a.style.color="white",a.setAttribute("data-status-badge","true"),o.nodeEl.appendChild(a))}})}registerMarkdownCodeBlockProcessors(){this.registerMarkdownCodeBlockProcessor("useTool",(t,s,i)=>{let r=Nr(t);s.appendChild(r)})}appendButtons(t,s,i){this.appendMenuButton(t,"lucide-sparkles","Generate with AI",()=>this.events.trigger("canvas:generate","The selected node is my requirement, understand it carefully then replace your answer right in the node")),this.appendMenuButton(t,"lucide-plus","Create new empty node",()=>{Zs(s,[i],{text:"",size:{width:350,height:350}})})}appendMenuButton(t,s,i,r){let o=createEl("button","clickable-icon gpt-menu-item");(0,P.setTooltip)(o,i,{placement:"top"}),(0,P.setIcon)(o,s),o.addEventListener("click",r),t.menuEl.appendChild(o)}isMenuPatched(t){return t.menuEl.querySelector(".gpt-menu-item")!==null}isNodeGenerating(t){return(t==null?void 0:t.status)==="generating"}registerEvents(){this.registerEvent(this.events.on("canvas:node-menu",(t,s,i)=>{let r=i.getData();this.isMenuPatched(t)||this.isNodeGenerating(r)||this.appendButtons(t,s,i)})),this.registerEvent(this.events.on("canvas:generate",async t=>{if(!this.socket){new P.Notice("No socket connection");return}let s=Wt(this.app);if(!s){new P.Notice("No active canvas found");return}await qi(this.socket,this.settings.systemPrompt,t,s,this.settings.activeModelId,this.settings.models)}))}patchObsidian(){console.log("patching obsidian"),this.app.workspace.onLayoutReady(()=>{if(tn(this))return;let t=this.app.workspace.on("layout-change",()=>{tn(this)&&this.app.workspace.offref(t)});this.registerEvent(t)})}async migrateSettings(){let t=!1;this.settings.systemPrompt===void 0&&(this.settings.systemPrompt=qn,t=!0),this.settings.socketAddress===void 0&&(this.settings.socketAddress="https://useai-server.fly.dev",t=!0),(!this.settings.models||this.settings.models.length===0)&&(this.settings.models=[...Fn],!this.settings.activeModelId&&this.settings.models.length>0&&(this.settings.activeModelId=this.settings.models[0].modelId),t=!0),(!this.settings.activeModelId||!this.settings.models.find(s=>s.modelId===this.settings.activeModelId))&&this.settings.models.length>0&&(this.settings.activeModelId=this.settings.models[0].modelId,t=!0),t&&await this.saveSettings()}async loadSettings(){this.settings=Object.assign({},$n,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}registerCommands(){this.addCommand(this.createContinueWritingCommand()),this.addCommand({id:"open-ai-prompt-view",name:"Open AI Prompt View",callback:()=>this.activatePromptView()}),this.addCommand({id:"show-plugin-status",name:"Show Plugin Status",callback:()=>this.showPluginStatus()}),this.addCommand({id:"canvas-generate-ai",name:"Generate AI content for selected canvas node",callback:()=>this.events.trigger("canvas:generate","")})}createContinueWritingCommand(){return{id:"continue-writing",name:"Continue writing",editorCallback:this.handleContinueWriting.bind(this)}}async handleContinueWriting(t,s){}initializeStatusBar(){this.updateStatusBar("connection","ready","Ready")}updateStatusBar(t,s,i){this.statusBar&&(this.statusSections[t]={status:s,message:i},this.renderStatusBar())}renderStatusBar(){if(!this.statusBar)return;this.statusBar.empty();let t=this.statusBar.createEl("div",{cls:"useai-status-container"});Object.entries(this.statusSections).forEach(([s,i],r)=>{r>0&&t.createEl("span",{cls:"useai-status-separator",text:" | "}),this.renderStatusSection(t,s,i)}),this.statusBar.addEventListener("click",()=>{let s=Object.entries(this.statusSections).map(([i,r])=>`${i}: ${r.message}`).join(`
`);new P.Notice(`UseAI Plugin Status:
${s}`)}),this.ensureStatusBarStyles()}renderStatusSection(t,s,i){let r=t.createEl("span",{cls:`useai-status-section useai-section-${s}`}),o=r.createEl("span",{cls:"useai-status-icon"});switch(i.status){case"ready":o.innerHTML="\u2713",o.style.color="#4CAF50";break;case"generating":o.innerHTML="\u27F3",o.style.color="#FF9800",o.style.animation="spin 1s linear infinite";break;case"error":o.innerHTML="\u2717",o.style.color="#F44336";break}let a=r.createEl("span",{cls:"useai-status-text",text:` ${this.getSectionDisplayName(s)}: ${i.message}`})}getSectionDisplayName(t){return{connection:"Conn"}[t]||t}ensureStatusBarStyles(){if(document.querySelector("#useai-status-styles"))return;let t=document.createElement("style");t.id="useai-status-styles",t.textContent=`            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            .useai-status-container {
                display: flex;
                align-items: center;
                font-size: 12px;
            }
            .useai-status-section {
                display: inline-flex;
                align-items: center;
            }
            .useai-status-icon {
                display: inline-block;
                font-weight: bold;
                font-size: 11px;
            }
            .useai-status-text {
                margin-left: 2px;
                font-size: 11px;
            }
            .useai-status-separator {
                color: var(--text-muted);
                margin: 0 4px;
                font-size: 10px;
            }
            .useai-section-connection .useai-status-text {
                color: var(--text-muted);
            }
        `,document.head.appendChild(t)}onunload(){let t=document.querySelector("#useai-status-styles");t&&t.remove(),Mi()}async initializeSocketConnection(){try{if(!this.settings.socketAddress){new P.Notice("Socket address is not configured. Please set it in plugin settings."),this.updateStatusBar("connection","error","Not Configured");return}this.socket=lt(this.settings.socketAddress,{transports:["websocket","polling"],auth:{token:"123"},timeout:1e4}),this.socket.on("connect",()=>{console.log("\u2705 Connected to UseAI server"),this.updateStatusBar("connection","ready","Connected")}),this.socket.on("disconnect",t=>{console.log("\u{1F44B} Disconnected from UseAI server:",t),this.updateStatusBar("connection","error","Disconnected")}),this.socket.on("connect_error",t=>{this.updateStatusBar("connection","error","Connection failed")})}catch(t){this.updateStatusBar("connection","error","Connection failed")}}async activatePromptView(){let{workspace:t}=this.app,s=null,i=t.getLeavesOfType(Lt);i.length>0?s=i[0]:(s=t.getRightLeaf(!1),s&&await s.setViewState({type:Lt,active:!0})),s&&t.revealLeaf(s)}showPluginStatus(){let t=Object.entries(this.statusSections).map(([s,i])=>`${this.getSectionDisplayName(s)}: ${i.status} - ${i.message}`).join(`
`);new P.Notice(`UseAI Plugin Status:
${t}`)}};
/*! Bundled license information:

youtube-transcript/dist/youtube-transcript.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
