import { Board } from "../entities/Board.js";
export class GameService {
    #states = {
        WAITING : 0,
        PLAYING : 1,
        ENDED : 2
    };
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
    do (data) {
        this.#actionsList[data.type] (data.content)
    };
    do_newPlayer (content) {
        console.log("ha llegado un jugador nuevo");
    };

    do_newBoard(content) {
        console.log(content);
    }
    
}