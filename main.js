function OurApp() {
  return (
    <div className="main">
      <OurHeader />
      <TimeArea />
      <Footer />
    </div>
  );
}

function OurHeader() {
  return <h1 className="special">Welcome!</h1>;
}

function TimeArea() {
  return <p>{new Date().toLocaleString()}.</p>;
}
function Footer() {
  if (
    new Date().toLocaleString() >= "12:00:00 AM" &&
    new Date().toLocaleString() <= "12:00:00 PM"
  ) {
    return <h3 className="greeting">Good Morning Keshav!</h3>;
  } else {
    return <h3 className="greeting">Good Afternoon Keshav!</h3>;
  }
  //   return <small>Copyright Footer Text</small>;
}

setInterval(function () {
  ReactDOM.render(<OurApp />, document.querySelector("#app"));
}, 1000);
