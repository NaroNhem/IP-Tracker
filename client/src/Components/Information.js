export default function Information() {
  return (
    <div className="infoContainer">
      <div className="line ip">
        <p>IP ADDRESS</p>
        <h2>192.212.174.101</h2>
      </div>
      <div className="line location">
        <p>LOCATION</p>
        <h2>Brooklyn, NY, 10001</h2>
      </div>
      <div className="line time">
        <p>TIMEZONE</p>
        <h2>UTC-05:00</h2>
      </div>
      <div className="isp">
        <p>ISP</p>
        <h2>SpaceX StarLink</h2>
      </div>
    </div>
  );
}
