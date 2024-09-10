import { html } from "hono/html";

const Layout = (content) => html`
<html>
<head>
  <meta charset="UTF-8">
  <title>Full Stack App Hone HTMX</title>
  <meta name="description" content="Description">
  <head prefix="og: http://ogp.me/ns#">
  <meta property="og:type" content="article">
  <meta property="og:title" content="Full Stack App Hone HTMX">
  <link rel="icon" type="image/jpeg" href="/static/img/test.jpeg">
  <link rel="stylesheet" href="/static/styles/tailwind.css">
  <link rel="stylesheet" href="/static/styles/app.css">
  <script src="/static/scripts/htmx.min.js"></script>
  <script src="https://unpkg.com/htmx-ext-response-targets@2.0.0/response-targets.js"></script>
</head>
<body>
  ${content}
</body>
</html>
`

export default Layout