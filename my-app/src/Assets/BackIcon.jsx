import { ReactComponent as Icon } from '../Assets/back-icon.svg';
const iconStyles = {
    fill: 'blue',
    width: '80px',
    height: '80px',
  };

export const BackIcon = () => {
  return (
    <div>
        <Icon style={iconStyles} />
    </div>
  );
};
