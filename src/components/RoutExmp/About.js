import React from "react";
import img from "./img/About.JPG";


class About extends React.Component {
    render() {
        return (
            <>
           
                <div>
                    <h3>О нас</h3>
                   
                    <br />

                    <div>
                        <img src={img} alt="about" />
                    </div>

                </div>
                
            </>
        )
    }

}

export default About;