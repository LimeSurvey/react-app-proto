import React from 'react'
import './EditorPage.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TopBar from './TopBar'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import Content from './Content'

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
