import React from "react";
import LeftDiagram from "./leftDiagram";
import RightDiagram from "./rightDiagram";
import WorldMap from "./worldMap";
function  DiagramsArea (){
    return(
        <div className="diagramsArea">
           
                <LeftDiagram/>            
                <RightDiagram/>
                <WorldMap/>  
               
        </div>
        
    )
}
export default DiagramsArea