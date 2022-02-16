import React from "react";
import img from "./img/Home.JPG";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.onAboutClick = this.onAboutClick.bind(this);
    }

    onAboutClick(){
        const history = this.props.history;
        history.push("/about");
    }
    
    render() {
        return (<>
                        <div>
                <h3>Страница приветствия</h3>
            

                <div>
                    <img src={img} alt="home" />
                </div>

               
            </div>
            
        </>

        )
    }

}

export default Home;