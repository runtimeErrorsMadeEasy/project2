import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<learning-card type="math">
      <h2>My header text</h2>
      <h3>The sub header</h3>
      <p>ALl the loverly content I could ever want to write.</p>
      <ul>
        <li>
          THis also will render because of the generic slot tag in the previous
          example
        </li>
      </ul>
    </learning-card> `);
  });

  it('renders main content', () => {
    const para = element.querySelector('p');
    expect(para).to.exist;
    expect(para.textContent).to.equal(
      'ALl the loverly content I could ever want to write.'
    );

    const list = element.querySelector('ul');
    expect(list).to.exist;
    expect(list.children.length).to.equal(1);
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
