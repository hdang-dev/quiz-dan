// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   callbacks: {
//     authorized: async ({ req, token }) => {
//       console.log("ahihi ", req, token);
//       if (req.nextUrl.pathname.startsWith("/admin")) return token?.role === "admin";
//       return !!token;
//     },
//   },
// });
// export const config = { matcher: ["/admin:path*", "/profile"] };

import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  // Check for session token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log("middleware token = " + token);
  // Redirect to login page if there's no token
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/create/:path*"],
};
