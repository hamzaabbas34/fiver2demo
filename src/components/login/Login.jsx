import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navgate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email !== storedEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (email === storedEmail && password !== storedPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (email === storedEmail && password === storedPassword) {
      setEmailError(false);
      setPasswordError(false);
      navgate('/home')
      localStorage.setItem("isLogin", "true");
    }
    
  };

  return (
    <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/f2/c1/9d/f2c19d1aa7306c491bc392612e28b421.jpg')" }}>
      <div className="w-full h-full bg-black/60 flex justify-center items-center">
        <div className="text-white w-[450px] bg-black/80 p-10 flex flex-col gap-6 rounded-2xl font-montserrat">
          <h2 className="text-2xl">Login</h2>
          <input
            type="email"
            placeholder="Enter email here ...."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full h-14 border ${emailError ? "border-red-500" : "border-white"} rounded-lg bg-transparent outline-none text-white/70 px-5 text-lg`}
          />
          <p className="text-sm text-red-500">
            {emailError ? "Email is not correct." : ""}
        
          </p>
          <input
            type="password"
            placeholder="Password ...."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full h-14 border ${passwordError ? "border-red-600" : emailError  ?  "border-red-600" : "border-white"} rounded-lg bg-transparent outline-none text-white/70 px-5 text-lg`}
          />
          <p className="text-sm text-red-500">
            {passwordError ? " Password is not correct." : emailError  ?  "Password is not correct" : ""}
          </p>
          <button onClick={handleLogin} className="w-full bg-red-600 text-white text-lg h-10 outline-none border-none rounded-md font-montserrat hover:bg-red-700 transition-all">
            Login
          </button>
          
        </div>
      </div>
    </div>
  );
}
