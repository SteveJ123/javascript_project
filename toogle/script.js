let textColor = document.querySelector(".textColor");
let containerDiv = document.querySelector(".container");
console.log(textColor);

function toggleClass(){
    console.log("test", textColor.classList);
    // let textColorClass = textColor.classList;
    // let checkNewClass = textColorClass.contains("newClass");
    // console.log("checkNewClass", checkNewClass);
    textColor.classList.toggle("newClass");
    // containerDiv.classList.toggle("newContainerClass");
}