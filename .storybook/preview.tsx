import React from 'react';
import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from '../src/providers/AppThemeProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <AppThemeProvider>
          <Story />
        </AppThemeProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
