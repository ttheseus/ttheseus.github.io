"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{192:(e,t,n)=>{n.d(t,{Q:()=>s});var r=n(9630),i=n(2115),o=n(3264),a=n(4077);let s=i.forwardRef(function({children:e,follow:t=!0,lockX:n=!1,lockY:s=!1,lockZ:l=!1,...u},f){let c=i.useRef(null),d=i.useRef(null),p=new o.PTz;return(0,a.D)(({camera:e})=>{if(!t||!d.current)return;let r=c.current.rotation.clone();d.current.updateMatrix(),d.current.updateWorldMatrix(!1,!1),d.current.getWorldQuaternion(p),e.getWorldQuaternion(c.current.quaternion).premultiply(p.invert()),n&&(c.current.rotation.x=r.x),s&&(c.current.rotation.y=r.y),l&&(c.current.rotation.z=r.z)}),i.useImperativeHandle(f,()=>d.current,[]),i.createElement("group",(0,r.A)({ref:d},u),i.createElement("group",{ref:c},e))})},2480:(e,t,n)=>{n.d(t,{g6:()=>eI,Ll:()=>eC});var r,i,o,a,s,l,u,f,c,d,p,h,m,v,y,w,g,b,x,_,S,A,E,M,z,L=n(2115);n(2669);var P=n(4077);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var D=n(3264);function T(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],i=t[1],o=t[2],a=t[3],s=t[4],l=t[5],u=t[6],f=t[7],c=t[8];return r*s*c+i*l*u+o*a*f-o*s*u-i*a*c-r*l*f}function R(e,t){for(var n=[],r=e.toArray(),i=t.toArray(),o=0;o<r.length;o++)n[o]=r[o]+i[o];return new D.dwI().fromArray(n)}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function q(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(n=i.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return o}}(e,t)||q(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||q(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t,n){return(N=I()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&C(i,n.prototype),i}).apply(null,arguments)}function W(e){var t=j(e[0],2),n=t[0],r=t[1],i=j(e[1],2),o=i[0],a=i[1],s=j(e[2],2);return T(n,r,1,o,a,1,s[0],s[1],1)}var F=new D.I9Y,k=new D.I9Y;function Q(e){return e*e*e*(e*(6*e-15)+10)}function G(e,t,n){return e*(1-n)+t*n}function V(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}var Y=function e(t,n,r){var i=this;V(this,e),O(this,"dot2",function(e,t){return i.x*e+i.y*t}),O(this,"dot3",function(e,t,n){return i.x*e+i.y*t+i.z*n}),this.x=t,this.y=n,this.z=r},X=[new Y(1,1,0),new Y(-1,1,0),new Y(1,-1,0),new Y(-1,-1,0),new Y(1,0,1),new Y(-1,0,1),new Y(1,0,-1),new Y(-1,0,-1),new Y(0,1,1),new Y(0,-1,1),new Y(0,1,-1),new Y(0,-1,-1)],$=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],J=Array(512),K=Array(512),Z=function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t,n=0;n<256;n++)t=1&n?$[n]^255&e:$[n]^e>>8&255,J[n]=J[n+256]=t,K[n]=K[n+256]=X[t%12]};Z(0);var ee=.5*(Math.sqrt(3)-1),et=(3-Math.sqrt(3))/6,en=1/3,er=1/6;function ei(e){var t=function(e){if("number"==typeof e)e=Math.abs(e);else if("string"==typeof e){var t=e;e=0;for(var n=0;n<t.length;n++)e=(e+(n+1)*(t.charCodeAt(n)%96))%0x7fffffff}return 0===e&&(e=311),e}(e);return function(){var e=48271*t%0x7fffffff;return t=e,e/0x7fffffff}}new function e(t){var n=this;V(this,e),O(this,"seed",0),O(this,"init",function(e){n.seed=e,n.value=ei(e)}),O(this,"value",ei(this.seed)),this.init(t)}(Math.random());var eo=function(e){return 1/(1+e+.48*e*e+.235*e*e*e)};function ea(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.25,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.01,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1/0,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:eo,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:.001,l="velocity_"+t;if(void 0===e.__damp&&(e.__damp={}),void 0===e.__damp[l]&&(e.__damp[l]=0),Math.abs(e[t]-n)<=s)return e[t]=n,!1;var u=2/(r=Math.max(1e-4,r)),f=a(u*i),c=e[t]-n,d=n,p=o*r;c=Math.min(Math.max(c,-p),p),n=e[t]-c;var h=(e.__damp[l]+u*c)*i;e.__damp[l]=(e.__damp[l]-u*h)*f;var m=n+(c+h)*f;return d-e[t]>0==m>d&&(m=d,e.__damp[l]=(m-d)/i),e[t]=m,!0}var es=new D.Pq0,el=new D.PTz,eu=new D.PTz,ef=new D.kn4,ec=new D.Pq0;function ed(e,t,n,r,i,o,a,s){var l,u,f,c,d;return ea(e,t,e[t]+(l=e[t],(d=(c=(u=n-l)-Math.floor(u/(f=2*Math.PI))*f,Math.max(0,Math.min(f,c))))>Math.PI&&(d-=2*Math.PI),d),r,i,o,a,s)}var ep=new D.I9Y,eh=new D.Pq0;function em(e,t,n,r,i,l,u){return"number"==typeof t?eh.setScalar(t):Array.isArray(t)?eh.set(t[0],t[1],t[2]):eh.copy(t),o=ea(e,"x",eh.x,n,r,i,l,u),a=ea(e,"y",eh.y,n,r,i,l,u),s=ea(e,"z",eh.z,n,r,i,l,u),o||a||s}var ev=new D.IUQ,ey=new D.O9p,ew=new D.Q1f,eg=new D.PTz,eb=new D.IUQ,ex=new D.IUQ,e_=new D.IUQ;function eS(e,t,n,r,i,o,a){Array.isArray(t)?eg.set(t[0],t[1],t[2],t[3]):eg.copy(t);var s=e.dot(eg)>0?1:-1;return eg.x*=s,eg.y*=s,eg.z*=s,eg.w*=s,w=ea(e,"x",eg.x,n,r,i,o,a),g=ea(e,"y",eg.y,n,r,i,o,a),b=ea(e,"z",eg.z,n,r,i,o,a),x=ea(e,"w",eg.w,n,r,i,o,a),eb.set(e.x,e.y,e.z,e.w).normalize(),ex.set(e.__damp.velocity_x,e.__damp.velocity_y,e.__damp.velocity_z,e.__damp.velocity_w),e_.copy(eb).multiplyScalar(ex.dot(eb)/eb.dot(eb)),e.__damp.velocity_x-=e_.x,e.__damp.velocity_y-=e_.y,e.__damp.velocity_z-=e_.z,e.__damp.velocity_w-=e_.w,e.set(eb.x,eb.y,eb.z,eb.w),w||g||b||x}var eA=new D.YHV,eE=new D.kn4,eM=new D.Pq0,ez=new D.PTz,eL=new D.Pq0,eP=Object.freeze({__proto__:null,rsqw:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1/(2*Math.PI);return n/Math.atan(1/t)*Math.atan(Math.sin(2*Math.PI*e*r)/t)},exp:eo,linear:function(e){return e},sine:{in:function(e){return 1-Math.cos(e*Math.PI/2)},out:function(e){return Math.sin(e*Math.PI/2)},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{in:function(e){return e*e*e},out:function(e){return 1-Math.pow(1-e,3)},inOut:function(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}},quint:{in:function(e){return e*e*e*e*e},out:function(e){return 1-Math.pow(1-e,5)},inOut:function(e){return e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2}},circ:{in:function(e){return 1-Math.sqrt(1-Math.pow(e,2))},out:function(e){return Math.sqrt(1-Math.pow(e-1,2))},inOut:function(e){return e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2}},quart:{in:function(e){return e*e*e*e},out:function(e){return 1- --e*e*e*e},inOut:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e}},expo:{in:function(e){return 0===e?0:Math.pow(2,10*e-10)},out:function(e){return 1===e?1:1-Math.pow(2,-10*e)},inOut:function(e){return 0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2}},damp:ea,dampLookAt:function(e,t,n,r,i,o,a){"number"==typeof t?es.setScalar(t):Array.isArray(t)?es.set(t[0],t[1],t[2]):es.copy(t);var s=e.parent;(e.updateWorldMatrix(!0,!1),ec.setFromMatrixPosition(e.matrixWorld),e&&e.isCamera||e&&e.isLight)?ef.lookAt(ec,es,e.up):ef.lookAt(es,ec,e.up),eS(e.quaternion,eu.setFromRotationMatrix(ef),n,r,i,o,a),s&&(ef.extractRotation(s.matrixWorld),el.setFromRotationMatrix(ef),eS(e.quaternion,eu.copy(e.quaternion).premultiply(el.invert()),n,r,i,o,a))},dampAngle:ed,damp2:function(e,t,n,o,a,s,l){return"number"==typeof t?ep.setScalar(t):Array.isArray(t)?ep.set(t[0],t[1]):ep.copy(t),r=ea(e,"x",ep.x,n,o,a,s,l),i=ea(e,"y",ep.y,n,o,a,s,l),r||i},damp3:em,damp4:function(e,t,n,r,i,o,a){return"number"==typeof t?ev.setScalar(t):Array.isArray(t)?ev.set(t[0],t[1],t[2],t[3]):ev.copy(t),l=ea(e,"x",ev.x,n,r,i,o,a),u=ea(e,"y",ev.y,n,r,i,o,a),f=ea(e,"z",ev.z,n,r,i,o,a),c=ea(e,"w",ev.w,n,r,i,o,a),l||u||f||c},dampE:function(e,t,n,r,i,o,a){return Array.isArray(t)?ey.set(t[0],t[1],t[2],t[3]):ey.copy(t),d=ed(e,"x",ey.x,n,r,i,o,a),p=ed(e,"y",ey.y,n,r,i,o,a),h=ed(e,"z",ey.z,n,r,i,o,a),d||p||h},dampC:function(e,t,n,r,i,o,a){return t instanceof D.Q1f?ew.copy(t):Array.isArray(t)?ew.setRGB(t[0],t[1],t[2]):ew.set(t),m=ea(e,"r",ew.r,n,r,i,o,a),v=ea(e,"g",ew.g,n,r,i,o,a),y=ea(e,"b",ew.b,n,r,i,o,a),m||v||y},dampQ:eS,dampS:function(e,t,n,r,i,o,a){return Array.isArray(t)?eA.set(t[0],t[1],t[2]):eA.copy(t),_=ea(e,"radius",eA.radius,n,r,i,o,a),S=ed(e,"phi",eA.phi,n,r,i,o,a),A=ed(e,"theta",eA.theta,n,r,i,o,a),_||S||A},dampM:function(e,t,n,r,i,o,a){return void 0===e.__damp&&(e.__damp={position:new D.Pq0,rotation:new D.PTz,scale:new D.Pq0},e.decompose(e.__damp.position,e.__damp.rotation,e.__damp.scale)),Array.isArray(t)?eE.set.apply(eE,H(t)):eE.copy(t),eE.decompose(eM,ez,eL),E=em(e.__damp.position,eM,n,r,i,o,a),M=eS(e.__damp.rotation,ez,n,r,i,o,a),z=em(e.__damp.scale,eL,n,r,i,o,a),e.compose(e.__damp.position,e.__damp.rotation,e.__damp.scale),E||M||z}});function eO(e){return(eO=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}D.LoY;let eU=L.createContext(null);function eC(){return L.useContext(eU)}function eI({eps:e=1e-5,enabled:t=!0,infinite:n,horizontal:r,pages:i=1,distance:o=1,damping:a=.25,maxSpeed:s=1/0,prepend:l=!1,style:u={},children:f}){let{get:c,setEvents:d,gl:p,size:h,invalidate:m,events:v}=(0,P.C)(),[y]=L.useState(()=>document.createElement("div")),[w]=L.useState(()=>document.createElement("div")),[g]=L.useState(()=>document.createElement("div")),b=p.domElement.parentNode,x=L.useRef(0),_=L.useMemo(()=>({el:y,eps:e,fill:w,fixed:g,horizontal:r,damping:a,offset:0,delta:0,scroll:x,pages:i,range(e,t,n=0){let r=e-n,i=r+t+2*n;return this.offset<r?0:this.offset>i?1:(this.offset-r)/(i-r)},curve(e,t,n=0){return Math.sin(this.range(e,t,n)*Math.PI)},visible(e,t,n=0){let r=e-n;return this.offset>=r&&this.offset<=r+t+2*n}}),[e,a,r,i]);L.useEffect(()=>{for(let e in y.style.position="absolute",y.style.width="100%",y.style.height="100%",y.style[r?"overflowX":"overflowY"]="auto",y.style[r?"overflowY":"overflowX"]="hidden",y.style.top="0px",y.style.left="0px",u)y.style[e]=u[e];g.style.position="sticky",g.style.top="0px",g.style.left="0px",g.style.width="100%",g.style.height="100%",g.style.overflow="hidden",y.appendChild(g),w.style.height=r?"100%":`${i*o*100}%`,w.style.width=r?`${i*o*100}%`:"100%",w.style.pointerEvents="none",y.appendChild(w),l?b.prepend(y):b.appendChild(y),y[r?"scrollLeft":"scrollTop"]=1;let e=v.connected||p.domElement;requestAnimationFrame(()=>null==v.connect?void 0:v.connect(y));let t=c().events.compute;return d({compute(e,t){let{left:n,top:r}=b.getBoundingClientRect(),i=e.clientX-n,o=e.clientY-r;t.pointer.set(i/t.size.width*2-1,-(2*(o/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),()=>{b.removeChild(y),d({compute:t}),null==v.connect||v.connect(e)}},[i,o,r,y,w,g,b]),L.useEffect(()=>{if(v.connected===y){let e=h[r?"width":"height"],i=y[r?"scrollWidth":"scrollHeight"],o=i-e,a=0,s=!0,l=!0,u=()=>{if(t&&!l&&(m(),x.current=(a=y[r?"scrollLeft":"scrollTop"])/o,n)){if(!s){if(a>=o){let e=1-_.offset;y[r?"scrollLeft":"scrollTop"]=1,x.current=_.offset=-e,s=!0}else if(a<=0){let e=1+_.offset;y[r?"scrollLeft":"scrollTop"]=i,x.current=_.offset=e,s=!0}}s&&setTimeout(()=>s=!1,40)}};y.addEventListener("scroll",u,{passive:!0}),requestAnimationFrame(()=>l=!1);let f=e=>y.scrollLeft+=e.deltaY/2;return r&&y.addEventListener("wheel",f,{passive:!0}),()=>{y.removeEventListener("scroll",u),r&&y.removeEventListener("wheel",f)}}},[y,v,h,n,_,m,r,t]);let S=0;return(0,P.D)((t,n)=>{S=_.offset,eP.damp(_,"offset",x.current,a,n,s,void 0,e),eP.damp(_,"delta",Math.abs(S-_.offset),a,n,s,void 0,e),_.delta>e&&m()}),L.createElement(eU.Provider,{value:_},f)}},6898:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(2115),i=n(4077),o=n(3264);let a=parseInt(o.sPf.replace(/\D+/g,""));class s extends o.BKk{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${a>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}let l=e=>new o.Pq0().setFromSpherical(new o.YHV(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),u=r.forwardRef(({radius:e=100,depth:t=50,count:n=5e3,saturation:a=0,factor:u=4,fade:f=!1,speed:c=1},d)=>{let p=r.useRef(null),[h,m,v]=r.useMemo(()=>{let r=[],i=[],s=Array.from({length:n},()=>(.5+.5*Math.random())*u),f=new o.Q1f,c=e+t,d=t/n;for(let e=0;e<n;e++)c-=d*Math.random(),r.push(...l(c).toArray()),f.setHSL(e/n,a,.9),i.push(f.r,f.g,f.b);return[new Float32Array(r),new Float32Array(i),new Float32Array(s)]},[n,t,u,e,a]);(0,i.D)(e=>p.current&&(p.current.uniforms.time.value=e.clock.elapsedTime*c));let[y]=r.useState(()=>new s);return r.createElement("points",{ref:d},r.createElement("bufferGeometry",null,r.createElement("bufferAttribute",{attach:"attributes-position",args:[h,3]}),r.createElement("bufferAttribute",{attach:"attributes-color",args:[m,3]}),r.createElement("bufferAttribute",{attach:"attributes-size",args:[v,1]})),r.createElement("primitive",{ref:p,object:y,attach:"material",blending:o.EZo,"uniforms-fade-value":f,depthWrite:!1,transparent:!0,vertexColors:!0}))})},8092:(e,t,n)=>{let r,i;n.d(t,{N:()=>I});var o=n(9630),a=n(2115),s=n(3264),l=n(4077);let u=new s.NRn,f=new s.Pq0;class c extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(n,3,0)),this.setAttribute("instanceEnd",new s.eHs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new s.LuO(n,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(r,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),u.setFromBufferAttribute(t),this.boundingBox.union(u))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,o=e.count;i<o;i++)f.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(f)),f.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(f));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var d=n(7431);let p=parseInt(s.sPf.replace(/\D+/g,""));class h extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([d.UniformsLib.common,d.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${p>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let m=p>=125?"uv1":"uv2",v=new s.IUQ,y=new s.Pq0,w=new s.Pq0,g=new s.IUQ,b=new s.IUQ,x=new s.IUQ,_=new s.Pq0,S=new s.kn4,A=new s.cZY,E=new s.Pq0,M=new s.NRn,z=new s.iyt,L=new s.IUQ;function P(e,t,n){return L.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),L.multiplyScalar(1/L.w),L.x=i/n.width,L.y=i/n.height,L.applyMatrix4(e.projectionMatrixInverse),L.multiplyScalar(1/L.w),Math.abs(Math.max(L.x,L.y))}class O extends s.eaF{constructor(e=new c,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,o=t.count;e<o;e++,i+=2)y.fromBufferAttribute(t,e),w.fromBufferAttribute(n,e),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+y.distanceTo(w);let i=new s.LuO(r,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(i,1,1)),this}raycast(e,t){let n,o;let a=this.material.worldUnits,l=e.camera;null!==l||a||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let u=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let f=this.matrixWorld,c=this.geometry,d=this.material;if(i=d.linewidth+u,null===c.boundingSphere&&c.computeBoundingSphere(),z.copy(c.boundingSphere).applyMatrix4(f),a)n=.5*i;else{let e=Math.max(l.near,z.distanceToPoint(r.origin));n=P(l,e,d.resolution)}if(z.radius+=n,!1!==r.intersectsSphere(z)){if(null===c.boundingBox&&c.computeBoundingBox(),M.copy(c.boundingBox).applyMatrix4(f),a)o=.5*i;else{let e=Math.max(l.near,M.distanceToPoint(r.origin));o=P(l,e,d.resolution)}M.expandByScalar(o),!1!==r.intersectsBox(M)&&(a?function(e,t){let n=e.matrixWorld,o=e.geometry,a=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,a.count);for(let o=0;o<u;o++){A.start.fromBufferAttribute(a,o),A.end.fromBufferAttribute(l,o),A.applyMatrix4(n);let u=new s.Pq0,f=new s.Pq0;r.distanceSqToSegment(A.start,A.end,f,u),f.distanceTo(u)<.5*i&&t.push({point:f,pointOnLine:u,distance:r.origin.distanceTo(f),object:e,face:null,faceIndex:o,uv:null,[m]:null})}}(this,t):function(e,t,n){let o=t.projectionMatrix,a=e.material.resolution,l=e.matrixWorld,u=e.geometry,f=u.attributes.instanceStart,c=u.attributes.instanceEnd,d=Math.min(u.instanceCount,f.count),p=-t.near;r.at(1,x),x.w=1,x.applyMatrix4(t.matrixWorldInverse),x.applyMatrix4(o),x.multiplyScalar(1/x.w),x.x*=a.x/2,x.y*=a.y/2,x.z=0,_.copy(x),S.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<d;t++){if(g.fromBufferAttribute(f,t),b.fromBufferAttribute(c,t),g.w=1,b.w=1,g.applyMatrix4(S),b.applyMatrix4(S),g.z>p&&b.z>p)continue;if(g.z>p){let e=g.z-b.z,t=(g.z-p)/e;g.lerp(b,t)}else if(b.z>p){let e=b.z-g.z,t=(b.z-p)/e;b.lerp(g,t)}g.applyMatrix4(o),b.applyMatrix4(o),g.multiplyScalar(1/g.w),b.multiplyScalar(1/b.w),g.x*=a.x/2,g.y*=a.y/2,b.x*=a.x/2,b.y*=a.y/2,A.start.copy(g),A.start.z=0,A.end.copy(b),A.end.z=0;let u=A.closestPointToPointParameter(_,!0);A.at(u,E);let d=s.cj9.lerp(g.z,b.z,u),h=d>=-1&&d<=1,v=_.distanceTo(E)<.5*i;if(h&&v){A.start.fromBufferAttribute(f,t),A.end.fromBufferAttribute(c,t),A.start.applyMatrix4(l),A.end.applyMatrix4(l);let i=new s.Pq0,o=new s.Pq0;r.distanceSqToSegment(A.start,A.end,o,i),n.push({point:o,pointOnLine:i,distance:r.origin.distanceTo(o),object:e,face:null,faceIndex:t,uv:null,[m]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class U extends c{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class C extends O{constructor(e=new U,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let I=a.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:r,lineWidth:i,segments:u,dashed:f,...d},p){var m,v;let y=(0,l.C)(e=>e.size),w=a.useMemo(()=>u?new O:new C,[u]),[g]=a.useState(()=>new h),b=(null==n||null==(m=n[0])?void 0:m.length)===4?4:3,x=a.useMemo(()=>{let r=u?new c:new U,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof s.Q1f?e.toArray():e);r.setColors(e.flat(),b)}return r},[e,u,n,b]);return a.useLayoutEffect(()=>{w.computeLineDistances()},[e,w]),a.useLayoutEffect(()=>{f?g.defines.USE_DASH="":delete g.defines.USE_DASH,g.needsUpdate=!0},[f,g]),a.useEffect(()=>()=>{x.dispose(),g.dispose()},[x]),a.createElement("primitive",(0,o.A)({object:w,ref:p},d),a.createElement("primitive",{object:x,attach:"geometry"}),a.createElement("primitive",(0,o.A)({object:g,attach:"material",color:t,vertexColors:!!n,resolution:[y.width,y.height],linewidth:null!==(v=null!=r?r:i)&&void 0!==v?v:1,dashed:f,transparent:4===b},d)))})}}]);