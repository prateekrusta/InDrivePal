import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from './navbar.js';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AccessibleIcon from '@mui/icons-material/Accessible';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import marker from "../../assets/images/marker.png"
import InfoIcon from '@mui/icons-material/Info';
import MessageIcon from '@mui/icons-material/Message';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Switch from '@mui/material/Switch';
import { NavLink } from 'react-router-dom';
import LocalACTaxiIcon from '../../assets/logos/45.png';
import LocalTaxiIcon from '../../assets/logos/44.png';
import TwoWheelerIcon from '../../assets/logos/46.png';
import ElectricRickshawIcon from '../../assets/logos/47.png';
import '../../assets/css/book-ride.css';
import '../../assets/css/buttons.css';
import wheelchairppl from '../../assets/images/wheelchair-ppl.png';
import { useEffect,useRef } from 'react';
import Map, {Marker} from 'react-map-gl';


const Bookride = () => {

  const [wheelchairFriendly, setWheelchairFriendly] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('vcc-1');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [fare, setFare] = useState('');
  const [options, setOptions] = useState('');

  const[lat,setLat] = useState();
  const[long,setLong] = useState();

  const getLocation =  () => {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
    } 
  }
  
  const showPosition = (position) => {

    setLat(position.coords.latitude);
    setLong(position.coords.longitude);

    
  }

  useEffect(() => {
    getLocation();
  },[])


  const handleWheelchairToggle = () => {
    setWheelchairFriendly((prevValue) => !prevValue);
  };

  const handleVehicleSelection = (vehicleClass) => {
    setSelectedVehicle(vehicleClass);
  };

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleFareChange = (event) => {
    setFare(event.target.value);
  };

  const handleOptionsChange = (event) => {
    setOptions(event.target.value);
  };

  let moreThanPassengersText = 'More than 4 passengers';

  if (selectedVehicle === 'vcc-3') {
    moreThanPassengersText = 'More than 2 passengers';
  } else if (selectedVehicle === 'vcc-4') {
    moreThanPassengersText = 'Rider must bring Helmet';
  }

  

  return (
    <div className="dashboard-out">
      <div className="navbar-main">
        <Navbar />
      </div>
      <div className="book-ride-outer">
        <div className='map-outer'>
        
                  {!wheelchairFriendly && lat && long ? <Map
                  mapboxAccessToken="pk.eyJ1IjoiYXN1ciIsImEiOiJja3Q2ZXhkYW4waHJwMm5xbHVrZnE2YjZ2In0.pQ-92peoEdKmKFJAi6DoSg"
                  initialViewState={{
                    longitude: long,
                    latitude: lat,
                    zoom: 14.5
                  }}
                  style={{width:400, height:400}}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                >
            <Marker longitude={long} latitude={lat} anchor="bottom" >
              <img src= {marker} />
            </Marker>

             </Map>
           : ""}
          {wheelchairFriendly && <img src={wheelchairppl} alt="Wheelchair Image" />}
        </div>
        <div className="input-form">
          <div className="vehicle-icons">
            <Grid container spacing={1}>
              <Grid
                item
                xs={3}
                className={`vehicle-container vcc-1 ${selectedVehicle === 'vcc-1' ? 'selected' : ''}`}
                onClick={() => handleVehicleSelection('vcc-1')}
              >
                <img src={LocalACTaxiIcon} className="ride-logos" />
                <InfoIcon className="info-icons info-icons-1" />
                <br />
                <label>Ride AC</label>
              </Grid>

              <Grid
                item
                xs={3}
                className={`vehicle-container vcc-2 ${selectedVehicle === 'vcc-2' ? 'selected' : ''}`}
                onClick={() => handleVehicleSelection('vcc-2')}
              >
                <img src={LocalTaxiIcon} className="ride-logos ride-logos123" />
                <InfoIcon className="info-icons info-icons-2" />
                <br />
                <label>Ride</label>
              </Grid>

              <Grid
                item
                xs={3}
                className={`vehicle-container vcc-3 ${selectedVehicle === 'vcc-4' ? 'selected' : ''}`}
                onClick={() => handleVehicleSelection('vcc-4')}
              >
                <img src={ElectricRickshawIcon} className="ride-logos" />
                <InfoIcon className="info-icons info-icons-3" />
                <br />
                <label>Moto</label>
              </Grid>

              <Grid
                item
                xs={3}
                className={`vehicle-container vcc-4 ${selectedVehicle === 'vcc-3' ? 'selected' : ''}`}
                onClick={() => handleVehicleSelection('vcc-3')}
              >
                <img src={TwoWheelerIcon} className="ride-logos" />
                <InfoIcon className="info-icons info-icons-4" />
                <br />
                <label>Auto</label>
              </Grid>
            </Grid>
          </div>

          <div className="mainForm">
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <RadioButtonCheckedIcon className="book-ride-icons" />
              </Grid>
              <Grid item xs={10}>
                <input type="text" placeholder="Source" value={source} onChange={handleSourceChange} />
              </Grid>

              <Grid item xs={2}>
                <RadioButtonCheckedIcon className="book-ride-icons" />
              </Grid>
              <Grid item xs={10}>
                <input type="text" placeholder="Destination" value={destination} onChange={handleDestinationChange} />
              </Grid>

              <Grid item xs={2}>
                <CurrencyRupeeIcon className="book-ride-icons" />
              </Grid>
              <Grid item xs={10}>
                <input type="number" placeholder="Offer your fare" value={fare} onChange={handleFareChange} />
              </Grid>

              <Grid item xs={2}>
                <MessageIcon className="book-ride-icons" />
              </Grid>
              <Grid item xs={10}>
                <input type="text" placeholder="Options and Comments" value={options} onChange={handleOptionsChange} />
              </Grid>

              <Grid item xs={2}>
                <AirportShuttleIcon className="book-ride-icons" />
              </Grid>
              <Grid item xs={10}>
                <label>{moreThanPassengersText}</label>
                
                  <Switch className="switcher" />
                
              </Grid>

              <Grid item xs={2}>
                <AccessibleIcon className="book-ride-icons" />
              </Grid>
              <Grid item xs={10}>
                <label>Wheelchair friendly rides</label>
                <Switch
                  className="switcher"
                  checked={wheelchairFriendly}
                  onChange={handleWheelchairToggle}
                />
              </Grid>
            </Grid>
          </div>
          <NavLink to="/ride/pick-driver-suggestion"><button className="btn-driver-mode">Next</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Bookride;
