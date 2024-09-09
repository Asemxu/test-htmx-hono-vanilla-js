import { html } from "hono/html";

const Loader = () =>
  html`
    <div class="loader_container loader_filters flex justify-center">
      <div class="circle_container">
        <svg
          fill="none"
          class="circle_svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle class="circle" cx="50" cy="50" r="45" />
        </svg>
      </div>
    </div>
  `;

export default Loader