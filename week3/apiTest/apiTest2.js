//this effectively pulls a list of marinas in a given location.  can't confirm if it's pulling all of them?
//json gives icons.  let's pull those icons to id the locations.  shows lighthouses, marinas, inlets, ets.  
(async () => {
  const lat = '39.259790916124274';
  const lon = '-76.6135644707624';
  const url = buildBaseURL(lat, lon);
  await getMarinaInfo(url);
})();

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




