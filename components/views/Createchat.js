import html from "html-literal";

export default () => html`
  <section id="Createroom">
    <form id="create" method="POST" action="">
      <div>
        <label for="Type"></label>
        <select id="Createchat">
          <input id="subject" type= "text" placeholder = "subject of chat"
          required/>
          </select>
          <input id="roomname" type= "text" placeholder="chat"
          required/>
          <input id="username" type= "text" placeholder="username"
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
