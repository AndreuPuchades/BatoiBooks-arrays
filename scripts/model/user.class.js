export default class user{
    constructor(){
        this.id = id;
        this.email = email;
        this.nick = nick;
    }

    toString(){
        return `Id: ${this.id}, Email: ${this.email}, Nick: ${this.nick}`;
    }
}