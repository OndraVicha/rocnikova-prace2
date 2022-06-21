import React from 'react';

export const Header = (props) => {
    const { title, motto } = props;
    const mottoStyle = {
         fontSize: '30px', 
         color: 'rgb(200,180,140)', 
         borderTop: '1px solid #aaa', 
         textTransform: 'uppercase'
    };
    return (
        <header className='bg-dark p-5 text-center'>
            <h1 className='display-2 text-white'>{title}</h1>
            {motto &&
                <small style={mottoStyle}>{motto}</small>
            }
        </header>
    );
} 