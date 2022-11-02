import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import './SettingsForm.scss';
import { SettingsForm } from './SettingsForm';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Editor/SettingsForm',
  component: SettingsForm,
} as ComponentMeta<typeof SettingsForm>;

export const Basic: ComponentStory<typeof SettingsForm> = () => (
    <SettingsForm />
);