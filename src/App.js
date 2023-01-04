import React, { useState} from 'react';
import Map from './Components/Map/Map.js';
import './App.css'
import './Components/Panel/Panel.css'



function App() {
  var [index, setIndex] = useState(0);
  var places = [
    {
      id: 1,
      Name: "Памятник Салавату Юлаеву",
      lat:  54.718496,
      lng: 55.925933,
      route:[
        [55.93822739792972, 54.72026097374305],
        [55.931182317649814, 54.721499744405634],
        [55.93100900601968, 54.7213495995814],
        [55.93031575949345, 54.72055715935218],
        [55.9299113656879, 54.72070730711161],
        [55.929564742425754, 54.720774039270424],
        [55.92923256179992, 54.72079906380182],
        [55.92866929899864, 54.720632233301444],
        [55.92826490519124, 54.72057384246415],
        [55.92800493774507, 54.72057384246415],
        [55.92796586542991, 54.72048689661631],
        [55.92785032434125, 54.72043684715291],
        [55.92774922589081, 54.72007815752306],
        [55.92772034061821, 54.71968609778611],
        [55.92773478325449, 54.71931905970183],
        [55.92735927471969, 54.7193357433234],
        [55.92738815999235, 54.71893533451521],
        [55.92734483208338, 54.71863502531406],
        [55.92630496229688, 54.71843481794383],
        [55.925828355311666, 54.71843481794383]]
    },
    {
      id: 2,
      Name: "Монумент Дружбы",
      lat:   54.71167,
      lng: 55.96333,
      route:[
        [55.96333, 54.71167],
        [55.963259115587704, 54.71187461577509],
        [55.96344949001883, 54.71284394893979],
        [55.963425124752405, 54.712895101935146],
        [55.96334602930236, 54.713167345494355],
        [55.963044381136115, 54.71317820544405],
        [55.96301663650476, 54.71349708503834],
        [55.962028784856784, 54.715580995119865],
        [55.961197656093105, 54.71694792417014],
        [55.95752445023567, 54.72034739619093],
        [55.9515710482205, 54.72346740872413],
        [55.94663506774887, 54.724421489913965],
        [55.94508707141085, 54.72460135660111],
        [55.944704210454546, 54.72395214967315],
        [55.9429287535267, 54.72425996149744],
        [55.942611254106396, 54.72426498505109],
        [55.941963207346845, 54.724372991308115],
        [55.94109692559428, 54.72490940734636]]
    },
    {
      id: 3,
      Name: "Фонтан Семь девушек",
      lat:  54.723427,
      lng: 55.945142,
      route: [ 
        [55.94109692559428, 54.72490940734636],
        [55.94196179385793, 54.72436693304394],
        [55.94260739839493, 54.72425624501216],
        [55.94293145885567, 54.72426917116189],
        [55.94471917061642, 54.72396101734685],
        [55.945142, 54.723427]]
    },
    {
      id: 4,
      Name: "Конгресс-Холл",
      lat:  54.72100218479963,
      lng: 55.92880686269302,
      route: [ 
        [55.9406986886184, 54.72528025042752],
        [55.938190874742645, 54.72025840352788],
        [55.92712520392726, 54.72207075286323],
        [55.92686948829572, 54.72180852351502],
        [55.92726794185262, 54.721842083489264],
        [55.92846651694592, 54.72166380375023],
        [55.92881516380902, 54.72127546350134],
        [55.92880686269302, 54.72100218479963]]
    },
    {
      id: 5,
      Name: "Парк им. Якутова",
      lat:  54.74044803050464,
      lng: 55.94963593199256,
      route: [ 
        [55.94068521672796, 54.725275219092424],
        [55.94345479996974, 54.73106918051417],
        [55.94316243261363, 54.73205795544746],
        [55.944136990470156, 54.73276535685312],
        [55.945978601164796, 54.73651297546215],
        [55.94679233177567, 54.73832172976725],
        [55.94751289449334, 54.739771206544646],
        [55.94836844691815, 54.74080473047343],
        [55.9490021894554, 54.74134434753293],
        [55.94946165279447, 54.74110655107057],
        [55.95050732798029, 54.74035656846817],
        [55.94969930624595, 54.74108825897727],
        [55.94947749635833, 54.740640100108976],
        [55.949667619119225, 54.740594369333365],
        [55.94963593199256, 54.74044803050464]]
    },
    {
      id: 6,
      Name: "Башкирский государственный академический театр драмы им. М. Гафури",
      lat:  54.718781667532426,
      lng: 55.94069754296041,
      route: [ 
        [55.940682431667796, 54.72526915513342],
        [55.938153229540205, 54.72016613479485],
        [55.941012928920344, 54.71971502250608],
        [55.94092878702759, 54.719543498371564],
        [55.940860877222036, 54.71954781744515],
        [55.9408163315137, 54.719453478872],
        [55.94055400679028, 54.71948778383327],
        [55.94059360297473, 54.719264801067084],
        [55.94094006959094, 54.71920476703576],
        [55.94069754296041, 54.718781667532426]]
    },
    {
      id: 7,
      Name: "Национальный музей Республики Башкортостан",
      lat:  54.71989483249146,
      lng: 55.946661098713605,
      route: [ 
        [55.94069820457872, 54.72527728653603],
        [55.939482307291996, 54.72283763890769],
        [55.94333593404306, 54.72220104796503],
        [55.947159279774496, 54.721564212008076],
        [55.946316905129095, 54.719907003754855],
        [55.946661098713605, 54.71989483249146]]
    },
    {
      id: 8,
      Name: "Сад им. Аксакова",
      lat:  54.7191044822566,
      lng: 55.95256792295751,
      route: [ 
        [55.94071426182413, 54.725256546063804],
        [55.93946564661408, 54.72282041843093],
        [55.94711393257606, 54.72153351419669],
        [55.950440820414684, 54.72094062483248],
        [55.95493374095429, 54.71913324986929],
        [55.95482582644857, 54.719066125408034],
        [55.95354745462001, 54.71955996705836],
        [55.95256792295751, 54.7191044822566]
]
    },
    {
      id: 9,
      Name: "Парк им. Ленина",
      lat:  54.7183897524248,
      lng: 55.94344515922734,
      route: [ 
        [55.940678865288305, 54.72526512170913],
        [55.93817102806162, 54.720156520063824],
        [55.9418755691936, 54.719556968145895],
        [55.941286972930925, 54.71835008916432],
        [55.94344515922734, 54.7183897524248]]
    },
    {
      id: 10,
      Name: "Башкирский государственный художественный музей им. М.В. Нестерова",
      lat:  54.72439535985902,
      lng: 55.935993023796755,
      route: [ 
        [55.94068734190981, 54.72525951150726],
        [55.93949096071583, 54.722821794143215],
        [55.936595493110644, 54.72331264991206],
        [55.93700507730847, 54.724267005217655],
        [55.935993023796755, 54.72439535985902]]
    },
    {
      id: 11,
      Name: "Музей полярников им. Альбанова В.И.",
      lat:  54.725755941110776,
      lng: 55.93693009956843,
      route: [ 
        [55.94070656838693, 54.72527269973844],
        [55.93773585115716, 54.72580061958652],
        [55.93706126654368, 54.72591481888708],
        [55.93693009956843, 54.725755941110776]]
    }

  ]

    function fun1() {
      var sel=document.getElementById("selector").selectedIndex;
      setIndex(sel+1)
    }

  return (
    <div className="App">
      <Map index={index} places={places}/>
      <div className="panel-warp">
        <div className="panel">
          <header className="Header">Что хотите посетить?</header>
          <select className="select" id="selector" onChange={fun1} >
            {places.map(({id, Name})=>
            <option value={id}>{Name}</option>  )}
            </select>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
