// babel workaround
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore // no types available
import vZome from "@vzome/react-vzome";
import { vZomeCSS } from "./vzome-viewer.css";

export class VZomeViewer extends HTMLElement {
  #root: ShadowRoot;
  #container: HTMLElement;
  constructor() {
    super();
    this.#root = this.attachShadow({ mode: "open" });

    this.#root.appendChild(document.createElement("style")).textContent =
      vZomeCSS;
    this.#container = this.#root.appendChild(document.createElement("div"));
  }

  connectedCallback(): void {
    this.#render();
  }

  #reactElement: React.CElement<any, any> | null = null;
  get reactElement(): React.CElement<any, any> | null {
    return this.#reactElement;
  }

  #render(): void {
    console.log("rednering", this.src);
    if (this.src === null) {
      this.#reactElement = null;
      return;
    }
    console.log(this.offsetWidth, this.#container);

    this.#reactElement = React.createElement(vZome.UrlViewer, {
      url: this.src,
      width: this.offsetWidth,
      height: this.offsetHeight,
    });
    ReactDOM.render(this.#reactElement, this.#container);
  }

  static get observedAttributes(): string[] {
    return ["src"];
  }

  attributeChangedCallback(
    attributeName: string,
    _oldValue: string,
    _newValue: string
  ): void {
    switch (attributeName) {
      case "src":
        this.#render();
    }
  }

  // Reflect the attribute in a JS property.
  set src(newSrc: string | null) {
    this.setAttribute("src", newSrc);
  }

  get src(): string | null {
    return this.getAttribute("src");
  }
}

customElements.define("vzome-viewer", VZomeViewer);
