/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let suit = ["♦", "♥", "♠", "♣"];

  let randomNumber = number[Math.floor(Math.random() * 12)];
  let randomSuit = Math.floor(Math.random() * 3);

  document.getElementById("card").innerHTML = `<div
  class="card d-flex justify-content-between container-fluid"
  style="width: 18rem; height: 25rem;"
>
  <div class= "display-1" style='${
    randomSuit <= 1 ? "color: red;" : ""
  }' id="stick">${suit[randomSuit]}</div>
  <div class="display-1 text-center fw-bold" style='${
    randomSuit <= 1 ? "color: red;" : ""
  }' >${randomNumber}</div>
  <div class="text-end display-1" style='${
    randomSuit <= 1 ? "color: red;" : ""
  } transform: rotate(180deg) scaleX(-1); '>${suit[randomSuit]}</div>
  </div>`;
};
