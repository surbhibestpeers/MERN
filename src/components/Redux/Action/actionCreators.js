export const get = (user) => {
    console.log(user);
    return {
        type:'GET_USER',
        payload:user

    }
}


export const remove = (user)=> {
    console.log(user)
    return {
        type:'DELETE_USER',
        payload:user

    }
}

export const add = (user)=> {
    console.log(user);
    return {
        type:'ADD_USER',
        payload:user

    }
}

export const getEdit = (user)=> {
    console.log(user);
    return {
        type:'GET_EDIT_USER',
        payload:user
    }
}

export const edit = (user)=> {
    console.log("999999",user);
    return {
        type:'EDIT_USER',
        payload:user
    }
}

export  const addDelete = (user)=> {
    console.log("......",user)
    return {
        type:'ADD_DELETE',
        payload:user
    }
}