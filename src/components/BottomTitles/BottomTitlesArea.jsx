import React from "react";
import BottomTitle from "./bottomTitle";
import "./BottomTitles.css"
function BottomTitlesArea(){
    return (
        <div className="bottomTitlesArea">
            <BottomTitle value={"Top Affiliates"}/>
            <BottomTitle value={"SignUps"}/>
            <BottomTitle value={"Pending Commissions"}/>
        </div>
    )
}
export default BottomTitlesArea