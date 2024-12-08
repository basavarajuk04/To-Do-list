 const input=document.getElementById('input');
 const listcontainer= document.getElementById('list-container');

 function addTask() {
    if (input.value=== '') {
        alert('You Must Add Your Task') 
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML=  '\u00d7';
         li.appendChild(span);

    }
    input.value= '';
    saveData();
 }

 listcontainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName ==="SPAN") {
        e.target.parentElement.remove();
       saveData();
    }
    
 })

 function saveData() {
    localStorage.setItem('data',listcontainer.innerHTML);
    
 }
 function showTask(){
    listcontainer.innerHTML=localStorage.getItem('data');
 }
  showTask();