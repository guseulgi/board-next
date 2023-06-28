import { connectDB } from '@/utils/database'
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(request, response) {
  const client = await connectDB;
  let session = await getServerSession(request, response, authOptions);
  if(!session) return;

  if(request.method == 'GET') {

  } else if(request.method == 'POST') {
    if(request.body.title === '' || request.body.content === '') return response.status(400).json('글 등록 실패');
    
    try {
      let newPost = {
        title : request.body.title,
        content : request.body.content,
        author : session.user,
      }
      await client.db('forum').collection('post').insertOne(newPost);
      return response.redirect(302, '/list');
    } catch (error) {
      throw error;
    }

  }
}
