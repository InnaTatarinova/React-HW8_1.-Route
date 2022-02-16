import React from "react";
import img from "./img/Contact.JPG";

class Contact extends React.Component {
    
    render() {
        return (
            <div>
                <h3>Наши контакты</h3>
                
                <br/>

                <div>
                    <img src={img} alt="home" />
                </div>


            </div>
        )
    }

}

export default Contact;