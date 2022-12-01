import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="main-btns">
        <Link to={"/patinets"}>
          <div>
            <h1>Patients</h1>
          </div>
        </Link>
        <Link to={"/appoint"}>
          <div>
            <h1>Make Appointment</h1>
          </div>
        </Link>
        <Link to={"/payment"}>
          <div>
            <h1>Payment</h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
