import html from "html-literal";

export default () => html`
  <section id="Createroom">
    <form id="create" method="POST" action="">
      <div>
        <label for="Type"></label>
        <select id="Create chat">
          <option value="">Public</option>
          <option value="">Private</option>
          <input type= "text" value="chat"/>
          <input
      type="button"
      onclick="window.location.href='Chat';"
      value="CREATE!"
    />
            <br />
          </div>
        </select>
      </div>
    </form>
  </section>

`;
