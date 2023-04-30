import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('User'));
    setUserAuth(userInfo);
    if (userInfo) {
      setUser(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('User');
    setUser(false);
  };

  return (
    <div className='mb-5'>
      <nav className='navbar  navbar-expand-lg bg-body-tertiary fixed-top '>
        <div className='container-fluid'>
          <div></div>
          <Link className='navbar-brand' href='/'>
            REDEEM FOOTBALL CLUB
            <br />
            <h6>{userAuth && userAuth.fullName}</h6>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                Redeem Football Club
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <Link
                    href='/'
                    className='nav-link active'
                    aria-current='page'
                  >
                    HOME
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link href='/players' className='nav-link'>
                    PLAYERS
                  </Link>
                </li>
                <li className='nav-item'>
                  {user ? (
                    <Link href='/login' className='nav-link' onClick={logout}>
                      LOGOUT
                    </Link>
                  ) : (
                    <Link href='/login' className='nav-link'>
                      LOGIN
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
