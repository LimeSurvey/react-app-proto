import React from 'react'
import './SideBarLeft.scss'
import Collapse from 'react-bootstrap/Collapse'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'

function SideBarLeft() {

    return (
        <Collapse
            in={false}
            dimension="width"
            onEntered={() => null}
            onExiting={() => null}
        >
            <Col xs={2} xl={2} className={classNames(
                    'sidebar-l',
                    'align-items-center',
                    'justify-content-start',
                )}
            >
                <div
                    className={classNames('p-2')}
                    style={{display: false ? 'block' : 'none'}}>
                    left side bar
                </div>
            </Col>
        </Collapse>
    )
}

export default SideBarLeft
