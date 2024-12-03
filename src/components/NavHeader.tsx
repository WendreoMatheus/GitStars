import { NavLink } from 'react-router';

export const NavHeader = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          <strong className="has-text-white">GITSTARS</strong>
        </NavLink>
      </div>

    </nav>
  );
};
