import { html } from "hono/html";
import ListTodo from "../listtodo.js";
const FormTodo = () =>
  html`
    <form
      class="form-todo"
      hx-post="/api/v1/todo"
      hx-target="#list-todo"
      hx-on::after-request="this.reset()"
      hx-swap="beforeend"
    >
      <label htmlFor="todo-text-add"></label>
      <input
        name="task"
        required
        class="mt-2 w-full rounded-[1rem]"
        type="text"
        id="todo-text-add"
        placeholder="task..."
      />
      ${ListTodo()}
      <button
        type="submit"
        class="transition hover:bg-blue-400 hover:text-white w-full text-center mt-4 font-bold bg-gray-100 rounded-[1rem] px-3 py-2 motion-reduce:hover:translate-y-0 motion-reduce:transition-none ease-in duration-[500ms]"
      >
        Add To do
      </button>
    </form>
  `;

export default FormTodo;
