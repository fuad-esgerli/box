const colors = ["blue", "yellow", "red", "PaleVioletred", "brown", "orange", "green", "pink", "purple"]
const button = document.getElementById("button");

const container = document.getElementById("container")

button.addEventListener("click", randomRengliQutularyarat) 

function randomRengliQutularyarat () {
    const randomColor = colors[Math.floor(Math.random()* colors.length)]
    
    const topPx = Math.floor(Math.random()*800)
    
     const leftPx = Math.floor(Math.random()*1200)

     console.log(topPx, leftPx)

     const myDivEl = document.createElement(`div`)
     myDivEl.style.width= "30px"
     myDivEl.style.height= "30px"
     myDivEl.style.backgroundColor=randomColor

     myDivEl.style.position="absolute"
     myDivEl.style.left = `${leftPx}px`
     myDivEl.style.top = `${topPx}px`

     container.appendChild(myDivEl)
}