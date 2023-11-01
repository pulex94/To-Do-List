

// Variables
let projectList = []







let MyCustomTaskArray = []
let addTaskBTN = document.getElementById("addTaskBTN")
addTaskBTN.addEventListener("click", addTaskForm)
let inputValue = document.getElementById("inputValue");
let inputBtn = document.getElementById("inputBtn");
let containerInput = document.getElementById("containerInput");
let list = document.getElementById("list")

let EnterKey = inputValue.addEventListener("keypress", function (e) {
    if (event.key === "Enter") {
        event.preventDefault();
        inputBtn.click()
    }
})

function pushProjectToArray() {
    if (inputValue.value != "") {
        projectList.push(inputValue.value)
    }
}

function makeListFromArray() {

    // For every array element
    for (let i = 0; i < projectList.length; i++) {
        const arrayElement = projectList[i];

        // Create a "li" , append it to List, give text content = array
        let li = document.createElement("li")
        list.appendChild(li)
        li.textContent = arrayElement

        // Add a Remove Button 
        let button1 = document.createElement("button")
        li.appendChild(button1)
        button1.textContent = "Remove"
        button1.addEventListener("click", removefromArray)

    }


}

function removefromArray(e) {
    e.currentTarget.parentElement.remove()
    // Remove Li Value from Array
    let targetLi = e.currentTarget.parentElement.textContent
    let liValue = targetLi.replace("Remove", "")
    let liValueArrayPosition = projectList.indexOf(liValue)
    projectList.splice(liValueArrayPosition, 1)
}

function cleanList() {
    list.textContent = ""

}

function cleanDisplay() {
    inputValue.value = ""

}
function addProject() {
    cleanList()
    pushProjectToArray()
    makeListFromArray()
    cleanDisplay()
}


function addTask() {
    let formDiv = document.getElementById("formDiv")
    formDiv.style.display === "none" ? formDiv.style.display = "block" : formDiv.style.display = "none"
}

function Task(name, description, date, priority) {
    this.name = name
    this.description = description
    this.date = date
    this.priority = priority

}

function addTaskForm(e) {
    e.preventDefault()
    let InputFormDescription = document.getElementById("InputFormDescription").value
    let InputFormDate = document.getElementById("InputFormDate").value
    let InputFormPriority = document.getElementById("InputFormPriority").value
    let InputFormName = document.getElementById("InputFormName").value


    const customTask = new Task(InputFormName, InputFormDescription, InputFormDate, InputFormPriority)
    document.getElementById("InputForm").reset()
    MyCustomTaskArray.push(customTask)

    addArrayToPage()
}

function addArrayToPage(){
    let ulList = document.getElementById("ulList")  
    ulList.innerHTML = ""
    for (let i = 0; i < MyCustomTaskArray.length; i++) {
        const element = MyCustomTaskArray[i];
        //
        let li = document.createElement("li")
        ulList.appendChild(li)
        li.textContent = element.name + " " + element.description + " Due Date: " + element.date + " Priority: " + element.priority
        //
        let button = document.createElement("button")
        li.appendChild(button)
        button.textContent = "REMOVE"
        button.addEventListener("click", removefromTaskArray)}
        }


function removefromTaskArray(e) {
    e.currentTarget.parentElement.remove()
    // Remove Li Value from Array
    let targetLi = e.currentTarget.parentElement.textContent
    let liValue = targetLi.replace("Remove", "")
    let liValueArrayPosition = MyCustomTaskArray.indexOf(liValue)
    MyCustomTaskArray.splice(liValueArrayPosition, 1)
}






/* // MAKE A SELECT LIST WITH LIST ARRAY
function makeSelectOption() {
    let select = document.createElement("select")
    let addTask = document.getElementById("addTask")
    let newTaskBtn = document.getElementById("newTaskBtn")
    for (let i = 0; i < projectList.length; i++) {
        const element = projectList[i];
        let option = document.createElement("option")
        addTask.appendChild(select)
        select.appendChild(option)
        option.textContent = element

    }
} */
