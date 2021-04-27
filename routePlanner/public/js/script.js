document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("routePlanner JS imported successfully!");
  },
  false
);

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hvY29ncmVub3VpbGxlIiwiYSI6ImNrbnlxMDhpbjEycHMyd3RnMWx5dW84NmgifQ.jgYkaT23M3Fo965r73i23A';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [13.602637484284998, 52.45813934334384], // starting position [lng, lat]
  zoom: 12, // starting zoom
  doubleClickZoom: true
});

const coords = [13.602637484284998, 52.45813934334384]

const addCoordinates = (coords) => {
  return coords
}


const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

var marker = new mapboxgl.Marker({
color: "#ffffff",
draggable: true
}).setLngLat(addCoordinates(coords))
.addTo(map);