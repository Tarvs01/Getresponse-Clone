let isShown = false;

//Delay function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//Controls the typing on the hero. The Get growing, leads and the rest
async function type() {
  let times = 0;
  let delay = 150;
  let still = 500;
  let arr = ["leads", "sales", "growing!"];
  let i = 0;
  let text = "";
  a = document.querySelector("#typewriter");
  while (1) {
    i = 0;
    text = arr[times % 3];
    while (i < text.length) {
      a.innerHTML += text.charAt(i);
      i++;
      await sleep(delay);
    }
    await sleep(still);
    times++;

    b = a.innerHTML;
    while (b) {
      b = [...b].splice(0, b.length - 1).join("");
      a.innerHTML = b;
      await sleep(delay);
    }
    await sleep(50);
  }
}

type();

function showHide() {
  if (!isShown) {
    isShown = !isShown;
    document.querySelector(".open").style.display = "none";
    document.querySelector(".close").style.display = "block";
  } else {
    isShown = !isShown;
    document.querySelector(".open").style.display = "block";
    document.querySelector(".close").style.display = "none";
  }
}

let isToggled = false;

let toggleButton = document.querySelector(".toggle-button");

//secondary blue : #134CC9
//#006AFF

toggleButton.addEventListener("click", () => {
  isToggled = !isToggled;
  if (isToggled) {
    toggleButton.style.right = "-5px";
    toggleButton.style.left = "unset";
    toggleButton.style.backgroundColor = "#134CC9";
    document
      .querySelector(":root")
      .style.setProperty("--primary-color", "#006AFF");

    document.querySelector(
      ".access-img"
    ).style.backgroundImage = `url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzUxNTY1ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMjU2LDBDMTE0LjgsMCwwLDExNC44LDAsMjU2czExNC44LDI1NiwyNTYsMjU2czI1Ni0xMTQuOCwyNTYtMjU2UzM5Ny4yLDAsMjU2LDB6IE0yNTYsNDIuNw0KCQljMTE4LjEsMCwyMTMuMyw5NS4zLDIxMy4zLDIxMy4zUzM3NC4xLDQ2OS4zLDI1Niw0NjkuM1M0Mi43LDM3NC4xLDQyLjcsMjU2UzEzNy45LDQyLjcsMjU2LDQyLjd6IE0yNTYsODUuMw0KCQljLTIzLjYsMC00Mi43LDE5LjEtNDIuNyw0Mi43czE5LjEsNDIuNyw0Mi43LDQyLjdzNDIuNy0xOS4xLDQyLjctNDIuN1MyNzkuNiw4NS4zLDI1Niw4NS4zeiBNMTMyLjcsMTcxLjNsLTkuMyw0MS4zbDkwLDIwVjMyMA0KCQlsLTIwLjcsMTAyLjdsNDEuMyw4TDI1NS4zLDMyNGwwLjctMmwwLjcsMkwyNzgsNDMwLjdsNDEuMy04TDI5OC43LDMyMHYtODcuM2w5MC0yMGwtOS4zLTQxLjNMMjg4LDE5MmgtNjRMMTMyLjcsMTcxLjN6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==
)`;
  } else {
    toggleButton.style.left = "-5px";
    toggleButton.style.right = "unset";
    toggleButton.style.backgroundColor = "#436B77";
    document
      .querySelector(":root")
      .style.setProperty("--primary-color", "#00baff");

    document.querySelector(
      ".access-img"
    ).style.backgroundImage = `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8cGF0aCBpZD0iUGF0aF8zNDUiIGRhdGEtbmFtZT0iUGF0aCAzNDUiIGQ9Ik00NDAuMDM5LTcuMjg2YTI0LDI0LDAsMSwwLDI0LDI0QTI0LjAyNywyNC4wMjcsMCwwLDAsNDQwLjAzOS03LjI4NlptLjAyNCw5LjIzMWEzLjUxLDMuNTEsMCwxLDEtMy41MiwzLjVBMy41MSwzLjUxLDAsMCwxLDQ0MC4wNjMsMS45NDVabTExLjU4Nyw5LjVMNDQzLjkxNSwxMy4yYzAsMi4xMS0uMzUyLDUuOTc3LjM1MSw5LjQ5M2wyLjExLDYuMzI5Yy4wMjIuMDQ4LjA0MS4xLjA1OS4xNDdhMS44MTYsMS44MTYsMCwwLDEtMS4xMTQsMi4zMTRoLS43YTIuMzM5LDIuMzM5LDAsMCwxLTEuNzU4LTEuNDA2TDQ0MS4xLDI0LjFhMS4yMzgsMS4yMzgsMCwwLDEtLjM1Mi0uNywzLjUwOSwzLjUwOSwwLDAsMC0uMzUxLTEuMDU0aC0uMzUyQTEuNTQsMS41NCwwLDAsMCw0MzkuNywyMy40bC0uMzUyLjctMi4xMSw1Ljk3N2ExLjc5MywxLjc5MywwLDAsMS0xLjc1OCwxLjQwNmgtLjdhMi4xNDQsMi4xNDQsMCwwLDEtMS4wNTQtMi40NjFsMi4xMDktNi4zMjlhMjkuODYzLDI5Ljg2MywwLDAsMCwuMzUyLTkuNDkzbC03LjczNS0xLjQwNmExLjkzLDEuOTMsMCwwLDEtMS40MDctMi4xMSwyLjM3NCwyLjM3NCwwLDAsMSwyLjExLTEuNDA2LDU1LjYxNiw1NS42MTYsMCwwLDAsNy4zODMsMS40MDZjMS4wNTUsMCwyLjgxMy4zNTIsMy41MTYuMzUyLDEuMDU1LDAsMi44MTMtLjM1MiwzLjUxNi0uMzUyLDEuNzU4LS4zNTEsNy4zODQtMS40MDYsNy4zODQtMS40MDZhMS45MjksMS45MjksMCwwLDEsMi4xMDksMS40MDZDNDUzLjA1NiwxMC43MzksNDUyLjcsMTEuNDQyLDQ1MS42NSwxMS40NDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDE2LjAzOSA3LjI4NikiIGZpbGw9IiM0YTViNjgiLz4KPC9zdmc+Cg==)`;
  }
});

//Functionality for slider/carousel. Not currently running here though. Don't know why and will debug later. But for now, the script for the slider is in the HTML. Note that it is the same code, it is the location that is different.
/* const slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${(indx - 2) * 113}%)`;
});

const prevSlide = document.querySelector(".btn-prev");
const nextSlide = document.querySelector(".btn-next");

prevSlide.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slide");

  console.log("previous");

  let slideItems = [];
  slides.forEach((item, index) => {
    slideItems.push(item);
  });

  let last = slideItems.pop();

  slider.prepend(last);

  slides = document.querySelectorAll(".slide");

  slides[2].style.opacity = "1";
  slides[3].style.opacity = ".5";

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${(indx - 2) * 113}%)`;
  });
});

nextSlide.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slide");
  console.log("next");

  let slideItems = [];
  slides.forEach((item, index) => {
    slideItems.push(item);
  });

  let first = slideItems.splice(0, 1)[0];

  slider.append(first);

  slides = document.querySelectorAll(".slide");

  slides[2].style.opacity = "1";
  slides[1].style.opacity = ".5";

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${(indx - 2) * 113}%)`;
  });
}); */
