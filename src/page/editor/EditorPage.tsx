import React from 'react'
import './EditorPage.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TopBar from './top-bar/TopBar'
import SideBarLeft from './side-bar-left/SideBarLeft'
import SideBarRight from './side-bar-right/SideBarRight'
import Survey from './survey/Survey'

function EditorPage() {

    const siteConfig = {
        name: 'LimeSurvey 2'
    };

    const survey = {
        "id": 1,
        "title": {
            "en": "Test Survey 1"
        },
        "questionGroups": [
            {
                "id": 1,
                "name": {
                    "en": "Question Group 1",
                    "fr": "La baguette"
                },
                "questions": [
                    {
                        "id": 1,
                        "name": {
                            "en": "Question 1",
                            "fr": "La baguette 1"
                        },
                        "type": "S",
                        "helpText": {
                            "en": "Some help",
                            "fr": "Some baguette"
                        }
                    }
                ]
            },
            {
                "id": 2,
                "name": null,
                "questions": [
                    {
                        "id": 4,
                        "name": {
                            "en": "Question 4",
                            "fr": "La baguette 4"
                        },
                        "type": "A",
                        "helpText": null,
                        "subQuestions": [
                            {
                                "id": 5,
                                "name": {
                                    "en": "Mo",
                                    "fr": "Mueh"
                                }
                            },
                            {
                                "id": 7,
                                "name": {
                                    "en": "Mo 2",
                                    "fr": "Mueh 2"
                                }
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "name": null,
                        "answerOptions": [
                            {
                                "id": 1,
                                "answer": {
                                    "en": "Male",
                                    "fr": "Le male"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }

    return (
        <Container id="container" fluid>
            <TopBar siteName={siteConfig.name} />
            <Row id="content">
                <SideBarLeft />
                <Survey survey={survey} />
                <SideBarRight />
            </Row>
        </Container>
    )
}

export default EditorPage
