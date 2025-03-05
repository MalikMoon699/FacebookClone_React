import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Modal } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = ({ setUser }) => {
  const [showPop, setShowPop] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOpen = () => setShowPop(true);
  const handleClose = () => setShowPop(false);

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

  // Set the logged-in user correctly
  setUser(storedUser);

  handleOpen();

  setTimeout(() => {
    handleClose();
    navigate("/");
  }, 3000);
};


  return (
    <>
      <Modal open={showPop} onClose={handleClose}>
        <div className="modalPop popheight popwidth">
          <div className="modalHeading">
            <h2>Signup successful!</h2>
          </div>
        </div>
      </Modal>
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
          <IconButton
            className="newAccount"
            onClick={() => navigate("/signup")}
          >
            SignUp
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Login;
