import React from 'react';

//Element for the text info (post submission)
const TextInput = (props) => {
    return (
        <div data-testid="textinfo-1" className="input-wrapper">
            <label>{props.field.name}:</label>
            <div className="inner-wrapper">
                <input disabled type="text" name={props.field.id} className="form-control" aria-describedby="emailHelp" placeholder={props.field.placeholder} value={props.field.value}/>
            </div>
        </div>
    )
}

export default TextInput;