import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
`;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".navigation").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  if (state.view === "Createchat") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      console.log("createchatSchmiter");
      const inputList = event.target.elements;
      store.Chat.room_id = inputList.roomname.value;
      store.Chat.username = inputList.username.value;
      router.navigate("/Chat");
    });
  }
  if (state.view === "Chat") {
    console.log(store.Chat.messages);
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      console.log("createchatSchmiter");
      const inputList = event.target.elements;
      const message = {
        room_id: store.Chat.room_id,
        username: store.Chat.username,
        message: inputList.message.value
      };
      store.Chat.messages.push(message);
      console.log(store.Chat.messages);
      router.navigate("/Chat");
    });
  }
}

router.hooks({
  before: (done, params) => {
    let view = "Home";
    if (params && params.data && params.data.view) {
      view = capitalize(params.data.view);
    }

    if (view === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
        )
        .then(response => {
          const kelvinToFahrenheit = kelvinTemp =>
            Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

          store.Home.weather = {};
          store.Home.weather.city = response.data.name;
          store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
          store.Home.weather.feelsLike = kelvinToFahrenheit(
            response.data.main.feels_like
          );
          store.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    } else if (view === "Chat") {
      axios
        .get(`${process.env._API_URL}`)
        .then(response => {
          store.Chat.Room_id = response.data;
          done();
        })
        .catch(error => {
          console.log("It puked", error);
          done();
        });
    } else {
      done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
