// import React from 'react'
// import {useNavigate} from "react-router-dom"
// export default function Subscribe() {
//   const  navagte = useNavigate()
//   const navigateToSignin = (email) => {// Close the modal first
// 		setTimeout(() => {
// 			navagte("/videos", { state: { email } }); // Navigate to /videos
// 		}, 300); // Add a small delay to allow the modal animation to finish
// 	};
//   return (
//     <div className=' max-w-[500px] w-full mx-auto text-center py-3  px-8'>
//         <h2 className='py-8  myclass font-montserrat text-[19px] '>Ready to watch ? Enter your Email to create restart your membership</h2>
//         <div className="flex items-center justify-between gap-4  flex-wrap sm:flex-nowrap ">
//             <input type="text" className=' w-[100%]  md:w-[300px] font-montserrat   h-12 rounded-full px-4 border-white border-opacity-70 outline-none bg-gray-200 ' placeholder='Email Address' />
//             <button className='w-full  sm:w-[160px]   h-12 font-montserrat  px-0 bg-red-600 rounded-full  text-[14px]' >Get Start →</button>
//         </div>
//     </div>
//   )
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Subscribe() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		setError(""); // Clear any previous errors

		// Navigate to the videos page with the email state
		navigate("/signin", { state: { email } });
	};

	return (
		<div className="max-w-[500px] w-full mx-auto text-center py-3 px-8">
			<h2 className="py-8 font-montserrat text-[19px]">
				Ready to watch? Enter your Email to create or restart your membership
			</h2>
			<form
				onSubmit={handleFormSubmit}
				className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
				<div className="w-full">
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={`w-full md:w-[300px] font-montserrat text-black h-12 rounded-full px-4 border ${
							error ? "border-red-500" : "border-white"
						} border-opacity-70 outline-none bg-gray-200`}
						placeholder="Email Address"
					/>
				</div>
       
				<button
					type="submit"
					className=" w-[100%]   h-12 font-montserrat  px-0 bg-red-600 rounded-full  text-[14px] ">
					Get Started →
				</button>
			</form>
		</div>
	);
}
