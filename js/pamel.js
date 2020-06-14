//funciones del personaje

class Pamel{
    constructor(ctx){
    this.ctx = ctx

    this.x = 50
    this.y = 320

    this.vx = 0
    this.vy = 0

    this.ax = 0
    this.ay = 0

    this.w = 100
    this.h = 150

    this.img = new Image()
    this.img.src = "../images/pamel.png"

    }

   draw(){
    this.ctx.drawImage(
        this.img,
        0,
        0,
        this.img.width / 3,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
    )
    }

   move(){
    

    }
}