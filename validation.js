const form=document.getElementById("form")
const uname=document.getElementById("uname")
const email=document.getElementById("email")

var isValidName=false;
var isValidEmail=false;

uname.addEventListener('keyup',checkUserName);

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validate()
})

    
function validate(){
    let nameValue=uname.value.trim()
    let emailValue=email.value.trim()

    isValidEmail=false;
    isValidName=false;

        //User name check
    checkUserName();
    
        //email check
    if(emailValue===''){
        setError(email,'Email cannot be empty')
    }
    else if(!emailCheck(emailValue)){
        setError(email,'Enter valid Email Id')
    }
    else{
        setSuccess(email,'Email is allowed')
        isValidEmail=true;
        }

        if(isValidName && isValidEmail){
            form.submit()
        }
}


function setError(input,message){
    let parent=input.parentElement;
    let small=parent.querySelector('small')
    small.innerText=message
    parent.classList.add('error')
    parent.classList.remove('success')
}

function setSuccess(input,message){
    let parent=input.parentElement;
    let small=parent.querySelector('small')
    small.innerText=message
    parent.classList.add('success')
    parent.classList.remove('error')
}
function emailCheck(input){
    let emailReg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let valid=emailReg.test(input)
    return valid
}

function checkUserName(){
    let nameValue=uname.value.trim()
    if(nameValue===''){
        setError(uname,'user name cannot be empty')
        }
        else if(nameValue.length<3){
            setError(uname,'user name should be minimum 3 characters')
        }
        else{
            setSuccess(uname,'username is allowed')
            isValidName=true;
        }
}

