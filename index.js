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

document.onload(type());

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

//Functionality for slider/carousel
const slides = document.querySelectorAll(".slide");
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
});
