export const GET = (user) => {
    console.log(user);
    return {
        type:'GET_USER',
        payload:user

    }
}


export const DELETE = (user)=> {
    console.log(user)
    return {
        type:'DELETE_USER',
        payload:user

    }
}

export const ADD = (user)=> {
    console.log(user);
    return {
        type:'ADD_USER',
        payload:user

    }
}

export const GETEDIT = (user)=> {
    console.log(user);
    return {
        type:'GET_EDIT_USER',
        payload:user
    }
}

export const EDIT = (user)=> {
    console.log("999999",user);
    return {
        type:'EDIT_USER',
        payload:user
    }
}

export  const ADDDELETE = (user)=> {
    console.log("......",user)
    return {
        type:'ADD_DELETE',
        payload:user
    }
}