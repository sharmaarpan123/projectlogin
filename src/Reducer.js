

const initialState = {
    auth: true,
    }

const reducer = (state=initialState,action) =>{

switch(action.type)
{
    case'LOGIN':
    window.localStorage.setItem('auth',true);
    return {
        ...state,
        auth:true,
      };

      case'LOGOUT':
    window.localStorage.setItem('auth',false);
    return {
        ...state,
        auth:true,
      };
      default: return state;

}

}

export default reducer;



