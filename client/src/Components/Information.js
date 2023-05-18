export default function Information(props) {
  const { searchIP, Location, Timezone } = props;
  return (
    <div className="infoContainer">
      <div className="line ip">
        <p>IP ADDRESS</p>
        <h2>{searchIP}</h2>
      </div>
      <div className="line location">
        <p>LOCATION</p>
        {<h2>{Location}</h2>}
      </div>
      <div className="time">
        <p>TIMEZONE</p>
        <h2>{Timezone}</h2>
      </div>
    </div>
  );
}
