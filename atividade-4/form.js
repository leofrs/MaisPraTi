document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  sendEmail(name, email, phone, message);
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
