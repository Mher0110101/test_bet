import React, { useRef } from "react";


function Dashboard(){

    function clickHandler () {
        let nav = document.querySelector(".navBar") 
        let dash = document.querySelector(".dash")    
        let arrow = document.querySelector(".arrow")
        arrow.style.transform === "rotate(90deg)" ? arrow.style.transform = "rotate(0deg)" :  arrow.style.transform = "rotate(90deg)"
        nav.style.width === "55px" ? nav.style.width = "0px" : nav.style.width = "55px"
        dash.style.paddingLeft == "60px" ? dash.style.paddingLeft = "0px" : dash.style.paddingLeft = "60px"

    }
    
    return(    
        <>  
            <nav className="navBar" >
                <img className="logo" src="https://play-lh.googleusercontent.com/Wn5u2ejWDao8V0gX5Bi_b46iEzJgjV4ueTASRhnA1TfcK8awNi0xIUV3w1wr8yuQIA=s180" alt="ps" width={"50px"}  height={"50px"}/>
                <a href=""><img src="https://www.alphasoftware.com/hubfs/2017%20Alpha/icons/speed-icon-white.png" width={"30px"}  height={"30px"} alt="" /></a>
                <a href=""><img src="https://png.pngtree.com/png-vector/20190511/ourmid/pngtree-vector-key-icon-png-image_1028662.jpg"width={"30px"}  height={"30px"}alt="" /></a>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3uQLGHIrl-NnEAOo0pymINEVN7IJhXFsW0UbUmKCjpaIjG90KQDoAWE5ju5z1kVzYJ0&usqp=CAU" width={"30px"}  height={"30px"} alt="" /></a>
                <a href=""><img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree---vector-announcement-icon-png-image_855000.jpg" width={"30px"}  height={"30px"} alt="" /></a>
                <a href=""><img src="https://www.nicepng.com/png/full/52-527751_pics-for-chart-icon-black-and-white-png.png"width={"30px"}  height={"30px"} alt="" /></a>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaspqWx9B_CHgXX_DRHc6R7FpEQvl3XIM6f3AD2HuOLmZ43xmKgaOsNSpPkfeB41dZXBk&usqp=CAU"width={"30px"}  height={"30px"} alt="" /></a>
                <a href=""><img src="https://i.pinimg.com/originals/4c/8b/44/4c8b44e9005f70feeb7fe01aedf475c6.jpg" width={"30px"}  height={"30px"} alt="" /></a>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbiiQrVqTUaADrJOKMqRcOg7dbI0agy4PUQ&usqp=CAU" width={"25px"}  height={"25px"} alt="" /></a>
                <hr/>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqkt5vYfV1v1U28axAC6UevR00MltCHS0OA&usqp=CAU" width={"25px"}  height={"25px"} alt="" /></a>
                <hr/>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGLbqQBxTtYRNnMFZXIdWQUFUcbjrm0FttlTnVx7c0l9MM4IMOucPxKRis73NIk7hUuU&usqp=CAU" width={"25px"}  height={"25px"} alt="" /></a>
                <hr/>
                <a>#171717</a>
            </nav>           
            
            <div className="dash" onClick={clickHandler}>
                <img className="arrow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iM35yyZZU4EWJW9R5dXyxrYBjUb3fRhczw&usqp=CAU" alt="arrow" width={"32px"} height={"28px"}></img>Dashboard
            </div>

        </> 
    )
}
export default Dashboard