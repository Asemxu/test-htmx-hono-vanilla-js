import { html } from "hono/html";

const Message = ({ text , className } ) => 
html`
    <p class="${className}">${text}</p>
`
export default Message