class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.counter = 0;
  }

  draw(counter) {
    this.counter = counter;
    this.ctx.font = "30px Comic Sans";
    this.ctx.fillStyle = "#FF6666";
    this.ctx.fillText(
      `Score: ${this.counter}`,
      this.ctx.canvas.width * 0.65,
      this.ctx.canvas.height * 0.08
    );
  }

  scoreFinal() {
    this.ctx.font = "50px Comic Sans";
    this.ctx.fillStyle = "#FF6666";
    this.ctx.fillText(
      `Score final: ${this.counter}`,
      this.ctx.canvas.width * 0.4,
      this.ctx.canvas.height * 0.58
    );
  }
}

class Health extends Score {
  constructor(ctx) {
    super(ctx);
  }
  draw(counter) {
    this.counter = counter;
    this.ctx.font = "30px Comic Sans";
    this.ctx.fillStyle = "#FF6666";
    this.ctx.fillText(
      `Health: ${this.counter}`,
      this.ctx.canvas.width * 0.1,
      this.ctx.canvas.height * 0.08
    );
  }
}
