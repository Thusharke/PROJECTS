
var textInput = document.getElementById("item"); 

function init(){
    var items = document.querySelectorAll(".del");
    for(var i=0;i<items.length;i++){
        items[i].onclick = remove;
    }
    var todos = document.querySelectorAll("li");
    for(var i=0;i<todos.length;i++){
        todos[i].onclick = line;
    }
}

textInput.onkeypress = function(e){
    console.log(e);
    if(e.keyCode === 13)  addItem();
}

function addItem() {
    text = textInput.value;
    if(text.length != 0){
        var ul = document.getElementById("list");  
        var li = document.createElement("li");  
        li.innerHTML = '<i class="fas fa-minus-square del"></i><p class="text">' + text + "</p>"; 
        ul.appendChild(li);
        li.onclick = line;
        var del = document.querySelectorAll(".del");
        del[del.length-1].onclick = remove;
    }
    textInput.value="";
}

function remove(){
    if(confirm("This will remove your todo")){
        this.parentNode.remove();
    }
}
function line(){
    this.classList.toggle("line");
}