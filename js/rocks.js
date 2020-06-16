//funciones de los obstacles
class Rocks{
        constructor(ctx) {

            this.ctx = ctx
 
            this.canvasSize= {
                w: undefined,
                h: undefined
            }
    
            this.imag = new Image()
            this.imag.src = '../images/rocks.png'
    
            this.rocksSize = { w: 50, h: 50 }
            this.rocksPos = { x:0, y: 0 }
            this.rocksVel = { x: 15, y: 15 }
            this.rocksPhysics = { gravity: 0.02 }

            this.rocksPos.x = (Math.random() * (600-1291) +600)
        }
    
        draw() {
            
            this.ctx.drawImage(this.imag, this.rocksPos.x, this.rocksPos.y, this.rocksSize.w, this.rocksSize.h)
    
        }

        move() {
            this.rocksPos.x += this.rocksVel.x
            this.rocksVel.y += this.rocksPhysics.gravity
            this.rocksPos.y += this.rocksVel.y
    
            this.rocksPos.y > this.canvasSize.h - this.rocksSize.h ? this.rocksVel.y *= -1 : null
            this.rocksPos.x > this.canvasSize.w - this.rocksSize.w ? this.rocksVel.x *= -1 : null
        }

    }

  