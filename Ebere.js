document.getElementById("sendWhatsApp").onclick = function (e) {
  const name = document.getElementById("name").value.trim();
  const product = document.getElementById("product").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !product) {
    e.preventDefault(); // stop navigation
    alert("Please fill in your name and product.");
    return;
  }

  const phone = "2349046076899";

  const text = `Hello, my name is ${name}. I am interested in ${product}. ${message}`;

  this.href = `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
};

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
