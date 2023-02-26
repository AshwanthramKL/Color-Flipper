const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

var button = document.querySelector('#btn');
var bkcolor = document.querySelector('.bkcolor')
button.addEventListener('click', changeColor);
var iterator = 0;


function changeColor(){
    var color = colors[iterator%4]
    document.body.style.backgroundColor = color;
    console.log(color);
    bkcolor.innerHTML = color;
    iterator++;
}