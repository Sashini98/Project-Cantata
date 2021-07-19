
import React, { useState, Fragment } from 'react'
import { Tabs } from 'react-simple-tabs-component'
import 'react-simple-tabs-component/dist/index.css' 
import Test1 from "./Components/Test1";
import Test2 from "./Components/Test2";

const TabOne = () => {
    return (
        <Fragment>
            
                <Test1/>
            
        </Fragment>
        
    )
}

const TabTwo = () => {
    return (
        <Fragment>
          
                <Test2/>
            
        </Fragment>
        
    )
}

const TabThree = () => {
    return (
        <Fragment>
            <h3>Tab One</h3>
            <p>
               tab
            </p>
        </Fragment>
        
    )
}


const tabs = [
    {
        label: 'Tab One', 
        index: 1,         
        Component: TabOne 
    },
    {
        label: 'Tab Two',
        index: 2,
        Component: TabTwo
    },
    {
        label: 'Tab Three',
        index: 3,
        Component: TabThree
    }
]

function NavTab() {
    const txt = {
        width: "80%"
    }


    const [selectedTab, setSelectedTab] = useState(tabs[0].index)
    return (
        <div className='App' style={txt}>

            <Tabs tabs={tabs} onClick={setSelectedTab} selectedTab={selectedTab} />
        </div>
    )
}
export default NavTab;