import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LearningContent extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
  }

  static get tag() {
    return 'learning-content';
  }

  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
        }
        .cardContent {
          flex-direction: column;
          padding-left: 10px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="cardContent">
        <p><slot name="paragraph-format">Paragraph starts</slot></p>
        <li><slot name="bullet-list">Test</slot></li>
        <ol>
          <slot name="number-list"><li>Numbered List</li></slot>
        </ol>
      </div>
    `;
  }
}
customElements.define(LearningContent.tag, LearningContent);
