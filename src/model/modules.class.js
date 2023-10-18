import Module from "./module.class";
import ModulesRepository from "../repositories/modules.repository";

export default class Modules {
  constructor() {
    this.data = [];
  }
  
  async populateData() {
    const repositoryModules = new ModulesRepository();
    const modules = await repositoryModules.getAllModules();
    this.data = modules.map((item) => new Module(
      item.code, 
      item.cliteral, 
      item.vliteral, 
      item.idCourse
    ));
  }

  async addItem(moduleNew) {
    const repositoryModules = new ModulesRepository();
    const module = await repositoryModules.addModule(moduleNew);
    const newModule = new Module(module.code, module.cliteral, module.vliteral, module.idCourse);
    this.data.push(newModule);
    return newModule;
  }

  async removeItem(code) {
    const repositoryModules = new ModulesRepository();
    await repositoryModules.removeModule(code);
    const index = this.getModuleIndexByCode(code);
    this.data.splice(index, 1);
    return {};
  }

  getModuleByCode(code) {
    return this.data.find((item) => item.code === code) || {};
  }

  getModuleIndexByCode(code) {
    return this.data.findIndex((item) => item.code === code);
  }

  toString() {
    let modulesToString = `Módulos (total ${this.data.length})`
    this.data.forEach((item) => modulesToString += `
    - ${item}`);
    return modulesToString;
  }
}