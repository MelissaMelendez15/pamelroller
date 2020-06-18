// Todo lo general del juego

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
    //this.platform = new Platform(ctx)
    this.score = new Score(ctx);
    this.health = new Health(ctx);

    this.rocks = [];
    this.ticksRocks = 0;

    this.star = [];
    this.ticksStar = 0;

    this.platform = [];
    this.ticksPlatform = 0;

    this.frames = 0; // contador de puntos

    this.counter = 0

    this.gameOver = new Image();
    this.gameOver.src = "images/gameover.png"

    this.music = new Audio()
    this.music.src = "music/music.mp3"
    this.ouch = new Audio
    this.ouch.src = "music/ouch.mp3"
    this.points = new Audio()
    this.points.src = "music/star.mp3"
    this.jumpm = new Audio()
    this.jumpm = "music/jump.mp3"
    this.gameOverm = new Audio()
    this.gameOverm.src = "music/gameover.mp3"

  }

  start() {
    this.music.play()
    // boton inicio del juego con la llamada en index
    this._intervalId = setInterval(() => {

      if (this.counter > 100) {
          this.counter = 0
      }
      this.counter++
      this.clear();
      this.addRocks();
      this.addStar();
      this.addPlatform();
      this.isCollision();
      this.drawGameOver();
      this.draw();
      this.move();
    }, 1000 / 60);
    

    setTimeout(() => {
      this.stop()
    },100000)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.rocks.filter((obs) => obs.x + obs.w > 0);
    this.star.filter((e) => e.x + e.w < 0);
    this.platform.filter((floor) => floor.x + floor.w < 0);
  }

  draw() {
    this.background.draw();
    this.pamel.draw(this.counter);
    this.platform.forEach((floor) => {
      floor.draw();
    });
    this.rocks.forEach((obs) => {
      obs.draw();
    });
    this.star.forEach((e) => {
      e.draw();
    });
    this.score.draw(this.frames);
  }

  move() {
    this.background.move();
    this.pamel.move();
    this.platform.forEach((floor) => {
      floor.move();
    });
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

  addPlatform() {
    if (this.ticksPlatform === 500) {
      this.ticksPlatform = 0;
      this.platform.push(new Platform(ctx));
    }
  }
  isCollision() {
    const pamel = this.pamel;

    this.rocks.forEach((obs, i) => {
      const obsX = pamel.x + pamel.w > obs.x && pamel.x < obs.x + obs.w;
      const obsY = pamel.y + pamel.h > obs.y && pamel.y < obs.y + obs.h;
      if (obsX && obsY) {
        this.ouch.play()
        this.rocks.splice(i, 1);
        pamel.health -= 1;
        this.frames -= 1; // resta puntos de score
      }
      if (pamel.health === 0) {
        this.music.pause()
        this.gameOverm.play()
        this.gameOver = true
        this.stop()

      }
    });
    this.star.forEach((e, i) => {
      const obsX = pamel.x + pamel.w > e.x && pamel.x < e.x + e.w;
      const obsY = pamel.y + pamel.h > e.y && pamel.y < e.y + e.h;
      if (obsX && obsY) {
        this.points.play()
        this.star.splice(i, 1);
        pamel.health++;
        this.frames += 5; // gana 10 puntos en score
      }
    });

    this.platform.forEach((floor) => {
      const obsX =
        pamel.x < floor.x + floor.width && pamel.x + pamel.width - 20 > pamel.x;
      const obsY =
        pamel.y < floor.y + floor.height && pamel.y + pamel.height > floor.y;

      if (obsX && obsY) {
        pamel.y = 250;
        pamel.y0 = pamel.y;
        if (pamel.x + pamel.width - 100 > floor.x + floor.width) {
          // hace que se baje del ancho de la piedra
          pamel.y = 300;
          pamel.y0 = pamel.y;
        }
      }
    });
  }

  drawGameOver() {
    if (this.gameOver) {
      this.ctx.drawImage(
        this.gameOver,
        this.x,
        this.y,
        this.w,
        this.h
      )
    }
  }
stop() {
    clearInterval(this.intervalId);
  
  }
}
