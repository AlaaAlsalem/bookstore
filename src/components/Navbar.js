import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/catigorise',
      text: 'Catigorise',

    },
  ];
  return (
    <header>
      <nav>
        <div className="navbar">
          <h1>Book Stores</h1>
          <ul>
            {links.map((link) => (
              <li key={link.id}>

                <Link to={link.path} className="nav_link" exact="true">
                  {link.text}

                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
