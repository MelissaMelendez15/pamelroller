class Star {
    constructor(ctx) {
        this.ctx = ctx

        this.canvasSize = {
            w: undefined,
            h: undefined
        }

        this.x = (Math.random() * 2000 + 120)
        this.y = 50

        this.vx = -4
        this.vy = 2

        this.ax = 0
        this.ay = 0

        this.w = 50
        this.h = 50

        this.imag = new Image()
        this.imag.src = "images/star.png"


    }
    draw() {

        this.ctx.drawImage(this.imag, this.x, this.y, this.w, this.h)

    }

    move() {
         this.vx += this.ax
         this.vy += this.ay
        this.y += this.vy
        this.x += this.vx


         if (this.x + this.canvasSize.w <= 0) {
             this.x = this.canvasSize.w * 0.70
         }

        //this.x += this.vx
    }
}