/*

  Используя методы для создания объектов из задания по композиции написать фабику (HeadHunt), которая будет
  расспределять и создавать сотрудников компании нужного типа.

  Данные для списка сотрудников: http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2

  HeadHunt => {
    hire( obj ){
      ...
    }
  }

  Привязать к интерфейсу и вывести на страницу. На кнопку нанять повесить метод hire из фабрики

*/

import {
    BackendDeveloper,
    FrontendDeveloper,
    Designer,
    ProjectManager
} from "./composition";
async function getemploees(id) {
    const employeeResp = await fetch('http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2');
    const employees = await employeeResp.json();
    return employees;
}
let comand=[];
const Fabrica = () => {
    class Employees {
        constructor({name, age, type, balance, _id}) {
            // super();
            this.name = name;
            this.age = age;
            this.type = type;
            this.balance = balance;
            this._id = _id;
            this.find = this.find.bind(this);
            this.render();
        }
        render() {
            const table = document.getElementById('employeeTab');
            let div = document.createElement('div');
            div.innerHTML += `
          <div> ${this.name}(${this.age})</div>
          <div> ${this.type}</div>
          <a href="#" class="_btn"  style="cursor: pointer;">Нанять</a>  
          `;
            div.style.display='flex';
            table.appendChild(div);
            div.querySelector('._btn').addEventListener('click', this.find)
        }
        find() {
            const comandTable = document.getElementById('comand');
            let div = document.createElement('di');
            div.innerHTML = ` 
          <div> ${this.name}(${this.type})</div>
          <div> ${this.balance}</div>
          `;
            div.style.display='flex';
            comandTable.appendChild(div);
            // comand.push(this);
        }
    }
    class HeadHuntFabric {
        hire(obj) {
            let EmployeeComp;
            switch (obj.type) {
                case 'frontend': {
                    EmployeeComp = FrontendDeveloper;
                    break
                }
                case 'backend': {
                    EmployeeComp = BackendDeveloper;
                    break
                }
                case 'design': {
                    EmployeeComp = Designer;
                    break
                }
                case 'project': {
                    EmployeeComp = ProjectManager;
                    break;
                }
                default: {
                    EmployeeComp = null;
                }
            }
            return Object.assign(
                new Employees(obj),
                EmployeeComp(obj)
            )
        }
    }
    const headHunt = new HeadHuntFabric();
    const getEmploees = getemploees();
    getEmploees.then(data => {
        data.map(el => headHunt.hire(el));
    })

}
export default Fabrica;
