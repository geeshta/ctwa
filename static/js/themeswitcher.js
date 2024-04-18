const getDarkValue = () => {
  const storedValue = localStorage.getItem("darkMode");
  if (storedValue === null) {
    localStorage.setItem("darkMode", "false");
    return false;
  } else {
    return storedValue === "true";
  }
};

const switchDarkValue = () => {
  const newValue = !getDarkValue();
    localStorage.setItem("darkMode", `${newValue}`);
    return newValue;
};

const getThemeHref = (isDark) => {
  return isDark ? "/static/style/theme-dark.css" : "/static/style/theme-light.css";
};

document.addEventListener("DOMContentLoaded", () => {
  const themeHref = getThemeHref(getDarkValue());

  const themeLink = document.createElement("link");
  themeLink.rel = "stylesheet";
  themeLink.id = "theme-css";
  themeLink.href = themeHref;

  document.head.appendChild(themeLink);
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  const themeHref = getThemeHref(switchDarkValue());
  const themeLink = document.querySelector("#theme-css");
  console.log(themeHref);
  themeLink.href = themeHref;
});
