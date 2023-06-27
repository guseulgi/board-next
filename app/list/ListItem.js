'use client'

import Link from "next/link"
import { useState } from "react";
import { useEffect } from "react"

export default function ListItem({ boardList }) {
  // const [state, setState] = useState({ change : false });

  // useEffect(() => {
  //   setState({ change : true });
  // }, [boardList]);

  return (
    <>
      {boardList.map((el, idx) => {
        return (
          <div className="list-item" key={idx}>
            <Link href={'detail/' + el._id} prefetch={false} >
              <h4>{el.title}</h4>
            </Link>
            <p>{el.content}</p>
            {/* <DetailLink link={'detail/' + el._id}/> */}
            <Link href={'/modify/' + el._id} prefetch={false}> ✏️ </Link>
            <span onClick={(evt) => {
              fetch('/api/post/delete',{
                method : 'POST',
                headers : {
                  'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                  id : el._id,
                })
              })
              .then((response) => {
                if(response.status === 200)
                  return response.json();
                else {
                  // 서버 에러 코드 전송 시 실행할 부분
                }
              })
              .then((result) => {
                // 성공 시 실행할 부분
                //console.log(result); // 서버에서 .json() 으로 보낸 메세지 확인 가능
                evt.target.parentElement.style.opacity = 0;
                setTimeout(() => {
                  evt.target.parentElement.style.display = 'none';
                }, 1000);
              })
              .catch((err) => {
                // 인터넷 문제로 실패 시 실행할 부분
                // console.error(err);
              });
            }} style={{
              cursor : 'pointer',
              marginLeft : '15px',
            }}> 🗑️ </span>
            <span onClick={(evt) => {
              fetch('/api/ex/val')
            }} style={{
              cursor : 'pointer',
              marginLeft : '15px',
            }}> ⚠️ </span>
          </div>
        )
      })}
    </>
  )
} 