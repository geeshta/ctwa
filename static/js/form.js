document.querySelector("#contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const contactForm = e.target;
  try {
    const formData = new FormData(contactForm);
    const formJson = Object.fromEntries(formData.entries());
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: contactForm.method,
      body: JSON.stringify(formJson)
    });
    if (res.ok) {
      showSuccess(contactForm, "Formulář byl úspěšně odeslán!");
    } else {
      showError(contactForm, "Formulář se nepodařilo odeslat. Zkuste to prosím později.");
    }
  } catch (err) {
    showError(contactForm, "Formulář se nepodařilo odeslat. Zkuste to prosím později.");
  }
});

const showError = (target, message) => {
  const messageSpan = document.createElement("span");
  messageSpan.innerHTML = message;
  messageSpan.className = "msg-error";
  target.appendChild(messageSpan);
};

const showSuccess = (target, message) => {
  const messageSpan = document.createElement("span");
  messageSpan.innerHTML = message;
  messageSpan.className = "msg-success";
  target.replaceWith(messageSpan);
};
