const colors = ["green", "red", "rgb(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");

//Get the first element in the document with class color
const color = document.querySelector(".color"); 

btn.addEventListener("click", function(){

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    //Math.random() generates value from 0 to less than 1
    //Math.floor will round up the value
    return Math.floor(Math.random() * colors.length); 
}