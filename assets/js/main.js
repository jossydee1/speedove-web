// Speedove Technologies — site interactions
// IMPORTANT: Replace this with Speedove's verified enquiry inbox before launch.
const CONTACT_EMAIL = "REPLACE_WITH_VERIFIED_EMAIL";

document.querySelectorAll("[data-year]").forEach(el => {
  el.textContent = new Date().getFullYear();
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }));
}

const projectForm = document.querySelector("#project-form");
if (projectForm) {
  projectForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(projectForm);
    const feedback = projectForm.querySelector(".form-feedback");
    if (CONTACT_EMAIL === "REPLACE_WITH_VERIFIED_EMAIL") {
      feedback.textContent = "Before publishing, add Speedove’s verified business email in assets/js/main.js. The form is ready to use once configured.";
      feedback.classList.add("is-visible");
      return;
    }
    const subject = encodeURIComponent(`Website enquiry — ${data.get("service")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "Not provided"}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    feedback.textContent = "Your email app should open with the enquiry prepared. Please review and send it from there.";
    feedback.classList.add("is-visible");
  });
}
