const parser = new DOMParser();

const XMLString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
<student>
  <name lang="ru">
    <first>Alexandr</first>
    <second>Alexandrov</second>
  </name>
  <age>38</age>
  <prof>manager</prof>
</student>
</list>
`;

const xmlDOM = parser.parseFromString(XMLString, `text/xml`);

const listNode = xmlDOM.querySelector('list');

const studentNode = listNode.querySelectorAll('student');
  
 studentNode.forEach(student => {
    const nameNode = student.querySelector('name');
    const ageNode = student.querySelector('age');
    const profNode = student.querySelector('prof');
    const langAttr = nameNode.getAttribute('lang');
           student = {
            name: nameNode.textContent,
            age: Number(ageNode.textContent),
            prof: profNode.textContent,
            lang: langAttr,
           } 
           let list = []
           list.push(student)
           const result = {list};
            console.log(result)
    });
