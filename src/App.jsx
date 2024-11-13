import { app } from "./Firebase";
import "./App.css";
import New from "./New";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailNew, setEmailNew] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [error, setError] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Successful sign-in
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      // Redirect to the desired link
      window.location.replace("https://microsoft-clone-tailwind-weld.vercel.app/");

      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const signupUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Sign Up successful");
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error:", error.message);
      });
  };
  const signinUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, emailNew, passwordNew)
      .then((userCredential) => {
        alert("Login Successful");
        const user = userCredential.user;
        document.getElementById("login").value = "";
        document.getElementById("login2").value = "";
      })
      .catch((error) => {
        alert("login failed" + error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <h1>Authentication template</h1>

      <form
        onSubmit={signupUser}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div>
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ width: "100%", height: "40px" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{ width: "100%", height: "40px" }}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <form
        onSubmit={signinUser}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div>
          <input
            type="email"
            id="login"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setEmailNew(e.target.value)}
            value={emailNew}
            style={{ width: "100%", height: "40px" }}
          />
        </div>
        <div>
          <input
            type="password"
            id="login2"
            placeholder="Enter Your Password"
            required
            onChange={(e) => setPasswordNew(e.target.value)}
            value={passwordNew}
            style={{ width: "100%", height: "40px" }}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br />
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </>
  );
}

export default App;
