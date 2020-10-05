import React, { Fragment } from "react";
import { indicatorWithIcon } from "../../interfaces";

function ResumeData({ indicators }: { indicators: Array<indicatorWithIcon> }) {
  return (
    <Fragment>
      <div className="resume-data-container">
        {indicators.map((indicator, index) => (
          <div key={index}>
            <i className={indicator.icon}></i>
            <span className="resume-data-value">{indicator.value}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .resume-data-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .resume-data-container div {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          color: var(--gray-very-dark);
        }

        .resume-data-container div:hover {
          color: var(--main);
        }

        .resume-data-container div:not(:last-child) {
          border-right: 1px solid var(--gray);
        }

        .resume-data-container div i {
          font-size: 1.3em;
        }
        .resume-data-value {
          font-size: 0.9em;
          margin-left: 0.5em;
          font-weight: 700;
        }
      `}</style>
    </Fragment>
  );
}

export default ResumeData;
