import { LitElement, html, css } from 'lit';
import './learningIcon.js';
import './learningHeader.js';
import './learningContent.js';
import '@runtimeerrorsmadeeasy/ctabutton/cta-button.js';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningCard extends LitElement {
  static get tag() {
    return 'learning-card';
  }

  constructor() {
    super();
    this.myIcon = question;
    this.type = 'science';
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
      myIcon: { type: String, attribute: 'my-icon' },
      bannerColor: { type: String, attribute: 'banner-color' },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'math') {
        this.myIcon = question;
        this.bannerColor = 'purple';
      }
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = beaker;
        this.bannerColor = 'darkorange';
      }
      if (propName === 'type' && this[propName] === 'technology') {
        this.myIcon = lightbulb;
        this.bannerColor = 'green';
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --learning-card-banner-color: green;
      }
      @media only screen and (max-width: 800px) {
        :host .cardBanner {
          background-color: var(--learning-card-banner-color);
          display: inline-block;
          flex-direction: row;
          padding-right: 0px;
          padding-left: 10px;
        }
        :host .cardContentContainer {
          display: inline-block;
          border: 1px solid black;
          border-top: transparent;
          flex-direction: row;
          justify-content: space-evenly;
        }
      }
      .cardContainer {
        padding: 30px;
        background-color: white;
        border-width: 1px;
        display: flex;
        flex-direction: column;
        border-color: black;
      }
      /* header container */
      .cardBanner {
        background-color: var(--learning-card-banner-color);
        display: flex;
        justify-content: '';
        flex-direction: row;
        padding-right: 5px;
        padding-left: 0px;
      }
      /* modify the container that the content is in */
      .cardContentContainer {
        display: flex;
        border: 1px solid black;
        border-top: transparent;
        flex-direction: row;
        justify-content: space-evenly;
      }

      .textContainer {
        display: flex;
        flex-direction: row;
        width: 80%;
      }

      .buttonContainer {
        display: flex;
        flex-direction: row;
        align-items: end;
        padding-bottom: 5px;
        padding-right: 5px;
      }
    `;
  }

  render() {
    return html`
      <div class="cardContainer">
        <div
          class="cardBanner"
          style="--learning-card-banner-color: ${this.bannerColor}"
        >
          <learning-icon icon=${this.myIcon}></learning-icon>
          <learning-header>
            <div slot="main-header">
              <slot name="header" style="">Main Header</slot>
            </div>
            <div slot="sub-header">
              <slot name="subheader">Sub Header</slot>
            </div>
          </learning-header>
        </div>
        <div class="cardContentContainer">
          <div class="textContainer">
            <learning-content>
              <div slot="paragraph-format">
                <slot name="paragraph">Paragraph</slot>
              </div>
            </learning-content>
          </div>
          <div class="buttonContainer" name="button">
            <cta-button
              icon="subject"
              title="${this.type}"
              style="--psu-background-color: ${this.bannerColor};"
            ></cta-button>
          </div>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: 'Learning Card',
        description: 'An element that you have to replace / fix / improve',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Identifies the card',
            inputMethod: 'select',
            options: {
              science: 'Science',
              math: 'Math',
            },
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: LearningCard.tag,
          properties: {
            type: 'connections',
          },
          content:
            "<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>",
        },
      ],
    };
  }
}
