import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LearningHeader extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
  }

  static get tag() {
    return 'learning-header';
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
          display: block;
          background-color: transparent;
          color: var(--simple-colors-default-theme-grey-1);
        }
        #headers {
        padding: 0px;
        margin: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      #main-header {
        font-weight: lighter;
        font-size: 30px;
        margin: 0;
        padding-left: 30px;
        padding-top: 20px;
      }
      #sub-header {
        font-weight: 1000;
        font-size: 50px;
        margin: 0;
        padding-left: 30px;
      }
      `,
    ];
  }

  render() {
    return html`
    <div>
      <slot>
        <div id="headers">
          <h2 id="main-header">I AM MAIN HEADER</h2>
          <h3 id="sub-header">I AM SUB HEADER</h3>
        </div>
      </slot>
    </div>`;
  }
}
customElements.define(LearningHeader.tag, LearningHeader);
