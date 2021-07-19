import { CSSProperties } from 'react';
import { Story, Meta } from '@storybook/react';
import { getFullTitle, SECTION_KEYS } from '@formaxui/storybook';
import { Glass, IGlassProps } from '.';

export default {
  component: Glass,
  title: getFullTitle({ title: 'Glass', section: SECTION_KEYS.COMPONENTS }),
} as Meta;

const containerStyles: CSSProperties = {
  backgroundImage: "url('https://picsum.photos/200')",
  width: '700px',
  height: '400px',
  position: 'relative',
  display: 'block',
  padding: '50px',
};

const Template: Story<IGlassProps> = (args) => (
  <div style={containerStyles}>
    <Glass {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
