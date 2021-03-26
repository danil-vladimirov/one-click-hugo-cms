// JS Goes here - ES6 supported

import "./css/style.scss";

let headline = document.querySelector('.top');

headline.addEventListener('mouseover', function() {
    headline.innerHTML = 'hovered';
})

let body = document.body;

let btn = document.querySelector('.check-this');

btn.addEventListener('mouseover', function(){
    let r = Math.floor(Math.random() * 255); 
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    body.style.setProperty('background-color', 'rgb(' +r+ ',' +g+ ',' +b+ ')');
    
})

function shuffle() {
    let x;
    let y;
    let all = document.body.querySelectorAll('*');
    
    for (each of all) {
        x = Math.floor(Math.random() * 15);
        y = Math.floor(Math.random() * 15);
    
        // each.style.setProperty('position', 'absolute' );
        each.style.setProperty('transform', 'rotateZ(' +x+ 'deg');
    }
}

setTimeout(function() {shuffle()}, 3000);
