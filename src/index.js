async function fetchGIFs(searchTerm) {
	try {
		const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=JPATCxkiYzTOAR7667lKYr7ZmxWKQdaD&s='
			+ searchTerm, {mode: 'cors'})
		const responseJson = await response.json();
		document.getElementById('gif').src = responseJson.data.images.original.url;
	} catch(error) {
	    console.log('There has been a problem with your fetch operation: ', error.message);
	};
}

function main() {
	if (window.performance) {
		console.info("window.performance works fine on this browser");
	}

	if (performance.navigation.type == 1) {
		console.info( "This page is reloaded" );
	} else {
		console.info( "This page is not reloaded");
	}

	fetchGIFs('cats');

	document.getElementById("loadanother").addEventListener("click", function(event){
		event.preventDefault();
		fetchGIFs(document.getElementById("input").value);
	});
}

main();

module.exports = { fetchGIFs };