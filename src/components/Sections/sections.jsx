import React from "react";
import OneSection from "./oneSection";
import "./sections.css"

function Section(){
    return(
        <div className="section">
            <OneSection style={{"border-left": "0" }} value1={"25"} value2={"SIGNUPS"} col={"#00acac"} url={"https://icon-library.com/images/check-mark-icon/check-mark-icon-14.jpg"}/>
            <OneSection value1={"$1000"} value2={"PROFIT"} col={"#1f7bb6"} url={"https://na.panasonic.com/us/sites/default/files/styles/related_content_mobile/public/2021-07/TB_icons-profit.png?itok=LPyjCDF7"}/>
            <OneSection value1={"$350"} value2={"COMISSIONS"} col={"#fbcf71"} url={"https://img.icons8.com/flat-round/344/cheap-2--v1.png"}/>
            <OneSection value1={"$300"} value2={"PENDING COMISSION"} col={"#00acac"} url={"https://spng.pngfind.com/pngs/s/160-1603797_red-question-mark-symbol-question-mark-symbol-hd.png"}/>
        </div>
    )
}

export default Section