import React from "react"
import InfoElement from './InfoElement';

export default function InformationBox(props) {

    const infoElements = props.fields ? props.fields.map((el, i) => {
        if (Array.isArray(el)) {
            return <div key={i} className="table-wrapper table"><div className="table-row">{el.map((elem, i) =>
                <div className="table-cell" key={i}><InfoElement field={elem}/></div>
            )}</div></div>
        } else {
            return <div key={i} className="single-input"><InfoElement field={el}/></div>
        }
    }) : null;

    return (
        <form className="form-wrapper">
            {infoElements}
            <button type="button" className="btn" onClick={props.handleReset}>Reset</button>
        </form>
    )
}