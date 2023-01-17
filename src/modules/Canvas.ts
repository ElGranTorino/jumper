import { COLORS } from "../data/global";
import { ComponentColor } from "./Components";

export interface CanvasElement {
    x: number;
    y: number;
    color: string;
}

export interface CanvasRect extends CanvasElement {
    width: number;
    height: number;
}

export interface CanvasText extends CanvasElement {
    text: string;
    font: string;
}

export interface CanvasCircle extends CanvasElement {
    radius: number;
    fill: boolean;
    lineWidth: number;
}

export default class Canvas {
    private $el: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor() {
        this.$el = document.createElement('canvas');
        this.ctx = this.$el.getContext('2d')!;

        this.$el.width = innerWidth;
        this.$el.height = innerHeight;
        
        document.querySelector('#app')?.append(this.$el);
    }

    public drawRect(rectParams: CanvasRect): void {
        const { x, y, width, height, color } = rectParams;

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    public drawCircle(circleParams: CanvasCircle): void {
        const {x, y, radius, color, lineWidth, fill = true } = circleParams;

        this.ctx.beginPath();
        this.ctx.lineWidth = lineWidth;
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        this.ctx.strokeStyle = color;

        if (fill) {
            this.ctx.fillStyle = color;
            this.ctx.fill();
        
            return;
        }

        this.ctx.stroke();
        this.ctx.closePath();
    }

    public drawText(textParams: CanvasText): void {
        const {x, y, color, text, font = 'bold 20px sans-serif'} = textParams;

        this.ctx.fillStyle = color;
        this.ctx.font = font;
        this.ctx.fillText(text, x, y);
    }
    public setBackground(color: ComponentColor) {
        const {white, black} = COLORS;
        this.clear();
        this.drawRect({
            height: innerHeight,
            width: innerWidth,
            x: 0,
            y: 0,
            color: color === 'white' ? white : black
        });
    }
    public clear(){
        this.ctx.clearRect(0, 0, innerWidth, innerHeight)
    }
    public resize() {
    }
}