import React from 'react';

//Element for the text are info (post submission)
const TextAreaInput = (props) => {
    return (
        <div data-testid="textareainfo-1" className="input-wrapper">
            <label>{props.field.name}:</label>
            <div>
                <textarea disabled type="textarea" className="form-control"  placeholder={props.field.placeholder} value={props.field.value}/>
            </div>
        </div>
    )
}

export default TextAreaInput;