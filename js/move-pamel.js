class MovePamel{
   constructor(movePamel){
     this.elem = movePamel // los elementos del movimientos de Pamel
     this.keys = {
        TOP: 38,
        DOWN: 40,
        RIGHT: 39
    }

   }

   init(){
       document.addEventListener('keydown', (event) => {
         switch(event.keyCode){
             case this.keys.RIGHT:
                 this.elem.vx += 1.5
                 break;
            //   case this.keys.DOWN:
            //       this.elem.vy += 5 // Miraremos hacer que el personaje automaticamente
            //       this.elem.y += 5  // baje cuando salga de la segunda planta
            //       break;
              case this.keys.TOP:
                  if(this.elem.y === this.elem.y0){ //this.elem.jump si se pasa a pamel en metodo JUMP
                  this.elem.vy -= 15
                  this.elem.y -= 10
                  }
                    break;
         }
       })

       document.addEventListener('keyup', (event) => {
        switch(event.keyCode){
            case this.keys.RIGHT:
                this.elem.vx = 0
                break;
            case this.keys.DOWN:
                this.elem.vy = 0
                break;

            case this.keys.TOP:
                this.elem.vy = 0
                break;
         }
       })
   
   }
}