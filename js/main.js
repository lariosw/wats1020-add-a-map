/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

$(document).ready(function() {

    //init map
    var mymap = L.map('map-container').setView([46.852, -121.760], 13);

    //get street map
    var streetMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'});

    //get topography map
    var topoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    //add layers to map
    var mapLayers = {
        "Street Map": streetMap,
        "Topography Map": topoMap
    };
    L.control.layers(mapLayers).addTo(mymap);


    //add default map
    streetMap.addTo(mymap);

    var marker1 = L.marker([46.852, -121.760]).addTo(mymap);
    marker1.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");

    var marker2 = L.marker([46.8496, -121.7123]).addTo(mymap);
    marker2.bindPopup("<b>Little Tahoma Peak</b><br>Elevation of 11,138 feet.");

    var marker3 = L.marker([46.8456636,-121.7453736
    ]).addTo(mymap);
    marker3.bindPopup("<b>Gibraltar Rock, WA</b><br>Elevation of 12,674 feet.");

    var marker4 = L.marker([46.8459412,-121.7675967
    ]).addTo(mymap);
    marker4.bindPopup("<b>Point Success, WA</b><br>Elevation of 14,114 feet.");  
});
    
