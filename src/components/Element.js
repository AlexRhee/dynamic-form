import React from 'react'
import TextInput from './elements/TextInput';
import TextAreaInput from './elements/TextAreaInput';
import SelectInput from './elements/SelectInput';

const Element = (props) => {

    //Use the field type to determine which type of input to use
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