import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LearningHeader extends SimpleColors {
  static get tag() {
    return 'learning-header';
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          color: var(--simple-colors-default-theme-grey-1);
        }
        #headers {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        #main-header {
          font-weight: lighter;
          font-size: 50px;
          padding-left: 30px;
        }
        #sub-header {
          font-weight: lighter;
          font-size: 35px;
          padding-left: 30px;
        }
      `,
    ];
  }

  render() {
    return html` <div>
      <div id="headers">
        <h2><slot id="main-header" name="main-header">main header</slot></h2>
        <h3><slot id="sub-header" name="sub-header">sub header</slot></h3>
      </div>
    </div>`;
  }
}
customElements.define(LearningHeader.tag, LearningHeader);
