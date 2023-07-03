'use client'

import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

export default function Comment({ id }) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    async function commentFetch() {
      await fetch(`/api/comment/list?id=${id}`)
        .then((r) => r.json())
        .then((result) => {
          setCommentList(result);
        })
    }

    commentFetch();
  }, []);

  return (
      <div>
        <div>댓글목록</div><hr/>
        <ul>
          {
            commentList.length > 0 ?
            commentList === [] ? null : commentList.map((el, idx) => {
              return (
                <li key={idx} >{el.author} : {el.content}</li>
              )
            }) : '로딩 중입니다.'
          }
        </ul>
        <input ref={inputRef} onChange={(evt) => {
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
            .then(r => r.json())
            .then((result) => {
              setCommentList(result);
            });
          inputRef.current.value = '';
        }}>댓글전송</button>
      </div>
  )
} 
