import Books from "../model/books.class";
import Modules from "../model/modules.class";
import Users from "../model/users.class";
import View from "../view/view.class";

export default class Controller{
    constructor(){
        this.books = new Books();
        this.modules = new Modules();
        this.users = new Users();

        this.vire = new View();
    }

    init(){
        this.books.populateData();
        this.modules.populateData();
        this.users.populateData();
        
    }
}