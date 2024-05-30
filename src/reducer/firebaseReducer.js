
const initialState = {
    user : {}
}

export const FirebaseReducer = (state = initialState,action)=>{
    switch(action.type){
        case "viewdata" : 
        console.log(action.payload);
        return {
            ...state,
            user : action.payload
                }
        default :
        return state;
    }
}