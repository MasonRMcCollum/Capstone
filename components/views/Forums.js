import html from "html-literal";

export default () => html`
  <section id="Forum">
    <form id="Forum" method="POST" action="">
      <h2>Post your Forum</h2>
      <div>
        <label for="Type"></label>
        <select id="Forum" name="come back to later">
          <option value="">Type of Post</option>
          <option value="">Question</option>
          <option value="">Discussion</option>
          <option value="">Deep Dish</option>
          <br />
        </select>
      </div>
    </form>
  </section>
`;
