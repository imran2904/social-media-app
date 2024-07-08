import React from "react";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#" className="nav-link text-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  About
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark me-2"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
