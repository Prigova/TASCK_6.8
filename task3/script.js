const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green'); // при первом срабатывании просто красит в зеленый
    trafficLightEl.removeEventListener('click', makeGreen); //при последующи - удаляет саму себя
    trafficLightEl.addEventListener('click', makeYellow); // ...и добавляет другой цвет
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
  trafficLightEl.style.background = ('red');
  trafficLightEl.removeEventListener('click', makeRed);
  trafficLightEl.addEventListener('click', makeGreen);
}


