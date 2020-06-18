
// class Pamel {
//     constructor(ctx) {
//         this.ctx = ctx
//         this.x = 0 
//         this.y = 350
//         this.vx = 0 
//         this.vy = 0
//         this.ax = 0.5 
//         this.ay = 1.5
//         this.y0 = this.y
//         this.x0 = this.x
//         this.w = 100 
//         this.h = 120
//         this.img = new Image()
//         this.img.frames = 3 
//         this.img.frameIndex = 0 
//         this.img.src = "images/pamel.png"
//         this.ticks = 0 
//         this.health = 10 

//         new Controls(this).init()
//     }
//     draw() {
//         this.ctx.drawImage(
//             this.img,
//             this.img.frameIndex * this.img.width / this.img.frames,
//             0, 
//             this.img.width / this.img.frames,
//             this.img.height,
//             this.x,
//             this.y,
//             this.w,
//             this.h
//         )
//         if (this.ticks++ > 10) { 
//             this.ticks = 0
//         }
//         if (++this.img.frameIndex >= this.img.frames) { 
//             this.img.frameIndex = 0
//         }
//     }
//     move() {
//         this.vx += this.ax
//         this.x += this.vx
//         //Para cuando la muñeca se cae de la plataforma
//         if (this.x < platform.x && this.x > (platform.x + platform.width)) {
//             this.vy += this.ay
//             this.y += this.vy
//         }
//         if (this.y === this.y0) {
//             this.vy = 0
//         }
//     }
//     jump() {
//         if (this.x < platform.x || this.x > platform.x + platform.width) {
//             this.vy += this.ay
//             this.y += this.vy
//         }
//         if (this.x >= platform.x && this.x <= (platform.x + platform.width) && this.y < platform.y) {
//             this.vy += this.ay
//             this.y += this.vy
//         }
//         if (this.y === platform.y && this.x >= platform.x && this.x <= platform.x + platform.width) {
//             this.vy = 0
//         }
//         if (this.y === this.y0 && this.x < platform.x && this.x > (platform.x + platform.width)) {
//             this.vy = 0
//         }
//     }




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

        this.health = 5

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