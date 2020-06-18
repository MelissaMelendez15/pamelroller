class Background {
  constructor(ctx) {
    this.ctx = ctx;

    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;

    this.x = 0;
    this.y = 0;

    this.vx = -3;
    this.vy = 0;

    this.ax = 0;
    this.ay = 0;

    this.img = new Image();
    this.img.src = "/images/PamelBackground.png";
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

    this.ctx.drawImage(
      // se repite el fondo para hacer que donde termine una, inicie la siguiente
      this.img,
      this.x + this.ctx.canvas.width,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    (this.vx += this.ax), (this.vy += this.ay);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.w <= 0)
      // la posicion x + el ancho si es menor a 0 se reinicia
      this.x = 0;
  }
}
