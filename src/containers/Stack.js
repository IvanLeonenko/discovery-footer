import React from 'react';
import './Stack.scss';

const Stack = ({children, orientation, className}) => (
    <div className={'stack ' + (className ? className : ' ') + ' ' + (orientation ? orientation : '')}>
        {children}
    </div>
);

export default Stack;