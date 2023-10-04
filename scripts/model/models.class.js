import model from "./model.class";

export class models{
    constructor(){
        this.modelos = [];
    }

    populateData(array){
        array.forEach(modelo => {
            this.modelos.push(new book(code = modelo.code, cliteral = modelo.cliteral,  vliteral = modelo.vliteral,  idCourse = modelo.idCourse));
        });
    }

    addItem(modelNew) {
        if(modelNew instanceof model){
            this.modelos.push(modelNew);
        }
    }
    
    removeItem(string) {
        indice = modelos.findIndex(model => model.code == string);
        if(indice < 0){
            console.log("No existe un modelo con la id " + string);
            return {};
        } else {
            this.modelos.slice(indice, indice + 1);
        }
    }

    getItemByCode(string){
        modelo = modelos.find(model => model.code == string);
        if(modelo == undefined){
            console.log("No existe un modelo con la id " + string);
            return {};
        } else {
            return modelo;
        }
    }

    toString(){
        return `Existen en catalogo ${this.modelos.length} modelos.`;
    }
}