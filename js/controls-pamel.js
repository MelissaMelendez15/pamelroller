class Controls {
  constructor(player) {
    this.player = player;
    this.keys = {
      TOP: 38,
      LEFT: 37,
      RIGHT: 39,
    };
  }
  init() {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case this.keys.RIGHT:
          this.player.vx += 1.5;
          break;
        case this.keys.LEFT:
          this.player.vx -= 2;
          break;
        case this.keys.TOP:
          this.player.jump();
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case this.keys.RIGHT:
          this.player.vx = 0;
          break;
        case this.keys.LEFT:
          this.player.vx = 0;
          break;
        case this.keys.TOP:
          this.player.vy = 0;
          break;
      }
    });
  }
}
