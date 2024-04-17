const html = (strings, ...values) =>
  strings.reduce((acc, str, i) => `${acc}${str}${values[i] || ""}`, "");

let createComponent = ({ tagName, templateString, styleFileName = null }) => {
  if (styleFileName) {
    const styleLink = `<link rel="stylesheet" href="/static/style/${styleFileName}" />`;
    templateString = styleLink + templateString;
  }

  const cls = class WebComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement("template");
      template.innerHTML = templateString;
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  };

  customElements.define(tagName, cls);
};

createComponent({
  tagName: "gopay-header",
  templateString: html`
    <nav>
      <a href="/index.html">Úvod</a>
      <a href="/site/gateway.html">Platební brána</a>
      <a href="/site/integration.html">Propojení</a>
      <a href="/site/about.html">O nás</a>
    </nav>
  `
});

createComponent({
  tagName: "gopay-footer",
  templateString: html`
    <footer>
      <hr />
      2024
    </footer>
  `
});

createComponent({
  tagName: "side-bar",
  styleFileName: "sidebar.css",
  templateString: html`
    <aside class="sidebar">
      <ul>
        <li>Opakované platby</li>
        <li>Uložené karty</li>
        <li>Aktualizace karet</li>
        <li>Ověření nulové částky</li>
      </ul>
    </aside>
  `
});
