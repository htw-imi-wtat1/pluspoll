import React from "react";

function Option(props){
    return <div>
        <label>
            <input
                name={props.name}
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange} />
            {props.label}
        </label>
    </div>;
}
export default Option