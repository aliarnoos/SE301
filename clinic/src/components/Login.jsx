import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useParams } from "react-router";
function Login() {
  const auth = getAuth();
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const navigate = useNavigate();

  const params = useParams();
  console.log("hello", params == "/");

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      console.log("loged in");
      navigate("/home");
    } catch {}
  }
  return (
    <div className="login">
      <h1>Welcome To EasyClinic</h1>
      <p>Please Log in</p>
      <div className="form">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@emial.com"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button onClick={() => handleLogin()}>Log In</button>
      </div>
    </div>
  );
}

export default Login;
