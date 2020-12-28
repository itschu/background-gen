var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var bodyTag = document.getElementsByTagName("body")[0];

//console.log(bodyTag);
changeBackground();

function changeBackground(){
    bodyTag.style.background = "linear-gradient(to right,"+color1.value+" , "+color2.value+")";
    
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);

