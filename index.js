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
