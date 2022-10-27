import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './SideBarLeft.scss';
import SideBarLeft from './SideBarLeft';

export default {
  title: 'Editor/SideBarLeft',
  component: SideBarLeft,
} as ComponentMeta<typeof SideBarLeft>;

export const Basic: ComponentStory<typeof SideBarLeft> = () => (
    <SideBarLeft/>
);
