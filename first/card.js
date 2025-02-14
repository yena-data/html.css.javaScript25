const body = document.querySelector("body");

body.style.backgroundColor = "white";

const btn = document.querySelector(".card-component.btn");

const img = document.querySelector(".card-component img");

btn.onclick = () => {
  const url =
    "https://cdn.pixabay.com/photo/2019/10/21/14/54/oranges-4566274_640.jpg";
  const a = document.createElement("a");
  a.href = url;
  a.click();
  alert(url);

  if (confirm("해당 이미지를 다운로드 하시겠습니까?")) {
    a.click();
  } else {
    alert("아니요");
  }
};

const viewBtn = document.createElement("button");
let isCard = false;
viewBtn.innerText = "전체 이미지";
viewBtn.onclick = () => {
  viewBtn.innerText = !isCard ? "카드" : "전체 이미지";

  const card = document.querySelector(".card-component");
  card.style.border = !isCard ? "1px solid red" : "1px solid lightgray";

  card.className = !isCard ? "card-component fv" : "card-component";

  isCard = !isCard;
};
body.append(viewBtn);
