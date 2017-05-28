/*function initMap() {
        var uluru = {lat: 51.086, lng: 3.670};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
    

      }*/

var map;

google.maps.event.addDomListener(window, 'load', initMaps);

function initMaps(){
    var uluru = new google.maps.LatLng(51.086,3.670);
    // div met id map in js declareren
    var divMap = document.getElementById('map');
    
    //de map opties worden bepaald in een object
    var mapOptions = {
        zoom: 13,
        center: uluru
    };
        //google maps toepassen op div met id="map"
        map = new google.maps.Map(divMap, mapOptions);
        var marker = new google.maps.Marker({
        
        position: uluru,// positie propertie heeft een LatLng object nodig
        map: map, // op welke map moet de marker komen?
    });
    

    
    
    // this requests the file and executes a callback with the parsed result once
    //   it is available
    fetchJSONFile('https://api.myjson.com/bins/12hv05', function(data){
    // verander opties
        map.setOptions({
            styles: data
        }); 
    });
    
}

function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

    
    