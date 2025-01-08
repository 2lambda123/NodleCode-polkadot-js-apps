"use strict";(("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[]).push([[2107],{51304:(e,t,s)=>{s.d(t,{ZP:()=>K});var r=s(23994),n=s(85960),a=s(47451);const o={name:"@polkadot/react-identicon",path:new URL("file:///home/runner/work/polkadot-js-apps/polkadot-js-apps/node_modules/@polkadot/react-identicon/packageInfo.js").pathname.substring(0,new URL("file:///home/runner/work/polkadot-js-apps/polkadot-js-apps/node_modules/@polkadot/react-identicon/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"3.9.1"};(0,a.E)(o,null,[r.b,n.b]);var i=s(52322),l=s(2784),c=s(72282),u=s(16039),d=s(35545),m=s(48358),p=s(74076),h=s(55858),f=s(73493),y=s(90107),g=s(94175),x=s(7989);const v=l.memo((function({address:e,className:t="",size:s,style:r={}}){const n=(0,l.useCallback)((t=>{t?.appendChild((0,x.y)(e,{isAlternative:!1,size:s}))}),[e,s]);return(0,i.jsx)("div",{className:t,ref:n,style:r})})),k=l.memo((function({className:e="",size:t,style:s={}}){return(0,i.jsx)("svg",{className:e,height:t,style:s,viewBox:"0 0 64 64",width:t})}));var w=s(88617),b=s(31383);const j=b.zo.img((({size:e})=>`\n  display: block;\n  height: ${e}px;\n  width: ${e}px;\n`)),N=l.memo((function({address:e,className:t="",size:s,style:r={}}){const n=(0,l.useMemo)((()=>w(e)),[e]);return(0,i.jsx)(j,{className:t,size:s,src:n,style:r})}));var z=s(56926);const I=l.memo((function({className:e="",publicKey:t,size:s,style:r={}}){const n=(0,l.useMemo)((()=>({__html:z.KT(t.substring(2),s)})),[t,s]);return(0,i.jsx)("div",{className:e,dangerouslySetInnerHTML:n,style:r})}));var U=s(55824);function A({cx:e,cy:t,fill:s,r},n){return(0,i.jsx)("circle",{cx:e,cy:t,fill:s,r},n)}const E=l.memo((function({address:e,className:t="",isAlternative:s=!1,size:r,style:n={}}){const a=(0,l.useMemo)((()=>(0,U.i)(e,{isAlternative:s})),[e,s]);return(0,i.jsx)("svg",{className:t,height:r,id:e,name:e,style:n,viewBox:"0 0 64 64",width:r,children:a.map(A)})})),D=v,C=64,S={beachball:v,empty:k,ethereum:N,jdenticon:I,polkadot:E,substrate:I};class _ extends l.PureComponent{state={address:"",publicKey:"0x"};static prefix=void 0;static setDefaultPrefix(e){_.prefix=e}static getDerivedStateFromProps({prefix:e=_.prefix,theme:t,value:s},r){if("ethereum"===t)return{address:(0,m.U)(s)?(0,f.K)(s):s||"",publicKey:""};try{const t=(0,m.U)(s)||(0,p.vq)(s)?(0,y.m)(s,e):s||"",n=(0,h.c)((0,g.m)(t,!1,e));return t===r.address?null:{address:t,publicKey:n}}catch{return{address:"",publicKey:"0x"}}}render(){const{address:e}=this.state,t=this.getWrapped(this.state,this.props);return e?(0,i.jsx)(c,{onCopy:this.onCopy,text:e,children:t}):t}getWrapped({address:e,publicKey:t},{Custom:s}){const{className:r="",isAlternative:n,isHighlight:a,size:o=C,style:l={},theme:c=u.X.icon}=this.props,m=e?s||S["default"===c?d.Oi:c]||D:k;return(0,i.jsx)(q,{className:`ui--IdentityIcon  ${r}`,style:l,children:(0,i.jsx)(m,{address:e,className:a?"highlight":"",isAlternative:n,publicKey:t,size:o})},e)}onCopy=()=>{const{onCopy:e}=this.props,{address:t}=this.state;t&&e&&e(t)}}const q=b.zo.div`
  cursor: copy;
  display: inline-block;
  line-height: 0;

  > .container {
    position: relative;

    > div,
    > svg {
      position: relative;
    }

    &.highlight:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px #aaa;
      content: '';
    }
  }
`,K=l.memo((function(e){return(0,i.jsx)(_,{...e})}))},72152:(e,t,s)=>{s.d(t,{r_:()=>N,K0:()=>z,CU:()=>D,lB:()=>C});var r=s(47451);const n={name:"@polkadot/react-qr",path:new URL("file:///home/runner/work/polkadot-js-apps/polkadot-js-apps/node_modules/@polkadot/react-qr/packageInfo.js").pathname.substring(0,new URL("file:///home/runner/work/polkadot-js-apps/polkadot-js-apps/node_modules/@polkadot/react-qr/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"3.9.1"};(0,r.E)(n,null,[]);var a=s(52322),o=s(2784),i=s(33403),l=s(69516);const c=s(4133);c.stringToBytes=e=>e;var u=s(31383),d=s(51330),m=s(46610),p=s(54371),h=s(94175);const f="secret",y=new Uint8Array([83]),g=new Uint8Array([1]),x=(new Uint8Array([0]),new Uint8Array([1]),new Uint8Array([2]),new Uint8Array([3]),new Uint8Array([0]));function v(e){return new Uint8Array([e>>8,255&e])}function k(e){if(!e)return{height:"auto",width:"100%"};const t=(0,p.H)(e)?e:`${e}px`;return{height:t,width:t}}function w(e){const t=c(0,"M");return t.addData(e,"Byte"),t.make(),t.createDataURL(16,0)}const b=u.zo.div`
  .ui--qr-Display {
    height: 100%;
    width: 100%;

    img,
    svg {
      background: white;
      height: auto !important;
      max-height: 100%;
      max-width: 100%;
      width: auto !important;
    }
  }
`,j=o.memo((function({className:e="",size:t,skipEncoding:s,style:r={},timerDelay:n=2750,value:c}){const[{image:u},m]=(0,o.useState)({frameIdx:0,frames:[],image:null,valueHash:null}),p=(0,o.useRef)({timerDelay:n,timerId:null}),h=(0,o.useMemo)((()=>k(t)),[t]);return(0,o.useEffect)((()=>{const e=()=>m((t=>{if(t.frames.length<=1)return t;let s=t.frameIdx+1;s===t.frames.length&&(s=0,p.current.timerDelay=p.current.timerDelay+500);const r=(0,i.Z)({},t,{frameIdx:s,image:w(t.frames[s])});return p.current.timerId=setTimeout(e,p.current.timerDelay),r}));return p.current.timerId=setTimeout(e,p.current.timerDelay),()=>{p.current.timerId&&clearTimeout(p.current.timerId)}}),[]),(0,o.useEffect)((()=>{m((e=>{const t=(0,l.R)(c);if(t===e.valueHash)return e;const r=s?[c]:function(e){const t=[];let s=0;for(;s<e.length;)t.push(e.subarray(s,s+1024)),s+=1024;return t.map(((e,s)=>(0,d.e)(x,v(t.length),v(s),e)))}(c);return{frameIdx:0,frames:r,image:w(r[0]),valueHash:t}}))}),[s,c]),u?(0,a.jsx)(b,{className:e,style:h,children:(0,a.jsx)("div",{className:"ui--qr-Display",style:r,children:(0,a.jsx)("img",{src:u})})}):null})),N=o.memo((function({address:e,className:t,cmd:s,genesisHash:r,payload:n,size:i,style:l,timerDelay:c}){const u=(0,o.useMemo)((()=>function(e,t,s,r){return(0,d.e)(y,g,new Uint8Array([t]),(0,h.m)(e),(0,m.Y)(s),(0,m.Y)(r))}(e,s,n,r)),[e,s,n,r]);return u?(0,a.jsx)(j,{className:t,size:i,style:l,timerDelay:c,value:u}):null})),z=o.memo((function({className:e,networkSpecs:t,size:s,style:r}){const n=(0,o.useMemo)((()=>function(e){const t=e.length,s=new Uint8Array(t);for(let r=0;r<t;r++)s[r]=e.charCodeAt(r);return s}(JSON.stringify(t))),[t]);return n?(0,a.jsx)(j,{className:e,size:s,skipEncoding:!0,style:r,value:n}):null}));var I=s(87533);const U=e=>{console.error("@polkadot/react-qr:Scan",e.message)},A=u.zo.div`
  .ui--qr-Scan {
    display: inline-block;
    height: 100%;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 100%;
  }
`,E=o.memo((function({className:e="",delay:t=150,onError:s=U,onScan:r,size:n,style:i={}}){const l=(0,o.useRef)(null),c=(0,o.useRef)(null),u=(0,o.useMemo)((()=>k(n)),[n]),d=(0,o.useCallback)((e=>s(e)),[s]);return(0,o.useEffect)((()=>{const e=new I.Nm,s=setTimeout((async()=>{try{const t=(await I.Nm.listVideoInputDevices())[0].deviceId;c.current=await e.decodeFromVideoDevice(t,l.current??void 0,((e,t)=>{e&&r(e.getText()),!t||t instanceof Error||d(new Error(t))}))}catch(e){d(e instanceof Error?e:new Error("Unknown error occurred"))}}),t);return()=>{clearTimeout(s),c.current&&c.current.stop()}}),[r,d,t]),(0,a.jsx)(A,{className:e,style:u,children:(0,a.jsx)("video",{className:"ui--qr-Scan",ref:l,style:i})})})),D=o.memo((function({className:e,isEthereum:t,onError:s,onScan:r,size:n,style:i}){const l=(0,o.useCallback)((e=>{if(e)try{let s,n,a,o;t?([s,n,...o]=e.split(":"),a=null,n=n.substring(0,42)):[s,n,a,...o]=e.split(":");const i=t?"ethereum":"substrate";if(s!==i&&s!==f)throw new Error(`Invalid prefix received, expected '${i} or ${f}' , found '${s}'`);const l=s===i;l&&!t&&(0,h.m)(n),r({content:n,genesisHash:a,isAddress:l,name:o?.length?o.join(":"):void 0})}catch(t){s&&s(t),console.error("@polkadot/react-qr:QrScanAddress",t.message,e)}}),[r,s,t]);return(0,a.jsx)(E,{className:e,onError:s,onScan:l,size:n,style:i})})),C=o.memo((function({className:e,onError:t,onScan:s,size:r,style:n}){const i=(0,o.useCallback)((e=>e&&s({signature:`0x${e}`})),[s]);return(0,a.jsx)(E,{className:e,onError:t,onScan:i,size:r,style:n})}))}}]);