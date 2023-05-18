export default function Search(props) {
  return (
    <div className="searchContainer">
      <h1>IP Address Tracker</h1>
      <div className="inputContainer">
        <form onSubmit={props.submit}>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter an IPV4 or IPV6 address..."
            onChange={(e) => props.getsearchIP(e.target.value)}
          />
          <button>&#62;</button>
        </form>
      </div>
    </div>
  );
}
