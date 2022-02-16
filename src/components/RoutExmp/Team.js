import React from "react";
import img from "./img/Team.JPG";

class Team extends React.Component {
    constructor(props){
        super(props);
        this.onClickBack = this.onClickBack.bind(this);
    }

    onClickBack(){
        const history = this.props.history;
        history.goBack("/home");
    }
    
    render() {
        return (
            <div>
                <h3>Наша Команда</h3>
                <div >
                    <button onClick={this.onClickBack}>About</button>
                </div>
                <br/>

                <div>
                    <img src={img} alt="home" />
                </div>
            </div>
        )
    }

}

export default Team;