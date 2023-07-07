// import { getToken } from 'next-auth/jwt';
// import { NextResponse } from 'next/server'

// export async function middleware(request) {
//   const session = await getToken({ req : request })
  
//   console.log(request.nextUrl.pathname);
//   if (request.nextUrl.pathname.startsWith('/write')) {

//     if (session === null) {
//       return NextResponse.redirect(new URL('/api/auth/signin', request.url));
//     }
//   }
//   if (request.nextUrl.pathname === '/list') {
//     console.log(new Date().toLocaleString())
//     console.log(request.headers.get('sec-ch-ua-platform'))
//     return NextResponse.next()
//   }
// } 