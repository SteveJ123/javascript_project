const accordion = document.querySelectorAll(".contentBx");

for(let i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        console.log("test");
        this.classList.toggle("active");
    })
}