const addBtn = document.querySelector(".fa-square-plus ");
const taskList = document.getElementById("taskList");


function addTask() {
  const inputValue = document.getElementById("input-value").value;

  if (inputValue.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("div");
  taskItem.classList.add("list-grp");
  
  taskItem.innerHTML = `
    <h2 class="task">${inputValue}</h2>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-trash"></i>
                        `;

 taskList.appendChild(taskItem);
 addDeleteEvent(taskItem);
 select.selectedIndex = 0;
 
 
}

function addDeleteEvent(taskItem){
  const delBtn = taskItem.querySelector(".fa-trash");
  // const taskHeading = element.querySelector(".task");

  delBtn.addEventListener("click", () =>{

    taskItem.remove()
      // const listGrp = document.querySelectorAll(".list-grp");
  
      
  
         
          //   listGrp.forEach(item => {
          //     item.classList.remove("active");
          //     const heading = item.querySelector(".task");
          //     heading.classList.remove("active");
          //   });
            
          //   element.classList.add("active");
          //   taskHeading.classList.add("active");
          });
     


}

// Event Listener for dropdown 
const select = document.getElementById("task-select");

select.addEventListener("change" , ()=>{
  const selectedValue = parseInt(select.value);
  // console.log(selectedValue)

  // Check if the selectedValue is a valid number 
  if(!isNaN(selectedValue) && selectedValue >= 0 && selectedValue <= taskList.children.length) {
    const taskItems = taskList.querySelectorAll(".list-grp");

    // remove the specific number of task 

    for(let i= 0 ; i < selectedValue; i++){
      const taskItem = taskItems[i];
      if(taskItem){
        taskItem.remove();
      }
    }

  }

  
});

  
 

addBtn.addEventListener("click", addTask);

const customSelects = document.querySelectorAll(".task-select");

// Iterate over each custom select
customSelects.forEach((customSelect) => {
  const taskSelect = customSelect.querySelector("select");

  customSelect.addEventListener("click", () => {
    customSelect.classList.add("active");
    
  });

  taskSelect.addEventListener("blur", () => {
    customSelect.classList.remove("active");
  });
});
