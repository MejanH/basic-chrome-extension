const img = document.createElement("img");
img.src = chrome.runtime.getURL("images/logo.png");
img.style.zIndex = 9999999;
img.style.position = "absolute";
img.style.top = 0;
img.style.right = 0;
const body = document.querySelector("body");
body.appendChild(img);
