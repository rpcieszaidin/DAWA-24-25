import { io } from "../../node_modules/socket.io-client/dist/socket.io.esm.min.js";
import { GameService } from "./GameService.js";

export const ConnectionHandler = {
    connected: false,
    socket: null,
    url: null,
    gameService: new GameService(),
    init: (url, onConnectedCallBack, onDisconnectedCallBack) => {
        let { socket } = ConnectionHandler; 
        socket = io(url);
        socket.onAny((data) => {
            console.log("Esta llegando: ");
            console.log(data);
          });
        socket.on("connect", (data) => {
            socket.on("connectionStatus", (data) => {
                ConnectionHandler.connected = true;
                console.log(data);
                onConnectedCallBack();
            });
            socket.on("NEW_PLAYER", (data) => {
                ConnectionHandler.gameService.do(data);
                socket.emit("message",{ type: "HELLO", content: "Hello world!"});
            })
            socket.on("disconnect", () => {
                ConnectionHandler.connected = false;
                onDisconnectedCallBack();
            });
        })
    }
}