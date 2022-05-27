import html from "html-literal";

export default state => html`
  <h1>
    Weather in ${state.weather.city} ${state.weather.temp}F, feels like
    ${state.weather.feelsLike}F
  </h1>
`;
