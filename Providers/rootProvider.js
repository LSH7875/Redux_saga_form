import React from 'react';
import ThemeLayout from '../Components/Layouts/ThemeLayout.jsx';
import {useDispatch,useSelector} from 'react-redux'
import {Light,Night} from './rootProviders_css'
const RootProvider = ({children}) => {
    const {nightMode} = useSelector((state)=>state.mode);
    return(
        <>
            <ThemeLayout>
                {nightMode===true?
                    <Night>{children}</Night>
                    :<Light>{children}</Light>
                }
            </ThemeLayout>
        </>
    )
}

export default RootProvider;