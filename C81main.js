canvas = document.getElementById("myCanvas")
colour = "red"
ctx = canvas.getContext("2d")

ctx.beginPath()
ctx.strokeStyle = colour
ctx.lineWidth = 5
ctx.rect(200,200,400,250)
ctx.stroke()

function circle(x, y) {
    ctx.beginPath()
    ctx.strokeStyle = colour
    ctx.lineWidth = 5
    ctx.arc(x, y, 40, 0, 2 * Math.PI)
    ctx.stroke()
}
colour="blue"
circle(300,300)

colour="black"
circle(400,300)

colour="red"
circle(500,300)

colour="yellow"
circle(350,340)

colour="green"
circle(450,340)