'use client'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from "next/navigation"

export default function DarkMode() {
  let router = useRouter()

  useEffect(() => {
    let isCookie = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0];
    if(isCookie === '') // 쿠키값이 아예 없을 때 나오는 에러 방지
      document.cookie = `mode=${mode}; max-age=3600`;
  }, [])
  return (
    <div onClick={() => {
      let 쿠키값 = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
      if (쿠키값 == 'light') {
        document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
        router.refresh()
      } else {
        document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        router.refresh()
      }
    }}> 🌙 </div>
  )
}
