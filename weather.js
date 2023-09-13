let inputEle=document.getElementById("location-input")
let tempEle=document.getElementById("temp-value")
let locEle=document.getElementById("location")
let weatherdescEle=document.getElementById("weather-desc")
let btnEle=document.getElementById("btn")

const apikey='8105ec0f7a46a0a954aa149192fb6ef8';

btnEle.onclick=function(){
    if(inputEle.value=="")
    alert("Please enter a valid location")

    else{
        loc=inputEle.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        let hello=fetch(url).then(res=>res.json())
        console.log(hello)
        hello.then(data=>{
            console.log(data);
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            tempEle.innerText=Math.floor(feels_like-273);
            locEle.innerText=name;
            weatherdescEle.innerText=description
        })
        .catch(()=>{
            alert("enter valid location")
        })
        inputEle.value=""
    }
    
}