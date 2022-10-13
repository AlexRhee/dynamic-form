import React from "react"
import inputFields from '../inputFields.json';
import Element from './Element';

export default function FormBox(props) {

    const inputElements = inputFields ? inputFields.map((el, i) => {
        if (Array.isArray(el)) {

            // return <div key={i} className="table-wrapper"><table><tbody><tr>{el.map((elem, i) =>
            //     <td key={i}><Element field={elem}/></td>
            // )}</tr></tbody></table></div>

            return <div key={i} className="table-wrapper table"><div className="table-row">{el.map((elem, i) =>
                <div className="table-cell" key={i}><Element field={elem}/></div>
            )}</div></div>
        } else {
            return <div key={i}><Element field={el}/></div>
        }
    }) : null;


    return (
        <form onSubmit={props.handleSubmit} className="form-wrapper">
            {inputElements}
            <button className="btn">Submit</button>
        </form>
    )
}