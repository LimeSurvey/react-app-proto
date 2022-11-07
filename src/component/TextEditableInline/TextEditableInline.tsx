import React, { useState } from 'react'
import classNames from 'classnames'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { FormControlProps } from 'react-bootstrap/FormControl'

type OnSave = { onSave?: (x: any) => any }

function TextEditableInline(props: FormControlProps & OnSave) {

    const defaultValue = props.defaultValue !== undefined ? props.defaultValue : ''
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(defaultValue)

    const toggle = () => {
        setEditing(!editing)
    }

    const formControlProps = {...props}
    delete formControlProps.onSave

    return !editing ? (
        <div onDoubleClick={toggle} style={{ cursor: 'pointer' }}>{value}</div>
    ) :
        <Form onSubmit={() => toggle()} className={classNames('m-0')}>
            <InputGroup>
                <Form.Control
                    type="text"
                    {...formControlProps}
                    defaultValue={value}
                    onChange={e => {
                        setValue(e.target.value)
                        if (props.onSave) {
                            props.onSave(value)
                        }
                    }}
                />
                <Button variant="outline-success" onClick={() => {
                    toggle()
                    if (props.onSave) {
                        props.onSave(value)
                    }
                }}>Save</Button>
                <Button variant="outline-danger" onClick={() => {
                    setValue(defaultValue)
                    toggle()
                }}>Cancel</Button>
            </InputGroup>
        </Form>
}

export default TextEditableInline
