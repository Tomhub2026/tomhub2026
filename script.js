const form = document.getElementById("registerForm");
const registerArea = document.getElementById("registerArea");
const contentArea = document.getElementById("icerik");
const welcomeName = document.getElementById("welcomeName");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  localStorage.setItem("tomhubUser", JSON.stringify({
    name: name,
    email: email,
    password: password
  }));

  registerArea.style.display = "none";
  contentArea.style.display = "block";
  welcomeName.textContent = "Kullanıcı: " + name;

  contentArea.scrollIntoView({ behavior: "smooth" });
});
