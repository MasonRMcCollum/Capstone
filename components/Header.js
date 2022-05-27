import html from "html-literal";

export default state => html`
  <header>
    <h1>Board Buddy ${state.header}</h1>
    <div class="searcher">
      <input type="text" />
      <input type="button" value="Search" />
    </div>
  </header>
`;
