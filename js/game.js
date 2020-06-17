// Todo lo general del juego 

class Game {
    constructor(ctx) {
        this.ctx = ctx

        this.intervalId = null

        this.canvasWidth = this.ctx.canvas.width
        this.canvasHeight = this.ctx.canvas.height

        this.x = 0
        this.y = 0

        this.background = new Background(ctx)
        this.pamel = new Pamel(ctx)
        // this.rocks = new Rocks(ctx)
        // this.star = new Star(ctx)

        this.rocks = []
        this.ticksRocks = 0

        // this.gameOver = false
        // this.gameOver = new Image()
        // this.gameOver.src = "/images/dead.png"


    }

    start() { // boton inicio del juego con la llamada en index
        this._intervalId = setInterval(() => {

            this.clear()
            this.addRocks()
            this.draw()
            this.move()

        }, 1000 / 60)
    }

    clear() {

        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        this.rocks.filter((obs) => obs.x + obs.w > 0)

    }

    draw() {
        this.background.draw()
        this.pamel.draw()
        //this.star.draw()
        this.rocks.forEach((obs) => {
            obs.draw()
        })

    }

    move() {
        this.background.move()
        this.pamel.move()
        //  this.star.move()
        this.rocks.forEach((obs) => {
            obs.move()
        })
    }

    addRocks() {
        if (this.ticksRocks === 150) {
            this.ticksRocks = 0

        }
        if (this.ticksRocks % 20 === 0) {

            this.rocks.push(new Rocks(ctx))
        }

        this.ticksRocks++

        console.log(this.rocks)

    }


    isCollision() {
        const pamel = this.pamel

        this.rocks.forEach((obs, i) => {
            const obsX = pamel.x + pamel.width > obs.x && pamel.x < obs.x + obs.width
            const obsY = pamel.y + pamel.height > obs.y && pamel.y < obs.y + obs.height
            if (obsX && obsY) {
                this.rocks.splice(i, 1)
                pamel.health -= 1
            }

            
        })

        //     this.star.forEach(() => {
            
        // })
        // }


        // stop() {

        // }
        // // gameOver() {
        // //     clearInterval(this.intervalId);
        // //   }



    }
}