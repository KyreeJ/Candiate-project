import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <h1>
        <Link to="/" id="logo">
          Candidate Search
        </Link>
      </h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Potential Candidates
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/some-other-page"
            className={currentPage === '/some-other-page' ? 'nav-link active' : 'nav-link'}
          >
            Saved Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
