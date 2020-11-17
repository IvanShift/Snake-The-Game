//import { DrawingCanvas } from './DrawingOnCanvas'; 


class TDrawingCanvas
{

    private CELL_SIZE: number = 10;
    private GRID_LINE_COLOR: string = 'lightgray';
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;



    private clickX: number[] = [];
    private clickY: number[] = [];
    private clickDrag: boolean[] = [];


    constructor() {
        let canvas = document.getElementById('canvas') as
            HTMLCanvasElement;
        let context = canvas.getContext("2d");
       // context.lineCap = 'round';
      //  context.lineJoin = 'round';
      //  context.strokeStyle = 'black';
     //   context.lineWidth = 1;

        this.canvas = canvas;
        this.context = context;

        //  this.redraw();
        //  this.createUserEvents();
    }

    DrawLine(FromX, FromY, ToX, ToY: number, Color: string): void {
        this.context.beginPath();
        this.context.strokeStyle = Color;
        this.context.lineWidth = 1;
        this.context.moveTo(FromX, FromY);
        this.context.lineTo(ToX, ToY);
        this.context.stroke();
    }

    DrawGrid(): void {
        //Draw Some Rect
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 1; i < Math.floor(this.canvas.width / this.CELL_SIZE); i++)  {
            this.DrawLine(i * this.CELL_SIZE, 0, i * this.CELL_SIZE,this.canvas.height, this.GRID_LINE_COLOR);        
        }

        for (let i = 1; i < Math.floor(this.canvas.height / this.CELL_SIZE); i++) {
            this.DrawLine( 0,i * this.CELL_SIZE,  this.canvas.height,i * this.CELL_SIZE, this.GRID_LINE_COLOR);
        }


    }
    
    DrawRndRect(): void {
        //Draw Some Rect
        this.context.clearRect(0, 0, 200, 200);
        this.context.fillRect(Math.floor((Math.random() * 50) + 1), 10, Math.floor((Math.random() * 50) + 1), 20);

    }

    DrawOneSegment(Point: TPoint, Color:string)
    {
 
        let Radius: number= Math.floor(this.CELL_SIZE / 2);
        let CentrX: number= Math.floor(Point.x * this.CELL_SIZE + this.CELL_SIZE / 2);
        let CentrY: number= Math.floor(Point.y * this.CELL_SIZE - this.CELL_SIZE / 2);

        this.context.beginPath();
        this.context.strokeStyle = Color;
        this.context.lineWidth = 3;       
        this.context.ellipse(CentrX, CentrY, Radius, Radius, 0, 0, 2 * Math.PI);
        this.context.stroke();

       // console.log(CentrX + ' ' + CentrY + ' ' + Radius);
    }

    DrawSnake(Snake: TPoint[]) {
        for (let i = 0; i < Snake.length; i++) {           
            if (i == 0)
            //Head
            { this.DrawOneSegment(Snake[i],'blue')}
            //Tail
            else
            { this.DrawOneSegment(Snake[i],'green') }
            
        }

    }
}

type  TPoint=
{
        x: number;
        y: number;
}

class TSnake
{
    private Tail: TPoint[] = [];

    //Snake growth Down, StartPoint - Head
    constructor(StartPoint: TPoint, SnakeLength: number)
    {
        this.Tail.push(StartPoint);

        for (let i = 1; i<=SnakeLength; i++)
        {
            let NextPoint: TPoint = { x: StartPoint.x, y :StartPoint.y + i};
            this.Tail.push(NextPoint);
     
        }
    } 

    getTail() : TPoint[] 
    {
        return this.Tail

    }

}

class TTimer
{
    private Timer;
    private Funct: Function;

    constructor(RunFunct: Function) {
        this.Funct = RunFunct;
        this.Timer = setInterval(null, 1000);
    }
    Start(milsec: number):void {
        this.Timer = setInterval(this.Funct, milsec); 
    }
     
    Stop() {
        clearTimeout(this.Timer);
    }
}

function RunApp(): void{ 

    var el = document.getElementById("content");

   /* class Gamer {
        name: string;
        age: number;
        constructor(_name: string, _age: number) {

            this.name = _name;
            this.age = _age;
        }
    }
    var user: Gamer = new Gamer("Tom4", 29); */
    el.innerHTML = "Gamer: Tom, age: 29";


    let CurrentCanvas = new TDrawingCanvas();
    CurrentCanvas.DrawGrid();

    let BeginPoint: TPoint = { x: 20, y: 40 };
 //   BeginPoint.x = 20;
  //  BeginPoint.y=40;

    let Snake = new TSnake(BeginPoint, 5);
    CurrentCanvas.DrawSnake(Snake.getTail());

  //  BeginPoint.x = 2;
  //  BeginPoint.y = 10;

  //  CurrentCanvas.DrawOneSegment(BeginPoint,'red')
    

 //   let DrawSmth = () => CurrentCanvas.DrawRect();

  //  let DrawTimer = new TTimer(DrawSmth);
  //  DrawTimer.Start(500);
} 
RunApp();

