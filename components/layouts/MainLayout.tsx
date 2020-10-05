import React, { Fragment, ReactNode } from "react";
import Nav from "../containers/Nav";

type props = {
  children: ReactNode;
};
function MainLayout({ children }: props) {
  return (
    <Fragment>
      <Nav />
      <div className="body">{children}</div>
      <style jsx>{`
        .body {
          background: var(--gray);
          min-height: 90vh;
        }
      `}</style>
    </Fragment>
  );
}

export default MainLayout;
