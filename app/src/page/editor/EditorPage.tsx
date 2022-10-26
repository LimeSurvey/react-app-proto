import React from 'react'
import './EditorPage.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TopBar from '../../component/editor/top-bar/TopBar'
import SideBarLeft from '../../component/editor/side-bar-left/SideBarLeft'
import SideBarRight from '../../component/editor/side-bar-right/SideBarRight'
import Content from '../../component/editor/content/Content'

function EditorPage() {
    return (
        <Container id="container" fluid>
            <TopBar/>
            <Row id="content">
                <SideBarLeft />
                <Content />
                <SideBarRight />
            </Row>
        </Container>
    )
}

export default EditorPage
