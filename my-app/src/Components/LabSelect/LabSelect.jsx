import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import WorkstationLogo from "../../Assets/labs-icon.png";


export const LabSelect = (props) => {
  const { items, setItems, setWsName } = props; // Make the items and setItems props available
  const [editMode, setEditMode] = useState(null);
  const [stationName, setStationName] = useState("Your Station Name");
  const [newItem, setNewItem] = useState({
    name: "New Lab",
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
        id: uuidv4(),
        name: newItem.name,
      }
    ]);
    console.log(items);
    setNewItem({ name: "New Lab" }); // Clear the newItem after saving
  };

  const handleDeleteItem = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (!isConfirmed) return;
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const dostuff = (item) => {
    setWsName(item);
  };
  return (
    <>
      <div className="station-select-container">
        <button className="add-new-button" onClick={handleSaveNewItem}>
          Add New
        </button>
        <div className="station-box">
          {items.map((item) => (
            <li key={item.id} className="">
              <span
                className="delete-icon"
                onClick={() => handleDeleteItem(item.id)}
              >
                &#x2716; {/* "X" character */}
              </span>
              {/* <Link to={{ pathname: `${item.name}` }}> */}
              <img
                className="ws-logo"
                src={WorkstationLogo}
                alt="StationLogo"
                onClick={() => dostuff(item.name)}
                title=""
                oncontextmenu="return false;"
              />
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
                <div
                  className="station-name"
                  onClick={() => handleNameClick(item.id)}
                >
                  {item.name}
                </div>
              )}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
