import{g as F}from"./singer-296e322d.js";import{A as H}from"./ArtistListItem-35db381c.js";import{u as $,a as l,o as j,b as C,c as t,d as p,e as s,F as b,h as g,g as z,w as A,f as n,D as x,t as w,j as B,i as E,U as R}from"./index-bfcb45f6.js";const S={class:"flex flex-wrap align-center"},T=["onClick"],U={class:"flex flex-wrap align-center"},q=["onClick"],G={class:"grid grid-column-10 mt20"},J={style:{width:"100%","text-align":"center"},class:"mt20 mb20"},W={__name:"index",setup(K){$();const k=[{label:"全部",value:"-1"},{label:"男歌手",value:"1"},{label:"女歌手",value:"2"},{label:"乐队",value:"3"}],h=[{label:"全部",value:"-1"},{label:"华语",value:"7"},{label:"欧美",value:"96"},{label:"日本",value:"8"},{label:"韩国",value:"16"},{label:"其他",value:"0"}],o=l([]),i=l(0),r=l(0),d=l(!1),c=l(!1),y=l(50),v=l(0),m=l(!1);function f({spin:a=!1}){a===!0&&(d.value=!0),F({limit:y.value,offset:v.value,type:k[i.value].value,area:h[r.value].value}).then(_=>{console.log("歌手",_),o.value=[...o.value,..._.artists],c.value=_.more,d.value=!1,m.value=!1})}function L(a){a!==i.value&&(i.value=a,o.value=[],v.value=0,c.value=!1,f({spin:!0}))}function N(a){a!==r.value&&(r.value=a,o.value=[],v.value=0,c.value=!1,f({spin:!0}))}function V(){v.value+=y.value,m.value=!0,f({spin:!1})}return j(()=>{f({spin:!0})}),(a,_)=>{const D=C("a-button"),I=C("a-spin");return t(),p("div",null,[s("div",S,[(t(),p(b,null,g(k,(u,e)=>s("p",{class:x(["small_btn",e===n(i)?"small_btn_active":""]),key:e,onClick:M=>L(e)},w(u.label),11,T)),64))]),s("div",U,[(t(),p(b,null,g(h,(u,e)=>s("p",{class:x(["small_btn",e===n(r)?"small_btn_active":""]),key:e,onClick:M=>N(e)},w(u.label),11,q)),64))]),z(I,{spinning:n(d),tip:"正在获取",class:"spin"},{default:A(()=>[s("div",G,[(t(!0),p(b,null,g(n(o),(u,e)=>(t(),B(H,{"artist-data":u,key:e},null,8,["artist-data"]))),128))]),s("div",J,[n(c)?(t(),B(D,{key:0,loading:n(m),onClick:V},{default:A(()=>[E("展示更多")]),_:1},8,["loading"])):R("",!0)])]),_:1},8,["spinning"])])}}};export{W as default};
