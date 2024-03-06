import { ReactComponent as Icon } from "../Assets/back-icon.svg";
// CSS styles "back-icon-small" are taken from "StationSelect.css";
const iconStyles = {
  fill: "blue",
  width: "40px",
  height: "40px",
};

export const BackIconSmall = () => {
  return (
    <div className="back-icon-small">
      <Icon style={iconStyles} />
    </div>
  );
};
