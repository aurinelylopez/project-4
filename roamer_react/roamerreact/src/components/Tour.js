import React, {Component} from 'react';
import axios from 'axios';
import OneTour from './OneTour';

class Tour extends Component{
        constructor(props){
            super(props)
            
            this.state = {
                tourdata: this.props.tourData,
                editing: false,
                original: '',
                originalA: '',
                originalC: '',
                originalU: '',
                originalI: ''
            }
            
            this.displayFullTour = this.displayFullTour.bind(this);
        }
        

    //replaces input field with a div when you hit the cancel button

    anotherHandleCancel(id, test){
            var name = document.querySelector('#'+test);
            var div = document.createElement('div');
            var img = document.createElement('img');
            var span = document.createElement('span');
            span.id = test;
            div.id = test;
            if (test === 'b'+id){
                div.className = 't-section t-name'
                name.replaceWith(div);
                div.innerHTML = this.state.original;
            } else if (test === 'c'+id){
                div.className = 't-section t-city'
                name.replaceWith(div);
                div.innerHTML = this.state.originalA;
            } else if (test === 'd'+id){
                div.className = 't-section t-duration'
                name.replaceWith(div);
                div.innerHTML = this.state.originalC;
            } else if (test === 'e'+id){
                name.replaceWith(span);
                span.innerHTML = this.state.originalI;
                span.className = "hidden";
            }
        
    }
    
    

        handleReplace(id, test, c, d,e) {
            this.anotherHandleReplace(id, test)
            this.anotherHandleReplace(id, c)
            this.anotherHandleReplace(id, d)
            this.anotherHandleReplace(id,e)
            this.setState({ editing: false })
        }
        
        
        handleEdit() { this.setState({ editing: true })}

        // shows different buttons depending on edit state

        renderButtons() {
            if(this.state.editing){
                return(
                    <div>
                        <button id="btn-save" onClick={()=>this.editEntry(this.props.idr, 'b'+this.props.idr, 'c'+this.props.idr, 'd'+this.props.idr, 'e'+this.props.idr)}>Save</button>
                        <button onClick={()=>this.handleCancel(this.props.idr, 'b'+this.props.idr, 'c'+this.props.idr, 'd'+this.props.idr, 'e'+this.props.idr)}>Cancel</button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <button id="btn-edit" onClick={()=>this.newStartEntry(this.props.idr)}>Edit</button>
                        <button id="btn-delete" onClick={()=> this.deleteTour(this.props.idr)} type="button">Delete</button>
                    </div>
                )
            }
        }
        
        // replaces input with divs
        
        newEntry(id, test){
        let b = document.querySelector('#b'+id).value;
        let c = document.querySelector('#c'+id).value;
        let d = document.querySelector('#d'+id).value;
        let e = document.querySelector('#e'+id).value;
        let name = document.querySelector('#'+test);
        let div = document.createElement('div');
        let span = document.createElement('span');
        div.id = test;
        span.id = test;
        if (test === 'b'+id){
                div.className = 't-section t-name'
                div.innerHTML = b;
                name.replaceWith(div);
                // console.log(j)
            } else if (test === 'c'+id){
                div.className = 't-section t-city'
                name.replaceWith(div);
                div.innerHTML = c;
            } else if (test === 'd'+id){
                div.className = 't-section t-duration'
                name.replaceWith(div);
                div.innerHTML = d;
            } else if (test === 'e'+id){
                span.innerHTML = e;
                name.replaceWith(span);
                if(span.innerHTML !== this.state.originalI){
                    document.querySelector('#a'+ id).remove();
                }
            }
   }

   // does the axios post

   editEntry = (id,b,c,d,e) =>{

        let name = document.querySelector('#b'+id).value;
        let city = document.querySelector('#c'+id).value;
        let duration = document.querySelector('#d'+id).value;
        let idt = document.querySelector('#e'+id).value;
        let url = this.state.originalU

        if (name === '' || city === '' || duration === '' || url === ''){
            return alert('no empty fields!')
        }

        axios.put('https://roamer.herokuapp.com/' + id, {
          name: name,
          city: city,
          duration: duration,
          city_id: idt,
          image: url
        })
        this.newEntry(id,b)
        this.newEntry(id,c)
        this.newEntry(id,d)
        this.newEntry(id,e)
        this.setState({ editing: false })
   }
    
   // replaces divs with input to allow changes

