import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'States', path: '/states' },
  { label: 'Dishes', path: '/dishes' },
  { label: 'Places', path: '/places' },
  { label: 'Reviews', path: '/reviews' }
];

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <NavLink to="/" className="brand-link">
          <span className="brand-name">TasteQuest</span>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
