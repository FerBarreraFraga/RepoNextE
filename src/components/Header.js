import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <nav className="nav-wrapper light-blue darken-3">
            <div className="row">
                <a href="#!" className="brand-logo center">{titulo}</a>
            </div>
        </nav>
     );
}

 
export default Header;