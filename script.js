/* ============================================================
   DATA — transcriere integrală a regulament.txt
   ============================================================ */
const DATA = [
{
  id:'general', n:'1', icon:'📋', title:'Regulament General',
  intro:'Regulile de bază valabile pentru toți jucătorii: acordul de regulament, termenii de roleplay (PK, CK, MG, RDM), comportamentul OOC, abuzurile, condusul, joburile, acțiunile ilegale, tichetele, activitatea și ziarul.',
  chapters:[

  { code:'CAP. 1', title:'Introducere', articles:[
    { c:'1.1', t:'Acord regulament', ty:'obligatie', d:[
      'Prin conectarea la server, sunteți direct de acord să respectați regulile serverului. Sunteți obligat să citiți și să respectați regulile, în caz contrar riscați sancțiuni pentru fiecare încălcare.'
    ]},
    { c:'1.2', t:'Interpretare regulament', ty:'interzis', d:[
      'Interpretarea oricărei reguli este interzisă! Nu puteți interpreta nicio regulă după bunul plac pentru a vă oferi avantaje într-un RolePlay.',
      'Pentru orice neclaritate pe parte de regulament contactați un membru staff. În situațiile de ticket, identificarea încălcării de regulament se face de către membrul staff care a preluat ticket-ul și nu de către jucători.'
    ]},
    { c:'1.3', t:'Condiții pentru a putea juca pe server', ty:'obligatie', b:[
      { l:'Condiții', k:'note', i:[
        'Nu se permite RolePlay de sex opus față de sexul real al jucătorului.',
        'Aveți nevoie de un microfon funcțional pentru a comunica cu restul jucătorilor.',
        'Numele RolePlay — folosirea numelor de persoane celebre, respectiv cu tentă și/sau intenția de a face troll, sunt interzise. Numele pot fi cele reale sau inventate de voi și care pot fi întâlnite în viața de zi cu zi.'
      ]},
      { l:'Exemple de nume interzise', k:'forbid', i:['John Cena', 'Ion MilS*gi', 'CapDeP*la'] },
      { l:'Exemple de nume permise', k:'allow', i:['Andrei Popa', 'Terente Ciobanu', 'Sorin Petreanu'] }
    ], s:['Neconformarea sau necooperarea cu administrația serverului pentru a respecta orice parametru de mai sus va duce la banarea contului dumneavoastră permanent, având posibilitatea să vă faceți ulterior alt cont.']},
    { c:'1.4', t:'Politică de comportament și de excludere a jucătorilor (ZT)', ty:'interzis', d:[
      'Echipa Administrativă își rezervă dreptul de a elimina permanent jucătorii de pe server care strică experiența de joc pentru alți utilizatori (Toleranță Zero — ZT). Echipa evaluează atitudinea, comportamentul, toxicitatea și alte aspecte relevante ale jucătorilor.'
    ], s:['Jucătorii care acumulează foarte multe sancțiuni într-o perioadă scurtă de timp, care au un comportament toxic sau care strică experiența de joc pot fi sancționați cu ban permanent fără drept de plată.']},
    { c:'1.5', t:'Obligativitatea deținerii unei filmări AUDIO-VIDEO', ty:'obligatie', d:[
      'Toți jucătorii au obligația de a înregistra constant gameplay-ul sub formă de filmare AUDIO-VIDEO.'
    ], b:[
      { l:'Reguli specifice', k:'note', i:[
        'Filmarea trebuie să includă atât imaginea (video), cât și sunetul (audio).',
        'Înregistrările trebuie păstrate minim 72 de ore de la momentul sesiunii de joc.',
        'Filmarea trebuie să fie de o calitate rezonabilă (fără lag excesiv, sunet clar).',
        'Este interzisă modificarea, tăierea sau alterarea înregistrării.'
      ]}
    ], s:['Lipsa unei filmări valide poate duce la anularea dovezilor proprii și sancțiuni. Refuzul de a furniza filmarea duce la imposibilitatea de a-ți susține nevinovăția.']},
    { c:'1.6', t:'Reclamații false și Posthunt', ty:'interzis', d:[
      'Depunerea mai multor reclamații nefondate împotriva jucătorilor nu este permisă.'
    ], b:[
      { l:'Exemple', k:'ex', i:[
        'Căutarea persistentă a sancționării unui jucător fără impact semnificativ.',
        'Multiple reclamații împotriva unui jucător găsit repetat nevinovat.'
      ]}
    ], s:['Warn.','Ban 1-7 zile în funcție de gravitate.'], sn:'Cazuri grave: ban permanent.'},
    { c:'1.7', t:'Sindicatul', ty:'permis', b:[
      { l:'Prerogative', k:'allow', i:[
        'Sindicatul nu este subiectibil la sancțiuni legate de OOC/metagaming în scopuri de investigație și menținere a ordinii.',
        'Beneficiază de un grup mare de informatori și spioni.',
        'Are dreptul să folosească informații/dovezi OOC pentru a începe RP-uri, investigații sau intervenții.',
        'Acțiunile Sindicatului nu sunt limitate de alte reguli generale, atât timp cât nu sunt exagerate.'
      ]},
      { l:'Limite', k:'forbid', i:[
        'Nu folosește informații OOC pentru a interveni în conflicte între mafii, doar pentru ordine generală.',
        'Sindicatului nu i se pot cere informații OOC de către jucători.',
        'Informațiile OOC pot fi folosite doar cu aprobarea Liderului de Sindicat sau a unui Admin 6+.'
      ]}
    ]},
    { c:'1.8', t:'Gravitatea sancțiunilor', ty:'info', b:[
      { l:'Reguli de aplicare', k:'note', i:[
        'Dacă încălcarea nu a fost voită/gravă, staff-ul poate oferi warn în loc de ban.',
        'În cazuri speciale se poate aplica o amendă IC.',
        'La 3 warn-uri se primește automat ban de 7 zile.',
        'La 3+ reguli încălcate simultan: sancțiune "Greșeli Multiple" = Ban 1-30 zile.'
      ]}
    ]}
  ]},

  { code:'CAP. 2', title:'Reguli de bază', articles:[
    { c:'2.1', t:'In Character (IC)', ty:'info', d:['Toate acțiunile pe care le face un player/caracter în timpul roleplay-ului. Opusul OOC.']},
    { c:'2.2', t:'Out-of-character (OOC)', ty:'info', d:['Toate acțiunile făcute în afara roleplay-ului și tot ce e spus pe canale OOC (Discord, chat).']},
    { c:'2.3', t:'Player-Kill (PK)', ty:'obligatie', d:['La respawn la spital uiți ultima acțiune, locația și persoanele implicate.'], b:[
      { l:'Mențiuni', k:'note', i:[
        'La părăsirea unei organizații guvernamentale (Poliție/Medici) uiți toate particularitățile acesteia.',
        'La părăsirea unei mafii, PK-ul trebuie rolat de conducere.',
        'Când liderul de mafie omoară un membru, membrul uită toate informațiile despre organizație.',
        'La desființarea unei organizații, toți membrii rolează PK-ul.',
        'Revenirea în zona RP-ului inițial se poate face după 30 de minute.',
        'Informațiile din telegrame nu pot fi folosite pentru a-ți reaminti ce ai uitat prin PK.'
      ]}
    ], s:['Amenda IC.','Warn.','Ban 1-10 zile în funcție de gravitate.']},
    { c:'2.4', t:'Revenge Kill (RK)', ty:'interzis', d:['Întoarcerea la zona unui RP anterior după acceptarea morții și respawn.'],
      s:['Ban 3-14 zile în funcție de gravitate.']},
    { c:'2.5', t:'Character Kill (CK)', ty:'info', d:['Pierderea a tot ce deține caracterul, oferit pentru motiv bine întemeiat.'], b:[
      { l:'Exemple de CK', k:'ex', i:[
        'Informații importante despre organizație date către altă organizație/poliție.',
        'Prea multe caziere + închisoare pe viață.',
        'Sinucidere fără salvare.',
        'Înec intenționat urmărit de poliție.'
      ]},
      { l:'Se pierd', k:'forbid', i:[
        'Bani cash/bancă, cal/caruta, casă/afacere, obiecte din cufăr, telegrama, înfățișare și nume IC, informații RP, orele pe caracter.'
      ]},
      { l:'Mențiuni', k:'note', i:[
        'Nu poți face RP de verișor/frate care cunoaște viața caracterului anterior.',
        'Transferul de bunuri înainte de CK este interzis.'
      ]}
    ], s:['Transfer de bunuri înainte de CK: warn + ștergerea bunurilor + ban pentru persoana care favorizează.']},
    { c:'2.6', t:'Coma', ty:'interzis', d:[
      'Ești doborât la pământ (împușcat, înjunghiat, foame/apă). Este interzisă comunicarea prin orice cale (IC/OOC) cât timp ești în comă. Informațiile văzute în comă sunt ignorate; altfel se sancționează ca MetaGaming (2.10).'
    ]},
    { c:'2.7', t:'Apelul către medici', ty:'permis', d:[
      'Permis prin tasta "N" pentru: accident mortal pe drum circulat, leșin de foame, împușcare pe drum circulat.'
    ], s:['Amenda IC.','Warn.','Ban 1-3 zile în funcție de gravitate.']},
    { c:'2.6.2', t:'Acceptarea morții', ty:'info', d:[
      'Posibilă după primele 5 minute de comă = PK (2.3). Se pierd banii cash și itemele din inventar (mai puțin hainele). Deconectarea după 5 minute = PK automat.'
    ], b:[
      { l:'Interzis', k:'forbid', i:['Să accepți moartea după ce ai trecut de ușile spitalului sau ale secției de poliție (sancționat conform 2.9 Refuz RP).']}
    ]},
    { c:'2.7', t:'RolePlay (RP)', ty:'info', d:[
      'Crearea unui caracter virtual cu poveste anterioară, cât mai apropiat de realitate. Include și interacțiunea dintre 2 jucători.'
    ]},
    { c:'2.8', t:'Fail RolePlay (Fail RP)', ty:'interzis', d:['Nerespectarea regulilor pentru o experiență realistă.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Medici care nu salvează.',
        'Polițiști care nu aplică Codul Penal (excepție: dezavantaj numeric).',
        'Deschiderea OOC în IC.',
        'Jefuirea persoanelor în comă.',
        'Intervenția ARMATEI la jaf de bancă.'
      ]}
    ], s:['Amenda IC.','Warn.','Ban 1-3 zile în funcție de gravitate.']},
    { c:'2.9', t:'Refuz RP', ty:'interzis', d:['Îngreunarea roleplay-ului sau refuzul de a interacționa fără motiv întemeiat.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Refuzul interacțiunii cu poliția.',
        'Când intri într-un magazin/bar fără a discuta cu angajatul și a cere un catalog.',
        'Refuzul interacțiunii după accident.',
        'Mersul la Doctor (NPC) în loc de medici (player).'
      ]}
    ], s:['Amenda IC.','Ban 1-3 zile în funcție de gravitate.']},
    { c:'2.10', t:'Meta Gaming (MG)', ty:'interzis', d:['Utilizarea informațiilor OOC în scopuri IC pentru avantaj.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Coordonare pe Discord în loc de voice din joc.',
        'Folosirea informațiilor auzite în comă.',
        'Identificarea unei grupări după texte/culori fără RP anterior.',
        'Folosirea tastei Home fără motiv.',
        'Identificarea unei persoane după voce, chiar mascată.',
        'Folosirea informațiilor din sisteme cu acces restricționat (ex. carcan, exclusiv lider).'
      ]},
      { l:'Mențiuni', k:'note', i:[
        'Neprezentarea dovezilor la suspiciune de MG se sancționează.',
        'Nu se aplică membrilor ARMATEI/MERCENARI care își recunosc colegii.'
      ]}
    ], s:['Ban 1-7 zile în funcție de gravitate.','Ban 7-60 zile în funcție de gravitate.']},
    { c:'2.11', t:'StreamSnipe', ty:'interzis', d:[
      'Urmărirea unui streamer/youtuber/tiktok-er pentru a interveni în RP sau a folosi informații de pe stream.'
    ], s:['Se aplică sancțiunile de la 2.10 MetaGaming.']},
    { c:'2.12', t:'Mixing (MIX)', ty:'interzis', d:['Oferirea informațiilor IC în OOC.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Căutarea unui jucător pe chat OOC să te ia dintr-un loc.',
        'Anunțarea pe Discord a unei morți la o locație.'
      ]}
    ], s:['Ban 1-3 zile în funcție de gravitate.','Ban 3-7 zile în funcție de gravitate.']},
    { c:'2.13', t:'Power Gaming (PG)', ty:'interzis', d:['Puteri supranaturale sau lipsa de șanse acordate în RP.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Lovirea unui gard.',
        'Lovit cu piciorul alți cetățeni când ești pe cal.',
        'Blocarea căii de acces la un jaf.',
        'Intrarea în casă în timp ce fugi și închiderea ușii.',
        'Provocarea unui accident pentru a jefui.',
        'Jefuirea/omorârea persoanelor care dorm.',
        'Voice changer fără mască adecvată.',
        'Tras prin geam/texturi.'
      ]}
    ], s:['Amenda IC.','Warn.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'2.14', t:'RolePlay Scârbos', ty:'interzis', d:['Denigrarea altor persoane prin acțiuni. Se face doar cu acordul ambelor părți.'], b:[
      { l:'Exemple', k:'ex', i:['/me urinez pe el, îl scuip.','Acțiuni cu conotație sexuală.']}
    ], s:['Ban 7-14 zile în funcție de gravitate.']},
    { c:'2.15', t:'Random Death Match (RDM)', ty:'interzis', d:['Atacarea/împușcarea unui jucător fără motiv sau RP anterior.'],
      s:['Amenda IC.','Ban 1-3 zile în funcție de gravitate.','Ban 3-14 zile în funcție de gravitate.']},
    { c:'2.16', t:'Vehicle Death Match (VDM)', ty:'interzis', d:['Călcarea intenționată a unui jucător fără motiv/RP anterior.'],
      s:['Amenda IC.','Ban 1-3 zile în funcție de gravitate.','Ban 3-14 zile în funcție de gravitate.']},
    { c:'2.17', t:'Olympic-Swim', ty:'interzis', d:['Înotarea la nesfârșit este interzisă.'],
      s:['Amenda IC.','Warn + întoarcere la locul unde ai început să înoți.','Ban 1-3 zile în funcție de gravitate.']},
    { c:'2.18', t:'No Fear (NF)', ty:'interzis', d:['Lipsa de frică realistă pentru viața proprie.'], b:[
      { l:'Mențiuni', k:'note', i:['Itemele pot fi confiscate dacă RP-ul e anulat prin ticket.']}
    ], s:['Amenda IC.','Warn.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'2.18.1', t:'ARMATA — No Fear', ty:'permis', b:[
      { l:'Reguli', k:'note', i:[
        'Grupuri de peste 3 membri ai ARMATEI: nu se aplică NF.',
        '1 SOLDAT singur: rolează frica dacă e prins de minim 4 jucători.',
        '2 SOLDATI singuri: rolează frica dacă sunt prinși de minim 5 jucători.',
        'Comparația numerică se face la începutul RP-ului, nu se recalculează pe parcurs.'
      ]},
      { l:'Situații', k:'ex', i:[
        '1 SOLDAT vs 3 = NU.','1 SOLDAT vs 4 = DA.','2 SOLDATI vs 4 = NU.','2 SOLDATI vs 5 = DA.','3 SOLDATI vs oricâți = NU.'
      ]}
    ]},
    { c:'2.18.2', t:'MERCENARI — No Fear', ty:'permis', b:[
      { l:'Reguli', k:'note', i:[
        'Grupuri de peste 2 membri MERCENARI: nu se aplică NF.',
        '1 MERCENAR singur: rolează frica dacă e prins de minim 4 jucători.'
      ]},
      { l:'Situații', k:'ex', i:['1 MERCENAR vs 3 = NU.','1 MERCENAR vs 4 = DA.','2 MERCENARI vs oricâți = NU.']}
    ], s:['Se aplică sancțiunile de la 2.18 No Fear.']},
    { c:'2.19', t:'Cop-Fear (CF)', ty:'interzis', d:['Lipsa de frică în preajma poliției.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Refuzul cooperării la secție.',
        'Refuzul de a părăsi un perimetru.',
        'Pătrunderea pe teren guvernamental neinvitat.',
        'Refuzul/fuga de la arme îndreptate.',
        'Ridicarea polițiștilor doborâți.',
        'Trusă medicală oferită polițiștilor de mafioți.',
        'Bătaia unui polițist în penitenciar.'
      ]}
    ], s:['Amenda IC.','Warn.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'2.20', t:'Cop-Bait (CB)', ty:'interzis', d:['Atragerea atenției poliției fără RP anterior, pentru amuzament.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Sfidare/glume nepotrivite fără permisiuni sau drift cu caruta în prezența poliției.',
        'Treceri repetate cu fața acoperită.',
        'Jaf magazin/bancar, livrări droguri, patrule rău famate 22:00-07:00.'
      ]}
    ], s:['Amenda IC.','Warn.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'2.21', t:'Disconnect în RolePlay', ty:'interzis', d:[
      'Deconectare intenționată pentru avantaj. Trebuie anunțat pe Discord și revenire în maxim 5 minute. Deconectarea pentru evitarea consecințelor duce la pierderea itemelor/vehiculului; dacă a evitat un CK, se aplică offline.'
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-30 zile în funcție de gravitate.']},
    { c:'2.22', t:'Bombardier', ty:'interzis', d:['Atitudine de superioritate/jignire repetată fără RP anterior.'],
      s:['Amenda IC.','Warn + Amenda IC.','Ban 1-14 zile în funcție de gravitate.']},
    { c:'2.23', t:'Provoking', ty:'interzis', d:['Provocarea unui jucător spre enervare fără interacțiune anterioară, pentru amuzament.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Lovirea calului pentru a da jos jucătorul.',
        'Lovit cu pumnul și a plecat.',
        'Forțarea intrării într-un RP nedorit.'
      ]}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-3 zile în funcție de gravitate.']},
    { c:'2.24', t:'Sleep', ty:'interzis', d:[
      'Comanda /sleep doar în case, fără RP activ. Jefuirea/omorârea persoanelor pe sleep = Power Gaming (2.13).'
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-3 zile în funcție de gravitate.']},
    { c:'2.25', t:'Penitenciar', ty:'interzis', d:[
      'Se interzice atitudinea de Bombardier și RDM. Deținuții își ispășesc pedeapsa fără a isca altercații între ei.'
    ]},
    { c:'2.26.1', t:'Corupție IC', ty:'info', d:[
      'Orice metodă de corupție la nivel de caracter (acțiuni ilegale sancționate cu închisoare, oferirea de informații din facțiune, luare de mită).'
    ]},
    { c:'2.26.2', t:'Corupție OOC', ty:'interzis', d:['Corupție pe alte canale de comunicare decât cele ale serverului.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Oferirea de bunuri din facțiuni guvernamentale.',
        'Oferirea de informații din facțiune prin Discord/WhatsApp.',
        'Depozitarea echipamentelor de facțiune în vehicule/case personale.',
        'Eliberarea unui deținut fără motiv IC valid.',
        'Acțiuni ce încalcă logica facțiunii guvernamentale.'
      ]}
    ], s:['Ban 1-14 zile fără drept de plată.']},
    { c:'2.27', t:'Freechat', ty:'interzis', d:[
      'Folosirea chatului OOC pentru mesaje de ură/frustrări în loc de socializare.'
    ], s:['Amenda IC și ban 7 zile sau permanent.']},
    { c:'2.28', t:'Low Effort Roleplay (LER)', ty:'interzis', d:['Interes minim depus în RP.'], b:[
      { l:'Exemple', k:'ex', i:[
        '"/me isi revine usor" copy-paste după accident grav.',
        'Pastilă/injecție fără explicații.',
        'Tras cu arma imediat după comă.'
      ]}
    ], s:['Amenda IC.','Warn + Amenda IC.']},
    { c:'2.29', t:'Înșelătoriile (Trasul în țeapă)', ty:'interzis', b:[
      { l:'Interzis', k:'forbid', i:[
        'Este strict interzis să înșelați (IC/OOC).',
        'Sunt interzise orice tip de țepe/înșelăciuni.',
        'În caz de înșelătorie, bunurile se returnează.'
      ]},
      { l:'Mențiuni', k:'note', i:[
        'Împrumuturile sunt pe propria răspundere, nu se sancționează.',
        'Complicitatea = aceeași sancțiune.'
      ]}
    ], s:['Amenda IC.','Warn + Ban 1-3 zile.','Ban 7-14 zile în funcție de gravitate.']}
  ]},
  { code:'CAP. 3', title:'Comportament OOC', articles:[
    { c:'3.1', t:'Comportamentul neadecvat față de fete (IC/OOC)', ty:'interzis', b:[
      { l:'Include', k:'forbid', i:['Limbaj obscen/aluzii sexuale.','Hărțuire constantă prin mesaje/chat.']}
    ], s:['Ban 3-7 zile în funcție de gravitate.','Ban 7-30 zile în funcție de gravitate.']},
    { c:'3.2', t:'Jignirile/Amenințările OOC', ty:'interzis', d:[
      'Folosirea canalelor OOC (chat joc, Discord) pentru jigniri/amenințări. Administrația nu intervine pentru jigniri pe canale private.'
    ], s:['Ban 1-3 zile în funcție de gravitate.','Ban 3-7 zile în funcție de gravitate.']},
    { c:'3.3', t:'Suferințele OOC', ty:'interzis', d:['Exprimare ostilă/intimidare/jignire cu scop de umilire.'], b:[
      { l:'Exemple interzise', k:'forbid', i:[
        '"Polițiștilor, cum vă descurcați acolo pe jos, tot picați?"',
        '"Mafioților, ar fi bine să învățați să țintiți corect."',
        '"Iată cum arată un roleplay de calitate, nu ce faceți voi."'
      ]}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 3-7 zile în funcție de gravitate.']},
    { c:'3.4', t:'Toxicitate', ty:'interzis', d:['Încălcări repetate care distrug experiența altor jucători.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Încălcare repetată pentru avantaje.',
        'Frustrare/instigare la ură OOC pe baza IC.',
        'Distrugerea experienței altora.',
        'Injurii repetate pe chat privat/stream.'
      ]}
    ], s:['Ban 7-14 zile în funcție de gravitate.','Ban 14-30 zile în funcție de gravitate.']},
    { c:'3.5', t:'Injurii sau denigrare staff și comunitate', ty:'interzis', d:[
      'Injurii, acuzații nefondate sau denigrare repetată a staff-ului/comunității.'
    ], s:['Ban 7-14 zile în funcție de gravitate.','Ban 14-30 zile sau permanent în cazuri extreme.']},
    { c:'3.6', t:'Reacții (Plâns) nejustificate', ty:'interzis', d:[
      'Comportamente exagerate față de situații RP sau decizii ale staff-ului (sancțiune doar cu aprobarea unui Admin 4+).'
    ], s:['Ban 1 zi.','Ban 2-7 zile în funcție de gravitate.']}
  ]},

  { code:'CAP. 4', title:'Abuzuri', articles:[
    { c:'4.1', t:'Bug abuse', ty:'interzis', d:[
      'Crearea unui avantaj prin bug/exploit; de la retragerea bunurilor până la ban permanent. Bug-urile se raportează prin /ticket.'
    ]},
    { c:'4.2', t:'Ban Evading', ty:'interzis', d:[
      'Conectarea pentru a evita un ban = banare permanentă + blocarea căilor de acces.'
    ]},
    { c:'4.3', t:'AFK (Away From Keyboard)', ty:'permis', d:[
      'Permis maxim 5 minute în zonă publică populată și maxim 30 minute în zonă retrasă, fără RP activ. Trebuie anunțat și cu acordul celor implicați în RP.'
    ], b:[
      { l:'Sancțiuni AFK în afara RP', k:'note', i:['Kick.','Amenda IC.','Amenda IC + Ban.']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1 zi.'], sn:'Scara de mai sus se aplică pentru AFK în roleplay.'},
    { c:'4.4', t:'Tranzacțiile OOC', ty:'interzis', d:[
      'Comercializarea bunurilor reale pentru bunuri/conturi din joc — strict interzis.'
    ], b:[
      { l:'Permise', k:'allow', i:[
        'Tranzacții de bunuri din joc pentru încărcare de Gold pe cont.',
        'Necesar: ticket cu membru staff supraveghind + înregistrare audio-video.',
        'Fără staff prezent: transferul de Gold trebuie efectuat primul; administrația nu garantează intervenția.'
      ]}
    ], s:['Ban permanent fără drept de plată.']},
    { c:'4.5', t:'System Abuse', ty:'interzis', d:['Folosirea sistemelor serverului pentru avantaj.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Parcare la garaj în timpul urmăririi poliției.',
        'Animații pentru descătușare.',
        'Animații în schimburi de focuri.',
        'Evacuarea chiriașilor pentru obiecte.',
        'Tractare abuzivă pentru bani.',
        'Folosirea armelor SAS fără uniformă SAS (excepție Sub-Comisar+).'
      ]}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 3-30 zile în funcție de gravitate.']},
    { c:'4.6', t:'Reclama este interzisă', ty:'interzis', d:['Promovarea conținutului non REGAL LAND este interzisă.'],
      s:['Ban permanent.']},
    { c:'4.7', t:'Trolling', ty:'interzis', d:[
      'Încălcarea repetată a regulamentului sau deranjul altor jucători pentru amuzament.'
    ], s:['Ban 7-14 zile (conturi cu 10+ ore).','Ban permanent (conturi cu sub 10 ore).']},
    { c:'4.8', t:'Account sharing', ty:'interzis', d:['Împărțirea contului cu alte persoane este interzisă.'],
      s:['Ban 1-7 zile în funcție de gravitate.','Ban 7-14 zile în funcție de gravitate.']},
    { c:'4.9', t:'Conturi multiple', ty:'interzis', d:[
      'Strict interzis să lăsați pe altcineva la PC în locul dumneavoastră, care să creeze o problemă majoră.'
    ], s:['Ban 1-7 zile în funcție de gravitate.','Ban 7-14 zile în funcție de gravitate.'], sn:'Sancțiunea se aplică pe contul principal.'}
  ]},

  { code:'CAP. 5', title:'Reguli de condus / acțiuni cu calul / caruta', articles:[
    { c:'5.1', t:'Limitele de viteză (INFO)', ty:'info', b:[
      { l:'În oraș', k:'note', i:['Cal — viteza maximă: trap.','Caruta — viteza maximă: încet.']}
    ]},
    { c:'5.2', t:'Pit-Stop', ty:'interzis', d:[
      'Interzis cu viteză mare. Interzis indiferent de viteză. Un cal nu poate face pit-stop unui alt călăreț.'
    ], b:[
      { l:'Excepție', k:'exception', i:['Doar caruta poate face pit-stop.']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-3 zile în funcție de gravitate.']},
    { c:'5.3', t:'Ninja-Horse', ty:'interzis', d:[
      'Urcarea pe un cal imediat după ce cineva l-a părăsit. Nu se consideră ninja-horse dacă calul este pe câmp.'
    ], b:[
      { l:'Excepție', k:'exception', i:['Dacă este în afara orașului, nu e ninja-horse.']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-3 zile în funcție de gravitate.']},
    { c:'5.4', t:'Car-Ram (CR)', ty:'interzis', d:['Interzis: lovirea intenționată a altui vehicul (caruta/cal).'],
      s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'5.5', t:'Blocajele', ty:'permis', d:['Sunt permise doar în afara orașelor și cu maxim 2 carute.'],
      s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']}
  ]},

  { code:'CAP. 6', title:'Joburi și activități legale', articles:[
    { c:'6.1', t:'Locurile de muncă legale', ty:'obligatie', b:[
      { l:'Obligații', k:'note', i:[
        'Uniforma alocată.',
        'Comportament adecvat.',
        'Fără jefuit/răpit la job.',
        'Fără vehicule de job în scop personal.',
        'Fără folosirea uniformei ca acoperire pentru ilegalități.',
        'Fără deranjarea persoanelor.'
      ]}
    ], s:['10-20 minute Jail.','40-60 minute Jail.','Warn + 60 minute Jail (de la a treia abatere).']}
  ]},

  { code:'CAP. 7', title:'Acțiuni ilegale', articles:[
    { c:'7.1', t:'Furt vehicule', ty:'interzis', d:['Nu se fură vehicule din zone publice.'], b:[
      { l:'Cai poliție/medici', k:'note', i:['Doar în cazuri extreme, ca ultimă cale de scăpare, abandonat cât mai repede.']},
      { l:'Mențiuni', k:'note', i:['Administrația nu e obligată să returneze bunuri furate din vehicule personale.']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'7.2', t:'Ilegalități sub 50 de ore', ty:'interzis', d:[
      'Sub 50 de ore pe CARACTER este interzisă orice ilegalitate sau ajutor indirect.'
    ], b:[
      { l:'Acțiuni ilegale', k:'forbid', i:['Jefuire persoane/proprietăți.','Luare de ostatic.','Craftarea obiectelor ilegale.']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'7.3', t:'Ilegalități în zonă publică', ty:'interzis', d:[
      'Zonă publică = orașe, gări, zonele destinate joburilor legale — ilegalitățile sunt interzise aici.'
    ], b:[
      { l:'Exemple', k:'ex', i:[
        'Scoaterea armei albe/de foc.',
        'Deschiderea focului.',
        'Uciderea unui jucător.',
        'Aruncarea unei persoane în comă în zonă publică.',
        'Amenințare cu arma pe cai/carute.'
      ]},
      { l:'Excepție', k:'exception', i:['Bătaie cu pumnii între 2 jucători pe bază de RP anterior nu e considerată ilegalitate, chiar dacă cineva ajunge în comă.']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'7.4', t:'Ostatic (în situațiile cu poliția)', ty:'interzis', d:[
      'Se aplică doar în situațiile și condițiile prevăzute; fără cereri exagerate și fără bani/bunuri.'
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'7.5', t:'Răpirea', ty:'permis', d:[
      'Necesită armă letală, zonă retrasă, minimum 5 persoane; sunt excluse persoanele la job legal.'
    ], b:[
      { l:'Răscumpărare', k:'note', i:[
        'Se pot cere bunuri până la 500$ (nu de la facțiuni guvernamentale).',
        'Fără acord = PK-ul celui răpit față de toți cei prezenți.'
      ]}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'7.6', t:'Acțiunile teroriste', ty:'interzis', d:[
      'Acțiuni ce ar duce la moartea mai multor persoane. Permise cu aprobarea unui membru staff senior, în RP complex. Eșecul = CK pentru toți membrii implicați (aprobat sau nu).'
    ], b:[
      { l:'Exemple', k:'ex', i:[
        'Pătrundere înarmat pe teren guvernamental.',
        'Folosirea armelor în locații publice.',
        'Explozibil care pune vieți în pericol.',
        'Incendierea intenționată a unui cal/caruta lângă cetățeni.'
      ]}
    ], s:['Ban 7-14 zile în funcție de gravitate.']},
    { c:'7.7', t:'Jafuri jucători', ty:'permis', d:[
      'Interval orar: 22:00-07:00. Necesar minim o armă albă/de foc. Doar în zonele din afara orașelor.',
      'Puteți jefui doar banii/obiectele asupra persoanei și din cal/caruta condus la momentul jafului.'
    ], b:[
      { l:'Interzis', k:'forbid', i:[
        'Fără 50 ore pe CARACTER (jefuitor sau victimă).',
        'Jefuirea în locuri publice.',
        'Jefuirea medicului/polițistului la datorie sau a angajaților legali în uniformă.',
        'Jefuirea unui coleg de echipă job/quest (excepție: echipă fără motiv concret).',
        'Jefuirea aceleiași persoane în mai puțin de 2 ore.'
      ]}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'7.7.1', t:'Rob & Kill | Kill & Rob | Drop & Kill', ty:'interzis', b:[
      { l:'Definiții', k:'note', i:[
        'Rob & Kill: jefuire apoi PK — interzis.',
        'Kill & Rob: omorâre (comă) apoi jefuire în comă.',
        'Drop & Kill: forțare să arunce obiecte apoi omor (PK).',
        'Jucătorul jefuit trebuie să rețină că a fost jefuit.'
      ]},
      { l:'Strict interzis', k:'forbid', i:[
        'Trusa de prim ajutor pe cineva în comă pentru a-l jefui ulterior (trebuie dus la spital ilegal).',
        'Omorârea unei persoane după ce i-ai văzut itemele și nu-ți convin.'
      ]},
      { l:'Excepții', k:'exception', i:[
        'Poți omorî dacă victima te urmărește singură/cu alții după jaf.',
        'Persoane gurălive/fără frică/necooperante pot fi omorâte.',
        'Persoana jefuită poate jefui/omorî doar jefuitorul inițial dacă îl întâlnește (fără cerința de 50 ore).',
        'La țeapă IC cu obiecte ilegale.',
        'Toate excepțiile respectă regula 7.3.'
      ]}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'7.8', t:'Ilegalități în case și în jurul caselor', ty:'interzis', b:[
      { l:'Permise DOAR 22:00-07:00', k:'allow', i:[
        'Ducerea unui răpit în propria casă/casă cu chirie.',
        'Jefuirea unui cetățean în casa jefuitorului/casă cu chirie.'
      ]},
      { l:'Interzise', k:'forbid', i:[
        'Jefuirea unui jucător în propria casă.',
        'Răpirea din propria casă fără RP anterior.',
        'Forțarea scoaterii de iteme din seifuri personale.',
        'Încuierea ușii în timpul urmăririi.',
        'Intrarea în curți cu garduri fără aprobare/RP anterior/aprobare Admin 6+.',
        'Ilegalități lângă case în afara intervalului 22:00-07:00.',
        'Așteptarea ieșirii unui jucător din propria casă pentru a-l jefui/omorî (camping).'
      ]}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'NOTE', t:'Note suplimentare (CAP. 7)', ty:'info', b:[
      { l:'Jucător refugiat în zonă verde', k:'note', i:[
        'Trebuie să evite provocările — sancțiune: Provoking + scoaterea din zonă verde.',
        'Trebuie să adopte o atitudine precaută — sancțiune: No-Fear + scoaterea din zonă verde.',
        'Dacă rămâne peste 30 minute doar pentru a trage de timp: Ban 1-7 zile + ștergerea inventarului.'
      ]},
      { l:'Mențiuni', k:'forbid', i:[
        'Evitați ilegalitățile în locuri aglomerate/supravegheate.',
        'Nu aveți voie să răpiți din zona verde și să transportați victima între blocuri pentru jaf/omor.'
      ]}
    ]}
  ]},

  { code:'CAP. 8', title:'Tichete',
    note:'Ticket-ul = formă de contactare a staff-ului pentru rezolvarea problemelor/raportarea încălcărilor. Tichetele fără informații pot fi respinse. Dovezile trebuie să includă data/ora și ID-urile persoanelor implicate.',
    articles:[
    { c:'8.1', t:'Comportamentul neadecvat la ticket', ty:'interzis', d:[
      'Luarea peste picior a echipei administrative sau a persoanelor implicate.'
    ], s:['Ban 1-14 zile în funcție de gravitate.']},
    { c:'8.2', t:'Minciuni la ticket', ty:'interzis', d:['Nu sunt permise minciuni, ascunderea/refuzul/alterarea informațiilor.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Nerecunoașterea implicării cu dovezi clare.',
        'Falsificarea dovezilor.',
        'Iteme "pierdute" care de fapt sunt depozitate.',
        'Refuzul de a oferi ID-ul unui prieten vinovat.'
      ]}
    ], s:['Ban 1-14 zile în funcție de gravitate.']},
    { c:'8.3', t:'Tichete pe Discord', ty:'permis', d:[
      'Se poate deschide ticket pe Discord, în 24 ore de la incident, pentru: reclamații staff, cereri unban, alte probleme. Soluționare în maxim 72 ore.'
    ]},
    { c:'8.4', t:'Ticket în RolePlay', ty:'obligatie', d:['Se poate deschide doar după încheierea roleplay-ului.'],
      s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']}
  ]},

  { code:'CAP. 9', title:'Activitate', articles:[
    { c:'9.1', t:'Case', ty:'obligatie', d:[
      'Deținătorii de case trebuie minim 10 ore în 28 de zile, altfel pierd casa (scoasă la licitație IC, bunurile nereturnate).'
    ], b:[
      { l:'Mențiuni', k:'note', i:[
        'Ban permanent fără plată: casa se scoate după 10 zile (dacă apare modificare la "cu drept de plată").',
        'Ban temporar peste 30 zile: minimul de 10 ore nu se ia în calcul decât după expirarea banului.'
      ]}
    ]}
  ]},

  { code:'CAP. 10', title:'Ziar Regal Land', articles:[
    { c:'10.1', t:'Respectarea limbajului', ty:'interzis', d:[
      'Anunțurile cu cuvinte jignitoare/rasiste/ofensatoare sunt șterse.'
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'10.2', t:'Obligativitatea roleplay-ului', ty:'obligatie', d:['Anunțurile trebuie redactate respectând regulile RP.'],
      s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'10.3', t:'Obligativitatea imaginilor relevante', ty:'obligatie', d:['Poza trebuie să fie relevantă.'], b:[
      { l:'Interzise', k:'forbid', i:['Imagini nerelevante, non-RP, cu arme/cadavre, elemente OOC.']},
      { l:'Excepție', k:'exception', i:['Imaginile controversate/politice/sexuale pot duce la sancțiuni mai mari, inclusiv ban permanent.']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'10.4', t:'Interzicerea promovării bunurilor ilegale', ty:'interzis', d:[
      'Este interzisă promovarea/vânzarea de bunuri ilegale (inclusiv pistoale de apă, plicuri cu zăpadă etc. ca substitut).'
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'10.5', t:'Fără incitare la ură sau certuri', ty:'interzis', d:['Se aplică regula 2.23 Provoking.']},
    { c:'10.6', t:'Interzicerea anunțurilor nepotrivite', ty:'interzis', b:[
      { l:'Exemple interzise', k:'forbid', i:['"Vând sclav."','"Razie"','"Cumpăr femeie de moravuri ușoare."','"L-am culcat pe X în Blackwater."']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'10.7', t:'Fără promovarea altor comunități', ty:'interzis', d:['Strict interzis, inclusiv prin metode subtile.'],
      s:['Ban permanent.']},
    { c:'10.8', t:'Limba permisă în anunțuri', ty:'obligatie', d:[
      'Doar română sau engleză (sunt permiși termeni/denumiri în alte limbi ca nume proprii/sloganuri).'
    ], b:[
      { l:'Permis', k:'allow', i:['"Deschidere oficială La Pizza Corleone – cel mai autentic gust italian!"']},
      { l:'Interzis', k:'forbid', i:['Anunțuri complet în altă limbă, mesaje neinteligibile.']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']}
  ]}

  ]
},
{
  id:'mafii', n:'2', icon:'💼', title:'Regulament Mafii / Grupări',
  intro:'Intervenții între civili și mafioți, deturnarea transportului de deținuți, limitele de membri la ilegalități și sancțiunea de Mafia Warn.',
  chapters:[
  { code:'M', title:'Reguli mafii și grupări', articles:[
    { c:'M1', t:'Intervenții civil/mafiot pentru civil/mafiot', ty:'interzis', b:[
      { l:'Interzise', k:'forbid', i:[
        'Alianțe între mafii recunoscute de sindicat împotriva altei mafii recunoscute, fără aprobare sau declarare de război.',
        'Acționarea pentru altă mafie/civili în acțiuni cu poliția dacă nu ești implicat de la început.',
        'Acționarea civil/mafiot pentru civil în acțiuni cu poliția, dacă nu sunt în același vehicul.'
      ]},
      { l:'Permise', k:'allow', i:[
        'Intervenția unui membru cu grad pentru un alt membru din PROPRIA mafie, fără implicarea civililor.',
        'Acționarea civil/mafiot pentru civil/mafiot în acțiuni cu jefuitorii.',
        'Oferirea trusei membrilor din PROPRIA mafie sau celor implicați de la început.'
      ]},
      { l:'Excepții', k:'exception', i:[
        'Pe insula Guarma nu se aplică regula.',
        'Mafia cu teritoriu deținut poate interveni la razie pe acesta.'
      ]}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.'],
      sn:'Dacă e încălcată în prezența liderului/subliderului: Mafia WARN implicit. Sancțiunea poate fi mai drastică fără a respecta numărul de abateri.'},
    { c:'M2', t:'Deturnarea unui transport', ty:'permis', d:[
      'Este permisă deturnarea transportului de deținuți, oriunde în afara orașului (excepție: zone vamă), dacă liderul sau minim 2 membri din grupare sunt în transport. Este permisă alianța a 2 mafii. Minim 3 oameni pentru deturnare.'
    ], b:[
      { l:'Interzis', k:'forbid', i:['Deturnarea unui transport aflat deja pe strada penitenciarului.']}
    ], s:['20-40 minute Jail.','Warn + 60 minute Jail.','Ban 1-7 zile în funcție de gravitate.'],
      sn:'Prezența liderului/subliderului: Mafia WARN implicit.'},
    { c:'M3', t:'Limite membri la ilegalități', ty:'info', b:[
      { l:'Limite', k:'note', i:[
        'Gang: maxim 10 persoane, nerecunoscut de sindicat.',
        'Gang recunoscut: maxim 15 persoane, recunoscut de sindicat.',
        'Grupare neoficială: maxim 31 persoane, recunoscută de sindicat.',
        'Grupare oficială: maxim 41 persoane, recunoscută de sindicat, afaceri de mai mult timp.'
      ]},
      { l:'Mențiuni', k:'note', i:['Limitările se aplică doar activităților ilegale.']}
    ], s:['20-40 minute Jail.','Warn + 60 minute Jail.','Ban 1-7 zile în funcție de gravitate.'],
      sn:'Prezența liderului/subliderului: Mafia WARN implicit.'},
    { c:'M4', t:'Mafia Warn', ty:'info', d:[
      'Sancțiune aplicată mafiilor oficiale/neoficiale, oferită de Admin 4+ în următoarele situații:'
    ], b:[
      { l:'Situații', k:'ex', i:[
        'RP cu Lider/Co-Lider implicat + încălcare gravă.',
        'RP cu minim 5 membri implicați + încălcare gravă.',
        'Banarea pentru hack a 3+ membri din mafie.'
      ]},
      { l:'Mențiuni', k:'note', i:[
        'Încălcările din CAP. 3 (Comportament OOC), Programe Interzise, CAP. 8 (Tichete) și CAP. 10 (Ziar) nu se folosesc pentru Mafia WARN (excepție: ban-urile de hack menționate).',
        'La 3 warn-uri acumulate, fiecare warn ulterior poate duce la down sau desființare.'
      ]}
    ]}
  ]}
  ]
},

{
  id:'jafuri', n:'3', icon:'💰', title:'Regulament Jafuri',
  intro:'Condițiile pentru jaful de magazin și cel bancar: numărul de participanți, orele minime pe caracter, tratamentul civililor și perimetrul acțiunii.',
  chapters:[
  { code:'J', title:'Jafuri organizate', articles:[
    { c:'J1', t:'Magazine', ty:'permis', d:[
      'Cu minim o armă de foc, în orice interval orar, grup de 2 persoane, toți cu minim 50 ore pe CARACTER.'
    ], b:[
      { l:'Reguli', k:'note', i:[
        'Civilii prezenți nu pot fi jefuiți/răpiți/omorâți, ci forțați să plece; dacă nu se supun, pot fi omorâți.',
        'Dacă jaful începe cu mai puțin de 2 participanți, se pot alătura alții până la maxim.',
        'Persoana care și-a acceptat moartea nu poate fi înlocuită.',
        'Fără ostatic pe durata jafului de magazin.'
      ]},
      { l:'Interzis', k:'forbid', i:['Ușile magazinului nu pot fi blocate cu carute/cai (nici de jefuitori, nici de poliție) — sancționat conform 2.13 Power Gaming.']},
      { l:'Excepție', k:'exception', i:['Mafii neoficiale maxim 6, mafii oficiale maxim 4.']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']},
    { c:'J2', t:'Bănci', ty:'permis', d:[
      'Orice interval orar, grup de 7-10 persoane, toți cu minim 50 ore pe CARACTER, fiecare cu armă de foc. Alianțe permise cu acordul sindicatului, fără a depăși 10 oameni.'
    ], b:[
      { l:'Desfășurare', k:'note', i:[
        'După declanșarea alarmei, proximitatea devine zonă roșie până la finalizarea acțiunii.',
        'Civilii sunt forțați să plece (pot fi omorâți dacă nu se supun).',
        'Persoana care și-a acceptat moartea nu poate fi înlocuită.',
        'Fără ostatic pe durata jafului bancar.',
        'Alt grup nu poate interveni să bată jefuitorii sau să preia jaful.'
      ]},
      { l:'Interzis', k:'forbid', i:[
        'Ușile nu pot fi blocate cu carute/cai; este interzisă împușcarea cailor legați/parcați — sancționat conform 2.13.',
        'Strict interzisă continuarea confruntării în afara zonei (excepție: dacă poliția trage din afară, se poate răspunde cu foc, fără urmărire).',
        'Strict interzis focul de pe clădirile din afara perimetrului.'
      ]},
      { l:'Mențiuni', k:'note', i:['Odată încheiat jaful, perimetrul nu se mai aplică; urmărirea suspecților în afara perimetrului nu permite urmărire doar pentru asigurarea că nu vor fi urmăriți ulterior.']}
    ], s:['Amenda IC.','Warn + Amenda IC.','Ban 1-7 zile în funcție de gravitate.']}
  ]}
  ]
},

{
  id:'zone', n:'4', icon:'🗺️', title:'Delimitarea Zonelor',
  intro:'Ce se poate și ce nu se poate face pe zonele verzi, pe drumurile din afara orașelor și în Port Guarma.',
  chapters:[
  { code:'Z', title:'Zone și drumuri', articles:[
    { c:'Z2', t:'Zone / drumuri verzi', ty:'interzis', d:[
      'Zone publice, frecventate și monitorizate. Nu este permis să comiteți ilegalități.'
    ], b:[
      { l:'Excepție', k:'exception', i:['Pe zonele verzi din Port Guarma este permisă folosirea armei doar pentru autoapărare la razie sau RP complex; fără jaf/răpire pe zonă.']},
      { l:'Mențiuni și excepții', k:'note', i:[
        'Răpirea din zonele verzi este permisă doar cu aprobarea SINDICATULUI, la cererea liderului/subliderului de mafie, realizată rapid și fără focuri de armă dacă este posibil.',
        'Drumurile din afara orașului (excepție: zonele verzi) sunt drumuri roșii; după ora 22:00-07:00 este permisă jefuirea.',
        'Folosirea vămilor pentru avantaje în luptă.'
      ]}
    ]}
  ]}
  ]
},

{
  id:'cheats', n:'5', icon:'⛔', title:'Programe Interzise (Cheats)',
  intro:'Cheat-uri, testele TW, filmarea obligatorie, modurile ilegale, afilierea la comunități de cheats și setările Windows obligatorii.',
  chapters:[
  { code:'C1', title:'Cheats și filmare obligatorie', articles:[
    { c:'C1.1', t:'Cheats', ty:'interzis', d:[
      'Folosirea de programe pentru avantaj sau deranjarea altora; este interzisă modificarea intenționată a conexiunii/fișierelor jocului.'
    ], b:[
      { l:'Mențiune', k:'note', i:['Ban pentru cheat = interzicerea armelor de foc timp de 30 zile (chiar dacă banul e plătit); folosirea armelor în această perioadă = ban permanent.']}
    ], s:['Cost unban 50 € — Ban permanent.','Cost unban 100 € — Ban permanent.','Cost unban 200 € — Ban permanent.','Cost unban 400 € — Ban permanent.'],
      sn:'Costul se dublează la fiecare abatere. Administrația poate bana fără drept de plată.'},
    { c:'C1.2', t:'Cheats TW', ty:'interzis', d:[
      'Jucătorii suspectați pot fi luați la teste TW de echipa Cheater Team. Refuzul testelor = BAN PERMANENT, la fel dacă se dovedește folosirea/deținerea de programe interzise.'
    ], b:[
      { l:'Mențiune', k:'note', i:['Dacă banul e plătit, este obligatorie reinstalarea Windows + filmare obligatorie pentru orice kill (lipsa dovezii = BAN PERMANENT).']},
      { l:'Interzis înainte de TW', k:'forbid', i:[
        'Ștergerea fișierelor.',
        'Întârzierea/tragerea de timp.',
        'Reinițializarea serviciilor.',
        'Curățarea jurnalelor/registrilor/Prefetch.',
        'Folosirea aplicațiilor de ștergere de string-uri.',
        'Distrugerea fișierelor.',
        'Curățarea shell:recent.',
        'Manipularea NvAPPTimestamps.',
        'Dezactivarea BAM Inheritance/ActivitiesCache/JumpLists.',
        'Oprirea thread-urilor din servicii.'
      ]},
      { l:'Tentative de Bypass interzise', k:'forbid', i:['Interacțiune înainte de pornirea RageMP cu CMD, Python, PowerShell, PowerShell ISE, System Informer/Process Hacker, Registry Editor.']}
    ]},
    { c:'C1.3', t:'Filmare obligatorie', ty:'obligatie', d:[
      'Toți jucătorii care folosesc arma și provoacă damage trebuie să înregistreze integral acțiunea. Materialul se păstrează 72 ore și se pune la dispoziția administrației la cerere.'
    ], b:[
      { l:'Filmare obligatorie pentru', k:'note', i:[
        'Jafuri magazin/bancă.',
        'Utilizarea armei.',
        'Provocarea de damage.',
        'Eliminarea (kill) altor jucători.'
      ]}
    ], s:['Ban 15 zile.','Ban permanent.']},
    { c:'C1.4', t:'Complice Cheats', ty:'interzis', d:[
      'Jucătorii prinși alături de un cheater care nu raportează sunt considerați complici și vor fi sancționați.'
    ]}
  ]},
  { code:'C2 – C4', title:'Moduri, afiliere și setări obligatorii', articles:[
    { c:'C2.1', t:'Moduri ilegale', ty:'interzis', d:['Moduri ce alterează starea jocului pentru avantaj.'], b:[
      { l:'Exemple', k:'ex', i:[
        'Cicluri zi-noapte modificate.',
        'Efecte pe hituri de gloanțe.',
        'Tracere gloanțe.',
        'Eliminare texturi/mapping.',
        'Colorare țintă pe jucător.',
        'Bright Nights.','No Fog.','Clear Interiors.',
        'Particles modificate.',
        'Graphics Packs Redux/Network Graphics.'
      ]},
      { l:'Notă', k:'note', i:['Lipsa unui mod din listă nu îl face automat legal — se poate întreba prin ticket. Sunt permise doar modurile grafice care îmbunătățesc vizual, fără avantaj.']}
    ], s:['Warn + eliminarea modurilor.','Ban 30 de zile.','Ban permanent.']},
    { c:'C3.1', t:'Afiliere comunitate cheats', ty:'interzis', d:[
      'Asocierea/promovarea/colaborarea cu comunități/website-uri/servere Discord ce distribuie/vând/promovează cheat-uri.'
    ], s:['Warn + dovadă părăsire comunități.','Ban 30 de zile + dovadă părăsire comunități.','Ban permanent.']},
    { c:'C4.1', t:'Actualizare obligatorie — setări Windows', ty:'obligatie', d:[
      'Începând cu 05.07.2025, toți jucătorii trebuie să aibă active (Running) serviciile Windows: PcaSvc, CDPSvc, DPS, SSDPSRV, DiagTrack, SysMain, EventLog, CDPUserSvc_*, Appinfo, WSearch.'
    ], b:[
      { l:'Verificare', k:'note', i:['PowerShell ca Administrator, comenzi get-service | findstr -i pentru fiecare serviciu.']}
    ], s:['Tentativele de dezactivare a acestor servicii pentru a ascunde moduri/programe interzise = Ban permanent.']}
  ]}
  ]
},
{
  id:'penal', n:'6', icon:'⚖️', title:'Cod Penal',
  intro:'Amenzile și sentințele aplicate de poliție, pe capitole: legislație rutieră, infracțiuni în trafic, contra bunelor moravuri, contra justiției, sănătate publică, persoane, arme și securitate națională.',
  chapters:[

  { code:'DEFINIȚII', title:'Definiții generale', articles:[
    { c:'D1', t:'Complicitatea', ty:'info', d:[
      'Complice = persoana care ajută intenționat sau instigă la o infracțiune, sau promite să păstreze bunuri obținute ilegal ori să ajute făptuitorul. Complicele primește aceeași pedeapsă ca autorul, în funcție de rol.'
    ]},
    { c:'D2', t:'Tentativa', ty:'info', d:[
      'Tentativa = încercarea întreruptă sau fără efect. Nu se pedepsește autorul care recunoaște/anunță autoritățile înainte de descoperire sau oprește el însuși comiterea. Tentativa = jumătate din pedeapsa infracțiunii complete.'
    ]},
    { c:'D3', t:'Încălcarea repetată a codului penal', ty:'interzis', d:[
      '5+ dosare penale active = "Most Wanted". Dosarele se pot clasa cu taxă la ȘERIF-ul poliției.'
    ], s:['Persoanele Most Wanted care încalcă din nou (dosar Nr. 6) vor fi SPÂNZURATE.']}
  ]},

  { code:'CAP. 1', title:'Legislație rutieră', articles:[
    { c:'1.1', t:'Limitele de viteză', ty:'penal', b:[
      { l:'În oraș', k:'note', i:['CAL = trap.','CARUTA = încet.']}
    ], p:{ m:'70$', x:'Peste dublul vitezei legale' }},
    { c:'1.2', t:'Conducere imprudentă', ty:'penal', p:{ m:'50$' }},
    { c:'1.3', t:'Nerespectarea semnelor polițistului', ty:'penal', p:{ m:'100$' }},
    { c:'1.4', t:'Neacordare de prioritate', ty:'penal', p:{ m:'100$' }},
    { c:'1.5', t:'Parcare ilegală', ty:'penal', p:{ m:'50$' }},
    { c:'1.6', t:'Acoperirea feței călare pe cal/caruta', ty:'penal', p:{ m:'200$', x:'Percheziție conducător + percheziție caruta/cal' }}
  ]},

  { code:'CAP. 2', title:'Infracțiuni în trafic', articles:[
    { c:'2.1', t:'Curse ilegale', ty:'penal', p:{ m:'250$', ln:'60-100 luni' }},
    { c:'2.2', t:'Părăsirea locului accidentului sau a unei scene', ty:'penal', p:{ m:'100$', ln:'40-60 luni' }},
    { c:'2.3', t:'Evadarea cu un cal de la un ofițer', ty:'penal', p:{ m:'200$', ln:'60-120 luni' }}
  ]},

  { code:'CAP. 3', title:'Infracțiuni asupra bunelor moravuri, proprietăților și liniștii publice', articles:[
    { c:'3.1', t:'Acoperirea feței', ty:'penal', p:{ m:'300$', x:'Percheziție obligatorie' }},
    { c:'3.2', t:'Urmărirea unei persoane fără acord', ty:'penal', p:{ m:'400$', ln:'40-60 luni' }},
    { c:'3.3', t:'Urmărirea poliției/medicilor fără acord', ty:'penal', p:{ m:'1.000$', ln:'50-80 luni' }},
    { c:'3.4', t:'Expunere indecentă', ty:'penal', p:{ m:'300$', ln:'40-60 luni' }},
    { c:'3.5', t:'Prostituție', ty:'penal', p:{ m:'1.000$', ln:'50-80 luni', x:'Se aplică și clienților' }},
    { c:'3.6', t:'Viol', ty:'penal', p:{ m:'2.500$', ln:'120-200 luni' }},
    { c:'3.7', t:'Încălcarea proprietății private', ty:'penal', p:{ m:'100-700$', ln:'60-80 luni' }},
    { c:'3.8', t:'Vandalism', ty:'penal', p:{ m:'150-650$', ln:'60-80 luni' }},
    { c:'3.9', t:'Șantaj', ty:'penal', p:{ m:'200-800$', ln:'75-100 luni' }},
    { c:'3.10', t:'Tâlhărie', ty:'penal', p:{ m:'150-500$', ln:'70-100 luni' }},
    { c:'3.11', t:'Furt cai/carute', ty:'penal', p:{ m:'70-300$', ln:'50-80 luni', x:'Se aplică și pentru spargere' }},
    { c:'3.11.1', t:'Furt Poliție/Spital', ty:'penal', p:{ m:'500-1.000$', ln:'120-150 luni' }},
    { c:'3.12', t:'Jaf', ty:'penal', p:{ m:'200-500$', ln:'100-150 luni' }},
    { c:'3.12.1', t:'Jaf armat', ty:'penal', p:{ m:'350-750$', ln:'120-170 luni' }},
    { c:'3.12.2', t:'Jaf afaceri', ty:'penal', p:{ m:'350-500$', ln:'120-150 luni' }},
    { c:'3.12.3', t:'Jaf bancar', ty:'penal', p:{ m:'450-900$', ln:'250-360 luni' }},
    { c:'3.13', t:'Deranjarea liniștii publice', ty:'penal', p:{ m:'50-250$', ln:'20-40 luni' }},
    { c:'3.14', t:'Eșecul de a părăsi un loc', ty:'penal', p:{ m:'100-300$', ln:'50-70 luni' }},
    { c:'3.15', t:'Instigarea unei revolte', ty:'penal', p:{ m:'200-1.000$', ln:'80-120 luni' }},
    { c:'3.16', t:'Calomnie', ty:'penal', p:{ m:'70-150$', ln:'30-50 luni' }},
    { c:'3.17', t:'Înșelăciune', ty:'penal', p:{ m:'400-1.000$', ln:'120-200 luni', x:'Returnarea bunurilor/contravalorii' }},
    { c:'3.18', t:'Eveniment neautorizat în spațiul public', ty:'penal', p:{ m:'150-450$', ln:'30 luni', x:'Infracțiune cu închiderea suspectului' }}
  ]},

  { code:'CAP. 4', title:'Infracțiuni asupra justiției', articles:[
    { c:'4.1', t:'Obstrucția unui ofițer', ty:'penal', p:{ m:'150$', ln:'100-150 luni', x:'Nu se acordă împreună cu 4.4' }},
    { c:'4.2', t:'Eșecul de a părăsi o instituție a statului', ty:'penal', p:{ m:'200$', ln:'75-95 luni' }},
    { c:'4.3', t:'Ultraj', ty:'penal', p:{ m:'200-2.000$', ln:'50-360 luni' }},
    { c:'4.4', t:'Evadarea din custodie', ty:'penal', p:{ m:'500-1.000$', ln:'120-200 luni' }},
    { c:'4.5', t:'Rezistență la arest', ty:'penal', p:{ m:'75-300$', ln:'80-160 luni', x:'Înlocuiește 2.1 când suspectul fuge pentru a evita arestul' }},
    { c:'4.6', t:'Eșecul identificării', ty:'penal', p:{ m:'150-200$', ln:'60-80 luni' }},
    { c:'4.7', t:'Dare de mită', ty:'penal', p:{ m:'150-500$', ln:'150-300 luni' }},
    { c:'4.8', t:'Codul Muncii', ty:'penal', p:{ m:'150-450$', x:'Dosar penal + confiscarea bunurilor' }, b:[
      { l:'Licențe emise de primărie', k:'note', i:['Pescuit, Miner, Crescător de Tabac, Tăietor de Lemne.']}
    ]},
    { c:'4.9', t:'Descurajarea unui martor sau a unei victime', ty:'penal', p:{ m:'500-1.000$', ln:'80-120 luni' }},
    { c:'4.10', t:'Limbaj vulgar', ty:'penal', p:{ m:'100$' }},
    { c:'4.12', t:'Braconajul', ty:'penal', p:{ m:'500$', ln:'70-100 luni' }, b:[
      { l:'Info', k:'note', i:[
        'Animalul vânat ilegal/pescuit = bun de contrabandă confiscat.',
        'Percheziție corporală/caruta/cal la flagrant.',
        'Include deținerea de carcase ilegale.',
        'Tentativă = echipat pentru vânătoare într-o zonă interzisă.'
      ]}
    ]},
    { c:'4.13', t:'Fals/Uz de fals', ty:'penal', p:{ m:'150-900$', ln:'80-150 luni' }}
  ]},

  { code:'CAP. 5', title:'Infracțiuni asupra sănătății și siguranței publice', articles:[
    { c:'5.1', t:'Deținerea sau producerea de substanțe ilegale', ty:'penal', p:{ m:'1.000$', ln:'40-60 luni', x:'Doar semințe/frunze' },
      b:[{ l:'Mențiune', k:'note', i:['Nu se cumulează cu 5.2, 5.3, 5.4.']}]},
    { c:'5.2', t:'Prelucrarea sau deținerea țigărilor de contrabandă', ty:'penal', tr:[
      { k:'TIP I', v:'1-20 — legal fără licență de producător.' },
      { k:'TIP II', v:'21-50 — confiscare + Dosar Penal + 1.000$.' },
      { k:'TIP III', v:'51-100 — confiscare + Dosar Penal + 2.000$.' },
      { k:'TIP IV', v:'101+ — Sentință 60-80 luni + 3.000$.' }
    ]},
    { c:'5.3', t:'Prelucrarea sau deținerea de droguri de risc', ty:'penal', tr:[
      { k:'TIP I', v:'1-5 joint-uri — confiscare + Dosar Penal + 1.500$.' },
      { k:'TIP II', v:'6-50 — Sentință 40-80 luni + 2.000$.' },
      { k:'TIP III', v:'51-100 — Sentință 80-120 luni + 2.500$.' },
      { k:'TIP IV', v:'101+ — Sentință 120-250 luni + 3.000$.' }
    ]},
    { c:'5.4', t:'Prelucrarea sau deținerea de droguri de mare risc', ty:'penal', tr:[
      { k:'TIP I', v:'1-3 plicuri cocaină/ciuperci — confiscare + Dosar Penal + 30.000$.' },
      { k:'TIP II', v:'4-50 — Sentință 70-90 luni + 3.500$.' },
      { k:'TIP III', v:'51-100 — Sentință 90-140 luni + 4.000$.' },
      { k:'TIP IV', v:'101+ — Sentință 140-360 luni + 5.000$.' }
    ]},
    { c:'5.5', t:'Bani nemarcați (Blood Money)', ty:'penal', tr:[
      { k:'TIP I', v:'10.000-100.000 — Sentință 40-70 luni + 200$.' },
      { k:'TIP II', v:'100.000-1.000.000 — Sentință 70-100 luni + 300$.' },
      { k:'TIP III', v:'1.000.000-100.000.000 — Sentință 100-150 luni + 400$.' },
      { k:'TIP IV', v:'10.000.000+ — Sentință 120-175 luni + 500$.' }
    ]},
    { c:'5.7', t:'Obligația de identificare adecvată', ty:'penal', p:{ m:'100$', x:'Nerespectare' }, b:[
      { l:'Licențe obligatorii', k:'note', i:[
        'Miner (licență minerit), Pescar (licență pescuit), Utilizator de arme (licență port-armă).',
        'Licență pădurar, licență vânător, licență judecător, licență bodyguard, licență fermier de animale, licență reporter.',
        'Job-uri cu licență din primărie.'
      ]}
    ]}
  ]},

  { code:'CAP. 6', title:'Infracțiuni asupra persoanelor', articles:[
    { c:'6.1', t:'Amenințări criminale', ty:'penal', p:{ m:'100-1.000$', ln:'50-80 luni' }},
    { c:'6.2', t:'Tentativă de omor', ty:'penal', p:{ m:'200-500$', ln:'70-90 luni' }},
    { c:'6.3', t:'Vătămare corporală', ty:'penal', p:{ m:'50-500$', ln:'60-80 luni' }},
    { c:'6.4', t:'Vătămare corporală gravă', ty:'penal', p:{ m:'100-1.000$', ln:'80-120 luni' }},
    { c:'6.6', t:'Omor din culpă', ty:'penal', p:{ m:'1.000-1.500$', ln:'120-150 luni' }},
    { c:'6.7', t:'Crimă (Omucidere)', ty:'penal', p:{ m:'1.500-3.000$', ln:'130-160 luni' }},
    { c:'6.8', t:'Răpire', ty:'penal', p:{ m:'1.000-2.000$', ln:'100-130 luni' }},
    { c:'6.9', t:'Tortură', ty:'penal', p:{ m:'2.000-5.000$', ln:'100-150 luni' }, b:[
      { l:'Mențiuni', k:'note', i:['Nu se cumulează cu 6.2.','Se cumulează cu 6.7 dacă rezultă moartea.']}
    ]}
  ]},

  { code:'CAP. 7', title:'Controlul armelor mortale', articles:[
    { c:'7.1', t:'Posesia unei arme albe', ty:'penal', p:{ m:'100-200$', ln:'50-80 luni', x:'Cuțit cu lamă' }},
    { c:'7.2', t:'Posesia unei arme de foc de calibru mic fără permis PORT-ARMĂ', ty:'penal', p:{ m:'1.000-1.500$', ln:'75-100 luni' }},
    { c:'7.3', t:'Posesia unei arme de foc de calibru mare', ty:'penal', p:{ m:'1.500-3.000$', ln:'80-120 luni' }},
    { c:'7.4', t:'Îndreptarea unei arme de foc', ty:'penal', p:{ m:'250$', ln:'60-100 luni' }},
    { c:'7.5', t:'Descărcarea letală a unei arme de foc', ty:'penal', p:{ ln:'70-100 luni', x:'Fără scop de autoapărare' }},
    { c:'7.8', t:'Traficul de armament sau de muniție', ty:'penal', p:{ m:'5.000$', ln:'250-360 luni', x:'3+ arme și/sau 300+ gloanțe fără permis de vânzare' }, b:[
      { l:'Mențiune', k:'note', i:['Nu se cumulează cu alte acuzații din CAP. 7.']}
    ]}
  ]},

  { code:'CAP. 8', title:'Infracțiuni împotriva securității naționale', articles:[
    { c:'8.1', t:'Terorism', ty:'penal', p:{ x:'Spânzurarea suspectului' }},
    { c:'8.2', t:'Încălcarea regimului de securitate al statului', ty:'penal', p:{ m:'5.000$', ln:'120-200 luni' }},
    { c:'8.3', t:'Împiedicarea activităților guvernamentale', ty:'penal', p:{ m:'5.000$', ln:'120-250 luni' }},
    { c:'8.4', t:'Formarea unui grup paramilitar', ty:'penal', p:{ x:'Spânzurarea suspecților' }},
    { c:'8.5', t:'Acte de incitare la violență împotriva instituțiilor guvernamentale', ty:'penal', p:{ m:'5.000$', ln:'120-180 luni' }},
    { c:'8.6', t:'Falsificarea documentelor guvernamentale', ty:'penal', p:{ x:'Spânzurarea suspectului' }},
    { c:'8.7', t:'Spionaj', ty:'penal', p:{ m:'20.000$', ln:'60-100 luni', x:'Spânzurarea suspectului' }},
    { c:'8.8', t:'Sabotaj', ty:'penal', p:{ m:'30.000$', ln:'100-150 luni', x:'Spânzurarea suspectului' }},
    { c:'8.9', t:'Constituirea unui grup infracțional organizat', ty:'penal', p:{ m:'250.000-500.000$', ln:'250 luni', x:'Spânzurarea suspectului' }, b:[
      { l:'Mențiuni', k:'note', i:[
        '3+ persoane organizate.',
        'Colaborarea la aflarea adevărului reduce pedeapsa la jumătate.',
        'Nu se cumulează cu alte articole.'
      ]}
    ]},
    { c:'8.10', t:'Corupție', ty:'penal', p:{ m:'150.000-300.000$', ln:'250 luni', x:'Spânzurarea suspectului' }, b:[
      { l:'Mențiuni', k:'note', i:['Colaborarea reduce pedeapsa la jumătate.','Nu se cumulează cu alte articole.']}
    ]},
    { c:'8.11', t:'Pericol grav pentru siguranța publică', ty:'penal', p:{ x:'Spânzurarea suspectului' }, b:[
      { l:'Mențiuni', k:'note', i:[
        '10+ dosare penale = intrare automată pe Most Wanted, mandat de arestare.',
        'Colaborarea reduce pedeapsa la jumătate.',
        'Nu se cumulează cu alte articole.'
      ]}
    ]}
  ]}

  ]
},

{
  id:'afaceri', n:'7', icon:'🏪', title:'Regulament Afaceri',
  intro:'Cum se cumpără casele și afacerile, câte proprietăți poate deține un cetățean, programul obligatoriu cu angajat în locație și evenimentele săptămânale cerute proprietarilor.',
  chapters:[
  { code:'A', title:'Proprietăți și afaceri', articles:[
    { c:'A1', t:'Unde găsești casele', ty:'info', d:[
      'Toate casele sunt listate pe site-ul oficial. Pe Discord găsiți link-ul în canalul de shop.'
    ]},
    { c:'A2', t:'Achiziția afacerilor', ty:'permis', d:[
      'Afacerile pot fi cumpărate IC sau pot fi incluse în pachetele din shop.'
    ]},
    { c:'A3', t:'Limita de proprietăți', ty:'permis', d:[
      'Un cetățean are voie să dețină două proprietăți și o afacere.'
    ]},
    { c:'A4', t:'Angajat în locație (19:00-22:00)', ty:'obligatie', d:[
      'Aveți obligația ca, la afacere, în intervalul orar 19:00-22:00, să aveți cel puțin un angajat prezent în locație — minim o persoană, maxim câți doriți.'
    ], b:[
      { l:'Control', k:'note', i:['Verificarea este făcută de cei de la primărie, în frunte cu primarul.']}
    ], s:['Amendă.','Suspendarea afacerii.'], sn:'Se aplică dacă la control nu este găsită nicio persoană în locație.'},
    { c:'A5', t:'Evenimente săptămânale', ty:'obligatie', d:[
      'Proprietarii de afaceri au obligația să creeze săptămânal evenimente în locațiile lor.'
    ], s:['Amendă dublată — suma se dublează de fiecare dată când nu se organizează un eveniment.']}
  ]}
  ]
},

{
  id:'streameri', n:'8', icon:'🎥', title:'Regulament Streameri',
  intro:'Condițiile gradului de Streamer: exclusivitatea față de server, frecvența live-urilor, comportamentul față de comunitate și beneficiile oferite de Regal Land.',
  chapters:[
  { code:'S1', title:'Obligațiile streamerului', articles:[
    { c:'S1', t:'Fără ticket pentru informare din live', ty:'interzis', d:[
      'Este strict interzis să vă faceți ticket dacă cineva se informează din live în timp ce faceți lucruri ilegale.'
    ], b:[
      { l:'Mențiune', k:'note', i:['Aceste lucruri ilegale le puteți face și în afara programului de live.']}
    ]},
    { c:'S2', t:'Fără insistență pe roleplay', ty:'interzis', d:[
      'Este strict interzis să insistați pe roleplay cu persoane care nu mai pot dezvolta acțiunea.'
    ]},
    { c:'S5', t:'Conținut pentru urmăritori', ty:'obligatie', d:[
      'Oferă un conținut plăcut pentru urmăritorii tăi. Nu este suficient doar să te filmezi în timp ce te joci — interacționează cu publicul și oferă-le divertisment.'
    ]},
    { c:'S6', t:'Exclusivitate', ty:'obligatie', d:[
      'Oferă exclusivitate serverului nostru — nu vrem să vedem live-uri pe alte servere de RedM.'
    ], b:[
      { l:'Mențiune', k:'note', i:['Poți să te joci alte jocuri, dar vrem să vedem că ne ești fidel.']}
    ]},
    { c:'S7', t:'Live-uri regulate', ty:'obligatie', d:[
      'Minim 2 live-uri pe săptămână, de cel puțin 3 ore fiecare.'
    ], b:[
      { l:'De ce', k:'note', i:['Algoritmii platformelor de streaming capătă încredere în tine pentru a-ți livra spectatori.']}
    ]},
    { c:'S8', t:'Live-uri dedicate', ty:'obligatie', d:[
      'Toate live-urile anunțate în canalul de anunțuri live trebuie să fie realizate pe serverul nostru, fără a promova alte servere sau alte jocuri.'
    ]},
    { c:'S9', t:'Respect față de comunitate', ty:'interzis', d:[
      'Orice comportament denigrator la adresa comunității duce la pierderea gradului.'
    ], s:['Pierderea rolului de Streamer.']}
  ]},
  { code:'S2', title:'Beneficii', articles:[
    { c:'S3', t:'Cod promo', ty:'permis', d:[
      'Vă punem la dispoziție un cod promo (ex: REGAL) pe care jucătorii îl pot folosi pentru a primi -5% reducere la achiziția de pachete.'
    ]},
    { c:'S4', t:'Colaborare și recompense', ty:'permis', d:[
      'Acest grad îl oferim streamerilor de succes cu care ne dorim o colaborare apropiată. Oferim posibilitatea de a câștiga bani reali sau Gold în schimbul promovării serverului.'
    ]},
    { c:'S10', t:'Suport în roleplay', ty:'info', d:[
      'Oferim suport în roleplay-uri avansate.'
    ]}
  ]}
  ]
}
];

/* ============ HELPERS ============ */
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function escapeRegex(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function fold(s){ return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
function slug(s){ return fold(s).replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }

/* ============ KEYWORDS ============
   Ordinea contează: tiparele mai specifice trebuie să fie primele. */
const KEYWORDS = [
  /* --- sancțiuni dure --- */
  ['ban permanent fără drept de plată','kw-ban'],
  ['ban permanent','kw-ban'],
  ['banare permanentă','kw-ban'],
  ['banarea contului','kw-ban'],
  ['ban\\s+\\d+\\s*[-–]\\s*\\d+\\s*(?:de\\s+)?zile','kw-ban'],
  ['ban\\s+\\d+\\s*(?:de\\s+)?zile','kw-ban'],
  ['ban\\s+\\d+\\s*zi\\b','kw-ban'],
  ['ban-?uri','kw-ban'],
  ['\\bban\\b','kw-ban'],
  ['spânzur[\\wăâîșțşţ]*','kw-ban'],
  ['spanzur[\\wăâîșțşţ]*','kw-ban'],
  ['sentință\\s+\\d[\\d.]*(?:\\s*[-–]\\s*\\d[\\d.]*)?\\s*luni','kw-ban'],
  ['închisoare pe viață','kw-ban'],
  ['dosar penal','kw-ban'],
  ['dosare penale','kw-ban'],
  ['most wanted','kw-ban'],

  /* --- sancțiuni ușoare --- */
  ['warn-?uri','kw-warn'],
  ['mafia warn','kw-warn'],
  ['\\bwarn\\b','kw-warn'],
  ['amenda ic','kw-warn'],
  ['amendă ic','kw-warn'],
  ['amend[\\wăâîșțşţ]+','kw-warn'],
  ['\\d+\\s*[-–]\\s*\\d+\\s*minute jail','kw-warn'],
  ['\\d+\\s*minute jail','kw-warn'],
  ['\\bjail\\b','kw-warn'],
  ['\\bkick\\b','kw-warn'],
  ['confiscare','kw-warn'],
  ['confiscat[\\wăâîșțşţ]*','kw-warn'],

  /* --- bani --- */
  ['\\d[\\d.]*\\s*[-–]\\s*\\d[\\d.]*\\s*\\$','kw-money'],
  ['\\d[\\d.]*\\+?\\s*\\$','kw-money'],
  ['\\d+\\s*€','kw-money'],

  /* --- timp --- */
  ['\\d{1,2}\\s*:\\s*\\d{2}\\s*[-–]\\s*\\d{1,2}\\s*:\\s*\\d{2}','kw-time'],
  ['\\d{1,2}\\s*:\\s*\\d{2}','kw-time'],
  ['\\d+\\s*(?:de\\s+)?(?:minute|ore|zile|luni|săptămâni|săptămână)\\b','kw-time'],
  ['\\d+\\s*zi\\b','kw-time'],
  ['\\bzilnic\\b','kw-time'],

  /* --- excepții / permisiuni / interdicții --- */
  ['excepți[\\wăâîșțşţ]*','kw-exception'],
  ['fără permis[\\wăâîșțşţ]*','kw-forbid'],
  ['strict interzis[\\wăâîșțşţ]*','kw-forbid'],
  ['interzi[\\wăâîșțşţ]*','kw-forbid'],
  ['nu este permis[\\wăâîșțşţ]*','kw-forbid'],
  ['nu se permite','kw-forbid'],
  ['nu aveți voie','kw-forbid'],
  ['nu au voie','kw-forbid'],
  ['nu poate fi înlocuită','kw-forbid'],
  ['este permis[\\wăâîșțşţ]*','kw-allow'],
  ['sunt permis[\\wăâîșțşţ]*','kw-allow'],
  ['permis[\\wăâîșțşţ]*','kw-allow'],
  ['aveți voie','kw-allow'],
  ['are dreptul','kw-allow'],

  /* --- termeni de roleplay --- */
  ['toleranță zero','kw-term'],
  ['character kill','kw-term'],
  ['player-kill','kw-term'],
  ['revenge kill','kw-term'],
  ['meta ?gaming','kw-term'],
  ['power gaming','kw-term'],
  ['random death match','kw-term'],
  ['vehicle death match','kw-term'],
  ['low effort roleplay','kw-term'],
  ['fail ?rp','kw-term'],
  ['refuz rp','kw-term'],
  ['no[- ]fear','kw-term'],
  ['cop[- ]fear','kw-term'],
  ['cop[- ]bait','kw-term'],
  ['streamsnipe','kw-term'],
  ['olympic-swim','kw-term'],
  ['ninja-horse','kw-term'],
  ['car-ram','kw-term'],
  ['pit-stop','kw-term'],
  ['bug abuse','kw-term'],
  ['system abuse','kw-term'],
  ['ban evading','kw-term'],
  ['account sharing','kw-term'],
  ['freechat','kw-term'],
  ['bombardier','kw-term'],
  ['provoking','kw-term'],
  ['trolling','kw-term'],
  ['zon[aă] verde','kw-term'],
  ['zone(?:le)? verzi','kw-term'],
  ['zon[aă] roșie','kw-term'],
  ['drumuri roșii','kw-term'],
  ['zonă publică','kw-term'],
  ['zonă retrasă','kw-term'],
  ['sindicat[\\wăâîșțşţ]*','kw-term'],
  ['port guarma','kw-term'],
  ['guarma','kw-term'],
  ['blackwater','kw-term'],
  ['penitenciar[\\wăâîșțşţ]*','kw-term'],
  ['armatei','kw-term'],
  ['armata','kw-term'],
  ['mercenar[\\wăâîșțşţ]*','kw-term'],
  ['soldat[\\wăâîșțşţ]*','kw-term'],
  ['admin \\d\\+','kw-term'],
  ['\\bcaracter\\b','kw-term'],
  ['\\bcomă\\b','kw-term'],
  ['\\bcheat[\\wăâîșțşţ]*','kw-term'],
  ['\\bticket[\\wăâîșțşţ]*','kw-term'],
  ['\\btichet[\\wăâîșțşţ]*','kw-term'],
  ['\\bgold\\b','kw-term'],
  ['\\brespawn\\b','kw-term'],
  ['\\bOOC\\b','kw-term'],
  ['\\bIC\\b','kw-term'],
  ['\\bRP\\b','kw-term'],
  ['\\bPK\\b','kw-term'],
  ['\\bCK\\b','kw-term'],
  ['\\bRK\\b','kw-term'],
  ['\\bMG\\b','kw-term'],
  ['\\bMIX\\b','kw-term'],
  ['\\bRDM\\b','kw-term'],
  ['\\bVDM\\b','kw-term'],
  ['\\bPG\\b','kw-term'],
  ['\\bNF\\b','kw-term'],
  ['\\bCF\\b','kw-term'],
  ['\\bCB\\b','kw-term'],
  ['\\bLER\\b','kw-term'],
  ['\\bZT\\b','kw-term'],
  ['\\bTW\\b','kw-term'],
  ['\\bSAS\\b','kw-term']
];
const KW_PATTERNS = KEYWORDS.map(k => '(' + k[0] + ')');
const KW_CLASSES  = KEYWORDS.map(k => k[1]);
const KW_RE = new RegExp(KW_PATTERNS.join('|'), 'gi');

function decorate(text, tokens){
  const safe = escapeHtml(text);
  if(!tokens || !tokens.length){
    return safe.replace(KW_RE, function(match, ...rest){
      const caps = rest.slice(0, KW_CLASSES.length);
      const idx = caps.findIndex(g => g !== undefined);
      return idx === -1 ? match : '<span class="kw ' + KW_CLASSES[idx] + '">' + match + '</span>';
    });
  }
  const searchPatterns = tokens.map(t => '(' + escapeRegex(escapeHtml(t)) + ')');
  const all = searchPatterns.concat(KW_PATTERNS);
  const re = new RegExp(all.join('|'), 'gi');
  return safe.replace(re, function(match, ...rest){
    const caps = rest.slice(0, all.length);
    const idx = caps.findIndex(g => g !== undefined);
    if(idx === -1) return match;
    if(idx < searchPatterns.length) return '<mark>' + match + '</mark>';
    return '<span class="kw ' + KW_CLASSES[idx - searchPatterns.length] + '">' + match + '</span>';
  });
}

/* ============ ARTICLE RENDER ============ */
const TAGS = {
  interzis:'Interzis', obligatie:'Obligatoriu', permis:'Permis',
  info:'Definiție', penal:'Cod penal'
};
const STAR = '<svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.27 5.8 21 7 14.14l-5-4.87 7.1-1.01z"/></svg>';
const GAVEL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v6M9 5h6M6 22h12M8 22l1-8h6l1 8"/></svg>';

function articleText(a){
  let parts = [a.c, a.t];
  (a.d||[]).forEach(x => parts.push(x));
  (a.b||[]).forEach(bl => { parts.push(bl.l); bl.i.forEach(x => parts.push(x)); });
  (a.tr||[]).forEach(t => parts.push(t.k + ' ' + t.v));
  if(a.p) parts.push([a.p.m, a.p.ln, a.p.x].filter(Boolean).join(' '));
  (a.s||[]).forEach(x => parts.push(x));
  if(a.sn) parts.push(a.sn);
  return parts.join(' ');
}

function articleInner(a, tokens){
  const ty = a.ty || 'info';
  let h = '<div class="art-head">'
        + '<a class="art-code" href="#' + a._id + '">' + escapeHtml(a.c) + '</a>'
        + '<h3 class="art-title">' + decorate(a.t, tokens) + '</h3>'
        + '<span class="art-tag">' + (TAGS[ty] || 'Regulă') + '</span>'
        + '</div>';

  if(a.p){
    h += '<div class="penal-chips">';
    if(a.p.m)  h += '<span class="chip money"><span class="chip-k">Amendă</span>' + escapeHtml(a.p.m) + '</span>';
    if(a.p.ln) h += '<span class="chip time"><span class="chip-k">Sentință</span>' + escapeHtml(a.p.ln) + '</span>';
    if(a.p.x)  h += '<span class="chip extra">' + escapeHtml(a.p.x) + '</span>';
    h += '</div>';
  }

  (a.d||[]).forEach(p => { h += '<p class="art-def">' + decorate(p, tokens) + '</p>'; });

  if(a.tr){
    h += '<div class="tiers">';
    a.tr.forEach(t => {
      h += '<div class="tier"><span class="tier-k">' + escapeHtml(t.k) + '</span><span class="tier-v">' + decorate(t.v, tokens) + '</span></div>';
    });
    h += '</div>';
  }

  (a.b||[]).forEach(bl => {
    h += '<div class="blk b-' + (bl.k || 'ex') + '"><div class="blk-label">' + escapeHtml(bl.l) + '</div><ul>';
    bl.i.forEach(it => { h += '<li>' + decorate(it, tokens) + '</li>'; });
    h += '</ul></div>';
  });

  if(a.s && a.s.length){
    const multi = a.s.length > 1;
    h += '<div class="sanct"><div class="sanct-label">' + GAVEL + 'Sancțiuni</div><ul class="sanct-steps">';
    a.s.forEach((st, i) => {
      const chip = multi ? (i+1) : '●';
      h += '<li><span class="step' + (multi ? '' : ' dot') + '">' + chip + '</span><span>' + decorate(st, tokens) + '</span></li>';
    });
    h += '</ul>';
    if(a.sn) h += '<p class="sanct-sub">' + decorate(a.sn, tokens) + '</p>';
    h += '</div>';
  }
  return h;
}

/* ============ BUILD PAGE ============ */
const contentEl = document.getElementById('content');
const sideNav   = document.getElementById('sideNav');
let navHtml = '', contentHtml = '', totalArticles = 0, totalChapters = 0;

DATA.forEach(part => {
  let count = 0;
  part.chapters.forEach(ch => count += ch.articles.length);
  totalArticles += count;
  totalChapters += part.chapters.length;

  /* Secțiunile cu un singur capitol nu primesc submeniu — nu ar avea ce lista. */
  const multiCh = part.chapters.length > 1;

  navHtml += '<li class="part' + (multiCh ? '' : ' single') + '" data-part="' + part.id + '">'
    + '<a href="#' + part.id + '" data-cat="' + part.id + '"><span class="ico" aria-hidden="true">' + part.icon + '</span>'
    + '<span class="num">' + part.n + '.</span><span>' + part.title + '</span>'
    + '<span class="badge-count">' + count + '</span></a>';
  if(multiCh) navHtml += '<ul class="side-sub">';

  contentHtml += '<section class="part-sec" id="' + part.id + '">'
    + '<div class="part-head"><span class="part-icon" aria-hidden="true">' + part.icon + '</span>'
    + '<h2>' + part.title + '</h2>'
    + '<span class="part-count" data-total="' + count + '">' + count + (count === 1 ? ' articol' : ' articole') + '</span></div>'
    + '<p class="part-intro">' + part.intro + '</p>'
    + '<div class="part-divider"></div>';

  part.chapters.forEach((ch, ci) => {
    const chId = part.id + '-' + slug(ch.code + '-' + ch.title);
    if(multiCh) navHtml += '<li><a href="#' + chId + '">' + ch.code + ' · ' + ch.title + '</a></li>';

    contentHtml += '<div class="chapter" id="' + chId + '">';
    if(multiCh){
      contentHtml += '<div class="chapter-title"><span>' + ch.code + ' — ' + ch.title + '</span>'
        + '<span class="chapter-count"></span><span class="line"></span></div>';
    } else {
      contentHtml += '<span class="chapter-count solo"></span>';
    }
    if(ch.note) contentHtml += '<p class="chapter-note">' + decorate(ch.note, []) + '</p>';
    contentHtml += '<div class="articles">';

    ch.articles.forEach((a, ai) => {
      a._id = part.id + '-' + slug(a.c) + '-' + ai;
      contentHtml += '<article class="article t-' + (a.ty || 'info') + '" id="' + a._id + '">'
        + articleInner(a, [])
        + '</article>';
    });

    contentHtml += '</div>';
    if(ch.banner){
      contentHtml += '<div class="banner ' + ch.banner.type + '">' + STAR + '<p>' + ch.banner.text + '</p></div>';
    }
    contentHtml += '</div>';
  });

  navHtml += (multiCh ? '</ul>' : '') + '</li>';
  contentHtml += '</section>';
});

sideNav.innerHTML = navHtml;
contentEl.innerHTML = contentHtml;

/* index for search */
const INDEX = [];
DATA.forEach(part => part.chapters.forEach(ch => ch.articles.forEach(a => {
  INDEX.push({ a: a, el: document.getElementById(a._id), text: fold(articleText(a)) });
})));

/* ============ SEARCH ============ */
const searchInput = document.getElementById('searchInput');
const searchWrap  = document.getElementById('searchWrap');
const clearBtn    = document.getElementById('clearBtn');
const resultsCount= document.getElementById('resultsCount');
const noResults   = document.getElementById('noResults');
const allChapters = Array.from(document.querySelectorAll('.chapter'));
const allParts    = Array.from(document.querySelectorAll('.part-sec'));

function runSearch(){
  const raw = searchInput.value.trim();
  const tokens = fold(raw).split(/\s+/).filter(Boolean);
  const rawTokens = raw.toLowerCase().split(/\s+/).filter(Boolean);
  const active = tokens.length > 0;

  document.body.classList.toggle('is-searching', active);
  searchWrap.classList.toggle('has-value', active);

  let visible = 0;
  INDEX.forEach(rec => {
    const match = !active || tokens.every(t => rec.text.includes(t));
    rec.el.classList.toggle('hidden', !match);
    if(match){
      visible++;
      rec.el.innerHTML = articleInner(rec.a, active ? rawTokens : []);
    }
  });

  allChapters.forEach(ch => {
    const n = ch.querySelectorAll('.article:not(.hidden)').length;
    ch.style.display = (!active || n > 0) ? '' : 'none';
    const cEl = ch.querySelector('.chapter-count');
    if(cEl){
      if(active && n > 0){
        cEl.textContent = n + (n === 1 ? ' articol' : ' articole');
        cEl.classList.add('show');
      } else { cEl.classList.remove('show'); }
    }
  });

  allParts.forEach(p => {
    const n = p.querySelectorAll('.article:not(.hidden)').length;
    p.style.display = (!active || n > 0) ? '' : 'none';
    const cEl = p.querySelector('.part-count');
    if(cEl){
      cEl.textContent = active
        ? n + (n === 1 ? ' găsit' : ' găsite')
        : cEl.dataset.total + (cEl.dataset.total === '1' ? ' articol' : ' articole');
    }
  });

  if(active){
    resultsCount.textContent = visible + (visible === 1 ? ' articol găsit' : ' articole găsite');
    resultsCount.classList.add('show');
  } else {
    resultsCount.classList.remove('show');
  }
  noResults.classList.toggle('show', active && visible === 0);
}

searchInput.addEventListener('input', runSearch);
clearBtn.addEventListener('click', () => { searchInput.value=''; runSearch(); searchInput.focus(); });
document.addEventListener('keydown', (e) => {
  if(e.key === '/' && document.activeElement !== searchInput){ e.preventDefault(); searchInput.focus(); }
  if(e.key === 'Escape' && document.activeElement === searchInput){ searchInput.value=''; runSearch(); searchInput.blur(); }
});

/* ============ NAV STATE ============ */
const partLinks = Array.from(document.querySelectorAll('#sideNav .part > a'));
const partItems = Array.from(document.querySelectorAll('#sideNav .part'));
function setActivePart(id){
  partLinks.forEach(l => l.classList.toggle('active', l.dataset.cat === id));
  partItems.forEach(li => li.classList.toggle('open', li.dataset.part === id));
}
if(typeof IntersectionObserver !== 'undefined'){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(en => { if(en.isIntersecting) setActivePart(en.target.id); });
  }, { rootMargin:'-12% 0px -70% 0px', threshold:0 });
  allParts.forEach(p => observer.observe(p));
}
setActivePart(DATA[0].id);

/* ============ MOBILE SIDEBAR + TO TOP ============ */
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const overlay = document.getElementById('overlay');
const toTop = document.getElementById('toTop');
function closeSidebar(){ sidebar.classList.remove('open'); overlay.classList.remove('open'); }
menuToggle.addEventListener('click', () => { sidebar.classList.add('open'); overlay.classList.add('open'); });
overlay.addEventListener('click', closeSidebar);
sideNav.addEventListener('click', e => { if(e.target.closest('a')) closeSidebar(); });
window.addEventListener('scroll', () => { toTop.classList.toggle('show', window.scrollY > 700); }, {passive:true});
toTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
