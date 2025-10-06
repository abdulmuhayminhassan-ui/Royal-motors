
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const id = document.getElementById("idNumber").value.trim();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const car = document.getElementById("car").value;

      if (!id || !name || !email || !car) {
        alert("⚠️ Please fill in all required fields.");
        return;
      }

      alert(`✅ Thank you, ${name} (ID: ${id})! Your inquiry about the ${car} has been received. We'll contact you at ${email}.`);
      form.reset();
    });
  }
});
