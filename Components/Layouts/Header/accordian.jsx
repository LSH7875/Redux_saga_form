import React from 'react';

const App = ()=>{

    const menu=[
        {Developers: ["V3 Documentation","V3 Whitepager","GitHub","Bug Gounty"]},
        {Governance: ["UNI Token","Governace Forum","Sybil (Delegates)","Voting Portal","Documentation"]},
        {Community:["Discord","Twitter","Reddit"]},
        {More:["Blog","About","FAQ","Help & Tutorials","Logo & Brand"]}
    ];



    return(
        <>
        <ul>
            {menu.map((v,k)=>{
                    return(
                        <>
                            <li key={k}>{Object.keys(v)}
                                <ul>
                                    {Object.values(v)[0].map((m,j)=>{
                                        return(
                                            <li key={j}>{m}</li>
                                            )                         
                                    })} 
                                </ul> 
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default App