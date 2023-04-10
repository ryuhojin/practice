// VUE CORE
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// STATE MANAGEMENT
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
// API
import { get } from "./service";
// CSS
import "./assets/main.css";

//1.INIT MOCK API
if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./service/mocks/browser");
  worker.start();
}

//2.INIT APP
const app = createApp(App).use(createPinia()).use(router).use(VueQueryPlugin);

//3.CALL API AND LOAD APP
get("/loadApp", {})
  .then((res) => {
    if (res.status != 200) return alert("App is Loading Failed");
    app.mount("#app");
  })
  .catch((err) => {
    alert("App is Loading Failed");
  });
