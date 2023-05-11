export default function Search(props) {
  return (
    <div className="searchContainer">
      <h1>IP Address Tracker</h1>
      <div className="inputContainer">
        <form>
          <input
            type="text"
            className="inputBox"
            onInput={(e) => props.getIp(e.target.value)}
          />
        </form>
        <button onClick={props.submit}>
          <p className="arrowRight"></p>
        </button>
      </div>
    </div>
  );
}
