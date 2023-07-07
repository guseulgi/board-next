import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link';
import React from 'react'
// import { useState } from 'react';

export default async function Write(){
  // let [src, setSrc] = useState('');

  // const session = await getServerSession(authOptions);
  // if(session === null) {
  //   return (
  //     <div>
  //       <h2>로그인 후 이용하실 수 있습니다.</h2>
  //     </div>
  //   )
  // }

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input placeholder='제목' name='title' required/>
        <input placeholder='내용' name='content' required/>
        <button type="submit">작성하기</button>
      </form>
      {/* <input type="file" accept="image/*" onChange={ 
        async (e)=>{
          // let file = e.target.files[0]
          // let filename = encodeURIComponent(file.name)
          // let res = await fetch('/api/post/image?file=' + filename)
          // res = await res.json()

          // //S3 업로드
          // const formData = new FormData()
          // Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
          //   formData.append(key, value)
          // })
          // let result = await fetch(res.url, {
          //   method: 'POST',
          //   body: formData,
          // })
          // console.log(result)

          // if (result.ok) {
          //   setSrc(result.url + '/' + filename)
          // } else {
          //   console.log('실패')
          // }
        }
      } /> */}
      {/* <img src={src}/> */}
    </div>
  )
}