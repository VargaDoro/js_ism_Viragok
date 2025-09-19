/* jelenitsukmeg kis kártyák formájába a virágok neveit és képeit
kell: objlista -> adat.js
      kepek mappa
      virag osztály -> egyetlen virág megjeleniése
      peldanyosit -> megjelenit.js */
import AdminViragokController from "./controller/AdminViragokController.js";

import ViragokController from "./controller/ViragokController.js";

new ViragokController()
new AdminViragokController()

document.getElementById("virag").addEventListener("click", () => {
  new ViragokController()
});

document.getElementById("admin").addEventListener("click", ()=>{
   new AdminViragokController()
})

/*window.addEventListener("kivalaszt", (event) => {
  console.log(event.detail);
});

window.addEventListener("torol", (event) => {
  console.log(event.detail);
})*/

/* legyenegy admin felület ahol táblázatan listázom a virágokat és ott legyen egy űrlap ahol virágokat tudok flvenni
minden virág mellett legyen egy törlés gomb is
osztályok:
AdminViragSor - egytlen egy virág a táblázatban
Adminviragok - táblázat összes sorral -ez példányosítja az AdminViragSor
main-ben példányosítjuk az AdminViragokat

Urlap - itt lenne a felvételi űrlap*/
