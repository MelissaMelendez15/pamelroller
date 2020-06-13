//funciones de los obstacles
class Ball {

    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.image = new Image()
        this.image.src = 'img/basketball.png'

        this.ballSize = { w: 50, h: 50 }
        this.ballPos = { x: 0, y: 0 }
        this.ballVel = { x: 10, y: 1 }
        this.ballPhysics = { gravity: .4 }
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.image, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballPos.x += this.ballVel.x
        this.ballVel.y += this.ballPhysics.gravity
        this.ballPos.y += this.ballVel.y

        this.ballPos.y > this.canvasSize.h - this.ballSize.h ? this.ballVel.y *= -1 : null
        this.ballPos.x > this.canvasSize.w - this.ballSize.w ? this.ballVel.x *= -1 : null
    }
}