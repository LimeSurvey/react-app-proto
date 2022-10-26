import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from 'react-bootstrap/Container'
import './Content.scss';
import Content from './Content';

export default {
  title: 'Content',
  component: Content,
} as ComponentMeta<typeof Content>;

export const Basic: ComponentStory<typeof Content> = () => (
  <Container id="container" fluid>
    <Content/>
  </Container>
);