import React from 'react'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'

function Editor() {
    return (
        <Col xs={7} className={classNames('d-flex', 'justify-content-center', 'p-2', 'm-1')}>
            {'Content'}
        </Col>
    )
}

export default Editor
