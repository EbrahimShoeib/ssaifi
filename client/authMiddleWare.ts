import { NextRequest, NextResponse } from 'next/server';
import { getToken } from '@/services/authServices';

export function middleware(request: NextRequest) {
  const token = getToken()
  console.log(token);
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: '/:path*', 
};
