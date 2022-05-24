const buttons = document.querySelectorAll('button');
const container = document.getElementById('container');
const math = document.createElement("div");
const numbers = document.getElementsByClassName('number');
const add = document.getElementById('add');
const equals = document.getElementById('equals');
let placeHolder = "";
math.classList.add("answer");
math.textContent = "";
container.insertBefore(math, container.firstChild);
for(let i = 0; i < buttons.length; i ++){
    buttons[i].addEventListener('click', function(){
    });
}
for(let i = 0; i < numbers.length; i ++){
    numbers[i].addEventListener('click', function(){
        math.innerHTML += numbers[i].innerHTML;
    });
}
add.addEventListener('click', function(){
    placeHolder = math.innerHTML;
    math.innerHTML = "";
});
equals.addEventListener('click', function(){
    if(math.innerHTML == ""){
        math.innerHTML = "";
    }else if(placeHolder == ""){
        math.innerHTML = "";
    }else{
        math.innerHTML = parseInt(math.innerHTML) + parseInt(placeHolder);
    }
});