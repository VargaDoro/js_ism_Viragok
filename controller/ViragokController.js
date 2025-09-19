import ViragokModell from "../modell/ViragokModell.js";
import Viragok from "../view/public/Viragok.js";

export default class ViragokController {
  #viragokModell = {};
  #virag2Lista = [];
  #szElem;
  constructor() {
    this.#viragokModell = new ViragokModell();
    this.#virag2Lista = [...this.#viragokModell.getLista()];
    this.#szElem = document.querySelector("article");
    this.#szElem.innerHTML = "";
    new Viragok(this.#virag2Lista, this.#szElem);
    this.esemenykezelo()
  }

  esemenykezelo() {
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      console.log(this.#virag2Lista);
      this.#viragokModell.kedvencModosit(event.detail);
    });
  }
}
