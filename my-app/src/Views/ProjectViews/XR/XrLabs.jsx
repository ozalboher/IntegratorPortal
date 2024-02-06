import { React } from 'react';
import { useState } from 'react';   
import { StationSelect } from '../../../Components/StationSelect/StationSelect';
import {StationInfo } from '../../../Components/StationInfo/StationInfo';
import { LabSelect } from '../../../Components/LabSelect/LabSelect';

export const XrLabs= () => {
    const [labItems, setLabItems] = useState([{ id: 1, name: 'Lab-102' }]);// Send the information to the LabSelect component
    const [items, setItems] = useState([{ id: 1, name: 'New Station' }]);// Send the information to the StationSelect component
    const [items2, setItems2] = useState([{ id: 1, name: 'New PC' }]);// Send the information to the StationInfo component

    const [labName, setLabName] = useState('');// Set the labName state to the selected lab name
    const [wsName, setWsName] = useState('');// Set the wsName state to the selected station name
    return (
        <>
        <div className='page-content'>
        <h1 style={{ textAlign: "center" }}>XR LABS</h1>
            {!labName && <LabSelect items={labItems} setItems={setLabItems} setLabName={setLabName}/>}
            {labName && !wsName && <StationSelect items = {items} setItems = {setItems} setWsName={setWsName}/>}
            {wsName && <StationInfo items2={items2} setItems2={setItems2} setWsName = {setWsName}></StationInfo>}
            {wsName && <h2 style={{ textAlign: 'center' }}>Station Selected: {wsName}</h2>} 
        </div>
        </>
    );
}
