const myButton = document.querySelector('.j-btn');
const insertData = document.querySelector('.insertData')

function formRequest() {
  let data = Array.from(document.querySelectorAll('.input')).map(input => +input.value);
  
  function isValidNumber (element, index, array){
  return element >= 100 && element <= 300;
};

  function elementArr(arr){
  if (arr.every(isValidNumber)){
    const width = arr[0];
    const height = arr[1];
    let url = `https://picsum.photos/${width}/${height}`;
    
   fetch(url)
  .then((response) => { 
    insertData.innerHTML = `
   <div class="card"><img src="${response.url}"></div>`
     })
    .catch(() => {console.log('ошибка загрузки фотографии')});
  } else {
    insertData.innerHTML = 'Одно из чисел вне диапазона от 100 до 300'
  }; 
      };
  
  elementArr(data);
}

myButton.addEventListener('click', async() => {
    const requestResult = await formRequest();  
})