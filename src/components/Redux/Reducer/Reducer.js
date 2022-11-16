const initialState = {
  user:[],
  list: [],
  duser:[],
  euser:{},
  aduser:[]
};

export default function FetchReducer(state = initialState, action) {

  switch (action.type) {

      case "DELETE_USER":

        return{
          ...state,
          duser: action.payload 
        }

        
        case "ADD_USER":
        
          return{
            ...state,
            user: action.payload 
          }
        

        
        case "GET_USER":
          
        return {
          ...state,
          list: action.payload 
          }

        case "GET_EDIT_USER":
         
         return{
          ...state,
          euser: action.payload 
        };

        
        case "EDIT_USER":
          
        return{
            ...state,
            user: action.payload 
          }
         

        case "ADD_DELETE":
        
          return{
            ...state,
            aduser: action.payload 
          }


    default:
      return state;
  }
}
