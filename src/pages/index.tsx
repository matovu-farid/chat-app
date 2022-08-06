import { useEffect, useState } from "react";
import { io } from "socket.io-client";
let socket;
export default function Home() {
  const baseUrl = "/api/socket/";
  const [rooms, setRooms] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(()=>{
    
  },[message])
  useEffect(() => {
    connectToServer();
  }, []);
  const connectToServer = async () => {
    await fetch(baseUrl);
    socket = io();

    socket.on("welcome", (msg) => {
      console.log(msg);
    });
    socket.on("rooms", (rooms) => {
      setRooms(rooms);
    });
  };

  return (
    <div className="flex h-screen">
      <div className="text-white bg-slate-600 h-full w-1/12 p-2">
        <ul className="list-none ">
          {rooms.map(({ name, image, id }) => (
            <li key={id}>
              <div className="w-14 h-14 mx-auto">
                <img
                  className="object-contain"
                  width={50}
                  height={50}
                  src={image}
                  alt={name}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full">
        <ul></ul>
        <div>
          <textarea
            name="message"
            id="message"
            className="flex w-full"
            rows={10}
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
