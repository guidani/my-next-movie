// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "lib/prismadb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const movie_id = req.body;
    //data is a number
    console.log("Movie data >>>" + movie_id);

    await client.favorites.create({
      data: {
        movie_id: JSON.stringify(movie_id),
      },
    });

    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    console.log("🚀 ~ file: add-favorite.ts:22 ~ error:", error);

    res.status(500).json({ message: "erro" });
  }
}
