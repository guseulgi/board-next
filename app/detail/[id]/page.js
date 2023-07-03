import { connectDB } from "@/utils/database"
import { ObjectId } from 'mongodb'
import Comment from "./Comment";

export default async function Detail(props) {
  const client = await connectDB;
  const detailResult = await client.db('forum').collection('post').findOne({ _id : new ObjectId(props.params.id)});

  return (
    <div>
      <h2>상세페이지</h2>
      <h2>글제목 : {detailResult.title}</h2>
      <p>글내용 : {detailResult.content}</p>
      <Comment id={props.params.id} />
    </div>
  )
}