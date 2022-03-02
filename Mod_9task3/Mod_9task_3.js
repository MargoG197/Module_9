// Задание 3.

// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
// Пример: если пользователь ввёл 5, то запрос будет вида https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.


const my_task = document.querySelector('.my_task');

function userRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function(){
        if (xhr.status != 200){
            console.log('статус ответа', xhr.status)
        } else {
            const result = JSON.parse(xhr.response);
            if (callback){
                callback(result);
            }
        }
    };
    xhr.onerror = function(){
        console.log('Mistake, request response: ', xhr.status)
    };

    xhr.send();
}

const resultInsert = my_task.querySelector('.result');
const btn = my_task.querySelector('.button')


function displayResult(apiData){
let cards= '';

apiData.forEach(item =>{
    const cardBlock = `<div class = "card"> <img src= "${item.download_url}" class = "image"/><p>${item.autor}</p> </div>`
    cards += cardBlock;
});
resultInsert.innerHTML = cards;
}


btn.addEventListener('click', () => {
    let value = my_task.querySelector('.input').value;
    if (value < 1 || value > 10){
        resultInsert.innerHTML = '<p>число вне диапазона от 1 до 10</p>';
    } else {
    userRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult);
       
        }
})

