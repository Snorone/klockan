import React from "react";



const ClockComponent = ({ date }) => {




    return (
        <>
            <div className="first-container">
                <h3>{`${date.toLocaleDateString()}`}</h3>
            </div>

            <div className="container">

                <h2>
                    {`${date.toLocaleTimeString(`sv-SE`)}`}
                </h2>

            </div>
        </>
    )
}
export default ClockComponent