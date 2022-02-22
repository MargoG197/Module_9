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
const studentNode = listNode.querySelector('student');
const nameNode = studentNode.querySelector('name')
const ageNode = studentNode.querySelector('age');
const profNode = studentNode.querySelector('prof');

const langAttr = nameNode.getAttribute('lang');

const studentNodeFull = listNode.querySelectorAll('student');

studentNodeFull.forEach(student => {
    const element = {
        name: nameNode.textContent,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr,
    }  
    let result = {
    list:[element]
};
console.log(result);
});

