//funciones de los obstacles
class Rocks{
    constructor(ctx) {

        this.ctx = ctx

        this.canvasSize = { // es de la unica forma que funciona
            w: undefined,
            h: undefined
        }

        this.w = 50
        this.h = 50 

        this.y = 50 
        this.x = (Math.random() * 2000 + 120)

        this.vx = -5
        this.vy = 4

        this.ax = 0
        this.ay = 0

        this.gravity = 0 

        this.imag = new Image()
        this.imag.src = 'images/rocks.png'

    }

    draw() {
        
        this.ctx.drawImage(
        this.imag,
        this.x,
        this.y,
        this.w,
        this.h
        )

    }

    move() {
        this.x += this.vx
        this.vy += this.gravity
        this.y += this.vy
        
        if(this.y + this.canvasSize.h <= 0){
            this.y = 0
        }
    }

}

