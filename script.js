const color = document.getElementById("color")
const mycolor = document.getElementById("yourColor")
const generatedColor = document.getElementById("generatedColor")
const btn = document.querySelector("button")
const mode = document.getElementById("mode")

btn.addEventListener('click', () => {
    let hex = color.value.replace("#", "")
    let m = mode.value
console.log(hex)
console.log(m)

fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${m}&count=5`)
.then(resp => resp.json())
.then(data => {
    console.log(data.mode)
    data.colors.forEach(c => {
        const div = document.createElement("div");
        div.style.backgroundColor = c.hex.value;
        div.style.display = "inline-block";
        div.innerHTML += `${c.hex.value}`    
        if(hex === "ffffff"){
            div.style.color = "black"
        }else{
            div.style.color = "white"
        }
        generatedColor.appendChild(div)
    })  
}
)
generatedColor.innerHTML = ""
})