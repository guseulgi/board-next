import React from 'react'
import {connectDB} from '@/utils/database'
import Link from 'next/link';
import ListItem from './ListItem';
// import DetailLink from './DetailLink';

export default async function List() {
  const client = await connectDB;
  let boardList = await client.db('forum').collection('post').find().toArray();
  boardList = boardList.map((el) => {
    return {
      ...el,
      _id : el._id.toString(),
    }
  });

  return (
    <div className="list-bg">
      <Link prefetch={false} href='/write'>글쓰기</Link>
      <ListItem boardList={boardList} />
    </div>
  )
} 
