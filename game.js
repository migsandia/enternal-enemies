'use strict'

class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.enemies =[];

  };

  startLoop() {
    console.log('que comiencen los juegos del hambre');
    const loop = () => {
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      console.log('que comiencen los juegos del hambre');
      //clear
      //draw

      window.requestAnimationFrame(loop);
    }

    window.requestAnimationFrame(loop);
  }

  updateCanvas(){

  };

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  };

  drawCanvas(){

  };
}