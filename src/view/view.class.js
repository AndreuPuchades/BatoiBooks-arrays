export default class View {
    constructor(){
        this.list = document.getElementById("list");

    }

    renderOptionsModules(modules){
        const DOMselect = document.getElementById("id-module");
        modules.forEach((module) => {
            const DOMoption = document.createElement("option");
            DOMoption.textContent = module.cliteral;
            DOMoption.value = module.code;

            DOMselect.appendChild(DOMoption);
        });
    }
}