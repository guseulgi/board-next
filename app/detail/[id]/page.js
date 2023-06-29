import { connectDB } from "@/utils/database"
import { ObjectId } from 'mongodb'

export default async function Detail(props) {
  const client = await connectDB;
  const result = await client.db('forum').collection('post').findOne({ _id : new ObjectId(props.params.id)});

  return (
    <div>
      <h2>글제목 : {result.title}</h2>
      <p>글내용 : {result.content}</p>
    </div>
  )
}