import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if(request.method === 'GET') {

    const client = await connectDB;
    const result = await client.db('forum').collection('comment').find({ parent : new ObjectId(request.query.id) }).toArray();

    return response.status(200).json(result);
  }
}