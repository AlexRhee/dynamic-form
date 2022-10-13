import React from 'react';

const TextInput = (props) => {

    return (
        <div className="input-wrapper">
            <label>{props.field.name}:</label>
            <div className="inner-wrapper">
                <input disabled type="text" name={props.field.id} className="form-control" aria-describedby="emailHelp" placeholder={props.field.placeholder} value={props.field.value}/>
            </div>
        </div>
    )
}

export default TextInput;