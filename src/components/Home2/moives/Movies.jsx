import React from "react";
import Navbar from "../Navbar";
import ShowMoveComponet from "../ShowMoveComponet";

export default function Movies() {

	return (
		<div className="bg-black">
			<Navbar />
            <div className=" pt-28">
			<ShowMoveComponet />
            </div>
		</div>
	);
}
