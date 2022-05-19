let markers, map;

function initMap() {
  const posicion = {
    lat: -33.04352489152673,
    lng: -71.42170206972624,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -33.04019325183771, 
        lng: -71.56802123947696,
      },
      map,
      title: "Placeres",
    })
  );
  markers.push(
    new google.maps.Marker({
        position: {
        lat: -33.041585359421916,
        lng: -71.36361586088722,
      },
      map,
      title: "Villa Alemana",
    })
  );
  markers.push(
    new google.maps.Marker({
        position: {
        lat: -33.01329878643748,
        lng: -71.19383791509061,
      },
      map,
      title: "Olmué",
    })
  );
}