import React from "react";
import img from "./img/Portfolio.JPG";

class Portfolio extends React.Component {
       
    render() {
        return (
            <div>
                <h3>Наше Портфолио</h3>
               
                <br/>

                <div>
                    <img src={img} alt="home" />
                </div>
            </div>
        )
    }

}

export default Portfolio;