import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/learningCard.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<learning-content slot="cardContentBanner">
      <p slot="paragraph-format">this is my content for my paragrapgh tests</p>
      <li slot="bullet-list">patiently waiting for Halo Infinite</li>
      <ol slot="number-list">
        <li>Numbered List hopefully</li>
      </ol>
    </learning-content> `);
  });

  it('renders the paragraph content', () => {
    const p = element.querySelector('p');
    expect(p).to.exist;
    expect(p.innerText).to.equal('this is my content for my paragrapgh tests');
  });

  it('renders the li slot', () => {
    const li = element.querySelector('li');
    expect(li).to.exist;
    expect(li.innerText).to.equal('patiently waiting for Halo Infinite');
  });

  it('renders the ol slot', () => {
    const ol = element.querySelector('ol');
    expect(ol).to.exist;
    expect(ol.innerText).to.equal('Numbered List hopefully');
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
