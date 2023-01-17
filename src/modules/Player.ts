import Canvas from "./Canvas";
import { ComponentColor } from "./Components";
import Controller from "./Controller";

export interface PlayerParams {
    canvas: Canvas;
    controller: Controller;
    x: number;
    y: number;
    width: number;
    height: number;
    color: ComponentColor;
}

export default class Player {
    readonly width: number;
    readonly height: number;
    private y: number;
    private x: number;
    private controller: Controller;
    private canvas: Canvas;
    private color: ComponentColor;

    constructor(params: PlayerParams) {
        this.controller = params.controller;
        this.canvas = params.canvas;
        this.width = params.width;
        this.height = params.height;
        this.x = params.x;
        this.y = params.y;
        this.color = params.color;

        this.render();
    }
    private render(): void {
        this.canvas.clear()
        this.canvas.drawRect({
            color: this.color,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        });
    }
    public loop(): void {
        if(this.controller.has('ArrowRight')){
            this.x += 4;
            this.render();
        } else if (this.controller.has('ArrowLeft')){
            this.x -= 4;
            this.render();
        }
    }
}