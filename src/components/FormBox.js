import React from "react"
import inputFields from '../inputFields.json';
import Element from './Element';

//Box card for the form input fields
export default function FormBox(props) {

    //Loop through the fields and add Elements for each
    const inputElements = inputFields ? inputFields.map((el, i) => {
        if (Array.isArray(el)) {
            //Add arrayed fields to the same row in columns
            return <div key={i} className="table-wrapper table"><div className="table-row">{el.map((elem, i) =>
                <div className="table-cell" key={i}><Element field={elem} /></div>
            )}</div></div>
        } else {
            //Non arrayed fields added in their own row
            return <div key={i}><Element field={el} /></div>
        }
    }) : null;


    return (
        <form data-testid="formbox-1"  onSubmit={props.handleSubmit} className="form-wrapper">
            {inputElements}
            <button className="btn">Submit</button>
        </form>
    )
}