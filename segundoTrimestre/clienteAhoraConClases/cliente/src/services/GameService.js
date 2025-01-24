import { Board } from "../entities/Board.js";
export class GameService {
    #states = {
        WAITING : 0,
        PLAYING : 1,
        ENDED : 2
    };
    #ui = null;
    #players = [];
    #board = null;
    #state = null;
    #actionsList = {
        "NEW_PLAYER" : this.do_newPlayer,
        "BOARD" : this.do_newBoard
    };
    constructor(){
        this.#state = this.#states.WAITING;
        this.#board = new Board()
    }
    set uiSetter(ui){
        this.#ui = ui;
    }
    do (data) {
        this.#actionsList[data.type] (data.content)
    };
    do_newPlayer (payload) {
        console.log("ha llegado un jugador nuevo");
    };

    do_newBoard(payload) {
        this.#board.build(payload);
        this.#ui.drawBoard();
        
    }
    
}