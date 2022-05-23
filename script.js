
// Variable Declaration
let addToDo = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

// EventListeners
addToDo.addEventListener('click', function(){
    var para = document.createElement('p');
    para.classList.add('paraStyling');
    para.innerText = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = "";

    // Line Through
    para.addEventListener('click', function(){
        para.style.textDecoration = "line-through";
    });

    // Delete
    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para);
    });
    
});