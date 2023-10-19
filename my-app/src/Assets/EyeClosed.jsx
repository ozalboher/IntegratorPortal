import { ReactComponent as Icon } from '../Assets/eye-closed.svg';
const iconStyles = {
    fill: 'blue',
    width: '20px',
    height: '20px',
  };

export const EyeClosed = () => {
  return (
    <div>
        <Icon style={iconStyles} />
    </div>
  );
};
