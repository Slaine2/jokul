(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{bxeP:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return O}));var r=n("+I+c"),a=n("mXGw"),l=n.n(a),i=n("/FXl"),o=n("7XvJ"),d=n("8Jek"),s=n.n(d),p=n("bGYK"),m=function(e){var t=e.value,n=e.label,i=e.onChange,o=e.name,d=void 0===o?"":o,m=e.inline,v=void 0!==m&&m,u=e.checked,c=e.invalid,k=void 0!==c&&c,b=e.forceCompact,g=e.inverted,f=Object(r.a)(e,["value","label","onChange","name","inline","checked","invalid","forceCompact","inverted"]),h=Object(a.useState)("jkl-radio-button-"+Object(p.a)(8))[0],j=s()("jkl-radio-button",{"jkl-radio-button--compact":b,"jkl-radio-button--inline":v,"jkl-radio-button--error":k,"jkl-radio-button--inverted":g});return l.a.createElement("div",{className:j},l.a.createElement("input",Object.assign({id:h,className:"jkl-radio-button__input",type:"radio",name:d,value:t,onChange:i,checked:u},f)),l.a.createElement("label",{"data-testid":"jkl-radio-button__label-tag",htmlFor:h,className:"jkl-radio-button__label"},l.a.createElement("span",{"aria-hidden":!0,className:"jkl-radio-button__dot"}),l.a.createElement("span",{className:"jkl-radio-button__text"},n)))},v=n("XySe"),u=n("F5Dj"),c=function(e){var t=e.name,n=e.legend,r=e.choices,a=e.selectedValue,i=e.onChange,o=e.inline,d=void 0!==o&&o,s=e.helpLabel,p=e.errorLabel,c=e.variant,k=e.forceCompact,b=e.className,g=e.inverted;return l.a.createElement(v.a,{legend:n,helpLabel:s,errorLabel:p,variant:c,forceCompact:k,className:b,inverted:g},r.map(u.f).map((function(e){var n=e.label,r=e.value;return l.a.createElement(m,{key:r,name:t,value:r,label:n,inline:d,checked:r===a,onChange:i,invalid:!!p,forceCompact:k,inverted:g})})))},k=function(e){var t=e.boolValues,n=e.choiceValues,r=l.a.useState("Yes"),a=r[0],i=r[1],o=t&&t["Med feil"]?"Her er det noe feil":void 0,d=n&&n.Variant?n.Variant:"medium";return l.a.createElement(c,{legend:"Hvordan vil du bli kontaktet?",name:"likesradiobuttons",choices:["Jeg vil at dere skal ringe meg","Nei","Jeg vil at dere sender et brev til meg til min registrerte adresse fra folkeregisteret","Jeg vil at dere skal sende en e-post"],inline:t&&t.Inline,forceCompact:t&&t.Kompakt,selectedValue:a,onChange:function(e){return i(e.target.value)},helpLabel:"Hvis du trenger hjelp, kan du kontakte supporten vår",errorLabel:o,variant:d,inverted:t&&t.Invertert})},b={},g=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",t)}},f=g("Ingress"),h=g("ComponentExample"),j={_frontmatter:b},x=o.a;function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.mdx)(x,Object.assign({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(f,{mdxType:"Ingress"},"Vi bruker radioknapper når vi vil at brukeren skal velge ett av flere alternativ. Bruk helst radioknapper for inntil fire alternativ. Hvis du trenger å gi brukeren flere muligheter enn det, er det ofte bedre med en nedtrekksliste."),Object(i.mdx)(h,{component:k,knobs:{boolProps:["Kompakt","Inline","Med feil","Invertert"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},mdxType:"ComponentExample"}),Object(i.mdx)("p",null,"Over radioknappene setter vi inn en tydelig overskrift, som forteller hva det er brukeren skal velge mellom. I tillegg skal hver radioknapp ha en kort og tydelig ledetekst til høyre for knappen, som beskriver alternativet."),Object(i.mdx)("h2",null,"Bruk"),Object(i.mdx)("p",null,"En gruppe radioknapper kan enten settes opp under eller ved siden av hverandre. Det er mest brukervennlig å sette dem opp vertikalt."),Object(i.mdx)("p",null,"En av radioknappene bør alltid være valgt på forhånd. Det kan være det alternativet som de fleste vil velge, eller det som har minst følger for brukeren. I noen tilfeller kan det være viktig at brukeren selv velger, uten å bli påvirket av et forhåndsvalg. Da kan vi sette opp radioknapper uten forhåndsvalg. ",Object(i.mdx)("strong",{parentName:"p"},"Vis eksempler på det")),Object(i.mdx)("h2",null,"Tekst og validering"),Object(i.mdx)("p",null,"Bruk prinsippene for skjemadesign når du velger størrelse på overskriften til en gruppe radioknapper. Skriv en kort og tydelig overskrift, som forteller hva brukeren skal velge. Hvis det er behov for det, kan vi legge inn en hjelpetekst under gruppen, for å forklare mer."),Object(i.mdx)("p",null,"Hvis radioknappene ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta det viktigste fra hjelpeteksten."),Object(i.mdx)("p",null,"Eksempel fra helsevurdering:\n",Object(i.mdx)("strong",{parentName:"p"},"Hjelpetekst"),": ",Object(i.mdx)("em",{parentName:"p"},"Velg om du har hatt diagnosen de siste 5, 10 eller 15 årene"),". ",Object(i.mdx)("strong",{parentName:"p"},"Feilmelding"),": ",Object(i.mdx)("em",{parentName:"p"},"Du har ikke valgt hvor lenge du har hatt diagnosen"),"."))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-radio-button-react-documentation-radio-button-mdx-79dc24b0fcdbc0fac05c.js.map