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
                 this.elem.vx += 1
                 break;
              case this.keys.DOWN:
                  this.elem.vy += 5
                  this.elem.y += 5
                  break;
              case this.keys.TOP:
                    this.elem.vy -= 10
                    this.elem.y -= 10   
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