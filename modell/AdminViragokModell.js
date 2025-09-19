import { viragLista } from "../adat.js";

export default class AdminViragokModell{
    #viragLista=[]
    constructor(){
        this.#viragLista = viragLista
    }

    getLista(){
        return JSON.parse(JSON.stringify(this.#viragLista));
    }

    torol(id){
        console.log(id)
        let obj = this.#viragLista.find((elem)=>elem.id==id)
        console.log(obj)
    }
}