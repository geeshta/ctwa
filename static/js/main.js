import { getDarkValue, getThemePath } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  const themePath = getThemePath(getDarkValue());

  const themeLink = document.createElement("link");
  themeLink.rel = "stylesheet";
  themeLink.id = "theme-css";
  themeLink.href = themePath + "theme.css";

  document.head.appendChild(themeLink);
});
