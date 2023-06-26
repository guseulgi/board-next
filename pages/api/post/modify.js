import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(requset, response) {
  const client = await connectDB;
  console.log(requset.body)
  
  if(requset.method == 'GET') {

  } else if(requset.method == 'POST') {
    await client.db('forum').collection('post').updateOne({
      _id : new ObjectId(requset.body.id),
    }, {$set : {
      _id : new ObjectId(requset.body.id),
      title : requset.body.title,
      content : requset.body.content,
    }});

    return response.redirect(302, '/list');
  }
}