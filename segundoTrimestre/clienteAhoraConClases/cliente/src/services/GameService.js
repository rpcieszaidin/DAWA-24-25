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
        "NEW_PLAYER" : this.do_newPlayer
    };
    constructor(){
        this.#state = this.#states.WAITING
    }
    do (data) {
        this.#actionsList[data.type] (data.content)
    };
    do_newPlayer (content) {
        console.log("ha llegado un jugador nuevo");
    };
    
}