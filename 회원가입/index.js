const form = document.querySelector("body form");

form.style.border = "1px solid";

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 새로고침 방지
  const ID = document.querySelector("#i");
  console.log(ID.value);

  const Password = document.querySelector("#r");
  console.log(Password.value);

  const Password1 = document.querySelector("#a");
  console.log(Password1.value);

  const Birth = document.querySelector("#l");
  console.log(Birth.value);

  const message = `${div.value}님, 회원가입을 축하합니다. ${cancel.value} 정말 가입을 취소하실건가요?`;

  if (confirm(message)) {
    alert("회원가입을 축하합니다.");
  } else {
    alert("정말 가입을 취소하실건가요?");
  }
});
