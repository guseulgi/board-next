import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(requset, response) {
  const client = await connectDB;
  let session = await getServerSession(requset, response, authOptions);
  if(!session) return;

  if(requset.method == 'POST') {
    const findPost = await client.db('forum').collection('post').findOne({
      _id : new ObjectId(requset.body.id)
    })
    if(session.user.email === findPost.author.email) {
      let result = await client.db('forum').collection('post').deleteOne({
        _id : new ObjectId(requset.body.id),
      });

      // 삭제를 시도할 때 그 결과값을 반환해준다. deletedCount 가 1이면 성공, 0이면 실패
      if(result.deletedCount === 1) {
        return response.redirect(302, '/list');
      } else if(result.deletedCount === 0) {
        return response.redirect(500, '/list');
      }
    }
  }
}