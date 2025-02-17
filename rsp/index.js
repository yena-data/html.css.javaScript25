const root = document.querySelector("#root");

const title = document.querySelector("h1");

const button = document.querySelector("button");

const con = document.querySelector(".con");

const messages = ["안내면 진다!", "가위", "바위", "보"];
let msgIndex = 0;

let intervalId = null;

let time = 0;

const span1 = document.createElement("span");
const span2 = document.createElement("span");

let imgIndex = 0;
let imgIndex2 = 2;

const img = document.querySelectorAll("img");
//qsa 해당 선택자의 모든 태그를 선택하여 배열로 반환

const imgs = [
  "https://cdn-icons-png.flaticon.com/128/13480/13480938.png",
  "https://cdn-icons-png.flaticon.com/128/3562/3562093.png",
  "https://cdn-icons-png.flaticon.com/128/6109/6109387.png",
];

img.forEach((i, index) => (i.src = imgs[index]));
// 위에 소스 값 하나씩 가져오가

img[0].src = imgs[0];

root.append(span1, span2);

button.onclick = () => {
  title.innerText = messages[msgIndex];
  if (msgIndex === messages.length) {
    return (title.innerText = "이겼다");
  }
  msgIndex += 1;

  intervalId = setInterval(() => {
    console.log("time is ticking...");
    time += 0.25;
    if (time >= 3) {
      clearInterval(intervalId);
      time = 0;
      console.log(imgIndex, imgIndex2);
    }
    if (imgIndex === 2) {
      imgIndex = 0;
    } else {
      imgIndex += 1;
    }
    if (imgIndex2 === 2) {
      imgIndex = 0;
    } else {
      imgIndex += 1;
    }
    span1.innerText = time;
    span2.innerText = time + 2;

    const n1 = Math.floor(Math.random() * 3);
    const n2 = Math.floor(Math.random() * 3);

    imgIndex = n1;
    imgIndex2 = n2;

    img[0].src = imgs[imgIndex];
    img[2].src = imgs[imgIndex2];
  }, 250);
};
con.innerHtml = null;
const h2 = document.createElement("h2");
h2.innerText = "VS";
con.append(img[0], h2, img[2]);

// if (intervalId && time === 3) {
//   clearInterval(intervalId);
// } -> 멈추기버튼

const number = Math.floor(Math.random() * 3);
console.log(number);
