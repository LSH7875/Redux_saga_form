import React, { useEffect } from 'react'
import ThemeLayout from '../Components/Layouts/ThemeLayout'
import RootProvider from '../Providers/rootProvider'
import {useDispatch,useSelector} from 'react-redux'
import {plus_number_request} from '../reducers/number'
const index=()=>{
    const dispatch = useDispatch();
    const {current_number} = useSelector((state)=>state.number);
    const post=useSelector((state)=>state.light)
    return(
        <>
        <RootProvider/>
        adfasdfsdf
        </>
        )
}

export default index