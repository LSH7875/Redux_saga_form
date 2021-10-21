import wrapper from "../Providers/createCtx";

// import Head from 'next/head';

const App=({Component,pageProps})=>{

    return (
        <>        
       
            <Component {...pageProps}/>{/*우리가 만든 모든 것이 components에 위치한다.  */}
 
        </>
    )
}
export default wrapper.withRedux(App);