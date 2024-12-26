import { Meta, StoryObj } from '@storybook/react';
import InputTextField from './InputTextField';

const meta: Meta<typeof InputTextField> = {
  args: {
    placeholder: 'デフォルト値',
    value: '',
    onChange: () => console.log('クリックされましたよ'),
  },
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'プレースホルダーを指定',
    },
    value: {
      control: {
        type: 'text',
      },
      description: 'フィールドの値を指定',
    },
  },
  component: InputTextField,
  tags: ['autodocs'],
  title: 'components/common/InputTextField',
};
export default meta;

type Story = StoryObj<typeof InputTextField>;

export const Default: Story = {};
