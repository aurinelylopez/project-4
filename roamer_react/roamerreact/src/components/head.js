import React from 'react';
import axios from 'axios';

function Head (props){
    
    
    let firstModal = () => {
        let initModal = document.querySelector('#f-modal');
        modal.style.opacity = "1";
        modal.style['pointer-events'] = "auto";
    }
    
    let lastModal = () => {
        let endModal = document.querySelector('#f-modal');
        modal.style.opacity = "0";
        modal.style['pointer-events'] = "none";
        
    }

   const createEntry = function(){
        let name = document.querySelector('#inputName').value;
        let city = document.querySelector('#inputCity').value;
        let duration = document.querySelector('#inputDuration').value;
        let paxSize = document.querySelector('#inputPaxSize').value;
        let id = document.querySelector('select').value;
        let url = document.querySelector('#inputImage').value;

        if (city === '' || duration === '' ||  paxsize === '' || url === ''){
            return alert('no empty fields!')
        }
        
        axios.post('https://roamer.herokuapp.com/', {
          name: name,
          city: city,
          duration: duration,
          paxsize: paxsize,
          image: url,
          city_id: id,
        })
        console.log(name);
        document.querySelector('#inputName').value = '';
        document.querySelector('#inputCity').value = '';
        document.querySelector('#inputDuration').value = '';
        document.querySelector('#inputPaxSize').value = '';
        
        lastModal();
    }



   return(
        <div className="head-title">

            <div  className="create-entry" onClick={() => firstModal()}>Create Entry</div>

            <div id="first-modal">
                <div id="first-modal-div">
                    <div className="x-div">
                        <div className="x" id="lastModal" onClick={() => lastModal()}>
                            <div className="x-l"></div>
                            <div className="x-r"></div>
                        </div>
                    </div>
                    <input id='inputName' className="fpif" placeholder='Name'/>
                    <input id='inputCity' className="fpif" placeholder='City'/>
                    <input id='inputDuration' className="fpif" placeholder='Duration'/>
                    <input id='inputImage' className="fpif" placeholder='IMG URL'/>
                    <select className="fpif">
                        <option value="3">New York</option>
                        <option value="1">Chicago</option>
                        <option value="4">Miami</option>
                        <option value="2">Los Angeles</option>
                        <option value="5">Dallas</option>
                    </select>
                    <div onClick={() => createEntry()} className="f-submit">Submit Entry</div> 
                </div>
                <div onClick={() => lastModal()} className="close-modal-area"></div>
            </div>

           <div className="roamerapp-div">
                Roamer
                <div id="roamer-logo">
                    <img  src="http://i.imgur.com/yaHwdv0t.png" />
                </div>
            </div>

       </div>
    )
}

export default Head;