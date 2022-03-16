const myButton = document.querySelector('.j-btn');
const insertData = document.querySelector('.insertData')

function formRequest() {
  let data = Array.from(document.querySelectorAll('.input')).map(input => +input.value);
  
  function isValidNumber (element, index, array){
  return element >= 1 && element <= 10;
};

  function elementArr(arr){
  if (arr.every(isValidNumber)){
    const pageNumber = arr[0];
    const limit = arr[1];
    let url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`;
    
   fetch(url)
  .then((response) => { const result = response.json();
                       return result
     })
    .then((data) => {console.log(data);
                    displayResult(data); })
         
    .catch(() => {console.log('ошибка загрузки фотографии')});
  } else {
    insertData.innerHTML = 'Одно из чисел вне диапазона от 1 до 10'
  }; 
      };
  elementArr(data);
}

function displayResult(apiData){
let cards= '';

apiData.forEach(item =>{
    const cardBlock = `<div class = "card"> <img src= "${item.download_url}" class = "image"/> </div>`
    cards += cardBlock;
});
insertData.innerHTML = cards;
}

myButton.addEventListener('click', async() => {
    const requestResult = await formRequest();  
})