const form = document.querySelector("body form");

form.style.border = "1px solid";

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 새로고침 방지
  const name = document.querySelector("#r");
  console.log(name.value);

  const item = document.querySelector("#1");
  console.log(item.value);

  const address = document.querySelector("#a");
  console.log(address.value);

  const message = `${name.value}님, 저희 농장을 찾아주셔서 감사합니다. 선택하신 상품의 가격은 ${item.value}원입니다. 받으실 주소지는 ${address.value}가 맞으실까요?`;

  if (confirm(message)) {
    alert("곧 배송이 시작됩니다");
  } else {
    alert("다시 한번 고민해보세요 JMT!");
  }
});
