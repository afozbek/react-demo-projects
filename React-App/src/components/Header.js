import React from 'react';

const Header = (props) => {
    const { branding } = props;
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
            </div>
        </nav>
    );
}

Header.defaultProps = {
    branding: 'Real-Time Cryptocurrency Dashboard'
};

export default Header;  
