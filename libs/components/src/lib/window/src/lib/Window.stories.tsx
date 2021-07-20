import { Story, Meta } from '@storybook/react';
import { getFullTitle, SECTION_KEYS } from '@formaxui/storybook';
import { Window, IWindowProps } from '.';

export default {
  component: Window,
  title: getFullTitle({ title: 'Window', section: SECTION_KEYS.COMPONENTS }),
} as Meta;

const Template: Story<IWindowProps> = (args) => <Window {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
