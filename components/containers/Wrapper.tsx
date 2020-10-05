import React, { ReactNode } from "react";

type props = {
  children: ReactNode;
};
function Wrapper({ children }: props) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          max-width: 1312px;
          height: "100%";
          margin: auto;
          padding: 0px var(--wrapper-padding);
        }
      `}</style>
    </div>
  );
}

export default Wrapper;
