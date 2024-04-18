import { createComponent, html } from "./create_component.js";
import { getThemePath, switchDarkValue } from "./theme.js";

createComponent({
  tagName: "stretch-separator",
  cssFileName: "separator",
  templateString: html``
});

createComponent({
  tagName: "theme-button",
  cssFileName: "themebutton",
  templateString: html` <button>Přepnout barvy</button> `,
  eventListeners: {
    click: () => {
      const themePath = getThemePath(switchDarkValue());
      const themeLink = document.querySelector("#theme-css");
      themeLink.href = themePath + "theme.css";
    }
  }
});

createComponent({
  tagName: "gopay-header",
  cssFileName: "header",
  templateString: html`
    <nav>
      <a href="/index.html">Úvod</a>
      <a href="/site/gateway.html">Platební brána</a>
      <a href="/site/integration.html">Propojení</a>
      <a href="/site/about.html">O nás</a>
    </nav>
    <stretch-separator></stretch-separator>
    <theme-button></theme-button>
  `
});

createComponent({
  tagName: "gopay-footer",
  cssFileName: "footer",
  templateString: html`
    <footer>
      Vytvořil <a href="https://github.com/geeshta">Štefan Földesi</a> pro EF JČU |
      <a href="https://github.com/geeshta/ctwa/blob/master/LICENSE.md">MIT</a> | © 2024
    </footer>
  `
});

createComponent({
  tagName: "side-bar",
  cssFileName: "sidebar",
  templateString: html`
    <aside class="sidebar">
      <div class="sidebar__item">Opakované platby</div>
      <div class="sidebar__item">Uložené karty</div>
      <div class="sidebar__item">Aktualizace karet</div>
      <div class="sidebar__item">Ověření nulové částky</div>
    </aside>
  `
});
