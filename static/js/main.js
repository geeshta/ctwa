import { getDarkValue, getThemePath, switchDarkValue } from "./theme";

document.addEventListener("DOMContentLoaded", () => {
  const themePath = getThemePath(getDarkValue());

  const themeLink = document.createElement("link");
  themeLink.rel = "stylesheet";
  themeLink.id = "theme-css";
  themeLink.href = themePath + "theme.css";

  document.head.appendChild(themeLink);
});

document.querySelector("#theme-toggle")?.addEventListener("click", () => {
  const themePath = getThemePath(switchDarkValue());
  const themeLink = document.querySelector("#theme-css");
  themeLink.href = themePath + "theme.css";
});
