import { Story, Meta } from '@storybook/react';
import {
  ComponentsSrcLibButton,
  ComponentsSrcLibButtonProps,
} from './ComponentsSrcLibButton';

export default {
  component: ComponentsSrcLibButton,
  title: 'ComponentsSrcLibButton',
} as Meta;

const Template: Story<ComponentsSrcLibButtonProps> = (args) => (
  <ComponentsSrcLibButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
