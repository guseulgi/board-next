import { connectDB } from "@/utils/database";
import bcrypt from 'bcrypt';
import { ObjectId } from "mongodb";

export default async function handler(requset, response) {
  if(requset.method == 'POST') {
    const client = await connectDB;
    if(requset.body.name === '' || requset.body.email === '' || requset.body.password === '') return;

    const duplicated = await client.db('forum').collection('user_cred').findOne({
      email : requset.body.email,
    });
    if(duplicated !== null) {
      return response.status(302).json('이미 가입된 이메일입니다!');
    }

    const hashPw = await bcrypt.hash(requset.body.password, 10);
    requset.body.password = hashPw;
    await client.db('forum').collection('user_cred').insertOne(requset.body);
    
    return response.redirect(302, '/list');
  }
}