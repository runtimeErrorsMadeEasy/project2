import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/learningIcon.js';

describe('learningIcon', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<learning-icon
      type="science"
      style="bannerColor: darkorange"
    >
    </learning-icon> `);
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
