import AdminViragSor from "./AdminViragSor.js";

export default class AdminViragok {
  #lista = [];
  #szElem = "";
  constructor(lista, szElem) {
    this.#lista = lista;
    this.#szElem = szElem;
    this.megjelenit();
  }
  megjelenit() {
    let html = `<table class="table">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Név</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        
                    </tbody>
                </table>
    
    `;
    this.#szElem.insertAdjacentHTML("beforeend", html)
    let tBodyElem = document.querySelector("#tbody")
    this.#lista.forEach((elem, index) => {
      new AdminViragSor(elem, tBodyElem);
    });
  }
}
