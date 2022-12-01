import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";

function Nav() {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <nav>
        <h1>
          <a href="/home">EasyClinic</a>
        </h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <button onClick={() => handleSignOut()}>Log Out</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
