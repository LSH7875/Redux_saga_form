import React from 'react';
import {Appbtn,Menu,Mode,Gnb,HoverMenu} from './header_css';
import {useDispatch,useSelector} from 'react-redux'
import {nightmode_request} from '../../../reducers/mode'
const App=()=>{
    const dispatch = useDispatch();
    const {nightMode} = useSelector((state)=>state.mode);

    const menu=[
        {Developers: ["V3 Documentation","V3 Whitepager","GitHub","Bug Gounty"]},
        {Governance: ["UNI Token","Governace Forum","Sybil (Delegates)","Voting Portal","Documentation"]},
        {Community:["Discord","Twitter","Reddit"]},
        {More:["Blog","About","FAQ","Help & Tutorials","Logo & Brand"]}
    ];

    const modeChange =()=>{
        dispatch(nightmode_request(nightMode))
    }

    return(
        <Gnb>
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
                                    {/* {
                                    v[Object.keys(v)].map((m,j)=>{
                                        return(
                                            <li key={j}>{m}</li>
                                            )                         
                                        })
                                    */} 
                                </HoverMenu> 
                            </li>
                        </>
                    )
                })}
            </Menu>
            <Mode onClick={modeChange}/>
            <Appbtn>Launch App</Appbtn>
     
        </Gnb>
        )
}

export default App;