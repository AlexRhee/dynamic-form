import React from "react"
import InfoElement from './InfoElement';


//Box card for the post submission information page
export default function InformationBox(props) {

    //Loop through the fields and add InfoElements for each
    const infoElements = props.fields ? props.fields.map((el, i) => {
        //Add arrayed fields to the same row in columns
        if (Array.isArray(el)) {
            return <div key={i} className="table-wrapper table"><div className="table-row">{el.map((elem, i) =>
                <div className="table-cell" key={i}><InfoElement field={elem} /></div>
            )}</div></div>
        } else {
            //Non arrayed fields added in their own row
            return <div key={i} className="single-input"><InfoElement field={el} /></div>
        }
    }) : null;

    return (
        <form className="form-wrapper">
            {infoElements}
            <button type="button" className="btn" onClick={props.handleReset}>Reset</button>
        </form>
    )
}