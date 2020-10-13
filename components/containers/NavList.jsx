import React, { Fragment } from "react";
import Link from "next/link";

function NavList() {
  return (
    <div className="menu-container">
      <Link href="/">
        <a className="menu-icon-container">
          <div className="menu-icon">
            <i className="fas fa-chart-line" />
          </div>
          <div className="menu-text">Dashboard</div>
        </a>
      </Link>
      <Link href="/historic">
        <a className="menu-icon-container">
          <div className="menu-icon">
            <i className="far fa-calendar-alt" />
          </div>
          <div className="menu-text">Histórico</div>
        </a>
      </Link>

      <Link href="/alert">
        <a className="menu-icon-container">
          <div className="menu-icon">
            <i className="far fa-bell" />
          </div>
          <div className="menu-text">Alertas</div>
        </a>
      </Link>
      <Link href="/settings">
        <a className="menu-icon-container">
          <div className="menu-icon">
            <i className="fas fa-cog" />
          </div>
          <div className="menu-text">Ajustes</div>
        </a>
      </Link>
      <style jsx>{`
        .menu-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .menu-icon-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--gray-dark);
          cursor: pointer;
        }

        .menu-icon-container:hover {
          color: var(--main);
        }
        .menu-icon {
          font-size: 1.3em;
        }
        .menu-text {
          font-size: 0.65em;
          font-weight: 500;
          margin-top: 0.3em;
        }
      `}</style>
    </div>
  );
}

export default NavList;
