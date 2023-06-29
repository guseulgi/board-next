import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link';
import React from 'react'

export default async function Write(){
  const session = await getServerSession(authOptions);
  if(session === null) {
    return (
      <div>
        <h2>로그인 후 이용하실 수 있습니다.</h2>
      </div>
    )
  }

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input placeholder='제목' name='title' required/>
        <input placeholder='내용' name='content' required/>
        <button type="submit">작성하기</button>
      </form>
    </div>
  )
}