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
                    <Light>{children}</Light>
                    :<Night>{children}</Night>
                }
            </ThemeLayout>
        </>
    )
}

export default RootProvider;