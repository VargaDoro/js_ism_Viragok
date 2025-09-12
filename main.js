/* jelenitsukmeg kis kártyák formájába a virágok neveit és képeit
kell: objlista -> adat.js
      kepek mappa
      virag osztály -> egyetlen virág megjeleniése
      peldanyosit -> megjelenit.js */
import { viragLista } from "./adat.js";
import Viragok from "./Viragok.js";
import AdminViragok from "./AdminViragok.js";

document.getElementById("virag").addEventListener("click", () => {
  document.querySelector("article").innerHTML = " ";
  new Viragok(viragLista, document.querySelector("article"));
});

document.getElementById("admin").addEventListener("click", ()=>{
   document.querySelector("article").innerHTML = " ";
   new AdminViragok(viragLista, document.querySelector("article"))
})

window.addEventListener("kivalaszt", (event) => {
  console.log(event.detail);
});

window.addEventListener("torol", (event) => {
  console.log(event.detail);
})

/* legyenegy admin felület ahol táblázatan listázom a virágokat és ott legyen egy űrlap ahol virágokat tudok flvenni
minden virág mellett legyen egy törlés gomb is
osztályok:
AdminViragSor - egytlen egy virág a táblázatban
Adminviragok - táblázat összes sorral -ez példányosítja az AdminViragSor
main-ben példányosítjuk az AdminViragokat

Urlap - itt lenne a felvételi űrlap*/
