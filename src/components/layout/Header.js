import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Shopping List</h1>
        </header>
    )
}

const headerStyle = {
    background: 'lightgreen',
    color: 'black',
    textAlign: 'center',
    padding: '20px'
}

export default Header;