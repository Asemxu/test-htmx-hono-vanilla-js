import { html } from "hono/html";
import task from "../../../../models/task.js";
import { EMPTY, EMPTYCLASS, FINISHED } from "../../../../../server/utils/constants.js";
/**
 * @param {task} task 
 * 
 */
const ItemTodo = (task) =>
  html`
    <div class="flex w-full mb-2 items-center justify-between gap-2 item-todo" id="todo_${task.id}">
      <div class="flex gap-2 items-center">
        <input
          ${task.status === FINISHED ? "checked" : ""}
          hx-post="/api/v1/todo/id/${task.id}"
          type="checkbox"
          hx-target="#todo_${task.id}"
          hx-swap="outerHTML"
          class="appearance-none checked:bg-blue-500"
        />
        <span
          class="${task.status === FINISHED
            ? "line-through opacity-25"
            : "no-underline"}"
          >${task.name}</span
        >
      </div>
      <div class="flex gap-2 items-center">
        <button ${task.editing ? `hx-put=/api/v1/todo/id/${task.id}`: `hx-put=/api/v1/todo/change-edit/${task.id}`} hx-swap="innerHTML" hx-target="#form-todo" id="btn_edit_${task.id}" class="btn_edit shadow-lg font-bold px-2 py-1 rounded-[0.25rem] bg-blue-500 text-white transition hover:bg-white hover:text-blue-500 w-full text-center motion-reduce:hover:translate-y-0 motion-reduce:transition-none ease-in duration-[500ms]">${task.editing ? 'save' : 'edit'}</button>
        
        <button ${task.editing ? 'disabled' :EMPTY } type="button" hx-delete="/api/v1/todo/id/${task.id}" class="${task.isEditing ? 'disabled:opacity-25' : 'disabled:opacity-75' } shadow-lg font-bold px-2 py-1 rounded-[0.25rem] bg-red-500 text-white transition ${!task.editing  ? 'hover:bg-white hover:text-blue-500' :EMPTYCLASS }  w-full text-center motion-reduce:hover:translate-y-0 motion-reduce:transition-none ease-in duration-[500ms]" hx-target="#list-todo" hx-swap="innerHTML">delete</button>
      </div>
    </div>
  `;

export default ItemTodo;
