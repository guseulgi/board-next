'use client'

import React from 'react'
import { signIn } from 'next-auth/react'

export default function LoginBtn() {
  return (
    <button onClick={() => {
      signIn()
    }}>LogIn</button>
  )
}
