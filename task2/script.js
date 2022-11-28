const consolLog = document.querySelector ('#consolLog');
consolLog.addEventListener('click', () => {
    alert('Метод для вывода сообщений в веб-консоль');
});

const al = document.querySelector ('#alert');
al.addEventListener('click', () => {
    alert('Метод для вывода сообщений в диалоговое окно с кнопкой "ок"');
});

const prom = document.querySelector ('#prompt');
prom.addEventListener('click', () => {
    alert('Метод для вывода сообщений с запросом на ввод текста. с кнопкой "ок" и "отмена"');
});