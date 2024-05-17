import { useFormik } from "formik";
import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getBlogDetail, updateBlog} from '../../store/action/blogAction'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  vTitle: Yup.string().required('Blog title is required'),
  tDescription: Yup.string().required('Blog description is required')
});

const initialValues = {
  vTitle:'',
  tDescription:''
}

const BlogUpdate = (props) => {
  const [blogDetails , setBlogDetails] = useState({});
  const {blogDetail} = useSelector((state)=>state.blog);
  const {iBlogId} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) =>{
    console.log(values);
    dispatch(updateBlog(values,iBlogId,localStorage.getItem("Auth")))
    formik.resetForm();
    setTimeout(() => {
      navigate('/blog');
    }, 1000);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
  });


  useEffect(() => {
    dispatch(getBlogDetail(iBlogId,localStorage.getItem("Auth")));
    
    if(blogDetail){
      setBlogDetails(blogDetail);
    }
    formik.setFieldValue('vTitle',blogDetail?.vTitle || "")
    formik.setFieldValue('tDescription',blogDetail?.tDescription || "")
  }, [iBlogId])
    

 return(

  <>
  
  <section className="" style={{backgroundColor: "#eee"}}>
<div className="container h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-lg-12 col-xl-11">
      <div className="card text-black" style={{borderRadius: "25px", margin:"10px"}}>
        <div className="card-body p-md-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Blog</p>

              <form className="mx-1 mx-md-4" onSubmit={formik.handleSubmit}>

                
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div data-mdb-Field-init className="form-outline flex-fill mb-0">
                  <label className="form-label" for="vTitle">Title</label>
            <input type="text" value={formik.values.vTitle} id="vTitle" name="vTitle" className="form-control form-control-lg"
              placeholder="Enter Title" onChange={formik.handleChange}/>
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div data-mdb-Field-init className="form-outline flex-fill mb-0">
                  <label className="form-label" for="tDescription">Description</label>
          <textarea as='textarea' value={formik.values.tDescription} style={{ height: 'auto', minHeight: '250px' }}  id="tDescription" name="tDescription" className="form-control form-control-lg"
           onChange={formik.handleChange} />
                  </div>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" className="btn btn-primary btn-lg btn-block me-2">Update</button>
            <Link to="/blog"><button type="reset" className="btn btn-danger btn-lg offset-lg-1">Cancel</button></Link>
                </div>

              </form>

            </div>
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="Sample image" />

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section> 
</>
  )
}
export default BlogUpdate;




