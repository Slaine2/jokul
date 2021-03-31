(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9833],{9100:function(e,r,n){"use strict";n.r(r),n.d(r,{voiceOverKeyColumns:function(){return m},getStartedRows:function(){return o},navigationRows:function(){return i},tableNavigationRows:function(){return d},_frontmatter:function(){return k},default:function(){return v}});var t,l=n(120),s=(n(7378),n(1368)),a=n(2803),m=["Funksjon","Taster"],o=[["Start/stopp VoiceOver","Command + F5"],["Global VoiceOver kombinasjon – Heretter kalt VO","Control + Option"],["Åpne Rotor","VO + U"],["Innstillinger (lydnivå, hastighet, stemme, etc.)","VO + Command + Høyre/Venstre piltast"]],i=[["Neste element","VO + Høyre piltast"],["Forrige element","VO + Venstre piltast"],["Navigere i en tabell","VO + Piltaster"],["Neste fokuserbare element","Tab / Shift + Tab"],["Neste lenke","VO + L"],["Neste overskrift","VO + H"],["Aktiver lenke eller skjemaelement","VO + Space"]],d=[["Lese kolonneoverskrift","VO + C"],["Les hel rad","VO + R"],["Les hel kolonne","VO + R + C"]],k={},p=(t="Table",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),u={voiceOverKeyColumns:m,navigationRows:i,tableNavigationRows:d,_frontmatter:k},g=a.Z;function v(e){var r=e.components,n=(0,l.Z)(e,["components"]);return(0,s.mdx)(g,Object.assign({},u,n,{components:r,mdxType:"MDXLayout"}),(0,s.mdx)("h1",null,"Skjermleser"),(0,s.mdx)("p",null,"Vi anbefaler å sjekke én skjermleser jenvlig under utvikling og en større oppsamling/testfest av og til hvor man tester flere. Dette fordi brukermassen blant skjermlesere har stor spredning, hvorav de tre mest brukte er NVDA, JAWS og VoiceOver."),(0,s.mdx)("p",null,"Det er mange ulike skjermlesere hvor alle fungerer noe annerledes. Eksempler på populære alternativer er ",(0,s.mdx)("a",{parentName:"p",href:"https://www.nvaccess.org/"},"NVDA"),", ",(0,s.mdx)("a",{parentName:"p",href:"https://www.freedomscientific.com/products/software/jaws/"},"JAWS"),", ",(0,s.mdx)("a",{parentName:"p",href:"https://help.gnome.org/users/orca/stable/"},"ORCA"),", TalkBack på Android og VoiceOver på iphone. Husk at vi har de samme utfordringene med ulike skjermlesere som vi har med ulike nettlesere, selvom de baserer seg på samme standard, så vil det kunne være forskjeller på hvordan ulike skjermlesere forstår koden. Så skal du være helt sikker på kvalitet ved skjermleser bruk må man teste i ulike system."),(0,s.mdx)("p",null,"Jøkul-portalen er alltid voksende og vi inviterer alle til å bidra. Har du erfaring med skjermlesere på andre platformer og mulighet til å lage en tilsvarende guide så settes det stor pris på."),(0,s.mdx)("h2",null,"Skjermleser macOS"),(0,s.mdx)("p",null,"Denne guiden er skrevet fra en Mac og vil derfor omfatte bruk av VoiceOver. Av samme årsak vil snarveiene være mac-spesifikke."),(0,s.mdx)("h3",null,"Skjermleser i bruk"),(0,s.mdx)("p",null,"For VoiceOver på Mac gjelder følgende snarveier:"),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},(0,s.mdx)("inlineCode",{parentName:"em"},"VO")," tilsvarer som standard ",(0,s.mdx)("inlineCode",{parentName:"em"},"control + option"),".")),(0,s.mdx)("h4",null,"Komme i gang"),(0,s.mdx)(p,{columns:m,rows:o,mdxType:"Table"}),(0,s.mdx)("h4",null,"Rotor"),(0,s.mdx)("p",null,"En av de viktigste funksjonene til en skjermleser er å gi et raskt overblikk over sidens innhold slik at man kan hoppe til det relevante innholdet uten å måtte lese gjennom hele sidens innhold."),(0,s.mdx)("p",null,"Bruk ",(0,s.mdx)("inlineCode",{parentName:"p"},"VO + U")," for å åpne rotoren. Bruk deretter ",(0,s.mdx)("inlineCode",{parentName:"p"},"Venstre/høyre piltast")," for å bytte mellom type element du ser etter, så ",(0,s.mdx)("inlineCode",{parentName:"p"},"Opp/ned piltast")," for å velge et enkelt element etterfulgt av ",(0,s.mdx)("inlineCode",{parentName:"p"},"Enter"),". ",(0,s.mdx)("inlineCode",{parentName:"p"},"Escape")," lukker rotoren."),(0,s.mdx)("h4",null,"Navigasjon"),(0,s.mdx)(p,{columns:m,rows:i,mdxType:"Table"}),(0,s.mdx)("h4",null,"Tabell"),(0,s.mdx)(p,{columns:m,rows:d,mdxType:"Table"}),(0,s.mdx)("p",null,"Hentet fra Deque university. For enda flere snarveier se deres guide om ",(0,s.mdx)("a",{parentName:"p",href:"https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts"},"VoiceOver keyboard shortcuts"),"."),(0,s.mdx)("h3",null,"Usynlige elementer"),(0,s.mdx)("p",null,"Test at elementer som skal være skjulte også er skjult for skjermleser. Et eksempel kan være en modal som ligger gjemt. Ved å navigere seg gjennom hele tjenesten med skjermleser vil dette oppdages."),(0,s.mdx)("h3",null,"Alt-attributt på bilder"),(0,s.mdx)("p",null,"Bruk navigasjonstastene beskrevet over. Marker gjerne tekst rett før bildet for å bruke det som en snarvei slik at du kun trenger å bruke VO + Høyre for å komme til neste element."),(0,s.mdx)("h3",null,"Dekorativt innhold"),(0,s.mdx)("p",null,"Dekorativt innhold skal ikke leses opp av skjermleser."),(0,s.mdx)("h3",null,"Ikoner"),(0,s.mdx)("p",null,"Ikoner skal hvis mulig ha en alt-attributt, men noen ikoner blir satt i CSS slik som kulepunktene i ",(0,s.mdx)("a",{parentName:"p",href:"https://jokul.fremtind.no/komponenter/list#lister-med-ikon"},"Jøkuls liste med ikoner"),". Test at ikonet gir mening med skjermleser uavhengig av om det har en alt-tekst."),(0,s.mdx)("h3",null,"Skjema"),(0,s.mdx)("p",null,"Et skjema er satt sammen av mange elementer. Alle inndataelementer skal ha ledetekst. Test at det er en tydelig sammenheng mellom ledeteksten og skjemaelementet."),(0,s.mdx)("p",null,"Test at alle knapper leses opp riktig."),(0,s.mdx)("h3",null,"Skjemavalidering"),(0,s.mdx)("p",null,'Ved validering i skjema skal bruker bli gjort oppmerksom på at feilmelding har dukket opp. Skjermleseren skal lese opp denne når den er synlig på skjermen. Test ved å fylle ut noe du vet gir feilmelding og trykk på "Send inn"-knappen eller en ekvivalens mens skjermleser er på.'),(0,s.mdx)("h3",null,"Lenker"),(0,s.mdx)("p",null,"Naviger deg mellom lenker med VO + Command + L (fremover) eller VO + Shift + Command + L (bakover)."),(0,s.mdx)("h3",null,"Lister"),(0,s.mdx)("p",null,"Naviger deg mellom lister med VO + Command + X (fremover) eller VO + Shift + Command + X (bakover). Bruk deretter VO + Venstre/høyre piltast for å velge forrige/neste element."),(0,s.mdx)("h3",null,"Tabell"),(0,s.mdx)("p",null,"Naviger deg mellom tabeller med VO + Command + T (fremover) eller VO + Shift + Command + T (bakover). Bruk deretter VO + Piltaster for å bevege deg i tabellen."),(0,s.mdx)("p",null,"Ytterligere snarveier for tabellnavigering finner du i tabellen på toppen av denne siden."),(0,s.mdx)("h3",null,"Modal/Dialog"),(0,s.mdx)("p",null,"Test at skjermleser får med seg at det dukker opp en modal/dialog. Bruker skal ikke måtte gjette seg frem til at noe har tatt over fokus på skjermen."),(0,s.mdx)("p",null,"Test at skjermleser leser opp elementene i modalen eller dialogen slik at det er tydelig hvordan man kommer seg ut."),(0,s.mdx)("h3",null,"Tidsbegrensning"),(0,s.mdx)("p",null,"Hvis tjenesten har en tidsbegrensning, ofte som følge av at man blir automatisk logget ut etter x antall minutter så må det testes at skjermleser får med seg nedtellingen."),(0,s.mdx)("h3",null,"Overskrifter og struktur"),(0,s.mdx)("p",null,"Åpne rotoren til VoiceOver ved å bruke VO + U. Naviger deg så mellom ulike typer elementer med piltastene og test at alle overskrifter og strukturelle elementer på siden blir lest opp."),(0,s.mdx)("p",null,"Med denne rotoren åpen er det en ypperlig anledning for å sjekke"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"at overskriftsnivåer stemmer")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"at landemerkene har et logisk oppsett")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"at lenketekstene gir mening for seg selv"))))}v.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-universell-utforming-screen-reader-mdx-f8a2c4783a9308382848.js.map