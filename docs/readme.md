# Oefeningen Hoofdstuk 04 - OOP in JavaScript

## Oefening 1: Afrikaans dobbelen

### Omschrijving van de pagina

Dit is een vereenvoudigde versie van het _Afrikaans dobbelspel_. Meer hierover vind je op https://www.mamaplaneet.nl/leukste-dobbelspellen-voor-kinderen#Afrikaans_dobbelen

In het begin van het spel wordt gevraagd hoeveel _spelers_ deelnemen. Dan wordt de _naam_ van elke speler opgevraagd. Dit gebeurt via een prompt. Voorbeeld:

![dobbelAantalSpelers.PNG](./images/dobbelAantalSpelersVragen.PNG 'Hoeveel spelers?')

![dobbelNaamSpelers.PNG](./images/dobbelSpelerNaamIngeven.PNG 'Hoeveel spelers?')

Om beurt gooit een speler met _vijf dobbelstenen_. De speler verdient _punten_ volgens het aantal ogen van de dobbelstenen, enkel 1 en 5 leveren punten op.

- 1 = 100 punten
- 5 = 50 punten
- 2, 3, 4 en 6 = 0 punten

De eerste speler die _10.000_ punten behaalt wint het spel.
Een voorbeeld van de initiële scherm layout: speler Jan is aan zet

![janAanZet.PNG](./images/janAanZet.PNG 'Jan aan zet')

Jan heeft de dobbelstenen gerold:

![janGerold.PNG](./images/janGerold.PNG 'Jan heeft gerold')

Merk op dat de knop ‘Rol dobbelstenen’ nu de knop ‘Vogende speler’ is geworden.
Je kan steeds het scorebord raadplegen via de knop ‘Scorebord’:

![scorebord.PNG](./images/scorebord.PNG 'Scorebord')

We bouwen het spel stap per stap op, volg de opgave...

### Opgave

1.  Declareer in <code>Dobbelsteen.js</code> een klasse **<code>Dobbelsteen</code>** met volgende properties/methodes:

    - <code>#aantalOgen</code>, een property met default waarde 1; voorzie een publieke getter
    - <code>rol()</code>, een methode die een random getal tussen 1 en 6 genereert voor <code>#aantalOgen</code>.
      <br></br>

2.  De klasse **<code>AfrikaansDobbelenComponent</code>** vormt de lijm tussen ons domein (Dobbelsteen) en de HTML pagina. Als de gebruiker iets wijzigt op de html pagina gaat het domein aangesproken worden en de web pagina aangepast worden. Voorbeeld: de gebruiker klikt op de knop "rol dobbelsteen". De AfrikaansDobbelenComponent gaat de methode rol aanspreken in de domeinklasse Dobbelsteen. Deze klasse bevat volgende properties/methodes

    - <code>#dobbelsteen</code>, een property die de dobbelsteen bevat waarmee gespeeld zal worden
    - in de <code>constructor</code> maak je een nieuwe dobbelsteen aan en roep je de methode #toHtml aan zodat de dobbelsteen wordt weergegeven in de html pagina
    - de private methode <code>#toHtml</code> geeft het dobbelsteen object in de index pagina weer
      - in het <code>img-element</code> met id 1 geef je het juiste beeldje weer.
      - gebruik document.getElementById(...) om het juiste element op te halen.
      - geef het src-attribuut van dat element de waarde ‘images/DiceX.PNG’ waarbij X het aantalOgen van de dobbelsteen is.
        <br></br>

3.  Het bestand <code>index.js</code> is het startpunt van onze applicatie. De <code>init</code> methode start de applicatie op door
    - de klasse <code>AfrikaansDobbelenComponent</code> te importeren
    - een nieuwe <code>AfrikaansDobbelenComponent</code> aan te maken
      <br></br>
4.  Zorg dat wanneer het <code>load</code> event van window afgevuurd wordt, de functie <code>init</code> aangeroepen wordt. Deze code plaats je in <code>index.js</code>
    <br></br>
5.  Als je <code>index.html</code> bekijkt krijg je nu één dobbelsteen te zien met aantalOgen gelijk aan 1.
    <br></br>
