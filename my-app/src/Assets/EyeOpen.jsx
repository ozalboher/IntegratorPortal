import { ReactComponent as Icon } from '../Assets/eye-open.svg';
const iconStyles = {
    fill: 'blue',
    width: '20px',
    height: '20px',
  };

export const EyeOpen = () => {
  return (
    <div>
        <Icon style={iconStyles} />
    </div>
  );
};
