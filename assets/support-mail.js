// Created by Artur Ilyasov

(function () {
  const contact = window.AvailyContact || {};
  const email = contact.supportEmail;
  const links = document.querySelectorAll("[data-support-mail-link]");
  const emailLabels = document.querySelectorAll("[data-support-email-text]");

  emailLabels.forEach((label) => {
    label.textContent = email || "";
  });

  links.forEach((link) => {
    if (!email) {
      link.setAttribute("aria-disabled", "true");
      return;
    }

    const subject = link.dataset.supportSubject || "Availy support request";
    const body = link.dataset.supportBody || "";
    const params = new URLSearchParams();

    params.set("subject", subject);

    if (body) {
      params.set("body", body);
    }

    link.href = `mailto:${email}?${params.toString()}`;
  });
})();

