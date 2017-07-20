let hpSelect = document.querySelector('.header-select');
let go = document.querySelector('#my-button');
let city;

function showTours(){
    city = document.querySelector('.header-select').value
    console.log(city);
    return city
    
    // axios.get('http://localhost:3000/tours/' + city);
}

go.addEventListener('click', showTours);