//funciones del personaje

class Pamel{
    constructor(ctx){
    this.ctx = ctx
    
   
    this.x = 100 //posicion del personaje
    this.y = 350

    this.vx = 0// velocidad
    this.vy = 0

    this.ax = 0 // aceleracion
    this.ay = 0.1

    this.y0 = this.y
    this.gravity = 0

    this.w = 100 // tamaño del personaje
    this.h = 120

    this.img = new Image()
    this.img.frames = 3 // cantidad de imagenes
    this.img.frameIndex = 0 // el inicio 
    this.img.src = "../images/pamel.png"

    this.ticks = 0 // tiempo de la imagen

    new MovePamel(this).init()
    }

   draw(){
    this.ctx.drawImage(
        this.img,
        this.img.frameIndex * this.img.width / this.img.frames,
        0, // velocidad
        this.img.width / this.img.frames,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
    )
     
     if(this.ticks++ > 10){ // Se pinta cada 10 entonces el contador se incrementa
         this.ticks = 0
     }

     if(++this.img.frameIndex >= this.img.frames){ // Para que vuelva a repetir los movimientos
        this.img.frameIndex = 0
    }

    }
       move(){
    this.x += 1 // sumar posicion cuando se presiona tecla derecha, no hace falta aceleracion en x
    //Si la muñeca encuentra un precipicio o hueco, se cae hasta la y del precipicio
    this.y_precip = 250
    while (this.y <= this.y_precip){
        this.vy += this.ay
        this.y += this.vy
    }
    }
    jump() {
    this.vy = this.vy0 //velocidad inicial por el impulso del salto
    //Aqui esta saltando, sube arriba
    while (this.vy > 0) {
        this.vy -= this.ay
        this.y -= this.vy
    }
    //Aqui esta en caida libre, y cae hasta la altura base (y0)
    if (this.vy <= 0) {
        while (this.y <= this.y0) {
            this.vy += this.ay
            this.y += this.vy
        }
    }
    
}

}   