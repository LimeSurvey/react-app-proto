import React from 'react'
import './SideBarRight.scss'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'

function SideBarRight() {
    return (
        <Col xs={2} xl={2} className={classNames(
            'sidebar-r',
            'align-items-center',
            'justify-content-start'
        )}>
                <div
                    className={classNames('p-2')}
                >
                    left side bar
                </div>
        </Col>
    )
}

export default SideBarRight
