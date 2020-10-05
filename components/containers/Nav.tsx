import React, { Fragment } from "react";
import NavList from "./NavList";

function Nav() {
  return (
    <Fragment>
      <div className="nav-section nav-logo">
        <h3>AMPER</h3>
      </div>
      <div className="nav-section nav-menu">
        <NavList />
      </div>
      <style jsx>{`
        .nav-section {
          width: 100%;
          background: var(--gray-very-ligth);
        }

        .nav-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--main);
          color: var(--white);
          font-weight: 700;
          height: var(--nav-height-logo);
        }

        .nav-menu {
          border-bottom: 1px solid var(--gray);
          height: var(--nav-height-menu);
          position: -webkit-sticky;
          position: sticky;
          top: 0px;
          box-shadow: 0px 2px 10px var(--gray-ligth);
        }
      `}</style>
    </Fragment>
  );
}

export default Nav;
