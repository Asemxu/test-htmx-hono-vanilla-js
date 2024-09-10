import { html } from "hono/html";
import FormTodoContainer from "./components/formtodocontainer.js";
const Todo = () =>
  html`
        <div class="h-screen w-screen todo-main-container flex items-center justify-center">
            ${FormTodoContainer()}
        </div>          
    `;
export default Todo;
