import Head from 'next/head'
import Link from 'next/link'

import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.sideNavbar}> */}

        <div id='tmSideBar' className='col-xl-3 col-lg-4 col-md-12 col-sm-12 sidebar'>

          <button id='tmMainNavToggle' className='menu-icon'>&#9776;</button>

          <div className='inner'>
            <nav id='tmMainNav' className='tm-main-nav'>
              <ul>
                <li>
                  <a href='about' id='tmNavLink1' className='scrolly active'>
                    <i className='fas fa-home tm-nav-fa-icon'></i>
                    <span>Introduction</span>
                  </a>
                </li>

                {/* <Link href='menu'>
                  <a id='tmNavLink2' className='scrolly'>
                    <i className='fas fa-map tm-nav-fa-icon'></i>
                    <span>Our Products</span>
                  </a>
                </Link> */}

                <li>
                  <a href='menu' id='tmNavLink2' className='scrolly'>
                    <i className='fas fa-map tm-nav-fa-icon'></i>
                    <span>Our Products</span>
                  </a>
                </li>							
                <li>
                  <a href='examples' className='scrolly'>
                    <i className='fas fa-users tm-nav-fa-icon'></i>
                    <span>Our Company</span>
                  </a>
                </li>
                <li>
                  <a href='contact' className='scrolly'>
                    <i className='fas fa-comments tm-nav-fa-icon'></i>
                    <span>Contact Us</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      {/* </div>      */}
    </div>  
  )
}