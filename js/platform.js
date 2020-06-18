class Platform {
    constructor(ctx) {

        this.ctx = ctx

        this.canvasWidth = 1291;
        this.canvasHeight = 600;

        this.x = this.canvasWidth * 0.70
        this.y = this.canvasHeight* 0.5

        this.vx = -1
        this.vy = 0

        this.ax = 0
        this.ay = 0

        this.w = 250
        this.h = 150

        this.img = new Image()
        this.img.src = "images/rockPamel.png"

    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )

    }

    move() {
        this.vx += this.ax,
        this.vy += this.ay

        this.x += this.vx
        this.y += this.vy

    }
}