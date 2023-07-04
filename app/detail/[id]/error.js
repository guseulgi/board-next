'use client'
import React from 'react'

export default function Error({error, reset}) { //에러가 발생하면 error, reset props 를 받는다.
  return (
    <div>
      <h2>{error} 에러!</h2>
      <button onClick={() => reset()}>새로고침</button>
    </div>
  )
}
