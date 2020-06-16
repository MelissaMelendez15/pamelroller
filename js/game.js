
// Todo lo general del juego 

class Game{
    constructor(ctx){
        this.ctx = ctx

        this.intervalId = null

        this.background = new Background(ctx)
        this.pamel = new Pamel(ctx)
        this.rocks = new Rocks(ctx)

        this.rocks = []
        this.ticksRocks = 0

    }
    
    start (){ // boton inicio del juego con la llamada en index
    this._intervalId = setInterval(() =>{

         this.clear()
         this.addRocks()
         this.draw()
         this.move()    

    },1000/30)
    }

    clear() {

        this.ctx.clearRect(0,0, this.ctx.canvas.width,this.ctx.canvas.height)

    //     this.rocks.filter((rock) => {
    //         rock.rocksPos.x + rock.rocksSize.w > 0
    // })
    }

    draw(){
     this.background.draw()
     this.pamel.draw()
     this.rocks.forEach((rocks) => {
         rocks.draw()
     })

    }

    move(){
     this.background.move()
     this.pamel.move()
     this.rocks.forEach((rocks) => {
        rocks.move()
    })
    }

    stop(){

    }

    gameOver() {
        // this.img = new Image()
        // this.img.src = "../images/dead.png"
        // clearInterval(this.intervalId);
      }

      addRocks(){
        if(this.ticksRocks++ === 250){
            this.ticksRocks = 0
        }
        this.rocks.push(new Rocks(ctx))
 
     }

}