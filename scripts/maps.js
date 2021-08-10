let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -10.250947493382137, lng: -48.323432254618986 },
    zoom: 17,
  });
}
