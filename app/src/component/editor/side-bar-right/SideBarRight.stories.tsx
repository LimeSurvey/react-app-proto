import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './SideBarRight.scss';
import SideBarRight from './SideBarRight';

export default {
  title: 'SideBarRight',
  component: SideBarRight,
} as ComponentMeta<typeof SideBarRight>;

export const Basic: ComponentStory<typeof SideBarRight> = () => (
    <SideBarRight/>
);
