class Background {
    constructor(ctx){
   
    this.ctx = ctx

    this.x = 0
    this.y = 0

    this.vx = -2
    this.vy = 0

    this.ax = 0
    this.ay = 0

    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height

    this.img = new Image()
    this.img.src = "./images/PamelBackground.png"
    }

    draw(){
    this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
    )

    this.ctx.drawImage(
        this.img,
        this.x + this.ctx.canvas.width,
        this.y,
        this.w,
        this.h
    )


}

    move(){
    this.vx += this.ax,
    this.vy += this.ay

    this.x += this.vx
    this.y += this.vy

    if(this.x + this.w <= 0)
    this.x = 0

}
}
