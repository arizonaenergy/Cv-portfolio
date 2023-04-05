import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
let navEl;

setTimeout(() => {
  navEl = document.querySelector("#nav");
}, 1000);

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 500 && window.innerWidth > 800) {
    if (navEl) {
      navEl["style"]["display"] = "none";
    }
  } else {
    if (navEl && window.innerWidth > 800) {
      navEl["style"]["display"] = "flex";
    }
  }
});
