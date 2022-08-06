
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";
import Room from '../../../Interfaces/Room';
import { createroom } from "../../../server/db/room";

const newRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    
    if(req.method !== 'POST' ) return res.status(400).json("Invalid request")
    const room:Room = req.body;
    const createdRoom =  await createroom(room)
    console.log(createdRoom)
    res.status(200).json(createdRoom);
  } catch (error) {
    res.status(400).json(error)
  }
};

export default newRoom;