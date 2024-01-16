import { ReactComponent as Icon } from '../Assets/back-icon.svg';
const iconStyles = {
    fill: 'blue',
    width: '40px',
    height: '40px',
  };

export const BackIconSmall = () => {
  return (
    <div>
        <Icon style={iconStyles} />
    </div>
  );
};
