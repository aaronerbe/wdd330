//windy:
//https://api.windy.com/map-forecast/examples/hello-world
//https://api.windy.com/map-forecast/docs
//https://leafletjs.com/examples/quick-start/
const options = {
    // Required: API key
    key: 'qrQODxrOJqHA9Xn70LbOLmFhIVEEWg4h', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    //verbose: true,

    // Optional: Initial state of the map
    lat: 25.67,
    lon: -80.01,
    zoom: 12,

    timestamp: Date.now(),
    hourFormat: '12h',


};

// Initialize Windy API
windyInit(options, windyAPI => {
    //const { store } = windyAPI;

    //turns off wind particles
    //store.set('particlesAnim', 'off');
    //store.set('particlesAnim', 'on');
    //store.set('latlon',true);

    //use this method to find out what's avaialble
    //let test = store.getAllowed('overlay');
    //console.log(test);
    //then do this to set it
    //store.set('overlay',"temp");
    //store.set('overlay','wind');

    //test = store.getAllowed('favOverlays');
    //console.log(test);

    //const { map } = windyAPI;
    // .map is instance of Leaflet map


    //L.popup()
    //    .setLatLng([25.67, -80.01])
    //    .setContent('Hello World')
    //    .openOn(map);
});



//marinas:  FUNCTIONAL
//https://marinas.com/developers/api_documentation
fetch('https://api.marinas.com/v1/points/4qcq', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers if needed
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

async function test(){
    const response = await fetch(url, options);
    const result = await response.text();
    console.table(result);
}



const lat = '39.259790916124274';
const lon = '-76.6135644707624';
const url = buildBaseURL(lat, lon)
await getMarinaInfo(url)

function buildBaseURL(lat, lon){
  //https://api.marinas.com/v1/points/search?location[lat]=39.259790916124274&location[lon]=-76.6135644707624
  return `https://api.marinas.com/v1/points/search?location[lat]=${lat}&location[lon]=${lon}`;
}
async function getMarinaInfo(url) {
  console.log('Fetching data from:', url);
  try {
    const response = await fetch(url, {
      method: 'GET'
    });
    console.log('Response:', response);
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}




