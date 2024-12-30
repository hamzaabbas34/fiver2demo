import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

export default function SignStep2() {
	const [choosePlan, setChoosePlan] = useState(2);
	return (
		<div>
			<nav className="px-4 sm:px-8 py-8 flex justify-between items-center border-b border-black border-opacity-10">
				<h1 className="sm:text-3xl text-[20px] font-bold text-gray-500">MAGHANNMOVIE</h1>
				<p className=" font-montserrat text-[18px] font-medium">Signin</p>
			</nav>
			<div className="container pt-10">
				<span id="" class=" font-montserrat" data-uia="">
					STEP <b>2</b> OF <b>3</b>
				</span>
				<h1 className="font-montserrat font-semibold text-3xl">
					Choose the plan that’s right for you
				</h1>
				<div className="grid lg:grid-cols-4 grid-cols-1  md:grid-cols-3  2xl:gap-10 md:gap-5 gap-5 pt-10  font-montserrat ">
					<div
						onClick={() => setChoosePlan(1)}
						className=" p-2 border-black border-opacity-30 rounded-md  border">
						<div class="w-full rounded-md bg-gradient-to-tr from-red-600 to-blue-800 px-2 pt-3 pb-0 min-h-24 h-fit text-white">
							<h2 className=" font-medium text-[20px]">Mobile</h2>
							<p>480p</p>
							<div className="flex items-end justify-end">
								{choosePlan === 1 && (
									<Icon icon="lets-icons:check-fill" width="30" height="30" />
								)}
							</div>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium ">
								MontlyPrices
							</p>
							<p className="font-medium">1$</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								VedioQualty
							</p>
							<p className="font-medium">Fair</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								Resolution
							</p>
							<p className="font-medium">480p</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								Supported devices{" "}
							</p>
							<p className="font-medium">phone tablet</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								Download devices{" "}
							</p>
							<p className="font-medium">1</p>
						</div>
					</div>
					<div
						onClick={() => setChoosePlan(2)}
						className=" p-2 border-black border-opacity-30 rounded-md  border">
						<div class="w-full rounded-md bg-gradient-to-tr from-red-600 to-blue-800 px-2 pt-3 pb-0 min-h-24 h-fit text-white">
							<h2 className=" font-medium text-[20px]">Basic</h2>
							<p>720p</p>
							<div className="flex items-end justify-end">
								{choosePlan === 2 && (
									<Icon icon="lets-icons:check-fill" width="30" height="30" />
								)}
							</div>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium ">
								MontlyPrices
							</p>
							<p className="font-medium">1$</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								VedioQualty
							</p>
							<p className="font-medium">Fair</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								Resolution
							</p>
							<p className="font-medium">480p</p>
						</div>
						<div className="flex justify-between items-center py-2 w-full ">
							<p className=" w-[50%] text-[14px] text-black text-opacity-50 font-medium  ">
								Supported devices{" "}
							</p>
							<p className="font-medium w-[50%] text-right ">
								phone tablet + TV, computer,
							</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								{" "}
								Download devices{" "}
							</p>
							<p className="font-medium">1</p>
						</div>
					</div>
					<div
						onClick={() => setChoosePlan(3)}
						className=" p-2 border-black border-opacity-30 rounded-md  border">
						<div class="w-full rounded-md bg-gradient-to-tr from-red-600 to-blue-800 px-2 pt-3 pb-0 min-h-24 h-fit text-white">
							<h2 className=" font-medium text-[20px]">Standard</h2>
							<p>1080p</p>
							<div className="flex items-end justify-end">
								{choosePlan === 3 && (
									<Icon icon="lets-icons:check-fill" width="30" height="30" />
								)}
							</div>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium ">
								MontlyPrices
							</p>
							<p className="font-medium">1$</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								VedioQualty
							</p>
							<p className="font-medium">Fair</p>
						</div>
						<div className="flex justify-between items-center py-2 font-medium">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								Resolution
							</p>
							<p className="font-medium">480p</p>
						</div>
						<div className="flex justify-between items-center py-2 w-full ">
							<p className=" w-[50%] text-[14px] text-black text-opacity-50 font-medium  ">
								Supported devices{" "}
							</p>
							<p className="font-medium w-[50%] text-right ">
								phone tablet + TV, computer,
							</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p>Download devices </p>
							<p className="font-medium">1</p>
						</div>
					</div>
					<div
						onClick={() => setChoosePlan(4)}
						className=" p-2 border-black border-opacity-30 rounded-md  border">
						<div class="w-full rounded-md bg-gradient-to-tr from-red-600 to-blue-800 px-2 pt-3 pb-0 min-h-24 h-fit text-white">
							<h2 className=" font-medium text-[20px]">Premium </h2>
							<p>4K + HDR</p>
							<div className="flex items-end justify-end">
								{choosePlan === 4 && (
									<Icon icon="lets-icons:check-fill" width="30" height="30" />
								)}
							</div>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium ">
								MontlyPrices
							</p>
							<p className="font-medium">1$</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								VedioQualty
							</p>
							<p className="font-medium">Fair</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								Resolution
							</p>
							<p className="font-medium">480p</p>
						</div>
						<div className="flex justify-between items-center py-2 w-full ">
							<p className=" w-[50%] text-[14px] text-black text-opacity-50 font-medium  ">
								Supported devices{" "}
							</p>
							<p className="font-medium w-[50%] text-right ">
								phone tablet + TV, computer,
							</p>
						</div>
						<div className="flex justify-between items-center py-2">
							<p className="text-[14px] text-black text-opacity-50 font-medium  ">
								Download devices{" "}
							</p>
							<p className="font-medium">6</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container font-montserrat py-5">
				<p>
					HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
					to your internet service and device capabilities. Not all content is
					available in all resolutions. See our Terms of Use for more details.
					Only people who live with you may use your account. Watch on 4
					different devices at the same time with Premium, 2 with Standard, and
					1 with Basic and Mobile. Live events are included with any Netflix
					plan and contain ads.
				</p>
			</div>
		</div>
	);
}
