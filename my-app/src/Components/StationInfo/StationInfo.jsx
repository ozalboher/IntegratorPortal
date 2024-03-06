import React, { useState } from "react";
import { BackIconSmall } from "../../Assets/BackIconSmall";
import { v4 as uuidv4 } from "uuid";
// Other relevant styles that accessed (globally) here from "./StationSelect.css";
import "./StationInfo.css";
import StationInfoLogo from "../../Assets/StationInfoLogo.png";

export const StationInfo = (props) => {
  const { items, setItems, setName } = props;
  const [editMode, setEditMode] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [stationName, setStationName] = useState("Your Station Name");
  const [newItem, setNewItem] = useState({
    name: "New PC",
  });
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

  const [hardwareList, setHardwareList] = useState([{
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
  }]);

  return (
    <>
      <div className="station-info-container">
        <div onClick={() => setName("")}>
          <BackIconSmall />
        </div>

        {softwareList.map((item) => (
          <div key={1}>
            <h3>Software</h3>
            <p>Software Name: {item.mainApp}</p>
            <p>Config Table: {item.configTable}</p>
            <p>EO Mask: {item.eoMask}</p>
            <p>DL Mask: {item.dlMask}</p>
            <p>SBC Image: {item.sbcImage}</p>
            <p>SBC Apps: {item.sbcApps}</p>
            <p>Additional Info: {item.additionalInfo}</p>
            <p>Additional Info 2: {item.additionalInfo2}</p>
            <p>Additional Info 3: {item.additionalInfo3}</p>
            <p>Additional Info 4: {item.additionalInfo4}</p>
          </div>
        ))}

        {hardwareList.map((item) => (
          <div key={item.id}>

            <h3>Hardware</h3>
            <p>Software Name: {item.mainApp}</p>
            <p>Config Table: {item.configTable}</p>
            <p>EO Mask: {item.eoMask}</p>
            <p>DL Mask: {item.dlMask}</p>
            <p>SBC Image: {item.sbcImage}</p>
            <p>SBC Apps: {item.sbcApps}</p>
            <p>Additional Info: {item.additionalInfo}</p>
            <p>Additional Info 2: {item.additionalInfo2}</p>
            <p>Additional Info 3: {item.additionalInfo3}</p>
            <p>Additional Info 4: {item.additionalInfo4}</p>
          </div>
        ))}
        <button className="add-new-button">Edit</button>
      </div>
    </>
  );
};
