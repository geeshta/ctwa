const html = (strings, ...values) =>
  strings.reduce((acc, str, i) => `${acc}${str}${values[i] || ""}`, "");

const createComponent = ({ tagName, cssFileName, templateString, eventListeners = null }) => {
  const styleLink = `<link rel="stylesheet" href="/static/style/${cssFileName}.css">`;
  templateString = styleLink + templateString;

  const cls = class WebComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement("template");
      template.innerHTML = templateString;
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      if (typeof eventListeners === "object" && eventListeners !== null) {
        Object.entries(eventListeners).forEach(([event, handler]) => {
          this.addEventListener(event, handler);
        });
      }
    }
  };

  customElements.define(tagName, cls);
};

export { createComponent, html };
