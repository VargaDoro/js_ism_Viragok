import { viragLista } from "../adat.js";

export default class ViragokModell {
  #viragLista = [];
  constructor() {
    this.#viragLista = viragLista;
  }

  getLista() {
    return JSON.parse(JSON.stringify(this.#viragLista));
  }

  kedvencModosit(id) {
    console.log(id);
    let obj = this.#viragLista.find((elem) => elem.id == id);
    obj.kedvenc = true;
    console.log(this.#viragLista);
  }
}
