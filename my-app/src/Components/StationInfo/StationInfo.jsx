import React, { useState } from "react";
import { BackIconSmall } from "../../Assets/BackIconSmall";
import { v4 as uuidv4 } from "uuid";
// Other relevant styles that accessed (globally) here from "./StationSelect.css";
import "./StationInfo.css";
import StationInfoLogo from "../../Assets/StationInfoLogo.png";

export const StationInfo = (props) => {
  const {items, setItems, setName} = props; // pass the items from the DB. 
  const [editMode, setEditMode] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [list, setList] = useState([{
    id: uuidv4(),
    title: "Title",
    value: "Value",
  }]);
  const handleNameChange = (event) => {
    if (event.target.value.length > 15) {
      setIsError(true);
      setMsg("Name is too long");
      setTimeout(() => {
        setMsg("");
      }, 3000);
      return;
    }
    if (event.target.value.length < 1) {
      setIsError(true);
      setMsg("Name is too short");
      setTimeout(() => {
        setMsg("");
      }, 3000);
    }
    setTitle(event.target.value);
  };

  const handleViewSoftware = () => {
    setShowInfo(!showInfo);
  };
  
  const [softwareList, setSoftwareList] = useState([
    {
      id: "1",
      mainApp: "",
      configTable: "",
      eoMask: "",
      dlMask: "",
      sbcImage: "",
      sbcApps: "",
      additionalInfo: "",
      additionalInfo2: "",
      additionalInfo3: "",
      additionalInfo4: "",
    },
  ]);
  const [hardwareList, setHardwareList] = useState([
    {
      id: "1",
      system: "POD",
    },
  ]);

  return (
    <>
      <div className="station-info-container">
        <div onClick={() => setName("")}>
          <BackIconSmall />
        </div>

        {list.map((item) => (
          <>
            <h3 onClick={handleViewSoftware}>Software</h3>
            {showInfo && 
            <div key={item.id}>
              <p>Software Name: {item.title}</p>
              <p>Config Table: {item.value}</p>
            </div>}
          </>
        ))}

        {hardwareList.map((item) => (
          <div key={item.id}>
            <h3 onClick={handleViewSoftware}>Software</h3>
          </div>
        ))}
        <button className="add-new-button">Edit</button>
      </div>
    </>
  );
};
