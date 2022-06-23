import html from "html-literal";

export default () => html`
  <section id="Forum">
    <form id="Forum" method="POST" action="">
      <h2>Post your Forum</h2>
      <div>
        <label for="Type">Type of post</label>
        <select id="Forum" name="come back to later">
          <option value="">Type of Post</option>
          <option value="">Question</option>
          <option value="">Discussion</option>
          <option value="">Rant</option>
        </select>
        <div>
        <input type= "text"/>
        <label>content</label>
          <input type= "file" id="img" accept="image/jpeg,image/png,image/gif,image/webp,video/mp4,video/quicktime,video/webm"/>
        </div>
          <input type="submit" value="post" />
            <br />
          </div>
      </div>
    </form>
  </section>
`;
