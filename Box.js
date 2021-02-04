class Box {
    constructor(x, y, width, height){
      this.visiblity=255
    }
    display(){
      if (this.body.speed<3){}

        else{push ()
          World.remove(world,this.body)
         this.visiblity=this.visiblity-5
       tint (255,this.visiblity)
       pop ();
        }
        }

    }