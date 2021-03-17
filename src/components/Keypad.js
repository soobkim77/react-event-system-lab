// Code Keypad Component Here
import React from 'react';

class KeyPad extends React.Component{

    handleKeyUp = (event) => {console.log("Entering password...")}
    render(){
        return <input onKeyUp={this.handleKeyUp} type="password"></input>
    }
}


export default KeyPad