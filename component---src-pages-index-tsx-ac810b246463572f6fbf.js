(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("mXGw"),i=a.n(n),r=a("Wbzz"),l=a("2peb"),s=a("Abof"),c=a("8Jek"),o=a.n(c),m=(a("tfWc"),a("S2hM")),p=function(e){var t=e.text,a=e.delay,r=Object(n.useContext)(m.b).prefersReducedMotion,l=Object(n.useState)(r?t.length:-1),s=l[0],c=l[1],p=Object(n.useState)(!r),u=p[0],d=p[1],f=Object(n.useRef)(null),g=Object(n.useMemo)((function(){return t.split("").filter((function(e,t){return t<=s}))}),[s,t]),h=function(){var e=f.current;if(e){var t=e.parentElement,a=t?parseInt(window.getComputedStyle(t).getPropertyValue("padding-top")):0,n={top:e.offsetHeight+a,left:0,behavior:"smooth"};window.scrollTo(n)}};Object(n.useEffect)((function(){if(!u&&!r){var e=window&&window.setTimeout(h,500);return function(){e&&window.clearTimeout(e)}}}),[u,r]);var v=Math.random()*a+a/2;!function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current&&a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){s>=t.length?d(!1):c(s+1)}),u?v<50?a:v:null);var _=o()("jkl-portal-delay-text__content",{"jkl-portal-delay-text__content--done":!u});return i.a.createElement("section",{ref:f,className:"jkl-portal-delay-text"},i.a.createElement("div",{className:_},g))},u=Object.freeze({__proto__:null,NON_BREAKING_SPACE:" ",nbsp:" ",NON_BREAKING_HYPHEN:"‑",nbhy:"‑",PILE_OF_POO:"💩",SOFT_HYPHEN:"­",shy:"­",COPYRIGHT:"©",NORTH_EAST_ARROW:"↗",LEFTWARDS_ARROW:"←",UPWARDS_ARROW:"↑",RIGHTWARDS_ARROW:"→",DOWNWARDS_ARROW:"↓"}),d=(a("YIew"),function(e){var t=e.heading,a=e.link,n=e.children,l=a.startsWith("http")?u.NORTH_EAST_ARROW:u.RIGHTWARDS_ARROW;return i.a.createElement("button",{className:"jkl-portal-card",onClick:function(){return Object(r.navigate)(a)}},i.a.createElement("p",{className:"jkl-portal-card__heading"},t),i.a.createElement("div",{className:"jkl-portal-card__content"},n),i.a.createElement("div",{className:"jkl-portal-card__arrow"},l))}),f=(a("lzD/"),function(e){var t=e.children,a=e.vertical,n=o()("jkl-portal__card-list",{"jkl-portal__card-list--vertical":a});return i.a.createElement("div",{className:n},t)}),g=a("0942"),h=a("7L9N");function v(e){var t=e.className,a=e.width,n=e.height,r=e.contextRef;return i.a.createElement("canvas",{className:t,width:a,height:n,ref:function(e){return e?r(e.getContext("2d")):null}})}var _;a("mGGU");!function(e){e[e.None=0]="None",e[e.Elevated=1]="Elevated",e[e.Movement=2]="Movement",e[e.Clarity=3]="Clarity"}(_||(_={}));var k=function(e){function t(t){var a;return(a=e.call(this,t)||this).generateClasses=function(e){var t;return o()(e,((t={})[e+"--elevated"]=1===a.props.principleState,t[e+"--movement"]=2===a.props.principleState,t[e+"--clarity"]=3===a.props.principleState,t))},a.saveContext=a.saveContext.bind(Object(g.a)(a)),a.draw=a.draw.bind(Object(g.a)(a)),a.generateClasses=a.generateClasses.bind(Object(g.a)(a)),a.getScale=a.getScale.bind(Object(g.a)(a)),a.lastMinScale=0,a.lastMaxScale=0,a.updatedScaleAt=0,a.tileSize=0,a.tiles=7,a.ctx=null,a.size=[250,250],a}Object(h.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.lastMinScale=this.props.minScale,this.lastMaxScale=this.props.maxScale,this.updatedScaleAt=0},a.componentDidUpdate=function(e){this.props.minScale!==e.minScale&&(this.lastMinScale=this.props.minScale,this.updatedScaleAt=Date.now()),this.props.maxScale!==e.maxScale&&(this.lastMaxScale=this.props.maxScale,this.updatedScaleAt=Date.now()),this.draw()},a.componentWillUnmount=function(){this.animationTimeout&&window.clearTimeout(this.animationTimeout)},a.saveContext=function(e){e&&(this.ctx=e,this.size=[this.ctx.canvas.width,this.ctx.canvas.height],this.tileSize=this.size[0]/this.props.tiles,this.draw())},a.getScale=function(){var e,t=(Date.now()-this.updatedScaleAt)/150;return e=t>1?1:t,[this.lastMinScale+(this.props.minScale-this.lastMinScale)*e,this.lastMaxScale+(this.props.maxScale-this.lastMaxScale)*e]},a.draw=function(){var e=this,t=this.tileSize,a=this.ctx,n=this.size,i=this.props.tiles,r=n[0],l=n[1];a&&(a.clearRect(0,0,r,l),a.fillStyle="black");for(var s=Date.now(),c=this.getScale(),o=0;o<i;o++)for(var m=0;m<i;m++){var p=t,u=(Math.abs(Math.sin(.001*s+50*o+50*m))*(c[1]-c[0])+c[0])*t;a&&a.fillRect(o*p-u/2+t/2,m*p-u/2+t/2,u,u)}this.animationTimeout&&window.clearTimeout(this.animationTimeout),this.animationTimeout=window.setTimeout((function(){window.requestAnimationFrame(e.draw)}),1e3/30)},a.render=function(){return i.a.createElement(v,{className:this.generateClasses("jkl-portal-principle-diamond__"+this.props.type),contextRef:this.saveContext,height:250,width:250})},t}(i.a.Component);k.defaultProps={tiles:7,minScale:.2,maxScale:.8};var j=Object(n.forwardRef)((function(e,t){var a=e.onEnter,i=e.onLeave,r=e.render,l=e.threshold,c=void 0===l?[.7]:l,o=Object(n.useState)(!1),m=o[0],p=o[1],u=Object(n.useRef)(null),d=t||u,f={rootMargin:"0px",threshold:c};return Object(s.c)(d,(function(e){var t=e.some((function(e){return e.isIntersecting}));m&&!t&&i?i(e):m||t||!i?!m&&t&&a&&a(e):i(e),p(t)}),(function(){return console.log("IntersectionObserver not supported")}),f),r(d)}));j.displayName="VisibleDetector";a("r5nU"),a("pxef"),t.default=function(){var e=Object(n.useState)(0),t=e[0],a=e[1],c=function(e){a(e)},o=function(e){e===t&&a(0)},m=Object(n.useMemo)((function(){switch(t){case 2:return.2;case 3:return.1;default:return 1.1}}),[t]),u=Object(n.useMemo)((function(){switch(t){case 2:return.8;case 3:return.3;default:return 1.1}}),[t]),g=Object(s.g)().isSmallDevice;return i.a.createElement(l.b.main,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.35},className:"jkl-portal__main jkl-portal__main--frontpage",id:"innhold"},!g&&i.a.createElement(p,{text:"Jøkul Designsystem",delay:100}),i.a.createElement("div",{className:"jkl-portal-frontpage"},i.a.createElement("section",{className:"jkl-portal-frontpage__section-intro"},i.a.createElement("h2",{className:"jkl-title-small","data-testid":"front-page__tagline"},"Velkommen til Jøkul — design­systemet til Fremtind. Her har vi samlet alt du trenger for å lage løsninger i vår profil."),i.a.createElement("div",{className:"jkl-portal-frontpage__section-intro--content"},i.a.createElement("div",{className:"jkl-portal-frontpage__section-intro--image-container"},i.a.createElement("div",{className:"jkl-portal-frontpage__section-intro--image",style:{backgroundImage:"url("+Object(r.withPrefix)("assets/img/frontpage.jpg")+")"}})),i.a.createElement(f,{vertical:!0},i.a.createElement(d,{heading:"Universell utforming",link:"/komigang/uu"},"Få hjelp til å komme i gang med Universell utforming."),i.a.createElement(d,{heading:"For utviklere",link:"/komigang/utvikling"},"Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul."),i.a.createElement(d,{heading:"For designere",link:"/komigang/design"},"Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul."),i.a.createElement(d,{heading:"Prosessen",link:"/komigang/prosessen"},"Hvordan du kan jobbe med designsystemet.")))),i.a.createElement("section",{className:"jkl-portal-frontpage__section-principles"},i.a.createElement("h2",{className:"jkl-title-small jkl-portal-frontpage__section-principles--heading"},"Hovedprinsipper du kan tenke på for å designe en løsning til vår profil på best mulig måte:"),i.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__diamond-container"},i.a.createElement("div",{className:"jkl-portal-principle-diamond"},i.a.createElement(k,{principleState:t,minScale:m,maxScale:u,type:"diamond"}),i.a.createElement(k,{principleState:t,minScale:m,maxScale:u,type:"shadow"}))),i.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},i.a.createElement(j,{onEnter:function(){return c(1)},onLeave:function(){return o(1)},render:function(e){return i.a.createElement("div",{ref:e,className:"jkl-portal-frontpage__section-principles__principle"},i.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},i.a.createElement("h1",{className:"jkl-title-large","data-testid":"title-elevasjon"},"Elevasjon"),i.a.createElement("p",{className:"jkl-lead"},"Vi løfter det som er viktig og skaper et naturlig informasjonshierarki.")))}}),i.a.createElement(j,{onEnter:function(){return c(2)},onLeave:function(){return o(2)},render:function(e){return i.a.createElement("div",{ref:e,className:"jkl-portal-frontpage__section-principles__principle"},i.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},i.a.createElement("h1",{className:"jkl-title-large","data-testid":"title-bevegelse"},"Bevegelse"),i.a.createElement("p",{className:"jkl-lead"},"Vi skal utforske, se fremover og være tilpasningsdyktige.")))}}),i.a.createElement(j,{onEnter:function(){return c(3)},onLeave:function(){return o(3)},render:function(e){return i.a.createElement("div",{ref:e,className:"jkl-portal-frontpage__section-principles__principle"},i.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},i.a.createElement("h1",{className:"jkl-title-large","data-testid":"title-klarhet"},"Klarhet"),i.a.createElement("p",{className:"jkl-lead"},"Vi skal fremstå som ærlig og klar, med en tydelig og varm stemme")))}}))),i.a.createElement("section",{className:"jkl-portal-frontpage__section-contribute"},i.a.createElement("div",{className:"jkl-portal-frontpage__section--wrapper"},i.a.createElement("h2",{className:"jkl-title-small"},"Bidra"),i.a.createElement("p",{className:"jkl-lead"},"Jøkul er et levende designsystem. For at vi skal holde det relevant, er det viktig at alle som bruker designsystemet og merkevareprofilen vår hjelper til med å forbedre det vi har. Send oss en mail eller bidra i GitHub."),i.a.createElement("p",{className:"jkl-lead"},"Finn oss i Teams kanalen “Support Designsystem” eller kom på åpent forum hver tirsdag 14 til 14.30. Her informerer vi om hva som skjer og tar imot innspill.")))))}},YIew:function(e,t,a){},"lzD/":function(e,t,a){},mGGU:function(e,t,a){},pxef:function(e,t,a){},r5nU:function(e,t,a){},tfWc:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ac810b246463572f6fbf.js.map