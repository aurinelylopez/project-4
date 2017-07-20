import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import Cities from './components/Cities';
import TourList from './components/TourList';
import Footer from './components/Footer.js';
import axios from 'axios';

const cities = {
  newyork: 1,
  chicago: 2,
  sanfrancisco: 3,
  losangeles: 4,
  miami: 5
}





// APP COMPONENT
class App extends Component {

  constructor(props) {
      super(props)
        this.state = {
          tourdata: []
        } 
    }
    
    /*componentDidMount(){
      axios.get('https://roamer.herokuapp.com/')
      .then((res) => {
        this.setState({
          tourdata: res.data.data,
        })
      }) 
    }*/
    
    displayTour = (e) => {
      let currentId = cities[e.target.id];
      let currentData;
      let filteredArr = [];
      
      axios.get('https://roamer.herokuapp.com/')
      // axios.get('https://localhost:3000')
      .then((res) => {
        currentData = res.data.data;
        currentData.forEach(function(e){
          if(currentId === e.cities_id){
            filteredArr.push(e);
          }
        })
        this.setState({
          data: filteredArr
        })
      })
    };


  render() {
    return (
      <div className="App">
        <Header />
        <TourList tourData={this.state.tourdata} display={this.displayTour}  />
        <Footer />
        <div className="overlay"></div>
      </div>
    );
  }
}

export default App;