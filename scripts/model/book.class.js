export class book{
    constructor(){
        this.id = id,
        this.idUser = idUser,
        this.idModule = idModule,
        this.publisher = publisher,
        this.price = price,
        this.pages = pages,
        this.status = status,
        this.photo = photo,
        this.comments = comments,
        this.soldDate = soldDate
    }

    toString(){
        return `Id: ${this.id}, IdUser: ${this.idUser}, IdModule: ${this.idModule}, Publisher: ${this.publisher}, Price: ${this.price}, Pages: ${this.pages}, Status: ${this.status}, Photo: ${this.photo}, Comments: ${this.comments}, SoldDate: ${this.soldDate}`;
    }
}