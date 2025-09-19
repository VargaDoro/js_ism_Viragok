export default class Virag {
  /* egyetlen virág 
    adattagjai listának egy obj-a
    szelem*/
  #obj = {};
  #szElem = "";
  #gombElem;
  constructor(obj, szElem) {
    this.#obj = obj;
    this.#szElem = szElem;
    this.megjelenit();
    /* buttonra kattintva ki tudjam választani az adot virágot */
    this.#gombElem = document.getElementById(this.#obj.id);
    this.esemenytrigger();
  }

  megjelenit() {
    let txt = `
                <div class="card" style="width: 18rem;">
                    <img src="${this.#obj.kep}" class="card-img-top" alt="${
      this.#obj.nev
    }">
                    <div class="card-body">
                        <h5 class="card-title">${this.#obj.nev}</h5>
                        <a href="#" class="btn btn-primary" id = ${
                          this.#obj.id
                        }>Kiválaszt</a>
                    </div>
                </div>
        `;
    this.#szElem.insertAdjacentHTML("beforeend", txt);
  }

  esemenytrigger() {
    /* ha rákattintunk a gombra kiváltunk egy saját eseményt */
    this.#gombElem.addEventListener("click", () => {
      let esemeny = new CustomEvent("kivalaszt", { detail: this.#obj.id });
      window.dispatchEvent(esemeny);
    });
  }
}
