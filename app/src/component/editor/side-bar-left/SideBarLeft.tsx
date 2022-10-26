import React from 'react'
import './SideBarLeft.scss'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'

function SideBarLeft() {
    return (
        <Col className={classNames('sidebar', 'sidebar-l', 'd-flex', 'align-items-center', 'justify-content-start', 'p-2', 'm-1')}>
            left side bar
        </Col>
    )
}

export default SideBarLeft
