import { useMatch, NavLink } from 'react-router-dom';

export const CustomNavLink = ({ to, children, ...props }) => {
  const match = useMatch(to);
  const isActive = match !== null;
  const className = `nav-link underline-effect ${isActive ? 'active-link' : ''}`;

  if (to === '') {
    return (
      <>
      <span className={className} {...props}>
        {children}
      </span>
      </>
    );
  }
  else return (
    <>
    <NavLink to={to} className={className} {...props}>
      {children}
    </NavLink>
    </>
  );
};

