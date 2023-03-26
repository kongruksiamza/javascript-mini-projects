const timeEl = document.getElementById("time");

function getCurrentTime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEl.innerHTML=`${hours} : 
    ${minutes <10 ? `0${minutes}`: minutes} :
    ${seconds <10 ? `0${seconds}`: seconds}`
}
setInterval(getCurrentTime,1000)