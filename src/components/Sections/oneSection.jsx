import React from "react";

function OneSection({value1,value2,col,url}){
    return(
        <div className="oneSection" style={{color: col}}>
            {value1}
           <p className="bottomicon">
            <img src={url}  width={"15px"} height={"15px"} alt="im" />
            <p>{value2}</p>
            </p> 
           
        </div>
    )
}
export  default OneSection
