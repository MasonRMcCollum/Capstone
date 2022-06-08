import html from "html-literal";

export default state => html`
  <p>You are chatting with</p>
  <h1>${state.user}</h1>
  <form id="chatview" method="Get"></form>
  <section id="Chatinput">
    <form id="Chatinput" method="POST" action="">
      <input type="text" />
      <input type="submit" name="submit" value="GO!" />
    </form>
  </section>
`;
