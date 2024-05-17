import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  UPDATE_LOGIN_STATE,
  UPDATE_SIGNUP_STATE
} from './../constants/user'

export function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
    case USER_PROFILE_REQUEST:
      return true;

    case LOGIN_SUCCESS:
      return {
        loginData: action.payload
      }
      case UPDATE_LOGIN_STATE:
            return{
                loginData : {}
            }
    case SIGNUP_SUCCESS:
      return {
        registerData: action.payload
      }
      case UPDATE_SIGNUP_STATE:
        return{
            registerData : {}
        }
    case USER_PROFILE_SUCCESS:
      return {
        userData: action.payload
      }



    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
    case USER_PROFILE_FAILURE:
      return false;

    default:
      return state
  }
}