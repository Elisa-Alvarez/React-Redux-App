import React from 'react'
import {Link} from 'react-router-dom'

function NavBar () {
    return(
        <header className='main-Nav'>   
              <nav>
                  <Link to='/'>Home</Link>
                  <Link to='/journal'> Journal</Link>
              </nav>        
        </header>
    )
}

export default NavBar