import React from 'react';

import eugeniovidros from '../assets/partners/eugenio-vidros.webp';
import fds from '../assets/partners/fds.webp';
import phi from '../assets/partners/logo-phi.webp';

const CardPartnersAndSuppliers = ({ name, text, description, imagem }) => {
const imageData = {
    'eugeniovidros': eugeniovidros,
    'pedroromualdo': '',
    'fds': fds,
    'phi': phi
}

    return (
        <div className="card-partners-suppliers">
            <div className="card-partners-suppliers-card-info">
                {imagem ? (
                    <img src={imageData[imagem]} alt={description} className="card-partners-suppliers-img" />
                ) : (
                    <div className="card-partners-suppliers-img card-placeholder"></div>
                )}
                <div className="card-partners-suppliers-card-info-text">
                    <h3 className="card-partners-suppliers-name">{name}</h3>
                    <p className="card-partners-suppliers-description">{description}</p>
                </div>

            </div>
            <p className="card-partners-suppliers-text">{text}</p>
        </div>
    );
};

export default CardPartnersAndSuppliers;
