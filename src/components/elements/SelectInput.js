import React, { useContext } from 'react'
import {FormContext} from '../../FormContext';

//Element for select input
const SelectInput = (props) => {
    //Pull in functions and seed state via FormContext
    const { handleChange, handleBlur, seed } = useContext(FormContext);

    return (
        <div className="input-wrapper">
            <label>{props.field.name}:{props.field.required && <span id={seed} className='required-star' htmlFor={props.field.id}>*</span>}</label>
            <div className="inner-wrapper">
                <select className="form-select" name={props.field.id} id={props.field.id} aria-label={props.field.name} aria-required={props.field.required} onChange={event=>handleChange(props.field.ind, event)} onBlur={event=>handleBlur(props.field.id, event)} style={props.field.invalid ? { border: '1.2px solid red', background: 'pink' } : {}}>
                    <option value="0">{props.field.placeholder}</option>
                    {props.field.options ? props.field.options.map((option, i) => <option key={i}>{option}</option>) : null}
                </select>
            </div>
        </div>
    )
}

export default SelectInput;