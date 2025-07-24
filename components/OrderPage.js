export default class OrderPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const styles = document.createElement("style");
    this.root.appendChild(styles);

    async function loadCSS() {
      const request = await fetch("/components/OrderPage.css");
      styles.textContent = await request.text();
    }
    loadCSS();

    // const template = document.getElementById("order-page-template");
    // const content = template.content.cloneNode(true);
    // this.root.appendChild(content);
  }
}
customElements.define("order-page", OrderPage);
