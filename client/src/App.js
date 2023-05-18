import Information from "./Components/Information";
import Search from "./Components/Search";
import Locator from "./Components/Locator";
import { useCallback, useEffect, useState } from "react";
function App() {
  const [searchIP, setsearchIP] = useState("");
  const [location, setLocation] = useState(null);
  const [area, setArea] = useState(null);
  // const [timezone, setTimezone] = useState(null);
  // const [lat, setLat] = useState(0.0);
  // const [lng, setLng] = useState(0.0);
  const getsearchIP = (searchIPAddress) => {
    setsearchIP(searchIPAddress);
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_oLVcM9g11ILr7BT5PO1XQVlqU5hW0&ipAddress=${searchIP}`
    );
    const data = await response.json();
    //to destructure  { }
    setLocation(data.location);
    setArea(
      `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`
    );
    setsearchIP(data.ip);
    console.log("make a request");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = (e) => {
    fetchData();
    e.preventDefault();
    console.log(location);
  };

  // function debounce(func, timeout = 300) {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this, args);
  //     }, timeout);
  //   };
  // }

  return (
    <div>
      <Search getsearchIP={setsearchIP} submit={onSubmit} />
      {location && (
        <Information
          searchIP={searchIP}
          Location={area}
          Timezone={location.timezone}
        />
      )}

      {location && <Locator lat={location.lat} lng={location.lng} />}
    </div>
  );
}

export default App;
