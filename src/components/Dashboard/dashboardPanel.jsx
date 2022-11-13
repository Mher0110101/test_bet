import React from "react";
import "./dashboardPanel.css"
import Dashboard from "./dashboard";

function DashboardPanel(){
    return(
        <div className="dashboardPanel">
            <Dashboard/>
             <div className="like">
                🖤 ADD THIS PAGE TO FAVORITES
            </div>
        </div>
    )
}
export default DashboardPanel