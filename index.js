let $ = document;
let userName = $.getElementById("username");
let password = $.getElementById("password");
let modalDanger = $.querySelector(".modalD");
let modalSuccess = $.querySelector(".modalS");

function dataValidation() {
  let userValue = userName.value;
  let passValue = password.value;
  if (userValue.length < 10 || passValue.length < 8) {
    modalDanger.style.display = "flex";
  } else {
    modalSuccess.style.display = "flex";
  }

  setTimeout(function () {
    modalDanger.style.display = "none";
    modalSuccess.style.display = "none";
  }, 3000);
}
