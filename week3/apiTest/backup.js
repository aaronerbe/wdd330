/*// Initialize Windy API
windyInit(options, windyAPI => {
    const { store } = windyAPI;

    //turns off wind particles
    //store.set('particlesAnim', 'off');
    //store.set('particlesAnim', 'on');
    //store.set('latlon',true);

    //use this method to find out what's avaialble
    let test = store.getAllowed('overlay');
    console.log(test);
    //then do this to set it
    //store.set('overlay',"temp");
    store.set('overlay','wind');

    test = store.getAllowed('favOverlays');
    console.log(test);

    const { map } = windyAPI;
    // .map is instance of Leaflet map


    L.popup()
        .setLatLng([25.67, -80.01])
        .setContent('Hello World')
        .openOn(map);
});*/