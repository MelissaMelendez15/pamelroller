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
        this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
        0, // velocidad
        Math.floor(this.img.width / this.img.frames),
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
    )
     
     if(this.ticks++ > 10){ // Se pinta cada 100 entonces el contador se incrementa
         this.ticks = 0
     }

     if(++this.img.frameIndex >= this.img.frames){ // Para que vuelva a repetir los movimientos
        this.img.frameIndex = 0
    }
    }

   move(dir){

    dir === 'TOP' ? this.y -= this.vy : null
    dir === 'RIGHT' ? this.x += this.vx : null
    dir === 'DOWN' ? this.y += this.vy : null

    this.vx += this.ax,
    this.vy += this.ay

    this.x += this.vx
    this.y += this.vy

    }


    
    }
