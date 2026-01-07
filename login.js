const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Email validation
  if (email.value === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.value.includes("@")) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (password.value === "") {
    passError.textContent = "Password is required";
    isValid = false;
  } else if (password.value.length < 6) {
    passError.textContent = "Password must be at least 6 characters";
    isValid = false;
  } else {
    passError.textContent = "";
  }

  if (isValid) {
    alert("Login Successful ✅");
    form.reset();
  }
});
