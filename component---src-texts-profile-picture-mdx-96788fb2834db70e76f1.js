(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"5EGp":function(e,t,r){"use strict";var i=r("63Ad");t.__esModule=!0,t.default=void 0;var a,n=i(r("T1e2")),l=i(r("QKC2")),s=i(r("PE9J")),o=i(r("8VmE")),d=i(r("mXGw")),u=i(r("W0B4")),c=function(e){var t=(0,o.default)({},e),r=t.resolutions,i=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(h&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,r=e.fixed;return p(t||r).src},p=function(e){if(h&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},b=Object.create({}),m=function(e){var t=c(e),r=g(t);return b[r]||!1},k="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,v=h&&window.IntersectionObserver,j=new WeakMap;function y(e){return e.map((function(e){var t=e.src,r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:a,srcSet:i,sizes:n}),d.default.createElement("source",{media:a,srcSet:r,sizes:n}))}))}function O(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,r=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:i})}))}function E(e,t){var r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?i:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var w=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(j.has(e.target)){var t=j.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),j.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),j.set(e,t)),function(){r.unobserve(e),j.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+d+l+s+r+i+t+n+a+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=d.default.forwardRef((function(e,t){var r=e.src,i=e.imageVariants,a=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(L,(0,o.default)({ref:t,src:r},n,{ariaHidden:l}));return i.length>1?d.default.createElement("picture",null,a(i),s):s})),L=d.default.forwardRef((function(e,t){var r=e.sizes,i=e.srcSet,a=e.src,n=e.style,l=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:r,srcSet:i,src:a},p,{onLoad:l,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var R=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=h&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!k&&v&&!r.isCritical&&!r.seenBefore;var i=r.isCritical||h&&(k||!r.useIOSupport);return r.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,l.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),r=g(t),b[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,i=e.className,a=e.style,n=void 0===a?{}:a,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,b=e.fluid,m=e.fixed,k=e.backgroundColor,h=e.durationFadeIn,v=e.Tag,j=e.itemProp,O=e.loading,E=e.draggable,w=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,o.default)({opacity:w?1:0,transition:R?"opacity "+h+"ms":"none"},s),T="boolean"==typeof k?"lightgray":k,N={transitionDelay:h+"ms"},P=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&N,s,f),H={title:t,alt:this.state.isVisible?"":r,style:P,className:g,itemProp:j};if(b){var _=b,z=p(b);return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),T&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&N)}),z.base64&&d.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:H,imageVariants:_,generateSources:x}),z.tracedSVG&&d.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:H,imageVariants:_,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(_),d.default.createElement(L,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j,loading:O,draggable:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:r,title:t,loading:O},z,{imageVariants:_}))}}))}if(m){var F=m,C=p(m),M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},T&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},R&&N)}),C.base64&&d.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:C.base64,spreadProps:H,imageVariants:F,generateSources:x}),C.tracedSVG&&d.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:C.tracedSVG,spreadProps:H,imageVariants:F,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(F),d.default.createElement(L,{alt:r,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j,loading:O,draggable:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:r,title:t,loading:O},C,{imageVariants:F}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var B=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});R.propTypes={resolutions:B,sizes:T,fixed:u.default.oneOfType([B,u.default.arrayOf(B)]),fluid:u.default.oneOfType([T,u.default.arrayOf(T)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=R;t.default=N},GXOf:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return k})),r.d(t,"default",(function(){return j}));var i=r("+I+c"),a=r("mXGw"),n=r.n(a),l=r("/FXl"),s=r("7XvJ"),o=r("Wbzz"),d=r("5EGp"),u=r.n(d),c=r("2peb"),f=r("Abof"),g=(r("OOQk"),function(e){var t=e.media,r=e.rightAlign,i=e.caption,l=e.children,s=Object(a.useState)(0),o=s[0],d=s[1],u=Object(a.useState)(!1),g=u[0],p=u[1],b=Object(a.useRef)(null),m=Object(a.useRef)(null),k=Object(c.e)().scrollY;Object(a.useLayoutEffect)((function(){var e=b.current;e&&d(e.offsetTop)}),[b]),Object(f.c)(m,(function(e){return p(e.some((function(e){return e.isIntersecting})))}),(function(){}),{rootMargin:"-175px 0px",threshold:[0,1]});var h=Object(c.d)(k,[o,o+1],[0,-.3],{clamp:!1}),v=((null==l?void 0:l.toString())||"").length>90;return n.a.createElement("div",{ref:b,className:"jkl-portal-media-box "+(r?"jkl-portal-media-box--right":"")},n.a.createElement(c.b.figure,{ref:m,className:"jkl-portal-media-box__media "+(g?"jkl-portal-media-box__media--in-view":"")},t,i&&n.a.createElement("figcaption",{className:"jkl-micro jkl-portal-media-box__caption"},i)),n.a.createElement(c.b.div,{style:{y:h},className:"jkl-portal-media-box__card "+(v?"jkl-portal-media-box__card--long-text":"")},n.a.createElement("p",{className:v?"jkl-body":"jkl-lead"},l)))}),p=function(e){var t=e.asset,r=e.alt,a=Object(i.a)(e,["asset","alt"]),l=Object(o.useStaticQuery)("2655279365").allImageSharp.nodes.find((function(e){return e.fluid.originalName===t}));return l?n.a.createElement(g,Object.assign({media:n.a.createElement(u.a,{fluid:l.fluid,alt:r})},a)):null},b=(r("wX4m"),function(e){var t=e.title,r=e.children,i=Object(o.useStaticQuery)("402095354");return n.a.createElement("div",{className:"jkl-portal-fullView"},n.a.createElement("div",{className:"jkl-portal-hero"},i&&n.a.createElement(u.a,{className:"",fluid:i.file.childImageSharp.fluid,alt:"Fjellandskap"}),n.a.createElement("button",{onClick:function(){var e;return null===(e=window)||void 0===e?void 0:e.scrollBy({top:window.innerHeight,behavior:"smooth"})},className:"jkl-portal-hero__card"},n.a.createElement("h1",{className:"jkl-title-large jkl-spacing--bottom-2"},t),n.a.createElement("p",{className:"jkl-body"},r),n.a.createElement("div",{className:"jkl-portal-hero__card__arrow jkl-title-small jkl-spacing--top-1"},"↓"))))}),m=function(e){var t=e.src,r=e.placeholder,a=Object(i.a)(e,["src","placeholder"]);return n.a.createElement(g,Object.assign({media:n.a.createElement("video",{className:"jkl-portal-media-box__video",src:Object(o.withPrefix)(t),poster:Object(o.withPrefix)(r),autoPlay:!0,muted:!0,loop:!0,tabIndex:-1})},a))},k={},h={_frontmatter:k},v=s.a;function j(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(l.b)(v,Object.assign({},h,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b,{title:"Bildebruk",mdxType:"HeroImage"},"Vi bruker bilder som virkemidler til å skape en stemning, understreke et poeng eller hjelpe brukeren med å navigere i våre løsninger. Vi skal bruke bilder fremfor illustrasjoner og ikoner. Bruk bilder fra vår bildebank når du skal bruke bilder i våre løsninger eller i en presentasjon."),Object(l.b)("h2",null,"Dette bør du tenke gjennom når du velger et bilde:"),Object(l.b)("p",null,"Passer bildet med Fremtinds visjon? Hjelper bildet brukeren å forstå det du kommuniserer? Viser bildet produktet\neller tjenesten på en god måte? Tilfører bildet verdi til innholdet? Hva slags virkning har bildet på\nmottakeren?"),Object(l.b)("div",{style:{paddingBottom:"15vh"}}),Object(l.b)("h2",null,"Fotostil"),Object(l.b)("p",null,"Fremtind har en todelt fotostil. Vi står enten på toppen av tinden, med full oversikt, eller på bakkeplan sammen med menneskene. Fotostilen er ærlig, ekte og upolert. Den er hverdagslig og jordnær, nettopp for å gi brukerne våre noe de kan kjenne seg igjen i. Fordi fargene vi bruker er nøkterne og stilrene, vil fotografier utdype identiteten med varme og følelser. Bruk gjerne bilder som henter farger fra Fremtinds støttefargepallett."),Object(l.b)("p",null,"Bildene viser landskap eller situasjoner med mennesker i vante omgivelser. Vi unngår å bruke stockfoto eller oppstilte bilder, og vi bruker bilder av produkter med omhu."),Object(l.b)("p",null,"I all hovedsak:"),Object(l.b)(p,{alt:"Fugleperspektiv av blåturkis sjø som bryter inn mot sandstrand",asset:"beach.jpg",caption:"Husk å kreditere rettighetseier",mdxType:"PictureBox"},"Bruk bilder tatt rett ovenfra eller rett forfra."),Object(l.b)(p,{alt:"Mennesker i retromoderne og industrielt kaféinteriør",asset:"cafe.jpg",rightAlign:!0,mdxType:"PictureBox"},"Velg upolerte og hverdagslige bilder."),Object(l.b)(p,{alt:"Sommerfoto. Smilende mørkhåret jente med rosa blomster uskarpt i bakgrunnen.",asset:"kid.jpg",mdxType:"PictureBox"},"Formidle varme og følelser."),Object(l.b)(p,{alt:"Fargerike golfballer og golfkølle på grønt gress",asset:"minigolf.jpg",rightAlign:!0,mdxType:"PictureBox"},"Bruk foto fremfor illustrasjoner og ikoner."),Object(l.b)(p,{alt:"Mor og baby mot naturbakgrunn ved soloppgang",asset:"mom.jpg",mdxType:"PictureBox"},"Velg landskap eller mennesker i omgivelser folk kan kjenne seg igjen i."),Object(l.b)("div",{style:{paddingBottom:"15vh"}}),Object(l.b)("h2",null,"Hvordan velge bilde?"),Object(l.b)("p",null,"Når vi snakker om et konkret forsikringsprodukt, kan det være vanskelig å finne bilder som passer perfekt. Her er noen tips og retningslinjer for de ulike forsikringene. Felles for kategoribildene er at vi ønsker å fokusere på en situasjon som oppstår rundt eller i samspill med produktet, i stedet for selve produktet."),Object(l.b)("div",{style:{paddingBottom:"15vh"}}),Object(l.b)(p,{alt:"Interiørfoto av gutt som ser på smarttelefon foran PC og nettbrett",asset:"schoolkid.jpg",mdxType:"PictureBox"},Object(l.b)("b",null,"Skadeforsikring"),Object(l.b)("br",null),"Vi viser folk og tingene deres i samspill, heller enn å ta bilde av et produkt."),Object(l.b)(p,{alt:"Bilinteriør.Kvinne som kjører bil i by. Øynene vises i bakspeilet",asset:"driver.jpg",rightAlign:!0,mdxType:"PictureBox"},Object(l.b)("b",null,"Bilforsikring"),Object(l.b)("br",null),"Bruk bilder av situasjoner i og rundt bilen. I trafikken, ved av- og pålessing, av folk og ting i nærheten av bilen, eller når de steller bilen sin. Kan hende pakker de til ferie, henter på trening, er på handletur eller vasker bilen. Situasjonen er viktigere enn bilen, bildet skal ikke oppfattes som reklame for en bestemt biltype. Vær oppmerksom på at bilen skal kjøre på norske veier."),Object(l.b)(p,{alt:"Kvinne med trillekoffert foran rødt tog på jernbanestasjon",asset:"togpendler.jpg",mdxType:"PictureBox"},Object(l.b)("b",null,"Reiseforsikring"),Object(l.b)("br",null),"Når det gjelder reiseforsikring kan vi bruke bilder fra utlandet, men da gjerne i typiske situasjoner man havner i som turist. Her kan vi appellere til ulike typer, for eksempel den eventyrlystne, storbyturisten, solslikkeren eller den lokale turisten.",Object(l.b)("br",null),Object(l.b)("br",null)," Merk: Fremtind er et bærekraftig selskap og vi unngår å bruke bilder av fly, cruiseskip eller aktiviteter som ødelegger natur eller lokalsamfunn."),Object(l.b)(p,{alt:"Hundevalp på et pledd i en sofa",asset:"dogs.jpg",rightAlign:!0,mdxType:"PictureBox"},Object(l.b)("b",null,"Dyreforsikring"),Object(l.b)("br",null),"Dyr har sin egen personlighet og de kan gjerne eie bildet alene, men det er også fint å vise samspillet mellom dyr og mennesker. Dyr egner seg fint til bilder tatt “rett ovenfra”."),Object(l.b)("div",{style:{paddingBottom:"15vh"}}),Object(l.b)("h2",null,"Lys og farger"),Object(l.b)("p",null,"Vi vil at atmosfæren i bildene skal virke inviterende og virkelighetsnær. For å skape det bruker vi dagslys, eller naturlig lyssetting og fargekorrigering. Vi bruker ikke effekter eller filtre på bildene våre. Alle bildene i Fremtinds bildedatabase er redigert og fargekorrigert, slik at de oppfyller kravene til bildestilen. De skal oppleves som like"),Object(l.b)("div",{style:{paddingBottom:"15vh"}}),Object(l.b)(m,{src:"/assets/video/marius-compressed.mp4",placeholder:"/assets/img/marius.jpg",mdxType:"VideoBox"},Object(l.b)("b",null,"Bevegelse"),Object(l.b)("br",null)," For å skape ekstra liv kan man legge på enkle effekter som parallakse, uskarphet og elevasjon. Vi kan også bruke animerte bilder, så lenge animasjonen tilfører noe og ikke oppleves som forstyrrende."),Object(l.b)("div",{style:{paddingBottom:"15vh"}}),Object(l.b)("h2",null,"Responsivitet"),Object(l.b)("p",null,"Bildene vil ofte brukes på responsive nettsider. Det betyr at både format og størrelse kan bli endret, og andre elementer kan bytte plass i forhold til bildet. Hvis vi bruker godt med rom rundt hovedmotivet i bildet, blir det lettere å plassere designelementer over bildet. Da får vi også et sikkerhetsrom rundt hovedmotivet, slik at det ikke blir beskåret når vi skalerer."),Object(l.b)("h3",null,"Overlappende elementer"),Object(l.b)("p",null,"Vi kan legge andre elementer oppå bilder så lenge vi sørger for at kontrasten er ivaretatt. Pass på at det elementet som overlapper bildet ikke dekker over hovedmotivet."),Object(l.b)("h2",null,"Bildebank"),Object(l.b)("p",null,"I Fremtind har vi en bildebank, den finner du på intranettet. Ikke bruk bilder vi ikke har lisens på og husk fotokreditering der det kreves."))}j.isMDXComponent=!0},OOQk:function(e,t,r){},wX4m:function(e,t,r){}}]);
//# sourceMappingURL=component---src-texts-profile-picture-mdx-96788fb2834db70e76f1.js.map