6.  Declareer een klasse **<code>Speler</code>** in een aparte module met volgende members:

    - <code>#aantalDobbelstenen</code>: private static variabele met waarde 5, voorzie een getter
    - <code>#naam</code>: de naam van de speler, wordt ingesteld via een parameter van de constructor; voorzie een getter
    - <code>#score</code>: de totale score van de reeds gespeelde beurten, voorzie een getter
    - <code>#dobbelstenen</code>: een array van dobbelstenen, voorzie een getter
    - <code>constructor</code>: na constructie van een Speler werd zijn naam correct ingesteld via de parameter, staat zijn score op 0, en bevat #dobbelstenen 5 (i.e. #aantalDobbelstenen) nieuwe Dobbelstenen
    - <code>speel</code>: methode waarbij alle dobbelstenen uit `#dobbelstenen` worden gerold en de score wordt verhoogd volgens de domeinregels
      <br></br>

7.  Pas de klasse <code>AfrikaansDobbelenComponent</code> aan

    - verwijder de property <code>dobbelsteen</code>
    - voeg een private property <code>speler</code> toe
    - in de <code>constructor</code> maak je een nieuwe Speler aan.Geef de speler de naam Kirikou
    - in de <code>constructor</code> zorg je voor event handling. Wanneer er geklikt wordt op de knop “Rol dobbelstenen”, de dobbelstenen van de speler effectief gerold worden, en de methode toHtml aangeroepen wordt. Belangrijk: maak gebruik van een arrow functie. Het this keyword verwijst dan naar de instantie van de klasse.
    - pas de methode <code>#toHtml</code> aan zodat deze nu een speler object kan weergeven:
      - in de <code>img-elementen</code> toon je de waarde van elke dobbelsteen van de speler.
        - in het span element met id speler zet je ‘Speler = [de naam van de speler]’ Maak gebruik van <code>document.getElementById</code> om de span op te halen, en gebruik de <code>innerText</code> property om de waarde van de span aan te passen.
      - in het span element met id score zet je ‘Score = [de score van de speler]’ Maak gebruik van <code>document.getElementById</code> om de span op te halen, en gebruik de <code>innerText</code> property om de waarde van de span aan te passen.
        <br></br>

8.  Als je <code>index.html</code> bekijkt krijg je de 5 dobbelstenen van de speler te zien met de score. Telkens je op “Rol dobbelstenen” klikt past het scherm zich aan.
    <br></br>

9.  Declareer een klasse **<code>Spel</code>** met volgende properties:

    - <code>#spelers</code>: een array van Speler-objecten; de namen van de spelers worden via de `constructor` aangeleverd
    - <code>#spelerAanZet</code>: initieel de eerste speler uit de lijst van spelers; voorzie een getter
    - `constructor`: maak voor elke gegeven spelersnaam (parameter) een Speler-objectje en stop deze in de array `#spelers`
    - <code>aantalSpelers</code>: een getter die de lengte van de spelers-array retourneert
    - <code>heeftWinaar</code>: een getter die true retourneert indien 1 van de spelers een score heeft >= 10000 (tip: tijdens het testen van je spel wil je deze waarde waarschijnlijk iets lager zetten)
    - <code>scoreOverzicht</code>: een getter die een string retourneert met het overzicht van de spelers en hun score (zie afbeelding scorebord in de inleiding van de oefening)
    - <code>speel</code>: methode die, indien er nog geen winnaar is, de speel methode van de spelerAanzet aanroept
    - <code>bepaalVolgendeSpeler</code>: methode die, indien er nog geen winnaar is, de volgende spelerAanZet instelt (1 voor 1 komen de spelers aan beurt, na de laatste speler is de eerste speler weer aan de beurt)
      <br></br>

10. Pas de klasse <code>AfrikaansDobbelenComponent</code> aan

    - verwijder de property <code>#speler</code>
    - voeg een private property <code>#spel</code> toe
    - voeg een private methode #geefSpelers toe
      - vraag via een <code>prompt</code> naar het aantal spelers
      - prompt naar de naam van elke speler en maak een array met alle spelersnamen aan
      - return de net gemaakte array
    - de <code>constructor</code>:
      - maak een nieuw Spel object aan i.p.v. een Speler object. Om de spelers op te vragen maak je gebruik van de methode #geefSpelers
    - event-handling
      - wanneer op de “Rol dobbelstenen” knop wordt geklikt roep je de speel methode van spel aan en roep je nadien #toHtml aan
      - wanneer op de knop “Scoreboard” wordt geklikt dan wordt in een alert het scoreOverzicht van spel getoond
        <br></br>

