import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("Auth")) {
      // console.log(localStorage.getItem("Auth"));
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [isLoggedin])


  return (
    <>
      <header className="header-top bg-grey justify-content-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 text-center d-none d-lg-block">
              <Link className="navbar-brand " to='/'>
                <img src="/download.png" alt="" className="img-fluid"
                  style={{ height: '60px', width: '60px' }} />
              </Link>
            </div>

            <div className="col-lg-8 col-md-12">
              <nav className="navbar navbar-expand-lg navigation-2 navigation">
                <a className="navbar-brand text-uppercase d-lg-none" href="#">
                  <img src="images/logo.png" alt="" className="img-fluid" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse"
                  aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar-collapse">
                  <ul id="menu" className="menu navbar-nav mx-auto">

                    <li className="nav-item">
                      <div>
                        <Link className="nav-link px-3" to='/' >Home</Link>
                      </div>
                    </li>
                    <li className="nav-item">

                      <div>
                        <Link className="nav-link px-3" to='/generalblog'>Blog</Link>
                      </div>
                    </li>

                    {!isLoggedin ? (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link px-3" to='/registration'>Register</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link px-3" to='/login'>Login</Link>
                        </li>
                      </>)
                      : (
                        <>
                          {/* <li className="nav-item">
                            <Link className="nav-link px-3" to='/blog'>My Blogs</Link>
                          </li> */}

                          <li className="nav-item">
                            <Link className="nav-link px-3" to='/profile'>Profile</Link>
                          </li>

                          <li className="nav-item">
                            <Link className="nav-link px-3" to="/logout" >LogOut</Link>
                          </li>
                        </>
                      )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;