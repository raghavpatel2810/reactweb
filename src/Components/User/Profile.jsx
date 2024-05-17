import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../../store/action/userAction'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Profile = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  })

  useEffect(() => {
    if (localStorage.getItem("Auth")) {

      dispatch(getProfile(localStorage.getItem("Auth")));

      setIsLoggedin(true);
      // console.log(userData);
    } else {
      setIsLoggedin(false);
    }
  }
    , [])
  return (
    <>
      {loading ? (
        <div class="container" >
          <div class="main-body">
            <div class="row mt-4 mb-4">
              <div class=" col-lg-4 "></div>
              <div class=" col-lg-4">
                <div class="card" style={{background:"#e0dfdc"}}>
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <Skeleton src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" height={110} width={110} borderRadius={50} />
                      <div class="mt-3">
                        <Skeleton height={25}>{userData?.vFirstName} {userData?.vLastName}</Skeleton>
                        <Skeleton height={25} class="text-secondary mb-1">Full Stack Developer</Skeleton>
                        <Skeleton height={25} class="text-muted font-size-sm">Bay Area, San Francisco, CA</Skeleton>
                        <div className="d-flex pt-1 mt-2">
                          <Skeleton  height={40} width={125} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary flex-grow-1 me-1"><Link to="/blog" style={{ color: "white" }}>My Blogs</Link></Skeleton>
                          <Skeleton height={40} width={125} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary me-1 flex-grow-1"><Link className='text-dark' to={"/logout"}>Logout</Link></Skeleton>
                        </div>
                      </div>
                    </div>
                    <hr class="my-4" />
                    <ul class="list-group list-group-flush">
                      <Skeleton style={{background:"#e0dfdc"}} height={40} class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h5 class="mb-0">Email</h5>
                        <span class="text-secondary">{userData?.vEmail}</span>
                      </Skeleton>
                      <Skeleton style={{background:"#e0dfdc"}} height={40} class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h5 class="mb-0">Phone</h5>
                        <span class="text-secondary">{userData?.vPhone}</span>
                      </Skeleton>
                      <Skeleton style={{background:"#e0dfdc"}} height={40}  class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h5 class="mb-0">Twitter</h5>
                        <span class="text-secondary">@bootdey</span>
                      </Skeleton>
                      <Skeleton style={{background:"#e0dfdc"}} height={40} class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h5 class="mb-0">Instagram</h5>
                        <span class="text-secondary">@bootdey</span>
                      </Skeleton>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div class="container" >
            <div class="main-body">
              <div class="row mt-4 mb-4">
                <div class=" col-lg-4 "></div>
                <div class=" col-lg-4">
                  <div class="card" style={{background:"#e0dfdc"}}>
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" height="110px" width="110px" borderRadius="50%" />
                        <div class="mt-3">
                          <h4>{userData?.vFirstName} {userData?.vLastName}</h4>
                          <p class="text-secondary mb-1">Full Stack Developer</p>
                          <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                          <div className="d-flex pt-1">
                            <Link to="/blog" style={{ color: "white" }}>
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary flex-grow-1 me-1" height="40px" width="125px">
                              My Blog
                              </button>
                              </Link>
                            
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary me-1 flex-grow-1"><Link className='text-dark' to={"/logout"}>Logout</Link></button>
                          </div>
                        </div>
                      </div>
                      <hr class="my-4" />
                      <ul class="list-group list-group-flush" >
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style={{background:"#e0dfdc"}}>
                          <h5 class="mb-0">Email</h5>
                          <span class="text-secondary">{userData?.vEmail}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style={{background:"#e0dfdc"}}>
                          <h5 class="mb-0">Phone</h5>
                          <span class="text-secondary">{userData?.vPhone}</span>
                        </li>
                        <li style={{background:"#e0dfdc"}} class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h5 class="mb-0">Twitter</h5>
                          <span class="text-secondary">@bootdey</span>
                        </li>
                        <li style={{background:"#e0dfdc"}} class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h5 class="mb-0">Instagram</h5>
                          <span class="text-secondary">@bootdey</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
