'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function DetailLink(props) {
  const router = useRouter();
  return (
    <button onClick={() => {
      router.push(props.link);
    }}>자세히</button>
  )
}
