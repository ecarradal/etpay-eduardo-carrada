import React from 'react';
import FeatureProps from '../types/FeatureProps';

const Feature: React.FC<FeatureProps> = ({ icon, link, title, description }) => {
    return (
        <a href={link}>
            <img src={icon} alt="Feature Icon" />
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    );
}

export default Feature;
