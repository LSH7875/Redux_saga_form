import React from 'react';
import ThemeLayout from '../Components/Layouts/ThemeLayout.jsx';

const RootProvider = ({children}) => {
    return(
        <>
            <ThemeLayout>
                {children}
            </ThemeLayout>
        </>
    )
}

export default RootProvider;