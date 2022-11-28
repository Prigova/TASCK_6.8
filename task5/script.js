let input = document.querySelector('input');
let text = document.querySelector('#duplicateField');
let button = document.querySelector('button');

button.addEventListener ('click', function(event) {
    event.preventDefault();
    console.log(text.textContent=input.value);
    input.value=''; 
    text.innerHTML = '';
    })

input.addEventListener('keyup', function(event) {
    event.preventDefault();
    text.textContent = event.target.value
})



    

