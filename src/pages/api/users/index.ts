// src/pages/api/user.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  //const user = await prisma.example.findMany();
  res.status(200).json("No data yet");
};

export default user;
