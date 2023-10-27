let hasAlreadyRequestedAccess = false;

document
  .getElementById("requestAccessButton")
  .addEventListener("click", requestAccess);

document.getElementById("emailInput").addEventListener("input", function () {
  if (hasAlreadyRequestedAccess) {
    let emailInput = document.getElementById(`emailInput`);
    const invalidText = document.getElementById("invalidEmail");
    if (!isEmailValid(emailInput.value)) {
      invalidText.style.display = "block";
    } else {
      invalidText.style.display = "none";
    }
  }
});

function requestAccess() {
  hasAlreadyRequestedAccess = true;
  let emailInput = document.getElementById(`emailInput`);
  const invalidText = document.getElementById("invalidEmail");
  if (!isEmailValid(emailInput.value)) {
    invalidText.style.display = "block";
  } else {
    alert("Succesfully requested access");
    emailInput.value = "";
    invalidText.style.display = "none";
  }
}

function isEmailValid(email) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
