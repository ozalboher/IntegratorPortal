import { React } from 'react';
import { useState } from 'react';   
import { StationSelect } from '../../../Components/StationSelect/StationSelect';
import {StationInfo } from '../../../Components/StationInfo/StationInfo';

export const XrWs = () => {
    const [items, setItems] = useState([{ id: 1, name: 'New Station' }]);// Send the information to the StationSelect component
    const [wsName, setWsName] = useState('');// Set the wsName state to the selected station name
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>RECCELITE WORKSTATIONS</h1>
            {!wsName && <StationSelect items = {items} setItems = {setItems} setWsName={setWsName}/>}
          {wsName && <h2 style={{ textAlign: 'center' }}>You selected: {wsName}</h2>} 
            {wsName && <StationInfo></StationInfo>}
        </div>
    );
}
