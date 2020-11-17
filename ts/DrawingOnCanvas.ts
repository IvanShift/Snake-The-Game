import { randomBytes } from "crypto";

export  class DrawingCanvas {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private paint: boolean;

    private clickX: number[] = [];
    private clickY: number[] = [];
    private clickDrag: boolean[] = [];

    constructor() {
        let canvas = document.getElementById('canvas') as
            HTMLCanvasElement;
        let context = canvas.getContext("2d");
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 1;

        this.canvas = canvas;
        this.context = context; 

      //  this.redraw();
      //  this.createUserEvents();
    }

    DrawRect() {
        //нарисуем что-нибудь
        this.context.fillRect(Math.floor((Math.random() * 50) + 1), 10, Math.floor((Math.random() *50) + 1), 20);
        
    }
    SomeText() { return "test"}
}