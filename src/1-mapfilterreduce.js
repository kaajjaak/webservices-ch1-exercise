const impacts = require('../datasets/meteor-impacts');
const courses = require('../datasets/courses');

// 🦉 Los alle oefeningen hieronder op zonder gebruik te maken van for/while lussen 🦉
// 🦉 Gebruik enkel forEach/map/filter/reduce en andere Array functies              🦉
// 🦉 Als je écht uitdaging wil, vermijd GitHub Copilot, e.d.                       🦉
// 🦉 Verwijder eventuele lege return-statements                                    🦉
// 🦉 Voer `yarn test` uit om jouw resultaten te controleren                        🦉

/**
 * Geef de namen van alle docenten terug door gebruik te maken van `forEach`.
 *
 * @returns {string[]}
 */
function oefening1() {
  const courseNames = [];

  // courses.forEach();

  return courseNames;
}

/**
 * Geef een array terug met enkel de { id, name } van alle courses door gebruik
 * te maken van `forEach`.
 *
 * @returns {{ id: number, name: string }[]}
 */
function oefening2() {
  let idNameArray = [];
  
  // courses.forEach();

  return idNameArray;
}

/**
 * De voorgaande problemen zijn typische voorbeelden waarbij we de `map` functie
 * zouden gebruiken. Herschrijf oefening2 met behulp van `map`.
 */
function oefening3() {
  // return courses.map();
  return [];
}

/**
 * Gebruik `forEach` om een array terug te geven met de courses die 3 uur per week duren.
 *
 * @returns {string[]}
 */
function oefening4() {
  return [];
}

/**
 * Hier is opnieuw een ingebouwde functie voor: `filter`. Herschrijf oefening4 met
 * behulp van `filter`.
 *
 * @returns {string[]}
 */
function oefening5() {
  // return courses.filter();
  return [];
}

/**
 * Het is ook mogelijk om meerdere functies te combineren. Gebruik `filter` en `map`
 * om een array terug te geven met enkel de namen van de courses die 3 uur per week
 * duren.
 *
 * @returns {string[]}
 */
function oefening6() {
  return [];
}

/**
 * Zowel `map` als `filter` werken op één item tegelijk, soms wil je een operatie
 * uitvoeren die meer, of alle, items in de lijst nodig heeft. Gebruik `forEach`
 * om de course met het grootste id terug te geven.
 *
 * @returns {{ id: number; name: string; hours: number; teacher: string; }}
 */
function oefening7() {
  return {};
}

/**
 * Hier is wederom een ingebouwde functie voor: `reduce`. Herschrijf oefening7 met
 * behulp van `reduce`.
 *
 * 💡 Hint: Start met een fictieve course met id 0 (en verder niets).
 *
 * @returns {{ id: number; name: string; hours: number; teacher: string; }}
 */
function oefening8() {
  return courses.reduce((acc, current) => {}, {});
}

/**
 * Gebruik `reduce` om de som van alle uren van alle courses te berekenen.
 *
 * @returns {number}
 */
function oefening9() {
  return 0;
}

// 🦉 Gebruik vanaf nu enkel `map`, `filter`, `reduce` om de oefeningen op 🦉
// 🦉 te lossen. Alles kan wel opgelost worden met `forEach`, maar dat is  🦉
// 🦉 niet de bedoeling van deze oefeningen.                               🦉
// 🦉                                                                      🦉
// 🦉 Het is mogelijk dat je hulpfuncties moet schrijven, of delen van een 🦉
// 🦉 oplossing kan hergebruiken in een andere oefening.                   🦉

/**
 * Gebruik `reduce` om de naam van de teacher van de course met het kleinste id
 * terug te geven.
 *
 * @returns {string}
 */
function oefening10() {
  // return courses.reduce();
  return "";
}

// 🦉 Gebruik de `impacts` dataset vanaf nu, niet meer de `courses` 🦉
/**
 * Geef het aantal meteorietinslagen terug die een geolocatie hebben.
 * Maak een helperfunctie voor de filter predicate.
 *
 * @returns {number}
 */
function oefening11() {
//  return impacts.filter();
 return 0;
}

/**
 * Geef een array terug met de namen van alle meteorietinslagen die geen
 * geolocatie hebben.
 * Maak een helperfunctie voor de filter predicate, hergebruik de functie
 * uit oefening11.
 */
function oefening12() {
  // return impacts.filter();
  return [];
}


