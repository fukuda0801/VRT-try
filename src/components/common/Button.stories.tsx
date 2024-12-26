import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  args: {
    children: 'children',
    variant: 'contained',
    disabled: false,
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'ボタンのテキストを指定',
    },
    variant: {
      control: {
        type: 'text',
      },
      description: 'ボタンのタイプを指定',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'ボタンのアクティブ状態を指定',
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'components/common/Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
