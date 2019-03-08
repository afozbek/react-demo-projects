import React from 'react';


//Bizim Başlığımız basit bootstrap kullanıldı!
const Header = (props) => {
    const { branding } = props;
    return (
        <nav className="navbar mb-3 pt-3 pb-3 py-0  text-sm-center text-md-left">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
            </div>
        </nav>
    );
}

Header.defaultProps = {
    branding: 'Real-Time Cryptocurrency Dashboard'

};

export default Header;  
