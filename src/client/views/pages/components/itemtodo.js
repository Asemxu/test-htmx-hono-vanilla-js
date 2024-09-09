import { html } from "hono/html";
import { FINISHED } from "../../../../server/utils/constants.js";

const ItemTodo = (task) =>
  html`
    <div class="flex items-center gap-2 item-todo" id="todo_${task.id}">
      <input
        ${task.status === FINISHED ? 'checked' : ''}
        hx-post="/api/v1/todo/id/${task.id}"
        type="checkbox"
        hx-target="#todo_${task.id}"
        hx-swap="outerHTML"
        class="appearance-none checked:bg-blue-500"
      />
      <span
        class="${task.status === FINISHED
          ? "line-through opacity-65"
          : "no-underline"}"
        >${task.name}</span
      >
    </div>
  `;

export default ItemTodo;
