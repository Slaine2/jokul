(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6900],{3257:function(e,n,t){"use strict";t.d(n,{zX:function(){return b},vD:function(){return u},O8:function(){return s},Iy:function(){return d},JZ:function(){return o},EV:function(){return O},gE:function(){return j}});var r=t(7378),i="(prefers-reduced-motion: no-preference)",o=function(){var e=(0,r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia(i).matches)),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e,n,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia(i),n=function(e){return t(!e.matches)},null===(r=e)||void 0===r||r.addListener(n));return function(){var t;null===(t=e)||void 0===t||t.removeListener(n)}}),[]),n};function u(e){var n=(0,r.useRef)(),t=(0,r.useRef)(),i=(0,r.useRef)(null),u=(0,r.useRef)(!0),s=o();function a(){var e=c(i);e&&e.removeAttribute("style")}var f=(0,r.useCallback)((function(){if(!s&&!u.current){var r=c(i);if(r)if(r.style.display="block",r.style.overflow="hidden",e)r.style.height="0",r.style.height=r.scrollHeight+"px";else{if(0===r.scrollHeight)return void r.removeAttribute("style");r.style.height=r.scrollHeight+"px",n.current=requestAnimationFrame((function(){t.current=requestAnimationFrame((function(){r.style.height="0px"}))}))}}}),[e]);return(0,r.useLayoutEffect)((function(){f()}),[e,f]),(0,r.useEffect)((function(){var e=c(i);return e&&e.addEventListener("transitionend",a),function(){e&&e.removeEventListener("transitionend",a)}}),[e]),(0,r.useEffect)((function(){var e=n.current,r=t.current;return u.current=!1,function(){e&&cancelAnimationFrame(e),r&&cancelAnimationFrame(r)}}),[n,t]),[i,f]}function c(e){return e.current&&(e.current.el||e.current)}function s(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("click",t),function(){e&&document&&document.removeEventListener("click",t)}}))}t(7226),t(4417);var a,f=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},d=function(e,n,t){var i=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=i.current;if(f()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(n),o&&r.observe(o,t)}return function(){f()&&r&&r.disconnect()}}),[e,n,t])},l=(t(5424),t(3450)),m=t(6328);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(a||(a={}));var g={resized:a.resized},w=function(e,n){return{isSmallDevice:e<=m.AV.small,isMediumDevice:e>m.AV.small&&e<m.AV.medium,isLargeDevice:e>m.AV.medium&&e<m.AV.large,isXlDevice:e>m.AV.large,isPortrait:n>=e,isLandscape:n<e,inner:{height:n,width:e}}},b={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},h=function(){var e="undefined"!=typeof window?window.innerWidth:0,n="undefined"!=typeof window?window.innerHeight:0;return w(e,n)},y=function(e,n){var t=n.type,r=n.width,i=n.height;switch(t){case g.resized:return v(v({},e),w(r,i))}};function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var O=function(){var e=(0,r.useReducer)(y,b,h),n=e[0],t=e[1],i=function(){return requestAnimationFrame((function(){return t({type:g.resized,width:window.innerWidth,height:window.innerHeight})}))};return(0,r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)},j=function(e){var n=e.ref,t=e.timeout,i=void 0===t?0:t,o=e.autoScroll,u=void 0===o||o,c=e.options,s=void 0===c?{behavior:"smooth"}:c,a=function(){null!=n&&n.current&&n.current.scrollIntoView(s)};return(0,r.useEffect)((function(){if(u){var e=setTimeout(a,i);return function(){return clearTimeout(e)}}}),[n,i,u]),[a]}},7226:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(7378);function i(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("focusin",t),function(){e&&document&&document.removeEventListener("focusin",t)}}))}},5424:function(e,n,t){"use strict";t.d(n,{S:function(){return o}});var r=t(7378),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},o=function(e,n,t,o){var u=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=u.current;if(i()){var c=e.current;r&&r.disconnect(),r=new IntersectionObserver(n,o),c&&r.observe(c)}else t();return function(){i()&&r&&r.disconnect()}}),[e,n,t,o])}},4417:function(e,n,t){"use strict";t.d(n,{W:function(){return i}});var r=t(7378);function i(e,n,t){function i(e){n&&!n.includes(e.key)||t(e)}"string"==typeof n&&(n=[n]),(0,r.useEffect)((function(){var n=e&&e.current;return n&&n.addEventListener("keydown",i),function(){n&&n.removeEventListener("keydown",i)}}))}},6415:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return g}});var r,i=t(120),o=t(7378),u=t(1368),c=t(2803),s=t(3257),a=o.createContext({prefersReducedMotion:!1}),f=function(){var e=(0,o.useContext)(a).prefersReducedMotion;return o.createElement("section",{className:"hooks-example key-listener-example jkl-spacing--bottom-3"},o.createElement("h2",{className:"jkl-h2 jkl-spacing--bottom-2"},"Din dings har en redusert bevegelse "+(e?"på":"av")))},d=function(){var e=(0,s.JZ)();return o.createElement(a.Provider,{value:{prefersReducedMotion:e}},o.createElement(f,null))},l={},m=(r="Ingress",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,u.mdx)("div",e)}),p={_frontmatter:l},v=c.Z;function g(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,u.mdx)(v,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)(m,{mdxType:"Ingress"},"useReducedMotion gjør at man kan sjekke om brukeren har satt preferedReducedMotion, dermed kan vi unngå å gjøre js-animasjoner, ikke bare css-animasjoner."),(0,u.mdx)("h2",null,"Bruk"),(0,u.mdx)("p",null,"Denne baserer seg på en event listener, så som andre hooks med eventlyttere bør denne implementeres så høyt opp i applikasjonen din som nødvendig for å unngå å lage for mange listeners. Bruk gjerne en React Context i stedet for å strø flere av denne komponenten rundt der man gjør JS-animasjoner. ",(0,u.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"},"Les om reduced motion på mdn"),"."),(0,u.mdx)("p",null,"Husk at reduced motion ikke betyr at ",(0,u.mdx)("em",{parentName:"p"},"all")," bevegelse må bort, men det skal være enkle, forklarende bevelgelser. Unngå store og kompliserte bevelgelser. Unngå også bevelgelser som ikke er initiert av brukeren. Parallax-effekter skal også skrus av. Ta en titt på ",(0,u.mdx)("a",{parentName:"p",href:"/"},"forsiden")," og ",(0,u.mdx)("a",{parentName:"p",href:"/profil/bildebruk"},"bildesiden")),(0,u.mdx)(d,{mdxType:"ReducedMotionExample"}))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-reduced-motion-mdx-9916f4057a310da931e0.js.map