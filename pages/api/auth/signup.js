import { connectDB } from "@/utils/database";
import bcrypt from 'bcrypt';

export default async function handler(requset, response) {
  if(requset.method == 'POST') {
    const client = await connectDB;
    const hashPw = await bcrypt.hash(requset.body.password, 10);
    requset.body.password = hashPw;
    await client.db('forum').collection('user_cred').insertOne(requset.body);
    
    return response.redirect(302, '/list');
  }
}