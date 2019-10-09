document.addEventListener("DOMContentLoaded", () => {
  // your code here
let myToDos = document.querySelector("#tasks")

let newTaskForm = document.querySelector("#create-task-form")

newTaskForm.addEventListener("submit", function(evt){
  evt.preventDefault()
  let taskValue = evt.target["new-task-description"].value
     let newLI = document.createElement("li")
     newLI.innerText = taskValue
     myToDos.append(newLI)
  console.log()

})

























});
