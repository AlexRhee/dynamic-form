import React from 'react'
import TextInput from './elements/TextInput';
import TextAreaInput from './elements/TextAreaInput';
import SelectInput from './elements/SelectInput';
//import field from './Field'

const Element = (props) => {

    switch (props.field.type) {
        case 'text':
            return (<TextInput
                field={props.field}
            />)
        case 'textarea':
            return (<TextAreaInput
                field={props.field}
            />)
        case 'select':
            return (<SelectInput
                field={props.field}
            />)
        default:
            break;
    }
return (
    <div>
        element
    </div>
)

}

export default Element;