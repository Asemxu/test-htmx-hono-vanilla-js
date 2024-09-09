import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { html } from "hono/html";
import Content from "../client/shared/content.js";
import Todo from "../client/views/pages/todo.js";
import isEmpty from "./utils/isEmpy.js";
import { FINISHED, PROCESS } from "./utils/constants.js";
import ItemTodo from "../client/views/pages/components/itemtodo.js";
import Message from "../client/shared/components/message.js";
import { cors } from "hono/cors";
import { cache } from "hono/cache";

const app = new Hono();

let todos = [
  {
    id: 1,
    name: "one task",
    status: FINISHED,
  },
  {
    id: 2,
    name: "Two task",
    status: PROCESS,
  },
];

app.use("/static/*", serveStatic({ root: "./src/client" }));
app.use("/api/v1/*", cors());

app.get(
  "*",
  cache({
    cacheName: "todo-app",
    cacheControl: "max-age=3600",
  })
);

app.get("/", (c) => {
  return c.html(Content(html`<h1 class="bg-red-100">Welcome</h1>`));
});

app.get("/todo-app", (c) => {
  return c.html(Content(Todo()));
});

app.get("api/v1/get-todos", (c) => {
  if (isEmpty(todos))
    return c.html(
      Message({
        className: "text-center",
        text: "Not yet Todos",
      })
    );
  else
    return c.html(
      todos
        .map((e) => {
          return ItemTodo(e);
        })
        .join("")
    );
});

app.post("api/v1/todo/id/:id", (c) => {
  const { id } = c.req.param();
  let find = todos.find((e) => e.id === parseInt(id));
  find.status = find.status === FINISHED ? PROCESS : FINISHED;
  return c.html(ItemTodo(find));
});

app.post("api/v1/todo", async (c) => {
  const body = await c.req.parseBody();
  todos.push({
    id: todos.length + 1,
    name: body["task"],
    status: PROCESS,
  });
  return c.html(ItemTodo(todos.at(-1)));
});

app.get("/api", (c) => {
  return c.json({
    api_hono: "Hello world",
    todos,
  });
});

const port = process.env.PORT || 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
