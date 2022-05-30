import html from "html-literal";

export default () => html`
  <section id="Createroom">
    <form id="create" method="POST" action="">
      <div>
        <label for="Type"></label>
        <select id="Forum" name="come back to later">
          <option value="">Public</option>
          <option value="">Private</option>
          <input type= "text" value="chat"/>
          <input type="button" value="Create" />
            <br />
          </div>
        </select>
      </div>
    </form>
  </section>

`;
