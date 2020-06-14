//funciones del personaje

class Pamel{
    constructor(ctx){
    this.ctx = ctx

    this.x = 50 //posicion del personaje
    this.y = 350

    this.vx = 0// velocidad
    this.vy = 0

    this.ax = 0 // aceleracion
    this.ay = 0

    this.w = 100 // tamaño del personaje
    this.h = 120

    this.img = new Image()
    this.img.frames = 3 // cantidad de imagenes
    this.img.frameIndex = 0 // el inicio 
    this.img.src = "../images/pamel.png"

    this.ticks = 0 // tiempo de la imagen

    }

   draw(){
    this.ctx.drawImage(
        this.img,
        this.img.frameIndex * this.img.width / this.img.frames,
        0, // velocidad Y
        this.img.width / this.img.frames,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
    )
     this.ticks++ // cada vez que haga un dibujo incremento

     if(this.ticks > 1000){
         this.ticks = 0
     }
    }

   move(){
    this.vx += this.ax,
    this.vy += this.ay

    this.x += this.vx
    this.y += this.vy

    this.img.frameIndex++ // se incrementa frameIndex para que se mueva

    if(this.img.frameIndex >= this.img.frames){ // Para que vuelva a repetir los movimientos
        this.img.frameIndex = 0
    }

    }
}