export type keybutton = 
    'ArrowUp'       |
    'ArrowDown'     |
    'ArrowRight'    |
    'ArrowLeft'     |
    ' ';

export default class Controller {
    private keySet: Map<string, boolean>;
    
    constructor() {
        this.keySet = new Map();

        window.addEventListener('keydown', (e: KeyboardEvent) => this.update(e.key, true));
        window.addEventListener('keyup', (e: KeyboardEvent) => this.update(e.key, false));
    }

    protected update(key: string, state: boolean): void {
        this.keySet.set(key, state);
    }

    public has(key: keybutton): boolean {
        return this.keySet.has(key);
    }
}