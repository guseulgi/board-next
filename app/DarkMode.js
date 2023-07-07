'use client'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from "next/navigation"
import { useState } from 'react';

export default function DarkMode({mode}) {
  let router = useRouter();
  const [modeCookie, setModeCookie] = useState('');

  useEffect(() => {
    if(modeCookie === '')
      document.cookie = `mode=${mode}; max-age=3600`;
  }, []);

  return (
    <div onClick={() => {
      if (modeCookie == 'light') {
        setModeCookie('dark');
        document.cookie = `mode=dark; max-age=3600`;
        router.refresh();
      } else {
        document.cookie = `mode=light; max-age=3600`;
        setModeCookie('light');
        router.refresh();
      }
    }}> {modeCookie === 'light' ? '🌙' : '☀️'} </div>
  )
}
