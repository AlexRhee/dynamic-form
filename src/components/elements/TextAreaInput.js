import React, {useContext} from 'react';
import {FormContext} from '../../FormContext';

const TextAreaInput = (props) => {
    const { handleChange } = useContext(FormContext);

    return (
        <div className="input-wrapper">
            <label htmlFor="exampleInputEmail1">{props.field.name}:</label>
            <div>
                <textarea rows="4" name={props.field.id} id={props.field.id} aria-label={props.field.name} aria-required={props.field.required} className="form-control" placeholder={props.field.placeholder} onChange={event=>handleChange(props.field.ind, event)}/>
            </div>
        </div>
    )
}

export default TextAreaInput;