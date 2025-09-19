export default class AdminViragSor {
  #adatObj = {};
  #szElem = "";
  constructor(adatObj, szElem) {
    this.#adatObj = adatObj;
    this.#szElem = szElem;
    this.megjelenit()
    this.torolGomb = document.getElementById(this.#adatObj.id)
    this.esemenytrigger()
  }

  megjelenit() {
    let html = `<tr>
                    <td scope="col">${this.#adatObj.id}</td>
                    <td scope="col">${this.#adatObj.nev}</td>
                    <td scope="col">
                        <button class="torol" id="${this.#adatObj.id}">🗑</button>
                    </td>
                </tr>`
    this.#szElem.insertAdjacentHTML("beforeend", html);
  }

  esemenytrigger() {
    /* ha rákattintunk a gombra kiváltunk egy saját eseményt */
    this.torolGomb.addEventListener("click", () => {
      let esemeny = new CustomEvent("torol", { detail: this.#adatObj.id });
      window.dispatchEvent(esemeny);
    });
  }
}
