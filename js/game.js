
// Todo lo general del juego 

class Game{
    constructor(ctx){
        this.ctx = ctx

        this.intervalId = null

        this.background = new Background(ctx)
        this.pamel = new Pamel(ctx)
        this.obstacles = new Obstacles(ctx)

        // this.keys = {
        //     TOP: 38,
        //     DOWN: 40,
        //     RIGHT: 39
        // }

    }
    
    start (){ // boton inicio del juego con la llamada en index
    this._intervalId = setInterval(() =>{
         this.clear()
         this.draw()
         this.move()
    },1000/60)
    }

    clear() {
        this.ctx.clearRect(0,0, this.ctx.canvas.width,this.ctx.canvas.height)
    }

    draw(){
     this.background.draw()
     this.pamel.draw()
     this.obstacles.draw()
    }

    move(){
     this.background.move()
     this.pamel.move()
     this.obstacles.move()
    }

    stop(){

    }

    gameOver() {
        // this.img = new Image()
        // this.img.src = "../images/dead.png"
        // clearInterval(this.intervalId);
      }


}