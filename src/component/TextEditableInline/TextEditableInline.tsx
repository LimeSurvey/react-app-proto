import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { FormControlProps } from 'react-bootstrap/FormControl'

type OnSave = { onSave?: (x: any) => any }

function TextEditableInline(props: FormControlProps & OnSave) {

    const defaultValue = typeof props.defaultValue == 'string' ? props.defaultValue : ''
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState<string | null>(null)

    const inputRef = useRef<HTMLInputElement>(null)

    const toggle = () => {
        setEditing(currentEditing => {
            return !currentEditing
        })
    }

    const formControlProps = {...props}
    // onSave is not a valid prop of Form.Control
    delete formControlProps.onSave

    return !editing ? (
        <div onDoubleClick={toggle} style={{ cursor: 'pointer' }}>{value ? value : defaultValue}</div>
    ) :
        <Form onSubmit={() => toggle()} className={classNames('m-0')}>
            <InputGroup>
                <Form.Control
                    ref={inputRef}
                    type="text"
                    {...formControlProps}
                    defaultValue={defaultValue}
                    onChange={e => {
                        setValue(e.target.value)
                    }}
                />
                <Button variant="outline-success" onClick={(e) => {
                    toggle()
                    if (props.onSave && inputRef && inputRef.current) {
                        props.onSave(inputRef.current.value)
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
