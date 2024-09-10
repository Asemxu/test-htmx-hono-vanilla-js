
import Layout from "./layout.js"
/**
 * @param {import("hono/utils/html").HtmlEscapedString} view
 * @returns {import("hono/utils/html").HtmlEscapedString}
 */
const Content = (view) => {
    return Layout(view)
} 

export default Content