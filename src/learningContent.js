import { html, css, LitElement } from 'lit';

export class LearningContent extends LitElement {
  static get tag() {
    return 'learning-content';
  }

  static get styles() {
    return [
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
