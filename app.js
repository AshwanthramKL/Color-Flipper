const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

var button = document.querySelector('#btn');
var bkcolor = document.querySelector('.bkcolor')
button.addEventListener('click', changeColor);

function changeColor(){
    var color = colors[Math.round(colorgenerator())%4]
    // console.log(Math.round(colorgenerator()));
    document.body.style.backgroundColor = color;
    // console.log(color);
    bkcolor.innerHTML = color;
}

function colorgenerator(){
    var num = Math.random()* colors.length;
    return num;
    // console.log(num);
}