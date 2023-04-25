const inputColor = document.querySelector("input")
inputColor.oninput=()=>{
    document.body.style.backgroundColor = inputColor.value
}