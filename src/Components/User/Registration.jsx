import React, { useState ,useEffect}from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Register }from '../../store/action/userAction'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

// Validation 
const Signup = Yup.object().shape({
  vFirstName: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  vLastName: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  vEmail: Yup.string()
    .email('Invalid email')
    .required('Required'),
  vPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
  vPhone:Yup.string().matches(/^\d{10}$/, 'Invalid Phone Number')
    .required('Required'),
});


const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {registerData} = useSelector(state=>state.user);
  const [recaptchaToken, setRecaptchaToken] = useState('');

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute('6LeYe08pAAAAAPJnjWVDU47L949QpyoidOH1PkZO', { action: 'submit' }).then(token => {
            setRecaptchaToken(token);
            // console.log(token);  
            document.getElementById('vGoogleRecaptchaResponse').value = token;
          });
        });
      } else {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LeYe08pAAAAAPJnjWVDU47L949QpyoidOH1PkZO';
        script.addEventListener('load', () => loadRecaptcha());
        document.body.appendChild(script);
      }
    };

    loadRecaptcha();


    return () => {
      document.querySelectorAll('script[src^="https://www.google.com/recaptcha/api.js"]').forEach(el => el.remove());
    };
  }, []);
  if(registerData){
    if(registerData?.status === "200"){ 
      Swal.fire({
        icon: "success",
        title: registerData.message,
        showConfirmButton: false,
        timer: 1500
      });
    setTimeout(() => {
      navigate('/login');
    }, 1500);
    }
    if(registerData?.status === "400"){ 
      Swal.fire({
        icon: "error",
        title: registerData.message,
          showConfirmButton: false,
          timer: 2000
        });
      }
  }

  return (
    <>
   
    <Formik
      initialValues={{ 
        vFirstName: '', 
        vLastName: '', 
        vEmail: '', 
        vPassword: '',
        vPhone: '', 
        vGoogleRecaptchaResponse: recaptchaToken ,
      }}
      validationSchema={Signup}
      onSubmit={(values, { resetForm }) => { 
        values.vGoogleRecaptchaResponse = recaptchaToken;
        dispatch(Register(values,recaptchaToken));
        // navigate("/login");
   resetForm();
    
   }}>
      {({ isSubmitting }) => (
       <section className="" style={{backgroundColor: "#eee"}}>
       <div className="container h-100">
         <div className="row d-flex justify-content-center align-items-center h-100">
           <div className="col-lg-12 col-xl-11">
             <div className="card text-black" style={{borderRadius: "25px", margin:"10px"}}>
               <div className="card-body p-md-5">
                 <div className="row justify-content-center">
                   <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
     
                     <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
     
                     <Form className="mx-1 mx-md-4">
     
                       <div className="d-flex flex-row align-items-center mb-4">
                         <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                         <div data-mdb-Field-init className="form-outline flex-fill mb-0">
                           <label className="form-label" htmlFor="vFirstName">First Name</label>
                           <Field type="text" name="vFirstName" id="vFirstName" className="form-control" />
                           <ErrorMessage name="vFirstName" component="div" className="text-danger" />
                         </div>
                       </div>
     
                       <div className="d-flex flex-row align-items-center mb-4">
                         <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                         <div data-mdb-Field-init className="form-outline flex-fill mb-0">
                           <label className="form-label" htmlFor="vLastName">Last Name</label>
                           <Field type="text" name="vLastName" id="vLastName" className="form-control" />
                           <ErrorMessage name="vLastName" component="div" className="text-danger" />
                         </div>
                       </div>
     
                       <div className="d-flex flex-row align-items-center mb-4">
                         <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                         <div data-mdb-Field-init className="form-outline flex-fill mb-0">
                           <label className="form-label" htmlFor="vEmail">Your Email</label>
                           <Field type="email" name="vEmail" id="vEmail" className="form-control" />
                           <ErrorMessage name="vEmail" component="div" className="text-danger" />
                         </div>
                       </div>
     
                       <div className="d-flex flex-row align-items-center mb-4">
                         <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                         <div data-mdb-Field-init className="form-outline flex-fill mb-0">
                           <label className="form-label" htmlFor="vPassword">Password</label>
                           <Field type="password" name="vPassword" id="vPassword" className="form-control" />
                           <ErrorMessage name="vPassword" component="div" className="text-danger" />
                         </div>
                       </div>
     
                       <div className="d-flex flex-row align-items-center mb-4">
                         <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                         <div data-mdb-Field-init className="form-outline flex-fill mb-0">
                           <label className="form-label" htmlFor="vPhone">Phone</label>
                           <Field type="tel" name="vPhone" id="vPhone" className="form-control" />
                           <ErrorMessage name="vPhone" component="div" className="text-danger" />
                         </div>
                       </div>
     
                       <div className="user-box">
                         <input type="hidden" name="vGoogleRecaptchaResponse" id="vGoogleRecaptchaResponse" />
                       </div>
     
                       <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                         <button type="submit" disabled={isSubmitting} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
     
                         <button type="reset" className="btn btn-danger btn-lg ms-1">Cancel</button>
                       </div>
                       <div style={{marginLeft:"15px"}}>
                        <p>Have an account? </p>
                         <Link to="/login" style={{ textDecoration: 'none', color: '' }}>Login</Link>
                       </div>
     
                     </Form>
     
                   </div>
                   <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
     
                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
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

export default SignupForm;
