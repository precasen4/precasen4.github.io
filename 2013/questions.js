const questions = [
    {
        type: "exercicis",
        category: "energia",
        text: `
        <p>
El sistema d’alarma d’un habitatge consta de tres detectors de moviment instal·lats estratègicament per la casa.
L’alarma s’activa quan dos dels tres detectors, com a mínim, han detectat algun moviment.
Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
</p>

<p>
detector 1: d<sub>1</sub> = { 1: moviment detectat 
0: no detectat }
</p>

<p>
detector 2: d<sub>2</sub> = { 1: moviment detectat 
0: no detectat }
</p>

<p>
detector 3: d<sub>3</sub> = { 1: moviment detectat
0: no detectat }
</p>

<p>
alarma: a = { 1: activada 0: no activada }
</p>

<p>
<strong> a) </strong> Escriu la taula de veritat del sistema. [1 punt]
</p>

<p>
<strong> c) </strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la.
[1 punt]
</p>

<p>
<strong> c) </strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
</p>

               `, 
        correctAnswer: "",  
        steps: `
            <img src="exercici2.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "questions", 
        category: "geometria",
        text: `Un cargol M20 × 2,5 normalitzat té un diàmetre exterior de 20 mm i un pas de 2,5 mm. Si es cargola en una femella fixa, quantes voltes ha de donar per a avançar 5 mm?`,
        options: [
            { text: "4", value: "a" },
            { text: "2", value: "b" },
            { text: "8π", value: "c" },
            { text: "4π", value: "d" }
        ],
        correctAnswer: "b",
    },
    {
        type: "questions",
        category: "materials",
        text: `L’aliatge de Devarda conté un 49 % de coure (Cu), un 5 % de zinc (Zn) i alumini (Al).
Amb 325,5 kg d’alumini, quina quantitat d’aliatge podem obtenir?`,
        options: [
            { text: "149,7 kg", value: "a" },
            { text: "638,2 kg", value: "b" },
            { text: "707,6 kg", value: "c" },
            { text: "166,0 kg", value: "d" }
        ],
        correctAnswer: "c",
    },{
        type: "questions",
        category: "electrics",
        text: `El procés d’obtenció d’una peça requereix dues operacions que duren respectivament
14 s i 12 s. Si es vol obtenir una peça cada 6 s quan el procés funcioni en règim estacionari al
màxim rendiment, quantes màquines es necessiten per a dur a terme cada operació?`,
        options: [
            { text: "1 màquina per a la primera operació i 2 màquines per a la segona operació.", value: "a" },
            { text: "2 màquines per a la primera operació i 3 màquines per a la segona operació.", value: "b" },
            { text: "2 màquines per a la primera operació i 2 màquines per a la segona operació.", value: "c" },
            { text: "3 màquines per a la primera operació i 2 màquines per a la segona operació.", value: "d" }
        ],
        correctAnswer: "d",
    },{
        type: "questions",
        category: "motors",
        text: `
        
        Un motor asíncron de corrent altern té una velocitat de sincronisme de 1 500 min<sup>-1</sup> quan
es connecta a una xarxa de tensió U = 230 V i freqüència f = 50 Hz. Si es connecta aquest
mateix motor a una xarxa de tensió U = 230 V i freqüència f = 60 Hz, quina velocitat de sincronisme tindrà?`,
        options: [
            { text: "1 250 min<sup>-1</sup>", value: "a" },
            { text: "1 500 min<sup>-1</sup>", value: "b" },
            { text: "1 800 min<sup>-1</sup>", value: "c" },
            { text: "No es pot determinar sense saber el lliscament relatiu", value: "d" }
        ],
        correctAnswer: "c",
    },{
        type: "questions",
        category: "energia",
        text: `Una joguina s’alimenta amb dues piles AA de capacitat de càrrega c = 2 100 mA h que
proporcionen una tensió U = 1,5 V. Les piles es connecten en sèrie de manera que proporcionen una tensió de 3 V a la joguina. Quina és l’energia elèctrica que té la joguina per a funcionar?`,
        options: [
            { text: "3,15 W h", value: "a" },
            { text: "6,3 W h", value: "b" },
            { text: "9,45 W h", value: "c" },
            { text: "12,6 W h", value: "d" }
        ],
        correctAnswer: "b",
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
        <h5>Opció A</h5>
        <p>
Un grup electrogen de gas natural està format per un motor i un alternador elèctric trifàsic
de factor de potència cos φ = 0,8. L’alternador està unit directament a l’eix del motor. El
full de característiques del grup dóna, entre altres, les dades nominals següents:
</p>

<p>
<strong>Potència elèctrica:</strong> P<sub>e</sub> = 32 kW<br>
<strong>Tensió:</strong> U = 230 V<br>
<strong>Factor de potència:</strong> cos φ = 0,8<br>
<strong>Velocitat de gir:</strong> n = 1 500 min<sup>−1</sup><br>
<strong>Potència del motor:</strong> P<sub>motor</sub> = 36 kW<br>
<strong>Consum específic del motor:</strong> c<sub>e</sub> = 383 g/(kW h)
</p>

<p>
El poder calorífic del gas natural és p<sub>c</sub> = 31 MJ/kg. Determineu:
</p>

<p>
<strong>a)</strong> El rendiment de l’alternador, η<sub>alternador</sub>. [0,5 punts]<br>
<strong>b)</strong> El rendiment del motor, η<sub>motor</sub>. [1 punt]<br>
<strong> c)</strong> La intensitat que subministra l’alternador (recordeu que per al corrent trifàsic
P<sub>e</sub> = U I cos φ). [0,5 punts]<br>
<strong> d)</strong> L’energia dissipada en t = 4 h de funcionament. [0,5 punts]
</p>`,  
        correctAnswer: "",  
        steps: `
            <img src="Exercici3.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
        <h5> Opció A </h5>
        <p>
Una impressora 3D permet fabricar peces de plàstic a base d’anar dipositant capes horitzontals
de gruix e = 0,5 mm. S’alimenta amb un filament d’àcid polilàctic (PLA) de diàmetre
d = 3 mm i densitat ρ = 1 250 kg/m<sup>3</sup> que passa per un extrusor, on s’escalfa i es
prem perquè es dipositi adequadament.
</p>

<p>
Amb aquesta tecnologia es fabrica el sòlid massís de la figura. <strong>Determineu:</strong>
</p>

<p>
<strong> a) </strong>La massa, m, del sòlid construït. [1 punt]<br>
<strong> b) </strong>La longitud, L, del filament utilitzat. [1 punt]<br>
<strong> c) </strong>El nombre de capes que ha dipositat la impressora. [0,5 punts]
</p>


<img src="Exercici4_ajuda.png" alt="Imatge relacionada amb la resposta">`,  
        correctAnswer: "",  
        steps: `
            <img src="Exercici4.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    }, {
        type: "exercicis",
        category: "energia",
        text: `
        <h6>Opció B</h6>
        <p>
                <img src="Exercici3b.png" alt="Imatge relacionada amb la resposta">
</p>
<p>
La plataforma elevadora de tisora de la figura s’utilitza per a elevar un vehicle de massa
m = 1 500 kg mitjançant l’acció de dos cilindres hidràulics que actuen en paraŀlel. Els cilindres
tenen un diàmetre interior d<sub>int</sub> = 100 mm i el diàmetre de la tija és d<sub>tija</sub> = 62 mm.
</p>

<p>
La plataforma funciona per a valors 0 mm &lt; h &lt; 1 150 mm i, per a aquest rang de funcionament,
la relació entre la velocitat d’allargament del cilindre, v<sub>cil</sub>, i la velocitat d’elevació del vehicle,
v<sub>veh</sub>, és aproximadament:
</p>

<p>
<img src="Exercici3b_ajut2.png"> amb h en mm.
</p>

<p>
<strong> a)</strong>  Dibuixeu, de manera aproximada i indicant les escales, la relació v<sub>cil</sub>/v<sub>veh</sub> en funció de
h per a 0 mm &lt; h &lt; 1 150 mm. [1 punt]
</p>

<p>
Si les resistències passives es consideren negligibles i el vehicle puja a velocitat constant,
<strong>determineu, quan h = 800 mm:</strong>
</p>

<p>
<strong> b) </strong> La força, F<sub>cil</sub>, que fa el conjunt dels dos cilindres. [1 punt]<br>
<strong> c) </strong> La pressió relativa, p<sub>int</sub>, a l’interior dels cilindres. [0,5 punts]
</p>

               `, 
        correctAnswer: "",  
        steps: `
            <img src="exercici3b_solucio.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
        <h6>Opció B</h6>
       
