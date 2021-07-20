import { Story, Meta } from '@storybook/react';
import { getFullTitle, SECTION_KEYS } from '@formaxui/storybook';
import { TitleBar, ITitleBarProps } from '.';

export default {
  component: TitleBar,
  title: getFullTitle({ title: 'TitleBar', section: SECTION_KEYS.COMPONENTS }),
} as Meta;

const Template: Story<ITitleBarProps> = (args) => <TitleBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
