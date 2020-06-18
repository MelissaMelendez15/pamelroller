class platform {
    constructor(ctx) {

        this.ctx = ctx

        this.canvas.w = this.ctx.canvas.width;
        this.canvas.h = this.ctx.canvas.height;

        this.x = this.canvas.w * 0.70
        this.y = this.canvas.h * 0.3

        this.vx = -3
        this.vy = 0

        this.ax = 0
        this.ay = 0

        this.platform.w = 300
        this.platform.h = 250

        this.img = new Image()
        this.img.src = "images/rockPamel.png"

    }

    drow() {
        this.ctx.drawImage(this.img, this.x, this.y, this.platform.w, this.platform.h)

    }

    move() {
        this.vx += this.ax,
        this.vy += this.ay

        this.x += this.vx
        this.y += this.vy

        if (this.x + this.canvas.w <= 0) {
            this.x = this.canvas.w * 0.70
        }

    }
}

// class platform {
//     constructor(ctx) {
//         this.ctx = ctx;
//         this.width = 70;
//         this.height = 40;
//         this.posX = 400 //gameWidth/4
//         this.posY = 50 + this.height  //playerPosY0 + playerHeight - this.height;
//     }
//     draw() {
//         this.ctx.fillStyle = "black";
//         this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
//         this.move()
//     }
//     move() {
//         this.posX -= this.velX;
//     }
// }