import { Story, Meta } from '@storybook/react';
import { getFullTitle, SECTION_KEYS } from '@formaxui/storybook';
import { Button, IButtonProps } from '.';

export default {
  component: Button,
  title: getFullTitle({ title: 'Button', section: SECTION_KEYS.COMPONENTS }),
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
