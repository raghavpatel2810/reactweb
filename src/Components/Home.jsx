import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { getBlogListGeneral } from "../store/action/blogAction";
import PageContainer from "./Layout/PageContainer"

function Home() {
  const listings = [
    "img/news-1.jpg",
    "img/news-2.jpg",
    "img/news-3.jpg"
  ]

  const { blogGeneral } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  })


  React.useEffect(() => {
        
    dispatch(getBlogListGeneral());
  
}, []);
  if (!blogGeneral) {
    return (
     
      <>
      <PageContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home-Blog</title>
          <meta name='description' content='This is the home page of the blog site.' />
        </Helmet>
        <section className="banner">
          <div className="container">
            <div className="banner-img">
              <img src="img/bg.jpg" alt="" className="img-fluid w-100" />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content text-center">
                  <div className="meta-cat">
                    <span className="text-capitalize letter-spacing-1 cat-name font-extra text-color">Travel</span>
                  </div>
                  <div className="post-title">
                    <h2><Link to="">New summer hotspot in day life</Link></h2>
                  </div>

                  <div className="post-meta footer-meta">
                    <ul className="list-inline">
                      <li className="post-like list-inline-item">
                        <span className="count">197</span> Likes
                      </li>
                      <li className="post-read list-inline-item">2 mins read</li>
                      <li className="post-view list-inline-item">189 Views</li>
                    </ul>
                  </div>
                  <div className="post-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Magnam nesciunt architecto quaerat
                      necessitatibus tenetur ratione eius numquam!</p>
                    <Link to="/generalblog" className="btn btn-grey mt-3"> read more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h1 className='text-center mt-5 mb-5'>-: Popular Blogs :-</h1>
        <h1 className='text-center' style={{ marginTop: '80px', marginBottom: '150px' }}>
          <b className='text-secondary'>No blogs found !</b>
        </h1>
        </PageContainer>
      </>
    );
  }
  else {
    return (
      <>
      <PageContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home-Blog</title>
          <meta name='description' content='This is the home page of the blog site.' />
        </Helmet>
        <section className="banner">
          <div className="container">
            <div className="banner-img">
              <Link to=""><img src="img/bg.jpg" alt="" className="img-fluid w-100" /></Link>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content text-center">
                  <div className="meta-cat">
                    <span className="text-capitalize letter-spacing-1 cat-name font-extra text-color">Travel</span>
                  </div>
                  <div className="post-title">
                    <h2><Link to="">New summer hotspot in day life</Link></h2>
                  </div>

                  <div className="post-meta footer-meta">
                    <ul className="list-inline">
                      <li className="post-like list-inline-item">
                        <span className="count">197</span> Likes
                      </li>
                      <li className="post-read list-inline-item">2 mins read</li>
                      <li className="post-view list-inline-item">189 Views</li>
                    </ul>
                  </div>
                  <div className="post-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Magnam nesciunt architecto quaerat
                      necessitatibus tenetur ratione eius numquam!</p>
                    <Link to="/generalblog" className="btn btn-grey mt-3"> read more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h1 className='text-center mt-5'>-: Popular Blogs :-</h1>

        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  {blogGeneral.slice(0, 3).map((blog, index) => (
                    <div key={blog.iBlogId} className="col-lg-4 col-md-6 col-sm-6">
                      <article className="post-grid mb-5 ">
                        <Link to={`/blogdetail/${blog.iBlogId}`} className="post-thumb mb-4 d-block" >
                          <img style={{ height: "500px",width: "100%",objectFit: "cover" }} src={listings[index % listings.length]} />
                        </Link>

                        <div className="post-content-grid">
                          <h3 className="post-title mt-1"><a >{blog.vTitle}</a></h3>
                          <p>User: {blog.vUser}</p>
                          <p>{blog.dDate}</p>
                          <Link to={`/blogdetail/${blog.iBlogId}`}>
                            <button className='btn btn-primary' >
                              View full blog
                            </button>
                          </Link>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        </PageContainer>
      </>
    )
  }
}

export default Home;
