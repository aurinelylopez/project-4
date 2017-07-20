import React, {Component} from 'react';


class Cities extends Component{
    constructor(props){
        super(props)
    }
    
    
    render(){
       return(
            <div className="ct-container">
                <div className="city-container">
                    <div className="city-div" id="newyork" onClick={this.props.onClick}>newyork</div>
                    <div className="city-div" id="chicago" onClick={this.props.onClick}>chicago</div>
                    <div className="city-div" id="miami" onClick={this.props.onClick}>miami</div>
                    <div className="city-div" id="losangeles" onClick={this.props.onClick}>losangeles</div>
                    <div className="city-div" id="dallas" onClick={this.props.onClick}>dallas</div>
                </div>
                <div>
                </div>
            </div>
        ) 
    }
    
}

export default Cities;