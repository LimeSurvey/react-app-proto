import React from 'react'
import './index.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TopBar from './top-bar/TopBar'
import SideBarLeft from './side-bar-left/SideBarLeft'
import SideBarRight from './side-bar-right/SideBarRight'

import Survey from 'components/Survey'

function Editor() {
  const siteConfig = {
    name: 'LimeSurvey 2',
  }

  return (
    <Container id='container' fluid>
      <TopBar siteName={siteConfig.name} />
      <Row id='content'>
        <SideBarLeft />
        <Survey />
        <SideBarRight />
      </Row>
    </Container>
  )
}

export default Editor
