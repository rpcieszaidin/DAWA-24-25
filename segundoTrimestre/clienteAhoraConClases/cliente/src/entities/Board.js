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

    build(content) {
        this.#state = this.#states.BUILD;

    }

    get board() {
        if (this.#state === this.#states.BUILD) {
            return this.#board;
        } return undefined;
    }
}