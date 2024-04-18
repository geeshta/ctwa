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

const getThemePath = (isDark) => {
  return `/static/style/${isDark ? "dark" : "light"}/`;
};

export { getDarkValue, switchDarkValue, getThemePath };
