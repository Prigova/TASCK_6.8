let link = document.querySelector('a')
link.addEventListener('click',function(event){
    event.preventDefault()
    const userText = prompt('Введите свой текст для изменения текста ссылки');
    const userTextField = document.querySelector('a');
    userTextField.textContent = userText;
})
