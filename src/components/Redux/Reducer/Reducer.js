const initialState = {
  user:[],
  list: [],
  duser:[],
  eduser:{},
  aduser:[]
};

export default function FetchReducer(state = initialState, action) {

  switch (action.type) {

      case "DELETE_USER":
        
        
        //  debugger
        // console.log("hhhhhhhhhh",action.payload);
        return{
          ...state,
          duser: action.payload 
        }

        
        case "ADD_USER":
        
        state.user[action.payload] = action.payload;
        // debugger
        // console.log("aaa####ddddd",action.payload);
        return { user: action.payload };

        
        case "GET_USER":
          
        // state.user[action.payload] = action.payload;
        // debugger
        // console.log("aaa####ddddd",action.payload);
        return {
          ...state,
          list: action.payload 
          }

        case "GET_EDIT_USER":
         
        // debugger
        // console.log("ggggggggggg",action.payload);
         return{
          ...state,
          euser: action.payload 
        };

        
        case "EDIT_USER":
          state.user[action.payload] = action.payload;
        // debugger
        // console.log("aaa####ddddd",action.payload);
        return { user: action.payload };

        case "ADD_DELETE":
        
          state.user[action.payload] = action.payload;
          // debugger
          // console.log("aaa####ddddd",action.payload);
          return { aduser: action.payload };


    default:
      return state;
  }
}
