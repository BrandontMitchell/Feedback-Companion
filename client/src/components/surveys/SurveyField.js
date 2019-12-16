// individual survey fields --> renders single label and textfield
import React from 'react';

export default ({ input, label }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input}/>
        </div>
    );
};