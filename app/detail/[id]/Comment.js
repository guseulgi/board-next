'use client'

import { useParams } from 'next/navigation';
import React from 'react'
import { useState } from 'react'

export default function Comment({ session, id }) {
  const [comment, setComment] = useState('');

  return (
      <div>
        <div>댓글목록</div>
        <input onChange={(evt) => {
          if(evt.target.value === '') return;

          setComment(evt.target.value);
        }}/>
        <button onClick={() => {
          const fetchData = {
            parent : id,
            content : comment,
          }
          fetch('/api/comment/new', {
            method : 'POST',
            body : JSON.stringify(fetchData),
          })
        }}>댓글전송</button>
      </div>
  )
} 
