import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
};

export const emoji = () => (
  <Button onClick={action('clicked')}>
    Some tomato text
  </Button>
);
