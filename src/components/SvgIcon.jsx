
import React from 'react';
import PropTypes from 'prop-types';
import { svgIcons } from './SvgIcons';

const SvgIcon = ({
    iconName,
    width = 24,
    height = 24,
    color = 'currentColor',
    className = ''
}) => {
    if (!svgIcons[iconName]) {
        console.warn(`Icon "${iconName}" not found. Available icons: ${Object.keys(svgIcons).join(', ')}`);
        return null;
    }

    // Obtém o SVG original
    const iconSvg = svgIcons[iconName];

    // Extrai as props do SVG original
    const {
        viewBox,
        fill = 'currentColor',
        className: originalClassName = '',
        ...restProps
    } = iconSvg.props;

    // Combina as classes
    const combinedClassName = `${originalClassName} ${className}`.trim();

    return React.cloneElement(iconSvg, {
        width,
        height,
        viewBox, // Usa o viewBox do SVG original
        fill: fill === 'none' ? fill : color, // Preserva 'none' se for o caso
        color, // Alguns SVGs podem usar currentColor
        className: combinedClassName || undefined,
        ...restProps
    });
};

SvgIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    className: PropTypes.string,
};

export default SvgIcon;