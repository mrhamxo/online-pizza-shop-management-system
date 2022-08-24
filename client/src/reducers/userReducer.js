export const registerUserReducer = (state = {}, action) => {
    switch(action.type){
        case 'REGISTER_USER_REQUEST':
            return{
                loading: true,
            }
        case 'REGISTER_USER_SUCCESS':
            return{
                loading: false,
                success: true,
            }
        case 'REGISTER_USER_FAILURE':
            return{
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const loginUserReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN_USER_REQUEST':
            return{
                loading: true,
            }
        case 'LOGIN_USER_SUCCESS':
            return{
                loading: false,
                success: true,
                currentUser: action.payload,
            }
        case 'LOGIN_USER_FAILURE':
            return{
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const getAllUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case "GET_USERS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_USERS_SUCCESS":
        return {
          users: action.payload,
          loading: false,
        };
      case "GET_USERS_FAILURE":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };