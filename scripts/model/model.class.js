export class model{
    constructor(){
        this.code = code;
        this.cliteral = cliteral;
        this.vliteral = vliteral;
        this.idCourse = idCourse;
    }

    toString(){
        return `Code: ${this.code}, cliteral: ${this.cliteral}, vliteral: ${this.vliteral}, IdCourse: ${this.idCourse}`;
    }
}