export const initialState = {
    nightMode:false
}

export const Change = "modeChange";

export const nightmode_request = data => {
    return{
        type: Change,
        data,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case Change:{
            let data=!action.data;
            return{
                ...state,
                nightMode:data,
            }
        }
        default:{
            return {...state}
        }
    }
}

export default reducer;