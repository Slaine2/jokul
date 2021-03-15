(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[502],{6553:function(e,r,n){"use strict";n.r(r),n.d(r,{_frontmatter:function(){return s},default:function(){return m}});var t=n(120),a=(n(7378),n(1368)),l=n(2803),s=(n(3512),{}),i={_frontmatter:s},o=l.Z;function m(e){var r=e.components,n=(0,t.Z)(e,["components"]);return(0,a.mdx)(o,Object.assign({},i,n,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("h1",null,"Generell testing av universell utforming"),(0,a.mdx)("p",null,"Husk også å se på ",(0,a.mdx)("a",{parentName:"p",href:"/universell-utforming/skjermleser"},"skjermleser-")," og ",(0,a.mdx)("a",{parentName:"p",href:"/universell-utforming/tastatur"},"tastaturnavigasjonsguiden")),(0,a.mdx)("h2",null,"Tekststørrelse"),(0,a.mdx)("p",null,"Noen er avhengig av å endre tekststørrelsen på et nettsted for å kunne bruke tjenesten. Test ved å endre størrelse i nettleser."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"I chrome: Gå til ",(0,a.mdx)("inlineCode",{parentName:"li"},"chrome://settings/")," og under utseende kan du endre skriftstørrelse"),(0,a.mdx)("li",{parentName:"ul"},"I Firefox: I hamburgermenyen, velg ",(0,a.mdx)("inlineCode",{parentName:"li"},"Preferences")," under ",(0,a.mdx)("inlineCode",{parentName:"li"},"Language and Appearance")," kan du sette størrelse, standard er 16.")),(0,a.mdx)("h2",null,"Farger og kontrast"),(0,a.mdx)("p",null,"For hvordan omfattende teste farge, kontrast, dark mode, inverted mode, high contrast mode og andre lignende moduser, se ",(0,a.mdx)("a",{parentName:"p",href:"https://www.a11yproject.com/posts/2020-01-23-operating-system-and-browser-accessibility-display-modes/"},"a11yproject sin guide om temaet"),"."),(0,a.mdx)("p",null,"Kan du fortsatt se elementer som for eksempel lenker dersom alt er gråskala? Husk at farger aldri skal være eneste virkemiddel for å formidle informasjon."),(0,a.mdx)("h2",null,"Zoom i nettleser"),(0,a.mdx)("p",null,"Forstørr nettsiden 200%. Sjekk at innhold fortsatt er lesbart og at innhold ikke overlapper."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Normalt gir ",(0,a.mdx)("inlineCode",{parentName:"li"},"ctrl + +")," større, ",(0,a.mdx)("inlineCode",{parentName:"li"},"ctrl + -")," gir mindre zoom, ",(0,a.mdx)("inlineCode",{parentName:"li"},"ctrl + scrollhjul")," også. For å komme tilbake til normalen kan man klikke på indikatoren i høyre hjørnet inne i addressefeltet eller ",(0,a.mdx)("inlineCode",{parentName:"li"},"ctrl + 0"),"."),(0,a.mdx)("li",{parentName:"ul"},"I Firefox kan man ",(0,a.mdx)("inlineCode",{parentName:"li"},"Preferences\\Language and Appearance")," sette default zoom og tekstzoom verdier")),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=S1j6CYT3kWA&feature=youtu.be"},"Sugerørstesten (youtube)")," er en test som kan brukes for å simulere hvordan det er å bruke tjenesten for en person som benytter seg av zoom større enn 200%."),(0,a.mdx)("h2",null,"Mobil/Touch"),(0,a.mdx)("p",null,"Testing av tastaturnavigasjon dekker i stor grad testing av mobil med hjelpeverktøy. Istedenfor ",(0,a.mdx)("inlineCode",{parentName:"p"},"tab")," bruker mobil swipe, og istedenfor ",(0,a.mdx)("inlineCode",{parentName:"p"},"space/enter")," bruker mobil trykk."),(0,a.mdx)("p",null,"Test om nettsiden kan bli rotert i alle retninger."),(0,a.mdx)("p",null,"Test at elementer som hamburgermenyer, knapper, lenker og andre touch-elementer er mulig å bruke med både små og store fingre samt pekepenn."),(0,a.mdx)("p",null,"Test at det er nok luft slik at man alltid har et område å ta tak i for å scrolle siden. Det er viktig at bruker ikke blir låst fast på en skjerm hvor man ikke kan scrolle videre."),(0,a.mdx)("h2",null,"Redusert bevegelse"),(0,a.mdx)("p",null,"De fleste opperativ system lar nå brukeren sette et ønske om redusert bevegelse. Dette kan være ønskelig av mange grunner, feks vertigo, ADHD eller epilepsi. Denne setter er også tilgjengelig for oss igjennom de aller fleste nettlesere som ",(0,a.mdx)("inlineCode",{parentName:"p"},"prefers-reduced-motion"),". Siden bevegelse er et viktig prinsipp for Jøkul, er det viktig at det ikke går på bekostning av brukeropplevesen hos de som ønsker redusert bevegelse. Jøkul tilbyr en ",(0,a.mdx)("a",{parentName:"p",href:"/komponenter/reducedmotion"},"React Hook")," for dette. Små, brukerinitsierte animasjoner, som feks en animasjon ved klikk på en checkbox er helt greit, men man skal unngå store bevegelser, bevegelser som ikke er brukerinitsiert og alt av paralaxeffekter."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"I Windows 10: Settings > Ease of Access > Display > Show animations in Windows"),(0,a.mdx)("li",{parentName:"ul"},"I macOS: System Preferences > Accessibility > Display > Reduce motion"),(0,a.mdx)("li",{parentName:"ul"},"I iOS: Settings > General > Accessibility > Reduce Motion"),(0,a.mdx)("li",{parentName:"ul"},"I Android 9+: Settings > Accessibility > Remove animations"),(0,a.mdx)("li",{parentName:"ul"},"I GTK/GNOME: GNOME Tweaks > General > Animation skrudd av"),(0,a.mdx)("li",{parentName:"ul"},"I Plasma/KDE: System Settings > Workspace Behavior -> General Behavior > “Animation speed” sett til “Instant”"),(0,a.mdx)("li",{parentName:"ul"},"I Firefox about:config: Sett ui.prefersReducedMotion til 1")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-universell-utforming-test-guide-uu-mdx-70e737e3bc637dcae9d8.js.map