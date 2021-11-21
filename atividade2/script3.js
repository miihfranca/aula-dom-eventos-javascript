/*const textoM = document.querySelectorAll('.p')
var btn = document.querySelector('#btn')
const textoG = document.querySelectorAll('.i')

textoM.forEach(function(){
    btn.addEventListener("click", () => {
        textoG.innerHTML = textoM.innerHTML.toUpperCase()
        
    })
})*/

var btn = document.querySelector('#btn')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const i1 = document.getElementById('i1')
const i2 = document.getElementById('i2')
const bb = document.getElementById('t')

btn.addEventListener("click", () => {
    i1.innerHTML = p1.innerHTML.toUpperCase()
    i2.innerHTML = p2.innerHTML.toUpperCase()
})


bb.addEventListener("mouseover", () => {
    bb.style.color = "red"
} )


bb.addEventListener("mouseout", () => {
    bb.style.color = ""
} )