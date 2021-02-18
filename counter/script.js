//initial count
let count = 0;

const value = document.getElementById("value"); 
const btn = document.querySelectorAll(".btn");

btn.forEach(function(btn){
    btn.addEventListener("click", function(e){
        
        let styles = e.target.classList;

        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase"))
        {
            count++;
        }
        else
        {
            count = 0;
        }

        if(count>0){
            value.style.color = "green";
        }
        else if(count<0){
            value.style.color = "red";
        }
        else
        {
            value.style.color = "black";
        }

        value.textContent = count;
    })

})