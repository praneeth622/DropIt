import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/files',
  '/upload',
  '/upload/(.*)',
  '/file-preview/(.*)',
  '/file-preview',
  '/file/(.*)',
  '/file',
  '/upgrade',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};