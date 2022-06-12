import html from "html-literal";

export default () => html`
  <section id="Createroom">
    <form id="create" method="POST" action="">
      <div>
        <label for="Type"></label>
        <select id="Createchat">
          <option value="">Public</option>
          <option value="">Private</option>
          </select>
          <input id="roomname" type= "text" value="chat"
          required/>
          <input id="username" type= "text" value=""
          required/>
          <input
      type="submit"
      value="CREATE!"
    />

            <br />
          </div>
      </div>
    </form>
  </section>

`;
