import { html } from "hono/html";
import Loader from "../../../shared/components/loader.js";
const ListTodo = () =>
  html`
    <div
      id="list-todo"
      class="list-todo mt-4"
      hx-trigger="load delay:500ms"
      hx-target="this"
      hx-get="/api/v1/get-todos"
      hx-swap="innerHTML"
    >
      ${Loader()}
    </div>
  `;

export default ListTodo;
