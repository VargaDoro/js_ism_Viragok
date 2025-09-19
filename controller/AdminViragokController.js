import AdminViragokModell from "../modell/AdminViragokModell.js";
import AdminViragok from "../view/admin/AdminViragok.js";

export default class AdminViragokController{
    #adminViragokModell = []
    #viragLista = []
    #szElem
    constructor(){
        this.#adminViragokModell = new AdminViragokModell()
        this.#viragLista = this.#adminViragokModell.getLista()
        this.#szElem = document.querySelector("article")
        this.#szElem.innerHTML = ""
        new AdminViragok(this.#viragLista, this.#szElem)
        this.esemenykezelo
    }

    esemenykezelo(){
        window.addEventListener("torol", (event)=>{
            console.log(event.detail)
            console.log(this.#viragLista)
            this.#adminViragokModell.torol(event.id)
        })
    }
}