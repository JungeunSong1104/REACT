import React, { Component } from "react";
import $ from "jquery";

class R016_Jquery extends Component{
    input_alert = (e) => {
        const input_val = $("#inputId").val();
        alert(input_val);
    };

    render(){
        return(
            <div>
                <h2>[this si jquery]</h2>
                <input id="inputId" name="inputName"/>
                <button id="buttonId" onClickk={e => this.input_alert(e)}>
                Jquery Button</button>
            </div>
        )
    }
}

export default R016_Jquery;