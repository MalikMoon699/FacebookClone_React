import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Loader from "./Loader";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    setError("");
    const storedUsers = JSON.parse(localStorage.getItem("newUser")) || [];

    const storedUser = storedUsers.find(
      (user) => user.email.trim() === email.trim()
    );

    if (!storedUser) {
      setError("Email does not match!!");
      return;
    }

    if (storedUser.password.trim() !== password.trim()) {
      setError("Password does not match!!");
      return;
    }

    localStorage.setItem("Nowuser", JSON.stringify(storedUser));
    setUser(storedUser);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="accountMain">
          <div className="accountPop">
            <h2>Login</h2>
            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
            <div className="inputContainer">
              <div className="accounInput">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="accounInput">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                </IconButton>
              </div>
            </div>
            <IconButton
              className="postSubmit"
              onClick={handleLogin}
              disabled={loading}
            >
              Login
            </IconButton>
            <IconButton
              className="newAccount"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
