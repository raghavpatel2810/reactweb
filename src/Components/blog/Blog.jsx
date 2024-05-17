import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBlogList } from "../../store/action/blogAction";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



function Blog(props) {
  const listings = [
    "img/news-1.jpg",
    "img/news-2.jpg",
    "img/news-3.jpg",
    "img/news-4.jpg",
    "img/news-5.jpg",
    "img/news-6.jpg",

  ]
  const { blogList } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!blogList && localStorage.getItem("Auth")) {
      dispatch(getBlogList(localStorage.getItem("Auth")));
    }
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [blogList, dispatch]);
  if (!blogList) {
    return (
      <>

        {loading ? (
          <>
            <div style={{ background: "" }}>
              <h2 className='ms-5'>Blog List</h2>

              <div>


                <div className="container-sm border border-2 mb-2 p-2" style={{ background: '#e1e5e6', borderRadius: "15px" }}>
                  <div className="row">
                    <div className="col-lg-4">
                      <Skeleton style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "15px" }} />
                    </div>

                    <div className="col-lg-8">

                      <Skeleton className='h5' />
                      <Skeleton className='h6' />
                      <Skeleton className='h6' />
                      <Skeleton>
                        <button className='btn btn-primary' ></button>
                      </Skeleton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </>

        ) : (
          <>

            <h2 className='ms-5'>Blog List</h2>

            <div className='text-center text-light' style={{ fontWeight: '900', fontSize: '50px', opacity: '0.9' }}><b>My Blogs</b>
            </div>
            <h1 className='text-center' style={{ marginTop: '80px', marginBottom: '150px' }}>
              <b className='text-secondary'>No blogs found !</b>
            </h1>
          </>

        )}
      </>
    );
  }
  else {
    return (
      <>

        {loading ? (
          <>
            <div style={{ background: "" }}>
              <h2 className='ms-5'>Blog List</h2>

              <div>
                <div className="container-sm border border-2 mb-2 p-2" style={{ background: '#e1e5e6', borderRadius: "15px" }}>
                  <div className="row">
                    <div className="col-lg-4">
                      <Skeleton style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "15px" }} />
                    </div>

                    <div className="col-lg-8">

                      <Skeleton className='h5' />
                      <Skeleton className='h6' />
                      <Skeleton className='h6' />
                      <Skeleton>
                        <button className='btn btn-primary' ></button>
                      </Skeleton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </>

        ) : (
          <>

            <div style={{ background: "" }}>
              <h2 className='ms-5'>Blog List</h2>
              <div className="row">
                <div className="col-lg-9"></div>
                <div className="col-lg-3">
                  {localStorage.getItem("Auth") ? (
                    <div >
                      <Link className="btn btn-success mb-2" to='/addblog' style={{ marginLeft: "6.8vw" }}>Add Blog</Link>
                    </div>
                  ) : (<span></span>)}
                </div>
              </div>
              {blogList.map((blog, index) => (

                <div key={blog.iBlogId} className="container-sm border border-2 mb-2 p-2" style={{ background: '#e1e5e6', borderRadius: "15px" }}>
                  <div className="row">
                    <div className="col-lg-4">
                      <img style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "15px" }} src={listings[index % listings.length]} alt="" />
                    </div>

                    <div className="col-lg-8">

                      <h5 className='h5' >{blog.vTitle}</h5>
                      <h6 className='h6'>User: {blog.vUser}</h6>
                      <h6 className='h6'>{blog.dDate}</h6>
                      <Link to={`/blogdetail/${blog.iBlogId}`}>
                        <button className='btn btn-primary' >
                          View full blog
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}


            </div>
          </>

        )}

      </>
    )
  }
}

export default Blog;

