import html from "html-literal";

export default () => html`
  <input type="text" value="room id" required />
  <input id="username" type="text" value="anonymous" required />
  <input type="submit" value="Join" />
`;
