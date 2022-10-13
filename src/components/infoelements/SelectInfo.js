import React from 'react'

//Element for the select info (post submission)
const SelectInfo = (props) => {
    console.log(props)
    return (
        <div data-testid="selectinfo-1"  className="input-wrapper">
            <label>{props.field.name}:</label>
            <div className="inner-wrapper">
                <select disabled className="form-select" aria-label="Default select example">
                    <option >{props.field.value}</option>
                </select>
            </div>
        </div>
    )
}

export default SelectInfo;