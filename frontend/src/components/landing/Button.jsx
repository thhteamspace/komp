import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-[1.5px]";

    const variants = {
        // Solid Black, White Text, Sharp Edges
        primary: "bg-black text-white border-black hover:bg-white hover:text-black",

        // White Background, Black Border
        secondary: "bg-white text-black border-black hover:bg-gray-50",

        // Transparent, Dashed Border
        outline: "bg-transparent text-gray-600 border-gray-300 border-dashed hover:border-black hover:text-black",

        // White Glow (for Dark Backgrounds)
        white: "bg-white text-black border-transparent hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'white']),
    className: PropTypes.string,
};

export default Button;
