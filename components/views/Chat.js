// import html from "html-literal";

// export default state => html`
//   <p>You are chatting with ${state.user}</p>
//   <div class=”container”>
//    <br>
//   <div class=”jumbotron”>
//   <h1 class=”display-4">Send Message</h1>
//   <br>
//   <br>
//   <textarea id = “message” class=”form-control” placeholder=”Your Message Here”>
//   </textarea>
//   <br>
//   <button id=”send” class=”btn btn-success”>Send</button>
//   </div>
//   <div id=”messages”>

// </div>
// </div>
//   </section>
// `;

import html from "html-literal";

export default state => html`
  <p>
    You are chatting with ${state.username} in room ${state.room_id} about
    ${state.subject}
  </p>
  <h1>${state.user}</h1>
  <section>
    <form id="Chatinput" method="POST" action="">
      <input id="message" type="text" />
      <input type="submit" name="submit" value="GO!" />
    </form>
    <!-- <input class="delbutton" type="submit" value="delete chat" /> -->
  </section>
  <section>
  <body>    <textarea class="container">${JSON.stringify(
    state.messages
  )}</textarea></body>
  </body>
  </section>
`;
