var todoInp = document.getElementById('todoInp');
var parent = document.getElementById('parentlist');

function addTodo(){
    //create of li with content
    var inpValue = todoInp.value;
    console.log(inpValue);
    var todoLi = document.createElement("li");
    todoLi.setAttribute('class','liStyle');
    var txt = document.createTextNode(inpValue);
    todoLi.appendChild(txt);
    parent.appendChild(todoLi);
}

//create delete button (delete)
var deleteBtn = document.createElement('button');
var delteTxt = document.createTextNode('DELETE');
deleteBtn.setAttribute('class','btn');
deleteBtn.setAttribute('onclick','deleteTodo(this)');
deleteBtn.appendChild(delteTxt);
todoLi.appendChild(deleteBtn);



//create edit button (edit)
var editBtn = document.createElement('button');
var editTxt = document.createTextNode('EDIT');
editBtn.setAttribute('class','btn');
editBtn.setAttribute('onclick','editTodo(this)');
editBtn.appendChild(editTxt);
todoLi.appendChild(editBtn);


// fill parent list with li
// parent.appendChild(todoLi);
todoInp.value = '';


function deleteTodo(elemet){
    elemet.parentNode.remove();
}

function editTodo(elemet){
    elemet.parentNode.firstChild.nodeValue = prompt('Enter Edit Value To Change')
}