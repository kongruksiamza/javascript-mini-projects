const btn = document.getElementById("btn")
const text = document.getElementById("text")
const body = document.body

function randomColor(){
    return Math.floor(Math.random()*256)
}

btn.addEventListener("click",()=>{
    const red = randomColor()
    const green = randomColor()
    const blue = randomColor()
    const color = `rgb(${red},${green},${blue})`
    text.innerText=color
    body.style.backgroundColor=color
})