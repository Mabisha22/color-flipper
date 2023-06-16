const hex = [0, 1, 2, 3, 4 ,5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let buttonName = document.querySelector("#btn");

buttonName.addEventListener("click" , function(){

        var hexCode = "#"

        for( var i=0; i<6; i++){
            
            var randomNumber = Math.floor( Math.random() * hex.length);

            hexCode += hex[randomNumber];
        }

        let container = document.querySelector(".body");

        container.style.backgroundColor = hexCode;

        document.querySelector(".color").innerHTML = hexCode;

        
})
