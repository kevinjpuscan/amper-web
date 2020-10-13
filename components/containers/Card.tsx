import React from "react";
import Wrapper from "./Wrapper";
import { propsContainer } from "../../interfaces";

function Card({ children }: propsContainer) {
  return (
    <div className="card-container">
      <Wrapper>{children}</Wrapper>
      <style jsx>{`
        .card-container {
          margin-bottom: 0.7em;
          padding: 1.2em 0;
          background: var(--white);
          border: 1px solid var(--gray-ligth);
        }
      `}</style>
    </div>
  );
}

export default Card;