// 🦉 In de theorie heb je geleerd wat currying is. Simpel gezegd, in plaats      🦉
// 🦉 van een functie met meerdere argumenten te maken, maak je een functie met   🦉
// 🦉 één argument, die een functie retourneert die een argument accepteert, enz. 🦉
// 🦉                                                                             🦉
// 🦉 Je zou het niet aanroepen als fn(a, b, c), maar eerder als fn(a)(b)(c).     🦉
// 🦉                                                                             🦉
// 🦉 Dit maakt de gedeeltelijke toepassing van de argumenten van een functie     🦉
// 🦉 mogelijk. Simpel gezegd kun je ofwel alle argumenten doorgeven die een      🦉
// 🦉 functie verwacht en het resultaat krijgen, ofwel een subset van die         🦉
// 🦉 argumenten doorgeven en een functie terugkrijgen die wacht op de rest van   🦉
// 🦉 de argumenten.                                                              🦉
// 🦉                                                                             🦉
// 🦉 Gebruik deze techniek in de volgende oefening(en)                           🦉

/**
 * Geef een array terug met de namen van alle meteorietinslagen die een grotere
 * massa hebben dan de meegegeven parameter.
 * 
 * 💡 Hint: je hebt parseInt() nodig om de massa te parsen naar een getal.
 *
 * @param {number} impactSize - De massa van de meteorietinslagen die je wil teruggeven
 *
 * @returns {string[]}
 */
function oefening13(impactSize) {
  return [];
}

/**
 * Geef een array terug met de namen van alle meteorietinslagen die na een bepaald
 * jaar gebeurd zijn.
 * Maak opnieuw een helperfunctie voor de filter predicate.
 *
 * @param {number} age - De leeftijd van de meteorietinslagen die je wil teruggeven
 *
 * @returns {string[]}
 */
function oefening14(age) {
  return [];
}

/**
 * Geef een object terug met het aantal meteorietinslagen per jaar, beginnend vanaf 1945,
 * en in de vorm { year: #impacts }. Bijvoorbeeld: { 1951: 2, 2012: 3, ... }
 *
 * @returns {{ [key: number]: number }}
 */
function oefening15() {
  return {};
}

/**
 * Geef terug of er meteorietinslagen zijn gebeurd na 2012 (retourneer `true` of `false`).
 * Gebruik een eerder gemaakte curried functie. Gebruik een ingebouwde Array functie
 * die je nog niet eerder hebt gebruikt.
 *
 * @returns {boolean}
 */
function oefening16() {
  return undefined;
}

/**
 * Geef terug of alle meteorietinslagen een geolocatie hebben (retourneer `true` of `false`).
 * Gebruik een eerder gemaakte curried functie. Gebruik een ingebouwde Array functie
 * die je nog niet eerder hebt gebruikt.
 *
 * @returns {boolean}
 */
function oefening17() {
  return undefined;
}

/**
 * Geef terug of er een meteorietinslag is met de meegegeven id (retourneer `true` of `false`).
 * Zorg ervoor dat je filter predicate herbruikbaar is. Gebruik `parseInt` om het id te parsen.
 *
 * @param {number} id - Het id van de meteorietinslag die je wil zoeken.
 *
 * @returns {boolean}
 */
function oefening18(id) {
  return undefined;
}

/**
 * Geef een array terug met alle ids (als numbers) van de meteorietinslagen, gesorteerd van
 * klein naar groot.
 *
 * @returns {number[]}
 */
function oefening19() {
  return [];
}

/**
 * Geef een array terug met de kleinste en grootste massa van de meteorietinslagen.
 * Gebruik `parseInt` om het id te parsen. Je mag sort() niet gebruiken!
 *
 * 💡 Let op: sommige massa's zijn niet gedefinieerd.
 * 
 * @returns {[number, number]}
 */
function oefening20() {
  return [];
}

//-------------------------------------------------------------------
//  🛑 NIETS WIJZIGEN 🛑
//
//  Onderstaande code exporteert alle functies zodat de testen deze
//  kunnen gebruiken.
//
//-------------------------------------------------------------------
module.exports = {
  oefening1,
  oefening2,
  oefening3,
  oefening4,
  oefening5,
  oefening6,
  oefening7,
  oefening8,
  oefening9,
  oefening10,
  oefening11,
  oefening12,
  oefening13,
  oefening14,
  oefening15,
  oefening16,
  oefening17,
  oefening18,
  oefening19,
  oefening20
};
