import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('auth')
  
  if (cookie?.value !== 'S3CR3T!') {
    return NextResponse.redirect(new URL('/403', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - 403 (forbidden page)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!403|_next/static|_next/image|favicon.ico).*)',
  ],
}
