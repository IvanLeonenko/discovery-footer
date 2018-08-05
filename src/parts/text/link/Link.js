import React from 'react';
import './Link.scss';

const Link = ({link, text}) => (
    <a href={link}>{text}</a>
);

export default Link;