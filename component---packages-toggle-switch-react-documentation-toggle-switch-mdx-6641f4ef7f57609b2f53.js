(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"+P0C":function(e,l,t){"use strict";t.d(l,"a",(function(){return p}));var a=t("8VmE"),r=t.n(a),n=t("RiSW"),o=t.n(n),s=t("mXGw"),i=t.n(s),c=t("8Jek"),m=t.n(c);t("OvAC");function d(e,l,t){return function(a){var n=a.children,s=a.className,c=o()(a,["children","className"]);(t||e).replace(/^\w/,(function(e){return e.toUpperCase()}));var m=e;return i.a.createElement(m,r()({className:"".concat(l," ").concat(s||"")},c),n)}}d("h1","jkl-title-large"),d("h2","jkl-title-small"),d("h3","jkl-heading-large"),d("h4","jkl-heading-medium"),d("h5","jkl-heading-small"),d("p","jkl-lead","lead"),d("p","jkl-body","body"),d("p","jkl-small","small"),d("p","jkl-micro","micro");var p=function(e){var l=e.id,t=e.helpLabel,a=e.errorLabel,r=e.forceCompact,n=e.className,o=e.srOnly,s=e.inverted,c=m()("jkl-form-support-label",n,{"jkl-form-support-label--compact":r,"jkl-form-support-label--error":a,"jkl-form-support-label--help":!a,"jkl-form-support-label--sr-only":o,"jkl-form-support-label--inverted":s});return a||t?i.a.createElement("span",{id:l,className:c},a||t):null}},"s+h8":function(e,l,t){"use strict";t.r(l),t.d(l,"_frontmatter",(function(){return j})),t.d(l,"default",(function(){return O}));var a=t("+I+c"),r=t("mXGw"),n=t.n(r),o=t("/FXl"),s=t("7XvJ"),i=t("+P0C"),c=t("8Jek"),m=t.n(c),d=function(e){var l=e.children,t=e.pressed,a=e.onClick,r=e.className,o=e.disabled,s=e.inverted,c=e.helpLabel,d=m()("jkl-toggle-switch",r,{"jkl-toggle-switch--inverted":s});return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{type:"button","aria-pressed":!!t,disabled:o,className:d,onClick:a},n.a.createElement("span",{className:"jkl-toggle-switch__slider"},n.a.createElement("span",{className:"jkl-toggle-switch__expanding-pill"})),l),c&&n.a.createElement(i.a,{className:"jkl-toggle-switch__help-label",helpLabel:c}))},p=t("bGYK"),u=t("F5Dj"),k=function(e){var l=e.labels,t=e.className,a=void 0===t?"":t,o=e.inverted,s=e.onToggle,i=e.defaultValue,c=e.children,d=e.screenReaderLabel,k=e.screenReaderSelectedLabel,b=Object(r.useState)(i!==l[0]),g=b[0],j=b[1],v=Object(r.useState)(i||l[0]),h=v[0],f=v[1],x=Object(r.useState)(Object(p.a)(8))[0],E=k||h+" valgt",O=d||", "+E;return n.a.createElement("div",{className:m()("jkl-toggle-slider__wrapper",{"jkl-toggle-slider__wrapper--inverted":o},a)},n.a.createElement("div",{role:"region","aria-live":"polite"},n.a.createElement(u.c,null,E)),n.a.createElement("label",{id:x+"-label",htmlFor:x,className:"jkl-toggle-slider__label jkl-component-spacing--medium-right"},c,n.a.createElement(u.c,null,O)),n.a.createElement("button",{id:x,"data-testid":"jkl-toggle-slider",type:"button",role:"switch","aria-checked":g,"aria-labelledby":x+"-label",onClick:function(){var e=!g,t=l[e?1:0];return j(e),f(t),s(t)},className:m()("jkl-toggle-slider",{"jkl-toggle-slider--checked":g,"jkl-toggle-slider--not-checked":!g})},n.a.createElement("span",{className:"jkl-toggle-slider__pill","aria-hidden":!0}),n.a.createElement("span",{className:"jkl-toggle-slider--left"},l[0]),n.a.createElement("span",{className:"jkl-toggle-slider--right"},l[1])))},b=function(e){var l=e.boolValues,t=Object(r.useState)(!1),a=t[0],o=t[1],s=l&&l["Med hjelpetekst"]?"Du må være koblet til wifi for å velge dette":void 0;return n.a.createElement(d,{pressed:a,onClick:function(){return o(!a)},inverted:l&&l.Invertert,disabled:l&&l.Deaktivert,helpLabel:s},"Send inn data om min kjørestil")},g=function(e){var l=e.boolValues;return n.a.createElement(k,{defaultValue:"måned",labels:["måned","år"],onToggle:console.log,inverted:l&&l.Invertert},"Pris per")},j={},v=function(e){return function(l){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.mdx)("div",l)}},h=v("Ingress"),f=v("ComponentExample"),x={_frontmatter:j},E=s.a;function O(e){var l=e.components,t=Object(a.a)(e,["components"]);return Object(o.mdx)(E,Object.assign({},x,t,{components:l,mdxType:"MDXLayout"}),Object(o.mdx)(h,{mdxType:"Ingress"},"Med veksleknapper kan brukerne bytte mellom to statuser (av eller på) uten at de må bekrefte valget. Ledeteksten forteller hva brukeren slår av og på. Vi har to varianter, en ren av/på knapp og en slider variant der man velger mellom to states."),Object(o.mdx)("h2",null,"ToggleSwitch"),Object(o.mdx)(f,{component:b,knobs:{boolProps:["Invertert","Deaktivert","Med hjelpetekst"]},mdxType:"ComponentExample"}),Object(o.mdx)("p",null,"Veksleknapper passer til situasjoner der brukerne selv kan velge å ha en funksjon av eller på, for eksempel automatisk oppdatering eller automatisk lagring."),Object(o.mdx)("p",null,"Ikke bruk veksleknapp hvis brukeren må bekrefte valget sitt."),Object(o.mdx)("h2",null,"ToggleSlider"),Object(o.mdx)(f,{component:g,knobs:{boolProps:[]},mdxType:"ComponentExample"}),Object(o.mdx)("p",null,"Brukes der brukeren kan velge mellom to valg."),Object(o.mdx)("h2",null,"Eksempler på bruk"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Slå innstillinger av eller på i en applikasjon."),Object(o.mdx)("li",{parentName:"ul"},"Bytte mellom lys eller mørk modus i et grensesnitt.")))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-toggle-switch-react-documentation-toggle-switch-mdx-6641f4ef7f57609b2f53.js.map