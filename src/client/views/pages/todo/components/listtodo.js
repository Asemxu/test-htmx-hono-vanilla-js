import { html } from "hono/html";
import Loader from "../../../../shared/components/loader.js";
import ItemTodo from "./itemtodo.js";
import task from "../../../../models/task.js";
import { EMPTYARRAY } from "../../../../../server/utils/constants.js";
/**
 * @param {Array<task>} tasks
 * @returns {html}
 */
const ListTodo = (tasks = EMPTYARRAY) =>
  html`
    <div
      id="list-todo"
      class="list-todo mt-4"
      hx-trigger=load delay:500ms
      hx-target="this"
      hx-get="/api/v1/todo/get-todos"
      hx-swap="innerHTML"
    >
      ${Loader()}
      ${tasks.map( (task) => {
        return ItemTodo(task)
      }) }
    </div>
  `;

export default ListTodo;
