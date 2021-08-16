import React from 'react';

const InputField = ({
    type,
    value,
    placeholder,
    onChange
}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} /><br />
        </div>
    );
};

export default InputField;