import React from 'react';

import Icon1 from '../assets/icons/arch-proj.svg?react';
import Icon2 from '../assets/icons/urb-proj.svg?react';
import Icon3 from '../assets/icons/interior.svg?react';
import Icon4 from '../assets/icons/deal.svg?react';

const iconList = {
    1: Icon1,
    2: Icon2,
    3: Icon3,
    4: Icon4,
};

const Cards = ({ title, description, cardNumber }) => {

    const IconComponent = iconList[cardNumber];

    const cardStyle = {
        backgroundColor: `var(--soft-dark-green-${cardNumber})`,
    }
    return (
        <div className="cards-item-card" style={cardStyle}>
            {/* <img className="cards-item-img" src={image} alt={title} /> */}
            <IconComponent className="cards-item-img" aria-label={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Cards
