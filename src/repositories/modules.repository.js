const server = import.meta.env.VITE_URL_API;

export default class ModulesRepository{
    async getAllModules() {
        const response = await fetch(server + '/modules/');
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        const myData = await response.json();
        return myData;
    }

    async getModuleById(idModule) {
        const response = await fetch(server + '/modules?id=' + idModule);
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        const myData = await response.json();
        return myData;
    }

    async addModule(module) {
        const response = await fetch(server + '/modules/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(module)
          });
          return response.json();
    }

    async removeModule(idModule) {
        const response = await fetch(server + '/modules?id=' + idModule, {method: "DELETE"});
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        const myData = await response.json();
        return myData;
    }

    async changeModule(idModule, module) {
        const response = await fetch(server + '/module?id=' + idModule, {
            method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(module)
        });
        return response.json();
    }
}