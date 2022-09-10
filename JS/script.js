let addToDoButton = document.getElementById('toDoBtn');
let inputField  = document.getElementById('txtField');
let toDoContainer  = document.getElementById('toDoContainer');
let clearBtn = document.getElementById('clearBtn');


addToDoButton.addEventListener('click', function(){
    if(inputField.value!=""){
    let paragraph = document.createElement('p');
    paragraph.classList.add('list-item');
    paragraph.innerText = inputField.value ;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    
    } 
})

inputField.addEventListener("keyup", function(event) {
    if(event.key === 'Enter'){
        event.preventDefault();
        addToDoButton.click();
    }
})

clearBtn.addEventListener('click',function(){
    for(n in toDoContainer.childNodes){
        toDoContainer.remove(n);
    }
})
