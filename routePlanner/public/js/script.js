document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("routePlanner JS imported successfully!");
  },
  false
);

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hvY29ncmVub3VpbGxlIiwiYSI6ImNrbnlxMDhpbjEycHMyd3RnMWx5dW84NmgifQ.jgYkaT23M3Fo965r73i23A';

//creates new mapbox
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [13.602637484284998, 52.45813934334384], // starting position [lng, lat]
  zoom: 12, // starting zoom
  doubleClickZoom: true
});

//creates new navigation set
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

const coords = [13.602637484284998, 52.45813934334384]

// This is the array of coordinates for my markers
let markers = [];
console.log('first markers: ', markers);

//Gets me the all the coordinates of each route
axios.get('http://localhost:3000/get-data')
   .then(results => {
      const coordinates = [...results.data];
      coordinates.forEach((coordinate) => {
        markers.push(coordinate.location.coordinates);
      })  
    })

console.log('2nd markers: ', markers);
// That one should set markers for each route in database

markers.forEach((coords) => {
  new mapboxgl.Marker({
    color: "#000000",
    draggable: true
    }).setLngLat(coords)
    .addTo(map);
})