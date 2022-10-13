import React from 'react'

//Element for the select info (post submission)
const SelectInfo = (props) => {
    return (
        <div className="input-wrapper">
            <label>{props.field.name}:</label>
            <div className="inner-wrapper">
                <select disabled className="form-select" aria-label="Default select example" value={props.field.value}>
                    <option >{props.field.placeholder}</option>
                    {props.field.options ? props.field.options.map((option, i) => <option key={i}>{option}</option>) : null}
                </select>
            </div>
        </div>
    )
}

export default SelectInfo;