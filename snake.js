
class Game{
  Snake=[];
  director=null;
  direction=2;
  sizeSquare=10;
  canvas=null;

  constructor(txtButton, txtState, canvas){
    this.txtButton=txtButton;
    this.txtState=txtState;
    this.canvas=canvas;

    this.ctx=this.canvas.getContext("2d");
  }

// Inicializador del juego
  Init(){
    this.PrintState("Inicia");

    let square= new Objeto();
    squere.X=15;
    squere.Y=15;
    this.Snake.push(square);

    document.addEventListener("keypress", function (e) {
      oGame.PrintKey(e.key + " " +e.keyCode);

      switch (e.keyCode) {
        case 119:
          oGame.direction=1;
          break;
        case 100:
          oGame.direction=2;
          break;
        case 115:
          oGame.direction=3;
          break;
        case 97:
          oGame.direction=4;
          break;
      
      }
    })

    this.director= setInterval(()=>{
      this.Next();
      this.Show();
    },300)
  }

  Next(){
    this.PrintState("Mueve: "+ this.direction);
    switch (this.direction) {
      case 1:
        this.Snake[0].Y--;
      break;
      case 2:
        this.Snake[0].X++;
      break;
      case 1:
        this.Snake[0].Y++;
      break;
      case 1:
        this.Snake[0].X--;
      break;
    }
  }

  Show(){
    this.ctx.clearReact(0,0,this.canvas.width, this.canvas.height);

    this.Snake.map(function(square){
      this.ctx.fillStyle="black";
      this.ctx.fillReact(square.X * this.sizeSquare, square.Y * this.sizeSquare, this.sizeSquare, this.sizeSquare);
    })

  }

  PrintState(text){
    this.txtState.value=text;
  }

  PrintKey(text){
    this.txtButton.value=text;
  }


}

var oGame= new Game(txtButton, txtState, canvas);
oGame.Init();