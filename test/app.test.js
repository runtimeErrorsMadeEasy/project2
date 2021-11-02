import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/learningHeader.js';
import '../src/learningCard.js';
import '../src/learningIcon.js';
import '../src/app.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';
const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html` <learningCard type="science">
      <div class="cardContainer" >
      <div class="cardBanner" >
      <learning-header></learning-header>
        </div>
        <div class="cardContentContainer">
          <div slot="content" class="cardContent">
          <p>Paragraph starts</p>
            <ul>
              <li>test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
            <ol>
              <li>Numbered List</li>
            </ol>
          </div>
<div slot="button" class="buttonContainer"><cta-button icon="subject" </div>
          </div>
       </div>
      </div>
    `);
  });

it('renders main content', () => {
    const para = element.querySelector('p');
    expect(para).to.exist;
    expect(para.textContent).to.equal("Paragraph starts");

    const list = element.querySelector('ul');
    expect(list).to.exist;
    expect(list.children.length).to.equal(3);
  });

  it('checks updatedProperties', () => {
    element.type = 'math';
    element.icon = 'question';
    expect(element.type).to.equal('math');
    expect(element.icon).to.equal('question');
    element.type = 'science';
    setTimeout(() => {
      expect(element.type).to.equal('science');
      expect(element.icon).to.equal('beaker');
    }, 100);
    element.type = 'technology';
    setTimeout(() => {
      expect(element.type).to.equal('technolgy');
      expect(element.icon).to.equal('lightbulb');
    }, 100);
  });

  it('renders the main header', () => {
    const h2 = element.querySelector('cardBanner');
    expect(h2).to.exist;
    expect(h2.assignedElements({ flat: true })[0].innerText).to.equal("main header")
  });

  it('renders the icon', () => {
    const icon = element.querySelector('icon');
    expect(icon).to.exist;
    expect(element.icon).to.equal('beaker');
  });

  it('passes the a11y audit', async () => {
    element.type = 'math';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'science';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'technology';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
  });
});

