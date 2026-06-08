// Created by Artur Ilyasov

(function () {
  const storageKey = "availy-theme";
  const root = document.documentElement;
  const systemQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function storedTheme() {
    try {
      const value = window.localStorage.getItem(storageKey);
      return value === "dark" || value === "light" ? value : null;
    } catch {
      return null;
    }
  }

  function systemTheme() {
    return systemQuery.matches ? "dark" : "light";
  }

  function resolvedTheme() {
    return storedTheme() || systemTheme();
  }

  function updateControls(theme) {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const nextLabel = button.dataset[`themeLabel${nextTheme[0].toUpperCase()}${nextTheme.slice(1)}`];

      if (nextLabel) {
        button.setAttribute("aria-label", nextLabel);
        button.setAttribute("title", nextLabel);
      }

      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    });
  }

  function applyTheme() {
    const theme = resolvedTheme();
    root.dataset.theme = theme;
    root.dataset.resolvedTheme = theme;
    updateControls(theme);
  }

  function setTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // Ignore storage errors; the visible theme can still change for this page.
    }

    applyTheme();
  }

  applyTheme();

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        setTheme(resolvedTheme() === "dark" ? "light" : "dark");
      });
    });

    applyTheme();
  });

  const handleSystemChange = () => {
    if (!storedTheme()) {
      applyTheme();
    }
  };

  if (typeof systemQuery.addEventListener === "function") {
    systemQuery.addEventListener("change", handleSystemChange);
  } else if (typeof systemQuery.addListener === "function") {
    systemQuery.addListener(handleSystemChange);
  }
})();
