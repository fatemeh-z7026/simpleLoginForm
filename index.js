let $ = document;
let userName = $.querySelector(".username");
let password = $.querySelector(".password");
let modalDanger = $.querySelector(".modalD");
let modalSuccess = $.querySelector(".modalS");
let userSub = $.querySelector(".sub-user");
let passWordSub = $.querySelector(".sub-password");

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

function userKeyValidation() {
  if (userName.value.length < 10) {
    userSub.style.display = "block";
    userSub.innerHTML = "Characters must be 10";
    userSub.style.color = "red";
  } else {
    userSub.innerHTML = "Successful!";
    userSub.style.color = "green";
  }
}

function passwordKeyValidation() {
  if (password.value.length < 8) {
    passWordSub.style.display = "block";
    passWordSub.innerHTML = "Characters must be 8";
    passWordSub.style.color = "red";
  } else {
    passWordSub.innerHTML = "Successful!";
    passWordSub.style.color = "green";
  }
}
