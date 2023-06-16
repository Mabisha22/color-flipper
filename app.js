const colorNames = ["red", "green", "skyblue" , "rosybrown", "orange", "brown", "pink"];

let buttonName = document.querySelector("#btn")

buttonName.addEventListener("click" , function(){
    
    let randomNumber = Math.floor(Math.random () * colorNames.length)

    let container = document.querySelector(".body");

    container.style.backgroundColor = colorNames[randomNumber];

    document.querySelector(".color").innerHTML = colorNames[randomNumber]
})