//todo.js
import { Hono } from "hono";
import { FINISHED , ISEDITING, NOTEDITING, PROCESS, REFRESHING } from "../utils/constants.js";
import isEmpty from "../utils/isEmpy.js";
import Message from "../../client/shared/components/message.js";
import ItemTodo from "../../client/views/pages/todo/components/itemtodo.js";
import FormTodo from "../../client/views/pages/todo/components/Forms/formtodo.js";
const app = new Hono();

let todos  = [
    {
      id: 1,
      name: 'one task',
      status: FINISHED,
      editing:NOTEDITING
    },
    {
      id: 2,
      name: 'Two task',
      status: PROCESS,
      editing:NOTEDITING
    },
  ];

app.get("/get-todos", (c) => {
  if (isEmpty(todos))
    return c.html(
      Message({
        className: "text-center",
        text: "Not yet Todos",
      })
    );
  return c.html(
    todos
      .map((e) => {
        return ItemTodo(e);
      })
      .join("")
  );
});

app.post("/id/:id", (c) => {
  const { id } = c.req.param();
  let find = todos.find((e) => e.id === parseInt(id));
  find.status = find.status === FINISHED ? PROCESS : FINISHED;
  return c.html(ItemTodo(find));
});

app.delete("/id/:id", (c) => {
  const { id } = c.req.param();
  todos = todos.filter((e) => e.id !== parseInt(id));
  if (isEmpty(todos))
    return c.html(
      Message({
        className: "text-center",
        text: "Not yet Todos",
      })
    );

  return c.html(
    todos
      .map((e) => {
        return ItemTodo(e);
      })
      .join("")
  );
});

app.post("/", async (c) => {
  const body = await c.req.parseBody();
  todos.push({
    id: todos.length + 1,
    name: body["task"],
    status: PROCESS,
  });
  return c.html(
    todos
      .map((e) => {
        return ItemTodo(e);
      })
      .join("")
  );
});

app.put("/change-edit/:id", async (c) => {
  const { id } = c.req.param();
  let find = todos.find((e) => e.id === parseInt(id))
  find.editing = ISEDITING
 return c.html(FormTodo(REFRESHING,todos,find))
});

export default app