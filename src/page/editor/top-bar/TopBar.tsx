import React from 'react'
import './TopBar.scss'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import * as Icon from 'react-bootstrap-icons'
import classNames from 'classnames'
import SettingsForm from '../../editor/settings-form/SettingsForm'
import { useApi as useSideBarLeftApi } from '../model/SideBarLeftUseApi'
import { useApi as useSiteApi } from '../../../model/site/SiteUseApi'


export type TopBarProps = {siteName?:string}

export const TopBar: React.FC<TopBarProps> = (props) => {

    const sideBarLeftApi = useSideBarLeftApi();

    const { data: site } = useSiteApi();

    const settingsForm = (
        <Popover id="settings-popover">
            <Popover.Header as="h3">Settings</Popover.Header>
            <Popover.Body>
                <SettingsForm/>
            </Popover.Body>
        </Popover>
    )

    return (
        <Row className={classNames('top-bar', 'border', 'mb-1')}>
            <Col xs={2} xl={2} className={classNames(
                'd-flex', 'align-items-center', 'justify-content-between', 'p-2' , 'm-1'
            )}>
                <span className={classNames('p-2')}>{site?.name}</span>
                <span>
                    <Button variant="dark" size="sm" className={classNames('m-1')}>
                        <Icon.PlusLg />
                    </Button>
                    <Button
                        variant={sideBarLeftApi.data?.isOpen() ? 'secondary' : 'dark'}
                        size="sm"
                        onClick={() =>
                           sideBarLeftApi.toggleVisibility()
                        }
                    >
                        <Icon.ListNested />
                    </Button>
                </span>
            </Col>
            <Col className={classNames(
                'd-flex', 'align-items-center', 'justify-content-between', 'p-2' , 'm-1'
            )}>
                <Form.Select
                    aria-label="Default select example"
                    className={classNames('text-align-center')}
                    style={{border: 0, backgroundColor: 'transparent'}}>
                    <option value="1">My Survey One</option>
                    <option value="2">My Survey Two</option>
                    <option value="3">My Survey Three</option>
                </Form.Select>
            </Col>
            <Col  xs={2} xl={2} className={classNames(
                'd-flex', 'align-items-center', 'justify-content-end', 'p-2', 'm-1'
            )}>
                <Button variant="dark" size="sm" className={classNames('d-flex', 'ml-auto', 'm-1')}>
                    {'Publish'}
                </Button>
                <OverlayTrigger trigger="click" placement="left" overlay={settingsForm} rootClose>
                    <Button variant="dark" size="sm" className={classNames('d-flex', 'ml-auto', 'm-1')}>
                        <Icon.Gear />
                    </Button>
                </OverlayTrigger>
            </Col>
        </Row>
    )
}

export default TopBar
