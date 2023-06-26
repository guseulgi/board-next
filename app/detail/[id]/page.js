import { connectDB } from "@/utils/database"
import { ObjectId } from 'mongodb'

export default async function Detail(props) {
  const client = await connectDB;
  const result = await client.db('forum').collection('post').findOne({ _id : new ObjectId(props.params.id)});

  return (
    <div>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}