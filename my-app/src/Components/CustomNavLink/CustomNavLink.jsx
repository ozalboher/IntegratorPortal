import { useMatch, NavLink } from 'react-router-dom';

export const CustomNavLink = ({ to, children, ...props }) => {
  const match = useMatch(to);
  const isActive = match !== null;
  const className = `nav-link underline-effect ${isActive ? 'active-link' : ''}`;

  return (
    <NavLink to={to} className={className} {...props}>
      {children}
    </NavLink>
  );
};

