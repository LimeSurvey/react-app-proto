import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { FormControlProps } from 'react-bootstrap/FormControl'

function TextEditableInline(props: FormControlProps) {

    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(props.defaultValue !== undefined ? props.defaultValue : '')

    const toggle = () => {
        setEditing(!editing)
    }

    return !editing ? (
        <div onDoubleClick={toggle}>{value}</div>
    ) :
        <Form onSubmit={() => toggle()}>
            <Form.Control
                {...props}
                defaultValue={value}
                type="text"
                onChange={e => setValue(e.target.value)}
                onDoubleClick={toggle}
            />
        </Form>
}

export default TextEditableInline
