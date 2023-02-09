import { html } from 'lit';
import '../src/scotia-band.js';

export default {
  title: 'ScotiaBand',
  component: 'scotia-band',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <scotia-band
      style="--scotia-band-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </scotia-band>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
