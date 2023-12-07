import React from 'react'

function button({text, color}) {
    const buttonStyle = {
        backgroundColor: color || '#007bff', // Default to a blue color if no color prop is provided
        color: '#ffffff',
        padding: '10px 15px',
        fontSize: '16px',
        borderRadius: '4px',
        cursor: 'pointer',
        // Add more styles as needed
    };

    return (
        <button style={buttonStyle}>
            {text}
        </button>
    )
   
}

export default button
