let textColor = document.querySelector(".textColor");
console.log(textColor);

function toggleClass(){
    console.log("test", textColor.classList);
    // let textColorClass = textColor.classList;
    // let checkNewClass = textColorClass.contains("newClass");
    // console.log("checkNewClass", checkNewClass);
    textColor.classList.toggle("newClass");
}