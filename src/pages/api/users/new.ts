
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";
import createUser from "../../../server/db/user";
import User from '../../../Interfaces/User';

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    
    if(req.method !== 'POST' ) return res.status(400).json("Invalid request")
    const user:User = req.body;
    const createdUser =  await createUser(user)
    console.log(createdUser)
    res.status(200).json(createdUser);
  } catch (error) {
    res.status(400).json(error)
  }
};

export default user;
