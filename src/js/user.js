const username_cc = document.querySelector("#username");

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let callme = form.elements.username.value;

  localStorage.setItem("username", callme);
  location.href = "../dashboard/index.html";

  callme = localStorage.getItem("username");
  console.log(callme);
});

function submitForm() {}

const userName = "Kosisochukwu";

const usernameContainer = document.querySelector("#userName_container");
// usernameContainer.textContent = userName;
