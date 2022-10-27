import React from 'react'
import { useQuery } from '@tanstack/react-query'
import './EditorPage.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TopBar from '../../component/editor/top-bar/TopBar'
import SideBarLeft from '../../component/editor/side-bar-left/SideBarLeft'
import SideBarRight from '../../component/editor/side-bar-right/SideBarRight'
import Content from '../../component/editor/content/Content'

class Survey {
    public questionnaire: {[key: string] : string} = {}

    constructor(data: any|null = null) {
        if (data) {
            this.questionnaire = data.questionnaire ?? {};
        }
    }
};

const fetchSurvey = (): Promise<Survey> => fetch('/data/survey_82556_en.json')
.then((resp) => {
    return new Survey(resp.json())
})

function EditorPage() {

    const survey = useQuery(['survey'], fetchSurvey);

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
                {JSON.stringify(survey)}
            </Row>
        </Container>
    )
}

export default EditorPage
