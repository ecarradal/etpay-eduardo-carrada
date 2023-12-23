import React from 'react';
import FeatureProps from '../types/FeatureProps';

const Feature: React.FC<FeatureProps> = ({ icon, link, title, description }) => {
    return (
        <div className='container align-center feature'>
            <img className='feature-image' src={icon} alt="Feature Icon" />
            <div>
                <h3>{title}</h3>
                <p className='body-md w400'>{description}</p>
                <br />
            </div>
        </div>
    );
}

export default Feature;
