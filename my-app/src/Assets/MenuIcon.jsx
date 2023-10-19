import { ReactComponent as Icon } from '../Assets/menu-icon.svg';
const iconStyles = {
    fill: 'blue',
    width: '80px',
    height: '80px',
  };

export const MenuIcon = () => {
  return (
    <div>
        <Icon style={iconStyles} />
    </div>
  );
};
