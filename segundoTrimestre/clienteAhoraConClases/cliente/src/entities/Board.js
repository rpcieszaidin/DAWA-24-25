export class Board {
    #board = null;
    #states = {
        NO_BUILD : 0,
        BUILD : 1
    }
    #state = null;

    constructor() {
        this.#state = this.#states.NO_BUILD;
    }

    build(payload) {
        const { size, elements } = payload;
        this.#board = new Array(size);
        

        this.#state = this.#states.BUILD;

    }

    get board() {
        if (this.#state === this.#states.BUILD) {
            return this.#board;
        } return undefined;
    }
}