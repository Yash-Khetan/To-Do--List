const add = document.querySelector(".add");
let value = document.querySelector("#enter_task");

let All = [];

let div_all = document.querySelector(".All ul"); 

let div_completed = document.querySelector(".completed ul")

add.addEventListener("click", function() {
    console.log("button was clicked");
    console.log(value.value);

    if (value.value.trim() !== "") {  
        All.push(value.value);
        
        let newTask = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        let tasktext = document.createElement("span");

        tasktext.textContent = value.value;

        div_all.appendChild(newTask);
        newTask.appendChild(tasktext);
        newTask.appendChild(checkbox);

        

        value.value = ""; 
        console.log(checkbox);

        checkbox.onchange
        checkbox.addEventListener("change", function(){
           if (checkbox.checked === true){
               
               div_completed.appendChild(newTask);
            
           }
           else {
            div_all.appendChild(newTask);
           }
           console.log("item removed");
           
        })

    }

    console.log(All);
});
