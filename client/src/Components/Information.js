export default function Information(props) {
  return (
    <div className="infoContainer">
      <div className="line ip">
        <p>IP ADDRESS</p>
        {/* <h2>{props.IP}</h2> */}
      </div>
      <div className="line location">
        <p>LOCATION</p>
        {/* <h2>{props.Location}</h2> */}
      </div>
      <div className="time">
        <p>TIMEZONE</p>
        {/* <h2>{props.Timezone}</h2> */}
      </div>
    </div>
  );
}
