import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import './TopBar.scss';
import TopBar from './TopBar';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Editor/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>;

export const Basic: ComponentStory<typeof TopBar> = () => (
    <TopBar/>
);