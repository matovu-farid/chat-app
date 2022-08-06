import Room from "../../Interfaces/Room";
import { prisma } from "./client";
export  async function createroom(room: Room) {
  const createRoom = prisma.room.create({
    data: {
      name: room.name,
      path: room.path,
      image: room.image,
      serverId: room.serverId
    },
    
  });

  return await createRoom;
}
export async function getRooms(userId:String) {
  const rooms = prisma.room.findMany({
    where: {
      
    }
  })
  
}

