import styled from 'styled-components';


export const Logo=styled.div`
    height:100px;
    width:100px;
    float:left;
    background-image : url("http://print79.kr/files/attach/images/395966/774/392/997bae733fb128fae48a3ec9c1b7c4a3.png");
    background-size: cover;
    cursor: pointer;
`

export const Appbtn=styled.div`
    box-sizing:border-box;
    width:200px;
    height:50px;
    background: linear-gradient(-45deg,#ff67ae,#f8aaf8);
    line-height: 30px;
    text-align:center;
    color:#fff;
    font-weight:800;
    cursor: pointer;
    margin-right: 30px;
    font-size: 20px;
    line-height: 50px;
    border-radius: 10px;
    &:hover{
        border:5px solid white;
        line-height: 30px;
    }
`
export const Menu=styled.ul`
    display:inline-flex;
    position:relative;
    flex-direction: row;
    list-style:none;
    cursor: pointer;
    &>li{
        margin-right: 30px;
        font-size:20px;
        font-weight:550;
        color:#302f2f;
        width:200px;
        height:100px;
        &:hover{
            color:grey; 
            &>ul{
                display:block !important; 
                color:#302f2f;
            }
        }
    
    }

    
`
export const Gnb=styled.div`
    float:right;
    display:inline-flex;
    padding-right:100px;
    height:100px;
`
export const Mode =styled.div`
    float:left;
    width:50px;
    height:50px;
    margin-right: 30px;
    background-image:url('http://imagescdn.gettyimagesbank.com/500/18/992/661/0/951715160.jpg');
    background-size: contain;
    cursor: pointer;
    @media screen and (max-width: 720px){
        display:none !important;
    }
`
export const Header = styled.div`
    position:relative;
    border-bottom:1px solid black ;
    height:100px;
`
export const HoverMenu = styled.ul`
    display:none;
    position:absolute;
    min-width: 200px;
    top:50px;
    padding:20px 30px;
    background-color:#f4ddee;
    border-radius:10px;
    box-shadow:0px 10px 20px #eeec92;
    &:hover{
    display:block !important;
    
    }
        &>li{
            list-style:none;
            padding:0px;
            padding-top:4px;
            &:hover{
                color:grey;
            }
        }
`
export const lightmode =styled.div`
    background: radial-gradient( purple, pink, white );
`
export const nightmode =styled.div`
    background-color: #1a1c25;
`
export const Layer=styled.div`
    @media screen and (max-width: 720px){
        display:none !important;
    }
`