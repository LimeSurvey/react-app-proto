import React from 'react'
import './TopBar.scss'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PlusLg, ListNested } from 'react-bootstrap-icons'
import classNames from 'classnames'
import { useQuerySiteState, useMutationSiteState } from '../../../model/site/SiteHook'
import SideBarLeft from '../../../model/side-bar-left/SideBarLeft'
import { useQuerySideBarLeftState, useMutationSideBarLeftState } from '../../../model/side-bar-left/SideBarLeftHook'

export type TopBarProps = {siteName?:string};

export const TopBar: React.FC<TopBarProps> = (props) => {

    const { data: sideBarLeftData, refetch: sideBarLeftDataRefetch } = useQuerySideBarLeftState();
    const { mutateAsync: sideBarLeftMutateSync } = useMutationSideBarLeftState();
    const updateSideBarLeft = (options: Partial<SideBarLeft>) =>
        sideBarLeftMutateSync(options).then(() => sideBarLeftDataRefetch())

    const toggleSideBarLeftVisibility = (origValue: Partial<SideBarLeft>|undefined) => {
        const openPrev = origValue !== undefined ? origValue.open : true;
        updateSideBarLeft({open: !openPrev})
    }

    const { data: siteData, refetch: siteDataRefetch } = useQuerySiteState();
    const { mutateAsync: siteMutateSync } =  useMutationSiteState();

    return (
        <Row className={classNames('top-bar', 'border', 'mb-1')}>
            <Col xs={2} xl={2} className={classNames(
                'd-flex', 'align-items-center', 'justify-content-between', 'p-2' , 'm-1'
            )}>
                <span className={classNames('p-2')}>{siteData?.name ?? 'LimeSurvey'}</span>
                <span>
                    <Button variant="dark" size="sm" className={classNames('m-1')}>
                        <PlusLg />
                    </Button>
                    <Button
                        variant={sideBarLeftData?.open ? 'secondary' : 'dark'}
                        size="sm"
                        onClick={() => toggleSideBarLeftVisibility(sideBarLeftData)}
                    >
                        <ListNested />
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
                    <PlusLg />
                </Button>
            </Col>
        </Row>
    )
}

export default TopBar
