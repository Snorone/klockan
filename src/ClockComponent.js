import React, { useEffect } from "react";
import { useState } from "react";


const ClockComponent = ({ date }) => {




    return (
        <div className="container">


            <h2>
                {`${date.toLocaleTimeString(`sv-SE`)}`}
            </h2>



        </div>
    )
}
export default ClockComponent