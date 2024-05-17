import {BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAILURE,
    BLOG_BY_ID_REQUEST,
    BLOG_BY_ID_SUCCESS,
    BLOG_BY_ID_FAILURE,
    BLOG_ADD_REQUEST,
    BLOG_ADD_SUCCESS,
    BLOG_ADD_FAILURE,
    BLOG_DELETE_REQUEST,
    BLOG_DELETE_SUCCESS,
    BLOG_DELETE_FAILURE,
    BLOG_UPDATE_REQUEST,
    BLOG_UPDATE_SUCCESS,
    BLOG_UPDATE_FAILURE,
    BLOG_GENERAL_REQUEST,
    BLOG_GENERAL_SUCCESS,
    BLOG_GENERAL_FAILURE,
} from '../constants/blogConstants';
import axios from 'axios';

export const getBlogList =(value) => async(dispatch)=>{
    try {
        dispatch({type:BLOG_LIST_REQUEST});
        const resData = await axios.get(`https://api.demo-available.com/api/blog`,
        {
            headers: {
                "Authorization": "Bearer 4589fcd7d889088b8607861149fb5b2d",
                "User-Auth" : value
            }
        }
    ); 
    // console.log(resData.data.data);
        dispatch({type:BLOG_LIST_SUCCESS,payload : resData.data.data});
    } catch (error) {
        dispatch({type:BLOG_LIST_FAILURE});
    }
}

export const getBlogDetail =(id,auth) => async(dispatch)=>{
    try {
        dispatch({type:BLOG_BY_ID_REQUEST});
        const resData = await axios.post(`https://api.demo-available.com/api/blog/detail`,
        {   
            iBlogId : id, 
        },
        {
            headers: {
                "Authorization": "Bearer 4589fcd7d889088b8607861149fb5b2d",
                "User-Auth" : auth
            }
        }
    );
    // console.log(resData.data.data.iUserId);
        dispatch({type:BLOG_BY_ID_SUCCESS,payload : resData.data.data});
    } catch (error) {
        dispatch({type:BLOG_BY_ID_FAILURE});
    }
}

export const addBlog =(values,data) => async(dispatch)=>{
    try {
        dispatch({type:BLOG_ADD_REQUEST});
        console.log("blog add request");
        const resData = await axios.post(`https://api.demo-available.com/api/blog/add`,
        {
            vTitle: values.vTitle,
            tDescription: values.tDescription
        },
        {
            headers: {
                "Authorization": "Bearer 4589fcd7d889088b8607861149fb5b2d",
                "User-Auth" : data
            }
        }
    ); 
    console.log(resData);
        dispatch({type:BLOG_ADD_SUCCESS,payload : resData.message});
    } catch (error) {
        dispatch({type:BLOG_ADD_FAILURE});
    }
}


export const updateBlog =(values,data,auth) => async(dispatch)=>{
    try {
        dispatch({type:BLOG_UPDATE_REQUEST});
        console.log("blog add request");
        const resData = await axios.post(`https://api.demo-available.com/api/blog/update`,
        {   
            iBlogId : data, 
            vTitle: values.vTitle,
            tDescription: values.tDescription
        },
        {
            headers: {
                "Authorization": "Bearer 4589fcd7d889088b8607861149fb5b2d",
                "User-Auth" : auth
            }
        }
    ); 
    console.log(resData);
        dispatch({type:BLOG_UPDATE_SUCCESS,payload : resData.message});
    } catch (error) {
        dispatch({type:BLOG_UPDATE_FAILURE});
    }
}


export const deleteBlog =(id,auth) => async(dispatch)=>{
    try {
        dispatch({type:BLOG_DELETE_REQUEST});
        const resData = await axios.post(`https://api.demo-available.com/api/blog/delete`,
        {   
            iBlogId : id
        },
        {
            headers: {
                "Authorization": "Bearer 4589fcd7d889088b8607861149fb5b2d",
                "User-Auth" : auth
            }
        }
    ); 
    
    // console.log(resData.iBlogId);
        dispatch({type:BLOG_DELETE_SUCCESS,payload : resData.data.message});
        // console.log("deleted successfully");
    } catch (error) {
        dispatch({type:BLOG_DELETE_FAILURE});
    }
}

export const getBlogListGeneral =() => async(dispatch)=>{
    try {
        dispatch({type:BLOG_GENERAL_REQUEST});
        const resData = await axios.get(`https://api.demo-available.com/api/blogs`,
        {
            headers: {
                "Authorization": "Bearer 4589fcd7d889088b8607861149fb5b2d",
                
            }
        }
    ); 
    // console.log(resData.data.data);
        dispatch({type:BLOG_GENERAL_SUCCESS,payload : resData.data.data});
    } catch (error) {
        dispatch({type:BLOG_GENERAL_FAILURE});
    }
}