<p>
L’eixugaparabrises d’un vehicle està accionat per un motor reductor de rendiment global
η<sub>tot</sub> = 0,36. El motor reductor està format per un motor elèctric de rendiment η<sub>mot</sub> = 0,86 i un
reductor de vis sens fi de relació de transmissió τ = ω<sub>s</sub>/ω<sub>e</sub> = 1/36. El motor s’alimenta amb una tensió U = 12 V i, en règim de funcionament nominal, 
consumeix una intensitat I = 2,2 A quan l’eix de sortida del reductor gira a n<sub>s</sub> = 29,2 min<sup>–1</sup>. Determineu:
</p>

<p>
<strong> a)</strong>  La potència, P<sub>motor</sub>, i el parell, Γ<sub>motor</sub>, a l’eix de sortida del motor. [1 punt]<br>
<strong> b) </strong> La potència, P<sub>sortida</sub>, i el parell, Γ<sub>sortida</sub>, a l’eix de sortida del reductor. [1 punt]<br>
<strong> c) </strong> El rendiment, η<sub>red</sub>, del reductor.  [0,5 punts]
</p>

               `, 
        correctAnswer: "",  
        steps: `
            <img src="Exercici4b_solucio.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },    
    {
        type: "exercicis",
        category: "energia",
        text: `
        <p>
Es defineix un sistema per a determinar el signe de la multiplicació de tres nombres enters.
Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
</p>

<p>
<strong>Primer nombre:</strong> x<sub>1</sub> = {1: positiu 0: negatiu}
</p>

<p>
<strong>Segon nombre:</strong> x<sub>2</sub> = {1: positiu 
0: negatiu}
</p>

<p>
<strong>Tercer nombre:</strong> x<sub>3</sub> = {1: positiu 
0: negatiu}
</p>

<p>
<strong>Resultat:</strong> r = {1: positiu 
0: negatiu}
</p>

<p>
<strong> a) </strong> Escriviu la taula de veritat del sistema. [1 punt]
</p>

<p>
<strong> b) </strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la.
[1 punt]
</p>

<p>
<strong> c) </strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
</p>

               `, 
        correctAnswer: "",  
        steps: `
            <img src="Exercici2_exam2.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },{
        type: "questions", 
        category: "materials",
        text: `El duralumini és un aliatge d’alumini que conté un 4 % de coure (Cu), un 0,5 % de
manganès (Mn) i un 1 % de ferro (Fe). Quina quantitat d’alumini pur (Al) cal per a obtenir
800 kg d’aliatge?`,
        options: [
            { text: "756 kg", value: "a" },
            { text: "764 kg", value: "b" },
            { text: "788 kg", value: "c" },
            { text: "760 kg", value: "d" }
        ],
        correctAnswer: "a",
    },
    {
        type: "questions",
        category: "materials",
        text: `Es vol substituir un cable de coure de 25 m de llargària per un altre cable d’acer inoxidable de la mateixa secció. La resistivitat del coure és ρCu = 0,017 μΩ m i la de l’acer inoxidable és ρinox = 0,78 μΩ m. Quina llargària ha de tenir el cable d’acer inoxidable perquè ofereixi
la mateixa resistència que el de coure?`,
        options: [
            { text: "0,5449 m", value: "a" },
            { text: "32,05 m", value: "b" },
            { text: "1 147 m", value: "c" },
            { text: "0,4250 m", value: "d" }
        ],
        correctAnswer: "a",
    },{
        type: "questions",
        category: "motors",
        text: `Quina és la velocitat de sincronisme d’un motor asíncron de corrent altern de quatre
parells de pols, que està connectat a la xarxa de tensió U = 230 V i freqüència f = 50 Hz?`,
        options: [
            { text: "1 500 min<sup>-1</sup>", value: "a" },
            { text: "1 350 min<sup>-1</sup>", value: "b" },
            { text: "750 min<sup>-1</sup>", value: "c" },
            { text: "675 min<sup>-1</sup>", value: "d" }
        ],
        correctAnswer: "c",
    },{
        type: "questions",
        category: "motors",
        text: `El procés d’obtenció d’una peça requereix tres operacions que duren respectivament
17 s, 31 s i 12 s. Es disposa d’una màquina per a realitzar la primera operació, de dues per a
la segona i d’una per a la tercera. En règim estacionari, i amb la línia funcionant al màxim
rendiment, cada quant de temps surt una unitat de la línia?`,
        options: [
            { text: "31 s", value: "a" },
            { text: "17 s", value: "b" },
            { text: "60 s", value: "c" },
            { text: "15,5 s", value: "d" }
        ],
        correctAnswer: "b",
    },{
        type: "questions",
        category: "energia",
        text: `El velocímetre d’un automòbil pot marcar una velocitat fins a un 10 % per sobre de la
real a què avança el vehicle, i en cap cas no pot marcar una velocitat menor a la real. Si s’està
circulant i el velocímetre indica una velocitat de 114 km/h, la velocitat real del vehicle està
compresa entre`,
        options: [
            { text: "114 km/h i 126,7 km/h.", value: "a" },
            { text: "103,6 km/h i 126,7 km/h.", value: "b" },
            { text: "110 km/h i 114 km/h.", value: "c" },
            { text: "103,6 km/h i 114 km/h.", value: "d" }
        ],
        correctAnswer: "d",
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
        <h5>Opció A</h5>
        <img src="Exercici3b_ajut2_exam2.png" alt="Imatge relacionada amb la resposta">
        <p>
La figura mostra l’esquema elèctric d’una estufa amb dues resistències iguals que es
poden connectar de dues maneres diferents segons la posició del commutador.
</p>

<p>
<strong>a)</strong> Dibuixeu, de manera independent i simplificada, sense commutador ni fils innecessaris, les dues configuracions possibles.  [1 punts]<br>
<p> Amb els valors que apareixen en el dibuix, determineu per a cadascuna de les configuracions: </p>
<strong>b)</strong>  La resistència equivalent del conjunt de les dues resistències, R<sub>1</sub> i R<sub>2</sub>. [1 punt]<br>
<strong> c)</strong> La potència consumida per l’estufa, P<sub>1</sub> i P<sub>2</sub>.  [0,5 punts]<br>
</p>`,  
        correctAnswer: "",  
        steps: `
            <img src="Exercici3_exam2.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
        <h5> Opció A </h5>
        <p>Una caldera domèstica produeix aigua calenta mitjançant la combustió de pèŀlets (biomassa) de poder calorífic p<sub>pèŀlets</sub> = 17,25 MJ/kg. La caldera té un rendiment η = 0,90, una
potència útil mínima P<sub>mín</sub> = 4,4 kW i una potència útil màxima P<sub>màx</sub> = 25 kW. En l’habitatge on
s’utilitza, s’estima un consum energètic anual E<sub>anual</sub> = 92 600 MJ. Determineu:
</p>

<p>
<strong> a) </strong> La potència mitjana consumida, P<sub>cons</sub>.  [0,5 punt]<br>
<strong> b) </strong> El consum de pèŀlets c<sub>mín</sub> i c<sub>màx</sub>, en kg/h, per a les potències mínima i màxima.  [1 punt]<br>
<strong> c) </strong> El percentatge de temps que haurà estat en funcionament la caldera al cap de l’any si
sempre treballa amb un consum de pèŀlets c = 3,7 kg/h.  [1 punts]
</p>`,  
        correctAnswer: "",  
        steps: `
            <img src="Exercici4_exam2.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    }, {
        type: "exercicis",
        category: "energia",
        text: `
        <h6>Opció B</h6>
       
<p>
El parell resistent d’una màquina és Γ<sub>màq</sub> = a + b n, amb a = 5 Nm i b = 1,5 × 10–3 Nm min<sup>-1</sup>.
Per a moure aquesta màquina, se selecciona un motor elèctric de rendiment η = 0,68 que proporciona un parell constant Γ<sub>mot</sub> = 9 Nm i una potència útil entre 1,2 kW i 5 kW.
</p>


<p>
<strong> a)</strong>  Determineu les velocitats mínima, n<sub>1</sub>, i màxima, n<sub>2</sub>, de rotació del motor. [1 punt]<br>
<strong> b) </strong> Dibuixeu, indicant-ne les escales, la corba característica parell resistent-velocitat de
rotació de la màquina en el marge de funcionament del motor.  [0,5 punt]<br>
<strong> c) </strong> Determineu la velocitat de funcionament, n<sub>nom</sub>, en min<sup>-1</sup>, en règim estacionari, del
conjunt motor i màquina. [0,5 punts]<br>
<strong> d) </strong> Determineu l’energia elèctrica consumida, E<sub>cons</sub>, en kW h, si funciona durant un
temps t = 3 h en règim estacionari. [0,5 punts]
</p>

               `, 
        correctAnswer: "",  
        steps: `
            <img src="Exercici3B_exam2.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
        <h6>Opció B</h6>
        <p>
                <img src="Exercici4_exam2_ajut.png" alt="Imatge relacionada amb la resposta">
</p>
<p>
Una gandula de jardí pot situar el respatller OQ en dues posicions mitjançant una barra
de longitud h = 300 mm, que recolza a A o a B, que aplica una força vertical F sobre el punt
P. Es considera que la massa conjunta del respatller i del tronc de la persona que hi jeu és
m = 50 kg i que el centre de masses és el punt mitjà del respatller G.
</p>

<p>
<strong> a)</strong> Dibuixeu el diagrama de cos lliure del respatller. [0,5 punt] <br>
<strong> b) </strong> Determineu la força vertical, F<sub>V</sub>, i la força horitzontal, F<sub>H</sub>, a l’articulació O.  [1 punt]<br>
<strong> c) </strong> Determineu quin serà l’angle φ per a les dues posicions (A i B) de la barra de 300 mm,
que es manté sempre vertical.  [1 punts]
</p>

               `, 
        correctAnswer: "",  
        steps: `
            <img src="Exercici4b_solucio_exam2.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },   
];
