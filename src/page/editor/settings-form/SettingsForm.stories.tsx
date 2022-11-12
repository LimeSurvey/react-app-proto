import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import './SettingsForm.scss';
import { SettingsForm } from './SettingsForm';
import { queryClient, persistOptions } from '../../../Query'

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Editor/SettingsForm',
    component: SettingsForm,
} as ComponentMeta<typeof SettingsForm>;

export const Basic: ComponentStory<typeof SettingsForm> = () => (
    <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
        <SettingsForm />
    </PersistQueryClientProvider>
);