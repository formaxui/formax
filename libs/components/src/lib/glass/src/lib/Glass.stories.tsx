import { Story, Meta } from '@storybook/react';
import { Glass, IGlassProps } from '.';

export default {
  component: Glass,
  title: 'Glass',
} as Meta;

const Template: Story<IGlassProps> = (args) => <Glass {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
