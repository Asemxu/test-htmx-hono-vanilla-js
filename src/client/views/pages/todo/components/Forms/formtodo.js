import { html } from "hono/html";
import ListTodo from "../listtodo.js";
import { EMPTY, EMPTYARRAY, EMPTYOBJECT, NOTREFRESHING } from "../../../../../../server/utils/constants.js";
/**
 * @param {Array<task>} tasks
 * @param {Boolean} isRefreshing
 * @param {task} taskFind
 * @returns {html}
 */
const FormTodo = (isRefreshing = NOTREFRESHING,tasks = EMPTYARRAY , taskFind = EMPTYOBJECT) =>
  html`
    <form
      id="form-todo"
      class="form-todo"
      hx-post="/api/v1/todo"
      hx-target="#list-todo"
      hx-on::after-request="this.reset()"
      hx-swap="innerHTML"
    >
      <label htmlFor="todo-text-add"></label>
      <input
        name="task"
        required
        class="mt-2 w-full rounded-[1rem] not-edit"
        type="text"
        id="todo-text-add"
        value="${taskFind.name}"
        placeholder="task..."
      />
      ${ListTodo(tasks)}
      <button
        ${isRefreshing ? EMPTY : 'type=submit'}
        class="shadow-lg transition hover:bg-blue-400 hover:text-white w-full text-center mt-4 font-bold bg-gray-100 rounded-[1rem] px-3 py-2 motion-reduce:hover:translate-y-0 motion-reduce:transition-none ease-in duration-[500ms]"
      >
        Add To do
      </button>
    </form>
  `;

export default FormTodo;
