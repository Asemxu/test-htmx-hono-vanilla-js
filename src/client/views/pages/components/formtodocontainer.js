import { html } from "hono/html";
import FormTodo from "./Forms/formtodo.js"
const FormTodoContainer = () => 
html`
    <div
      class="todo-main-container-form min-w-[18.75rem] max-w-[18.75rem]  rounded-[1rem] p-10"
    >
      <h1 class="font-bold">Todo</h1>
      ${FormTodo()}
    </div>
`

export default FormTodoContainer 