import { connectDB } from '@/utils/database'

export default async function handler(request, response) {
  const client = await connectDB;
  
  if(request.method == 'GET') {

  } else if(request.method == 'POST') {
    if(request.body.title === '' || request.body.content === '') return response.status(400).json('글 등록 실패');
    
    try {
      await client.db('forum').collection('post').insertOne(request.body);
      return response.redirect(302, '/list');
    } catch (error) {
      throw error;
    }

  }
}
