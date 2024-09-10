import { html } from "hono/html";
import message from "../../models/message.js";
/**
 * @param {message} message
 * @returns {import("hono/utils/html").HtmlEscapedString}
 */
const Message = (message) => 
html`
    <p class="${message.className}">${message.text}</p>
`
export default Message