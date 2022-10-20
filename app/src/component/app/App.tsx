import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlusLg, ListNested } from 'react-bootstrap-icons';

function App() {
  return (
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
        <Container id="container" fluid>
            <Row className="top-bar border">
                <Col className="d-flex align-items-center justify-content-between p-2 m-1">
                    <span className="p-2">LimeSurvey</span>
                    <span>
                        <Button variant="dark" className="p-1 m-1">
                            <PlusLg size={26}/>
                        </Button>
                        <Button variant="dark" className="p-1">
                            <ListNested size={26}/>
                        </Button>
                    </span>
                </Col>
                <Col xs={7} className="d-flex align-items-center justify-content-center p-2 m-1">
                    <Form.Select
                        aria-label="Default select example"
                        className="text-align-center"
                        style={{border: 0, backgroundColor: 'transparent'}}>
                        <option value="1">My Survey One</option>
                        <option value="2">My Survey Two</option>
                        <option value="3">My Survey Three</option>
                    </Form.Select>
                </Col>
                <Col className="d-flex align-items-center justify-content-end p-2 m-1">
                    <Button className="d-flex ml-auto p-1 m-1" variant="dark">
                        <PlusLg size={26}/>
                    </Button>
                </Col>
            </Row>
            <Row id="content">
                <Col className="sidebar sidebar-l d-flex align-items-center justify-content-start p-2 m-1">
                    left side bar
                </Col>
                <Col xs={7} className="d-flex align-items-center justify-content-center p-2 m-1">
                </Col>
                <Col className="sidebar sidebar-r d-flex align-items-center justify-content-start p-2 m-1">
                    right side bar
                </Col>
            </Row>
        </Container>
    </ThemeProvider>
  );
}

export default App;
