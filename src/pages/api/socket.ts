import {Server} from 'socket.io'
import rooms from "../../data/rooms";


export default function SocketHandler(_:any, res:any) {

  if (res.socket.server.io) {
    console.log("socket is running");
    res.end()
    return;
  }
  const io = new Server(res.socket.server);
  io.on("connect", (socket) => {
    socket.emit(
      "welcome",
      `Welcome ${socket.id}, you are now connected to the Server`
    );
    socket.emit("rooms", rooms);
  });
  res.end("This is the sockets api");
}
