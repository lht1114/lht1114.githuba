import{Z as X,$ as A,r as q,a0 as z,a1 as C,a2 as Q,_ as W,s as Z,a as u,o as G,a3 as J,a4 as K,b as m,c as Y,d as ee,e as s,g as o,w as i,f as d,n as k,i as l,t as f,p as te,k as se}from"./index-bfcb45f6.js";function ne(e,t){let n=e.split("."),a=t.split("."),r=Math.max(n.length,a.length);for(let p=0;p<r;p++){const g=Number(n[p]||0),x=Number(a[p]||0);if(g>x)return 1;if(g<x)return-1}return 0}function ae(){return new Promise((e,t)=>{X("https://gitee.com/LiserXX/tauri-music-updater/raw/master/update.json").then(async n=>{if(n.status===200){let a=n.data,r=await A(),p=ne(a.version,r);e(p===1?a:{})}else t()})})}function oe(e){return q("/inner/version",{params:e})}var ie={};z(ie,{Child:()=>D,Command:()=>M,EventEmitter:()=>S,open:()=>N});async function le(e,t,n=[],a){return typeof n=="object"&&Object.freeze(n),C({__tauriModule:"Shell",message:{cmd:"execute",program:t,args:n,options:a,onEventFn:Q(e)}})}var S=class{constructor(){this.eventListeners=Object.create(null)}addListener(e,t){return this.on(e,t)}removeListener(e,t){return this.off(e,t)}on(e,t){return e in this.eventListeners?this.eventListeners[e].push(t):this.eventListeners[e]=[t],this}once(e,t){let n=(...a)=>{this.removeListener(e,n),t(...a)};return this.addListener(e,n)}off(e,t){return e in this.eventListeners&&(this.eventListeners[e]=this.eventListeners[e].filter(n=>n!==t)),this}removeAllListeners(e){return e?delete this.eventListeners[e]:this.eventListeners=Object.create(null),this}emit(e,...t){if(e in this.eventListeners){let n=this.eventListeners[e];for(let a of n)a(...t);return!0}return!1}listenerCount(e){return e in this.eventListeners?this.eventListeners[e].length:0}prependListener(e,t){return e in this.eventListeners?this.eventListeners[e].unshift(t):this.eventListeners[e]=[t],this}prependOnceListener(e,t){let n=(...a)=>{this.removeListener(e,n),t(...a)};return this.prependListener(e,n)}},D=class{constructor(e){this.pid=e}async write(e){return C({__tauriModule:"Shell",message:{cmd:"stdinWrite",pid:this.pid,buffer:typeof e=="string"?e:Array.from(e)}})}async kill(){return C({__tauriModule:"Shell",message:{cmd:"killChild",pid:this.pid}})}},M=class extends S{constructor(e,t=[],n){super(),this.stdout=new S,this.stderr=new S,this.program=e,this.args=typeof t=="string"?[t]:t,this.options=n!=null?n:{}}static sidecar(e,t=[],n){let a=new M(e,t,n);return a.options.sidecar=!0,a}async spawn(){return le(e=>{switch(e.event){case"Error":this.emit("error",e.payload);break;case"Terminated":this.emit("close",e.payload);break;case"Stdout":this.stdout.emit("data",e.payload);break;case"Stderr":this.stderr.emit("data",e.payload);break}},this.program,this.args,this.options).then(e=>new D(e))}async execute(){return new Promise((e,t)=>{this.on("error",t);let n=[],a=[];this.stdout.on("data",r=>{n.push(r)}),this.stderr.on("data",r=>{a.push(r)}),this.on("close",r=>{e({code:r.code,signal:r.signal,stdout:n.join(`
`),stderr:a.join(`
`)})}),this.spawn().catch(t)})}};async function N(e,t){return C({__tauriModule:"Shell",message:{cmd:"open",path:e,with:t}})}const h=e=>(te("data-v-0548bc4e"),e=e(),se(),e),re={class:"setting-container"},ce=h(()=>s("h2",null,"设置",-1)),de={class:"setting_list flex"},ue=h(()=>s("div",{class:"label"},"播放设置",-1)),_e={class:"content"},he={class:"flex align-center"},pe={class:"setting_list flex"},ve=h(()=>s("div",{class:"label"},"字体",-1)),fe={class:"content"},me={class:"flex align-center"},ge={class:"setting_list flex"},xe=h(()=>s("div",{class:"label"},"音质",-1)),ye={class:"content"},Le={class:"flex align-center"},be={class:"setting_list flex"},we=h(()=>s("div",{class:"label"},"版本管理",-1)),ke={class:"content"},Se={class:"flex flex-column"},Ce={class:"flex align-center"},Ve={class:"flex align-center mt20"},Te=h(()=>s("p",{class:"mr20"},"更新机制",-1)),Ie={class:"setting_list flex"},Oe=h(()=>s("div",{class:"label"},"关于",-1)),je={class:"content"},Ae={class:"flex flex-column"},De={class:"mb20"},Me={class:"setting_list flex"},Ne=h(()=>s("div",{class:"label"},"缓存",-1)),$e={class:"content"},Ee=h(()=>s("p",{class:"author"},"made by lht.",-1)),He=h(()=>s("p",{class:"title"},"哎呦，有新版本啦!",-1)),Ue={class:"note"},Be={class:"time"},Re={class:"version"},Fe={__name:"index",setup(e){const{proxy:t}=Z(),n=u(""),a=u("0.0.0"),r=u("0.0.0"),p=u("0.0.0"),g=u(3),x=u(!0),L=u({}),b=u(!1),V=u(!1),T=u(0),I=u("AliDaoLiTi-Regular");function $(){V.value=!0,ae().then(c=>{console.log("页面取到",c),c&&c.version?(L.value=c,b.value=!0):t.$message.info("当前已是最新版，无需更新！"),V.value=!1}).catch(c=>{console.log(c),t.$message.warning("检查更新失败~~~呆会试试")})}async function E(){let c=L.value.plateforms["windows-x86_64"].url;await N(c),b.value=!1}function H(c){console.log("选择字体",c)}function U(){localStorage.clear(),setTimeout(()=>{t.$message.info("已清除")},500)}function B(){oe({}).then(c=>{console.log("接口版本信息",c.data.version),a.value=c.data.version})}return G(async()=>{n.value=await J(),p.value=await K(),r.value=await A(),B()}),(c,_)=>{const R=m("a-checkbox"),O=m("a-select-option"),F=m("a-select"),y=m("a-radio"),j=m("a-radio-group"),w=m("a-button"),P=m("a-modal");return Y(),ee("div",re,[ce,s("div",de,[ue,s("div",_e,[s("div",he,[o(R,{checked:d(x),"onUpdate:checked":_[0]||(_[0]=v=>k(x)?x.value=v:null)},{default:i(()=>[l("双击歌曲是否自动打开播放界面")]),_:1},8,["checked"])])])]),s("div",pe,[ve,s("div",fe,[s("div",me,[o(F,{style:{width:"300px"},value:d(I),"onUpdate:value":_[1]||(_[1]=v=>k(I)?I.value=v:null),onChange:H},{default:i(()=>[o(O,{value:"AliDaoLiTi-Regular"},{default:i(()=>[l("AliDaoLiTi-Regular")]),_:1}),o(O,{value:"HarmonyOS_Sans_Thin"},{default:i(()=>[l("HarmonyOS_Sans_Thin")]),_:1}),o(O,{value:"HarmonyOS_Sans_Light"},{default:i(()=>[l("HarmonyOS_Sans_Light")]),_:1})]),_:1},8,["value"])])])]),s("div",ge,[xe,s("div",ye,[s("div",Le,[o(j,{value:d(g),"onUpdate:value":_[2]||(_[2]=v=>k(g)?g.value=v:null)},{default:i(()=>[o(y,{value:0},{default:i(()=>[l("标准")]),_:1}),o(y,{value:1},{default:i(()=>[l("高品质")]),_:1}),o(y,{value:2},{default:i(()=>[l("超高")]),_:1}),o(y,{value:3},{default:i(()=>[l("臻选")]),_:1})]),_:1},8,["value"])])])]),s("div",be,[we,s("div",ke,[s("div",Se,[s("div",Ce,[l(" 当前版本："+f(d(r))+" ",1),o(w,{type:"primary",onClick:$,loading:d(V),style:{"margin-left":"10px"}},{default:i(()=>[l("检查更新")]),_:1},8,["loading"])]),s("div",Ve,[Te,o(j,{value:d(T),"onUpdate:value":_[3]||(_[3]=v=>k(T)?T.value=v:null)},{default:i(()=>[o(y,{value:0},{default:i(()=>[l("自动检查")]),_:1}),o(y,{value:1},{default:i(()=>[l("手动检查")]),_:1})]),_:1},8,["value"])])])])]),s("div",Ie,[Oe,s("div",je,[s("div",Ae,[s("h3",De,f(d(n)),1),s("p",null,"Tauri Version："+f(d(p)),1),s("p",null,"Service Version："+f(d(a)),1)])])]),s("div",Me,[Ne,s("div",$e,[o(w,{onClick:U},{default:i(()=>[l("清除缓存")]),_:1})])]),Ee,o(P,{open:d(b),wrapClassName:"updateContent",closable:!1,mask:!1,maskClosable:!1,footer:null},{default:i(()=>[He,s("div",Ue,f(d(L).notes),1),s("p",Be,"发布时间: "+f(d(L).pub_date),1),s("p",Re,"版本号: "+f(d(r))+" -> "+f(d(L).version),1),o(w,{type:"primary",class:"download_btn",onClick:E},{default:i(()=>[l("体验新版")]),_:1}),o(w,{type:"link",class:"wait",onClick:_[4]||(_[4]=v=>b.value=!1)},{default:i(()=>[l("以后再说")]),_:1})]),_:1},8,["open"])])}}},Xe=W(Fe,[["__scopeId","data-v-0548bc4e"]]);export{Xe as default};
