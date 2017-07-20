// Array, function and variable to set random background images of page
let tourScene = ['./images/nyc/allaccess_911.jpg', './images/nyc/bigapple_helicopter.jpg',
 './images/nyc/fulldayempire.jpg', './images/background04.jpg', './images/background05.jpg', 
 './images/chi/chicagobynight.jpg', './images/chi/chicagograndhalfday.jpg', './images/chi/citytour_optionalriver.jpg', 
 './images/lax/6hour_losangeles.jpg'];
function nonspecArray(array){
	let index = Math.round(Math.random() * (array.length - 1));
	return array[index];
}
let toursImages = nonspecArray(background);
let responsive = window.matchMedia( "(max-width: 600px)" );


  

document.body.style['background-image'] = "url("+toursImages+")";







console.log(toursImages);