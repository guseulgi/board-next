import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  let session = await getServerSession(request, response, authOptions);

  if(request.method === 'POST') {
    if(session === 'null') return;

    const client = await connectDB;
    request.body = JSON.parse(request.body);
    
    const newComment = {
      parent : new ObjectId(request.body.parent),
      content : request.body.content,
      author : session.user.email,
    }

    await client.db('forum').collection('comment').insertOne(newComment);
    const newCommentList = await client.db('forum').collection('comment').find({ parent : new ObjectId(request.body.parent )}).toArray();
    return response.json(newCommentList);
  }
}