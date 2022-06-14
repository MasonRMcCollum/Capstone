import html from "html-literal";

export default () => html`
  <section id="Createroom">
    <form id="create" method="POST" action="">
      <div>
        <label for="Type"></label>

          <input id="subject" type="text" value="chat" required/>

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
