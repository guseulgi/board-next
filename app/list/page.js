import React from 'react'
import {connectDB} from '@/utils/database'
import Link from 'next/link';
import ListItem from './ListItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

// 강제로 dynamic rendering 으로 build 해주는 코드
export const dynamic = 'force-dynamic';

export default async function List() {
  let session = await getServerSession(authOptions);

  if(session === null) {
    return (
      <h2>로그인이 필요한 메뉴입니다.</h2>
    )
  }

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
      <ListItem boardList={boardList} session={session} />
    </div>
  )
} 