11. Pas de #toHtml functie aan, zodat deze nu het spel kan weergeven: <code>#toHtml()</code>

    - in het element met id speler komt de tekst: <pre>Speler aan zet: [naamSpelerAanZet]</pre> gebruik hiervoor de innerText property van het element
    - in het element met id score komt op analoge manier <pre>Score = [scoreSpelerAanZet]</pre>
    - de vijf dobbelstenen van de spelerAanZet worden in de <code>img-elementen</code> getoond
    - indien het spel een winnaar heeft, geef je een <code>alert</code> en feliciteer je de winnaar bij naam en disable je de play knop
      <br></br>

12. Je kan nu het spel spelen maar enkel de eerste speler van alle opgegeven spelers doet mee...
    <br></br>
13. Maak gebruik van het stukje code die je in commentaar in AfrikaansDobbelenComponent.js vindt. Dit stukje code moet uitgevoerd worden in de #toHtml functie indien het spel geen winnaar heeft. Bekijk de code goed: er wordt gezorgd dat de knop (value en onclick event handler) zich aanpast en zo de correcte flow in de applicatie verzekert… Veel speelplezier!
    <br></br>

## Oefening 2: OXO

Vorm als eerste speler drie op een rij! Op een bord van 3x3 zetten twee spelers om beurt hun symbool (de ene speler speelt met het symbool X, de andere met symbool O. De winnaar is diegene die er als eerste erin slaagt om met zijn symbool een drie op een rij te vormen. Dit kan horizontaal, verticaal of diagonaal. Het spel kan ook eindigen in een gelijkspel. Dit gebeurt wanneer alle 9 vakjes van het bord een symbool bevatten, zonder dat er een drie op een rij is gevormd. De speler met symbool O mag het spel beginnen.

![oxoSpelvoorbeelden.PNG](./images/oxoSpelvoorbeelden.PNG 'Voorbeelden')

De inhoud en opmaak zijn reeds voorzien in index.html en oxo.css. Er wordt gebruik gemaakt van drie afbeeldingen: wit.png, x.png en o.png. Initieel start je met een leeg bord en bevatten alle img- elementen de afbeelding wit.png.

![oxoStart.PNG](./images/oxoStart.PNG 'Start')

We gaan stap voor stap gedrag aan onze pagina toevoegen.

1. Maak in de map ‘OXO’ een submap genaamd <code>js</code> aan en maak hierin een bestand <code>index.js</code> aan.
   <br></br>
2. Wijzig <code>index.html</code> zodat het script <code>index.js</code> geladen wordt wanneer de pagina in de browser geladen wordt. Geef aan dat index.js een module is.
   <br></br>
3. Maak in de submap <code>js</code> een bestand <code>Spelbord.js</code> aan.
   Declareer in Spelbord.js een klasse <code>Spelbord</code> met volgende members

   - <code>#bord</code>: in de constructor wordt een tweedimensionale array aangemaakt en aan <code>#bord</code> toegekend. Elk element van de array bevat <code>null</code>.Maak ook een getter aan.
   - <code>plaatsSymbool(symbool, rij, kol)</code>: een methode die het symbool op de juiste plaats op <code>#bord</code> plaatst
   - <code>geef( rij, kol)</code>: een methode die het symbool op in die rij en kolom op het bord teruggeeft
   - exporteer de klasse
     <br></br>

4. Maak in de submap js een bestand <code>OxoComponent.js</code> aan.
   Declareer in OxoComponent.js een klasse <code>OxoComponent</code> met volgende members

   - <code>#bord</code>: instantie van Spelbord, aan te maken in de constructor
   - maak een methode <code>#toHtml</code> aan. We voorzien de code later.
   - in de constructor
     - maak een instantie aan van het Spelbord en ken dit toe aan #bord
     - haal alle img- elementen op en stop deze in een array, dit kan je als volgt doen
     <pre>const imgElementen = document.getElementsByTagName('img');</pre>
     - overloop deze array <code>imgElementen</code> en definieer de onclick event handler voor elk element (gebruik de arrow functions):
       - roep de methode plaatsSymbool aan van spelbord; als argument voor de parameter symbool geef je ‘O’ door, de argumenten voor de rij en kol parameters zal je uit het id van het <code>img-element</code> moeten halen.
       - denk eraan dat arrays in JavaScript 0-based zijn en dat de id’s van de <code>img-elementen</code> 1-based zijn.
       - roep de methode <code>#toHtml</code> aan
   - roep de <code>#toHtml</code> methode aan
   - de methode <code>#toHtml</code>:
     - overloop alle rijen en kolommen van het bord. Voor elke cel (combinatie rij/kolom) haal je de bijhorende image op in de HTML pagina en stel je het src attribuut in. Als cel de waarde null bevat dan maak je gebruik van wit.png, anders van <code>symbool</code>.png
       <br></br>

5. Declareer in index.js een <code>init</code> functie. In de functie doe je het volgende:

   - maak een instantie van de OxoComponent aan
   - Stel de <code>init</code> functie in als event handler voor het <code>load event</code> van window
     <br></br>

6. Je kan nu de index pagina laden in de browser en kan op een correcte manier (klik op vakje vult dat vakje met O), het bord volledig opvullen met het symbool O…

   ![oxoAlleenO.PNG](./images/oxoAlleenO.PNG 'Start')
   <br></br>

7. Declareer in een nieuw bestand <code>Spel.js</code> een klasse **<code>Spel</code>** met volgende properties

   - <code>#spelbord</code>: instantie van Spelbord, aan te maken in de constructor
   - <code>#tePlaatsenSymbool</code>: initieel ‘O’, voorzie een getter
   - <code> #geplaatsteSymbool</code>: initieel ‘X’, voorzie een getter
   - <code>#winnaarsSymbool</code>: initieel null, voorzie een getter
   - <code>plaatsSymbool(rij, kol)</code>: methode die het te <code>#plaatsenSymbool</code> op <code>rij</code>, <code>kolom</code> zet op het <code>spelbord</code> en nadien <code>#teplaatsenSymbool</code> en <code>#geplaatsteSymbool</code> swapt. Zorg dat dit niet gebeurt indien het bewuste vak op het spelbord niet vrij is. Voeg hiertoe een methode <code>isVrij(rij, kol)</code> toe aan Spelbord.

- <code>geefSymbool(rij, kol)</code>: methode die het symbool uit de rij en kolom teruggeeft
  <br></br>

8. Pas de klasse <code>OxoComponent</code> aan.

   - vervang de private property #bord door #spel, een instantie van Spel aan te maken in de constructor
   - in de constructor
     - instantieer een <code>Spel</code> ipv een <code>Spelbord</code>
     - zorg dat het <code>img-element</code> nu volgens het <code>geplaatsteSymbool</code> aangepast wordt (niet langer steeds een ‘O’). Maak gebruik van plaatsSymbool uit klasse Spel
   - pas <code>#toHtml()</code> aan.

     - In deze functie ga je de <code>innerHTML</code> van div-element met id message instellen: <pre>Speler [s] is aan de beurt</pre> waarbij [s] het tePlaatsenSymbool is.

     - Bovendien vraag je nu het symbool per vakje op via het spel.
       <br></br>

9. Je kan nu de index pagina laden in de browser en het bord afwisselend met X en O opvullen. Je ziet steeds wie aan de beurt is

   ![oxoIndex.PNG](./images/oxoIndex.PNG 'Index')
   <br></br>

10. Finaliseer de klassen <code>Spelbord</code> en <code>Spel</code>.

    - <code>Spelbord</code>
      - voeg een methode <code>bevatDrieOpEenrij(symbool, rij, kol)</code> toe die retourneert of er al dan niet een drie op een rij wordt gevormd door het zetten van symbool op rij, kol
      - voeg een methode <code>isVolzet()</code> toe die retourneert of het bord al dan niet volledig opgevuld is
    - <code>Spel</code>
      - voeg een methode <code>isEindeSpel()</code> toe. Deze methode retourneert true als het bord volzet is of indien er een drie op een rij is gevormd
      - pas de methode <code>plaatsSymbool(…)</code> aan: er kan geen symbool geplaatst worden als het einde van het spel is bereikt; als het einde van het spel wordt bereikt bij het plaatsen van een symbool dan wordt het <code>winnaarsSymbool</code> ingesteld
        <br></br>

11. Pas de <code>#toHtml</code> functie in <code>OxoComponent</code> aan zodat afhankelijk van de toestand van het spel, de juiste message weergegeven wordt: volgende speler/gelijkspel/winnaar. Veel speelplezier!
    <br></br>
    ![oxoComplete.PNG](./images/oxoComplete.PNG 'Complete')
