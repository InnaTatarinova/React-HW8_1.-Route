import React from "react";
import img from "./img/Services.JPG";

class Services extends React.Component {
   
    
    render() {
        return (
            <div>
                <h3>Наш сервис</h3>
               
                <br/>

                <div>
                    <img src={img} alt="home" />
                </div>
            </div>
        )
    }

}

export default Services;