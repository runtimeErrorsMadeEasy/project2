/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {
  constructor() {
    super();
    this.image = question;
    this.dark = false;
  }

  static get tag() {
    return 'learning-icon';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String, attribute: 'image' },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-flex;
          flex-direction: row;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          background-color: transparent;
        }

        .iconContainer {
          display: inline-flex;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          justify-content: center;
          align-items: center;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="iconContainer">
        <img src="${this.image}" alt="Icon" /></span>
      </div>
    `;
  }
}
customElements.define(LearningIcon.tag, LearningIcon);
