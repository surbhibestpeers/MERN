export const get = (user) => {
   
    return {
        type:'GET_USER',
        payload:user

    }
}

export const remove = (user)=> {
   
    return {
        type:'DELETE_USER',
        payload:user

    }
}

export const add = (user)=> {
   
    return {
        type:'ADD_USER',
        payload:user

    }
}

export const getEdit = (user)=> {
  
    return {
        type:'GET_EDIT_USER',
        payload:user
    }
}

export const edit = (user)=> {
  
    return {
        type:'EDIT_USER',
        payload:user
    }
}

export  const addDelete = (user)=> {
    
    return {
        type:'ADD_DELETE',
        payload:user
    }
}