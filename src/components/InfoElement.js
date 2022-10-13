import React from 'react'
import TextInfo from './infoelements/TextInfo';
import TextAreaInfo from './infoelements/TextAreaInfo';
import SelectInfo from './infoelements/SelectInfo';

const Element = (props) => {

    //Use the field type to determine which type of input to use
    switch (props.field.type) {
        case 'text':
            return (<TextInfo
                field={props.field}
            />)
        case 'textarea':
            return (<TextAreaInfo
                field={props.field}
            />)
        case 'select':
            return (<SelectInfo
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