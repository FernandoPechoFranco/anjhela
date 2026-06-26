const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const logoutButton = document.getElementById("logoutButton");

const VALID_USER = "amjhela";
const VALID_PASS = "amiga154";

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === VALID_USER && password === VALID_PASS) {
      errorMessage.textContent = "";
      window.location.href = "dashboard.html";
    } else {
      errorMessage.textContent = "Usuario o contraseña incorrectos. Intenta otra vez.";
    }
  });
}

if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
