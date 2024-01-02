import { react } from "react";  
import { React } from 'react';
import { useState } from 'react'; 
import WorkstationLogo from '../../Assets/WorkstationLogo.png';

export const StationInfo = () => { 
    const [items, setItems] = useState([{ id: 1, name: 'StationInfo' }]);// Send the information to the StationSelect component
    const [editMode, setEditMode] = useState(null);
    const [stationName, setStationName] = useState('Your Station Name');
    const [newItem, setNewItem] = useState({
      name: 'New Station',
    });
  
    const handleNameClick = (id) => {
      setEditMode(id);
      // Find the item with the clicked ID and set its name as the current stationName
      const selectedItem = items.find((item) => item.id === id);
      if (selectedItem) {
        setStationName(selectedItem.name);
      }
    };
  
    const handleNameChange = (event) => {
      setStationName(event.target.value);
    };
  
    const handleNameBlur = () => {
      setEditMode(null);
  
      // Update the item's name in the state
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editMode ? { ...item, name: stationName } : item
        )
      );
    };
  
    const handleSaveNewItem = () => {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: prevItems.length + 1,
          name: newItem.name,
        },
      ]);
  
      setNewItem({ name: 'New Station' }); // Clear the newItem after saving
    };
  
    const handleDeleteItem = (id) => {
      const isConfirmed = window.confirm('Are you sure you want to delete?');
      if (!isConfirmed) return;
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };
  

    return (
        <div className="station-select-container">
        <button className="add-new-button" onClick={handleSaveNewItem}>
          Add New
        </button>
        {items.map((item) => (
          <li key={item.id} className="">
            <div className="station-box" >
            {/* <Link to={{ pathname: `${item.name}` }}> */}
              <img className="ws-logo" src={WorkstationLogo} alt="StationLogo"/>
              {/* </Link>  */}
              {editMode === item.id ? (
                <input
                  className="station-name-input"
                  type="text"
                  value={stationName}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                />
              ) : (
                <div className="station-name" onClick={() => handleNameClick(item.id)}>
                  {item.name}
                </div>
              )}
              <span className="delete-icon" onClick={() => handleDeleteItem(item.id)}>
                &#x2716; {/* "X" character */}
              </span>
            </div>
          </li>
        ))}
      </div>
    );
}
