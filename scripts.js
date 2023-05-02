document.addEventListener("DOMContentLoaded", function(){
    
    //code to load api
    const options = {
	       method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '38b902761fmshde1e3f472954940p156047jsn607b0be3156e',
		    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
    };
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=99163', options)
        .then(response => response.json())
        .then(function(response){
            document.querySelector("#location span").innerHTML = response.location.name;
            document.querySelector("#temp span").innerHTML = response.current.temp_f;
            document.querySelector("#windDir span").innerHTML = response.current.wind_dir;
            document.querySelector("#windSpe span").innerHTML = response.current.wind_mph;
            document.querySelector("#cloud span").innerHTML = response.current.cloud;
            document.querySelector("#humidity span").innerHTML = response.current.humidity;
            return response;
        })
        .then(err => console.error(err));


});