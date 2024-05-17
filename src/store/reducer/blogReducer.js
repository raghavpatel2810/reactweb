import {
    BLOG_LIST_REQUEST,
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
} from '../constants/blogConstants'

export default function blogReducer(state = {}, action) {
    switch (action.type) {
        case BLOG_BY_ID_REQUEST:
        case BLOG_LIST_REQUEST:
        case BLOG_GENERAL_REQUEST:
            return true;
        case BLOG_LIST_SUCCESS:
            return {
                blogList: action.payload
            }
            case BLOG_GENERAL_SUCCESS:
            return {
                blogGeneral: action.payload
            }
        case BLOG_BY_ID_SUCCESS:
            return {
                blogDetail: action.payload
            }
        case BLOG_BY_ID_FAILURE:
        case BLOG_LIST_FAILURE:
        case BLOG_GENERAL_FAILURE:
            return false;
        case BLOG_ADD_REQUEST:
            return true;
        case BLOG_ADD_SUCCESS:
            return {
                Message: action.payload
            }
        case BLOG_ADD_FAILURE:
            return false;
        case BLOG_UPDATE_REQUEST:
        case BLOG_DELETE_REQUEST:
            return true;
        case BLOG_UPDATE_SUCCESS:
        case BLOG_DELETE_SUCCESS:
            return {
                Messsage: action.payload
            }
        case BLOG_UPDATE_FAILURE:
        case BLOG_DELETE_FAILURE:
            return false;
        default:
            return state;
    }
}