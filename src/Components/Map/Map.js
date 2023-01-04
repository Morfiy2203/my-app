import React, {useRef, useEffect, useState} from 'react';
// Important: https://githubplus.com/maplibre/maplibre-gl-js/issues/1011
// eslint-disable-next-line import/no-webpack-loader-syntax
import maplibregl from '!maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';
import Button from '../Button/Button'




export default function Map(props) {
    var index = props.index;
    var places = props.places;
    var marker = new maplibregl.Marker({color: "red"})
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(55.94100437687456);
    const [lat] = useState(54.724958890126146);
    const [zoom] = useState(16);
    const [API_KEY] = useState('ZTV8cbe8fZucY3iIZp3C');  
    
    useEffect(() => {
        if (map.current) return; 
        map.current = new maplibregl.Map({
          container: mapContainer.current,
          style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
          center: [lng, lat],
          zoom: zoom,
        });
          map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

          new maplibregl.Marker({color: "blue"})
          .setLngLat([lng, lat])
          .addTo(map.current)
          .setPopup(new maplibregl.Popup().setText("Моё местоположение!"));
          

          
      });

      function gps(){
        places.map(({id, lng, lat, Name, route})=>{
          if(index===id){
            marker.setLngLat([lng, lat]).setPopup(new maplibregl.Popup().setText(Name)).addTo(map.current)
            map.current.flyTo({center: [lng, lat], zoom: 14})
            map.current.addSource('route', {
              "type": "geojson",
              "data": {
                "type": "Feature",
                'properties': {},
                "geometry": {
                  "type": "LineString",
                  'coordinates': route
                }
              }
              });
          }});
          map.current.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
              'line-join': 'round',
              'line-cap': 'round'
            },
            'paint': {
              'line-color': 'green',
              'line-width': 8
            }
            });
        }

        function retake(){
          marker.remove(); 
          map.current.removeLayer('route'); 
          map.current.removeSource('route')
          map.current.flyTo({center: [lng, lat], zoom: 16})
        }
        

  return (
  <div className="map-wrap">
    <div ref={mapContainer}  className="map"> 
    </div>
    <Button mode="add" onClick={gps}>Построить маршрут</Button>
    <Button mode="clear" onClick={retake}>Отмена</Button>
    

  </div>
  
  )
}