    newStartEntry = (id) => {
    this.handleEdit()
        let value = document.querySelector('#b'+id).innerHTML;
        this.setState({original:value})
        let valueA = document.querySelector('#c'+id).innerHTML;
        this.setState({originalA:valueA})
        let valueC = document.querySelector('#d'+id).innerHTML;
        this.setState({originalC:valueC})
        let valueI = document.querySelector('#e'+id).innerHTML;
        this.setState({originalI:valueI})
        let valueU = document.querySelector('#img'+id).src;
        this.setState({originalU:valueU})
        let name = document.querySelector('#b'+id);
        let city = document.querySelector('#c'+id);
        let duration = document.querySelector('#d'+id);
        let idt = document.querySelector('#e'+id);
        let input = document.createElement('input');
        let inputCity = document.createElement('input');
        let inputDuration = document.createElement('input');
        let inputIdt = document.createElement('select');
        
        let nyc = document.createElement('option');
        nyc.value = 3;
        nyc.innerHTML = 'New York';
        inputIdr.appendChild(nyc);

        let chi = document.createElement('option');
        chi.value = 1;
        chi.innerHTML = 'Chicago';

        let mia = document.createElement('option');
        mia.value = 4;
        mia.innerHTML = 'Miami'

        let sanfrancisco = document.createElement('option');
        sanfrancisco.value = 2;
        sanfrancisco.innerHTML = 'San Francisco'

        let losAngeles = document.createElement('option');
        losAngeles.value = 5;
        losAngeles.innerHTML = 'Los Angeles'

        inputIdr.appendChild(nyc);
        inputIdr.appendChild(chi);
        inputIdr.appendChild(mia);
        inputIdr.appendChild(sanfrancisco);
        inputIdr.appendChild(losAngeles);
        // var inputUrl = document.createElement('input');
        input.id = 'b'+id;
        inputCity.id = 'c'+id;
        inputDuration.id = 'd'+id;
        inputIdt.id = 'e'+id;
        // inputUrl.id = 'f'+id;
        inputCity.className = 't-section t-city t-edit-input';
        inputDuration.className = 't-section t-duration r-edit-input';
        inputIdt.className = 't-edit-input'
        // inputUrl.className = 'r-section r-image';
        input.className = 't-section t-name t-edit-input';
        input.value = value;
        inputCity.value = valueA;
        inputDuration.value = valueC;
        // inputUrl.value = valueU;
        inputIdr.value = valueI;
        city.replaceWith(inputCity);
        name.replaceWith(input);
        duration.replaceWith(inputDuration);
        idr.replaceWith(inputIdr);
        // url.replaceWith(inputUrl);
    }

    
    
    
    deleteTour = (id) => {
        let test = window.confirm('but why? ');
        if (test === true){
            axios.delete('https://roamer.herokuapp.com/' + id)
        document.querySelector('#a'+ id).remove();
        }  else {
            return
        }
        
   }
    
    displayFullTour = (e) => {
        let current = e.target.dataset.id;
        let t_modal = [];
        document.querySelectorAll('.r_modal').forEach((el) =>{
            if(current === el.id){
                r_modal.push(el);
            }
        })
        t_modal[0].style.opacity = '1';
        t_modal[0].style['pointer-events'] = 'auto';   
    }
    
    closeFullTour = (e) => {
        let current = e.target.dataset.id;
        
        let t_modal = [];
        document.querySelectorAll('.t_modal').forEach((el) =>{
            if(current === el.id){
                t_modal.push(el);
            }
        })
        t_modal[0].style.opacity = '0';
        t_modal[0].style['pointer-events'] = 'none';   
    }
    
    
   
   render(){
       return(
        <div>
            <div id={'a'+ this.props.idr} className="r-row">
                <div id={'f'+this.props.idr} className="r-section r-image" onClick={(event) => this.displayFullTour(event)}><img data-id={"_" +this.props.idt} id={'img'+this.props.idr} src={this.props.image} /></div>
                <div id={'b'+this.props.idr} className="r-section r-name">{this.props.name}</div>
                <div id={'d'+this.props.idr} className="r-section r-city">{this.props.city}</div>
                <div id={'c'+this.props.idr} className="r-section r-duration">{this.props.duration}</div>
                <span className='hidden' id={'e'+this.props.idr}>{this.props.bID}</span>
                <div className="edit-buttons">{this.renderButtons()}</div>
            </div>
            <div id={'_' +this.props.idr} className="r_modal">
                <SingleTour name={this.state.tourdata.name} city={this.state.tourdata.city} image={this.state.tourdata.image} duration={this.state.restdata.duration} close={(e) => this.closeFullTour(e)} m_id={this.state.tourdata.idr}/>
            </div>
        </div>
        )
   }

   
}

export default Tour;