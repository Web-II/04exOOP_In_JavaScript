# Oefeningen Hoofdstuk 03 - OOP in JavaScript

## Oefening 1: Afrikaans dobbelen

### Omschrijving van de pagina

Dit is een vereenvoudigde versie van het _Afrikaans dobbelspel_. Meer hierover vind je op https://www.mamaplaneet.nl/leukste-dobbelspellen-voor-kinderen#Afrikaans_dobbelen

In het begin van het spel wordt gevraagd hoeveel _spelers_ deelnemen. Dan wordt de _naam_ van elke speler opgevraagd. Dit gebeurt via een prompt. Voorbeeld:

![dobbelAantalSpelers.PNG](/docs/images/dobbelAantalSpelersVragen.PNG 'Hoeveel spelers?')

![dobbelNaamSpelers.PNG](/docs/images/dobbelSpelerNaamIngeven.PNG 'Hoeveel spelers?')

Om beurt gooit een speler met _vijf dobbelstenen_. De speler verdient _punten_ volgens het aantal ogen van de dobbelstenen, enkel 1 en 5 leveren punten op.

- 1 = 100 punten
- 5 = 50 punten
- 2, 3, 4 en 6 = 0 punten

De eerste speler die _10.000_ punten behaalt wint het spel.
Een voorbeeld van de initiële scherm layout: speler Jan is aan zet

![janAanZet.PNG](/docs/images/janAanZet.PNG 'Jan aan zet')

Jan heeft de dobbelstenen gerold:

![janGerold.PNG](/docs/images/janGerold.PNG 'Jan heeft gerold')

Merk op dat de knop ‘Rol dobbelstenen’ nu de knop ‘Vogende speler’ is geworden.
Je kan steeds het scorebord raadplegen via de knop ‘Scorebord’:

![scorebord.PNG](/docs/images/scorebord.PNG 'Scorebord')

We bouwen het spel stap per stap op, volg de opgave...

### Opgave

1.  Declareer in <code>dobbel.js</code> een klasse **<code>Dobbelsteen</code>** met volgende properties/methodes:

    - <code>#aantalOgen</code>, een property met default waarde 1; voorzie een publieke getter
    - <code>rol()</code>, een methode die een random getal tussen 1 en 6 genereert voor <code>#aantalOgen</code>.
      <br></br>

2.  Declareer een functie <code>toHtml(dobbelsteen)</code> die een dobbelsteen object in de index pagina weergeeft.

    - in het <code>img-element</code> met id 1 geef je het juiste beeldje weer.
      - gebruik document.getElementById(...) om het juiste element op te halen.
      - geef het src-attribuut van dat element de waarde ‘images/DiceX.PNG’ waarbij X het aantalOgen van de dobbelsteen is.
        <br></br>

3.  Declareer een functie <code>init()</code>. In deze functie maak je een nieuwe Dobbelsteen aan en roep je <code>toHtml(dobbelsteen)</code> aan.
    <br></br>
4.  Zorg dat wanneer het <code>load</code> event van window afgevuurd wordt, de functie <code>init</code> aangeroepen wordt.
    <br></br>
5.  Als je <code>index.html</code> bekijkt krijg je nu één dobbelsteen te zien met aantalOgen gelijk aan 1.
    <br></br>
6.  Declareer een klasse **<code>Speler</code>** met volgende members:

    - <code>#aantalDobbelstenen</code>: private static variabele met waarde 5, voorzie een getter
    - <code>#naam</code>: de naam van de speler, wordt ingesteld via een parameter van de constructor; voorzie een getter
    - <code>#score</code>: de totale score van de reeds gespeelde beurten, voorzie een getter
    - <code>#dobbelstenen</code>: een array van dobbelstenen, voorzie een getter
    - <code>speel</code>: methode waarbij de <code>#aantalDobbelstenen</code> dobbelstenen worden gerold en de score wordt verhoogd volgens de domeinregels
    - <code>constructor</code>: na constructie van een Speler werd zijn naam correct ingesteld via de parameter, staat zijn score op 0, en bevat #dobbelstenen 5 (i.e. #aantalDobbelstenen) nieuwe Dobbelstenen <br></br>

7.  Pas de functie toHtml aan zodat deze nu een speler object kan weergeven: <code>toHtml(speler)</code>.

    - in de <code>img-elementen</code> toon je de waarde van elke dobbelsteen van de speler.
    - in het span element met id score zet je ‘Score = [de score van de speler]’ Maak gebruik van <code>document.getElementById</code> om de span op te halen, en gebruik de <code>innerHTML</code> property om de waarde van de span aan te passen.
      <br></br>

8.  Pas de <code>init</code> functie aan.

    - maak een nieuwe Speler aan en roep de methode `toHtml(speler)` aan
    - event handling: zorg dat wanneer er geklikt wordt op de knop “Rol dobbelstenen”, de dobbelstenen van de speler effectief gerold worden, en de methode toHtml aangeroepen wordt.
      <br></br>

