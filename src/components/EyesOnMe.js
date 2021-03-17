// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

    handleOnFocus = (event) => {console.log('Good!')}
    handleOnBlur = (event) => {console.log('Hey! Eyes on me!')}
    render(){
        return <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}></button>
    }
}


export default EyesOnMe