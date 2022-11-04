import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from 'react-bootstrap/Container'
import './Survey.scss';
import Survey from './Survey';

export default {
  title: 'Editor/Survey',
  component: Survey,
} as ComponentMeta<typeof Survey>;

export const Basic: ComponentStory<typeof Survey> = () => (
    <Container id="container" fluid>
    <Survey />
    </Container>
);