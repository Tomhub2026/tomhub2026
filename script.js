const form = document.getElementById('registerForm');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const user = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim()
  };

  localStorage.setItem('tomhubUser', JSON.stringify(user));
  message.textContent = `Hoş geldin ${user.name}! Kayıt bu cihazda kaydedildi.`;
  form.reset();
});
