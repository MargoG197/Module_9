const myButton = document.querySelector('.j-btn');
const insertData = document.querySelector('.insertData');



function formRequest() {
const pageNumber = document.querySelector('.pageNumber').value;
const limit = document.querySelector('.limitNumber').value;
  
//   function isValidNumber(element){
//   return element >= 1 && element <= 10;
// };
  if ((0 >= pageNumber || pageNumber >= 11) && (0 >= limit  || limit >= 11)){
    insertData.innerHTML = 'Оба числа вне диапазона от 1 до 10'
  } else if (1 <= pageNumber <= 10 && (0 >= limit  || limit >= 11)){
   insertData.innerHTML = 'Лимит вне диапазона от 1 до 10'
 } else if ((0 >= pageNumber  || pageNumber >= 11) && 1 <= limit <= 10){
   insertData.innerHTML = 'Страница вне диапазона от 1 до 10'
 } else if (1 <= pageNumber <= 10 && 1 <= limit <= 10){
    fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
  .then((response) => { const result = response.json();
                       return result
     })
    .then((data) => {console.log(data);
       localStorage.setItem('data', JSON.stringify(data));
       displayResult(data);})
         
    .catch(() => {console.log('ошибка загрузки фотографии')});
  };
  
}

function displayResult(apiData){
let cards= '';
apiData.forEach(item =>{
    const cardBlock = `<div class = "card"> <img src= "${item.download_url}" class = "image"/> </div>`
    cards += cardBlock;
});
insertData.innerHTML = cards;
};

  
  
myButton.addEventListener('click', async() => {
    const requestResult = await formRequest();  
});

  
  
if(localStorage.hasOwnProperty('data')){
  const apiData = localStorage.getItem('data');
  const JsonApiData = JSON.parse(apiData)
  displayResult(JsonApiData);
};