import {connectDB} from '@/utils/database'

export default async function handler(request, response) {
  const client = await connectDB;
  const result = await client.db('forum').collection('post').find().toArray();

  if(request.method == 'GET') {
    return response.status(200).json(result);
  }
}