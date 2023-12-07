const API_KEY = "b72977f80f3c7e0c4820bc268b729de9";

function onGeoOk(position){
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	// console.log('너는' + lat , lng + '에 있음');
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}6&appid=${API_KEY}&units=metric&lang=kr`
	fetch(url).then(response => response.json()).then(data => {
		// console.log(data.name, data.weather[0].main);

		const weather = document.querySelector('#weather span:first-child');
		const city = document.querySelector('#weather span:last-child');

		city.innerText = data.name;
		weather.innerText = `${data.weather[0].description} / ${data.main.temp} ℃`
	})
}

function onGeoError(onGeoError){
	alert('못찾았음~ 날씨 못알려줌~');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);