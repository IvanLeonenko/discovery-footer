import React from 'react';
import './ErrorMessage.scss';

const ErrorMessage = ({error}) => (
    <div className={"errorContainer " + (error ? "show" : "")}>
        <span>{error}</span>
    </div>
);

export default ErrorMessage;