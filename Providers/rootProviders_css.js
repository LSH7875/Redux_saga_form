import styled,{createGlobalStyle}  from 'styled-components';

// export const Night=createGlobalStyle`
//     width:100%;
//     height:100%;
//     background-color: #1a1c25;

// `

export const Light = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        background: radial-gradient( pink, #efefef, purple ) fixed;
        color:#302f2f;}

`
// injectGlobal`
//     body{width:100%;
//     height:100%;
//     background-color: #1a1c25;
//     }
// `

// export const Light=injectGlobal`
//     body{width:100%;
//     height:100%;
//     background: radial-gradient( purple, pink, white );
//     }`
export const Night = createGlobalStyle`
 body{
   margin:0;
   padding:0;
   background-color:#1a1c25;
   color:#efefef;}
`;