import React from 'react'
import './EditorPage.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TopBar from '../../component/editor/top-bar/TopBar'
import SideBarLeft from '../../component/editor/side-bar-left/SideBarLeft'
import SideBarRight from '../../component/editor/side-bar-right/SideBarRight'
import Content from '../../component/editor/content/Content'

function EditorPage() {

    const siteConfig = {
        name: 'LimeSurvey 2'
    };

    return (
        <Container id="container" fluid>
            <TopBar siteName={siteConfig.name} />
            <Row id="content">
                <SideBarLeft />
                <Content />
                <SideBarRight />
            </Row>
        </Container>
    )
}

export default EditorPage
