import React, { forwardRef } from 'react';

const BasicInput = forwardRef(({ label, type, error, ...rest }, ref) => {
    return (
        <div>
            <label className='label'>{label}</label>
            <input
                type={type}
                ref={ref}
                className={`input ${error && 'is-danger'} `}
                {...rest}
            />
        </div>
    );
});

export default BasicInput;
