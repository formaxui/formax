import { Story, Meta } from '@storybook/react';
import { getFullTitle, SECTION_KEYS } from '@formaxui/storybook';
import { Base, IBaseProps } from '.';

export default {
  component: Base,
  title: getFullTitle({ title: 'Base', section: SECTION_KEYS.COMPONENTS }),
} as Meta;

const Template: Story<IBaseProps> = (args) => <Base {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
