import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function Modify(props) {
  const client = await connectDB;
  const result = await client.db('forum').collection('post').findOne({
    _id : new ObjectId(props.params.id),
  })
  return (
    <div className="p-20">
      <h4>글수정</h4>
      <form action="/api/post/modify" method="POST" >
        <input defaultValue={result.title} name='title' required/>
        <input defaultValue={result.content} name='content' required/>
        <input name='id' value={props.params.id} style={{display: 'none'}}/>
        <button type="submit">수정하기</button>
      </form>
    </div>
  )
}
