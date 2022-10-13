import React from 'react'

//Element for select input
const SelectInput = (props) => {
    return (
        <div className="input-wrapper">
            <label>{props.field.name}:</label>
            <div className="inner-wrapper">
                <select className="form-select" name={props.field.id} id={props.field.id} aria-label={props.field.name} aria-required={props.field.required}>
                    <option >{props.field.placeholder}</option>
                    {props.field.options ? props.field.options.map((option, i) => <option key={i}>{option}</option>) : null}
                </select>
            </div>
        </div>
    )
}

export default SelectInput;