import React, {Component} from 'react';
import Tour from './Tour';
import Cities from './Cities';



class TourList extends Component{
        constructor(props){
            super(props)
        }

    // function to render a list of tours after clicking on a the city
    renderTour = () => {
        let trList = [];
        for(let i = 0; i < this.props.tourData.length; i++){
            trList.push(<Tour image={this.props.tourData[i].image} name={this.props.tourData[i].name} city={this.props.tourData[i].city} duration={this.props.tourData[i].duration} key={this.props.tourData[i].idt} idt={this.props.tourData[i].idr} tourData={this.props.tourData[i]} cID={this.props.tourData[i].city_id}/>
            )
            
        }
        return trList;
    }

    render(){
        return(
        <div>
            <Cities onClick={this.props.display}/>
             
            {this.renderTour()}
            
        </div>
        )
    }
    
}

export default TourList;