9.  Als je <code>index.html</code> bekijkt krijg je de 5 dobbelstenen van de speler te zien met de score. Telkens je op “Rol dobbelstenen” klikt past het scherm zich aan.
    <br></br>

10. Declareer een klasse **<code>Spel</code>** met volgende properties:

    - <code>#spelers</code>: een array van Speler-objecten; de namen van de spelers worden via de `constructor` aangeleverd
    - <code>#spelerAanZet</code>: initieel de eerste speler uit de lijst van spelers; voorzie een getter
    - <code>aantalSpelers</code>: een getter die de lengte van de spelers-array retourneert
    - <code>heeftWinaar</code>: een getter die true retourneert indien 1 van de spelers een score heeft >= 10000 (tip: tijdens het testen van je spel wil je deze waarde waarschijnlijk iets lager zetten)
    - <code>scoreOverzicht</code>: een getter die een string retourneert met het overzicht van de spelers en hun score (zie afbeelding scorebord in de inleiding van de oefening)
    - <code>speel</code>: methode die, indien er nog geen winnaar is, de speel methode van de spelerAanzet aanroept
    - <code>bepaalVolgendeSpeler</code>: methode die, indien er nog geen winnaar is, de volgende spelerAanZet instelt (1 voor 1 komen de spelers aan beurt, na de laatste speler is de eerste speler weer aan de beurt)
      <br></br>

11. Pas de toHtml functie aan, zodat deze nu het spel kan weergeven: <code>toHtml(spel)</code>

    - in het element met id speler komt de tekst: <pre>Speler aan zet: [naamSpelerAanZet]</pre> gebruik hiervoor de innerHTML property van het element
    - in het element met id score komt op analoge manier <pre>Score = [scoreSpelerAanZet]</pre>
    - de vijf dobbelstenen van de spelerAanZet worden in de <code>img-elementen</code> getoond
    - indien het spel een winnaar heeft, geef je een <code>alert</code> en feliciteer je de winnaar bij naam
      <br></br>

12. Pas de <code>init</code> functie aan.

    - vraag via een <code>prompt</code> naar het aantal spelers
    - prompt naar de naam van elke speler en maak een array van Speler-objecten aan
    - maak een nieuw Spel-object aan, geef de net gemaakte spelers-array door
    - event-handling
      - wanneer op de “Rol dobbelstenen” knop wordt geklikt roep je de speel methode van spel aan en roep je nadien toHtml aan
      - wanneer op de knop “Scoreboard” wordt geklikt dan wordt in een alert het scoreOverzicht van spel getoond

    <br></br>

13. Je kan nu het spel spelen maar enkel de eerste speler van alle opgegeven spelers doet mee...
    <br></br>
14. Maak gebruik van het stukje code die je in commentaar in dobbelspel.js vindt. Dit stukje code moet uitgevoerd worden in de toHtml functie indien het spel geen winnaar heeft. Bekijk de code goed: er wordt gezorgd dat de knop (value en onclick event handler) zich aanpast en zo de correcte flow in de applicatie verzekert… Veel speelplezier!
    <br></br>
15. **Extra Modules**
    - Maak in de map AfrikaansDobbelen een submap <code>js_modules</code>. Zet in deze map elke klasse in een apart bestand. De logica (toHtml & init) plaats je in een bestand <code>main.js</code>. Zorg dat je de gepaste klassen exporteert/importeert. Pas de <code>index.html</code> zodat gebruik wordt gemaakt van de <code>main.js</code> module;

## Oefening 2: OXO

