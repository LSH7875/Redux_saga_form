export const initialState = {
    current_number:1
}

export const plus_number = "plus_number";

export const plus_number_request = data => {
    return{
        type: plus_number,
        data,
    }
}

const reducer = (state = initialState, action) => {
    console.log('reducer들어옴')
    switch(action.type){
        case plus_number:{
            let data=action.data+1;
            return{
                ...state,
                current_number:data,
            }
        }
        default:{
            return {...state}
        }
    }
}

export default reducer;