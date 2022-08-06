import Message from "../../Interfaces/Message";
import { prisma } from "./client";
export default async function createMessage(message: Message) {
  const createMessage = prisma.message.create({
    data: {
      room: {
        connect: { id: message.roomId },
      },
      sender: {
        connect: {
          id: message.senderId,
        },
      },
      text: message.text,
    },
    include: { sender:true,room: true}
  });
  return await createMessage;
}
