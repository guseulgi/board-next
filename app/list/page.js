import React from 'react'
import {connectDB} from '@/utils/database'
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {
  const client = await connectDB;
  const boardList = await client.db('forum').collection('post').find().toArray();

  return (
    <div className="list-bg">
      {boardList.map((el, idx) => {
        return (
          <div className="list-item" key={idx}>
            <Link href={'detail/' + el._id} prefetch={false} >
              <h4>{el.title}</h4>
            </Link>
            <p>{el.content}</p>
            <DetailLink link={'detail/' + el._id}/>
          </div>
        )
      })}
    </div>
  )
} 
