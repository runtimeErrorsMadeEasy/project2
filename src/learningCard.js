// dependencies / things imported
// test
import { LitElement, html, css } from 'lit';
import './learningIcon.js';
import './learningHeader.js';
import './learningContent.js';
import '@runtimeerrorsmadeeasy/ctabutton/cta-button.js';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'learning-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.myIcon = question;
    this.type = 'science';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      // reflect allows state changes to the element's property to be leveraged in CSS selectors
      type: { type: String, reflect: true },
      // attribute helps us bind the JS spec for variables names to the HTML spec
      // <learning-card my-icon="whatever" will set this.myIcon to "whatever"
      myIcon: { type: String, attribute: 'my-icon' },
      bannerColor: { type: String, attribute: 'banner-color' },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
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

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot

  // CSS - specific to Lit
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

  // HTML - specific to Lit
  // Imported button
  render() {
    return html`
      <div class="cardContainer">
        <div
          class="cardBanner"
          style="--learning-card-banner-color: ${this.bannerColor}"
        >
          <learning-icon icon=${this.myIcon}></learning-icon>
          <learning-header>
            <div slot="main-header"><slot name="header">Main Header</slot></div>
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

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */

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
