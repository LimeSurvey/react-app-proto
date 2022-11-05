import React, { useState } from 'react'
import classNames from 'classnames'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { FormControlProps } from 'react-bootstrap/FormControl'

function TextEditableInline(props: FormControlProps) {

    const defaultValue = props.defaultValue !== undefined ? props.defaultValue : ''
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(defaultValue)

    const toggle = () => {
        setEditing(!editing)
    }

    return !editing ? (
        <div onDoubleClick={toggle} style={{ cursor: 'pointer' }}>{value}</div>
    ) :
        <Form onSubmit={() => toggle()} className={classNames('m-0')}>
            <InputGroup>
                <Form.Control
                    type="text"
                    {...props}
                    defaultValue={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Button variant="outline-success" onClick={() => {
                    toggle()
                }}>Save</Button>
                <Button variant="outline-danger" onClick={() => {
                    setValue(defaultValue)
                    toggle()
                }}>Cancel</Button>
            </InputGroup>
        </Form>
}

export default TextEditableInline
