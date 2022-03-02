
// Задание 2.

// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

// JSON:

const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const employeeList = JSON.parse(jsonString);

const list = employeeList.list;

list.forEach(element => {
    const result = {
        name: element.name,
        age: element.age,
        prof: element.prof  
        }
    console.log(result)    
});

