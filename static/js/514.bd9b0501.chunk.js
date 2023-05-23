"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[514],{514:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(9439),o=t(1413),a=t(5987),i=t(9007),c=t(2791);var u=function(e,n){var t=(0,c.useRef)(!0);(0,c.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},l=t(7904),s=t(5746),d=t(1683),f=Math.pow(2,31)-1;function v(e,n,t){var r=t-Date.now();e.current=r<=f?setTimeout(n,r):setTimeout((function(){return v(e,n,t)}),f)}function h(){var e=(0,s.Z)(),n=(0,c.useRef)();return(0,d.Z)((function(){return clearTimeout(n.current)})),(0,c.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(t(),o<=f?n.current=setTimeout(r,o):v(n,r,Date.now()+o))},clear:t}}),[])}var m=t(1396),x=t(1694),p=t.n(x),b=t(8580),N=(0,t(6543).Z)("carousel-caption"),Z=t(162),C=t(184),y=["as","bsPrefix","className"],j=c.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,i=e.bsPrefix,c=e.className,u=(0,a.Z)(e,y),l=p()(c,(0,Z.vE)(i,"carousel-item"));return(0,C.jsx)(r,(0,o.Z)((0,o.Z)({ref:n},u),{},{className:l}))}));j.displayName="CarouselItem";var g=j,w=t(1701),E=t(1380),k=t(7202),I=t(4083),S=["defaultActiveIndex"],T=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];var M=c.forwardRef((function(e,n){var t=e.defaultActiveIndex,s=void 0===t?0:t,d=(0,a.Z)(e,S),f=(0,b.Ch)((0,o.Z)({defaultActiveIndex:s},d),{activeIndex:"onSelect"}),v=f.as,x=void 0===v?"div":v,N=f.bsPrefix,y=f.slide,j=void 0===y||y,g=f.fade,M=void 0!==g&&g,R=f.controls,L=void 0===R||R,A=f.indicators,D=void 0===A||A,O=f.indicatorLabels,P=void 0===O?[]:O,K=f.activeIndex,U=f.onSelect,V=f.onSlide,X=f.onSlid,_=f.interval,F=void 0===_?5e3:_,H=f.keyboard,W=void 0===H||H,q=f.onKeyDown,z=f.pause,B=void 0===z?"hover":z,G=f.onMouseOver,J=f.onMouseOut,Q=f.wrap,Y=void 0===Q||Q,$=f.touch,ee=void 0===$||$,ne=f.onTouchStart,te=f.onTouchMove,re=f.onTouchEnd,oe=f.prevIcon,ae=void 0===oe?(0,C.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}):oe,ie=f.prevLabel,ce=void 0===ie?"Previous":ie,ue=f.nextIcon,le=void 0===ue?(0,C.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}):ue,se=f.nextLabel,de=void 0===se?"Next":se,fe=f.variant,ve=f.className,he=f.children,me=(0,a.Z)(f,T),xe=(0,Z.vE)(N,"carousel"),pe=(0,Z.SC)(),be=(0,c.useRef)(null),Ne=(0,c.useState)("next"),Ze=(0,r.Z)(Ne,2),Ce=Ze[0],ye=Ze[1],je=(0,c.useState)(!1),ge=(0,r.Z)(je,2),we=ge[0],Ee=ge[1],ke=(0,c.useState)(!1),Ie=(0,r.Z)(ke,2),Se=Ie[0],Te=Ie[1],Me=(0,c.useState)(K||0),Re=(0,r.Z)(Me,2),Le=Re[0],Ae=Re[1];(0,c.useEffect)((function(){Se||K===Le||(be.current?ye(be.current):ye((K||0)>Le?"next":"prev"),j&&Te(!0),Ae(K||0))}),[K,Se,Le,j]),(0,c.useEffect)((function(){be.current&&(be.current=null)}));var De,Oe=0;(0,w.Ed)(he,(function(e,n){++Oe,n===K&&(De=e.props.interval)}));var Pe=(0,l.Z)(De),Ke=(0,c.useCallback)((function(e){if(!Se){var n=Le-1;if(n<0){if(!Y)return;n=Oe-1}be.current="prev",null==U||U(n,e)}}),[Se,Le,U,Y,Oe]),Ue=(0,i.Z)((function(e){if(!Se){var n=Le+1;if(n>=Oe){if(!Y)return;n=0}be.current="next",null==U||U(n,e)}})),Ve=(0,c.useRef)();(0,c.useImperativeHandle)(n,(function(){return{element:Ve.current,prev:Ke,next:Ue}}));var Xe=(0,i.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Ve.current)&&(pe?Ke():Ue())})),_e="next"===Ce?"start":"end";u((function(){j||(null==V||V(Le,_e),null==X||X(Le,_e))}),[Le]);var Fe="".concat(xe,"-item-").concat(Ce),He="".concat(xe,"-item-").concat(_e),We=(0,c.useCallback)((function(e){(0,k.Z)(e),null==V||V(Le,_e)}),[V,Le,_e]),qe=(0,c.useCallback)((function(){Te(!1),null==X||X(Le,_e)}),[X,Le,_e]),ze=(0,c.useCallback)((function(e){if(W&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(pe?Ue(e):Ke(e));case"ArrowRight":return e.preventDefault(),void(pe?Ke(e):Ue(e))}null==q||q(e)}),[W,q,Ke,Ue,pe]),Be=(0,c.useCallback)((function(e){"hover"===B&&Ee(!0),null==G||G(e)}),[B,G]),Ge=(0,c.useCallback)((function(e){Ee(!1),null==J||J(e)}),[J]),Je=(0,c.useRef)(0),Qe=(0,c.useRef)(0),Ye=h(),$e=(0,c.useCallback)((function(e){Je.current=e.touches[0].clientX,Qe.current=0,"hover"===B&&Ee(!0),null==ne||ne(e)}),[B,ne]),en=(0,c.useCallback)((function(e){e.touches&&e.touches.length>1?Qe.current=0:Qe.current=e.touches[0].clientX-Je.current,null==te||te(e)}),[te]),nn=(0,c.useCallback)((function(e){if(ee){var n=Qe.current;Math.abs(n)>40&&(n>0?Ke(e):Ue(e))}"hover"===B&&Ye.set((function(){Ee(!1)}),F||void 0),null==re||re(e)}),[ee,B,Ke,Ue,Ye,F,re]),tn=null!=F&&!we&&!Se,rn=(0,c.useRef)();(0,c.useEffect)((function(){var e,n;if(tn){var t=pe?Ke:Ue;return rn.current=window.setInterval(document.visibilityState?Xe:t,null!=(e=null!=(n=Pe.current)?n:F)?e:void 0),function(){null!==rn.current&&clearInterval(rn.current)}}}),[tn,Ke,Ue,Pe,F,Xe,pe]);var on=(0,c.useMemo)((function(){return D&&Array.from({length:Oe},(function(e,n){return function(e){null==U||U(n,e)}}))}),[D,Oe,U]);return(0,C.jsxs)(x,(0,o.Z)((0,o.Z)({ref:Ve},me),{},{onKeyDown:ze,onMouseOver:Be,onMouseOut:Ge,onTouchStart:$e,onTouchMove:en,onTouchEnd:nn,className:p()(ve,xe,j&&"slide",M&&"".concat(xe,"-fade"),fe&&"".concat(xe,"-").concat(fe)),children:[D&&(0,C.jsx)("div",{className:"".concat(xe,"-indicators"),children:(0,w.UI)(he,(function(e,n){return(0,C.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=P&&P.length?P[n]:"Slide ".concat(n+1),className:n===Le?"active":void 0,onClick:on?on[n]:void 0,"aria-current":n===Le},n)}))}),(0,C.jsx)("div",{className:"".concat(xe,"-inner"),children:(0,w.UI)(he,(function(e,n){var t=n===Le;return j?(0,C.jsx)(I.Z,{in:t,onEnter:t?We:void 0,onEntered:t?qe:void 0,addEndListener:E.Z,children:function(n,r){return c.cloneElement(e,(0,o.Z)((0,o.Z)({},r),{},{className:p()(e.props.className,t&&"entered"!==n&&Fe,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&He)}))}}):c.cloneElement(e,{className:p()(e.props.className,t&&"active")})}))}),L&&(0,C.jsxs)(C.Fragment,{children:[(Y||0!==K)&&(0,C.jsxs)(m.Z,{className:"".concat(xe,"-control-prev"),onClick:Ke,children:[ae,ce&&(0,C.jsx)("span",{className:"visually-hidden",children:ce})]}),(Y||K!==Oe-1)&&(0,C.jsxs)(m.Z,{className:"".concat(xe,"-control-next"),onClick:Ue,children:[le,de&&(0,C.jsx)("span",{className:"visually-hidden",children:de})]})]})]}))}));M.displayName="Carousel";var R=Object.assign(M,{Caption:N,Item:g}),L=t(7022),A=t(2592),D=function(e){return(0,C.jsx)("div",{"data-testid":"News",children:(0,C.jsx)(L.Z,{children:(0,C.jsx)(R,{pause:"hover",children:e.news.map((function(e){return(0,C.jsxs)(R.Item,{children:[(0,C.jsx)(A.Z,{src:e.img}),(0,C.jsxs)("div",{className:"news-headline",children:[(0,C.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:(0,C.jsx)("h2",{children:e.title})}),(0,C.jsx)("p",{children:e.content})]})]},e.title)}))})})})}},1701:function(e,n,t){t.d(n,{Ed:function(){return a},UI:function(){return o},XW:function(){return i}});var r=t(2791);function o(e,n){var t=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?n(e,t++):e}))}function a(e,n){var t=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&n(e,t++)}))}function i(e,n){return r.Children.toArray(e).some((function(e){return r.isValidElement(e)&&e.type===n}))}},2592:function(e,n,t){var r=t(1413),o=t(5987),a=t(1694),i=t.n(a),c=t(2791),u=t(2007),l=t.n(u),s=t(162),d=t(184),f=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],v=(l().string,l().bool,l().bool,l().bool,l().bool,c.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,c=e.fluid,u=void 0!==c&&c,l=e.rounded,v=void 0!==l&&l,h=e.roundedCircle,m=void 0!==h&&h,x=e.thumbnail,p=void 0!==x&&x,b=(0,o.Z)(e,f);return t=(0,s.vE)(t,"img"),(0,d.jsx)("img",(0,r.Z)((0,r.Z)({ref:n},b),{},{className:i()(a,u&&"".concat(t,"-fluid"),v&&"rounded",m&&"rounded-circle",p&&"".concat(t,"-thumbnail"))}))})));v.displayName="Image",n.Z=v}}]);
//# sourceMappingURL=514.bd9b0501.chunk.js.map