import html from "html-literal";

export default () => html`
  <div>
    <input
      type="button"
      onclick="window.location.href='Createchat';"
      value="Create
    chat"
    />
    <input
      type="button"
      onclick="window.location.href='Joinchat';"
      value="Join chat"
    />
  </div>
`;
