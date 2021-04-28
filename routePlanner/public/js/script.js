document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("routePlanner JS imported successfully!");
  },
  false
);

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hvY29ncmVub3VpbGxlIiwiYSI6ImNrbnlxMDhpbjEycHMyd3RnMWx5dW84NmgifQ.jgYkaT23M3Fo965r73i23A';

// // This is the array of coordinates for my markers
let coordinates = [];
let longitude = document.getElementById('longitude').innerText;
let latitude = document.getElementById('latitude').innerText;
coordinates.push(longitude);
coordinates.push(latitude);

//creates new mapbox
const detailMap = new mapboxgl.Map({
  container: 'detailMap', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: coordinates, // starting position [lng, lat]
  zoom: 12, // starting zoom
  doubleClickZoom: true
});

//creates new navigation set
const nav = new mapboxgl.NavigationControl();
detailMap.addControl(nav, 'top-left');

// adding the markers to each map
const markers = new mapboxgl.Marker({
  color: "red",
  draggable: true
  }).setLngLat(coordinates)
  .addTo(detailMap);

//Gets me the all the coordinates of each route
// axios.get('http://localhost:3000/get-data')
//    .then(results => {
//       const coordinates = [...results.data];
//       coordinates.forEach((coordinate) => {
//         markers.push(coordinate.location.coordinates);
//       })
    // markers.forEach((coords) => {
    //   new mapboxgl.Marker({
    //     color: "#000000",
    //     draggable: true
    //     }).setLngLat(coords)
    //     .addTo(map);
    // }) 
//     .catch(error => console.log(error))

    //console.log(window.location)
