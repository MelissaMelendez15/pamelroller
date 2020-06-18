class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.intervalId = null;

    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;

    this.x = 0;
    this.y = 0;

    this.background = new Background(ctx);
    this.pamel = new Pamel(ctx);
    this.star = new Star(ctx);
    this.score = new Score(ctx);
    this.health = new Health(ctx);

    this.rocks = [];
    this.ticksRocks = 0;

    this.star = [];
    this.ticksStar = 0;

    this.frames = 0;

    this.counter = 0;

    this.gameOver = false;
    this.gameOverImg = new Image();
    this.gameOverImg.src = "images/gameover.png";

    this.music = new Audio();
    this.music.src = "music/music.mp3";
    this.ouch = new Audio();
    this.ouch.src = "music/ouch.mp3";
    this.points = new Audio();
    this.points.src = "music/star.mp3";
    this.gameOverm = new Audio();
    this.gameOverm.src = "music/gameover.mp3";
  }

  start() {
    this.music.play();
    this.intervalId = setInterval(() => {
      if (this.counter > 500) {
        this.counter = 0;
      }
      this.counter++;
      this.clear();
      this.addRocks();
      this.addStar();
      this.isCollision();
      this.draw();
      this.move();
      this.drawGameOver();
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.rocks.filter((obs) => obs.x + obs.w > 0);
    this.star.filter((e) => e.x + e.w < 0);
  }

  draw() {
    this.background.draw();
    this.pamel.draw(this.counter);
    this.rocks.forEach((obs) => {
      obs.draw();
    });
    this.star.forEach((e) => {
      e.draw();
    });
    this.score.draw(this.frames);
    this.health.draw(this.pamel.health);
  }

  move() {
    this.background.move();
    this.pamel.move();
    this.rocks.forEach((obs) => {
      obs.move();
    });
    this.star.forEach((e) => {
      e.move();
    });
  }

  addRocks() {
    if (this.ticksRocks === 150) {
      this.ticksRocks = 0;
    }
    if (this.ticksRocks % 50 === 0) {
      this.rocks.push(new Rocks(ctx));
    }
    this.ticksRocks++;
  }

  addStar() {
    if (this.ticksStar === 150) {
      this.ticksStar = 0;
    }
    if (this.ticksStar % 100 === 0) {
      this.star.push(new Star(ctx));
    }
    this.ticksStar++;
  }

  isCollision() {
    const pamel = this.pamel;

    this.rocks.forEach((obs, i) => {
      const obsX = pamel.x + pamel.w > obs.x && pamel.x < obs.x + obs.w;
      const obsY = pamel.y + pamel.h > obs.y && pamel.y < obs.y + obs.h;
      if (obsX && obsY) {
        this.ouch.play();
        this.rocks.splice(i, 1);
        pamel.health -= 1;
        this.frames -= 1;
      }
      if (pamel.health === 0) {
        this.music.pause();
        this.gameOverm.play();
        this.Image;
        this.gameOver = true;
        this.stop();
      }
    });

    this.star.forEach((e, i) => {
      const obsX = pamel.x + pamel.w > e.x && pamel.x < e.x + e.w;
      const obsY = pamel.y + pamel.h > e.y && pamel.y < e.y + e.h;
      if (obsX && obsY) {
        this.points.play();
        this.star.splice(i, 1);
        pamel.health++;
        this.frames += 3;
      }
    });
  }

  drawGameOver() {
    if (this.gameOver) {
      this.ctx.drawImage(this.gameOverImg, this.x, this.y, this.w, this.h);
      this.score.scoreFinal();
    }
  }
  stop() {
    clearInterval(this.intervalId);
  }
}
