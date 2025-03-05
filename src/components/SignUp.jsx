import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Loader from "./Loader";

const Signup = ({ setUser }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignup = () => {
    if (!userName || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    if (
      !/[a-zA-Z]/.test(password) ||
      !/\d/.test(password) ||
      !/[@._%+-]/.test(password)
    ) {
      setError(
        "Password must contain at least one letter, one number, and one special character (@, ., _, -, +, %)."
      );
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const newUser = { userName, email, password };
    const existingUsers = JSON.parse(localStorage.getItem("newUser")) || [];

    if (existingUsers.some((user) => user.email === email)) {
      setError("This email is already registered!");
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem("newUser", JSON.stringify(existingUsers));
    localStorage.setItem("Nowuser", JSON.stringify(newUser));
    setUser(newUser);

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
            <h2>Signup</h2>
            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
            <div className="inputContainer">
              <div className="accounInput">
                <input
                  type="text"
                  placeholder="User Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
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
              <div className="accounInput">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                </IconButton>
              </div>
            </div>
            <IconButton
              className="postSubmit"
              onClick={handleSignup}
              disabled={loading}
            >
              Sign Up
            </IconButton>
            <IconButton className="newAccount" onClick={() => navigate("/")}>
              Log in
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
