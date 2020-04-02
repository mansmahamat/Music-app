import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/m.png';




const Header = () => {
 
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-4">
        <a className="navbar-brand" href="/"><img src={Logo}></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Accueil</a>
            </li>
           
            <li className="nav-item active">
              <Link to={`/favourites`} className="nav-link"  >Favoris</Link>
            </li>
          </ul> 
        </div>
      </nav>
    
    )
    }
export default Header;