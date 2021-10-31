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
        <p>Paragraph starts</p>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
        <ol>
          <li>Numbered List</li>
        </ol>
      </div>
    `;
  }
}
customElements.define(LearningContent.tag, LearningContent);
