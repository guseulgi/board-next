import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link';
import React from 'react'

export default async function Register() {
  let session = await getServerSession(authOptions);
  if(session !== null) {
    return (
      <div>
        <h2>이미 로그인 중입니다.</h2>
        <Link href='/' prefetch={false}>홈으로</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>회원가입</h2>
      <form method="POST" action="/api/auth/signup">
        <input name="name" type="text" placeholder="이름" required /> 
        <input name="email" type="text" placeholder="이메일" required />
        <input name="password" type="password" placeholder="비번" required />
        <button type="submit">id/pw 가입요청</button>
      </form>
    </div>
  )
}
