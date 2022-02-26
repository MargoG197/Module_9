
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

