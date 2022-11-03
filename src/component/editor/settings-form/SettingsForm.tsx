import React, { useState } from 'react'
import './SettingsForm.scss'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useQuerySite, useMutationSite } from '../../../model/site/SiteHook'
import siteGetApi from '../../../model/site/SiteApi'

export const SettingsForm: React.FC = () => {

    const {
        data: site,
        update: updateSite
    } = siteGetApi(
        useQuerySite(),
        useMutationSite()
    )

    const [ siteName, setSiteName ] = useState(site?.name)

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Site Name</Form.Label>
                <Form.Control
                    type="site.name"
                    defaultValue={site?.name}
                    onChange={e => setSiteName(e.target.value)}
                />
                <Form.Text className="text-muted">
                    What is the name of your site?
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="button" onClick={() => updateSite({name: siteName})}>
                Save
            </Button>
        </Form>
    )
}

export default SettingsForm
