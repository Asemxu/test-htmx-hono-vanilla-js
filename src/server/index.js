import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { html } from "hono/html";
import Content from "../client/shared/content.js";
import { cors } from "hono/cors";
import todos from './routes/todo.js'
import { BASE_API_PATH } from "./utils/constants.js";
import Todo from "../client/views/pages/todo/todo.js";
const app = new Hono();

app.use("/static/*", serveStatic({ root: "./src/client" }));
app.use("/api/v1/*", cors());

app.get("/", (c) => {
  return c.html(Content(html`<h1 class="bg-red-100">Welcome</h1>`));
});

//route views
app.get("/todo-app", (c) => {
  return c.html(Content(Todo()));
});

//route api todo-app
app.route(BASE_API_PATH + "/todo" ,todos)

app.get("/api", (c) => {
  return c.json({
    api_hono: "Hello world",
  });
});

const port = process.env.PORT || 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
