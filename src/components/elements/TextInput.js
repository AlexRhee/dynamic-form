import React, {useContext} from 'react';
import {FormContext} from '../../FormContext';

const TextInput = (props) => {
    const { handleChange, handleBlur, seed } = useContext(FormContext);

    return (
        <div className="input-wrapper">
            <label>{props.field.name}:{props.field.required && <span id={seed} className='required-star' htmlFor={props.field.id}>*</span>}</label>
            <div className="inner-wrapper">
                <input type="text" name={props.field.id} id={props.field.id} aria-label={props.field.name} aria-required={props.field.required} className="form-control" aria-describedby="emailHelp" placeholder={props.field.placeholder} onChange={event=>handleChange(props.field.ind, event)} onBlur={event=>handleBlur(props.field.id, event)} style={props.field.invalid ? { border: '1.2px solid red', background: 'pink' } : {}} />
            </div>
        </div>
    )
}

export default TextInput;