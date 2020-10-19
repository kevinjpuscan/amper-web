import React, { Fragment } from "react";

function InputDate() {
    return (
        <Fragment>
            <input type="date" />
            <style jsx>{`
                input{
                    border:none;
                    width:100%;
                    font-size:1.5em;
                    text-align:center;
                    color:var(--gray-very-dark);
                }
                `}</style>
        </Fragment>
    );
}

export default InputDate;