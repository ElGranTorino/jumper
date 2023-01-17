// Assets
import './assets/styles/main.sass'
import Canvas from './modules/Canvas';
import Controller from './modules/Controller';
import Player from './modules/Player';

// Modules


export default class Game {
    private controller: Controller;
    private canvas: Canvas;
    private player: Player;

    constructor() {
        this.controller = new Controller();
        this.canvas = new Canvas();
        this.player = new Player(this.controller, this.canvas,);
    }
}

new Game();