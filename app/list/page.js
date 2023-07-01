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

  // 로그인이 되어야 접근이 가능하게 처리
  if(session === null) {
    return (
      <h2>로그인이 필요한 메뉴입니다.</h2>
    )
  }

  const client = await connectDB;
  let boardList = await client.db('forum').collection('post').find().toArray();
  // boardList 내의 _id 가 ObjectId 타입이라 워닝을 발생하므로 아래와 같이 간단하게 만들어주는 과정을 추가함
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
