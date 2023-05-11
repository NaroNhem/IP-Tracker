import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../img/mapIcon.svg";

const customIcon = new Icon({
  iconUrl: marker,
  iconSize: [38, 38],
});
export default function Locator() {
  return (
    <MapContainer center={[37.40599, -122.078514]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[37.40599, -122.078514]} icon={customIcon}></Marker>
    </MapContainer>
  );
}