Vorm als eerste speler drie op een rij! Op een bord van 3x3 zetten twee spelers om beurt hun symbool (de ene speler speelt met het symbool X, de andere met symbool O. De winnaar is diegene die er als eerste erin slaagt om met zijn symbool een drie op een rij te vormen. Dit kan horizontaal, verticaal of diagonaal. Het spel kan ook eindigen in een gelijkspel. Dit gebeurt wanneer alle 9 vakjes van het bord een symbool bevatten, zonder dat er een drie op een rij is gevormd. De speler met symbool O mag het spel beginnen.

![oxoSpelvoorbeelden.PNG](/docs/images/oxoSpelvoorbeelden.PNG 'Voorbeelden')

De inhoud en opmaak zijn reeds voorzien in index.html en oxo.css. Er wordt gebruik gemaakt van drie afbeeldingen: wit.png, x.png en o.png. Initieel start je met een leeg bord en bevatten alle img- elementen de afbeelding wit.png.

![oxoStart.PNG](/docs/images/oxoStart.PNG 'Start')

We gaan stap voor stap gedrag aan onze pagina toevoegen.

1. Maak in de map ‘OXO’ een submap genaamd <code>js</code> aan en maak hierin een bestand <code>oxo.js</code> aan.
   <br></br>
2. Wijzig <code>index.html</code> zodat het script <code>oxo.js</code> geladen wordt wanneer de pagina in de browser geladen wordt. Geef aan dat oxo.js een module is.
   <br></br>
3. Maak in de submap js een bestand <code>spelbord.js</code> aan.
   Declareer in spelbord.js een klasse <code>Spelbord</code> met volgende members
   - <code>#bord</code>: in de constructor wordt een tweedimensionale array aangemaakt en aan <code>#bord</code> toegekend. Elk element van de array bevat <code>null</code>.
   - <code>plaatsSymbool(symbool, rij, kol)</code>: een methode die het symbool op de juiste plaats op <code>#bord</code> plaatst
   - exporteer de klasse
     <br></br>
4. Declareer in oxo.js een <code>init</code> functie. In de functie doe je het volgende:

   - maak een nieuw spelbord aan
   - haal alle img- elementen op en stop deze in een array, dit kan je als volgt doen
     <pre>const imgElementen = document.getElementsByTagName('img');</pre>
   - overloop deze array <code>imgElementenen</code> en definieer de onclick event handler voor elk element:
     - roep de methode plaatsSymbool aan van spelbord; als argument voor de parameter symbool geef je ‘O’ door, de argumenten voor de rij en kol parameters zal je uit het id van het <code>img-element</code> moeten halen.
     - denk eraan dat arrays in JavaScript 0-based zijn en dat de id’s van de <code>img-elementen</code> 1-based zijn.
     - stel het src-attribuut het <code>img-element</code> in op ‘images/O.png’
       <br></br>

5. Stel de <code>init</code> functie in als event handler voor het <code>load event</code> van window
   <br></br>
6. Je kan nu de index pagina laden in de browser en kan op een correcte manier (klik op vakje vult dat vakje met O), het bord volledig opvullen met het symbool O…

   ![oxoAlleenO.PNG](/docs/images/oxoAlleenO.PNG 'Start')
   <br></br>

7. Declareer in een nieuw bestand <code>spel.js</code> een klasse **<code>Spel</code>** met volgende properties
   - <code>#spelbord</code>: instantie van Spelbord, aan te maken in de constructor
   - <code>#tePlaatsenSymbool</code>: initieel ‘O’, voorzie een getter -<code> #geplaatsteSymbool</code>: initieel ‘X’, voorzie een getter
   - <code>#winnaarsSymbool</code>: initieel null, voorzie een getter
   - <code>plaatsSymbool(rij, kol)</code>: methode die het te <code>#plaatsenSymbool</code> op <code>rij</code>, <code>kolom</code> zet op het <code>spelbord</code> en nadien <code>#teplaatsenSymbool</code> en <code>#geplaatsteSymbool</code> swapt. Zorg dat dit niet gebeurt indien het bewuste vak op het spelbord niet vrij is. Voeg hiertoe een methode <code>isVrij(rij, kol)</code> toe aan Spelbord.
     <br></br>
8. Declareer een <code>toHtml(spel)</code> functie. In deze functie ga je de <code>innerHTML</code> van div-element met id message instellen: <pre>Speler [s] is aan de beurt</pre> waarbij [s] het tePlaatsenSymbool is
   <br></br>
9. Pas de <code>init</code> functie aan
   - instantieer een <code>Spel</code> ipv een <code>Spelbord</code>
   - zorg dat het <code>img-element</code> nu volgens het <code>geplaatsteSymbool</code> aangepast wordt (niet langer steeds een ‘O’)
   - roep de <code>toHtml</code> functie aan zodat er getoond wordt wie aan zet is.
     <br></br>
10. Je kan nu de index pagina laden in de browser en het bord afwisselend met X en O opvullen. Je ziet steeds wie aan de beurt is

    ![oxoIndex.PNG](/docs/images/oxoIndex.PNG 'Index')
    <br></br>

11. Finaliseer de klassen <code>Spelbord</code> en <code>Spel</code>.
    - <code>Spelbord</code>
      - voeg een methode <code>bevatDrieOpEenrij(symbool, rij, kol)</code> toe die retourneert of er al dan niet een drie op een rij wordt gevormd door het zetten van symbool op rij, kol
      - voeg een methode <code>isVolzet()</code> toe die retourneert of het bord al dan niet volledig opgevuld is
    - <code>Spel</code>
      - voeg een methode <code>isEindeSpel()</code> toe. Deze methode retourneert true als het bord volzet is of indien er een drie op een rij is gevormd
      - pas de methode <code>plaatsSymbool(…)</code> aan: er kan geen symbool geplaatst worden als het einde van het spel is bereikt; als het einde van het spel wordt bereikt bij het plaatsen van een symbool dan wordt het <code>winnaarsSymbool</code> ingesteld
        <br></br>
12. Pas de <code>toHtml</code> functie aan zodat afhankelijk van de toestand van het spel, de juiste message weergegeven wordt: volgende speler/gelijkspel/winnaar. Veel speelplezier!
    <br></br>
    ![oxoComplete.PNG](/docs/images/oxoComplete.PNG 'Complete')
