(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9ILF":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return K})),n.d(t,"b",(function(){return X}));n("x3Br");var r=n("8VmE"),o=n.n(r),a=n("OvAC"),i=n.n(a),c=n("nxTg"),l=n.n(c),u=n("RiSW"),s=n.n(u),f=n("e+GP"),p=n.n(f),d=n("mXGw"),v=n.n(d),h=n("bGYK"),b=n("F5Dj"),m=n("Abof"),y=n("8Jek"),g=n.n(y);var w,k=(w=n("mXGw"))&&"object"===p()(w)&&"default"in w?w.default:w;function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function x(e,t,n){return(x=L()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&O(o,n.prototype),o}).apply(null,arguments)}function C(e){var t="function"==typeof Map?new Map:void 0;return(C=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return x(e,arguments,_(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),O(r,e)})(e)}function A(e,t){return!t||"object"!==p()(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var S="undefined"!=typeof window,N=S&&/(android)/i.test(navigator.userAgent),R=S&&/iPad|iPhone|iPod/.test(String(navigator.platform));S||e.HTMLElement||(e.HTMLElement=function(){return function e(){E(this,e)}}());var T,P,D=(T="undefined"==typeof window?{}:window.Element.prototype,P=T.matches||T.msMatchesSelector||T.webkitMatchesSelector,T.closest?function(e,t){return e.closest(t)}:function(e,t){for(e.correspondingUseElement&&(e=e.correspondingUseElement);e;e=e.parentElement)if(P.call(e,t))return e;return null});function M(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="prevent_recursive_dispatch_maximum_callstack".concat(t);if(e[o])return!0;e[o]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r);var a=e.dispatchEvent(n);return e[o]=null,a}function F(){return Date.now().toString(36)+Math.random().toString(36).slice(2,5)}var q=function(e){function t(){return E(this,t),A(this,_(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,o=[{key:"observedAttributes",get:function(){return["hidden"]}}],(r=[{key:"connectedCallback",value:function(){R&&(document.documentElement.style.cursor="pointer"),N||this.setAttribute("aria-labelledby",this.button.id=this.button.id||F()),this.value=this.button.textContent,this.setAttribute("role","group"),this.button.setAttribute("aria-expanded",this._open=!this.hidden),this.button.setAttribute("aria-controls",this.id=this.id||F()),document.addEventListener("keydown",this,!0),document.addEventListener("click",this)}},{key:"disconnectedCallback",value:function(){this._button=null,document.removeEventListener("keydown",this,!0),document.removeEventListener("click",this)}},{key:"attributeChangedCallback",value:function(){if(this._open===this.hidden){this.button.setAttribute("aria-expanded",this._open=!this.hidden);try{this.querySelector("[autofocus]").focus()}catch(e){}M(this,"toggle")}}},{key:"handleEvent",value:function(e){if(!e.defaultPrevented){if("keydown"===e.type&&27===e.keyCode&&(e.target.getAttribute&&"true"===e.target.getAttribute("aria-expanded")?e.target===this.button:D(e.target,this.nodeName)===this))return this.hidden=!0,this.button.focus(),e.preventDefault();if("click"===e.type){var t=D(e.target,"a,button");t&&!t.hasAttribute("aria-expanded")&&D(e.target,this.nodeName)===this?M(this,"toggle.select",t):t&&t.getAttribute("aria-controls")===this.id?this.hidden=!this.hidden:this.popup&&!this.contains(e.target)&&(this.hidden=!0)}}}},{key:"button",get:function(){return this._button&&this._button.getAttribute("for")===this.id?this._button:(this._button=this.id&&document.querySelector('[for="'.concat(this.id,'"]').concat(', [data-for="'.concat(this.id,'"]'))))||this.previousElementSibling}},{key:"popup",get:function(){return"true"===this.getAttribute("popup")||this.getAttribute("popup")||this.hasAttribute("popup")},set:function(e){this[!1===e?"removeAttribute":"setAttribute"]("popup",e)}},{key:"hidden",get:function(){return this.hasAttribute("hidden")},set:function(e){!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.hasAttribute(t);!n===e.hasAttribute(t)&&e[n?"setAttribute":"removeAttribute"](t,"")}(this,"hidden",e)}},{key:"value",get:function(){return this.button.value||this.button.textContent},set:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.button&&this.popup.length){var t=this.button,n=(t.getAttribute("aria-label")||",".concat(this.popup)).split(",")[1],r=e.textContent||e||"";if(n===this.popup){var o=t.querySelector("span")||t;t.value=e.value||r,t.setAttribute("aria-label","".concat(t.textContent,",").concat(this.popup)),o[e.innerHTML?"innerHTML":"textContent"]=e.innerHTML||r}}}}])&&j(n.prototype,r),o&&j(n,o),t}(C(HTMLElement)),B=function(){var e="undefined"==typeof window?{}:window.Element.prototype,t=e.matches||e.msMatchesSelector||e.webkitMatchesSelector;return e.closest?function(e,t){return e.closest(t)}:function(e,n){for(;e;e=e.parentElement)if(t.call(e,n))return e;return null}}();var H=function(e,t){void 0===t&&(t={});var n=((t.name||e.name||String(e).match(/function ([^(]+)/)[1])+"-"+F()).replace(/.[A-Z]/g,(function(e){return e[0]+"-"+e[1]})),r=t.props||[],o=t.customEvents||[],a=o.reduce((function(e,t){return e[t]="on"+t.replace(/(^|\.)./g,(function(e){return e.slice(-1).toUpperCase()})),e}),{}),i=r.concat("forwardRef",Object.keys(a).map((function(e){return a[e]}))),c=(n+"-"+(t.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(t){function n(e){var n=this;t.call(this,e),this.ref=function(e){return"function"==typeof n.props.forwardRef?n.props.forwardRef(e):n.props.forwardRef&&(n.props.forwardRef.current=e),n.el=e},Object.keys(a).forEach((function(e){var t=a[e];n[e]=function(e){n.props[t]&&B(e.target,n.el.nodeName)===n.el&&n.props[t](e)}}))}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var t=this;window.customElements.get(c)||window.customElements.define(c,e),r.forEach((function(e){e in t.props&&(t.el[e]=t.props[e])})),o.forEach((function(e){t.el.addEventListener(e,t[e])}))},n.prototype.componentDidUpdate=function(e){var t=this;r.forEach((function(n){e[n]!==t.props[n]&&(t.el[n]=t.props[n])}))},n.prototype.componentWillUnmount=function(){var e=this;o.forEach((function(t){e.el.removeEventListener(t,e[t])}))},n.prototype.render=function(){var e=this;return k.createElement(c,Object.keys(this.props).reduce((function(t,n){return-1===i.indexOf(n)&&("className"===n?t.class=e.props[n]:!0===e.props[n]?t[n]="":!1!==e.props[n]&&(t[n]=e.props[n])),t}),{ref:this.ref}))},n}(k.Component)}(q,{name:"CoreToggle",customEvents:["toggle","toggle.select"],suffix:"3.0.8"});function U(e,t){var n=t.event,r=t.list,o=t.currentFocus;n.preventDefault(),function(e,t,n){var r=n.parentElement;switch(e){case"prev":var o=r&&r.previousElementSibling;if(o){var a=o.querySelector('[role="option"]');a&&a.focus()}break;case"next":var i=r&&r.nextElementSibling;if(i){var c=i.querySelector('[role="option"]');c&&c.focus()}break;case"first":var l=t.querySelector('[role="option"]');l&&l.focus();break;case"last":var u=t.querySelectorAll('[role="option"]');u.length&&u[u.length-1].focus()}}(e,r,o)}function G(e){var t=e.list,n=e.event,r=e.search,o=e.searchResetTimer,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,i=n.key,c=n.target,l=c,u={event:n,list:t,currentFocus:l};switch(i){case"ArrowUp":a("prev",u);break;case"ArrowDown":a("next",u);break;case"Home":a("first",u);break;case"End":a("last",u);break;case"Tab":n.preventDefault();break;case"Enter":break;default:if(void 0!==r){var s=V({list:t,key:i,search:r,searchResetTimer:o});s&&s.focus()}}}function V(e){var t=e.list,n=e.key,r=e.search,o=e.searchResetTimer,a=t.querySelectorAll('[role="option"]');if(!a.length)return null;if(r){r.keys=r.keys.concat(n),function(e,t){t&&(clearTimeout(t),t=void 0);t=setTimeout((function(){e?e.keys="":e={keys:""},t=void 0}),500,e,t)}(r,o);for(var i=0;i<a.length;i++){var c=a[i].innerText;if(c&&0===c.toLowerCase().indexOf(r.keys))return a[i]}}return null}function W(e){var t=e.expanded,n=void 0!==t&&t,r=e.className,o=g()({"jkl-expand-arrow":!0,"jkl-expand-arrow--expanded":n},r);return v.a.createElement("span",{className:o},v.a.createElement("svg",{className:"jkl-expand-arrow__down",viewBox:"0 0 13 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v.a.createElement("path",{d:"M6.90762 13.8828L11.9272 8.86326L12.7093 9.64537L6.35463 16L-1.68645e-06 9.64536L0.782101 8.86326L5.80156 13.8827L5.80156 1.01438e-06L6.90762 1.20777e-06L6.90762 13.8828Z",fill:"currentColor"})),v.a.createElement("svg",{className:"jkl-expand-arrow__up",viewBox:"0 0 13 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v.a.createElement("path",{d:"M5.80163 2.1172L0.78209 7.13674L-1.29938e-05 6.35464L6.35462 5.14415e-08L12.7093 6.35464L11.9272 7.13674L6.90769 2.11728L6.9077 16L5.80163 16L5.80163 2.1172Z",fill:"currentColor"})))}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.toLowerCase().replace(/[\W_]+/g,"")}var X=Object(d.forwardRef)((function(e,t){var n,r=e.id,a=e.name,i=e.items,c=e.value,u=e.label,f=e.onChange,p=e.onBlur,y=e.onFocus,w=e.className,k=e.helpLabel,E=e.errorLabel,j=e.searchable,_=void 0!==j&&j,O=e.inline,L=void 0!==O&&O,x=e.defaultPrompt,C=void 0===x?"Velg":x,A=e.variant,S=e.forceCompact,N=e.inverted,R=e.width,T=s()(e,["id","name","items","value","label","onChange","onBlur","onFocus","className","helpLabel","errorLabel","searchable","inline","defaultPrompt","variant","forceCompact","inverted","width"]),P=Object(d.useState)(""),D=l()(P,2),M=D[0],F=D[1],q=void 0!==c&&""!==c,B=i.map(b.f).map((function(e){var t=!_||""===M||e.label.toLowerCase().indexOf(M.toLowerCase())>-1;return J(J({},e),{},{visible:t})})),U=(null===(n=B.find((function(e){return e.value===c})))||void 0===n?void 0:n.label)||C,V=Object(d.useRef)(!1),I=Object(d.useState)(!1),X=l()(I,2),K=X[0],Y=X[1],z=Object(d.useState)(r||"jkl-select-".concat(Object(h.a)(8))),Q=l()(z,1)[0],$="".concat(Q,"_search-input"),ee=_&&K,te=Object(d.useRef)(null),ne=Object(d.useRef)(null),re=t&&"function"!=typeof t?t:ne,oe=Object(d.useRef)(null),ae=Object(d.useRef)(null),ie=Object(m.a)(K),ce=l()(ie,1)[0],le=function(){var e,t,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=Object(d.useRef)(null);return n&&(e={keys:""}),Object(d.useEffect)((function(){var n=r.current;return n&&n.addEventListener("keydown",(function(r){return G({list:n,event:r,search:e,searchResetTimer:t})})),function(){n&&n.removeEventListener("keydown",(function(r){return G({list:n,event:r,search:e,searchResetTimer:t})}))}}),[e,t]),r}(),ue=g()("jkl-select",w,{"jkl-select--inline":L,"jkl-select--compact":S,"jkl-select--inverted":N,"jkl-select--open":K,"jkl-select--no-value":!q,"jkl-select--invalid":!!E});function se(e){var t=te.current;!(t&&t.contains(e.relatedTarget))&&p&&(p(c),re.current&&re.current.dispatchEvent(new Event("focusout",{bubbles:!0})),V.current=!1)}function fe(){y&&!V.current&&(y(c),V.current=!0)}return Object(d.useEffect)((function(){var e=re.current,n=ae.current,r=oe.current,o=te.current;return e&&"function"==typeof t&&t(e),null==e||e.addEventListener("focus",(function(){ee?null==n||n.focus():null==r||r.focus()})),null==e||e.addEventListener("blur",(function(e){o&&o.contains(e.relatedTarget)&&e.preventDefault()})),function(){null==e||e.removeEventListener("focus",(function(){ee?null==n||n.focus():null==r||r.focus()})),null==e||e.removeEventListener("blur",(function(e){o&&o.contains(e.relatedTarget)&&e.preventDefault()}))}}),[t,re,ee]),v.a.createElement("div",o()({"data-testid":"jkl-select",className:ue,ref:te},T),v.a.createElement(b.a,{standAlone:_,htmlFor:_?$:void 0,variant:A,forceCompact:S,srOnly:L},u),v.a.createElement("select",{name:a,tabIndex:-1,className:"jkl-sr-only","aria-hidden":!0,ref:re,defaultValue:c},v.a.createElement("option",{value:c},c)),v.a.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:R}},_&&v.a.createElement("input",{id:$,hidden:!ee,ref:ae,placeholder:"Søk",value:M,onChange:function(e){return F(e.target.value)},className:"jkl-select__search-input",onBlur:se,onFocus:fe}),v.a.createElement("button",{ref:oe,hidden:ee,type:"button",className:"jkl-select__button","data-testid":"jkl-select__button","aria-haspopup":"listbox",onBlur:se,onFocus:fe},U),v.a.createElement(H,{id:Q,ref:ce,role:"listbox",className:"jkl-select__options-menu",popup:u,hidden:!K,onToggle:function(){var e=!K;if(Y(!K),e&&!_){var t=le.current;t&&function(e,t,n){var r;(r=void 0!==n?e.querySelector("#".concat(t,"__").concat(Z(n))):e.querySelector('[role="option"]'))&&r.focus()}(t,Q,c)}else e&&ae.current&&ae.current.focus()},onToggleSelect:function(e){e.target.value=e.detail;var t=e.detail.value;F(""),f&&f(t),re.current&&re.current.dispatchEvent(new Event("change",{bubbles:!0})),e.target.hidden=!0,e.target.button.focus()},"aria-activedescendant":q&&"".concat(Q,"__").concat(Z(c))},v.a.createElement("ul",{className:"jkl-select__option-wrapper","data-testid":"jkl-select__option-wrapper",tabIndex:-1,ref:le},B.map((function(e,t){return v.a.createElement("li",{key:e.value,hidden:!e.visible},v.a.createElement("button",{type:"button",id:"".concat(Q,"__").concat(Z(e.value)),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===c,role:"option",value:e.value,"data-testautoid":"jkl-select__option-".concat(t),onBlur:se,onFocus:fe},e.label))})))),v.a.createElement(W,{className:"jkl-select__arrow",expanded:K})),v.a.createElement(b.d,{inverted:N,helpLabel:k,errorLabel:E,forceCompact:S}))})),K=Object(d.forwardRef)((function(e,t){var n=e.id,r=e.name,o=e.label,a=e.items,i=e.className,c=void 0===i?"":i,u=e.inline,s=void 0!==u&&u,f=e.helpLabel,p=e.errorLabel,m=e.variant,y=e.placeholder,w=e.value,k=e.forceCompact,E=e.inverted,j=e.width,_=e.onChange,O=e.onBlur,L=e.onFocus;w||!y&&a.length&&(w=Object(b.f)(a[0]).value);var x=g()("jkl-select",c,{"jkl-select--inline":s,"jkl-select--compact":k,"jkl-select--inverted":E,"jkl-select--invalid":!!p}),C=w?void 0:"",A=Object(d.useState)(n||"jkl-select-".concat(Object(h.a)(8))),S=l()(A,1)[0];return v.a.createElement("div",{"data-testid":"jkl-select",className:x},v.a.createElement(b.a,{standAlone:!0,htmlFor:S,variant:m,forceCompact:k},o),v.a.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:j}},v.a.createElement("select",{ref:t,id:S,name:r,value:w,defaultValue:C,className:"jkl-select__button",onChange:_,onBlur:O||_,onFocus:L},y&&!w&&v.a.createElement("option",{disabled:!0,value:""},y),a.map(b.f).map((function(e){return v.a.createElement("option",{"data-testid":"jkl-select__option",className:"jkl-select__option",key:e.value,value:e.value},e.label)}))),v.a.createElement(W,{className:"jkl-select__arrow"})),v.a.createElement(b.d,{helpLabel:f,errorLabel:p,forceCompact:k}))}))}).call(this,n("pCvA"))}}]);
//# sourceMappingURL=c2e5cb1abb432e0ac261a355055078d8f3ad5d01-b0a251d019cbbaea6fd3.js.map