/***********************************
Deze klasse vormt de lijm tussen ons domein (Dobbelsteen) en de HTML pagina
als de gebruiker iets wijzigt op de html pagina gaat het domein aangesproken worden en de
web pagina aangepast worden. Voorbeeld: de gebruiker rolt de dobbelsteen
De AfrikaansDobbelenComponent gaat de methode rol aanspreken in de domeinklasse Dobbelsteen
*/

export default class AfrikaansDobbelen {

}

/***************************************************************************************** */
/* onderstaand stukje code heb je pas in de laatste stap van de oefening nodig (zie opgave) */
/***************************************************************************************** */
// if (document.getElementById("play").value === "Rol dobbelstenen") {
//   document.getElementById("play").value = "Volgende speler";
//   document.getElementById("play").onclick = () => {
//     this.#spel.bepaalVolgendeSpeler();
//     this.toHtml();
//   };
// } else {
//   document.getElementById("play").value = "Rol dobbelstenen";
//   document.getElementById("play").onclick = () => {
//     this.#spel.speel();
//     this.toHtml();
//   };
// }