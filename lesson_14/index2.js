

function getTimeString(){
    let date = new Date();
    console.log(date);
    console.log(date.toTimeString());

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(hour, min, sec);
    return `${twoDigit(hour)}:${twoDigit(min)}:${twoDigit(sec)}`
}

function setClock(){
    let clock = document.getElementById('clock');
    clock.innerText = getTimeString();
    //console.dir(clock);
}

function twoDigit(value){
    //return Stribg(value).padStart(2, "0");
    //return value<10? "0"+value:value;
    return("0" + value).slice(-2); //0000031
}

setInterval(setClock,1000);
//getTimeString();
//setClock();