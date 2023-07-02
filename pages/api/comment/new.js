import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  let session = await getServerSession(request, response, authOptions);

  if(request.method === 'POST') {
    const client = await connectDB;
    
    console.log(request.body);
    const newComment = {
      ...request.body,
      author : session.user.email,
    }
    await client.db('forum').collection('comment').insertOne(newComment);

    return response.redirect(302, `/detail/${request.body.url}`);
  }
}