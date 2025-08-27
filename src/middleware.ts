import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get("authjs.session-token")?.value || request.cookies.get("__Secure-authjs.session-token")?.value;
  // const token = request.cookies.get("__Secure-authjs.session-token")?.value;

  const pathname = request.nextUrl.pathname;


  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL('/', request.url));
  }
};

export const config = {
  // matcher: ["/login", "/", "/search", "/notifications", "/bookmarks", "/create", "/profile", "/settings"],
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
