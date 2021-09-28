/***** Basics *****/
import React from "react";
import ReactDOM from "react-dom";

/***** Libs & Frameworks *****/
import "bootstrap/dist/css/bootstrap.css";
import { AiFillCloseCircle } from "react-icons/ai";

/***** App *****/
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="overlay"></div>
    <ul className="sittings">
      <AiFillCloseCircle className="close-icon" />
      <li className="reset">
        <a href="#" title="Reset Button">
          Reset
        </a>
      </li>
      <li>
        <a
          href="https://github.com/a7m3d000"
          target="_blank"
          title="Github Link"
        >
          Github
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=100010871888286"
          target="_blank"
          title="Contact Me Link"
        >
          Contact Me
        </a>
      </li>
    </ul>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/***** Scripts *****/
// Clock Scripts
let arc = 1499;
let no = 1499;

// Li,s Script
const el = document.querySelector(".modes").children;
let arr = [el[0], el[1], el[2]];
const elements = [];

for (let e of arr) {
  elements.push(e);
  e.addEventListener("click", function () {
    this.classList.add("active");
    elements.filter((l) => l !== e).map((m) => m.classList.remove("active"));
    switch (this.textContent.trim()) {
      case "pomodoro":
        no = 1499;
        arc = 1499;

        break;

      case "short break":
        no = 299;
        arc = 299;

        break;

      case "long break":
        no = 599;
        arc = 599;

        break;
    }
  });
}

// Canvas Scripts
let counter = document.getElementById("counter").getContext("2d");
let pointToFill = 4.72;
let cw = counter.canvas.width;
let ch = counter.canvas.height;
let diff;
let res;

function fillCounter() {
  diff = (no / arc) * Math.PI * 2 * arc;
  counter.clearRect(0, 0, cw, ch);
  counter.lineWidth = 12;
  counter.strokeStyle = "#ff6e6c";

  counter.beginPath();
  counter.arc(151, 154, 130, pointToFill, diff / arc + pointToFill);
  counter.stroke();

  if (no == 0) {
    no = 1;
  }

  no--;
}

setInterval(fillCounter, 1000);

var pomodoro = {
  started: false,
  minutes: 0,
  seconds: 0,
  fillerIncrement: 0,
  interval: null,
  minutesDom: null,
  secondsDom: null,
  fillerDom: null,
  result: null,

  init: function () {
    var self = this;
    this.result = document.querySelector(".result");

    this.interval = setInterval(function () {
      self.intervalCallback.apply(self);
    }, 1000);

    self.startWork.apply(self);
    document.querySelector("#work").addEventListener("click", function () {
      self.startWork.apply(self);
    });

    document
      .querySelector("#shortBreak")
      .addEventListener("click", function () {
        self.startShortBreak.apply(self);
      });

    document.querySelector("#longBreak").addEventListener("click", function () {
      self.startLongBreak.apply(self);
    });
  },

  resetVariables: function (mins, secs, started) {
    this.minutes = mins;
    this.seconds = secs;
    this.started = started;
    this.fillerIncrement = 200 / (this.minutes * 60);
  },

  startWork: function () {
    this.resetVariables(25, 0, true);
  },

  startShortBreak: function () {
    this.resetVariables(5, 0, true);
  },
  startLongBreak: function () {
    this.resetVariables(15, 0, true);
  },

  toDoubleDigit: function (num) {
    if (num < 10) {
      return "0" + parseInt(num, 10);
    }
    return num;
  },

  updateDom: function () {
    this.result.innerHTML =
      this.toDoubleDigit(this.minutes) + ":" + this.toDoubleDigit(this.seconds);
  },

  intervalCallback: function () {
    if (!this.started) return false;
    if (this.seconds == 0) {
      if (this.minutes == 0) {
        this.timerComplete();
        return;
      }
      this.seconds = 59;
      this.minutes--;
    } else {
      this.seconds--;
    }
    this.updateDom();
  },
  timerComplete: function () {
    this.started = false;
  },
};

window.onload = function () {
  pomodoro.init();
};

// Overlay Styling
let overlay = document.querySelector(".overlay");
let gearIcon = document.querySelector(".icon");
let sittings = document.querySelector(".sittings");
let resetBtn = document.querySelector(".reset");
let closeIcon = document.querySelector(".close-icon");

gearIcon.onclick = function () {
  overlay.style.display = "block";
  sittings.style.left = "0";
};

resetBtn.onclick = function () {
  window.location.reload();
};

closeIcon.onclick = function () {
  sittings.style.left = "-250px";
  overlay.style.display = "none";
};
