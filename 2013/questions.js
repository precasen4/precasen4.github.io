const questions = [
    {
        type: "exercicis",
        category: "energia",
        text: `<p>
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
        text: `Un motor asíncron de corrent altern té una velocitat de sincronisme de 1 500 min–1 quan
es connecta a una xarxa de tensió U = 230 V i freqüència f = 50 Hz. Si es connecta aquest
mateix motor a una xarxa de tensió U = 230 V i freqüència f = 60 Hz, quina velocitat de sincronisme tindrà?`,
        options: [
            { text: "1 250 min–1", value: "a" },
            { text: "1 500 min–1", value: "b" },
            { text: "1 800 min–1", value: "c" },
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
        text: `<p>
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
        text: `<p>
Una impressora 3D permet fabricar peces de plàstic a base d’anar dipositant capes horitzontals
de gruix e = 0,5 mm. S’alimenta amb un filament d’àcid polilàctic (PLA) de diàmetre
d = 3 mm i densitat ρ = 1 250 kg/m<sup>3</sup> que passa per un extrusor, on s’escalfa i es
prem perquè es dipositi adequadament.
</p>

<p>
Amb aquesta tecnologia es fabrica el sòlid massís de la figura. <strong>Determineu:</strong>
</p>

<p>
a) La massa, m, del sòlid construït. [1 punt]<br>
b) La longitud, L, del filament utilitzat. [1 punt]<br>
c) El nombre de capes que ha dipositat la impressora. [0,5 punts]
</p>


<img src="Exercici4_ajuda.png" alt="Imatge relacionada amb la resposta">`,  
        correctAnswer: "",  
        steps: `
            <img src="Exercici4.png" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    }, {
        type: "exercicis",
        category: "energia",
        text: `
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
];
