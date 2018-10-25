import React from "react";

const RadioGroup = props => {
    return (
        <div className="form-group">
        <label for={props.name} className="form-label">
        {props.title}
        </label>
        <div className="radiogroup">
        {props.options.map(option => {
            return (
                <label key={option} className="inline">
                <input
                    id={props.name}
                    name={props.name}
                    onChange={props.handleChange}
                    value={option}
                    // checked={props.selectedOptions.indexOf(option) > -1}
                    type="radio"
                    />
                    {option}

                </label>
            );
        })}
                
                </div>
        
        </div>
    );
};

export default RadioGroup;