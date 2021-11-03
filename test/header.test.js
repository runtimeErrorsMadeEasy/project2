import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/learningCard.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<learningHeader slot="banner" type="math">
      <h2 slot="main-header">testing my dumb tests</h2>
      <h3 slot="sub-header">this is what pain looks like</h3>
    </learningHeader> `);
  });

  it('renders the header element', () => {
    const header = document.querySelector('learningHeader');
    expect(header).to.exist;
  });

  it('renders the main header', () => {
    const h2 = element.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.innerText).to.equal('testing my dumb tests');
  });

  it('renders the sub header', () => {
    const h3 = element.querySelector('h3');
    expect(h3).to.exist;
    expect(h3.innerText).to.equal('this is what pain looks like');
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
