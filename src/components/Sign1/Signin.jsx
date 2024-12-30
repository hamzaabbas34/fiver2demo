// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Signin() {
// 	const location = useLocation();
// 	const email = location.state?.email;


// 	console.log(email, "src");
// 	return (
// 		<div className="relative flex justify-center items-center w-full h-screen  ">
// 			<nav className="  absolute top-0 w-full left-0  px-4 sm:px-8 py-8 flex justify-between items-center border-b border-black border-opacity-10">
// 				<h1 className="sm:text-3xl text-[20px] font-bold text-gray-500">
// 					MAGHANNMOVIE
// 				</h1>
// 				<p className=" font-montserrat text-[18px] font-medium">Signin</p>
// 			</nav>
// 			<div className="  w-full max-w-[460px] px-5">
// 				{/* <span id="" class=" font-montserrat" data-uia="">STEP <b>1</b> OF <b>2</b></span> */}
// 				<h1 class=" text-2xl font-montserrat font-medium py-2" data-uia="">
// 					Create a password to start your membership
// 				</h1>
// 				<p className=" font-montserrat ">
// 					Just a few more steps and you're done! We hate paperwork, too.
// 				</p>
// 				<input
// 					type="emial"
// 					name=""
// 					placeholder="Email"
//           value={email}
// 					id=""
// 					className="w-full font-montserrat outline-none rounded-md px-2 h-16 border border-gray-400 my-3"
// 				/>
// 				<input
// 					type="password"
// 					placeholder="Create Your password"
// 					name=""
// 					className=" w-full outline-none font-montserrat  rounded-md px-2 h-16 border border-gray-400"
// 					id=""
// 				/>
// 				<div className="flex justify- items- gap-4 py-4">
// 					<input type="checkbox" name="" id="" className=" w-8 " />
// 					<p className=" font-montserrat">
// 						Please do not email me MAGHANNMOVIE special offers.
// 					</p>
// 				</div>
// 				<Link to={"/home"}>
// 					<button className="w-full h-14 bg-red-600 text-white rounded-md">
// 						Next
// 					</button>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Signin() {
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromState = location.state?.email;

  const [email, setEmail] = useState(emailFromState || "");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Save to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="relative flex justify-center items-center w-full h-screen">
      <nav className="absolute top-0 w-full left-0 px-4 sm:px-8 py-8 flex justify-between items-center border-b border-black border-opacity-10">
        <h1 className="sm:text-3xl text-[20px] font-bold text-gray-500">
          MAGHANNMOVIE
        </h1>
        <p className="font-montserrat text-[18px] font-medium">Sign In</p>
      </nav>
      <div className="w-full max-w-[460px] px-5">
        <h1 className="text-2xl font-montserrat font-medium py-2">
          Create a password to start your membership
        </h1>
        <p className="font-montserrat">
          Just a few more steps and you're done! We hate paperwork, too.
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full font-montserrat outline-none rounded-md px-2 h-16 border border-gray-400 my-3"
        />
        <input
          type="password"
          placeholder="Create Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full outline-none font-montserrat rounded-md px-2 h-16 border border-gray-400"
        />
        <div className="flex gap-4 py-4">
          <input type="checkbox" className="w-8" />
          <p className="font-montserrat">
            Please do not email me MAGHANNMOVIE special offers.
          </p>
        </div>
        <button
          onClick={handleSignup}
          className="w-full h-14 bg-red-600 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
