import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PlusLg, ListNested } from 'react-bootstrap-icons'
import classNames from 'classnames'

function TopBar() {
  return (
    <Row className={classNames('top-bar', 'border')}>
        <Col className={classNames('d-flex', 'align-items-center', 'justify-content-between', 'p-2' , 'm-1')}>
            <span className={classNames('p-2')}>LimeSurvey</span>
            <span>
                <Button variant="dark" size="sm" className={classNames('m-1')}>
                    <PlusLg />
                </Button>
                <Button variant="dark" size="sm">
                    <ListNested />
                </Button>
            </span>
        </Col>
        <Col xs={7} className={classNames('d-flex', 'align-items-center', 'justify-content-between', 'p-2' , 'm-1')}>
            <Form.Select
                aria-label="Default select example"
                className={classNames('text-align-center')}
                style={{border: 0, backgroundColor: 'transparent'}}>
                <option value="1">My Survey One</option>
                <option value="2">My Survey Two</option>
                <option value="3">My Survey Three</option>
            </Form.Select>
        </Col>
        <Col className={classNames('d-flex', 'align-items-center', 'justify-content-end', 'p-2', 'm-1')}>
            <Button variant="dark" size="sm" className={classNames('d-flex', 'ml-auto', 'm-1')}>
                <PlusLg />
            </Button>
        </Col>
    </Row>
  )
}

export default TopBar
