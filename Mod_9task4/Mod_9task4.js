const myButton = document.querySelector('.j-btn');

const input1 = document.querySelector('.input1')

const input2 = document.querySelector('.input2')

// let number1 = +input1.value;
// let number2 = +input2.value;  

myButton.addEventListener('click', () => {
let data = Array.from(document.querySelectorAll('.input')).map(input => +input.value)

data.forEach((item) => 100 >= item || item >= 300? console.log('shit') : console.log('ok')  )

})