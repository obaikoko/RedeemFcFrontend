import Link from 'next/link';

import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div >
      <nav className='navbar  navbar-expand-lg bg-body-tertiary  '>
        <div className='container-fluid'>
          <div></div>
          <Link className='navbar-brand' href='/'>
            REDEEM FOOTBALL CLUB <br />
           
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
                  {session ? (
                    <Link
                      href='/home'
                      className='nav-link'
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      LOGOUT
                    </Link>
                  ) : (
                    <Link href='/api/auth/signin' className='nav-link'>
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
