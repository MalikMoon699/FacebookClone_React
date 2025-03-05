import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleLogin = () => {
    setError("");
    const storedUsers = JSON.parse(localStorage.getItem("newUser"));

    if (!storedUsers || storedUsers.length === 0) {
      setError("No user found! Please sign up first.");
      return;
    }

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

    setUser(storedUser);
    alert("Login successful!");
    navigate("/home");
  };

  return (
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
        <IconButton className="postSubmit" onClick={handleLogin}>
          Login
        </IconButton>
        <IconButton className="newAccount" onClick={() => navigate("/signup")}>
          SignUp
        </IconButton>
      </div>
    </div>
  );
};

export default Login;
