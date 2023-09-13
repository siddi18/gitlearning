let milliseconds=0,seconds=0,minutes=0,hours=0;
let timeshow=document.getElementById('timeshow')
let timeref;
let isPaused = true;

document.getElementById('start').onclick = function() {
    if(isPaused) { 
        timeref = setInterval(updateTime, 10);
        isPaused = false;
    }
}

function updateTime(){
    milliseconds=milliseconds+10;
    if(milliseconds==1000){
        seconds=seconds+1;
        milliseconds=0;
        if(seconds==60){
            minutes=minutes+1;
            seconds=0;
            if(minutes==0){
                hours=hours+1;
                minutes=0;
            }
        }
    }

    let h,s,m,ms;
    if(hours<10)
    h='0'+hours;

    else
    h=hours;

    if(minutes<10)
    m='0'+minutes;

    else
    m=minutes;

    if(seconds<10)
    s='0'+seconds;

    else
    s=seconds;

    if(milliseconds<10)
    ms='00'+milliseconds;

    else if(milliseconds<100)
    ms='00'+milliseconds;

    else
    ms='0'+milliseconds;

    timeshow.innerHTML=`${h} : ${m} : ${s} : ${ms}`
}

document.getElementById("pause").onclick = function() {
    if (!isPaused) {
        clearInterval(timeref);
        isPaused = true;
    } else {
        timeref = setInterval(updateTime, 10);
        isPaused = false;
    }
}

document.getElementById('reset').onclick=function(){
    clearInterval(timeref)
    milliseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    timeshow.innerHTML="00 : 00 : 00 : 0000"
}

