document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const list = document.querySelector("#tasks")
  
  const addSubmitListener = () => {
    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let newTask = {
        "new-task-description": e.target.querySelector("#new-task-description").value,
      }
      console.log(newTask)
      let li = document.createElement("li")
      li.textContent = newTask["new-task-description"];
      list.append(li)
    });
  }
  addSubmitListener();
});
