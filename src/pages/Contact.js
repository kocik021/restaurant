import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const Contact = props => {
  return (
    <section className="contact-wrapper" id="contact">
      <h2 className="tag">Contact</h2>

      <div className="info-list">
        <div className="info-wrap">
          You can find us here
          <div className="adress">{props.adressFirst}</div>
          <div className="adress2">{props.adressSecond}</div>
        </div>
        <div className="info-wrap">
          Booking
          <div className="adress">{props.phoneNumber}</div>
          <div className="adress2">{props.email}</div>
        </div>
        <div className="info-wrap">
          Restaurant Menager
          <div className="adress">{props.phoneNumber}</div>
          <div className="adress2">{props.email}</div>
        </div>
        <div className="info-wrap">
          Opening hours
          <div className="adress">{props.openDeys}</div>
          <div className="adress2">{props.openHours}</div>
        </div>
      </div>
      <footer>Created by Jaroslaw Kocik</footer>
      <div className="map">
        <Map google={props.google} zoom={14}>
          <Marker onClick={props.onMarkerClick} name={"Current location"} />
        </Map>
      </div>
    </section>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDNHou770UY2c68aQQkB6Ink8pDHPD4RZU"
})(Contact);
