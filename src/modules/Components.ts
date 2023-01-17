import { COLORS } from "../data/global";
import Canvas from "./Canvas";

export type ComponentColor = 'black' | 'white';

export class Component {
    readonly x: number;
    readonly y: number;
    protected color: ComponentColor;
    protected canvas: Canvas;
    constructor(x: number, y: number, color: ComponentColor, canvas: Canvas) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvas = canvas;
    }

    public set updateColor(color: ComponentColor){
        this.color = color;
    }
}

export class Brick extends Component {
    readonly width: number;
    readonly height: number;
    
    constructor(x: number, y: number, width: number, height: number, color: ComponentColor, canvas: Canvas) {
        super(x, y, color, canvas);

        this.width = width;
        this.height = height;

        this.render();
    }
    private render():void {
        const {black, white} = COLORS;

        const color = this.color === 'black' ? black : white;
        
        this.canvas.drawRect({
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            color: color,
        });
    }
}

export class Endpoint extends Component {

}