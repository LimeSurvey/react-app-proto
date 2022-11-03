import React, { useState } from 'react'
import './SideBarLeft.scss'
import Collapse from 'react-bootstrap/Collapse'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'
import { useApi as useSideBarLeftApi } from '../model/SideBarLeftUseApi'

function SideBarLeft() {

    const { data: site } = useSideBarLeftApi();

    const [ isFullyVisible, setIsFullyVisible ] = useState(site?.open)

    return (
        <Collapse
            in={site?.open}
            dimension="width"
            onEntered={() => {
                setIsFullyVisible(true)
            }}
            onExiting={() => {
                setIsFullyVisible(false)
            }}
        >
            <Col xs={2} xl={2} className={classNames(
                    'sidebar-l',
                    'align-items-center',
                    'justify-content-start',
                )}
            >
                <div
                    className={classNames('p-2')}
                    style={{display: isFullyVisible ? 'block' : 'none'}}>
                    left side bar
                </div>
            </Col>
        </Collapse>
    )
}

export default SideBarLeft
