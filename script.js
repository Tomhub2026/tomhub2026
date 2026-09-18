const form = document.getElementById('registerForm');
const message = document.getElementById('message');
const registerArea = document.getElementById('registerArea');
const welcomeArea = document.getElementById('welcomeArea');
const welcomeName = document.getElementById('welcomeName');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem('tomhubUser', JSON.stringify(user));

  registerArea.style.display = 'none';
  welcomeArea.style.display = 'block';
  welcomeName.textContent = `Kullanıcı: ${name}`;
});
