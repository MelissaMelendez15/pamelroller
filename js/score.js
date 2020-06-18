class Score {
    constructor(ctx) {
        this.ctx = ctx;
        this.counter = 0


    }

    draw(counter) {
        this.counter = counter
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = 'black'
        this.ctx.fillText(`Score: ${this.counter}`, this.ctx.canvas.width * 0.65, this.ctx.canvas.height * 0.08)
    }

    scoreFinal() {
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'black'
        this.ctx.fillText(`Score final: ${this.counter}`, this.ctx.canvas.width * 0.5, this.ctx.canvas.height * 0.55)
    }
}

class Health extends Score {
    constructor(ctx) {
        super(ctx)
    }
    draw(counter) {
        this.counter = counter
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = 'black'
        this.ctx.fillText(`Health: ${this.counter}`, this.ctx.canvas.width * 0.1, this.ctx.canvas.height * 0.08)
    }
}