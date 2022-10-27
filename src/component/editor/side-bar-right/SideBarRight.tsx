import React from 'react'
import './SideBarRight.scss'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'

function SideBarRight() {
    return (
        <Col className={classNames('sidebar', 'sidebar-r', 'd-flex', 'align-items-center', 'justify-content-start', 'p-2', 'm-1')}>
            right side bar
        </Col>
    )
}

export default SideBarRight
