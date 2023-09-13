let text=document.getElementById("inputtext");
let tasklist=document.getElementById("tasklist");

document.getElementById("buttons").onclick=function(){
    if(text.value.length==0){
        alert("enter a task details")
    }
    else{
        tasklist.innerHTML=tasklist.innerHTML+`
        <div class="task">
        <span id="work">${text.value}</span>
        <button class="del"><i class="fa fa-trash"></i></button>
        </div>`

        let alltasks=document.querySelectorAll('.del')
        for(i=0;i<alltasks.length;i++){
            alltasks[i].onclick=function(){

                this.parentNode.remove()
            }
        }
        tasklist.value=""
        inputtext.value=" "
    }
}
