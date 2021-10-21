import React, { useEffect } from 'react'
import ThemeLayout from '../Components/Layouts/ThemeLayout'
import RootProvider from '../Providers/rootProvider'
import {useDispatch,useSelector} from 'react-redux'
import {plus_number_request} from '../reducers/number'
const index=()=>{
    const dispatch = useDispatch();
    const {current_number} = useSelector((state)=>state.number);
    const post=useSelector((state)=>state.post)
    
    const btn_click=(e)=>{
        e.preventDefault();
        console.log(post);
        console.log(current_number)
        dispatch(plus_number_request(current_number));
    }
    return(
        <>
        <RootProvider/>
        <div>{current_number}</div>
        <button onClick={btn_click}>+</button>
        </>
        )
}

export default index