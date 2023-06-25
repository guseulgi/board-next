import React from 'react'
import {connectDB} from '@/utils/database'

export default async function List() {
  const client = await connectDB;
  const boardList = await client.db('forum').collection('post').find().toArray();

  return (
    <div className="list-bg">
      {boardList.map((el, idx) => {
        return (
          <div className="list-item" key={idx}>
            <h4>{el.title}</h4>
            <p>{el.content}</p>
        </div>
        )
      })}
    </div>
  )
} 
