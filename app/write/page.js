import React from 'react'

export default function Write(){
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input placeholder='제목' name='title' required/>
        <input placeholder='내용' name='content' required/>
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}