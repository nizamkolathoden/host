export const intialState = null;

export const reducer = (state,action)=>{
    if(action.type === 'USER'){
        return action.payload;
    }

    if(action.type === 'ADMIN'){
        return 'ADMIN';
    }

    if(action.type === 'CLEAR'){
        return null;
    }
}