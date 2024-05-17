import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBlogDetail, deleteBlog } from "../../store/action/blogAction";
import Swal from "sweetalert2";



function Blog() {
  // function getImageUrl() {
  //   const images = [
  //     "img/news-1.jpg",
  //     "img/news-2.jpg",
  //     "img/news-3.jpg",
  //     "img/news-4.jpg",
  //     "img/news-5.jpg",
  //     "img/news-6.jpg",
  //   ]
  //   return images[Math.floor(Math.random() * images.length)];
  // }
  const { blogDetail } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const { iBlogId } = useParams();
  const navigate = useNavigate();

  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#24820d",
      iconColor: "#f22929",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        }
        );
        dispatch(deleteBlog(id, localStorage.getItem("Auth")));

      }
    });
    setTimeout(() => {
      navigate('/blog');
    }, 1000);
  }

  React.useEffect(() => {
    dispatch(getBlogDetail(iBlogId, localStorage.getItem("Auth")));

  }, []);
  if (blogDetail) {
    return (
      <>

        <div style={{ borderBottom: "1px solid #959695" }}>
          <img style={{ width: "100%", objectFit: "cover" }} src="https://blog.mozilla.org/wp-content/blogs.dir/278/files/2024/02/Rise25_Noms_Blog.png" alt="" />
          <h1 className="m-4">{blogDetail.vTitle}</h1>
          <p className="m-4">
            {blogDetail.tDescription}
          </p>
          <div className="align-text-bottom mt-5 mb-0">
            <div className="p-2">Date : {blogDetail.dDate}</div>
            <div className="p-2">@{blogDetail.vUser}</div>
          </div>

          {localStorage.getItem("iUserId") == blogDetail.iUserId ?
            <div className="">
              {/* <button className='btn btn-success me-1 ms-2' > */}
              <Link className='btn btn-success me-1 ms-2' to={`/editblog/${iBlogId}`} style={{ textDecoration: 'none', color: "white" }}>Edit Blog</Link>
              {/* </button> */}
              <button className="btn btn-danger m-2" onClick={() => handleDelete(iBlogId)}>Delete</button>
            </div> : <span></span>
          }
        </div>
      </>
    );
  }
}

export default Blog;
