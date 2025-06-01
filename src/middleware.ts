// import { NextResponse, NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export async function middleware(request: NextRequest) {
//   const token = await getToken({ req: request });
//   const pathname = request.nextUrl.pathname;

//   if (!token && pathname === "/") {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   if (token && pathname === "/login") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/", "/login"],
// };

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get("authjs.session-token")?.value;
  // const token = request.cookies.get("__Secure-authjs.session-token")?.value;

  const pathname = request.nextUrl.pathname;

  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!token && pathname === "/") {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // if (!token && pathname === "/create") {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
};

export const config = {
  matcher: ["/login", "/"],
};