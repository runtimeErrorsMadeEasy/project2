import { html } from 'lit-html';
import '../src/app.js';

export default {
  title: 'Project two',
  component: 'learning-card',
  argTypes: {
    type: { control: 'text' },
  },
};

function Template({ type = 'math', slot }) {
  return html` <learning-card type="${type}"> ${slot} </learning-card> `;
}
export const MathCard = Template.bind({});

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  type: 'science',
  slot: html`<p>slotted content that should render</p>`,
};

export const TechnologyCard = Template.bind({});
TechnologyCard.args = {
  type: 'technology',
  slot: html`<p>slotted content that should render</p>`,
};
