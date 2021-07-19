import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from '.';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
