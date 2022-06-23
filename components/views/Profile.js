import html from "html-literal";

export default state => html`
  <h1>${state.user}</h1>
  <div class="$1">
    <input type="button" value="Sign in/Sign out" />
    <img src="https://i.redd.it/67u7dshy4vyz.jpg" />
  </div>
`;
