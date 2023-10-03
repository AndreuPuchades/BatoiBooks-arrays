import user from "./user.class";

export default class users{
    constructor(){
        this.usuarios = [];
    }

    populateData(){
        array.forEach(usuario => {
            this.usuarios.push(new book(id = usuario.id, email = usuario.email,  nick = usuario.nick));
        });
    }

    addItem(userNew) {
        if(userNew instanceof user){
            this.users.push(userNew);
        }
    }
    
    removeItem(number) {
        indice = this.usuarios.findIndex(user => user.id === number);
        if(indice < 0){
            console.log("No existe un usuario con la id " + number);
        } else {
            this.users.slice(indice, indice + 1);
        }
    }

    getItemById(number){
        usuario = this.usuarios.find(user => user.id === number);
        if(usuario < 0){
            console.log("No existe un usuario con la id " + number);
        } else {
            return usuario;
        }
    }

    toString(){
        return `Existen en catalogo ${this.usuarios.length} usuarios.`;
    }
}