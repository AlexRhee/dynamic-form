import React, {useContext} from 'react';
import {FormContext} from '../../FormContext';

//Element for text are input
const TextAreaInput = (props) => {
    //Pull in functions and seed state
    const { handleChange, handleBlur, seed } = useContext(FormContext);

    return (
        <div className="input-wrapper">
            <label htmlFor="exampleInputEmail1">{props.field.name}:{props.field.required && <span id={seed} className='required-star' htmlFor={props.field.id}>*</span>}</label>
            <div>
                <textarea rows="4" name={props.field.id} id={props.field.id} aria-label={props.field.name} aria-required={props.field.required} className="form-control" placeholder={props.field.placeholder} onChange={event=>handleChange(props.field.ind, event)}  onBlur={event=>handleBlur(props.field.id, event)} style={props.field.invalid ? { border: '1.2px solid red', background: 'pink' } : {}}/>
            </div>
        </div>
    )
}

export default TextAreaInput;