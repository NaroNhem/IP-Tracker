import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../img/mapIcon.svg";

const customIcon = new Icon({
  iconUrl: marker,
  iconSize: [38, 38],
});

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

export default function Locator(props) {
  const { lat, lng } = props;
  console.log(lat, lng);
  return (
    <MapContainer center={[37.40599, -122.078514]} zoom={13}>
      <ChangeView center={[lat, lng]} zoom={13} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={customIcon}></Marker>
    </MapContainer>
  );
}
