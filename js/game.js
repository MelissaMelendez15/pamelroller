
// Todo lo general del juego 

class Game{

    constructor(ctx){
        this.ctx = ctx

        this.intervalId = null

        this.background = new Background(ctx)
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
    }

    move(){
     this.background.move()
    }
}


//     keys: {
//         SPACE: 32
//     },
//     balls: [],

//     init(id) {
         //this.canvasDom = document.getElementById(id)
//         this.ctx = this.canvasDom.getContext('2d')
//         this.setDimensions()
//         this.setEventListeners()
//         this.start()
//     },
//     setDimensions() {
//         this.canvasSize.w = window.innerWidth
//         this.canvasSize.h = window.innerHeight
//         this.canvasDom.setAttribute('width', this.canvasSize.w)
//         this.canvasDom.setAttribute('height', this.canvasSize.h)
//     },
//     setEventListeners() {
//         document.onkeydown = e => {
//             e.keyCode === this.keys.SPACE ? this.createNewBall() : null
//         }
//     },
//     start() {
//         setInterval(() => {
//             this.clearScreen()
//             this.balls.forEach(elm => elm.draw())
//             this.removeBalls()
//         }, 20)
//     },
//     removeBalls() {
//         this.balls = this.balls.filter(elm => elm.ballPos.x >= -elm.ballSize.w)
//     },
//     createNewBall() {
//         let ball = new Ball(this.ctx, this.canvasSize)
//         this.balls.push(ball)
//     },
//     clearScreen() {
//         this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
//     }
// }