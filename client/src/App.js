import Information from "./Components/Information";
import Search from "./Components/Search";
import Locator from "./Components/Locator";
import { useCallback, useEffect, useState } from "react";
function App() {
  const [ip, setIp] = useState("8.8.8.8");
  // const [location, setLocation] = useState(null);
  const [area, setArea] = useState(null);
  // const [timezone, setTimezone] = useState(null);
  const getIp = (ipAddress) => {
    setIp(ipAddress);
  };

  // const fetchData = useCallback(async () => {
  //   const response = await fetch(
  //     `https://geo.ipify.org/api/v2/country,city?apiKey=at_oLVcM9g11ILr7BT5PO1XQVlqU5hW0&ipAddress=${ip}`
  //   );
  //   const { location } = await response.json();
  //   setLocation(location);
  //   setArea(`${location.city}, ${location.region}, ${location.postalCode}`);
  //   setTimezone(location.timezone);
  // }, [ip]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  const onSubmit = () => {
    // fetchData();
    // console.log(location);
  };

  return (
    <div>
      <Search getIp={getIp} submit={onSubmit} />
      <Information IP={ip} Location={area} />
      <Locator />
    </div>
  );
}

export default App;
