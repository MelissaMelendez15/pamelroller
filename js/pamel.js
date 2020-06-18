class Pamel {
    constructor(ctx) {
        this.ctx = ctx

        this.canvasWidth = this.ctx.canvas.width;
        this.canvasHeight = this.ctx.canvas.height;

        this.x = 0 
        this.y = 350

        this.vx = 0 
        this.vy = 0

        this.ax = 0 
        this.ay = 0.9

        this.y0 = this.y
        this.x0 = this.x

        this.w = 100
        this.h = 120

        this.img = new Image()
        this.img.frames = 3 
        this.img.frameIndex = 0 
        this.img.src = "images/pamel.png"

        this.health = 3

        new Controls(this).init()

    }

    draw(counter) {
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
            0, 
            Math.floor(this.img.width / this.img.frames),
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
        )
        this.animate(counter)
    }
    
    move() {

        this.vx += this.ax
        this.vy += this.ay

        this.x += this.vx
        this.y += this.vy

        if (this.y >= this.y0) {
            this.vy = 0
            this.y = this.y0
        }

    }

    jump() {       
        if (this.y === this.y0) {
            this.vy -= 15
            this.y -= 10
        }
    }

    animate(counter) {
        if (counter % 5 == 0) {
            this.img.frameIndex++;
        }
        if (this.img.frameIndex > this.img.frames - 1) {
            this.img.frameIndex = 0;
        }
    }

}