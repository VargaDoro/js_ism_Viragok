import Virag from "./Virag.js";

export default class Viragok {
  #lista = [];
  #szElem = "";
  constructor(lista, szElem) {
    this.#lista = lista;
    this.#szElem = szElem;
    this.megjelenit();
  }
  megjelenit() {
    this.#lista.forEach((elem, index) => {
      new Virag(elem, this.#szElem);
    });
  }
}
