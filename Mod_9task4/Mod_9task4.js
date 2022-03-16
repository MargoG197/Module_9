const myButton = document.querySelector('.j-btn');
const insertData = document.querySelector('.insertData')

function formUrl() {
  let data = Array.from(document.querySelectorAll('.input')).map(input => +input.value);
  
  function isValidNumber (element, index, array){
  return element >= 100 && element <= 300;
};

  function elementArr(arr){
  if (arr.every(isValidNumber)){
    const width = arr[0];
    const height = arr[1];
    let url = `https://picsum.photos/${width}/${height}`;
    console.log(url)
       return useRequest(url, displayResult)
  } else {
    insertData.innerHTML = 'Одно из чисел вне диапазона от 100 до 300'
  }; 
      };
  
  elementArr(data);
}

// function displayResult(apiData){
// let cards= '';

// apiData.forEach(item =>{
//     const cardBlock = `<div class = "card"> <img src= "${item.download_url}" class = "image"/><p>${item.autor}</p> </div>`
//     cards += cardBlock;
// });
// insertData.innerHTML = cards;
// }

   const useRequest = (url, callback) => {
   return fetch(url)
  .then((response) => {
    console.log('response', response);
    return response.json();
     })
  .then((json) => { return console.log(json);})
  .catch(() => { console.log('error') }) 
    
  }
      

myButton.addEventListener('click', async() => {
  formUrl()
  const requestResult = await useRequest();
    console.log('end');     
})
