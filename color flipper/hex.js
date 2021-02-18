//numeral system made up of 16 symbols (base 16)
//Hexadecimal A = decimal 10, and hexadecimal F = decimal 15
const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; 

const btn = document.getElementById("btn");

//Get the first element in the document with class color
const color = document.querySelector(".color");  

btn.addEventListener("click", function(){
    //hex value will be #f15025
    //start with # followed by five numbers
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }    
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandomNumber(){
    //Math.random() generates value from 0 to less than 1
    //Math.floor will round up the value
    return Math.floor(Math.random() * hex.length); 
}

