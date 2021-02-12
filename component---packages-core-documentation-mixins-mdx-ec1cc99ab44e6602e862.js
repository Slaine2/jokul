(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0nzJ":function(e,a,n){},SpKd:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return o})),n.d(a,"default",(function(){return u}));var t,l=n("+I+c"),r=n("mXGw"),m=n.n(r),s=n("/FXl"),i=n("7XvJ"),c=(n("0nzJ"),function(){return m.a.createElement("table",{className:"jkl-mixin-example-table jkl-spacing--bottom-3"},m.a.createElement("tr",null,m.a.createElement("th",{className:"jkl-mixin-example-table__header"},"Navn på kurve"),m.a.createElement("th",{className:"jkl-mixin-example-table__header"},"Verdi")),m.a.createElement("tr",null,m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"standard"))),m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"ease")))),m.a.createElement("tr",null,m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"entrance"))),m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"ease-out")))),m.a.createElement("tr",null,m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"exit"))),m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"ease-in")))),m.a.createElement("tr",null,m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"easeInBounceOut"))),m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"cubic-bezier(0, 0, 0.375, 1.17)")))))}),d=function(){return m.a.createElement("table",{className:"jkl-mixin-example-table"},m.a.createElement("tr",null,m.a.createElement("th",{className:"jkl-mixin-example-table__header"},"Navn på varighet"),m.a.createElement("th",{className:"jkl-mixin-example-table__header"},"Verdi")),m.a.createElement("tr",null,m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"energetic"))),m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},"75ms"))),m.a.createElement("tr",null,m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"productive")," (default)")),m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},"150ms"))),m.a.createElement("tr",null,m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"expressive"))),m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},"250ms"))),m.a.createElement("tr",null,m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},m.a.createElement("code",{className:"jkl-portal-inline-code"},"lazy"))),m.a.createElement("td",{className:"jkl-mixin-example-table__data"},m.a.createElement("p",{className:"jkl-body"},"400ms"))))},o={},p=(t="Ingress",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.mdx)("div",e)}),j={_frontmatter:o},k=i.a;function u(e){var a=e.components,n=Object(l.a)(e,["components"]);return Object(s.mdx)(k,Object.assign({},j,n,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)(p,{mdxType:"Ingress"},"Vi tilbyr en rekke mixins og funksjoner i Sass for enklere bruk av stilarkene våre."),Object(s.mdx)("p",null,"Du kan importere alle mixins, eller kun de du trenger, fra ",Object(s.mdx)("inlineCode",{parentName:"p"},"jkl-core"),". Nøyaktig syntaks vil variere ut fra oppsettet i prosjektet ditt, men vil sannsynligvis likne på dette: ",Object(s.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/mixins/_all.scss;"'),"."),Object(s.mdx)("h2",null,"Bevegelse"),Object(s.mdx)("p",null,Object(s.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/mixins/_motion.scss;"')),Object(s.mdx)("p",null,"Du kan enkelt implementere bevegelse ved hjelp av mixin-en ",Object(s.mdx)("inlineCode",{parentName:"p"},"motion()"),", som setter CSS-egenskapene ",Object(s.mdx)("inlineCode",{parentName:"p"},"transition-timing-function")," og ",Object(s.mdx)("inlineCode",{parentName:"p"},"transition-duration")," ut fra valgene du gjør. For å bruke den må du spesifisere hvilken animasjonskurve og (valgfritt) hvilken varighet du ønsker på animasjonen. Husk også å spesifisere hvilke egenskaper du vil animere."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-scss"},'@include motion("standard", "productive");\ntransition-property: transform, opacity;\n')),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"NB!")," ",Object(s.mdx)("em",{parentName:"p"},"Ikke")," bruk verdiene under direkte, da de kan endre seg. Ved å bruke mixin-en sørger du for å holde koden din oppdatert mot verdiene i designsystemet."),Object(s.mdx)(c,{mdxType:"EasingTable"}),Object(s.mdx)(d,{mdxType:"TimingTable"}),Object(s.mdx)("h2",null,"Screenreader"),Object(s.mdx)("p",null,Object(s.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/mixins/_screenreader.scss;"')),Object(s.mdx)("p",null,"Her finner du to mixins for å skjule noe visuelt, men fortsatt gjøre det synlig for skjermlesere. Du kan også gjøre elementet synlig ved fokus ved å bruke begge mixins."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-scss"},"// for kun å skjule:\n@include screenreader-only();\n\n// for å skjule, men vise ved fokus:\n@include screnreader-only();\n@include screnreader-only-focusable();\n")),Object(s.mdx)("p",null,"Denne funksjonaliteten er også eksponert som utility-klassene ",Object(s.mdx)("inlineCode",{parentName:"p"},".jkl-sr-only")," og ",Object(s.mdx)("inlineCode",{parentName:"p"},".jkl-sr-only--focusable"),"."),Object(s.mdx)("h2",null,"Fjerne outlines"),Object(s.mdx)("p",null,Object(s.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/mixins/_helpers.scss;"')),Object(s.mdx)("p",null,"Denne mixin-en hjelper deg med å fjerne outlines og fokusringer fra elementer som knapper og lenker. Den vil fjerne disse både fra elementet den brukes på og elementer som ligger inne i dette."),Object(s.mdx)("p",null,Object(s.mdx)("inlineCode",{parentName:"p"},"@include reset-outline();")),Object(s.mdx)("h2",null,"Konvertere pikselverdier til ",Object(s.mdx)("inlineCode",{parentName:"h2"},"rem")),Object(s.mdx)("p",null,Object(s.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/_functions.scss;"')),Object(s.mdx)("p",null,"For å gjøre løsningene våre skalerbare og tilgjengelige ønsker vi å angi størrelser i ",Object(s.mdx)("inlineCode",{parentName:"p"},"rem")," fremfor å bruke pikselverdier. For å gjøre dette enklere har vi en funksjon som gjør om pikselverdier til riktig ",Object(s.mdx)("inlineCode",{parentName:"p"},"rem"),"-verdi."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-scss"},"min-height: rem(48px); // 3rem\n")),Object(s.mdx)("h2",null,"Kompakt modus"),Object(s.mdx)("p",null,Object(s.mdx)("inlineCode",{parentName:"p"},'@import "~@fremtind/jkl-core/mixins/_helpers.scss;"')),Object(s.mdx)("p",null,"Dette er en snarvei til selektoren for kompakt modus når du skal skrive nye komponenter til Jøkul. Du bruker denne mixin-en som en wrapper, det vil si at den skal ha innhold."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-scss"},".jkl-your-component {\n    // regular styles\n    @include compact-mode {\n        // compact style overrides\n    }\n}\n")),Object(s.mdx)("h2",null,"Keyboard-navigasjon"),Object(s.mdx)("p",null,"Når du setter opp initTabListner fra jkl-core, så settes det noen data-attributter på html-elementet som gjør at man kan sette opp en tydeligere focus state for tastaturbrukere eller egen stil for touchskjermer. Det er en mixin for å gjøre det enklere for klienter og knytte seg på denne funksjonaliteten."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-scss"},"@use '@fremtind/jkl-core/mixins/navigation';\n\n.my-component {\n    // pretty component\n    &:focus {\n        @include navigation.keyboard-navigation {\n            box-shadow: 0 0 0 2px $info;\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-core-documentation-mixins-mdx-ec1cc99ab44e6602e862.js.map