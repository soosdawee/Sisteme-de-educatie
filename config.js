var config = {
    style: 'mapbox://styles/soosdavid/cloly8xva007201nza6ns2x9t',
    accessToken: 'pk.eyJ1Ijoic29vc2RhdmlkIiwiYSI6ImNsb2x5c2dxczJtcHUya21lYjgxbGI5eGEifQ.5kSh3TZSAzYZMRIg_NDFCA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:sans-serif; background-color: #ffffff; padding: 0.5vh; border-radius: 10px; color:#000000; font-size:1.2rem" >Educația</span>',
    subtitle: '<span style=" font-family: playfair display, serif; color:#ffffff; font-size:2.3rem" >INTERACTIV | Ingredientele campionilor în educație. Cum ajunge un sistem școlar să producă performanță</span>',
    byline: 'Dávid Soós<p> <img src="./scroll.png"> </p> <p> scroll </p>',
    footer: '<p style="margin-top:1px; margin-bottom:1px;"><b>15 noiembrie 2023 </b></p> <p style="margin-top:1px; margin-bottom:1px;"><b>Sursa datelor:</b> European Commission/EACEA/Eurydice, Estonian Education Information System, OECD <br> Material editat de: <a href="https://panorama.ro/author/andrei-luca-popescu/" target="_blank">Andrei Luca Popescu</a> </p>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '.png',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Educația e privită în toată lumea drept una dintre pietrele de temelie ale unei societăți, prin care se formează calitățile viitoare ale minților, culturilor și, până la urmă, națiunilor. Cu toții trecem, mai mult sau mai puțin, printr-un sistem de educație formală, începând cu vârste fragede. Cei rămași pe dinafară sunt de obicei oamenii cei mai vulnerabili și defavorizați din societățile în care trăim.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intro2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Dincolo de diferențele de la cer la pământ între metodele și banii pe care fiecare țară le pune la bătaie, pentru a-și asigura un sistem de educație cât mai performant, apare însă o mare întrebare. De ce copiii din unele țări au, la nivel de medie, rezultate mai bune decât alții la învățătură, când vine vorba de teste standardizate, la fel pentru toți? ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intro3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Panorama încearcă să caute explicații în tradiția și excepțiile unor sisteme performante de educație din lume, dar și în statutul profesorilor într-o societate, care poate determina într-o mare măsură calitatea lor profesională: cât sunt plătiți și care este rolul lor, așa cum îl percep semenii lor.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'PISA1',
            alignment: 'center',
            hidden: false,
            title: '<h3>Cum funcționează testele PISA și de ce chinezii sunt campioni</h3>',
            image: '',
            description: 'Testele PISA au ajuns principala metodă de a raporta și măsura, la nivel global, tendințele și progresele legate de învățământ și de a analiza cum se îmbină aptitudinile elevilor cu factori demografici, sociali, economici și educaționali.',
            location: {
                center: [2.352222, 48.856613],
                zoom: 8,
                pitch: 20,
                bearing: 10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'PISA2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<a target="_blank" href="https://www.oecd.org/about/">Organizația pentru Cooperare și Dezvoltare Economică</a> stă de mai bine de 20 de ani în spatele testării la nivel global a elevilor în vârstă de 15 ani, aflați în clasa a IX-a, a X-a sau a XI-a, după caz. La aceste teste participă elevii din statele membre OCDE, statele în curs de aderare <a target="_blank" href="https://www.mae.ro/node/1481">(aici se încadrează și România)</a> și state partenere. În total, 79 de țări.',
            location: {
                center: [2.269630, 48.861190],
                zoom: 15,
                pitch: 20,
                bearing: 10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: 'Diagrama1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/15635075/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:500px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15635075/?utm_source=embed&utm_campaign=visualisation/15635075" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [2.269630, 48.861190],
                zoom: 18,
                pitch: 20,
                bearing: 10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Romania1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'România a obținut, la testele din 2018, cele mai slabe rezultate ale sale, de când ia parte la PISA, și se află undeva sub mijlocul clasamentului general, la grupa țărilor încadrate la nivelul 2 din 4, în funcție de rezultate.',
            location: {
                center: [24.966761, 45.943161],
                zoom: 6,
                pitch: 10,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'PISA3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Testările PISA au loc o dată la 3 ani și au început în anul 2000, iar cea mai recentă ediție, cu datele procesate și publicate, este cea din 2018. <a target="_blank" href="https://www.oecd.org/pisa/data/2018database/">Chestionarele</a> se adresează atât copiilor, cât și celor care le asigură educația (părinți, profesori, directori) și culeg date despre abilitatea lor de a citi, a înțelege, a interpreta sau a rezolva probleme, dar și despre bunăstarea sau aspirațiile lor în carieră.',
            location: {
                center: [25.485830, 42.733883],
                zoom: 3,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'PISA4',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'În anul 2018, aproximativ <span class="highlight">600.000</span> de elevi au participat la PISA, din rezultatele cărora au fost deduse informații legate de situația a <span class="highlight">32 milioane</span> de elevi de 15 ani.',
            location: {
                center: [25.485830, 42.733883],
                zoom: 3,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'China',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Cele mai bune rezultate le-au obținut copiii din China. O parte din explicație ține și de tradiția chineză. În timpul dinastiei Han (206 î.e.n – 220 e.n.) a Chinei Imperiale, <a target="_blank" href="https://www.britannica.com/topic/Chinese-civil-service">a fost introdusă testarea standardizată</a>, pentru a determina aptitudinea candidaților la funcții publice, pentru prima oară în lume. Două milenii mai târziu, provinciile chineze Beijing, Shanghai, Jiangsu și Zhejiang se află pe primul loc al clasamentului PISA. De altfel, următoarele trei state clasate sunt Singapore, Macao și Hong Kong, toate din Asia Orientală.',
            location: {
                center: [113.419724, 22.869940],
                zoom: 5,
                pitch: 50,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'China2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Succesul acestor state și regiuni poate fi datorat, în mare parte, atitudinii dedicate față de tot ceea ce înseamnă lectură. În 2015, teritoriile chineze raportau în chestionarul de bunăstare că <span class="highlight">40% din elevii de 15 ani studiau minimum 60 de ore pe săptămână</span>.',
            location: {
                center: [113.419724, 22.869940],
                zoom: 5,
                pitch: 50,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Asia de est1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description:' <a target="_blank" href="https://documents1.worldbank.org/curated/en/876861593415668827/pdf/East-Asia-and-Pacific-Regional-Brief-Programme-for-International-Student-Assessment-PISA-2018.pdf">Datele din Asia de Est ne arată</a> că cel mai influent factor în regiune este statutul socio-economic. Cei avantajați din acest punct de vedere, au în medie, un scor cu <span class="highlight">75 de puncte</span> mai mare la proba de Citire. Aproape jumătate dintre elevii chinezi se încadrează în Nivelul 5 sau 6 la cel puțin o probă. Aprope niciun elev nu este lăsat în urmă. Doar 1,1% din copii de 15 ani nu ating nivelul de competență minimă la toate cele trei probe.',
            location: {
                center: [120.960518, 23.697809],
                zoom: 3,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Asia de est2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Proporția de elevi care rămân în urmă cu evoluția abilităților în școală are o importanță majoră pentru tabloul general al educației dintr-o țară. În harta de mai jos puteți compara situația din câteva țări care participă la testele PISA. În România, procentul elevilor de 15 ani rămași în urmă cu citirea, matematica și științele se ridica la 30%.',
            location: {
                center: [120.960518, 23.697809],
                zoom: 3,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Diagram2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/15626138/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:450px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15626138/?utm_source=embed&utm_campaign=visualisation/15626138" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div> ',
            location: {
                center: [116.407394, 14.418530],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Korea',
            alignment: 'right',
            hidden: false,
            title: '<h3>Exemplul Coreei de Sud: Programul Semestrului de Învățare Liberă</h3>',
            image: '',
            description:'În ciuda faptului că sistemul său de educație aduce rezultate bune, Coreea de Sud a decis să piloteze un proiect inovativ, numit <a target="_blank" href="https://www.oecd.org/education/career-readiness/Example%20of%20Practice,%20Korea,%20Free%20Semester%20Programmepdf.pdf">Programul Semestrului de Învățare Liberă</a>. Elevii coreeni au putut să petreacă o jumătate de an fără grija testelor, învățând numai 21 de ore pe săptămână, în loc de 33, în modul obișnuit. În timpul rămas, puteau să aleagă dintre activități prin care învățau pe bază de muncă, inclusiv implicarea în comunitatea locală, programe sportive și artistice. Singurul criteriu era ca școala să accepte. Inițiativa a fost un succes atât de mare, încât a fost adoptată la nivel național, în majoritatea gimnaziilor.',
            location: {
                center: [127.814529, 35.965031],
                zoom: 5,
                pitch: 10,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Finlanda',
            alignment: 'left',
            hidden: false,
            title: '<h3>„Asiaticii” educației din Europa: starul e Finlanda, dar Estonia o bate</h3>',
            image: '',
            description: 'Dacă ceea ce se întâmplă în sistemul de educație performant din Coreea de Sud poate părea ieșit din comun pentru un european, nu este cazul și pentru finlandezi. Acolo, așa arată un semestru oarecare pentru elevi. Școlile nu folosesc aproape deloc testele ca unelte pentru a măsura competențele elevilor. Atitudinea relaxată și orientată mai mult spre curiozitate și echilibru între studii și timp liber dă rezultate bune, atestate și de datele PISA.  <span class="highlight">Numai 4,1% din elevii de 15 ani din Finlanda petrec mai mult de 60 de ore pe săptămână învățând.</span>',
            location: {
                center: [23.748152, 60.924110],
                zoom: 5,
                pitch: 30,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Chiar și examenul care, teoretic, este corespondent al Bacalaureatului la noi este neobișnuit. Acesta este ținut în fiecare an de două ori, în primăvară și în toamnă, iar elevii pot să încerce oricare probă în trei perioade consecutive de examinare. Numai limba maternă este obligatorie, restul – minimum 4 probe –  trebuie alese din cel puțin 3 grupuri de materii: matematică, a doua limbă oficială a țării, limbi străine, științe umaniste sau științe ale naturii. Recordul pentru cele mai multe probe reușite cu calificativul maxim (laudatur) este 12, obținut în anul 2016.',
            location: {
                center: [23.748152, 60.924110],
                zoom: 5,
                pitch: 30,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Estonia1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Din Europa, numai rezultatele Estoniei la PISA le întrec pe ale Finlandei. Elevii estoni au cele mai bune rezultate din statele membre OCDE. Tot ei sunt și cei mai optimiști în privința progresului prin educație: 77% cred că <span class="highlight">inteligența unei persoane poate fi modificată</span>.',
            location: {
                center: [24.753574, 59.436962],
                zoom: 10,
                pitch: 30,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Estonia2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Succesul educației din Estonia are o posibilă explicație în autonomia școlilor de a-și stabili singure curriculumul și nu numai. Directorii sunt responsabili pentru alocarea bugetului, dar și pentru angajarea, evaluarea și concedierea profesorilor. Competiția între școlile municipale (cele mai multe, care sunt finanțate de autoritățile locale, via bugetul de stat), pentru a atrage fonduri, este un alt factor important. Acestea primesc finanțare pe baza numărului de elevi, astfel că sunt interesate să ofere educație de cea mai înaltă calitate și să aibă clase cât mai pline. Ținând cont și de <a target="_blank" href="https://www.oecd.org/about/">scăderea de 15% a populației estone</a>, în ultimii 30 de ani, sistemul de educație din statul baltic iese în evidență prin competitivitate și prin faptul că răsplătește inovația și condamnă indiferența.',
            location: {
                center: [24.741340, 59.430190],
                zoom: 14,
                pitch: 20,
                bearing: 10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Diagram3',
            alignment: 'center',
            hidden: false,
            title: '<h3>Numărul elevilor în școlile din Estonia<\h3>',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/14871050/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:400px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/14871050/?utm_source=embed&utm_campaign=visualisation/14871050" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [24.753574, 59.436962],
                zoom: 10,
                pitch: 30,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Profi1',
            alignment: 'center',
            hidden: false,
            title: '<h3>Cum îi privim pe profesori în societate și cum îi plătim</h3>',
            image: '',
            description: 'Ca în orice sistem din care vrei să obții rezultate de calitate, resursa umană este extrem de importantă. Educația nu face excepție. Un prim pas poate fi modul în care ne raportăm, ca societate, la rolul dascălilor: sunt ei mai degrabă asistenți sociali, asistenți medicali, bibliotecari, funcționari sau medici? Această întrebare a fost pusă de <a target="_blank" href="https://www.varkeyfoundation.org/media/4867/gts-index-13-11-2018.pdf">The Global Teacher Status Index 2018</a>, în 35 de țări (România nu a participat la studiu), pentru a afla atitudinea oamenilor față de profesori.',             
            location: {
                center: [46.825038, 103.849973],
                zoom: 4,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Profi2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'În China, Malaysia și Rusia, oamenii percep munca unui profesor ca fiind mai asemănătoare cu munca unui medic. În peste jumătate din statele studiate, oamenii au optat pentru asemănarea cu rolul de asistent social. Din răspunsuri, reiese nu numai ce poziție ocupă dascălii în ierarhiile sociale, ci și părerea oamenilor în legătură cu salarizarea acestora. Cercetarea ajunge la concluzia că remunerația cadrelor didactice, respectul față de meserie în societate și rezultatele PISA se află în strânsă legătură.',
            location: {
                center: [46.825038, 103.849973],
                zoom: 4,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Diagram4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/15626431/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:500px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/15626431/?utm_source=embed&utm_campaign=visualisation/15626431" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [15.9622315, 45.8426414],
                zoom: 5,
                pitch: 10,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Pay1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Progresul este forța care îndeamnă orice om să fie motivat, să continue un obicei sau să capete avânt într-o și mai mare măsură. Niciun antreprenor nu ar continua să-și construiască afacerea, dacă nu ar avea în minte posibilitatea progresului. Niciun sportiv nu ar da tot ce poate, dacă nu ar spera din tot sufletul că își va atinge scopurile de performanță viitoare.',             
            location: {
                center: [15.9622315, 45.8426414],
                zoom: 5,
                pitch: 20,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Pay2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Despre profesori, se spune adesea că ar trebui să facă această meserie din vocație și pasiune, nu pentru bani. Cum reușește vocația să stârnească sau nu un sentiment de împlinire diferă de la om la om. Totuși, nu mulți dintre noi își permit să ignore complet latura financiară a meseriei lor. În mod special, dacă un job în acel domeniu implică mai mulți ani de studiu. Profesorii nu sunt cu nimic mai prejos sau mai diferiți, din aceste puncte de vedere. În graficul de mai jos, vedem cum progresează financiar, în timp, profesorii din diverse țări. ',
            location: {
                center: [15.9622315, 45.8426414],
                zoom: 5,
                pitch: 20,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Romania2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'România nu stă cel mai rău, însă progresul salarial, în medie, este minor. După 10 ani de meserie, un profesor câștigă în medie cu 19% mai mult decât la început. După încă 5 ani de la acel moment, adică la 15 ani de la debut, progresul salarial mai crește cu încă doar 8%.',
            location: {
                center: [24.966761, 45.943161],
                zoom: 6,
                pitch: 10,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Diagram5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/14847763/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="yes" style="width:100%;height:450px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/14847763/?utm_source=embed&utm_campaign=visualisation/14847763" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [15.9622315, 45.8426414],
                zoom: 5,
                pitch: 20,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Ending',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Cu atâtea variabile aflate în joc, pentru a determina performanța unui sistem de educație, România mai are încă mult de lucru, de la modul în care își formează elevii în școli, până la modul în care își tratează, societal și financiar, profesorii. Exemplele bune există peste tot în lume, trebuie doar găsită calea către ele.',
            location: {
                center: [24.966761, 45.943161],
                zoom: 6,
                pitch: 10,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        
/*
        {
            id: '2',
            alignment: 'center',
            hidden: false,
            title: 'Date despre testele PISA',
            image: '',
            description: 'Vietnam este fruntas la tyestele PISA <iframe src="https://flo.uri.sh/visualisation/14532444/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/14532444/?utm_source=embed&utm_campaign=visualisation/14532444" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [108.277199, 14.058324],
                zoom: 2,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: 'Date despre testele PISA',
            image: '',
            description: 'Vietnam este fruntas la tyestele PISA <iframe src="https://flo.uri.sh/visualisation/14532850/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder=0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/14532850/?utm_source=embed&utm_campaign=visualisation/14532850" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [23.589920, 46.770920],
                zoom: 7,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: 'Date despre testele PISA',
            image: '',
            description: '<iframe title="Evolutia investitiei in educatie" aria-label="Interactive area chart" id="datawrapper-chart-uh9Sa" src="https://datawrapper.dwcdn.net/uh9Sa/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="400" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>',
            location: {
                center: [19.040236, 47.497913],
                zoom: 7,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/



    ]
};
