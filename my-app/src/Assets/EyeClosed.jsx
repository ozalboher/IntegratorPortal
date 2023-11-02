import { ReactComponent as Icon } from '../Assets/eye-closed.svg';
const iconStyles = {
  fill: 'blue',
  width: '20px',
  height: '20px',
  cursor: 'pointer',
  position: 'absolute',
  right: '6px',
  top: '15px',
  display:' flex',
  };

export const EyeClosed = ({onClick}) => {
  return (
    <div onClick={onClick}>
        <Icon style={iconStyles} />
    </div>
  );
};
