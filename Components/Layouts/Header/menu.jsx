import React,{useState} from 'react';
import {Appbtn,Menu,Mode,Gnb,HoverMenu,Layer,NavToggle,Accordian} from './header_css';
import {useDispatch,useSelector} from 'react-redux'
import {nightmode_request} from '../../../reducers/mode'
import Menu1 from './accordian'
const App=()=>{
    const dispatch = useDispatch();
    const {nightMode} = useSelector((state)=>state.mode);
    const [toggle,setToggle]=useState(false)
    const menu=[
        {Developers: ["V3 Documentation","V3 Whitepager","GitHub","Bug Gounty"]},
        {Governance: ["UNI Token","Governace Forum","Sybil (Delegates)","Voting Portal","Documentation"]},
        {Community:["Discord","Twitter","Reddit"]},
        {More:["Blog","About","FAQ","Help & Tutorials","Logo & Brand"]}
    ];

    const modeChange =()=>{
        dispatch(nightmode_request(nightMode))
    }
    const onNavClick=()=>{
        setToggle(!toggle);
    }
    return(
        <Gnb>
            <NavToggle>
                <input type = "checkbox" id = "nav-toggle" onClick={onNavClick}/>
                <label htmlFor="nav-toggle">
                <span/><span/><span/></label>
                {toggle?<Menu1/>:''}               
            </NavToggle>  
            <Menu>
                {menu.map((v,k)=>{
                    return(
                        <>
                            <li key={k}>{Object.keys(v)}
                                <HoverMenu>
                                    {Object.values(v)[0].map((m,j)=>{
                                        return(
                                            <li key={j}>{m}</li>
                                            )                         
                                    })} 
                                </HoverMenu> 
                            </li>
                        </>
                    )
                })}
            </Menu>
                <Mode onClick={modeChange}/>
            <Layer/>
            <Appbtn>Launch App</Appbtn>
     
        </Gnb>
        )
}

export default App;

  {/* {
                                        v[Object.keys(v)].map((m,j)=>{
                                            return(
                                                <li key={j}>{m}</li>
                                                )                         
                                            })
                                        */} 