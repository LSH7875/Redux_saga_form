import React from 'react';
import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import post from './post';
import number from './number';

const rootReducer = (state = {}, action) => {
    switch (action.type){
        case HYDRATE:
            return action.payload;
        default:{
            const combineReducer = combineReducers({
                number,post
            })
            return combineReducer(state, action);
        }
    }
}

export default rootReducer;