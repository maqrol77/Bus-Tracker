// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  { coordinates: [-71.093729, 42.359244], name: 'Stop1: 77 Massachusetts Ave' },
  { coordinates: [-71.094915, 42.360175], name: 'Stop 2: Massachusetts Ave - Vassar St' },
  { coordinates: [-71.0958, 42.360698], name: 'Stop 3: Massachusetts Ave - Albany St' },
  { coordinates: [-71.099558, 42.362953], name: 'Stop 4: Massachusetts Ave - Sidney St' },
  { coordinates: [-71.103476, 42.365248], name: 'Stop 5: Massachusetts Ave - Prospect St' },
  { coordinates: [-71.106067, 42.366806], name: 'Stop 6: Massachusetts Ave - Inman St' },
  { coordinates: [-71.108717, 42.368355], name: 'Stop 7: Massachusetts Ave - Hancock St' },
  { coordinates: [-71.110799, 42.369192], name: 'Stop 8: Massachusetts Ave - Dana St' },
  { coordinates: [-71.113095, 42.370218], name: 'Stop 9: Massachusetts Ave - Trowbridge St' },
  { coordinates: [-71.115476, 42.372085], name: 'Stop 10: Massachusetts Ave - Bow St' },
  { coordinates: [-71.117585, 42.373016], name: 'Stop 11: Massachusetts Ave - Holyoke St' },
  { coordinates: [-71.118625, 42.374863], name: 'Stop 12: Massachusetts Ave - Johnston Gate' },
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFxcm9sNzciLCJhIjoiY2xmaGhwdnhqMGRlZTN6cXBwOXNiNjU1aiJ9.ueaQJjrzwHRXP1fMLYCjQA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker({ color: 'red' })
  .setLngLat(busStops[0].coordinates)
  .addTo(map);

marker.setPopup(new mapboxgl.Popup().setHTML(busStops[0].name).addTo(map));



// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter].coordinates);
    marker.getPopup().setHTML(busStops[counter].name); // update popup content
    counter++;
    move();
  }, 1500);
}
