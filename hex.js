const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

var button = document.querySelector('#btn');
var bkcolor = document.querySelector('.bkcolor')
button.addEventListener('click', changeColor);

function changeColor(){
    let hexColor = '#';
    for (let i=0;i<6;i++){
        hexColor += hex[generateRandom()];
    }
    // console.log(hexColor);
    document.body.style.backgroundColor = hexColor;

    bkcolor.innerHTML = hexColor;
}

function generateRandom(){
    var hexValue = Math.floor(Math.random() * hex.length);
    return hexValue;
}