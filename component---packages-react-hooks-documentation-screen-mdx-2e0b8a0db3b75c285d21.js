(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"55RO":function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return d})),t.d(n,"f",(function(){return h})),t.d(n,"g",(function(){return y})),t.d(n,"a",(function(){return O})),t.d(n,"e",(function(){return i}));var r=t("mXGw"),i=function(){var e=Object(r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia("(prefers-reduced-motion: no-preference)").matches)),n=e[0],t=e[1];return Object(r.useEffect)((function(){var e,n,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia("(prefers-reduced-motion: no-preference)"),n=function(e){return t(!e.matches)},null===(r=e)||void 0===r||r.addListener(n));return function(){var t;null===(t=e)||void 0===t||t.removeListener(n)}}),[]),n};function c(e){var n=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(null),u=Object(r.useRef)(!0),s=i();function a(){var e=o(c);e&&e.removeAttribute("style")}var d=Object(r.useCallback)((function(){if(!s&&!u.current){var r=o(c);if(r)if(r.style.display="block",r.style.overflow="hidden",e)r.style.height="0",r.style.height=r.scrollHeight+"px";else{if(0===r.scrollHeight)return void r.removeAttribute("style");r.style.height=r.scrollHeight+"px",n.current=requestAnimationFrame((function(){t.current=requestAnimationFrame((function(){r.style.height="0px"}))}))}}}),[e]);return Object(r.useLayoutEffect)((function(){d()}),[e,d]),Object(r.useEffect)((function(){var e=o(c);return e&&e.addEventListener("transitionend",a),function(){e&&e.removeEventListener("transitionend",a)}}),[e]),Object(r.useEffect)((function(){var e=n.current,r=t.current;return u.current=!1,function(){e&&cancelAnimationFrame(e),r&&cancelAnimationFrame(r)}}),[n,t]),[c,d]}function o(e){return e.current&&(e.current.el||e.current)}function u(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}Object(r.useEffect)((function(){return e&&document&&document.addEventListener("click",t),function(){e&&document&&document.removeEventListener("click",t)}}))}t("eOg2"),t("e3wf");var s,a=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},d=function(e,n,t){var i=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=i.current;if(a()){var c=e.current;r&&r.disconnect(),r=new MutationObserver(n),c&&r.observe(c,t)}return function(){a()&&r&&r.disconnect()}}),[e,n,t])},f=(t("qoUV"),t("mK0O")),l=t("F5Dj");function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(s||(s={}));var p={resized:s.resized},b=function(e,n){return{isSmallDevice:e<=l.e.small,isMediumDevice:e>l.e.small&&e<l.e.medium,isLargeDevice:e>l.e.medium&&e<l.e.large,isXlDevice:e>l.e.large,isPortrait:n>=e,isLandscape:n<e,inner:{height:n,width:e}}},O={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},w=function(){var e="undefined"!=typeof window?window.innerWidth:0,n="undefined"!=typeof window?window.innerHeight:0;return b(e,n)},j=function(e,n){var t=n.type,r=n.width,i=n.height;switch(t){case p.resized:return v(v({},e),b(r,i))}};function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var h=function(){var e=Object(r.useReducer)(j,O,w),n=e[0],t=e[1],i=function(){return requestAnimationFrame((function(){return t({type:p.resized,width:window.innerWidth,height:window.innerHeight})}))};return Object(r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)},y=function(e){var n=e.ref,t=e.timeout,i=void 0===t?0:t,c=e.autoScroll,o=void 0===c||c,u=e.options,s=void 0===u?{behavior:"smooth"}:u,a=function(){null!=n&&n.current&&n.current.scrollIntoView(s)};return Object(r.useEffect)((function(){if(o){var e=setTimeout(a,i);return function(){return clearTimeout(e)}}}),[n,i,o]),[a]}},Qx3X:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return m})),t.d(n,"default",(function(){return O}));var r,i=t("+I+c"),c=t("mXGw"),o=t.n(c),u=t("/FXl"),s=t("7XvJ"),a=t("55RO"),d=o.a.createContext(a.a),f=function(){var e=Object(c.useContext)(d),n=e.isSmallDevice,t=e.isMediumDevice,r=e.isLargeDevice,i=e.isXlDevice,u=e.isLandscape,s=e.isPortrait,a=e.inner,f=a.width,l=a.height;return o.a.createElement("section",{className:"hooks-example key-listener-example jkl-spacing--bottom-3"},o.a.createElement("h2",{className:"jkl-h2 jkl-spacing--bottom-2"},"Din dings har en ",function(){switch(!0){case n:return"liten";case t:return"litt større";case r:return"ganske stor";case i:return"stor";default:return""}}()," skjerm"),o.a.createElement("h3",{className:"jkl-h3 jkl-spacing--bottom-2"},"Den er i "+(u?"landskaps":"")+(s?"portrett":"")+"modus"),o.a.createElement("p",{className:"jkl-p jkl-spacing--bottom-2"},f," x ",l))},l=function(){var e=Object(a.f)();return o.a.createElement(d.Provider,{value:e},o.a.createElement(f,null))},m={},v=(r="Ingress",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(u.mdx)("div",e)}),p={_frontmatter:m},b=s.a;function O(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(u.mdx)(b,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)(v,{mdxType:"Ingress"},"useScreen lar deg få tilgang til de samme breakpoints som cssen bruker til media queries."),Object(u.mdx)("p",null,"Av og til er kan det være nødvendig å endre strukturen på innholdet bassert på hvor stor skjerm innholdet skal presenteres på. Anbefalt implementasjon er å legge ",Object(u.mdx)("inlineCode",{parentName:"p"},"useScreen")," så høyt oppe i applikasjonen din som du mener er nødvendig i en ",Object(u.mdx)("inlineCode",{parentName:"p"},"context"),", for å benytte den contexten når du trenger å plukke ut verdiene i en komponent. Dette er for å unngå å sette opp flere eventlyttere enn nødvendig. Om du bruker server side rendering bør denne brukes med forsiktighet, da serveren ikke vil vite hvilken size den skal rendre for."),Object(u.mdx)(l,{mdxType:"ScreenExample"}))}O.isMDXComponent=!0},e3wf:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("mXGw");function i(e,n,t){function i(e){n&&!n.includes(e.key)||t(e)}"string"==typeof n&&(n=[n]),Object(r.useEffect)((function(){var n=e&&e.current;return n&&n.addEventListener("keydown",i),function(){n&&n.removeEventListener("keydown",i)}}))}},eOg2:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("mXGw");function i(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}Object(r.useEffect)((function(){return e&&document&&document.addEventListener("focusin",t),function(){e&&document&&document.removeEventListener("focusin",t)}}))}},qoUV:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("mXGw"),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},c=function(e,n,t,c){var o=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=o.current;if(i()){var u=e.current;r&&r.disconnect(),r=new IntersectionObserver(n,c),u&&r.observe(u)}else t();return function(){i()&&r&&r.disconnect()}}),[e,n,t,c])}}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-screen-mdx-2e0b8a0db3b75c285d21.js.map