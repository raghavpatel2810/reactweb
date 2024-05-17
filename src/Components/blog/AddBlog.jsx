import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../store/action/blogAction";
import Swal from 'sweetalert2';

const validation = Yup.object().shape({
  vTitle: Yup.string()
    .required('Required'),
  tDescription: Yup.string()
    .required('Required'),

});

const BlogAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.blog);

  useEffect(()=>{
    if(message){
      if(message?.status == 200){ 
        Swal.fire({
          icon: "success",
          title: message.message,
          showConfirmButton: false,
          timer: 1500
        });
      setTimeout(() => {
        navigate('/blog');
      }, 1000);
    }}

  },[message])

  return (
    <>
    
    <Formik
    initialValues={{ vTitle: '', tDescription: '' }}
    validationSchema={validation}
    onSubmit={(values, { resetForm }) => {
      console.log(values);
      var data = localStorage.getItem("Auth");
      dispatch(addBlog(values, data));
      resetForm();
      setTimeout(() => {
        navigate('/blog');
      }, 1000);
    }}
    >
      {({ isSubmitting, errors }) => (
        
        <section className="" style={{backgroundColor: "#eee"}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: "25px", margin:"10px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
        
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Blog</p>
        
                      <Form className="mx-1 mx-md-4">
        
                        
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div data-mdb-Field-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="vTitle">Title</label>
                            <Field type="text" name="vTitle" id="vTitle" className="form-control" />
                            <ErrorMessage name="vTitle" component="div" className="text-danger" />
                          </div>
                        </div>
        
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div data-mdb-Field-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="tDescription">Description</label>
                            <Field type="text" name="tDescription" id="tDescription" className="form-control" />
                            <ErrorMessage name="tDescription" component="div" className="text-danger" />
                          </div>
                        </div>
        
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" disabled={isSubmitting} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Submit</button>
        
                          <button type="reset" className="btn btn-danger btn-lg ms-1">Cancel</button>
                        </div>
        
                      </Form>
        
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
      )}
    </Formik>
    </>
  );
};

export default BlogAdd;


