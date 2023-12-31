import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import LoginBtn from './LoginBtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LogOutBtn from './LogOutBtn'
import { cookies } from 'next/headers'
import DarkMode from './DarkMode'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let userInfo = await getServerSession(authOptions);

  let modeCookie = cookies().get('mode');

  return (
    <html lang="en">
      <body className={modeCookie !== undefined && modeCookie.value === 'dark' ? 'dark-mode' : ''}>
        <div className="navbar"> 
          <Link href="/" className="logo">Appleforum</Link> 
          <Link href="/list">List</Link> 
          <Link href='/register'>Signup</Link>
          {userInfo === null 
            ? <LoginBtn /> 
            : <>
                <LogOutBtn />
                <span> {userInfo.user.name}님, 어서오세요!</span>
              </>
          }
          <DarkMode mode={modeCookie} />
        </div>  
        {children}
      </body>
    </html>
  )
}
