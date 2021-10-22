import React from 'react';
import Header from './Header/header.jsx';

const ThemeLayout = ({children}) => {
    return(
        <>  

                <Header/>
                {children}

        </>
    )
}

export default ThemeLayout;